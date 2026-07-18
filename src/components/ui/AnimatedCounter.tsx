import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface AnimatedCounterProps {
  value: string;
  suffix?: string;
  label: string;
  isPlaceholder?: boolean;
}

export function AnimatedCounter({ value, suffix = '', label, isPlaceholder = false }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (isPlaceholder || prefersReduced) {
      setDisplayValue(value);
      return;
    }

    const numValue = parseInt(value);
    if (isNaN(numValue)) {
      setDisplayValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const start = performance.now();

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(Math.round(eased * numValue).toString());

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, isPlaceholder, prefersReduced, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-baseline justify-center gap-1">
        <span className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-brand-offwhite">
          {displayValue}
        </span>
        <span className="font-display font-bold text-2xl md:text-3xl text-brand-cyan">{suffix}</span>
      </div>
      <p className="mt-2 text-sm text-brand-grey uppercase tracking-wider">{label}</p>
      {isPlaceholder && (
        <span className="placeholder-tag mt-2">Placeholder</span>
      )}
    </div>
  );
}
