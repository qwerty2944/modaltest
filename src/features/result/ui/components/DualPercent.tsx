import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";
import { Direction, Spacer } from "@/shared/ui/components/Spacer";

type Props = {
  /** Hans: 타입 정의가 어떻게 될지 몰라 일단 한글문자열로 했습니다. */
  type: "읽기 유창성" | "지식 습득" | "지식 활용" | "의사결정";
  leftPercent: number;
  rightPercent: number;
  className?: string;
  style?: React.CSSProperties;
  includeExplanation?: boolean;
};

/**
 * MBTI 퍼센트바와 같은 형태의 컴포넌트입니다. 왼쪽과 오른쪽의 퍼센트는 합쳐서 100%여야 합니다.
 * @param type - 퍼센트바의 타입입니다.
 * @param leftPercent - 왼쪽 퍼센트입니다.
 * @param rightPercent - 오른쪽 퍼센트입니다.
 * @param includeExplanation - 설명 포함 여부입니다.
 * @returns
 */
export default function DualPercent({
  type,
  leftPercent,
  rightPercent,
  includeExplanation = true,
  className,
  style,
}: Props) {
  let leftType;
  let rightType;
  let explanation;
  switch (type) {
    case "읽기 유창성":
      leftType = "단어 인식형 I";
      rightType = "읽기 유창형 U";
      // 이 부분은 유형에 따라 달라져야 함
      explanation =
        "학습자는 읽는 속도가 빠르고 규칙적인 패턴으로 지문을 읽는 편이에요.\n어휘력보다 읽기 능력이 상대적으로 높아요.";
      break;
    case "지식 습득":
      leftType = "스킴형 K";
      rightType = "스캔형 C";
      // 이 부분은 유형에 따라 달라져야 함
      explanation =
        "학습자는 필요한 부분만 꼼꼼히 확인하는 유형으로, 좁고 깊은 읽기 영역을 가져요.\n보다 심층적인 이해와 세부적인 정보 획득에 용이해요.";
      break;
    case "지식 활용":
      leftType = "직관형 N";
      rightType = "추론형 H";
      // 이 부분은 유형에 따라 달라져야 함
      explanation =
        "학습자는 이미 습득한 지식을 분석하고 판단하여 논리적인 추론을 통해 문제를 해결해요.\n주어진 문제나 상황에서 숨겨진 패턴이나 관계를 잘 발견해요.";
      break;
    case "의사결정":
      leftType = "과감형 G";
      rightType = "안정형 A";
      // 이 부분은 유형에 따라 달라져야 함
      explanation =
        "학습자는 의사결정을 꼼꼼히 안정적으로 하는 편이에요.\n필요한 내용을 재방문하거나 역행하는 횟수가 높아요.";
      break;
  }

  return (
    <motion.section
      className={twMerge("w-full text-black", className)}
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="w-full flex-col">
        <section className="w-full flex justify-between foldable:my-[6px] tablet:my[12px] foldable:text-[10px] tablet:text-[16px]">
          <p className="text-[#DB9384] font-bold">{leftType}</p>
          <p className="text-[#2C7551] font-bold">{rightType}</p>
        </section>
        <section className="w-full foldable:text-[10px] tablet:text-[14px] foldable:h-16pxr tablet:h-20pxr flex justify-center items-center">
          <div className="flex">
            <span className="text-black font-bold">{leftPercent}</span>
            <span className="text-black font-thin">%</span>
          </div>

          <motion.div
            className={`h-full bg-gradient-to-r from-transparent to-[#FEC1B8]`}
            initial={{ width: "50%" }}
            animate={{ width: `${leftPercent}%` }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
          />

          <motion.div
            className={`h-full bg-gradient-to-r from-[#A6DDCC]`}
            initial={{ width: "50%" }}
            animate={{ width: `${rightPercent}%` }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
          />

          <div className="flex">
            <span className="text-black font-bold">{rightPercent}</span>
            <span className="text-black font-thin">%</span>
          </div>
        </section>
        {includeExplanation && (
          <span className="block w-full text-center break-keep foldable:text-[10px] tablet:text-[14px] font-light mt-[18px]">
            {explanation.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </span>
        )}
      </section>
    </motion.section>
  );
}
