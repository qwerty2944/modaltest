import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/utils/cn';
import { Direction, TDirection } from '@/shared/models/common/types/type';
import { PercentageAndPixelsUsedTogetherError } from '@/shared/errors/errors';

/**
 * Spacer 컴포넌트의 다양한 변형을 정의합니다.
 */
const spacerVariants = cva('', {
  variants: {
    direction: {
      [Direction.Horizontal]: 'w-full',
      [Direction.Vertical]: 'h-full',
    },
  },
});

/**
 * Spacer 컴포넌트의 props 타입을 정의합니다.
 * @typedef {object} SpacerProps
 * @property {number} [percentage] - Spacer의 크기를 백분율로 지정합니다. (pixels와 동시에 사용할 수 없습니다.)
 * @property {number} [pixels] - Spacer의 크기를 픽셀로 지정합니다. (percentage와 동시에 사용할 수 없습니다.)
 * @property {string} [className] - 추가적인 클래스명을 지정할 수 있습니다.
 * @property {TDirection} direction - Spacer의 방향을 지정합니다.
 */
interface SpacerProps extends VariantProps<typeof spacerVariants> {
  percentage?: number;
  pixels?: number;
  className?: string;
  direction: TDirection;
}

/**
 * Spacer 컴포넌트는 레이아웃에서 빈 공간을 제공하기 위해 사용됩니다.
 * @param {SpacerProps} props - Spacer 컴포넌트의 props
 * @returns {JSX.Element} Spacer 요소
 */
const Spacer: React.FC<SpacerProps> = ({
  direction,
  percentage,
  pixels,
  className,
}) => {
  if (percentage !== undefined && pixels !== undefined) {
    throw new PercentageAndPixelsUsedTogetherError();
  }

  const style = {
    [direction === Direction.Horizontal ? 'width' : 'height']:
      percentage !== undefined ? `${percentage}%` : `${pixels}px`,
  };

  return (
    <div
      className={cn(spacerVariants({ direction, className }))}
      style={style}
    />
  );
};

export default Spacer;
