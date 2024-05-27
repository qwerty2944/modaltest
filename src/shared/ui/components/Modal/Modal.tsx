'use client';

import { ReactNode, SyntheticEvent } from 'react';
import { cn } from '@/shared/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';
import { ModalType } from '@/shared/models/modal/types/modalTypes';
import { useModalStore } from '@/shared/models/modal/stores/modalStore';
import { createPortal } from 'react-dom';

const modalVariants = cva(
  'fixed inset-0 z-1000 flex flex-col items-center justify-center bg-black/50 backdrop-filter backdrop-blur-md',
  {
    variants: {
      // Define your modal variants if needed
    },
    defaultVariants: {
      // Define your default modal variants if needed
    },
  }
);

const modalHeaderVariants = cva('', {
  variants: {
    // Define your modal header variants if needed
  },
  defaultVariants: {
    // Define your default modal header variants if needed
  },
});

const modalContentVariants = cva('', {
  variants: {
    // Define your modal content variants if needed
  },
  defaultVariants: {
    // Define your default modal content variants if needed
  },
});

const modalFooterVariants = cva('', {
  variants: {
    // Define your modal footer variants if needed
  },
  defaultVariants: {
    // Define your default modal footer variants if needed
  },
});

interface ModalProps extends VariantProps<typeof modalVariants> {
  type: ModalType;
  hideOnClickOutside?: boolean;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Modal = ({
  type,
  hideOnClickOutside = false,
  children,
  className,
  style,
  ...props
}: ModalProps) => {
  const { openedModalTypes, closeModal } = useModalStore();
  const opened = openedModalTypes.includes(type);

  const stopPropagation = (e: SyntheticEvent) => e.stopPropagation();

  const handleHide = () => {
    closeModal(type);
  };

  return opened
    ? createPortal(
        <div
          className={cn(modalVariants(props), className)}
          style={style}
          onClick={hideOnClickOutside ? handleHide : undefined}
        >
          <div onClick={stopPropagation}>{children}</div>
        </div>,
        document.querySelector('#modalRoot')!
      )
    : null;
};

interface ModalHeaderProps extends VariantProps<typeof modalHeaderVariants> {
  children?: ReactNode;
  hide?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * 모달 헤더 컴포넌트
 * @param children - 모달 헤더 내부에 렌더링될 자식 요소
 * @param hide - 모달을 숨기는 함수 (선택적)
 */
const ModalHeader = ({
  children,
  hide,
  className,
  style,
  ...props
}: ModalHeaderProps) => {
  return (
    <div className={cn(modalHeaderVariants(props), className)} style={style}>
      {children}
    </div>
  );
};

interface ModalContentProps extends VariantProps<typeof modalContentVariants> {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * 모달 내용 컴포넌트
 * @param children - 모달 내용으로 렌더링될 자식 요소
 */
const ModalContent = ({
  children,
  className,
  style,
  ...props
}: ModalContentProps) => {
  return (
    <div className={cn(modalContentVariants(props), className)} style={style}>
      {children}
    </div>
  );
};

interface ModalFooterProps extends VariantProps<typeof modalFooterVariants> {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * 모달 푸터 컴포넌트
 * @param children - 모달 푸터 내부에 렌더링될 자식 요소
 */
const ModalFooter = ({
  children,
  className,
  style,
  ...props
}: ModalFooterProps) => {
  return (
    <div className={cn(modalFooterVariants(props), className)} style={style}>
      {children}
    </div>
  );
};

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export default Modal;
