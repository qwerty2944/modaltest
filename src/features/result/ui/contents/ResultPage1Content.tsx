'use client';

import React from 'react';
import GradeLevelChart from '../components/GradeLevelChart';
import Typewriter from '../components/TypeWriter';
import MBTIsummary from '../components/MBTIsummary';
import DualPercent from '../components/DualPercent';
import { Spacer, Direction } from '@/shared/ui/components/Spacer';

// cat 결과 더미 데이터
type MBTI = {
  name: string;
  age: string;
  mbti: string;
  mbtiDescription: string;
  mbtiDetail: {
    type: '읽기 유창성' | '지식 습득' | '지식 활용' | '의사결정';
    percentage: { left: number; right: number };
  }[];
};

const dummyResult: MBTI = {
  name: '카리나',
  age: '2학년',
  mbti: 'UKNG',
  mbtiDescription: '작은 카페를 찾아가 점 종이를 펼쳐 만년필로 작성하는 시인',
  mbtiDetail: [
    { type: '읽기 유창성', percentage: { left: 40, right: 60 } },
    { type: '지식 습득', percentage: { left: 30, right: 70 } },
    { type: '지식 활용', percentage: { left: 50, right: 50 } },
    { type: '의사결정', percentage: { left: 70, right: 30 } },
  ],
};
const selectedIndex = 6;

const ResultPage1Content: React.FC = () => {
  return (
    <div className='flex flex-col h-full items-center foldable:m-2 tablet:m-4 bg-[#fcfcfc]'>
      <MBTIsummary
        user={{ name: dummyResult.name, age: dummyResult.age }}
        mbti={dummyResult.mbti}
        description={dummyResult.mbtiDescription}
        className='my-8'
      />
      <section className='w-full h-full flex flex-col items-center justify-between foldable:p-12pxr tablet:p-32pxr rounded-lg bg-white border-gray-200 border-1pxr'>
        <GradeLevelChart selectedIndex={selectedIndex} style={{ zIndex: 0 }} />
        <hr className='w-full  mx-4 bg-gray-200' />
        <Spacer direction={Direction.Vertical} percentage={3} />
        <Typewriter text={dummyResult.mbtiDescription} className='flex' />
        <Spacer direction={Direction.Vertical} percentage={3} />
        <section className='w-full flex flex-col justify-between'>
          {dummyResult.mbtiDetail.map((item, index) => {
            return (
              <figure className='w-full flex justify-between' key={index}>
                <div className='foldable:w-60pxr foldable:h-25pxr tablet:w-100pxr tablet:h-40pxr flex items-center justify-center foldable:text-[8px] tablet:text-[12px] bg-[#F5F5F5] text-[#717171] flex-shrink-0 rounded-full'>
                  {index}. {item.type}
                </div>
                <Spacer direction={Direction.Horizontal} percentage={8} />
                <DualPercent
                  type={item.type}
                  leftPercent={item.percentage.left}
                  rightPercent={item.percentage.right}
                />
              </figure>
            );
          })}
        </section>
      </section>
    </div>
  );
};

export default ResultPage1Content;
