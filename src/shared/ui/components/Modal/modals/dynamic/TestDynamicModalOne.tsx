'use client';
import React from 'react';
import Modal from '../../Modal';
import { MODAL_TYPES } from '@/shared/models/modal/types/modalTypes';

interface TestDynamicModalOneProps {
  text: string;
}

export const TestDynamicModalOne: React.FC<TestDynamicModalOneProps> = ({
  text,
}) => {
  return (
    <Modal type={MODAL_TYPES.TEST_DYNAMIC_MODAL_ONE}>
      <Modal.Content>
        <p>{text}</p>
      </Modal.Content>
      <Modal.Footer>
        <button>Close</button>
      </Modal.Footer>
    </Modal>
  );
};
