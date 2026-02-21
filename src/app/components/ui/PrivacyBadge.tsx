import { Shield } from 'lucide-react';

export function PrivacyBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2ECC71]/10 border border-[#2ECC71]/20">
      <Shield className="w-4 h-4 text-[#2ECC71]" />
      <div className="flex flex-col">
        <span className="text-xs text-[#2ECC71] font-medium">Privacy Preserving</span>
        <span className="text-[10px] text-[#2ECC71]/70">No Raw Data Stored</span>
      </div>
    </div>
  );
}
