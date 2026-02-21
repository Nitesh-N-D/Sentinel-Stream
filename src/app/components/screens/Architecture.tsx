import { Card } from "../ui/Card";
import { Monitor, Brain, Shield, Zap, Database, Activity, ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export function Architecture() {
  useDocumentTitle("System Architecture");

  const components = [
    {
      icon: Monitor,
      title: "Frontend Layer",
      subtitle: "Behavior Capture",
      description: "Lightweight JavaScript SDK captures behavioral signals in real-time without impacting UX",
      color: "#4DA3FF",
    },
    {
      icon: Brain,
      title: "AI Engine",
      subtitle: "Anomaly Detection",
      description: "Machine learning models analyze patterns and detect deviations from established Digital DNA baseline",
      color: "#2EF2C9",
    },
    {
      icon: Zap,
      title: "Agentic Decision Layer",
      subtitle: "Autonomous Actions",
      description: "AI agent evaluates risk and executes protective measures: observe, analyze, decide, act",
      color: "#F1C40F",
    },
    {
      icon: Shield,
      title: "Trust Score Engine",
      subtitle: "Real-Time Scoring",
      description: "Continuous trust evaluation (0-100) based on behavioral alignment with verified profile",
      color: "#2ECC71",
    },
    {
      icon: Activity,
      title: "Action Executor",
      subtitle: "Security Controls",
      description: "Automated response system: transaction blocking, session termination, multi-factor triggers",
      color: "#E74C3C",
    },
    {
      icon: Database,
      title: "Audit Log Database",
      subtitle: "Compliance Records",
      description: "Immutable audit trail for every decision and action — fully explainable and auditable",
      color: "#A0A4B8",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl text-[#EAEAF0] mb-2">System Architecture</h1>
        <p className="text-[#A0A4B8]">How Sentinel-Stream provides continuous behavioral authentication</p>
      </motion.div>

      {/* Architecture Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="bg-gradient-to-br from-[#12172A]/85 to-[#1A2036]/85">
          <div className="space-y-8 py-8">
            {components.map((component, index) => {
              const Icon = component.icon;
              const showArrow = index < components.length - 1;
              
              return (
                <div key={index}>
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 border"
                      style={{
                        backgroundColor: `${component.color}20`,
                        borderColor: `${component.color}40`,
                      }}
                    >
                      <Icon className="w-8 h-8" style={{ color: component.color }} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl text-[#EAEAF0]">{component.title}</h3>
                        <span 
                          className="px-3 py-1 rounded-full text-xs"
                          style={{
                            backgroundColor: `${component.color}20`,
                            color: component.color,
                          }}
                        >
                          {component.subtitle}
                        </span>
                      </div>
                      <p className="text-[#A0A4B8] leading-relaxed">
                        {component.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  {showArrow && (
                    <div className="flex justify-center my-4">
                      <ArrowDown className="w-6 h-6 text-[#2A3150]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Card>
      </motion.div>

      {/* Data Flow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <h3 className="text-lg text-[#EAEAF0] mb-6">Real-Time Data Flow</h3>
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1 text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-[#4DA3FF]/20 flex items-center justify-center mx-auto">
                <span className="text-2xl">👤</span>
              </div>
              <div className="text-sm text-[#EAEAF0]">User Interaction</div>
              <div className="text-xs text-[#6C728A]">Keystroke, mouse, scroll</div>
            </div>

            <ArrowRight className="w-5 h-5 text-[#2A3150]" />

            <div className="flex-1 text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-[#2EF2C9]/20 flex items-center justify-center mx-auto">
                <Monitor className="w-6 h-6 text-[#2EF2C9]" />
              </div>
              <div className="text-sm text-[#EAEAF0]">Signal Capture</div>
              <div className="text-xs text-[#6C728A]">~10ms latency</div>
            </div>

            <ArrowRight className="w-5 h-5 text-[#2A3150]" />

            <div className="flex-1 text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-[#2EF2C9]/20 flex items-center justify-center mx-auto">
                <Brain className="w-6 h-6 text-[#2EF2C9]" />
              </div>
              <div className="text-sm text-[#EAEAF0]">AI Analysis</div>
              <div className="text-xs text-[#6C728A]">~50ms processing</div>
            </div>

            <ArrowRight className="w-5 h-5 text-[#2A3150]" />

            <div className="flex-1 text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-[#2ECC71]/20 flex items-center justify-center mx-auto">
                <Shield className="w-6 h-6 text-[#2ECC71]" />
              </div>
              <div className="text-sm text-[#EAEAF0]">Trust Score</div>
              <div className="text-xs text-[#6C728A]">0-100 scale</div>
            </div>

            <ArrowRight className="w-5 h-5 text-[#2A3150]" />

            <div className="flex-1 text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-[#2ECC71]/20 flex items-center justify-center mx-auto">
                <Zap className="w-6 h-6 text-[#F1C40F]" />
              </div>
              <div className="text-sm text-[#EAEAF0]">Action</div>
              <div className="text-xs text-[#6C728A]">If needed</div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Technical Specifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid md:grid-cols-3 gap-6"
      >
        <Card>
          <h4 className="text-sm text-[#A0A4B8] mb-3">Performance</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-[#6C728A]">Latency</span>
              <span className="text-[#EAEAF0]">&lt;100ms</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#6C728A]">Throughput</span>
              <span className="text-[#EAEAF0]">10K req/sec</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#6C728A]">Uptime</span>
              <span className="text-[#EAEAF0]">99.99%</span>
            </div>
          </div>
        </Card>

        <Card>
          <h4 className="text-sm text-[#A0A4B8] mb-3">Accuracy</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-[#6C728A]">True Positive</span>
              <span className="text-[#EAEAF0]">98.7%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#6C728A]">False Positive</span>
              <span className="text-[#EAEAF0]">0.3%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#6C728A]">False Negative</span>
              <span className="text-[#EAEAF0]">1.0%</span>
            </div>
          </div>
        </Card>

        <Card>
          <h4 className="text-sm text-[#A0A4B8] mb-3">Security</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-[#6C728A]">Encryption</span>
              <span className="text-[#EAEAF0]">AES-256</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#6C728A]">Data Retention</span>
              <span className="text-[#EAEAF0]">90 days</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#6C728A]">Zero-Knowledge</span>
              <span className="text-[#EAEAF0]">Yes</span>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Key Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="bg-gradient-to-r from-[#2EF2C9]/10 to-[#4DA3FF]/10 border-[#2EF2C9]/20">
          <h3 className="text-xl text-[#EAEAF0] mb-6">Why This Architecture Works</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#2EF2C9]">
                <Zap className="w-5 h-5" />
                <span className="font-medium">Continuous Protection</span>
              </div>
              <p className="text-sm text-[#A0A4B8]">
                Unlike passwords or OTPs (one-time verification), Sentinel-Stream monitors every interaction in real-time
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#2EF2C9]">
                <Shield className="w-5 h-5" />
                <span className="font-medium">Deepfake Resistant</span>
              </div>
              <p className="text-sm text-[#A0A4B8]">
                Behavioral biometrics can't be stolen, phished, or replicated by AI-generated attacks
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#2EF2C9]">
                <Brain className="w-5 h-5" />
                <span className="font-medium">Self-Learning</span>
              </div>
              <p className="text-sm text-[#A0A4B8]">
                AI models adapt to natural changes in user behavior over time while detecting anomalies
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#2EF2C9]">
                <Activity className="w-5 h-5" />
                <span className="font-medium">Zero Friction</span>
              </div>
              <p className="text-sm text-[#A0A4B8]">
                Users experience seamless security without passwords, prompts, or interruptions
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}