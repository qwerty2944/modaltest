/**
 * 단계를 나타내는 상수 객체입니다.
 * @readonly
 * @enum {string}
 */
export const Phase = {
  Intro: 'intro',
  Diagnosis: 'diagnosis',
  Word: 'word',
} as const;

export type TPhase = (typeof Phase)[keyof typeof Phase];

/**
 * 방향을 나타내는 상수 객체입니다.
 * @readonly
 * @enum {string}
 */
export const Direction = {
  Horizontal: 'horizontal',
  Vertical: 'vertical',
} as const;

export type TDirection = (typeof Direction)[keyof typeof Direction];
