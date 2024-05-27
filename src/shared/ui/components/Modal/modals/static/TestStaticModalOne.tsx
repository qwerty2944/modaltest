'use client';
import React from 'react';
import Modal from '../../Modal';
import { MODAL_TYPES } from '@/shared/models/modal/types/modalTypes';
import { useModalStore } from '@/shared/models/modal/stores/modalStore';

export const TestStaticModalOne: React.FC = () => {
  const { closeModal } = useModalStore();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // e.stopPropagation();
    closeModal(MODAL_TYPES.TEST_STATIC_MODAL_ONE);
  };

  return (
    <Modal type={MODAL_TYPES.TEST_STATIC_MODAL_ONE} hideOnClickOutside={true}>
      <div className='bg-white p-6 rounded-lg'>
        <Modal.Content>
          <p>This is a static modal one.</p>
        </Modal.Content>

        <Modal.Footer>
          <button onClick={handleClick}>OK</button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};
