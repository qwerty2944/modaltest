import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * clsx를 사용하여 클래스 이름을 결합하고 twMerge를 사용하여 Tailwind CSS 유틸리티 충돌을 처리합니다.
 *
 * @param inputs - 문자열, 객체, 또는 클래스 이름을 나타내는 배열을 포함할 수 있는 클래스 값의 배열입니다.
 *                 각 입력은 단일 클래스 이름, 클래스 이름을 키로 조건을 값으로 가진 객체, 또는 중첩 배열일 수 있습니다.
 *
 * @returns Tailwind CSS에 최적화된 최종 클래스 문자열을 반환합니다. 유틸리티 클래스 간의 충돌을 해결하여
 *          하나의 문자열로 병합된 클래스 이름을 제공합니다.
 *
 * @example
 * // "bg-blue-500 text-white hover:bg-blue-700" 반환
 * cn('text-white', 'hover:bg-blue-700', 'bg-blue-500');
 *
 * @example
 * // 조건부 클래스 사용 예
 * cn('text-white', { 'bg-blue-500': isBlue, 'bg-red-500': !isBlue });
 *
 * @example
 * // 잠재적인 충돌이 있는 클래스 병합
 * cn('p-4', 'pt-8', 'hover:p-2'); // 함수가 충돌을 해결합니다.
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
