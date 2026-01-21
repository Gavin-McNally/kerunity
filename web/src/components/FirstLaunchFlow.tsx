import React, { useEffect, useState } from "react";

const STORAGE_KEY = "kerunity_onboarding_complete";

type Step = 1 | 2 | 3 | 4;

const styles = `
.first-launch-flow {
  position: fixed;
  inset: 0;
  z-index: 99999;
  background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%) !important;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  animation: first-launch-fade-in 0.3s ease;
}

.first-launch-step {
  width: 100%;
  max-width: 360px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.py-12 {
  padding-top: 48px;
  padding-bottom: 48px;
}

.py-10 {
  padding-top: 40px;
  padding-bottom: 40px;
}

.pt-6 {
  padding-top: 24px;
}

.pt-4 {
  padding-top: 16px;
}

.pt-8 {
  padding-top: 32px;
}

.pb-8 {
  padding-bottom: 32px;
}

.pb-4 {
  padding-bottom: 16px;
}

.overflow-y-auto {
  overflow-y: auto;
}

.h-100dvh {
  height: 100dvh;
}

.scrollbar-thin {
  scrollbar-width: thin;
}

.scrollbar-track-transparent {
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
}

.scrollbar-thumb-white\/20 {
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
}

.scrollbar-thumb-rounded-full::-webkit-scrollbar-thumb {
  border-radius: 9999px;
}

.scrollbar-thin::-webkit-scrollbar {
  width: 4px;
}

.scrollbar-track-transparent::-webkit-scrollbar-track {
  background: transparent;
}

.scrollbar-thumb-white\/20::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
}

.hover\:scrollbar-thumb-\[\#f7e1c6\]:hover::-webkit-scrollbar-thumb {
  background: #f7e1c6;
}

/* Force scrollbar to be visible */
.custom-scroll::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.custom-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scroll::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
}

.custom-scroll {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
}

.mt-8 {
  margin-top: 32px;
}

.mt-2 {
  margin-top: 8px;
}

.h-full {
  height: 100%;
}

.flex-1 {
  flex: 1;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.gap-10 {
  gap: 40px;
}

.gap-3 {
  gap: 12px;
}

.min-h-0 {
  min-height: 0;
}

.flex-1 {
  flex: 1;
}

.min-h-0 {
  min-height: 0;
}

.min-h-screen {
  min-height: 100vh;
}

.justify-between {
  justify-content: space-between;
}

.min-h-60vh {
  min-height: 60vh;
}
.min-h-400 {
  min-height: 400px;
}

.min-h-500 {
  min-height: 500px;
}


.mb-12 {
  margin-bottom: 48px;
}

.first-launch-content {
  transition: opacity 0.3s ease;
}

.mb-6 {
  margin-bottom: 24px;
}

.mb-2 {
  margin-bottom: 8px;
}

.mb-8 {
  margin-bottom: 32px;
}

.my-4 {
  margin-top: 16px;
  margin-bottom: 16px;
}

.mt-4 {
  margin-top: 16px;
}

.w-full {
  width: 100%;
}

.px-6 {
  padding-left: 24px;
  padding-right: 24px;
}

.bg-white\\/5 {
  background: rgba(255, 255, 255, 0.05);
}

.border-white\\/10 {
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.rounded-xl {
  border-radius: 12px;
}

.p-5 {
  padding: 20px;
}

.p-4 {
  padding: 16px;
}

.text-center {
  text-align: center;
}

.shadow-lg {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
}

.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}

.text-slate-200 {
  color: rgba(226, 232, 240, 0.95);
}

.text-sm {
  font-size: 14px;
}

.leading-relaxed {
  line-height: 1.6;
}

.mb-3 {
  margin-bottom: 12px;
}

.mb-4 {
  margin-bottom: 16px;
}

.leading-7 {
  line-height: 1.75;
}

.ml-3 {
  margin-left: 12px;
}

.text-white {
  color: #ffffff;
}

.decoration-white-50 {
  text-decoration-color: rgba(255, 255, 255, 0.5);
}

.hover\\:decoration-white:hover {
  text-decoration-color: #ffffff;
}

.inline-block {
  display: inline-block;
}

.cursor-pointer {
  cursor: pointer;
}

.font-bold {
  font-weight: 700;
}

.font-extrabold {
  font-weight: 800;
}

.text-base {
  font-size: 16px;
}

.text-\\[\\#f7e1c6\\] {
  color: #f7e1c6;
}

.inline-flex {
  display: inline-flex;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.px-3 {
  padding-left: 12px;
  padding-right: 12px;
}

.mx-2 {
  margin-left: 8px;
  margin-right: 8px;
}

.mx-1 {
  margin-left: 4px;
  margin-right: 4px;
}

.align-middle {
  vertical-align: middle;
}

.transition-all {
  transition: all 0.2s ease;
}

.duration-300 {
  transition-duration: 0.3s;
}

.duration-200 {
  transition-duration: 0.2s;
}

.duration-500 {
  transition-duration: 0.5s;
}

.px-2 {
  padding-left: 8px;
  padding-right: 8px;
}

.py-1 {
  padding-top: 4px;
  padding-bottom: 4px;
}

.py-0\\.5 {
  padding-top: 2px;
  padding-bottom: 2px;
}

.rounded-md {
  border-radius: 8px;
}

.rounded-lg {
  border-radius: 12px;
}

.border-2 {
  border-width: 2px;
  border-style: solid;
}

.border-emergency {
  border-color: #8a2b3b;
}

.bg-emergency-10 {
  background: rgba(138, 43, 59, 0.1);
}

.shadow-emergency {
  box-shadow: 0 0 10px rgba(138, 43, 59, 0.5);
}

.active\\:scale-95:active {
  transform: scale(0.95);
}

.no-underline {
  text-decoration: none;
}

.w-5 {
  width: 20px;
}

.h-5 {
  height: 20px;
}

.mr-1 {
  margin-right: 4px;
}

.leading-loose {
  line-height: 1.8;
}

.text-lg {
  font-size: 18px;
}

.text-xs {
  font-size: 12px;
}

.uppercase {
  text-transform: uppercase;
}

.tracking-wide {
  letter-spacing: 0.06em;
}

.underline {
  text-decoration: underline;
}

.decoration-2 {
  text-decoration-thickness: 2px;
}

.underline-offset-4 {
  text-underline-offset: 4px;
}

.hover\\:text-white:hover {
  color: #ffffff;
}

.transition-colors {
  transition: color 0.2s ease;
}

.bg-white\\/10 {
  background: rgba(255, 255, 255, 0.1);
}

.border-white {
  border: 1px solid #ffffff;
}

.text-white {
  color: #ffffff;
}

.decoration-white {
  text-decoration-color: rgba(255, 255, 255, 1);
}

.decoration-gold-50 {
  text-decoration-color: rgba(247, 225, 198, 0.5);
}

.shadow-white-glow {
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
}

.scale-105 {
  transform: scale(1.05);
}

.max-w-2xl {
  max-width: 672px;
}

.text-center {
  text-align: center;
}

.text-slate-300 {
  color: rgba(203, 213, 225, 0.9);
}

.text-sm {
  font-size: 14px;
}

.leading-relaxed {
  line-height: 1.6;
}

.max-w-85 {
  max-width: 85%;
}

.space-y-3 > * + * {
  margin-top: 12px;
}

.text-white {
  color: #ffffff;
}

.text-gold {
  color: #f7e1c6;
}

.first-launch-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.first-launch-title {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin: 0 0 8px;
}

.first-launch-subtitle {
  font-size: 18px;
  color: #f7e1c6;
  font-weight: 500;
  margin: 0;
}

.btn-slab {
  width: 100%;
  min-height: 56px;
  border-radius: 16px;
  border: 1.5px solid #f7e1c6;
  background: rgba(247, 225, 198, 0.08);
  backdrop-filter: blur(8px);
  color: #f7e1c6;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.15s ease;
  box-shadow: 0 0 20px rgba(247, 225, 198, 0.1);
}

.btn-slab:hover {
  background: rgba(247, 225, 198, 0.15);
}

.btn-slab:active {
  transform: scale(0.98);
}

.btn-slab[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-slab:not([disabled]) {
  opacity: 1;
}

.first-launch-warning {
  display: flex;
  align-items: center;
  justify-content: center;
}

.first-launch-warning svg {
  filter: drop-shadow(0 0 10px rgba(247, 225, 198, 0.2));
}

.first-launch-headline {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0;
}

.first-launch-checkbox {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  cursor: pointer;
}

.first-launch-checkbox input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.first-launch-checkbox-box {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.first-launch-checkbox-box::before {
  content: "";
  width: 24px;
  height: 24px;
  border-radius: 6px;
  border: 1.5px solid #f7e1c6;
  background: rgba(255, 255, 255, 0.05);
  display: block;
}

.first-launch-checkbox input:checked + .first-launch-checkbox-box {
  background: transparent;
}

.first-launch-checkbox input:checked + .first-launch-checkbox-box::before {
  background: #f7e1c6;
}

.first-launch-checkbox input:checked + .first-launch-checkbox-box::after {
  content: "✓";
  position: absolute;
  font-size: 16px;
  color: #000000;
}

.first-launch-checkbox-text {
  font-size: 18px;
  color: #ffffff;
  font-weight: 700;
}

.first-launch-emergency-card {
  padding: 24px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.2), rgba(100, 0, 0, 0.2));
  border: 1px solid rgba(220, 38, 38, 0.4);
  font-weight: 700;
}

.first-launch-howto {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.first-launch-howto-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 16px;
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: left;
}

.first-launch-step-number {
  font-weight: 700;
  color: #f7e1c6;
}

.btn-action {
  width: 100%;
  min-height: 56px;
  border-radius: 16px;
  border: none;
  background: linear-gradient(135deg, #f7e1c6 0%, #d4b48d 100%);
  color: #000000;
  font-size: 16px;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(212, 180, 141, 0.3);
  cursor: pointer;
}

@keyframes first-launch-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`;

export default function FirstLaunchFlow() {
  console.log("🌊 FirstLaunchFlow Rendering...");
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [isOnboardingComplete, setOnboardingComplete] = useState(false);
  const [emergencyNum, setEmergencyNum] = useState("999");
  const [confirmCall, setConfirmCall] = useState(false);

  useEffect(() => {
    setCurrentStep(1);
    setIsVisible(true);
    setIsChecking(false);
  }, []);

  useEffect(() => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timeZone.includes("America")) {
      setEmergencyNum("911");
    } else if (timeZone.includes("Europe") && !timeZone.includes("London")) {
      setEmergencyNum("112");
    } else {
      setEmergencyNum("999");
    }
  }, []);

  useEffect(() => {
    if (!confirmCall) {
      return;
    }
    const timer = window.setTimeout(() => setConfirmCall(false), 10000);
    return () => window.clearTimeout(timer);
  }, [confirmCall]);

  const handleNextStep = (nextStep: Step) => {
    setIsExiting(true);
    window.setTimeout(() => {
      setCurrentStep(nextStep);
      setIsExiting(false);
    }, 300);
  };

  const handleComplete = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    window.dispatchEvent(new Event("onboarding-complete"));
    setIsExiting(true);
    window.setTimeout(() => {
      setOnboardingComplete(true);
    }, 500);
  };

  const handleEmergencyClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!confirmCall) {
      event.preventDefault();
      setConfirmCall(true);
    }
  };

  console.log("Force rendering FirstLaunchFlow");
  if (isOnboardingComplete) {
    return null;
  }

  return (
    <div className="first-launch-flow flex-col h-100dvh overflow-y-auto pt-4 pb-4 custom-scroll" role="dialog" aria-modal="true" aria-live="polite">
      <style>{styles}</style>
      <div
        className={`first-launch-content flex-1 min-h-0 flex flex-col w-full px-6 transition-all duration-500 ${
          currentStep === 1 ? "justify-center gap-10 items-center" : "justify-between pt-8 pb-8"
        }`}
        style={{ opacity: isExiting ? 0 : 1 }}
      >
        {isVisible && currentStep === 1 && (
          <div className="first-launch-step items-center">
          <div className="first-launch-icon" aria-hidden="true">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#f7e1c6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="4" strokeOpacity="0.5" />
            </svg>
          </div>
          <h1 className="first-launch-title">Kerunity</h1>
          <p className="first-launch-subtitle">Crisis support for carers</p>
          <button className="btn-slab" type="button" onClick={() => handleNextStep(2)}>
            Continue
          </button>
          </div>
        )}

        {isVisible && currentStep === 2 && (
          <div className="first-launch-step justify-between h-full min-h-500">
            <div>
              <h2 className="first-launch-headline mt-8 mb-2">Before you start</h2>
            </div>
            <div className="w-full px-6 mt-2 mb-2">
              <div className="bg-white/5 border-white/10 rounded-xl p-4 text-center shadow-lg backdrop-blur-sm max-w-2xl">
                <p className="text-slate-200 text-lg leading-loose mb-4">
                  Kerunity helps you organize care but is <strong className="text-white font-bold">not a medical device</strong> and is{" "}
                  <strong className="text-white font-bold">not monitored 24/7</strong>.
                </p>
                <p className="text-slate-200 text-lg leading-loose">
                  We cannot see your location or send an ambulance. If you are in danger, please{" "}
                  <a
                    href={confirmCall ? `tel:${emergencyNum}` : "#"}
                    onClick={handleEmergencyClick}
                    className="inline-block mx-1 text-white font-extrabold underline decoration-2 underline-offset-4 decoration-white-50 hover:decoration-white transition-all cursor-pointer"
                  >
                    {confirmCall ? "TAP AGAIN TO CALL" : `Call ${emergencyNum}`}
                  </a>{" "}
                  or go to A&amp;E.
                </p>
              </div>
            </div>
            <div>
              <label className="first-launch-checkbox mt-2 mb-6">
                <input
                  type="checkbox"
                  checked={isConfirmed}
                  onChange={(event) => setIsConfirmed(event.target.checked)}
                />
                <span className="first-launch-checkbox-box" aria-hidden="true" />
              <span className="first-launch-checkbox-text text-base ml-3">I understand</span>
              </label>
              <button className="btn-slab mb-4" type="button" onClick={() => handleNextStep(3)} disabled={!isConfirmed}>
                Continue
              </button>
            </div>
          </div>
        )}

        {isVisible && currentStep === 3 && (
          <div className="first-launch-step">
            <div className="first-launch-emergency-card">
              Emergency Contacts will appear here.
            </div>
            <button className="btn-slab" type="button" onClick={() => handleNextStep(4)}>
              Continue
            </button>
          </div>
        )}

        {isVisible && currentStep === 4 && (
          <div className="first-launch-step">
            <div className="first-launch-howto">
              <div className="first-launch-howto-card">
                <div className="first-launch-step-number">01.</div>
                <p>Find the situation you are facing.</p>
              </div>
              <div className="first-launch-howto-card">
                <div className="first-launch-step-number">02.</div>
                <p>Follow the calm, step-by-step guidance.</p>
              </div>
              <div className="first-launch-howto-card">
                <div className="first-launch-step-number">03.</div>
                <p>Use emergency options if you need them.</p>
              </div>
            </div>
            <button className="btn-action" type="button" onClick={handleComplete}>
              Get Started
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
