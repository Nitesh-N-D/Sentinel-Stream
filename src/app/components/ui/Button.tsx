import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'destructive';
  children: ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[#2EF2C9] text-[#0B0F1A] hover:bg-[#2EF2C9]/90 shadow-lg shadow-[#2EF2C9]/20 hover:shadow-[#2EF2C9]/40',
    secondary: 'border border-[#4DA3FF] text-[#4DA3FF] bg-transparent hover:bg-[#4DA3FF]/10',
    destructive: 'bg-[#E74C3C] text-white hover:bg-[#E74C3C]/90',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
