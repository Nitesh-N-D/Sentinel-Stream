import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Landing } from "./components/screens/Landing";
import { Dashboard } from "./components/screens/Dashboard";
import { BehavioralSignals } from "./components/screens/BehavioralSignals";
import { RiskDetection } from "./components/screens/RiskDetection";
import { AutonomousAction } from "./components/screens/AutonomousAction";
import { TrustPrivacy } from "./components/screens/TrustPrivacy";
import { Architecture } from "./components/screens/Architecture";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Landing },
      { path: "dashboard", Component: Dashboard },
      { path: "signals", Component: BehavioralSignals },
      { path: "risk", Component: RiskDetection },
      { path: "action", Component: AutonomousAction },
      { path: "privacy", Component: TrustPrivacy },
      { path: "architecture", Component: Architecture },
    ],
  },
]);
