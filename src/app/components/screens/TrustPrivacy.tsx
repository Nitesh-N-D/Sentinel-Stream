import { Card } from "../ui/Card";
import { Shield, Lock, Eye, FileCheck, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export function TrustPrivacy() {
  useDocumentTitle("Trust & Privacy");

  const privacyFeatures = [
    {
      icon: Lock,
      title: "No passwords stored",
      description: "Zero-knowledge authentication means we never store, see, or process passwords",
    },
    {
      icon: Eye,
      title: "No raw keystrokes logged",
      description: "Only anonymized timing patterns captured — never the actual content",
    },
    {
      icon: Shield,
      title: "No facial images saved",
      description: "Behavioral biometrics replace invasive facial recognition systems",
    },
    {
      icon: FileCheck,
      title: "Fully explainable AI decisions",
      description: "Every security action is logged, auditable, and transparent",
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
        <h1 className="text-3xl text-[#EAEAF0] mb-2">Trust & Privacy</h1>
        <p className="text-[#A0A4B8]">Privacy-first security architecture</p>
      </motion.div>

      {/* Privacy Promise */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="bg-gradient-to-br from-[#2ECC71]/10 to-[#2EF2C9]/10 border-[#2ECC71]/20">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#2ECC71]/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-8 h-8 text-[#2ECC71]" />
            </div>
            <div className="flex-1 space-y-3">
              <h2 className="text-2xl text-[#EAEAF0]">Privacy-Preserving by Design</h2>
              <p className="text-[#A0A4B8] leading-relaxed">
                Sentinel-Stream authenticates users based on <span className="text-[#2EF2C9]">how they behave</span>, 
                not <span className="text-[#E74C3C]">what they type</span>. We analyze patterns, not content. 
                Your privacy is mathematically guaranteed through our zero-knowledge architecture.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Privacy Features Checklist */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-lg text-[#EAEAF0] mb-4">Our Privacy Commitments</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {privacyFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2ECC71]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#2ECC71]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-[#2ECC71]" />
                      <h4 className="text-[#EAEAF0] font-medium">{feature.title}</h4>
                    </div>
                    <p className="text-sm text-[#A0A4B8]">{feature.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </motion.div>

      {/* Flow Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card>
          <h3 className="text-lg text-[#EAEAF0] mb-6">How Sentinel-Stream Works</h3>
          <div className="flex items-center justify-center gap-4 py-8">
            {/* User */}
            <div className="flex flex-col items-center gap-3 w-32">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4DA3FF] to-[#2EF2C9] flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <div className="text-sm text-[#EAEAF0] text-center">User</div>
            </div>

            <ArrowRight className="w-6 h-6 text-[#2A3150]" />

            {/* Behavioral Signals */}
            <div className="flex flex-col items-center gap-3 w-32">
              <div className="w-16 h-16 rounded-xl bg-[#1A2036] border border-[#2A3150] flex items-center justify-center">
                <Eye className="w-7 h-7 text-[#4DA3FF]" />
              </div>
              <div className="text-sm text-[#EAEAF0] text-center">Behavioral Signals</div>
            </div>

            <ArrowRight className="w-6 h-6 text-[#2A3150]" />

            {/* AI Agent */}
            <div className="flex flex-col items-center gap-3 w-32">
              <div className="w-16 h-16 rounded-xl bg-[#1A2036] border border-[#2A3150] flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div className="text-sm text-[#EAEAF0] text-center">AI Agent</div>
            </div>

            <ArrowRight className="w-6 h-6 text-[#2A3150]" />

            {/* Trust Score */}
            <div className="flex flex-col items-center gap-3 w-32">
              <div className="w-16 h-16 rounded-xl bg-[#1A2036] border border-[#2A3150] flex items-center justify-center">
                <Shield className="w-7 h-7 text-[#2ECC71]" />
              </div>
              <div className="text-sm text-[#EAEAF0] text-center">Trust Score</div>
            </div>

            <ArrowRight className="w-6 h-6 text-[#2A3150]" />

            {/* Action */}
            <div className="flex flex-col items-center gap-3 w-32">
              <div className="w-16 h-16 rounded-xl bg-[#1A2036] border border-[#2A3150] flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-[#2EF2C9]" />
              </div>
              <div className="text-sm text-[#EAEAF0] text-center">Action</div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Data Handling */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid md:grid-cols-2 gap-6"
      >
        <Card className="border-[#E74C3C]/20">
          <h3 className="text-[#EAEAF0] font-medium mb-4 flex items-center gap-2">
            <span className="text-2xl">❌</span>
            What We DON'T Capture
          </h3>
          <ul className="space-y-2 text-sm text-[#A0A4B8]">
            <li className="flex items-start gap-2">
              <span className="text-[#E74C3C]">•</span>
              <span>Passwords or credentials</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#E74C3C]">•</span>
              <span>Actual keystrokes or typed content</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#E74C3C]">•</span>
              <span>Screenshots or screen recordings</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#E74C3C]">•</span>
              <span>Facial images or biometric templates</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#E74C3C]">•</span>
              <span>Personal identifiable information (PII)</span>
            </li>
          </ul>
        </Card>

        <Card className="border-[#2ECC71]/20">
          <h3 className="text-[#EAEAF0] font-medium mb-4 flex items-center gap-2">
            <span className="text-2xl">✅</span>
            What We DO Capture
          </h3>
          <ul className="space-y-2 text-sm text-[#A0A4B8]">
            <li className="flex items-start gap-2">
              <span className="text-[#2ECC71]">•</span>
              <span>Keystroke timing patterns (not content)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2ECC71]">•</span>
              <span>Mouse movement trajectories</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2ECC71]">•</span>
              <span>Scroll behavior entropy</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2ECC71]">•</span>
              <span>Navigation patterns</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2ECC71]">•</span>
              <span>Session consistency metadata</span>
            </li>
          </ul>
        </Card>
      </motion.div>

      {/* Compliance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card className="bg-gradient-to-r from-[#4DA3FF]/10 to-[#2EF2C9]/10 border-[#4DA3FF]/20">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-xl bg-[#4DA3FF]/20 flex items-center justify-center flex-shrink-0">
              <FileCheck className="w-7 h-7 text-[#4DA3FF]" />
            </div>
            <div className="flex-1 space-y-3">
              <h3 className="text-xl text-[#EAEAF0]">Compliance-Ready Architecture</h3>
              <p className="text-[#A0A4B8]">
                Sentinel-Stream is designed for regulatory compliance: GDPR, CCPA, SOC 2, and PCI-DSS. 
                Every AI decision is explainable, auditable, and reversible.
              </p>
              <div className="flex gap-3 pt-2">
                <span className="px-3 py-1 rounded-full bg-[#4DA3FF]/20 text-[#4DA3FF] text-xs">GDPR</span>
                <span className="px-3 py-1 rounded-full bg-[#4DA3FF]/20 text-[#4DA3FF] text-xs">CCPA</span>
                <span className="px-3 py-1 rounded-full bg-[#4DA3FF]/20 text-[#4DA3FF] text-xs">SOC 2</span>
                <span className="px-3 py-1 rounded-full bg-[#4DA3FF]/20 text-[#4DA3FF] text-xs">PCI-DSS</span>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}