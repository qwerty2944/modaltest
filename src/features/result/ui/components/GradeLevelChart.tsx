'use client';

import React from 'react';
import { cn } from '@/shared/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';

export const GradeLevelChartVariants = cva('relative', {
  variants: {
    size: {
      default: 'tablet:w-760pxr',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

interface GradeLevelChartProps
  extends VariantProps<typeof GradeLevelChartVariants> {
  className?: string;
  style?: React.CSSProperties;
  selectedIndex: number;
}

const scores = [
  190, 380, 570, 760, 950, 1140, 1330, 1520, 1710, 1900, 2090, 2280, 2470,
];
const levels = [
  1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0,
];
const grades = [
  'P',
  '초1',
  '초2',
  '초3',
  '초4',
  '초5',
  '초6',
  '중1',
  '중2',
  '중3',
  '고1',
  '고2',
  '고3',
];

const GradeLevelChart: React.FC<GradeLevelChartProps> = ({
  className,
  style,
  selectedIndex,
  ...props
}) => {
  return (
    <div className={cn(GradeLevelChartVariants(), className)} style={style}>
      <div className='grid grid-cols-10 grid-rows-3 gap-4 p-4'>
        {/* 점수 헤더 */}
        <div className='col-span-1 p-2 text-center text-xs font-bold'>점수</div>
        {/* 현재 선택된 점수 */}
        <div className='col-span-1 p-2 text-center text-xs'>
          {scores[selectedIndex]}
        </div>
        {/* 점수 및 레벨 표시 영역 */}
        <div className='col-span-8 row-span-3 p-2 text-center relative'>
          <div className='flex items-center w-full h-full'>
            {[...Array(13)].map((_, index, arr) => (
              <React.Fragment key={index}>
                <div className='flex-1 flex items-center justify-between flex-col h-full'>
                  {/* 점수 표시 */}
                  <div
                    className={`text-xs font-["Pretendard"] ${
                      index === selectedIndex ? 'font-bold' : ''
                    }`}
                  >
                    {scores[index]}
                  </div>
                  {/* 레벨 원형 표시 */}
                  <div className='relative flex items-center justify-center'>
                    <div
                      className={`w-${index === selectedIndex ? '7' : '5'} h-${
                        index === selectedIndex ? '7' : '5'
                      } rounded-full ${
                        index === selectedIndex ? 'bg-green-700' : 'bg-gray-200'
                      }`}
                    />
                    {/* 레벨 번호 표시 */}
                    <div
                      className={`absolute text-center text-xs font-medium font-['Pretendard'] ${
                        index === selectedIndex
                          ? 'text-white leading-none'
                          : 'text-black leading-3'
                      }`}
                    >
                      {index + 1}
                    </div>
                    {/* 선택된 레벨 텍스트 표시 */}
                    {index === selectedIndex && (
                      <div className="absolute top-[30px] text-center text-green-700 text-[7px] font-semibold font-['Pretendard']">
                        진단 레벨
                      </div>
                    )}
                  </div>
                  {/* 학년 표시 */}
                  <div
                    className={`text-[12px] font-["Pretendard"] text-center ${
                      index === selectedIndex ? 'font-bold' : ''
                    }`}
                  >
                    {grades[index]}
                  </div>
                </div>
                {/* 점수를 연결하는 선 */}
                {index < arr.length - 1 && (
                  <div
                    className='flex-auto bg-gray-200 h-1'
                    style={{ minWidth: '2px' }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* 레벨 헤더 */}
        <div className='col-span-1 p-2 text-center text-xs font-bold'>레벨</div>
        {/* 현재 선택된 레벨 */}
        <div className='col-span-1 p-2 text-center text-xs'>
          {levels[selectedIndex]}
        </div>
        {/* 학년 헤더 */}
        <div className='col-span-1 p-2 text-center text-xs font-bold'>학년</div>
        {/* 현재 선택된 학년 */}
        <div className='col-span-1 p-2 text-center text-xs'>
          {grades[selectedIndex]}
        </div>
      </div>
    </div>
  );
};

export default GradeLevelChart;
