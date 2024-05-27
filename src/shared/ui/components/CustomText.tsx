'use client';
import { cn } from '@/shared/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import { HTMLAttributes, FC } from 'react';

const TextVariants = cva('', {
  variants: {
    size: {
      32: 'text-8xl',
      28: 'text-7xl',
      24: 'text-6xl',
      20: 'text-5xl',
      16: 'text-4xl',
      12: 'text-3xl',
      10: 'text-2xl',
      8: 'text-xl',
      6: 'text-lg',
      4: 'text-base',
      2: 'text-sm',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    textColor: {
      primary: 'text-primary-500',
      secondary: 'text-secondary-500',
      danger: 'text-red-500',
      success: 'text-green-500',
      warning: 'text-yellow-500',
      info: 'text-blue-500',
      light: 'text-gray-100',
      dark: 'text-gray-900',
    },
  },
  defaultVariants: {
    size: 16,
    weight: 'normal',
    textColor: 'dark',
  },
});

interface TextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof TextVariants> {
  children?: React.ReactNode;
}

export const CustomText: FC<TextProps> = ({
  size,
  weight,
  textColor,
  children,
  style,
  className,
  ...props
}) => {
  const textClasses = TextVariants({ size, weight, textColor });

  return (
    <p className={cn(textClasses, className)} style={style} {...props}>
      {children}
    </p>
  );
};
