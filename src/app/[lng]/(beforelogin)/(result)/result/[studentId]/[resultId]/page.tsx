'use client';
import React, { Suspense } from 'react';
import { savePDF } from '@/features/result/lib/savePdf';
import { useModalStore } from '@/shared/models/modal/stores/modalStore';
import { MODAL_TYPES } from '@/shared/models/modal/types/modalTypes';

const ResultPage1Content = React.lazy(
  () => import('@/features/result/ui/contents/ResultPage1Content')
);
const ResultPage2Content = React.lazy(
  () => import('@/features/result/ui/contents/ResultPage2Content')
);
const ResultPage3Content = React.lazy(
  () => import('@/features/result/ui/contents/ResultPage3Content')
);
const ResultPage4Content = React.lazy(
  () => import('@/features/result/ui/contents/ResultPage4Content')
);
const ResultPage5Content = React.lazy(
  () => import('@/features/result/ui/contents/ResultPage5Content')
);

const ResultPage = ({
  params,
}: {
  params: { lng: string; studentId: string; resultId: string };
}) => {
  const { openModal } = useModalStore();
  const pageRefs = Array.from({ length: 5 }, () =>
    React.createRef<HTMLDivElement>()
  );

  return (
    <div className='mx-auto py-8 h-screen overflow-auto px-2 tablet:w-768pxr mobile:w-full foldabe:w-full'>
      <button
        onClick={() => savePDF(pageRefs, '냠냠굿.pdf')}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4'
      >
        Save as PDF
      </button>
      <button
        onClick={() => openModal(MODAL_TYPES.TEST_STATIC_MODAL_ONE)}
        className='ml-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4'
      >
        모달테스트
      </button>
      <div>
        {pageRefs.map((ref, index) => (
          <div
            key={index}
            ref={ref}
            className='flex flex-col tablet:aspect-[1/1.41] mobile:aspect-[1/1.41] foldable:aspect-[1/1.41] bg-white'
          >
            <Suspense fallback={<div>Loading...</div>}>
              {index === 0 && <ResultPage1Content />}
              {index === 1 && <ResultPage2Content />}
              {index === 2 && <ResultPage3Content />}
              {index === 3 && <ResultPage4Content />}
              {index === 4 && <ResultPage5Content />}
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultPage;
