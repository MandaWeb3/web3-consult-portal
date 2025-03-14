
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  noAnimation?: boolean;
}

const Reveal: React.FC<RevealProps> = ({ 
  children, 
  className,
  direction = 'up',
  delay = 0,
  noAnimation = false
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (noAnimation) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (ref.current) {
              ref.current.classList.add('opacity-100');
              ref.current.classList.remove('opacity-0');
              ref.current.style.transform = 'translate(0, 0)';
            }
          }, delay);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, noAnimation]);
  
  const getDirectionClass = () => {
    switch (direction) {
      case 'up':
        return 'translate-y-[20px]';
      case 'down':
        return 'translate-y-[-20px]';
      case 'left':
        return 'translate-x-[20px]';
      case 'right':
        return 'translate-x-[-20px]';
      default:
        return 'translate-y-[20px]';
    }
  };
  
  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out opacity-0',
        noAnimation ? 'opacity-100' : getDirectionClass(),
        className
      )}
      style={{ 
        transitionDelay: `${delay}ms`,
        transform: noAnimation ? 'none' : undefined
      }}
    >
      {children}
    </div>
  );
};

export { Reveal };
