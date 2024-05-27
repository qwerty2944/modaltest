// modalTypes.ts

/**
 * @constant MODAL_TYPES
 * 모달의 타입들을 상수로 정의합니다.
 */
export const MODAL_TYPES = {
  TEST_DYNAMIC_MODAL_ONE: 'TEST_DYNAMIC_MODAL_ONE',
  TEST_DYNAMIC_MODAL_TWO: 'TEST_DYNAMIC_MODAL_TWO',
  TEST_STATIC_MODAL_ONE: 'TEST_STATIC_MODAL_ONE',
  TEST_STATIC_MODAL_TWO: 'TEST_STATIC_MODAL_TWO',
} as const;

/**
 * @typedef {MODAL_TYPES[keyof typeof MODAL_TYPES] | null} ModalType
 * 모달 타입의 타입 정의. MODAL_TYPES 객체의 값들이나 null 값을 가질 수 있습니다.
 */
export type ModalType = (typeof MODAL_TYPES)[keyof typeof MODAL_TYPES];

export type TestDynamicModalOneProps = {
  text: string;
};

export type TestDynamicModalTwoProps = {
  title: string;
  message: string;
};

export type TestStaticModalOneProps = {};

export type TestStaticModalTwoProps = {};

export type ModalProps<T extends ModalType> =
  T extends typeof MODAL_TYPES.TEST_DYNAMIC_MODAL_ONE
    ? TestDynamicModalOneProps
    : T extends typeof MODAL_TYPES.TEST_DYNAMIC_MODAL_TWO
    ? TestDynamicModalTwoProps
    : T extends typeof MODAL_TYPES.TEST_STATIC_MODAL_ONE
    ? TestStaticModalOneProps
    : T extends typeof MODAL_TYPES.TEST_STATIC_MODAL_TWO
    ? TestStaticModalTwoProps
    : never;

/**
 * @interface ModalState
 * 모달 상태를 정의하는 인터페이스입니다.
 * @property {ModalType[]} openedModalTypes - 열려 있는 모달 타입들의 배열
 * @property {Partial<Record<ModalType, unknown>>} modalProps - 각 모달 타입에 해당하는 속성 값들을 저장하는 객체
 */
export interface ModalState {
  openedModalTypes: ModalType[];
  modalProps: Partial<Record<ModalType, unknown>>;
}
