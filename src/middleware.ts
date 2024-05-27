import { NextRequest, NextResponse } from 'next/server';

import { Constants } from '@/shared/models/common/constants/constants';
import { convertToRegex } from '@/shared/utils/convertToRegex';
import { updateSession } from '@/shared/libs/supabase/updateSession';

/**
 * RegexMap 인터페이스는 객체를 인덱싱하기 위한 인덱스 시그니처가 포함된 타입을 정의합니다.
 * 인덱스 시그니처는 객체의 속성 이름과 값의 타입을 지정하는 방법입니다.
 * 이 경우, 객체의 속성 이름은 문자열이고 값의 타입도 문자열입니다.
 *
 * 예를 들어, 다음과 같이 RegexMap 타입의 객체를 생성할 수 있습니다:
 * ```
 * const myRegexMap: RegexMap = {
 *   '[lng]': '^/(ko|en)/?$',
 *   '[lng]/test': '^/(ko|en)/test/?$'
 * };
 * ```
 * 이렇게 생성된 객체는 동적으로 속성을 추가하거나 접근할 수 있습니다.
 * ```
 * myRegexMap['[lng]/result'] = '^/(ko|en)/result/?$';
 * console.log(myRegexMap['[lng]']); // '^/(ko|en)/?$'
 * ```
 *
 * 인덱스 시그니처를 사용하면 객체의 속성 이름을 동적으로 지정할 수 있어 유연성이 증가합니다.
 * 특히 정규식 패턴을 키로 사용하고 해당 패턴에 매칭되는 정규식을 값으로 가지는 객체를 다룰 때 유용합니다.
 */
interface RegexMap {
  [key: string]: string;
}

/**
 * regexMap 변수는 RegexMap 타입의 객체로 초기화됩니다.
 * 이 객체는 URL 패턴을 키로, 해당 패턴을 정규식으로 변환한 문자열을 값으로 가집니다.
 */
const regexMap: RegexMap = {};

/**
 * urlList는 접근 가능한 URL 패턴의 배열입니다.
 * 각 패턴에는 [lng]와 [index]라는 동적인 부분이 포함되어 있습니다.
 */
const urlList = [
  '[lng]',
  '[lng]/test',
  '[lng]/test/diagnosis/intro',
  '[lng]/test/diagnosis/question/[index]',
  '[lng]/test/word/intro',
  '[lng]/test/word/question/[index]',
  '[lng]/test/passage/intro',
  '[lng]/test/passage/question/[index]/[questionIndex]',
  '[lng]/result/[studentId]/[resultId]',
  '[lng]/report',
];

/**
 * urlList의 각 패턴을 순회하면서 convertToRegex 함수를 사용하여 정규식으로 변환하고,
 * 변환된 정규식을 regexMap 객체에 저장합니다.
 * 이때 패턴을 키로, 변환된 정규식을 값으로 사용합니다.
 */
urlList.forEach((pattern) => {
  regexMap[pattern] = convertToRegex(pattern);
});

/**
 * middleware 함수는 Next.js에서 제공하는 미들웨어 기능을 구현한 함수입니다.
 * 요청(request)을 인자로 받아 처리하고, 응답(response)을 반환합니다.
 *
 * @param request 미들웨어가 처리할 요청(NextRequest) 객체
 * @returns 미들웨어 처리 후 반환할 응답(NextResponse) 객체
 */
export async function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;

  // 가장 최근에 성공한 언어를 쿠키에서 가져옵니다.
  const cookies = request.cookies;
  const lastSuccessfulLanguage =
    cookies.get(Constants.COOKIE_NAME)?.value || Constants.DEFAULT_LANGUAGE;

  // urlList에서 정의된 URL 패턴에 해당하는지 확인
  const isAllowed = Object.values(regexMap).some((regex) =>
    new RegExp(regex).test(url)
  );

  if (isAllowed) {
    // 허용된 URL인 경우 쿠키에 성공한 언어를 저장하고 다음 미들웨어나 페이지로 이동
    // const response = NextResponse.next();
    const response = await updateSession(request);
    response.cookies.set(Constants.COOKIE_NAME, url.split('/')[1]);
    return response;
  } else {
    // 허용되지 않은 URL인 경우 리다이렉트할 경로를 설정합니다.
    const redirectPath = `/${lastSuccessfulLanguage}`;

    // 현재 URL이 리다이렉트할 경로와 다른 경우에만 리다이렉트 수행
    if (url !== redirectPath) {
      const redirectUrl = new URL(redirectPath, request.url);
      return NextResponse.redirect(redirectUrl);
    } else {
      // 현재 URL이 리다이렉트할 경로와 같은 경우 다음 미들웨어나 페이지로 이동
      // const response = NextResponse.next();
      const response = await updateSession(request);
      return response;
    }
  }
}

/**
 * config 객체는 미들웨어의 동작을 설정하는 객체입니다.
 * matcher 속성은 미들웨어가 적용될 경로를 정규식으로 지정합니다.
 * 이 경우, /api, /_next/static, /_next/image, /favicon.ico를 제외한 모든 경로에 미들웨어가 적용됩니다.
 */
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$|favicon.ico).*)'],
};
