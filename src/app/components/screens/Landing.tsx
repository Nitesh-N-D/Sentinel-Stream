import { Link } from "react-router";
import { Shield, Fingerprint, ShieldAlert, Zap, ArrowRight, Activity } from "lucide-react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { motion } from "motion/react";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export function Landing() {
  useDocumentTitle("Overview");

  const features = [
    {
      icon: Fingerprint,
      title: "Digital DNA Authentication",
      description: "Continuous behavioral biometrics that authenticate users based on how they interact, not what they remember.",
    },
    {
      icon: ShieldAlert,
      title: "Deepfake & Session Hijack Defense",
      description: "AI-powered anomaly detection identifies suspicious patterns in real-time, blocking attacks before damage occurs.",
    },
    {
      icon: Zap,
      title: "Zero-Friction Security",
      description: "Invisible protection that works in the background. Users never see passwords, OTPs, or authentication prompts.",
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8 pt-12"
      >
        {/* Abstract AI Security Visual */}
        <div className="relative mx-auto w-32 h-32 mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2EF2C9] to-[#4DA3FF] rounded-full opacity-20 blur-3xl animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-4 border-[#2EF2C9]/30 flex items-center justify-center">
              <Shield className="w-12 h-12 text-[#2EF2C9]" />
            </div>
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#2ECC71] rounded-full border-4 border-[#0B0F1A] animate-pulse" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#4DA3FF] rounded-full border-4 border-[#0B0F1A] animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-[#EAEAF0]">
            Sentinel-Stream
          </h1>
          <p className="text-2xl text-[#A0A4B8] max-w-3xl mx-auto">
            Continuous Behavioral Authentication & Deepfake Defense
          </p>
          <p className="text-lg text-[#6C728A] max-w-2xl mx-auto">
            Trust & Privacy in the AI Era — Bank-grade security powered by Digital DNA, not passwords
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 pt-4">
          <Link to="/dashboard">
            <Button variant="primary">
              <Activity className="w-5 h-5" />
              View Live Trust Score
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/architecture">
            <Button variant="secondary">
              Learn How It Works
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Feature Cards */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-3 gap-6"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index}>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2EF2C9]/20 to-[#4DA3FF]/20 flex items-center justify-center border border-[#2EF2C9]/20">
                  <Icon className="w-6 h-6 text-[#2EF2C9]" />
                </div>
                <h3 className="text-xl text-[#EAEAF0]">{feature.title}</h3>
                <p className="text-[#A0A4B8] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          );
        })}
      </motion.div>

      {/* Value Proposition */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Card className="bg-gradient-to-br from-[#1A2036]/85 to-[#12172A]/85">
          <div className="text-center space-y-6 py-8">
            <h2 className="text-3xl text-[#EAEAF0]">
              An invisible security layer for users,<br />
              an extremely powerful control system for institutions
            </h2>
            <div className="flex items-center justify-center gap-8 text-[#A0A4B8] pt-4">
              <div className="flex flex-col items-center gap-2">
                <div className="text-4xl font-bold text-[#2EF2C9]">0</div>
                <div className="text-sm">Passwords</div>
              </div>
              <div className="w-px h-12 bg-[#2A3150]" />
              <div className="flex flex-col items-center gap-2">
                <div className="text-4xl font-bold text-[#2EF2C9]">100%</div>
                <div className="text-sm">Continuous</div>
              </div>
              <div className="w-px h-12 bg-[#2A3150]" />
              <div className="flex flex-col items-center gap-2">
                <div className="text-4xl font-bold text-[#2EF2C9]">Real-time</div>
                <div className="text-sm">Protection</div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}