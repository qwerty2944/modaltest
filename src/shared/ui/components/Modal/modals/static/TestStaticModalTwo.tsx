'use client';
import React from 'react';
import Modal from '../../Modal';
import { MODAL_TYPES } from '@/shared/models/modal/types/modalTypes';

export const TestStaticModalTwo: React.FC = () => {
  return (
    <Modal type={MODAL_TYPES.TEST_STATIC_MODAL_TWO}>
      <Modal.Content>
        <p>This is a static modal two.</p>
      </Modal.Content>
      <Modal.Footer>
        <button>OK</button>
      </Modal.Footer>
    </Modal>
  );
};
