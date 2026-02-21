import { Card } from "../ui/Card";
import { PrivacyBadge } from "../ui/PrivacyBadge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter, Cell } from "recharts";
import { motion } from "motion/react";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export function BehavioralSignals() {
  useDocumentTitle("Behavioral Signals");

  const keystrokeData = [
    { key: 'A', timing: 142 },
    { key: 'E', timing: 138 },
    { key: 'T', timing: 145 },
    { key: 'O', timing: 140 },
    { key: 'I', timing: 143 },
    { key: 'N', timing: 141 },
    { key: 'S', timing: 144 },
    { key: 'R', timing: 139 },
  ];

  const mouseData = Array.from({ length: 30 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    intensity: Math.random() * 10 + 5,
  }));

  const scrollData = [
    { time: '0s', entropy: 0.72 },
    { time: '5s', entropy: 0.68 },
    { time: '10s', entropy: 0.75 },
    { time: '15s', entropy: 0.71 },
    { time: '20s', entropy: 0.74 },
    { time: '25s', entropy: 0.69 },
    { time: '30s', entropy: 0.73 },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl text-[#EAEAF0] mb-2">Behavioral Signals</h1>
          <p className="text-[#A0A4B8]">Privacy-preserving biometric patterns</p>
        </div>
        <PrivacyBadge />
      </motion.div>

      {/* Privacy Notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="bg-gradient-to-r from-[#2ECC71]/10 to-[#2EF2C9]/10 border-[#2ECC71]/20">
          <div className="flex items-start gap-4">
            <div className="flex-1 space-y-2">
              <h3 className="text-[#EAEAF0] font-medium">No Personal Content Captured</h3>
              <p className="text-sm text-[#A0A4B8]">
                Sentinel-Stream analyzes only anonymized behavioral metadata: timing patterns, 
                movement dynamics, and interaction rhythms. We never capture what you type, 
                only how you type.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Keystroke Rhythm */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <h3 className="text-lg text-[#EAEAF0] mb-4">Keystroke Rhythm Timing</h3>
          <p className="text-sm text-[#A0A4B8] mb-6">
            Average key press duration (milliseconds) — Pattern remains consistent with verified profile
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={keystrokeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2A3150" />
              <XAxis dataKey="key" stroke="#A0A4B8" />
              <YAxis stroke="#A0A4B8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1A2036',
                  border: '1px solid #2A3150',
                  borderRadius: '8px',
                  color: '#EAEAF0',
                }}
              />
              <Bar dataKey="timing" fill="#2EF2C9" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Mouse Movement Heatmap */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <h3 className="text-lg text-[#EAEAF0] mb-4">Mouse Movement Heatmap</h3>
            <p className="text-sm text-[#A0A4B8] mb-6">
              Movement distribution — Natural, human-like patterns detected
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke="#2A3150" />
                <XAxis type="number" dataKey="x" stroke="#A0A4B8" hide />
                <YAxis type="number" dataKey="y" stroke="#A0A4B8" hide />
                <Tooltip
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{
                    backgroundColor: '#1A2036',
                    border: '1px solid #2A3150',
                    borderRadius: '8px',
                    color: '#EAEAF0',
                  }}
                />
                <Scatter data={mouseData} fill="#4DA3FF">
                  {mouseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#4DA3FF" opacity={entry.intensity / 15} />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        {/* Scroll Behavior Entropy */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <h3 className="text-lg text-[#EAEAF0] mb-4">Scroll Behavior Entropy</h3>
            <p className="text-sm text-[#A0A4B8] mb-6">
              Scroll pattern randomness — Consistent with natural browsing
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={scrollData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2A3150" />
                <XAxis dataKey="time" stroke="#A0A4B8" />
                <YAxis domain={[0, 1]} stroke="#A0A4B8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1A2036',
                    border: '1px solid #2A3150',
                    borderRadius: '8px',
                    color: '#EAEAF0',
                  }}
                />
                <Bar dataKey="entropy" fill="#2ECC71" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </div>

      {/* Signal Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid md:grid-cols-4 gap-6"
      >
        <Card>
          <div className="text-sm text-[#A0A4B8] mb-2">Signals Captured</div>
          <div className="text-2xl font-bold text-[#EAEAF0]">1,247</div>
          <div className="text-xs text-[#6C728A] mt-1">Last 30 minutes</div>
        </Card>
        <Card>
          <div className="text-sm text-[#A0A4B8] mb-2">Anomalies</div>
          <div className="text-2xl font-bold text-[#2ECC71]">0</div>
          <div className="text-xs text-[#6C728A] mt-1">All patterns normal</div>
        </Card>
        <Card>
          <div className="text-sm text-[#A0A4B8] mb-2">Confidence Level</div>
          <div className="text-2xl font-bold text-[#2ECC71]">High</div>
          <div className="text-xs text-[#6C728A] mt-1">98.3% accuracy</div>
        </Card>
        <Card>
          <div className="text-sm text-[#A0A4B8] mb-2">Privacy Status</div>
          <div className="text-2xl font-bold text-[#2ECC71]">Protected</div>
          <div className="text-xs text-[#6C728A] mt-1">Zero data exposure</div>
        </Card>
      </motion.div>
    </div>
  );
}