import { px } from 'framer-motion';
import type { Config } from 'tailwindcss';
import { PluginAPI, RecursiveKeyValuePair } from 'tailwindcss/types/config';
const plugin = require('tailwindcss/plugin');

// pxToRem 함수 정의
const pxToRem = (px: number) => `${px / 16}rem`;

const generatePxrSpacing = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => i + start).reduce(
    (acc, px) => {
      acc[`${px}pxr`] = pxToRem(px);
      return acc;
    },
    {} as { [key: string]: string }
  );

const pxrSpacingWithNegative = generatePxrSpacing(-999, 999);
const pxrSpacingPositive = generatePxrSpacing(0, 999);

const config: Config = {
  corePlugins: {
    preflight: true,
  },
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  safelist: ['w-7', 'h-7', 'w-5', 'h-5'],
  theme: {
    /**
     * @property {object} screens - 반응형 디자인을 위한 미디어 쿼리 브레이크포인트를 정의합니다.
     */
    screens: {
      /**
       * @property {'360px'} mobile - 모바일 디바이스를 위한 최소 너비를 정의합니다.
       * @remarks
       * 360px는 많은 스마트폰에서 널리 사용되는 스크린 너비입니다. 이 설정을 사용하면 360px 이상의 너비에서 적용될 스타일을 정의할 수 있습니다.
       * @example
       * // Tailwind CSS에서 mobile 브레이크포인트 사용 예시
       * `<div className="mobile:bg-blue-500">This div will have a blue background</div>`
       */
      foldable: '280px', // @media (min-width: 280px)
      mobile: '360px', // @media (min-width: 360px)
      tablet: '768px', // @media (min-width: 768px)
      'under-foldable': { max: '279px' }, // @media (max-width: 279px)
      'under-mobile': { max: '359px' }, // @media (max-width: 359px)
      'under-tablet': { max: '767px' }, // @media (max-width: 767px)
    },
    extend: {
      spacing: pxrSpacingWithNegative,
      width: pxrSpacingWithNegative,
      height: pxrSpacingWithNegative,
      margin: pxrSpacingWithNegative,
      padding: pxrSpacingWithNegative,
      inset: pxrSpacingWithNegative,
      borderWidth: pxrSpacingPositive,
      borderRadius: pxrSpacingPositive,
      maxHeight: pxrSpacingPositive,
      maxWidth: pxrSpacingPositive,
    },
  },

  /**
   * @property {object} config.purge - 불필요한 CSS를 제거하는 설정을 정의합니다.
   * safelist에 지정된 클래스는 CSS 정리 과정에서 보존됩니다.
   * @remarks
   * 이 옵션은 빌드 시간을 최적화하고 최종 번들의 크기를 줄이는 데 도움을 줍니다.
   * 조건부 렌더링 로직에 따라 클래스가 동적으로 추가되는 경우, 클래스가 실제로 사용되지 않더라도 safelist에 포함시켜야 합니다.
   * 예를 들어, 반응형 디자인이나 상태에 따른 스타일 변화에 유틸리티 클래스를 사용하는 경우, 이러한 클래스들을 safelist에 추가하는 것이 중요합니다.
   *
   */
};
export default config;
