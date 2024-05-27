/**
 * 주어진 URL 패턴을 정규 표현식으로 변환하는 함수
 *
 * 이 함수는 URL 패턴에서 특정 동적 세그먼트를 정규 표현식으로 변환합니다.
 * '[lng]'는 'ko' 또는 'en' 중 하나로 변환되며, '[index]'와 '[questionIndex]'는 숫자(\\d+)로 변환됩니다.
 * '[studentId]'와 '[resultId]'는 문자열(\\w+)로 변환됩니다.
 * 그 외의 세그먼트는 그대로 사용됩니다.
 *
 * @param {string} pattern - 변환할 URL 패턴 문자열
 * @returns {string} - 변환된 정규 표현식 문자열
 *
 * @example
 * const regex = convertToRegex('/[lng]/path/[index]/details/[questionIndex]');
 * // 결과: ^/(ko|en)/path/\\d+/details/\\d+/?$
 *
 * const regexWithIds = convertToRegex('/students/[studentId]/results/[resultId]');
 * // 결과: ^/students/\\w+/results/\\w+/?$
 */
export function convertToRegex(pattern: string): string {
  const segments = pattern.split('/');
  const regexParts = segments.map((segment) => {
    if (segment === '[lng]') {
      return '(ko|en)';
    } else if (segment === '[index]' || segment === '[questionIndex]') {
      return '\\d+';
    } else if (segment === '[studentId]' || segment === '[resultId]') {
      return '\\w+';
    } else {
      return segment;
    }
  });
  return `^/${regexParts.join('/')}/?$`;
}
