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

.first-launch-content {
  transition: opacity 0.3s ease;
}

.mb-6 {
  margin-bottom: 24px;
}

.mb-8 {
  margin-bottom: 32px;
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

.font-bold {
  font-weight: 700;
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

.py-0\\.5 {
  padding-top: 2px;
  padding-bottom: 2px;
}

.mx-1 {
  margin-left: 4px;
  margin-right: 4px;
}

.align-middle {
  vertical-align: middle;
}

.bg-red-600\\/80 {
  background: rgba(220, 38, 38, 0.8);
}

.hover\\:bg-red-500:hover {
  background: rgba(239, 68, 68, 1);
}

.border-red-400\\/50 {
  border: 1px solid rgba(248, 113, 113, 0.5);
}

.rounded-full {
  border-radius: 9999px;
}

.shadow-red-glow {
  box-shadow: 0 0 10px rgba(220, 38, 38, 0.5);
}

.transition-all {
  transition: all 0.2s ease;
}

.active\\:scale-95:active {
  transform: scale(0.95);
}

.no-underline {
  text-decoration: none;
}

.w-3 {
  width: 12px;
}

.h-3 {
  height: 12px;
}

.mr-1 {
  margin-right: 4px;
}

.leading-loose {
  line-height: 1.8;
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
  color: #f7e1c6;
  font-weight: 500;
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

  console.log("Force rendering FirstLaunchFlow");
  if (isOnboardingComplete) {
    return null;
  }

  return (
    <div className="first-launch-flow" role="dialog" aria-modal="true" aria-live="polite">
      <style>{styles}</style>
      <div className="first-launch-content" style={{ opacity: isExiting ? 0 : 1 }}>
        {isVisible && currentStep === 1 && (
          <div className="first-launch-step">
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
          <div className="first-launch-step">
            <div className="first-launch-warning" aria-hidden="true">
              <svg width="72" height="72" viewBox="0 0 24 24" fill="none" className="mb-6">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z"
                  fill="#f7e1c6"
                />
              </svg>
            </div>
            <h2 className="first-launch-headline mb-6">Before you start</h2>
            <div className="w-full px-6 mb-8">
              <div className="bg-white/5 border-white/10 rounded-xl p-5 text-center shadow-lg backdrop-blur-sm">
                <p className="text-slate-200 text-base leading-relaxed mb-4">
                  Kerunity helps you organize care but is <strong className="text-white font-bold">not a medical device</strong> and is{" "}
                  <strong className="text-white font-bold">not monitored 24/7</strong>.
                </p>
                <p className="text-slate-200 text-base leading-7">
                  We cannot see your location or send an ambulance. If you are in danger, please call
                  <a
                    href={`tel:${emergencyNum}`}
                    className="inline-flex items-center justify-center px-3 py-0.5 mx-1 align-middle text-white font-bold bg-red-600/80 hover:bg-red-500 border-red-400/50 rounded-full shadow-red-glow transition-all active:scale-95 no-underline"
                  >
                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    {emergencyNum}
                  </a>
                  or go to A&amp;E.
                </p>
              </div>
            </div>
            <label className="first-launch-checkbox mt-4">
              <input
                type="checkbox"
                checked={isConfirmed}
                onChange={(event) => setIsConfirmed(event.target.checked)}
              />
              <span className="first-launch-checkbox-box" aria-hidden="true" />
              <span className="first-launch-checkbox-text text-base ml-3">I understand</span>
            </label>
            <button className="btn-slab" type="button" onClick={() => handleNextStep(3)} disabled={!isConfirmed}>
              Continue
            </button>
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
