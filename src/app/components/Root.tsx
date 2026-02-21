import { Outlet, Link, useLocation, useNavigation } from "react-router";
import { Shield, Activity, Brain, Lock, Eye, Network, Home } from "lucide-react";

export function Root() {
  const location = useLocation();
  const navigation = useNavigation();
  
  const navItems = [
    { path: "/", label: "Overview", icon: Home },
    { path: "/dashboard", label: "Dashboard", icon: Activity },
    { path: "/signals", label: "Signals", icon: Brain },
    { path: "/risk", label: "Risk Detection", icon: Shield },
    { path: "/action", label: "Actions", icon: Eye },
    { path: "/privacy", label: "Privacy", icon: Lock },
    { path: "/architecture", label: "Architecture", icon: Network },
  ];

  const isLoading = navigation.state === "loading";

  return (
    <div className="min-h-screen bg-[#0B0F1A]">
      {/* Loading bar */}
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-[#2EF2C9]/20 z-50">
          <div className="h-full bg-gradient-to-r from-[#2EF2C9] to-[#4DA3FF] animate-pulse" style={{ width: '40%' }} />
        </div>
      )}

      {/* Navigation Header */}
      <nav className="border-b border-[#2A3150] bg-[#12172A]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2EF2C9] to-[#4DA3FF] flex items-center justify-center shadow-lg shadow-[#2EF2C9]/20 group-hover:shadow-[#2EF2C9]/40 transition-all">
                <Shield className="w-6 h-6 text-[#0B0F1A]" />
              </div>
              <span className="text-xl tracking-tight text-[#EAEAF0] font-semibold">
                Sentinel-Stream
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-lg transition-all
                      ${isActive 
                        ? 'bg-[#2EF2C9]/10 text-[#2EF2C9] border border-[#2EF2C9]/20' 
                        : 'text-[#A0A4B8] hover:text-[#EAEAF0] hover:bg-[#1A2036]'
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}