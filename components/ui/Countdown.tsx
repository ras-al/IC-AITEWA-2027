"use client";

import { useState, useEffect } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const Countdown = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) {
    return <div className="h-[120px] w-full flex items-center justify-center mt-12 mb-4"></div>; // Placeholder
  }

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-start sm:justify-center gap-4 md:gap-8 mt-16 mb-4">
      {timeBlocks.map((block) => (
        <div key={block.label} className="flex flex-col items-center">
          <div className="border-2 border-foreground bg-surface px-4 py-3 md:px-6 md:py-4 w-20 md:w-28 flex justify-center items-center">
            <span className="font-serif text-3xl md:text-5xl font-bold text-primary">
              {String(block.value).padStart(2, '0')}
            </span>
          </div>
          <span className="font-sans text-xs md:text-sm font-bold tracking-widest uppercase mt-3 text-foreground/80">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
};
