import { Card } from "../ui/Card";
import { AgentFlowPills } from "../ui/AgentFlowPills";
import { ShieldCheck, Lock, AlertCircle, FileText, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export function AutonomousAction() {
  useDocumentTitle("Autonomous Actions");

  const actions = [
    {
      icon: ShieldCheck,
      title: "Transaction Blocked",
      description: "High-value transfer cancelled due to behavioral anomaly detection",
      timestamp: "10:20:34 AM",
      status: "executed",
    },
    {
      icon: Lock,
      title: "Account Temporarily Locked",
      description: "Session access restricted — User notified via verified channels",
      timestamp: "10:20:35 AM",
      status: "executed",
    },
    {
      icon: AlertCircle,
      title: "Security Team Notified",
      description: "Incident escalated to monitoring team for manual review",
      timestamp: "10:20:36 AM",
      status: "executed",
    },
  ];

  const auditLog = [
    { timestamp: "10:20:32", event: "Anomaly detected in keystroke rhythm", severity: "high" },
    { timestamp: "10:20:33", event: "Trust score dropped below critical threshold (41)", severity: "critical" },
    { timestamp: "10:20:34", event: "AI agent initiated protective measures", severity: "info" },
    { timestamp: "10:20:34", event: "Transaction ID #T-8472-XK blocked", severity: "info" },
    { timestamp: "10:20:35", event: "Account locked — Re-authentication required", severity: "info" },
    { timestamp: "10:20:36", event: "Alert sent to security operations center", severity: "info" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl text-[#EAEAF0] mb-2">Autonomous Action Response</h1>
        <p className="text-[#A0A4B8]">AI agent executed protective measures in real-time</p>
      </motion.div>

      {/* Agent Flow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card>
          <h3 className="text-lg text-[#EAEAF0] mb-6">AI Agent Decision Pipeline</h3>
          <div className="flex justify-center">
            <AgentFlowPills activeStep={3} />
          </div>
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2EF2C9]/10 border border-[#2EF2C9]/20">
              <CheckCircle className="w-4 h-4 text-[#2EF2C9]" />
              <span className="text-sm text-[#2EF2C9] font-medium">AI Agent Executed Action</span>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Action Results */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-lg text-[#EAEAF0] mb-4">Protective Actions Executed</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Card key={index} className="border-[#2ECC71]/20">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2ECC71]/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#2ECC71]" />
                  </div>
                  <div>
                    <h4 className="text-[#EAEAF0] font-medium mb-2">{action.title}</h4>
                    <p className="text-sm text-[#A0A4B8] mb-3">{action.description}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#6C728A]">{action.timestamp}</span>
                      <span className="flex items-center gap-1 text-[#2ECC71]">
                        <CheckCircle className="w-3 h-3" />
                        {action.status}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </motion.div>

      {/* Impact Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid md:grid-cols-4 gap-6"
      >
        <Card>
          <div className="text-sm text-[#A0A4B8] mb-2">Response Time</div>
          <div className="text-2xl font-bold text-[#2ECC71]">2.1s</div>
          <div className="text-xs text-[#6C728A] mt-1">From detection to action</div>
        </Card>
        <Card>
          <div className="text-sm text-[#A0A4B8] mb-2">Prevented Loss</div>
          <div className="text-2xl font-bold text-[#2ECC71]">$47,300</div>
          <div className="text-xs text-[#6C728A] mt-1">Transaction blocked</div>
        </Card>
        <Card>
          <div className="text-sm text-[#A0A4B8] mb-2">Actions Taken</div>
          <div className="text-2xl font-bold text-[#2ECC71]">3</div>
          <div className="text-xs text-[#6C728A] mt-1">Automated responses</div>
        </Card>
        <Card>
          <div className="text-sm text-[#A0A4B8] mb-2">User Impact</div>
          <div className="text-2xl font-bold text-[#2ECC71]">Minimal</div>
          <div className="text-xs text-[#6C728A] mt-1">Seamless protection</div>
        </Card>
      </motion.div>

      {/* Compliance-Ready Audit Log */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-5 h-5 text-[#4DA3FF]" />
            <h3 className="text-lg text-[#EAEAF0]">Compliance-Ready Audit Log</h3>
          </div>
          <div className="space-y-2 max-h-80 overflow-y-auto">
            {auditLog.map((log, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-3 rounded-lg bg-[#12172A]/50 border border-[#2A3150]/50 hover:border-[#2A3150] transition-colors"
              >
                <div className="flex-shrink-0 w-20 text-xs text-[#6C728A] font-mono">
                  {log.timestamp}
                </div>
                <div className="flex-1 text-sm text-[#A0A4B8]">
                  {log.event}
                </div>
                <div className={`
                  flex-shrink-0 text-xs px-2 py-0.5 rounded-full uppercase
                  ${log.severity === 'critical' ? 'bg-[#E74C3C]/20 text-[#E74C3C]' : ''}
                  ${log.severity === 'high' ? 'bg-[#F1C40F]/20 text-[#F1C40F]' : ''}
                  ${log.severity === 'info' ? 'bg-[#4DA3FF]/20 text-[#4DA3FF]' : ''}
                `}>
                  {log.severity}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Next Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card className="bg-gradient-to-r from-[#4DA3FF]/10 to-[#2EF2C9]/10 border-[#4DA3FF]/20">
          <h3 className="text-[#EAEAF0] font-medium mb-3">Recommended Next Steps</h3>
          <ul className="space-y-2 text-sm text-[#A0A4B8]">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#4DA3FF] flex-shrink-0 mt-0.5" />
              <span>User has been notified via verified email and SMS</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#4DA3FF] flex-shrink-0 mt-0.5" />
              <span>Re-authentication required through trusted device</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#4DA3FF] flex-shrink-0 mt-0.5" />
              <span>Security team conducting manual review</span>
            </li>
          </ul>
        </Card>
      </motion.div>
    </div>
  );
}