'use client';

import { cn } from '@/shared/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes, FC } from 'react';
import dynamic from 'next/dynamic';
import { Phase, TPhase } from '@/shared/models/common/types/type';

// import { motion } from 'framer-motion';

const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
);

export const NebulaLoaderVariants = cva('flex relative', {
  variants: {
    size: {
      default:
        'foldable:w-280pxr foldable:h-171pxr mobile:w-360pxr mobile:h-220pxr tablet:w-768pxr tablet:h-469pxr',
    },
    phase: {
      [Phase.Intro]: 'intro',
      [Phase.Diagnosis]: 'diagnosis',
      [Phase.Word]: 'word',
    },
  },
  defaultVariants: {
    size: 'default',
    phase: 'diagnosis',
  },
});

interface NebulaLoaderProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof NebulaLoaderVariants> {
  className?: string;
  style?: React.CSSProperties;
  phase: TPhase;
  onCoronaClick?: () => void;
}

/**
 * NebulaLoader 컴포넌트
 * @param size - 로더의 크기를 지정합니다. (default)
 * @param phase - 로더의 단계를 지정합니다. (intro, diagnosis)
 * @param className - 추가적인 클래스를 지정할 수 있습니다.
 * @param style - 인라인 스타일을 지정할 수 있습니다.
 * @param onCoronaClick - diagnosis 페이즈에서 호버되는 원(corona)을 클릭할 때 호출되는 함수입니다.
 * @param props - 기타 HTML 속성을 지정할 수 있습니다.
 */
const NebulaLoader: FC<NebulaLoaderProps> = ({
  phase,
  className,
  style,
  onCoronaClick,
  ...props
}) => {
  const coronaVariants = {
    initial: { opacity: 0.8 },
    hover: {
      opacity: 1,
      scale: 1.1,
      boxShadow: '0px 0px 120px 50px #FDFDFF',
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  const circleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        delay: 0.3,
        ease: 'easeInOut',
      },
    },
    orbit: {
      rotate: 360,
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };
  if (phase === Phase.Intro) {
    return (
      <figure
        className={cn(NebulaLoaderVariants({ phase }), className)}
        style={style}
        {...props}
      >
        {/* 백그라운드 그라데이션과 그림자를 가진 원형 배경 요소 */}
        <MotionDiv
          className='
              mobile:w-full mobile:h-full mobile:inset-0 
              foldable:w-full foldable:h-full foldable:inset-0 
              tablet:w-full tablet:h-full tablet:inset-0 
              absolute bg-gradient-to-br from-[#000080]/20 to-[#00008B]/20 rounded-full 
              foldable:shadow-[60px_60px_60px_rgba(0,0,0,0.5)] foldable:blur-[60px] 
              mobile:shadow-[70px_70px_70px_rgba(0,0,0,0.5)] mobile:blur-[70px] 
              tablet:shadow-[224px_224px_224px_rgba(0,0,0,0.5)] tablet:blur-[224px]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        ></MotionDiv>
        {/* 1번째 원 */}
        <MotionDiv
          className='
              foldable:w-13pxr foldable:h-13pxr
              mobile:w-17pxr mobile:h-17pxr 
              tablet:w-38pxr tablet:h-38pxr 
              top-[20%] left-[12.5%] 
              absolute bg-[#000080]/20 rounded-full 
              foldable:shadow-[0_0_3px_0px_rgba(0,0,128,0.5)] foldable:border-[0.065px] 
              mobile:shadow-[0_0_4px_0px_rgba(0,0,128,0.5)] mobile:border-[0.075px] 
              tablet:shadow-[0_0_13px_1px_rgba(0,0,128,0.5)] tablet:border-[0.24px] border-white'
          variants={circleVariants}
          initial='hidden'
          animate={['visible', 'orbit']}
        ></MotionDiv>
        {/* 2번째 원 */}
        <MotionDiv
          className='
            foldable:w-24pxr foldable:h-24pxr 
            mobile:w-31pxr mobile:h-31pxr 
            tablet:w-67pxr tablet:h-67pxr 
            top-[31%] left-[8.5%]
            absolute bg-[#000080]/20 rounded-full
            foldable:shadow-[0_0_6px_1px_rgba(0,0,128,0.8)] foldable:border-[0.1px] 
            mobile:shadow-[0_0_8px_1px_rgba(0,0,128,0.8)] mobile:border-[0.125px] 
            tablet:shadow-[0_0_24px_2px_rgba(0,0,128,0.8)] tablet:border-[0.4px] border-white'
          variants={circleVariants}
          initial='hidden'
          animate={['visible', 'orbit']}
        ></MotionDiv>
        {/* 3번째 원 */}
        <MotionDiv
          className='
          foldable:w-83pxr foldable:h-83pxr 
          mobile:w-107pxr mobile:h-107pxr 
          tablet:w-230pxr tablet:h-230pxr 
          top-[23%] left-[27%]
          absolute bg-[#000080]/30 rounded-full
          foldable:shadow-[0_0_20px_2px_rgba(0,0,128,0.6)] foldable:border-[0.2px] 
          mobile:shadow-[0_0_25px_3px_rgba(0,0,128,0.6)] mobile:border-[0.25px] 
          tablet:shadow-[0_0_80px_8px_rgba(0,0,128,0.6)] tablet:border-[0.8px] border-white/80'
          variants={circleVariants}
          initial='hidden'
          animate={['visible', 'orbit']}
        ></MotionDiv>
        {/* 4번째 원 */}
        <MotionDiv
          className='
          foldable:w-48pxr foldable:h-48pxr  
          mobile:w-62pxr mobile:h-62pxr 
          tablet:w-134pxr tablet:h-134pxr 
          top-[38%] left-[50%]
          absolute bg-[#000080]/20 rounded-full 
          foldable:shadow-[0_0_13px_1px_rgba(0,0,128,0.5)] foldable:border-[0.15px] 
          mobile:shadow-[0_0_15px_2px_rgba(0,0,128,0.5)] mobile:border-[0.175px] 
          tablet:shadow-[0_0_48px_5px_rgba(0,0,128,0.5)] tablet:border-[0.56px] border-white'
          variants={circleVariants}
          initial='hidden'
          animate={['visible', 'orbit']}
        ></MotionDiv>
        {/* 5번째 원 */}
        <MotionDiv
          className='
          foldable:w-42pxr foldable:h-42pxr 
          mobile:w-53pxr mobile:h-53pxr 
          tablet:w-115pxr tablet:h-115pxr 
          top-[28%] left-[55%]
          absolute bg-[#000080]/20 rounded-full 
          foldable:shadow-[0_0_6px_1px_rgba(0,0,128,0.4)] foldable:border-[0.12px] 
          mobile:shadow-[0_0_8px_1px_rgba(0,0,128,0.4)] mobile:border-[0.175px] 
          tablet:shadow-[0_0_24px_4px_rgba(0,0,128,0.4)] tablet:border-[0.56px] border-white'
          variants={circleVariants}
          initial='hidden'
          animate={['visible', 'orbit']}
        ></MotionDiv>
        {/* 6번째 원 */}
        <MotionDiv
          className='
          foldable:w-17pxr foldable:h-17pxr 
          mobile:w-22pxr mobile:h-22pxr 
          tablet:w-48pxr tablet:h-48pxr
          top-[47%] left-[82%]
          absolute bg-[#000080]/20 rounded-full 
          foldable:shadow-[0_0_3px_1px_rgba(0,0,128,0.4)] foldable:border-[0.06px] 
          mobile:shadow-[0_0_5px_1px_rgba(0,0,128,0.4)] mobile:border-[0.075px] 
          tablet:shadow-[0_0_17px_2px_rgba(0,0,128,0.4)] tablet:border-[0.24px] border-white'
          variants={circleVariants}
          initial='hidden'
          animate={['visible', 'orbit']}
        ></MotionDiv>
        {/* 7번째 원 */}
        <MotionDiv
          className='
          foldable:w-13pxr foldable:h-13pxr 
          mobile:w-17pxr mobile:h-17pxr
          tablet:w-38pxr tablet:h-38pxr
          top-[40%] left-[88%]
          absolute bg-[#000080]/20 rounded-full 
          foldable:shadow-[0_0_9px_1px_rgba(0,0,128,0.5)] foldable:border-[0.06px] 
          mobile:shadow-[0_0_4px_0px_rgba(0,0,128,0.5)] mobile:border-[0.075px] 
          tablet:shadow-[0_0_13px_1px_rgba(0,0,128,0.5)] tablet:border-[0.24px] border-white'
          variants={circleVariants}
          initial='hidden'
          animate={['visible', 'orbit']}
        ></MotionDiv>
      </figure>
    );
  }
  if (phase === Phase.Diagnosis) {
    return (
      <figure
        className={cn(NebulaLoaderVariants({ phase }), className)}
        style={style}
        {...props}
      >
        {/* 안개1 : 왼쪽위에 붙임 */}
        <div
          className='foldable:w-170pxr foldable:h-129pxr 
          mobile:w-300pxr mobile:h-220pxr 
          tablet:w-494pxr tablet:h-354pxr
          absolute 
          origin-top-left
          opacity-100 bg-gradient-to-br from-[#6793F2] to-[#5952A8] 
          foldable:shadow-[0px_0px_80px_rgba(103,147,242,1)] foldable:blur-[80px] 
          mobile:shadow-[0px_0px_98px_rgba(103,147,242,1)] mobile:blur-[98px] 
          tablet:shadow-[0px_0px_157px_rgba(103,147,242,1)] tablet:blur-[157px]
          '
        ></div>
        {/* 안개2 : 오른쪽위에 붙임 */}
        <div
          className='foldable:w-126pxr foldable:h-90pxr 
          mobile:w-162pxr mobile:h-116pxr 
          tablet:w-346pxr tablet:h-248pxr
          absolute right-0 
          origin-top-right
          opacity-100 bg-gradient-to-br from-[#6793F2] to-[#5952A8] 
          foldable:shadow-[0px_0px_80px_rgba(103,147,242,1)] foldable:blur-[80px] 
          mobile:shadow-[0px_0px_98px_rgba(103,147,242,1)] mobile:blur-[98px] 
          tablet:shadow-[0px_0px_157px_rgba(103,147,242,1)] tablet:blur-[157px]'
        ></div>
        <div className='w-full h-full flex items-center justify-center'>
          {/* 1번째 원 */}
          <MotionDiv
            className='foldable:w-13pxr foldable:h-13pxr
              mobile:w-17pxr mobile:h-17pxr 
              tablet:w-38pxr tablet:h-38pxr 
              top-[20%] left-[12.5%] 
              absolute  rounded-full
               foldable:border-[0.06px]
               mobile:border-[0.075px] 
               tablet:border-[0.12px]
               border-white'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          ></MotionDiv>
          {/* 2번째 원 */}
          <MotionDiv
            className='
            foldable:w-24pxr foldable:h-24pxr 
            mobile:w-31pxr mobile:h-31pxr 
            tablet:w-67pxr tablet:h-67pxr 
            top-[31%] left-[8.5%]
            absolute rounded-full
            foldable:shadow-[0px_0px_13px_2px_rgba(252,253,255,0.6)] foldable:border-[0.1px]
            mobile:shadow-[0px_0px_15px_2px_rgba(252,253,255,0.6)] mobile:border-[0.125px]
            tablet:shadow-[0px_0px_24px_2.4px_rgba(252,253,255,0.6)] tablet:border-[0.2px]
             border-white'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 1.4 }}
          ></MotionDiv>
          {/* 3번째 원 */}
          <MotionDiv
            className='
            foldable:w-83pxr foldable:h-83pxr 
            mobile:w-107pxr mobile:h-107pxr 
            tablet:w-230pxr tablet:h-230pxr 
            top-[23%] left-[27%]
            absolute opacity-80  rounded-full
            foldable:shadow-[0px_0px_40px_40px_#FDFDFF] foldable:border-[0.2px]
            mobile:shadow-[0px_0px_50px_20px_#FDFDFF] mobile:border-[0.25px]
            tablet:shadow-[0px_0px_80px_32px_#FDFDFF] tablet:border-[0.4px]
             border-white'
            variants={coronaVariants}
            initial='initial'
            whileHover='hover'
            onClick={onCoronaClick}
          ></MotionDiv>
          {/* 4번째 원 */}
          <MotionDiv
            className='
          foldable:w-48pxr foldable:h-48pxr  
          mobile:w-62pxr mobile:h-62pxr 
          tablet:w-134pxr tablet:h-134pxr 
          top-[38%] left-[50%]
          absolute rounded-full
          foldable:shadow-[0px_0px_25px_2px_rgba(252,253,255,0.3)] foldable:border-[0.15px]
          mobile:shadow-[0px_0px_30px_3px_rgba(252,253,255,0.3)] mobile:border-[0.175px]
          tablet:shadow-[0px_0px_48px_5px_rgba(252,253,255,0.3)] tablet:border-[0.28px]
           border-white'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
          ></MotionDiv>
          {/* 5번째 원 */}
          <MotionDiv
            className='
          foldable:w-42pxr foldable:h-42pxr 
          mobile:w-53pxr mobile:h-53pxr 
          tablet:w-115pxr tablet:h-115pxr 
          top-[28%] left-[55%]
          absolute rounded-full
          foldable:shadow-[0px_0px_10px_2px_rgba(252,253,255,0.2)] foldable:border-[0.15px]
          mobile:shadow-[0px_0px_15px_3px_rgba(252,253,255,0.2)] mobile:border-[0.175px]
          tablet:shadow-[0px_0px_24px_4px_rgba(252,253,255,0.2)] tablet:border-[0.28px]
           border-white'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
          ></MotionDiv>
          {/* 6번째 원 */}
          <MotionDiv
            className='
          foldable:w-17pxr foldable:h-17pxr 
          mobile:w-22pxr mobile:h-22pxr 
          tablet:w-48pxr tablet:h-48pxr
          top-[47%] left-[82%]
          absolute rounded-full
          foldable:shadow-[0px_0px_8px_0.7px_rgba(252,253,255,0.2)] foldable:border-[0.06px]
          mobile:shadow-[0px_0px_11px_1px_rgba(252,253,255,0.2)] mobile:border-[0.075px]
          tablet:shadow-[0px_0px_17px_1.7px_rgba(252,253,255,0.2)] tablet:border-[0.12px]
           border-white'
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
          ></MotionDiv>
          {/* 7번째 원 */}
          <MotionDiv
            className='
          foldable:w-13pxr foldable:h-13pxr 
          mobile:w-17pxr mobile:h-17pxr
          tablet:w-38pxr tablet:h-38pxr
          top-[40%] left-[88%]
          absolute rounded-full
          foldable:shadow-[0px_0px_7px_0.7px_rgba(252,253,255,0.3)] foldable:border-[0.06px]
          mobile:shadow-[0px_0px_9px_1px_rgba(252,253,255,0.3)] mobile:border-[0.075px]
          tablet:shadow-[0px_0px_14px_1.4px_rgba(252,253,255,0.3)] tablet:border-[0.12px]
           border-white'
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 1.2 }}
          ></MotionDiv>
        </div>
      </figure>
    );
  }
  if (phase === Phase.Word) {
    return (
      <figure
        className={cn(NebulaLoaderVariants({ phase }), className)}
        style={style}
        {...props}
      >
        <MotionDiv
          className='w-[618px] h-[442px] absolute -rotate-[3deg] origin-top-left opacity-45 bg-gradient-to-br from-[#6793F2] to-[#5952A8] shadow-[280px_280px_280px_rgba(0,0,0,1)] blur-[280px]'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        ></MotionDiv>
        <MotionDiv
          className='w-[433px] h-[310px] absolute right-0 rotate-[-170deg] origin-top-right opacity-45 bg-gradient-to-br from-[#6793F2] to-[#5952A8] shadow-[196px_196px_196px_rgba(0,0,0,1)] blur-[196px]'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        ></MotionDiv>
        <MotionDiv
          className='w-[32px] h-[32px] absolute top-[167px] left-[120px] bg-zinc-300/5 rounded-full shadow-[0px_0px_17px_1.7px_rgba(252,253,255,0.3)] border border-white'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
        ></MotionDiv>
        <MotionDiv className='w-[189px] h-[189px] absolute top-[135px] left-[258px] opacity-80 bg-zinc-300/30 rounded-full shadow-[0px_0px_100px_40px_#FDFDFF] border border-white/80'></MotionDiv>
        <MotionDiv
          className='w-[95px] h-[95px] absolute top-[164px] left-[527px] bg-zinc-300/10 rounded-full shadow-[0px_0px_30px_5px_rgba(252,253,255,0.2)] border border-white'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
        ></MotionDiv>
        <MotionDiv
          className='w-[113px] h-[113px] absolute top-[222px] left-[479px] bg-zinc-300/10 rounded-full shadow-[0px_0px_60px_6px_rgba(252,253,255,0.3)] border border-white'
          variants={coronaVariants}
          initial='initial'
          whileHover='hover'
          onClick={onCoronaClick}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
        ></MotionDiv>
        <MotionDiv
          className='w-[40px] h-[40px] absolute top-[276px] left-[788px] bg-zinc-300/10 rounded-full shadow-[0px_0px_21px_2.1px_rgba(252,253,255,0.2)] border border-white'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
        ></MotionDiv>
        <MotionDiv
          className='w-[32px] h-[32px] absolute top-[229px] left-[847px] bg-zinc-300/5 rounded-full shadow-[0px_0px_17px_1.7px_rgba(252,253,255,0.3)] border border-white'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 1.2 }}
        ></MotionDiv>
        <MotionDiv
          className='w-[57px] h-[57px] absolute top-[183px] left-[121px] bg-zinc-300/5 rounded-full shadow-[0px_0px_30px_3px_rgba(252,253,255,0.6)] border border-white'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 1.4 }}
        ></MotionDiv>
      </figure>
    );
  }
};

export default NebulaLoader;
