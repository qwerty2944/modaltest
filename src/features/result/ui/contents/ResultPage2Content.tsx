import React from 'react';
import { Spacer, Direction } from '@/shared/ui/components/Spacer';

const ResultPage2Content: React.FC = () => {
  return (
    <div className='flex flex-row h-full text-black'>
      {/* 좌측 패딩 */}
      <Spacer direction={Direction.Horizontal} percentage={4} />

      {/* 주요 콘텐츠 영역 */}
      <div className='flex-1 flex flex-col'>
        <Spacer direction={Direction.Vertical} percentage={4} />
        <div className='flex-[11]'>
          {/* 첫 번째 섹션 */}

          <header>
            <h1 className='tablet:text-[12px]'>READ(리드)-CAT 진단 보고서</h1>
          </header>
        </div>
        <div className='flex-[32] flex-col'>
          {/* 두 번째 섹션 */}
          <div className='flex flex-row items-end'>
            <span className='font-bold tablet:text-[24px] mr-1'>
              읽기 유창성
            </span>
            <span>(Reading Fluency)</span>
          </div>
          <div className='flex flex-col px-4 h-full bg-white'>
            <Spacer direction={Direction.Vertical} percentage={5} />
            <div className='bg-red-100 leading-relaxed'>
              <span className='font-bold'>읽기 유창성</span> 진단은 읽기 단계에
              진행되며 문제 풀이를 본격적으로 시작하기 전 단계에 속해요. 읽기
              유창성이란 학습자의 읽기 속도, 시선고정 시간, 시폭과 같은
              시선데이터를 활용하여 글을 읽는 과정이 얼마나 익숙하고 편한지
              알려줄 수 있어요. 대표적으로 단어 인식 유형과 읽기 유창형으로
              나뉘며 진단을 바탕으로 학습자의 단어 암기 현황과 읽기 능력을
              비교하여 학습자가 문제 풀이를 시작하기 전에 필요한 훈련을 파악할
              수 있어요.
            </div>
          </div>
        </div>
        <div className='flex-[110]  bg-white rounded-lg border flex flex-col'>
          {/* 세 번째와 네 번째 섹션을 묶어서 */}
          <div className='flex-[44] bg-red-400 rounded-lg'>
            <div className='h-full flex '>념념2</div>
          </div>
          <div className='flex-[66] bg-blue-500 rounded-lg'>
            <div className='h-full flex '>ㅋㅋ2</div>
          </div>
        </div>
        <Spacer direction={Direction.Vertical} percentage={4} />
      </div>

      {/* 우측 패딩 */}
      <Spacer direction={Direction.Horizontal} percentage={4} />
    </div>
  );
};

export default ResultPage2Content;
