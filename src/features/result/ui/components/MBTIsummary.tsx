import { twMerge } from 'tailwind-merge';
import React from 'react';

type Props = {
  user: { name: string; age: string };
  /** MBTI 유형 */
  mbti: string;
  /** MBTI 유형에 대한 설명 */
  description: string;
  className?: string;
  style?: React.CSSProperties;
};

/** 결과 페이지 맨 위에 있는 유형소개 컴포넌트 */
export default function MBTIsummary({
  user,
  mbti,
  description,
  className,
  style,
}: Props) {
  return (
    <div className={twMerge('flex items-center gap-4', className)}>
      {/* 스크린샷 이슈때문에 끔 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={'/assets/mbti.png'}
        style={{ display: 'flex' }}
        alt='MBTI icon'
      />
      <div className='flex flex-col items-stretch justify-between'>
        <h1 className='foldable:text-[14px] tablet:text-[16px] text-black'>
          {user.age}의 {user.name}
        </h1>
        <div>
          <h2 className='foldable:text-[10px] tablet:text-[14px] text-black'>
            문해력 코드는: {mbti}
          </h2>
          <p className='foldable:text-[10px] tablet:text-[14px] text-black'>
            문해력 유형은: {description}
          </p>
        </div>
      </div>
    </div>
  );
}
