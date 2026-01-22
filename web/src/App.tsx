import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import SplashScreen from "./components/SplashScreen";
import FirstLaunchFlow from "./components/FirstLaunchFlow";

const STORAGE_KEY = "kerunity_onboarding_complete";

type View = "splash" | "onboarding" | "dashboard";

export default function App() {
  const [view, setView] = useState<View>("splash");

  const handleSplashFinish = () => {
    const isComplete = localStorage.getItem(STORAGE_KEY) === "true";
    setView(isComplete ? "dashboard" : "onboarding");
  };

  useEffect(() => {
    const handleOnboardingComplete = () => {
      setView("dashboard");
    };

    window.addEventListener("onboarding-complete", handleOnboardingComplete);
    return () => {
      window.removeEventListener("onboarding-complete", handleOnboardingComplete);
    };
  }, []);

  if (view === "splash") {
    return <SplashScreen onFinish={handleSplashFinish} />;
  }

  if (view === "onboarding") {
    return <FirstLaunchFlow />;
  }

  return <Dashboard />;
}
