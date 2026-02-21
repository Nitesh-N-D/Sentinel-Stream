import { useEffect, useState } from 'react';

interface TrustScoreMeterProps {
  score: number;
  size?: number;
  animate?: boolean;
}

export function TrustScoreMeter({ score, size = 200, animate = false }: TrustScoreMeterProps) {
  const [displayScore, setDisplayScore] = useState(animate ? 0 : score);
  
  useEffect(() => {
    if (!animate) {
      setDisplayScore(score);
      return;
    }
    
    const duration = 1500;
    const steps = 60;
    const increment = score / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= score) {
        setDisplayScore(score);
        clearInterval(timer);
      } else {
        setDisplayScore(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [score, animate]);

  const getColor = (score: number) => {
    if (score >= 80) return '#2ECC71';
    if (score >= 60) return '#F1C40F';
    return '#E74C3C';
  };

  const getGradient = (score: number) => {
    if (score >= 80) return 'from-[#2ECC71] to-[#2EF2C9]';
    if (score >= 60) return 'from-[#F1C40F] to-[#4DA3FF]';
    return 'from-[#E74C3C] to-[#F39C12]';
  };

  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (displayScore / 100) * circumference;
  
  const color = getColor(displayScore);
  const gradientClass = getGradient(displayScore);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative" style={{ width: size, height: size }}>
        {/* Background Circle */}
        <svg className="transform -rotate-90" width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#2A3150"
            strokeWidth="10"
            fill="none"
          />
          {/* Progress Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-500 ease-out"
            style={{
              filter: `drop-shadow(0 0 8px ${color}40)`,
            }}
          />
        </svg>
        
        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className={`text-5xl font-bold bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent tracking-tight`}>
            {displayScore}
          </div>
          <div className="text-[#A0A4B8] text-sm mt-1">Trust Score</div>
        </div>
      </div>
      
      <div className="text-xs text-[#6C728A]">Updated in real time</div>
    </div>
  );
}
