import { ReactNode } from "react";
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";

interface AlertBannerProps {
  variant: "high-risk" | "warning" | "success";
  children: ReactNode;
  icon?: boolean;
}

export function AlertBanner({ variant, children, icon = true }: AlertBannerProps) {
  const config = {
    "high-risk": {
      class: "alert-high-risk",
      Icon: AlertTriangle,
      color: "#E74C3C"
    },
    "warning": {
      class: "alert-warning",
      Icon: AlertCircle,
      color: "#f59e0b"
    },
    "success": {
      class: "alert-success",
      Icon: CheckCircle,
      color: "#2ECC71"
    }
  };

  const { class: alertClass, Icon, color } = config[variant];

  return (
    <div className={alertClass}>
      <div className="flex items-start gap-4">
        {icon && <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color }} />}
        <div className="flex-1 body-regular">
          {children}
        </div>
      </div>
    </div>
  );
}
