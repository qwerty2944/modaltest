import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; // next/navigation에서 새로운 훅을 가져옵니다.
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Tkeys } from './model/types/Tkeys';

/**
 * 번역 객체의 타입 정의.
 */
type Translations = {
  [ns: string]: {
    [key: string]: string;
  };
};

/**
 * 주어진 언어에 대한 번역을 로드합니다.
 *
 * @param lng - 언어 코드.
 * @returns 번역 객체를 반환하는 프로미스.
 */
const getTranslations = async (lng: string): Promise<Translations> => {
  const translations: Translations = {};
  await Promise.all(
    Object.keys(Tkeys).map(async (ns) => {
      translations[ns] = await import(
        `../../../../public/locales/${lng}/${ns}.json`
      );
    })
  );
  return translations;
};

/**
 * 주어진 언어로 i18n을 초기화합니다.
 *
 * @param lng - 언어 코드.
 * @returns i18n이 초기화될 때 해결되는 프로미스.
 */
const initI18n = async (lng: string): Promise<void> => {
  const resources = { [lng]: await getTranslations(lng) };
  await i18next.use(initReactI18next).init({
    resources,
    lng,
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false,
    },
  });
};

/**
 * 경로에서 언어를 추출하고 설정합니다.
 *
 * @param pathname - 현재 경로.
 * @param setLng - 언어를 설정하는 함수.
 * @returns 추출된 언어 코드.
 */
const setLanguageFromPathname = (
  pathname: string,
  setLng: (lng: string | null) => void
): string => {
  const currentLng = pathname.split('/')[1];
  setLng(currentLng);
  return currentLng;
};

/**
 * 번역을 초기화합니다.
 *
 * @param pathname - 현재 경로.
 * @param setLng - 언어를 설정하는 함수.
 * @param setIsInitialized - 초기화 상태를 설정하는 함수.
 */
const initializeTranslations = async (
  pathname: string,
  setLng: (lng: string | null) => void,
  setIsInitialized: (initialized: boolean) => void
): Promise<void> => {
  if (typeof window !== 'undefined') {
    const currentLng = setLanguageFromPathname(pathname, setLng);
    if (typeof currentLng === 'string') {
      await initI18n(currentLng);
      setIsInitialized(true);
    }
  }
};

/**
 * 현재 경로의 언어에 따라 번역을 처리하는 커스텀 훅.
 *
 * @returns 번역 함수와 초기화 상태를 포함하는 객체.
 */
const useCustomTranslation = () => {
  const pathname = usePathname(); // next/navigation에서 새로운 훅을 사용합니다.
  const [isInitialized, setIsInitialized] = useState(false);
  const [lng, setLng] = useState<string | null>(null);

  useEffect(() => {
    initializeTranslations(pathname, setLng, setIsInitialized);
  }, [pathname]);

  /**
   * 주어진 키를 현재 언어로 번역합니다.
   *
   * @param key - 번역할 키.
   * @returns 번역된 문자열 또는 초기화되지 않은 경우 빈 문자열.
   */
  const translate = (key: string): string => {
    if (!isInitialized || !lng) {
      return ''; // 번역이 초기화되지 않은 경우 빈 문자열을 반환합니다.
    }

    const [namespace, actualKey] = key.split('.');
    const translations = i18next.getResourceBundle(lng, namespace);
    return translations?.[actualKey] || key;
  };

  return { t: translate, isInitialized };
};

export default useCustomTranslation;
