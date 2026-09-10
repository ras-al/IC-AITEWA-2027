"use client";

import { useState, useEffect } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type CountdownProps = {
  targetDate: string;
  variant?: 'light' | 'dark';
  className?: string;
};

export const Countdown = ({ targetDate, variant = 'light', className = '' }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => setMounted(true));
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => {
      cancelAnimationFrame(rafId);
      clearInterval(timer);
    };
  }, [targetDate]);

  if (!mounted) {
    return <div className="h-[80px] sm:h-[90px] w-full flex items-center justify-center mt-4 mb-2"></div>; // Placeholder
  }

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  const isDark = variant === 'dark';

  return (
    <div className={`flex flex-wrap justify-center gap-2.5 sm:gap-3 md:gap-5 ${className || 'mt-8 sm:mt-10 mb-2'}`}>
      {timeBlocks.map((block) => (
        <div key={block.label} className="flex flex-col items-center">
          <div className={`border-2 ${
            isDark 
              ? 'border-white/25 bg-[#1C1712]/85 backdrop-blur-md shadow-[3px_3px_0_0_rgba(0,0,0,0.5)]' 
              : 'border-foreground bg-surface shadow-[3px_3px_0_0_#1C1712]'
          } px-2.5 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 min-w-[3.75rem] sm:min-w-[4.5rem] md:min-w-[5.25rem] flex justify-center items-center`}>
            <span className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold tabular-nums tracking-tight text-primary">
              {String(block.value).padStart(2, '0')}
            </span>
          </div>
          <span className={`font-sans text-[10px] sm:text-xs font-semibold tracking-widest uppercase mt-1.5 sm:mt-2 ${
            isDark ? 'text-white/80' : 'text-foreground/80'
          }`}>
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
};
