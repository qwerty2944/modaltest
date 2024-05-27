'use client';

import { Direction, Spacer } from '@/shared/ui/components/Spacer';
import React from 'react';

const ResultPage3Content: React.FC = () => {
  return (
    <div className='flex flex-row h-full text-black'>
      {/* 좌측 패딩 */}
      <Spacer direction={Direction.Horizontal} percentage={4} />

      {/* 주요 콘텐츠 영역 */}
      <div className='flex-1 flex flex-col'>
        <div className='flex-[8]'>
          {/* 첫 번째 섹션 */}
          <Spacer direction={Direction.Vertical} percentage={25} />
          <header>
            <h1 className='tablet:text-[12px]'>READ(리드)-CAT 진단 보고서</h1>
          </header>
        </div>
        <div className='flex-[13] flex-col'>
          {/* 두 번째 섹션 */}
          <div className='flex flex-row items-end'>
            <span className='font-bold tablet:text-[24px] mr-1'>지식 습득</span>
            <span>(Knowledge Acquisition)</span>
          </div>
          <div className='flex flex-col px-4 h-full bg-white'>
            <Spacer direction={Direction.Vertical} percentage={5} />
            <div className='bg-red-100 leading-relaxed'>
              <span className='font-bold'>지식 습득</span>은 문제 풀이의 첫번째
              단계에요. 효율적인 <span className='font-bold'>지식 습득</span>
              이란 가장 빠르게 많은 양의 지식조각을 머리에 입력하는 것을
              의미해요. 지식조각은 어휘, 맥락, 표현 등 글의 개별 구성요소 또는
              연관된 의미를 갖는 구성요소를 뜻해요. 대표적으로{' '}
              <span className='text-red-500'>스킴</span>과{' '}
              <span className='text-green-500'>스캔</span>
              기술을 통해 효율적인 지식 습득이 가능하며 두 기술을 때에 맞게
              적절히 사용할 수 있는 능력이 필요해요.
            </div>
          </div>
        </div>
        <div className='flex-[53]  bg-white rounded-lg border flex flex-col'>
          {/* 세 번째와 네 번째 섹션을 묶어서 */}
          <div className='flex-[19] bg-red-400 rounded-lg'>
            <div className='h-full flex '>념념3</div>
          </div>
          <div className='flex-[34] bg-blue-500 rounded-lg'>
            <div className='h-full flex '>ㅋㅋ3</div>
          </div>
        </div>
        <Spacer direction={Direction.Vertical} percentage={4} />
      </div>

      {/* 우측 패딩 */}
      <Spacer direction={Direction.Horizontal} percentage={4} />
    </div>
  );
};

export default ResultPage3Content;
