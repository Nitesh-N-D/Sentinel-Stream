import { useEffect, useState } from "react";
import { Card } from "../ui/Card";
import { TrustScoreMeter } from "../ui/TrustScoreMeter";
import {
  MapPin,
  Monitor,
  Clock,
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import { motion } from "motion/react";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

/* ======================================================
   🎯 PROTOTYPE TRUST SCORE GENERATOR (REALISTIC)
   ====================================================== */
function generatePrototypeTrust() {
  const scenario = Math.random();

  let score;
  if (scenario < 0.7) {
    score = Math.floor(75 + Math.random() * 20); // Normal user
  } else if (scenario < 0.9) {
    score = Math.floor(55 + Math.random() * 15); // Mild anomaly
  } else {
    score = Math.floor(20 + Math.random() * 30); // High risk
  }

  let status, message;
  if (score >= 80) {
    status = "LOW";
    message = "Behavior matches verified Digital DNA";
  } else if (score >= 50) {
    status = "MEDIUM";
    message = "Minor behavioral deviation detected";
  } else {
    status = "HIGH";
    message = "High-risk behavioral deviation detected";
  }

  return { score, status, message };
}

export function Dashboard() {
  useDocumentTitle("User Dashboard");

  const [trustScore, setTrustScore] = useState<number | null>(null);
  const [riskLevel, setRiskLevel] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const simulated = generatePrototypeTrust();
    setTrustScore(simulated.score);
    setRiskLevel(simulated.status);
    setStatusMessage(simulated.message);
  }, []);

  const isSafe = trustScore !== null && trustScore >= 80;

  const activities = [
    { time: "2 min ago", action: "Login verified", status: "success" },
    { time: "15 min ago", action: "Transaction approved", status: "success" },
    { time: "1 hour ago", action: "Session authenticated", status: "success" },
    { time: "3 hours ago", action: "Profile updated", status: "success" }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl text-[#EAEAF0] mb-2">
          User Session Dashboard
        </h1>
        <p className="text-[#A0A4B8]">
          Real-time behavioral authentication monitoring
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* User Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <div className="space-y-4">
              <h3 className="text-lg text-[#EAEAF0] mb-4">
                Session Information
              </h3>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2EF2C9] to-[#4DA3FF] flex items-center justify-center">
                  <span className="text-[#0B0F1A] font-semibold">SA</span>
                </div>
                <div>
                  <div className="text-[#EAEAF0] font-medium">
                    Tamilarasan
                  </div>
                  <div className="text-sm text-[#6C728A]">
                    Premium Account
                  </div>
                </div>
              </div>

              <div className="h-px bg-[#2A3150]" />

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Monitor className="w-4 h-4 text-[#4DA3FF]" />
                  <span className="text-[#A0A4B8]">MacBook Pro 16"</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-[#4DA3FF]" />
                  <span className="text-[#A0A4B8]">Chrompet,Chengalpattu</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="w-4 h-4 text-[#4DA3FF]" />
                  <span className="text-[#A0A4B8]">Active for 2h 34m</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Trust Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="h-full flex flex-col items-center justify-center">
            {trustScore !== null && (
              <>
                <TrustScoreMeter score={trustScore} size={240} animate />

                <div className="mt-6 text-center space-y-2">
                  <div
                    className={`flex items-center justify-center gap-2 ${
                      isSafe ? "text-[#2ECC71]" : "text-[#E74C3C]"
                    }`}
                  >
                    {isSafe ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <AlertTriangle className="w-5 h-5" />
                    )}
                    <span className="font-medium">
                      {statusMessage}
                    </span>
                  </div>
                  <p className="text-sm text-[#A0A4B8]">
                    Risk level: {riskLevel}
                  </p>
                </div>
              </>
            )}
          </Card>
        </motion.div>
      </div>

      {/* Activity Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card>
          <h3 className="text-lg text-[#EAEAF0] mb-4">
            Recent Activity
          </h3>
          <div className="space-y-3">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 py-2">
                <div className="w-2 h-2 rounded-full bg-[#2ECC71]" />
                <div className="flex-1 flex items-center justify-between">
                  <span className="text-[#EAEAF0]">
                    {activity.action}
                  </span>
                  <span className="text-sm text-[#6C728A]">
                    {activity.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Behavioral Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid md:grid-cols-3 gap-6"
      >
        <Card>
          <div className="space-y-2">
            <div className="text-sm text-[#A0A4B8]">
              Keystroke Match
            </div>
            <div className="text-3xl font-bold text-[#2ECC71]">
              96%
            </div>
            <div className="text-xs text-[#6C728A]">
              Typing rhythm verified
            </div>
          </div>
        </Card>
        <Card>
          <div className="space-y-2">
            <div className="text-sm text-[#A0A4B8]">
              Mouse Dynamics
            </div>
            <div className="text-3xl font-bold text-[#2ECC71]">
              94%
            </div>
            <div className="text-xs text-[#6C728A]">
              Movement patterns normal
            </div>
          </div>
        </Card>
        <Card>
          <div className="space-y-2">
            <div className="text-sm text-[#A0A4B8]">
              Session Consistency
            </div>
            <div className="text-3xl font-bold text-[#2ECC71]">
              98%
            </div>
            <div className="text-xs text-[#6C728A]">
              No anomalies detected
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Prototype Disclaimer */}
      <p className="text-xs text-[#6C728A]">
        Prototype mode: Trust score is simulated to demonstrate continuous
        behavioral authentication logic.
      </p>
    </div>
  );
}