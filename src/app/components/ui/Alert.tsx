import { ReactNode } from 'react';
import { AlertCircle, ShieldAlert } from 'lucide-react';

interface AlertProps {
  variant?: 'danger' | 'warning' | 'info';
  children: ReactNode;
  className?: string;
}

export function Alert({ variant = 'info', children, className = '' }: AlertProps) {
  const variants = {
    danger: {
      bg: 'bg-[#E74C3C]/15',
      border: 'border-l-4 border-l-[#E74C3C]',
      icon: ShieldAlert,
      iconColor: 'text-[#E74C3C]',
    },
    warning: {
      bg: 'bg-[#F1C40F]/15',
      border: 'border-l-4 border-l-[#F1C40F]',
      icon: AlertCircle,
      iconColor: 'text-[#F1C40F]',
    },
    info: {
      bg: 'bg-[#4DA3FF]/15',
      border: 'border-l-4 border-l-[#4DA3FF]',
      icon: AlertCircle,
      iconColor: 'text-[#4DA3FF]',
    },
  };

  const config = variants[variant];
  const Icon = config.icon;

  return (
    <div className={`${config.bg} ${config.border} rounded-lg p-4 flex items-start gap-3 ${className}`}>
      <Icon className={`w-5 h-5 ${config.iconColor} flex-shrink-0 mt-0.5`} />
      <div className="flex-1 text-[#EAEAF0]">
        {children}
      </div>
    </div>
  );
}
