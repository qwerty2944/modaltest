// shared/components/modals/TestDynamicModalTwo.tsx
'use client';
import React from 'react';
import Modal from '../../Modal';
import { MODAL_TYPES } from '@/shared/models/modal/types/modalTypes';

interface TestDynamicModalTwoProps {
  title: string;
  message: string;
}

export const TestDynamicModalTwo: React.FC<TestDynamicModalTwoProps> = ({
  title,
  message,
}) => {
  return (
    <Modal type={MODAL_TYPES.TEST_DYNAMIC_MODAL_TWO}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content>
        <p>{message}</p>
      </Modal.Content>
      <Modal.Footer>
        <button>Close</button>
      </Modal.Footer>
    </Modal>
  );
};
