import React from 'react';
import dynamic from 'next/dynamic';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/utils/cn';

// framer-motion을 동적 임포트
const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
);

// Define CVA styles
const containerStyles = cva('w-208pxr');
const labelStyles = cva(
  'relative z-20 top-20pxr transform -translate-y-full flex justify-center'
);
const graphContainerStyles = cva('relative bottom-0 w-full h-6');
const barStyles = cva('h-6 absolute left-1/2', {
  variants: {
    background: {
      positive:
        'bg-[#DDEDE7] rounded-tl-sm rounded-bl-sm border border-[#2C7551]',
      negative:
        'bg-[#FEF1F0] rounded-tr-sm rounded-br-sm border border-[#DB9384]',
    },
  },
});

/**
 * @typedef BidirectionalTimeComparatorProps
 * @property {number} value - 현재 값. 양수 또는 음수일 수 있으며 그래프의 길이와 방향을 결정합니다.
 * @property {number} average - 평균 값. 라벨에 표시됩니다.
 */
type BidirectionalTimeComparatorProps = {
  value: number;
  average: number;
} & VariantProps<typeof barStyles>;

/**
 * `BidirectionalTimeComparator` 컴포넌트는 값에 따라 양방향으로 변화하는 그래프를 표시합니다.
 *
 * @param {BidirectionalTimeComparatorProps} props - 컴포넌트의 프롭스
 * @returns {JSX.Element} - `BidirectionalTimeComparator` 컴포넌트의 JSX 요소
 */
const BidirectionalTimeComparator: React.FC<
  BidirectionalTimeComparatorProps
> = ({ value, average }) => {
  const isNegative = value < 0; // 값이 음수인지 확인
  const barWidth = Math.abs(value) > 100 ? 100 : Math.abs(value); // 그래프의 너비를 설정, 최대 100%로 제한

  return (
    <div className={cn(containerStyles())}>
      <MotionDiv
        className='flex items-center justify-center relative z-20'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* "평균: {average}초" 라벨을 보여주는 UI 요소 */}
        <div className={cn(labelStyles())}>
          <div className='bg-neutral-500 rounded-2xl px-2 shadow-lg max-w-300pxr'>
            <span className='text-xs text-white'>평균: {average}초</span>
            <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[80%] w-0 h-0 border-t-[12px] border-t-neutral-500 border-x-[8px] border-x-transparent' />
          </div>
        </div>
      </MotionDiv>
      {/* 그래프를 그리는 UI 요소 */}
      <div className={cn(graphContainerStyles())}>
        <div className='absolute w-full h-6 bg-[#FAFAFA] rounded-tl-sm rounded-bl-sm border border-[#F1F1F1]' />
        <MotionDiv
          className={cn(
            barStyles({ background: isNegative ? 'negative' : 'positive' })
          )}
          initial={{ width: '0%', left: '50%' }}
          animate={{
            width: `${barWidth}%`,
            left: isNegative ? `${50 - barWidth}%` : '50%',
          }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </div>
  );
};

export default BidirectionalTimeComparator;
