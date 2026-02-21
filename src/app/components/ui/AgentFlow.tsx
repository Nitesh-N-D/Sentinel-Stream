import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface AgentFlowStep {
  label: string;
  icon: LucideIcon;
  active: boolean;
}

interface AgentFlowProps {
  steps: AgentFlowStep[];
}

export function AgentFlow({ steps }: AgentFlowProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <div key={step.label} className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 0.4 }}
              className={`agent-pill ${step.active ? 'agent-pill-active' : 'agent-pill-inactive'} flex items-center gap-2`}
            >
              <Icon className="w-4 h-4" />
              <span>{step.label}</span>
            </motion.div>
            
            {index < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.2 }}
              >
                <ArrowRight className="w-5 h-5 text-[#6B7280]" />
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}
