import { ModalProps, ModalState, ModalType } from '../types/modalTypes';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

// 초기 상태 정의
const initialState: ModalState = {
  openedModalTypes: [],
  modalProps: {},
};

/**
 * @interface ModalActions
 * 모달 상태를 변경하는 액션들을 정의한 인터페이스입니다.
 */
interface ModalActions {
  openModal: <T extends ModalType>(
    modalName: T,
    modalProps?: ModalProps<T>
  ) => void;
  closeModal: (modalName: ModalType) => void;
  closeAllModals: () => void;
}

/**
 * @interface ModalStore
 * ModalState와 ModalActions를 합친 인터페이스입니다.
 * 이 인터페이스는 zustand 스토어의 타입을 정의합니다.
 */
interface ModalStore extends ModalState, ModalActions {}

/**
 * @function useModalStore
 * 모달 상태를 관리하는 zustand 스토어를 생성합니다.
 * immer 미들웨어를 사용하여 불변성을 관리하고, devtools 미들웨어를 사용하여 디버깅을 용이하게 합니다.
 * @returns {ModalStore} - 모달 상태와 액션들을 포함한 zustand 스토어
 */
export const useModalStore = create<ModalStore>()(
  devtools(
    immer((set) => ({
      ...initialState,
      /**
       * @function openModal
       * 특정 타입의 모달을 엽니다.
       * @param {ModalType} modalName - 열고자 하는 모달의 이름
       * @param {ModalProps<T>} modalProps - 모달에 전달할 속성 값들
       */
      openModal: (modalName, modalProps) => {
        set((state) => {
          if (!state.openedModalTypes.includes(modalName)) {
            state.openedModalTypes.push(modalName);
            state.modalProps[modalName] = modalProps;
          }
        });
      },
      /**
       * @function closeModal
       * 특정 타입의 모달을 닫습니다.
       * @param {ModalType} modalName - 닫고자 하는 모달의 이름
       */
      closeModal: (modalName) => {
        set((state) => {
          state.openedModalTypes = state.openedModalTypes.filter(
            (type) => type !== modalName
          );
          delete state.modalProps[modalName];
        });
      },
      /**
       * @function closeAllModals
       * 모든 모달을 닫습니다.
       */
      closeAllModals: () => {
        set((state) => {
          state.openedModalTypes = [];
          state.modalProps = {};
        });
      },
    }))
  )
);
