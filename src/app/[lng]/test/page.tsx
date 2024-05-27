'use client';
import { motion } from 'framer-motion';
import DualPercent from '../../../features/result/ui/components/DualPercent';
import { useModalStore } from '@/shared/models/modal/stores/modalStore';
import { MODAL_TYPES } from '@/shared/models/modal/types/modalTypes';
const selectedIndex = 6;
const percentage = 40;
export default function Home() {
  const { openModal } = useModalStore();
  const handleOpenDynamicModalOne = () => {
    openModal(MODAL_TYPES.TEST_DYNAMIC_MODAL_ONE);
  };
  const handleOpenDynamicModalTwo = () => {
    openModal(MODAL_TYPES.TEST_DYNAMIC_MODAL_TWO);
  };

  const handleOpenStaticModalOne = () => {
    openModal(MODAL_TYPES.TEST_STATIC_MODAL_ONE);
  };

  const handleOpenStaticModalTwo = () => {
    openModal(MODAL_TYPES.TEST_STATIC_MODAL_TWO);
  };
  return (
    <main className='h-[100dvh] w-[100dvw] bg-white'>
      <>
        <button onClick={handleOpenDynamicModalOne}>
          Open Dynamic Modal One
        </button>
        <button onClick={handleOpenDynamicModalTwo}>
          Open Dynamic Modal Two
        </button>
        <button onClick={handleOpenStaticModalOne}>
          Open Static Modal One
        </button>
        <button onClick={handleOpenStaticModalTwo}>
          Open Static Modal Two
        </button>
        {/* <div className='w-[800px]'>
          <div className='grid grid-cols-10 grid-rows-3 gap-4 p-4'>
            <div className='col-span-1 p-2 text-center text-xs font-bold'>
              점수
            </div>
            <div className='col-span-1 p-2 text-center text-xs'>1124</div>
            <div className='col-span-8 row-span-3 p-2 text-center relative'>
              <div className='flex items-center w-full h-full'>
                {[...Array(13)].map((_, index, arr) => (
                  <React.Fragment key={index}>
                    <div className='flex-1 flex items-center justify-between flex-col h-full'>
                      <div
                        className={`text-xs font-medium font-["Pretendard"] ${
                          index === selectedIndex ? 'font-bold' : ''
                        }`}
                      >
                        {
                          [
                            190, 380, 570, 760, 950, 1140, 1330, 1520, 1710,
                            1900, 2090, 2280, 2470,
                          ][index]
                        }
                      </div>
                      <div className='relative flex items-center justify-center'>
                        <div
                          className={`w-${
                            index === selectedIndex ? '7' : '5'
                          } h-${
                            index === selectedIndex ? '7' : '5'
                          } rounded-full ${
                            index === selectedIndex
                              ? 'bg-green-700'
                              : 'bg-gray-200'
                          }`}
                        />
                        <div
                          className={`absolute text-center text-xs font-medium font-['Pretendard'] ${
                            index === selectedIndex
                              ? 'text-white leading-none'
                              : 'text-black leading-3'
                          }`}
                        >
                          {index + 1}
                        </div>
                        {index == selectedIndex && (
                          <div className="absolute top-[30px] text-center text-green-700 text-[6px] font-semibold font-['Pretendard']">
                            진단 레벨
                          </div>
                        )}
                      </div>
                      <div
                        className={`text-xs font-medium font-["Pretendard"] text-center ${
                          index == selectedIndex ? 'font-bold' : ''
                        }`}
                      >
                        {
                          [
                            '유',
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
                          ][index]
                        }
                      </div>
                    </div>
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

            <div className='col-span-1 p-2 text-center text-xs font-bold'>
              레벨
            </div>
            <div className='col-span-1 p-2 text-center text-xs'>6.2</div>

            <div className='col-span-1 p-2 text-center text-xs font-bold'>
              학년
            </div>
            <div className='col-span-1 p-2 text-center text-xs'>중1</div>
          </div>
        </div> */}
      </>
      <DualPercent
        type='읽기 유창성'
        leftPercent={40}
        rightPercent={60}
        className='p-2'
      />
      <DualPercent
        type='지식 습득'
        leftPercent={70}
        rightPercent={30}
        className='p-2'
      />
      <DualPercent
        type='지식 활용'
        leftPercent={45}
        rightPercent={55}
        className='p-2'
      />
      <DualPercent
        type='의사결정'
        leftPercent={40}
        rightPercent={60}
        className='p-2'
      />
      <div className='w-[69pxr] h-[67pr] relative'>
        <div className='w-[60px] h-[19px] p-1  rounded-[20px] border border-solid inline-flex justify-center'>
          <div className='flex'>
            <span className="text-[#2C7551] text-[12px] font-['Pretendard'] font-medium flex items-center">
              84
            </span>
            <span className="text-[#2C7551] text-[8px] font-['Pretendard'] font-medium flex items-start">
              단어/분
            </span>
          </div>
        </div>
      </div>
      <>
        <div className='w-[69pxr] h-[67pr] relative'>
          <div className='w-[60px] h-[19px] p-1  rounded-[20px] border border-solid inline-flex justify-center'>
            <div className='flex'>
              <span className="text-[#2C7551] text-[12px] font-['Pretendard'] font-medium flex items-center">
                84
              </span>
              <span className="text-[#2C7551] text-[8px] font-['Pretendard'] font-medium flex items-start">
                단어/분
              </span>
            </div>
          </div>
          <div className='w-[69px] h-[18px] absolute left-0 top-[24px]'>
            <div className='w-[13px] h-[13px] absolute left-[56px] top-0 bg-[#2C7551] rounded-full border border-solid'></div>
            <div
              className='w-[61px] h-[4px] absolute left-0 top-[4px] bg-gradient-to-r from-white to-[#2C7551]'
              style={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%)' }}
            ></div>

            <div className='w-60pxr h-3pxr absolute left-0 top-15pxr bg-gradient-to-r from-[#2C7551] to-[#FFFEFE]'></div>
          </div>
          <div className='w-[67px] h-[12px] px-4 py-1 absolute left-0 top-[55px] bg-[rgba(231,231,231,0.60)] rounded-[20px] border border-solid inline-flex justify-center items-center gap-10'>
            <div className="w-[60px] text-center text-[#717171] text-[7px] font-['Pretendard'] font-medium leading-[10px] break-words">
              #독해 속도 평균
            </div>
          </div>
        </div>
      </>
      <>
        <div className='w-208pxr relative'>
          <>
            {/* 이 div는 중앙 정렬을 위한 컨테이너입니다. */}
            <motion.div
              className='flex items-center justify-center relative z-20'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* 이 div는 "평균: 13초" 라벨을 보여주는 UI 요소입니다. */}

              <div className='relative z-20 top-20pxr transform -translate-y-full '>
                <div className=' bg-neutral-500  rounded-2xl px-2 shadow-lg max-w-300pxr relative'>
                  <span className='text-xs text-white'>평균: 13초</span>

                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[80%] w-0 h-0 border-t-[12px] border-t-neutral-500 border-x-[8px] border-x-transparent' />
                </div>
              </div>
            </motion.div>
          </>
          <>
            {/* 이 div는 그래프를 그리는 UI 요소입니다. */}
            <div className='realtive bottom-0 w-full z-0 h-6'>
              <div className='absolute w-full h-6 bg-neutral-50 rounded-tl-sm rounded-bl-sm border border-zinc-100' />
              <motion.div
                className='h-6 absolute left-1/2 bg-gray-200 rounded-tl-sm rounded-bl-sm border border-green-700'
                initial={{ width: '0%', left: '50%' }}
                animate={{
                  width: `${percentage}%`,
                  left: `${50}%`,
                }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </>
        </div>
      </>
      <>
        <div
          className='relative w-200pxr h-60pxr'
          style={{ maxWidth: '12.5rem', maxHeight: '3.75rem' }}
        >
          <motion.div
            className='absolute bottom-0 left-0 w-56pxr h-40pxr bg-rose-100 border border-rose-400'
            initial={{ width: '3.5rem', height: '2.5rem', left: 0, bottom: 0 }}
            animate={{
              width: '4.75rem',
              height: '3.75rem',
              left: 0,
              bottom: 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className='absolute -top-2pxr -right-2pxr w-4pxr h-4pxr bg-rose-500 rounded-full border border-rose-500'></div>
          </motion.div>

          <div className='absolute bottom-0 left-0 w-44pxr h-28pxr bg-zinc-100 border border-stone-300'>
            <div className='absolute -bottom-2pxr -left-2pxr w-4pxr h-4pxr bg-stone-300 rounded-full border border-stone-300'></div>
            <div className='absolute -top-2pxr -right-2pxr w-4pxr h-4pxr bg-stone-300 rounded-full border border-stone-300'></div>
          </div>
        </div>
      </>

      <>
        <div className='w-14 h-10 relative'>
          <div className='w-1 h-1 left-0 top-[36.85px] absolute bg-green-700 rounded-full border' />
          <div className='w-14 h-9 left-[1.25px] top-[1.25px] absolute bg-neutral-200 border border-neutral-200' />
          <div className='w-11 h-7 left-[1.25px] top-[9.37px] absolute bg-gray-300 border border-green-700' />
          <div className='w-1 h-1 left-[53.09px] top-0 absolute bg-stone-300 rounded-full border' />
          <div className='w-1 h-1 left-[44.35px] top-[8.12px] absolute bg-green-700 rounded-full border' />
        </div>
      </>
      <>
        <>
          <div className='w-208pxr'>
            <>
              {/* 이 div는 중앙 정렬을 위한 컨테이너입니다. */}
              <motion.div
                className='flex items-center justify-center relative z-20'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* 이 div는 "평균: 13초" 라벨을 보여주는 UI 요소입니다. */}
                <div className='relative z-20 top-20pxr transform -translate-y-full flex justify-center'>
                  <div className='bg-neutral-500 rounded-2xl px-2 shadow-lg max-w-300pxr '>
                    <span className='text-xs text-white '>평균: 13초</span>

                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[80%] w-0 h-0 border-t-[12px] border-t-neutral-500 border-x-[8px] border-x-transparent' />
                  </div>
                </div>
              </motion.div>
            </>
            <>
              {/* 이 div는 그래프를 그리는 UI 요소입니다. */}
              <div className='relative bottom-0 w-full h-6'>
                <div className='absolute w-full h-6 bg-neutral-50 rounded-tl-sm rounded-bl-sm border border-zinc-100' />
                <motion.div
                  className='h-6 absolute left-1/2 bg-gray-200 rounded-tl-sm rounded-bl-sm border border-green-700'
                  initial={{ width: '0%', left: '50%' }}
                  animate={{
                    width: `${30}%`,
                    left: `${50}%`,
                  }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </>
          </div>
        </>
      </>
    </main>
  );
}
