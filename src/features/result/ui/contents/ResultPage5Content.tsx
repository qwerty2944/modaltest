'use client';

import { Direction, Spacer } from '@/shared/ui/components/Spacer';
import React from 'react';
import BidirectionalTimeComparator from '../components/BidirectionalTimeComparator';

const ResultPage5Content: React.FC = () => {
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
            <span className='font-bold tablet:text-[24px] mr-1'>의사 결정</span>
            <span>(Decision Making)</span>
          </div>
          <div className='flex flex-col px-4 h-full bg-white'>
            <Spacer direction={Direction.Vertical} percentage={5} />
            <div className='bg-red-100 leading-relaxed'>
              <span className='font-bold'>의사 결정</span>은 문제 풀이의 세번째
              단계이며 리드CAT 진단의 마지막 단계에요. 학습자가 지식을 습득하여
              활용할때 어떤 의사결정 과정을 통해 문제를 푸는지를 의미해요.
              의사결정은 크게 과감형과 안정형 두가지 유형으로 나뉘며 학습자가
              얼마나 자신 있게 답안을 선택했는지 뜻해요. 학습자의 해당 문제에
              대한 정오답과 의사결정 과정 간에 관계를 파악하여 빠르지만 정확한{' '}
              <span className='font-bold'>의사 결정</span>을 할 수 있는 능력이
              필요해요.
            </div>
          </div>
        </div>
        <div className='flex-[110]  bg-white rounded-lg border flex flex-col'>
          {/* 세 번째와 네 번째 섹션을 묶어서 */}
          <div className='flex-[44] bg-red-400 rounded-lg'>
            <div className='h-full'>념념5</div>
          </div>
          <div className='flex-[66] flex rounded-lg'>
            <div className='flex-[2] rounded-lg'>
              <div className='h-full flex flex-col'>
                <div className='h-[8%] bg-white flex items-center font-bold'>
                  · 역행
                </div>
                <div className='flex flex-col flex-grow'>
                  <figure className='flex flex-col m-auto relative h-2/3 w-2/3'>
                    <div>역행비율</div>
                    {/* 스크린샷 이슈때문에 끔 */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={'/assets/zigzag_green_icon.png'}
                      alt='Zigzag green icon'
                    />
                  </figure>
                </div>
                <div className='h-1/3 bg-yellow-50'></div>
              </div>
            </div>
            <Spacer
              direction={Direction.Horizontal}
              percentage={10}
              className='bg-red-500'
            />
            <div className='flex-[3] rounded-lg'>
              <div className='h-full flex flex-col'>
                <div className='h-[8%] bg-white flex items-center font-bold'>
                  · 문제 풀이 시간
                </div>
                <div className='flex-grow'>
                  <BidirectionalTimeComparator value={-10} average={22} />
                  <BidirectionalTimeComparator value={+10} average={33} />
                </div>
                <div className='h-1/3 bg-yellow-50'></div>
              </div>
            </div>
          </div>
        </div>
        <Spacer direction={Direction.Vertical} percentage={4} />
      </div>

      {/* 우측 패딩 */}
      <Spacer direction={Direction.Horizontal} percentage={4} />
    </div>
  );
};

export default ResultPage5Content;
