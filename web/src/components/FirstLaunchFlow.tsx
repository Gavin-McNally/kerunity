import React, { useEffect, useState } from "react";

const STORAGE_KEY = "kerunity_onboarding_complete";

type Step = 1 | 2 | 3 | 4;

const styles = `
.first-launch-flow {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: linear-gradient(180deg, #23232a 0%, #050508 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  animation: first-launch-fade-in 0.3s ease;
}

.first-launch-step {
  width: 100%;
  max-width: 360px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.first-launch-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(247, 225, 198, 0.25);
  border: 1px solid rgba(247, 225, 198, 0.6);
  margin: 0 auto 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.first-launch-title {
  font-size: 32px;
  font-weight: 700;
  margin: 0;
}

.first-launch-subtitle {
  font-size: 18px;
  color: #f7e1c6;
  margin: 0;
}

.first-launch-btn {
  width: 100%;
  min-height: 72px;
  border-radius: 16px;
  border: 1px solid rgba(247, 225, 198, 0.6);
  background: transparent;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}

.first-launch-btn[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

.first-launch-warning {
  font-size: 32px;
  color: #f7e1c6;
}

.first-launch-headline {
  font-size: 24px;
  font-weight: 700;
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
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid rgba(247, 225, 198, 0.9);
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: #050508;
}

.first-launch-checkbox input:checked + .first-launch-checkbox-box {
  background: #f7e1c6;
}

.first-launch-checkbox input:checked + .first-launch-checkbox-box::after {
  content: "✓";
}

.first-launch-checkbox-text {
  font-size: 18px;
  color: #ffffff;
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
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  text-align: left;
}

.first-launch-step-number {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #f7e1c6;
  color: #050508;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.first-launch-start {
  width: 100%;
  min-height: 72px;
  border-radius: 16px;
  border: none;
  background: linear-gradient(135deg, #f7e1c6 0%, #d4b48d 100%);
  color: #050508;
  font-size: 18px;
  font-weight: 700;
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

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "true") {
      setIsVisible(false);
      return;
    }
    setCurrentStep(1);
    setIsVisible(true);
  }, []);

  const handleContinue = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
      return;
    }
    if (currentStep === 2) {
      setCurrentStep(3);
      return;
    }
    if (currentStep === 3) {
      setCurrentStep(4);
    }
  };

  const handleComplete = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setIsVisible(false);
  };

  console.log("Force rendering FirstLaunchFlow");
  // if (!isVisible) {
  //   return null;
  // }

  return (
    <div className="first-launch-flow" role="dialog" aria-modal="true" aria-live="polite">
      <style>{styles}</style>
      {currentStep === 1 && (
        <div className="first-launch-step">
          <div className="first-launch-icon" aria-hidden="true" />
          <h1 className="first-launch-title">Kerunity</h1>
          <p className="first-launch-subtitle">Crisis support for carers</p>
          <button className="first-launch-btn" type="button" onClick={handleContinue}>
            Continue
          </button>
        </div>
      )}

      {currentStep === 2 && (
        <div className="first-launch-step">
          <div className="first-launch-warning" aria-hidden="true">
            ⚠️
          </div>
          <h2 className="first-launch-headline">Before you start...</h2>
          <label className="first-launch-checkbox">
            <input
              type="checkbox"
              checked={isConfirmed}
              onChange={(event) => setIsConfirmed(event.target.checked)}
            />
            <span className="first-launch-checkbox-box" aria-hidden="true" />
            <span className="first-launch-checkbox-text">I understand</span>
          </label>
          <button className="first-launch-btn" type="button" onClick={handleContinue} disabled={!isConfirmed}>
            Continue
          </button>
        </div>
      )}

      {currentStep === 3 && (
        <div className="first-launch-step">
          <div className="first-launch-emergency-card">
            Emergency Contacts will appear here.
          </div>
          <button className="first-launch-btn" type="button" onClick={handleContinue}>
            Continue
          </button>
        </div>
      )}

      {currentStep === 4 && (
        <div className="first-launch-step">
          <div className="first-launch-howto">
            <div className="first-launch-howto-card">
              <div className="first-launch-step-number">1</div>
              <p>Find the situation you are facing.</p>
            </div>
            <div className="first-launch-howto-card">
              <div className="first-launch-step-number">2</div>
              <p>Follow the calm, step-by-step guidance.</p>
            </div>
            <div className="first-launch-howto-card">
              <div className="first-launch-step-number">3</div>
              <p>Use emergency options if you need them.</p>
            </div>
          </div>
          <button className="first-launch-start" type="button" onClick={handleComplete}>
            Get Started
          </button>
        </div>
      )}
    </div>
  );
}
