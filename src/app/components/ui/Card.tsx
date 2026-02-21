import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div 
      className={`
        bg-[#1A2036]/85 backdrop-blur-xl rounded-2xl border border-[#2A3150] 
        p-6 transition-all duration-200 hover:border-[#2A3150]/60
        ${className}
      `}
      style={{
        backdropFilter: 'blur(12px)',
      }}
    >
      {children}
    </div>
  );
}
