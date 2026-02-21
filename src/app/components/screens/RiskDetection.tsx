import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  AlertTriangle,
  TrendingDown,
  Activity,
  Mouse,
  Keyboard
} from "lucide-react";

import { Card } from "../ui/Card";
import { Alert } from "../ui/Alert";
import { AlertBanner } from "../ui/AlertBanner";
import { TrustScoreMeter } from "../ui/TrustScoreMeter";
import { Button } from "../ui/Button";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from "recharts";

/* ======================================================
   🎯 PROTOTYPE TRUST SCORE ENGINE (CONTROLLED)
   ====================================================== */
function generateRiskScenario() {
  const start = Math.floor(88 + Math.random() * 6); // 88–94
  const end = Math.floor(35 + Math.random() * 10); // 35–45

  return { start, end };
}

export function RiskDetection() {
  useDocumentTitle("Risk Detection");

  const { start, end } = generateRiskScenario();

  const [trustScore, setTrustScore] = useState(start);
  const [isDropping, setIsDropping] = useState(false);

  /* ---------------- Trust Score Drop Animation ---------------- */
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsDropping(true);
    }, 1200);

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (!isDropping) return;

    const interval = setInterval(() => {
      setTrustScore(prev => {
        if (prev <= end) {
          clearInterval(interval);
          return end;
        }
        return prev - 2;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [isDropping, end]);

  /* ---------------- Timeline Data ---------------- */
  const trustScoreHistory = [
    { time: "10:00", normal: start, suspicious: start },
    { time: "10:05", normal: start + 1, suspicious: start - 1 },
    { time: "10:10", normal: start, suspicious: start - 12 },
    { time: "10:15", normal: start - 1, suspicious: start - 30 },
    { time: "10:20", normal: start, suspicious: end }
  ];

  /* ---------------- Bar Chart Data ---------------- */
  const normalBehavior = [
    { metric: "Keystroke\nSpeed", value: 94 },
    { metric: "Mouse\nFlow", value: 92 },
    { metric: "Timing\nVariation", value: 90 },
    { metric: "Navigation\nPattern", value: 91 }
  ];

  const suspiciousBehavior = [
    { metric: "Keystroke\nSpeed", value: 38 },
    { metric: "Mouse\nFlow", value: 25 },
    { metric: "Timing\nVariation", value: 18 },
    { metric: "Navigation\nPattern", value: 32 }
  ];

  /* ---------------- Anomalies ---------------- */
  const anomalies = [
    {
      icon: Keyboard,
      title: "Typing Rhythm Anomaly",
      desc: "Keystroke timing deviates 78% from baseline. Pattern resembles automated input tools."
    },
    {
      icon: Mouse,
      title: "Robotic Mouse Movement",
      desc: "Cursor trajectories are linear with no human micro-corrections detected."
    },
    {
      icon: AlertTriangle,
      title: "Session Takeover Suspected",
      desc: "Behavioral signature mismatch detected during authenticated session."
    }
  ];

  return (
    <div className="space-y-8 fade-in">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold mb-2">Risk Detection Event</h2>
        <p className="text-gray-400">
          Behavioral anomaly detected — potential session takeover
        </p>
      </div>

      {/* Alert Banner */}
      <AlertBanner variant="high-risk">
        <div>
          <h3 className="text-xl font-semibold text-[#E74C3C] mb-2">
            ⚠️ Behavioral Deviation Detected
          </h3>
          <p className="text-[#EAEAF0] mb-4">
            Multiple behavioral anomalies identified. Trust score degradation
            indicates high confidence session compromise.
          </p>

          <div
  className="flex flex-wrap gap-3"
  style={{
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(26,32,54,0.6))",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "18px",
    padding: "16px 18px",
    boxShadow:
      "0 15px 40px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.04)"
  }}
>
         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/20 text-red-400 border border-red-500/30 backdrop-blur">
  <TrendingDown className="w-3 h-3" />
  Trust Score Dropping
</div>

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 backdrop-blur">
  AI Agent Active
</div>
            <Button variant="destructive" className="text-sm px-4 py-2">
              Freeze Account
            </Button>
          </div>
        </div>
      </AlertBanner>

      {/* Live Trust Score */}<div
  className="p-8"
  style={{
    background:
      "linear-gradient(180deg, rgba(26,32,54,0.85), rgba(11,15,26,0.95))",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    borderRadius: "22px",
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow:
      "0 25px 60px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.03)"
  }}
>
        <h3 className="text-xl font-semibold mb-6 text-center">
          Live Trust Score
        </h3>

        <div className="flex items-center justify-center gap-12">
          <div className="text-center">
            <div className="text-5xl font-bold text-green-400 mb-2">
              {start}
            </div>
            <div className="text-sm text-gray-400">Baseline</div>
          </div>

          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <TrendingDown className="w-8 h-8 text-red-400" />
          </motion.div>

          <div className="text-center">
            <motion.div
              key={trustScore}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              className="text-5xl font-bold text-red-400 mb-2"
            >
              {trustScore}
            </motion.div>
            <div className="text-sm text-gray-400">Current</div>
            <div className="text-xs text-red-400 mt-1">
              ANOMALY DETECTED
            </div>
          </div>
        </div>
      </div>

      {/* Side-by-side Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {[{ title: "Normal User Behavior", data: normalBehavior, color: "#10b981" },
          { title: "Suspicious Behavior", data: suspiciousBehavior, color: "#ef4444" }
        ].map((block, idx) => (
          <div key={idx} className="glass-card p-6">
            <h3
              className={`text-lg font-semibold mb-4 ${
                idx === 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              {block.title}
            </h3>

            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={block.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="metric" interval={0} />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {block.data.map((_, i) => (
                    <Cell key={i} fill={block.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>

      {/* Trust Score Timeline */}
      <Card>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="w-5 h-5 text-[#4DA3FF]" />
          <h3 className="text-lg text-[#EAEAF0]">Trust Score Timeline</h3>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trustScoreHistory}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Line dataKey="normal" stroke="#2ECC71" strokeWidth={3} />
            <Line
              dataKey="suspicious"
              stroke="#E74C3C"
              strokeDasharray="5 5"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Anomalies */}
      <Card>
        <h3 className="text-lg font-semibold mb-4">Detected Anomalies</h3>
        <div className="space-y-4">
          {anomalies.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex gap-4 p-4 bg-red-500/5 border border-red-500/20 rounded-lg"
            >
              <a.icon className="w-5 h-5 text-red-400 mt-1" />
              <div>
                <h4 className="font-semibold text-red-400">{a.title}</h4>
                <p className="text-sm text-gray-400">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Disclaimer */}
      <p className="text-xs text-gray-500">
        Prototype mode: Risk detection and trust score transitions are simulated
        to demonstrate AI-driven behavioral security workflows.
      </p>
    </div>
  );
}