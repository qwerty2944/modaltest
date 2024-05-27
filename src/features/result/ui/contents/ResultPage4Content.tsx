'use client';

import { Direction, Spacer } from '@/shared/ui/components/Spacer';
import React from 'react';

const ResultPage4Content: React.FC = () => {
  return (
    <div className='flex flex-row h-full text-black'>
      {/* 좌측 패딩 */}
      <Spacer direction={Direction.Horizontal} percentage={4} />

      {/* 주요 콘텐츠 영역 */}
      <div className='flex-1 flex flex-col'>
        <Spacer direction={Direction.Vertical} percentage={4} />
        <div className='flex-[11]'>
          {/* 첫 번째 섹션 */}
          <Spacer direction={Direction.Vertical} percentage={25} />
          <header>
            <h1 className='tablet:text-[12px]'>READ(리드)-CAT 진단 보고서</h1>
          </header>
        </div>
        <div className='flex-[32] flex-col'>
          {/* 두 번째 섹션 */}
          <div className='flex flex-row items-end'>
            <span className='font-bold tablet:text-[24px] mr-1'>지식 활용</span>
            <span>(Knowledge Application)</span>
          </div>
          <div className='flex flex-col px-4 h-full bg-white'>
            <Spacer direction={Direction.Vertical} percentage={5} />
            <div className='bg-red-100 leading-relaxed'>
              <span className='font-bold'>지식 활용</span>은 문제 풀이의 두번째
              단계에요. 효과적인 <span className='font-bold'>지식 활용</span>
              이란 문제 유형에따라 가장 적절한 사고 방식을 사용하여 문제
              적중률을 높이는 것을 의미해요. 습득한 지식조각들을 이해하고 하나로
              모으는 방식을 뜻해요. 대표적으로 직관과 추론 방식을 통해 효과적인
              지식 활용이 가능하며 두 방식을 때에 맞게 적절히 사용할 수 있는
              능력이 필요해요.
            </div>
          </div>
        </div>
        <div className='flex-[110]  bg-white rounded-lg border flex flex-col'>
          {/* 세 번째와 네 번째 섹션을 묶어서 */}
          <div className='flex-[44] bg-red-400 rounded-lg'>
            <div className='h-full flex '>념념4</div>
          </div>
          <div className='flex-[66] bg-blue-500 rounded-lg'>
            <div className='h-full flex'>ㅋㅋ4</div>
          </div>
        </div>
        <Spacer direction={Direction.Vertical} percentage={4} />
      </div>

      {/* 우측 패딩 */}
      <Spacer direction={Direction.Horizontal} percentage={4} />
    </div>
  );
};

export default ResultPage4Content;
