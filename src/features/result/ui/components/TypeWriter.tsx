'use client';
import React, { useEffect, useRef } from 'react';
import { cn } from '@/shared/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';
import { gsap } from 'gsap';

export const TypewriterVariants = cva('', {
  variants: {
    size: {
      default: 'tablet: h-[16px] tablet: text-[16px] font-bold',
    },
    color: {
      green: 'text-green-500',
      red: 'text-red-500',
    },
    intensity: {
      dark: 'dark',
      medium: 'medium',
      light: 'light',
    },
  },
  defaultVariants: {
    color: 'green',
    intensity: 'dark',
    size: 'default',
  },
  compoundVariants: [
    {
      color: 'green',
      intensity: 'dark',
      className: 'text-green-700',
    },
    {
      color: 'green',
      intensity: 'medium',
      className: 'text-green-500',
    },
    {
      color: 'green',
      intensity: 'light',
      className: 'text-green-300',
    },
    {
      color: 'red',
      intensity: 'dark',
      className: 'text-red-700',
    },
    {
      color: 'red',
      intensity: 'medium',
      className: 'text-red-500',
    },
    {
      color: 'red',
      intensity: 'light',
      className: 'text-red-300',
    },
  ],
});

interface TypewriterProps extends VariantProps<typeof TypewriterVariants> {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  className,
  style,
  color,
  intensity,
  ...props
}) => {
  const typewriterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typewriterRef.current) {
      typewriterRef.current.style.minHeight = `${16}px`;
      const chars = text.split('');
      typewriterRef.current.innerHTML = '';

      gsap.to(typewriterRef.current, {
        duration: chars.length * 0.1,
        ease: 'none',
        onUpdate: function () {
          if (typewriterRef.current) {
            typewriterRef.current.innerHTML = chars
              .slice(0, Math.round(this.progress() * chars.length))
              .join('');
          }
        },
      });
    }
  }, [text]);

  return (
    <span
      ref={typewriterRef}
      className={cn(TypewriterVariants({ color, intensity, className }))}
      style={style}
      {...props}
    />
  );
};

export default Typewriter;
