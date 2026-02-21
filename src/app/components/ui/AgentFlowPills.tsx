import { Eye, Brain, CheckCircle, Zap } from 'lucide-react';

const steps = [
  { label: 'Observe', icon: Eye },
  { label: 'Analyze', icon: Brain },
  { label: 'Decide', icon: CheckCircle },
  { label: 'Act', icon: Zap },
];

interface AgentFlowPillsProps {
  activeStep?: number;
}

export function AgentFlowPills({ activeStep = -1 }: AgentFlowPillsProps) {
  return (
    <div className="flex items-center gap-2">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = activeStep === -1 || index <= activeStep;
        
        return (
          <div key={step.label} className="flex items-center gap-2">
            <div
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full transition-all
                ${isActive 
                  ? 'bg-[#2EF2C9] text-[#0B0F1A]' 
                  : 'bg-[#2A3150] text-[#6C728A]'
                }
              `}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-medium">{step.label}</span>
            </div>
            
            {index < steps.length - 1 && (
              <div className={`w-8 h-0.5 ${isActive ? 'bg-[#2EF2C9]' : 'bg-[#2A3150]'}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}
