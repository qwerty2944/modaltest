'use client';
import React from 'react';
import { useModalStore } from '../models/modal/stores/modalStore';
import {
  MODAL_TYPES,
  ModalProps,
  ModalType,
} from '../models/modal/types/modalTypes';
import { TestDynamicModalOne } from '../ui/components/Modal/modals/dynamic/TestDynamicModalOne';
import { TestDynamicModalTwo } from '../ui/components/Modal/modals/dynamic/TestDyamicModalTwo';
import { TestStaticModalOne } from '../ui/components/Modal/modals/static/TestStaticModalOne';
import { TestStaticModalTwo } from '../ui/components/Modal/modals/static/TestStaticModalTwo';

export const ModalProvider: React.FC = () => {
  const { openedModalTypes, modalProps, closeModal } = useModalStore();

  const renderModal = (modalName: ModalType) => {
    switch (modalName) {
      case MODAL_TYPES.TEST_DYNAMIC_MODAL_ONE:
        return (
          <TestDynamicModalOne
            {...(modalProps as ModalProps<
              typeof MODAL_TYPES.TEST_DYNAMIC_MODAL_ONE
            >)}
          />
        );
      case MODAL_TYPES.TEST_DYNAMIC_MODAL_TWO:
        return (
          <TestDynamicModalTwo
            {...(modalProps as ModalProps<
              typeof MODAL_TYPES.TEST_DYNAMIC_MODAL_TWO
            >)}
          />
        );
      case MODAL_TYPES.TEST_STATIC_MODAL_ONE:
        return <TestStaticModalOne />;
      case MODAL_TYPES.TEST_STATIC_MODAL_TWO:
        return <TestStaticModalTwo />;
      default:
        return null;
    }
  };

  return <>{openedModalTypes.map(renderModal)}</>;
};
