import React, { useEffect, useRef } from "react";
import { initDashboard } from "./dashboard/initDashboard";

export default function Dashboard() {
  const didInit = useRef(false);

  useEffect(() => {
    if (didInit.current) {
      return;
    }
    didInit.current = true;
    initDashboard();
  }, []);

  return (
    <div id="app-frame">
      <div id="app-content">
        <header>
          <div className="header-row">
            <button className="icon-btn-minimal" id="info-open" type="button" aria-label="Menu">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f7e1c6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            </button>

            <div className="header-actions">
              <button className="pill emergency-tab" type="button" id="urgent-open">
                <svg viewBox="0 0 24 24" className="phone-icon-svg" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Get help</span>
              </button>
            </div>
          </div>

          <div className="hero-section">
            <h1 className="hero-title">
              Start here <span className="hero-soft">You don't have to get this right.</span>
            </h1>

            <p className="safety-note">Guidance only. Not live monitoring. If anyone is in danger, call 999.</p>
          </div>

          {/* Post-emergency reassurance (hidden by default) */}
          <div id="reassurance-banner" className="reassurance-banner" style={{ display: "none" }}>
            <span>You did the right thing</span>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="heart-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="10%" stopColor="#f7e1c6" stopOpacity="1" />
                  <stop offset="90%" stopColor="#d4af7a" stopOpacity="1" />
                </linearGradient>
              </defs>
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="url(#heart-gradient)" stroke="none" />
            </svg>
          </div>

          <div className="search-container">
            <svg viewBox="0 0 24 24" className="search-icon search-icon-svg" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input id="query" type="text" className="search-input" placeholder="Search situations" />
            <button id="mic-btn" className="mic-btn" type="button" aria-label="Speak">
              <svg viewBox="0 0 24 24" className="mic-icon mic-icon-svg" aria-hidden="true">
                <rect x="9" y="2" width="6" height="12" rx="3" />
                <path d="M5 10a7 7 0 0 0 14 0" />
                <path d="M12 18v4" />
                <path d="M8 22h8" />
              </svg>
            </button>
          </div>
        </header>

        <div className="canvas">
          <div id="search-suggestions" className="room-container" style={{ display: "none" }} />

          {/* Continue chip: shows if crisis or urgent deck was exited mid-flow */}
          <div id="continue-chip" className="continue-chip" style={{ display: "none" }} data-resume-type="">
            <button id="continue-btn" type="button" className="continue-btn resume-card">
              <div className="resume-text-group">
                <div id="continue-label" className="resume-title">
                  Refusing meds
                </div>
                <div id="continue-detail" className="resume-subtitle">
                  Resume Step 3
                </div>
              </div>
              <div className="resume-action" aria-hidden="true">
                <div className="resume-play-btn">
                  <svg viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </div>
            </button>
          </div>

          <div id="common-home-section">
            <div className="section-label">Common situations</div>
            <div id="grid-container" className="room-container" />
            <button id="view-all-btn" type="button" className="view-all-btn" style={{ display: "none" }}>
              View all situations
            </button>
          </div>
        </div>

        {/* Crisis Card Screen */}
        <div id="stepdown-overlay" className="stepdown-backdrop" aria-hidden="true">
          <div className="stepdown-screen" role="dialog" aria-modal="true" aria-label="Crisis Card">
            {/* Header: Controls row (Close + Get help), then Title */}
            <div className="stepdown-header">
              <div className="stepdown-controls">
                <button id="stepdown-close" className="pill pill-ghost" type="button" aria-label="Close">
                  <svg viewBox="0 0 24 24" className="close-icon-svg">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
                <div id="stepdown-emergency-wrap" className="stepdown-emergency-wrap" style={{ display: "none" }}>
                  <button id="stepdown-emergency" className="pill emergency-tab" type="button">
                    <svg viewBox="0 0 24 24" className="phone-icon-svg" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>Get help</span>
                  </button>
                </div>
              </div>
              <div className="stepdown-title-block">
                <div id="stepdown-title" className="stepdown-title">
                  Situation
                </div>
                <div id="stepdown-progress" className="stepdown-progress">
                  Step 1 of 4
                </div>
              </div>
            </div>
            <div className="progress-container">
              <div className="progress-fill" id="progress-fill" style={{ width: "25%" }} />
            </div>

            <div className="stepdown-body">
              <div className="crisis-card">
                <div id="stepdown-say-section">
                  <div id="stepdown-say-kicker" className="kicker">
                    Try saying this
                  </div>
                  <div className="script-row">
                    <div className="script-text-container">
                      <div id="stepdown-say" className="say-text" />
                    </div>
                    <button className="btn-play-circle listen-inline" id="listen-inline" type="button" aria-label="Listen to this step">
                      <svg viewBox="0 0 24 24" className="listen-icon">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <span>LISTEN</span>
                    </button>
                  </div>
                </div>
                <div id="stepdown-do-kicker" className="kicker">
                  You can do this
                </div>
                <div id="stepdown-do" className="do-text" />
              </div>
            </div>

            {/* Scroll indicator (only visible when overflowing) */}
            <div className="scroll-indicator" aria-hidden="true">
              <div className="scroll-indicator-dot" />
            </div>

            {/* Fade overlay for scroll (only visible when overflowing) */}
            <div className="fade-overlay" aria-hidden="true" />

            <div className="stepdown-footer">
              {/* Emergency Listen: sits between text and call */}
              <button id="listen-emergency" className="listen-emergency" type="button" aria-label="Listen" style={{ display: "none" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="listen-emergency-label">LISTEN</span>
              </button>
              {/* URGENT MODE: Call + Listen in footer */}
              <button id="stepdown-call" className="hero-btn btn-crisis-emergency" type="button" style={{ display: "none", width: "100%", marginBottom: "28px" }}>
                <span id="stepdown-call-label" />
              </button>

              {/* CRISIS MODE: Back to situations link (above nav) */}
              <div id="back-to-situations" style={{ display: "none", textAlign: "center", margin: "12px 0 12px" }}>
                <button id="switch-situation" className="switch-link" type="button" aria-label="Back to situations list">
                  Back to situations
                </button>
              </div>

              {/* Navigation: Back / Next */}
              <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
                <button id="stepdown-back" className="pill pill-outline" type="button" style={{ flex: 1 }}>
                  Back
                </button>
                <button id="stepdown-next" className="pill pill-outline" type="button" style={{ flex: 1 }}>
                  Next
                </button>
              </div>

              {/* URGENT MODE: Back to emergency list */}
              <div id="back-to-urgent" style={{ display: "none", textAlign: "center", marginBottom: "12px" }}>
                <button id="back-to-urgent-btn" className="switch-link" type="button" aria-label="Back to emergency list">
                  Wrong emergency? Back to list
                </button>
              </div>
              <div
                id="urgent-disclaimer"
                style={{ display: "none", textAlign: "center", fontSize: "13px", color: "var(--text-muted)", marginBottom: "16px" }}
              >
                If you're unsure, it's okay to call for help.
              </div>

              <div
                id="crisis-disclaimer"
                style={{
                  display: "none",
                  textAlign: "center",
                  fontSize: "12px",
                  color: "var(--text-muted)",
                  opacity: 0.4,
                  marginTop: "24px",
                  marginBottom: 0
                }}
              >
                Guidance only. Not live monitoring.
              </div>
            </div>
          </div>
        </div>

        {/* Emergency: Full screen takeover */}
        <div id="urgent-overlay" className="emergency-backdrop" aria-hidden="true">
          <div className="emergency-screen" role="dialog" aria-modal="true" aria-label="Emergency Help">
            {/* Header: title left, close right */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", marginBottom: "28px" }}>
              <div style={{ fontSize: "18px", fontWeight: 500, color: "var(--text)" }}>Emergency</div>
              <button id="urgent-close" className="glass-close-btn" type="button" aria-label="Close">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="emergency-fixed">
              <div id="call-buttons" style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "24px", marginBottom: "32px" }}>
                <button id="call-emergency" type="button" className="hero-btn btn-crisis-emergency" style={{ width: "100%", borderRadius: "16px" }}>
                  <span id="emergency-number" />
                </button>
                <button id="call-advice" type="button" className="hero-btn btn-crisis-medical" style={{ width: "100%", borderRadius: "16px" }}>
                  <div className="btn-secondary-content">
                    <span id="advice-number" className="btn-secondary-title" />
                    <span className="btn-secondary-subtitle">Medical advice</span>
                  </div>
                </button>
              </div>
            </div>
            <div className="emergency-scroll">
              <div id="urgent-label" style={{ fontSize: "18px", color: "#FFFFFF", marginTop: "40px", marginBottom: "24px", fontWeight: 600 }}>
                Safety checks
              </div>
              <div id="urgent-grid-sheet" />
              <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.35)", textAlign: "center", marginTop: "32px", lineHeight: "1.4" }}>
                Kerunity doesn't contact services for you. These buttons call directly.
              </div>
            </div>
          </div>
        </div>

        {/* Midnight Menu */}
        <div id="menu-overlay" className="menu-overlay" aria-hidden="true">
          <div className="menu-backdrop" />
          <div className="menu-drawer">
            <div className="menu-header">
              <button id="menu-close" className="glass-close-btn" type="button" aria-label="Close menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              <div className="menu-version">v1.0.0</div>
            </div>
            <nav className="menu-nav">
              <button className="menu-link emergency-link" data-action="emergency-list" type="button">
                <svg className="menu-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Emergency contacts</span>
              </button>
              <button className="menu-link notice-link" data-action="notice" type="button">
                <svg className="menu-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
                <span>Important notice</span>
              </button>
              <button className="menu-link" data-action="privacy" type="button">
                <svg className="menu-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>Privacy</span>
              </button>
              <button className="menu-link section-end" data-action="accessibility" type="button">
                <svg className="menu-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="4" r="2" />
                  <path d="M10 8h4l2 12" />
                  <path d="M8 8l2 12" />
                  <path d="M6 14h12" />
                </svg>
                <span>Accessibility</span>
              </button>
              <div className="menu-divider" />
              <button className="menu-link" data-action="about" type="button">
                <svg className="menu-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
                <span>About</span>
              </button>
              <button className="menu-link" data-action="usage" type="button">
                <svg className="menu-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M4 4h16v16H6.5A2.5 2.5 0 0 0 4 22z" />
                </svg>
                <span>How to use</span>
              </button>
              <button className="menu-link section-end" data-action="story" type="button">
                <svg className="menu-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <span>Our story</span>
              </button>
              <div className="menu-divider" />
              <button className="menu-link" data-action="supporters" type="button">
                <svg className="menu-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2l2.9 6.9 7.1.6-5.4 4.6 1.7 7L12 17.8 5.7 21.1l1.7-7L2 9.5l7.1-.6z" />
                </svg>
                <span>Founding Supporters</span>
              </button>
              <button className="menu-link section-end" data-action="support" type="button">
                <svg className="menu-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 21s-6-4.35-9-7.35A5.5 5.5 0 0 1 12 5.65a5.5 5.5 0 0 1 9 8.0C18 16.65 12 21 12 21z" />
                </svg>
                <span>Support Kerunity</span>
              </button>
              <div className="menu-divider" />
              <button className="menu-link" data-action="share" type="button">
                <svg className="menu-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <path d="M8.6 13.5l6.8 3.9" />
                  <path d="M15.4 6.6L8.6 10.5" />
                </svg>
                <span>Share Kerunity</span>
              </button>
              <button className="menu-link section-end" data-action="feedback" type="button">
                <svg className="menu-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                </svg>
                <span>Send feedback</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Toast notification (replaces native alert) */}
        <div id="toast" className="toast" role="status" aria-live="polite" />

        {/* Resume prompt (replaces native confirm) */}
        <div id="resume-overlay" className="resume-backdrop" aria-hidden="true">
          <div className="resume-sheet" role="dialog" aria-modal="true" aria-label="Resume">
            <svg className="resume-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            <div className="resume-title">Pick up where you left off?</div>
            <div id="resume-step" className="resume-sub">
              Refusing meds • Step 4
            </div>
            <div className="resume-buttons">
              <button id="resume-continue" className="pill" type="button" style={{ width: "100%", height: "48px", fontSize: "16px" }}>
                Resume Step 3
              </button>
              <button id="resume-restart" className="pill" type="button" style={{ width: "100%", height: "48px", fontSize: "16px" }}>
                Start from beginning
              </button>
            </div>
          </div>
        </div>

        {/* Post-completion follow-up */}
        <div id="followup-overlay" className="followup-backdrop" aria-hidden="true">
          <div className="followup-card" role="dialog" aria-modal="true" aria-label="Follow-up">
            <button id="followup-close" className="followup-close" type="button" aria-label="Close">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <div className="followup-title">How does it feel now?</div>
            <div className="followup-buttons">
              <button id="followup-calmer" className="followup-btn glass-calm" type="button">
                <span className="followup-btn-label">Calmer</span>
              </button>
              <button id="followup-same" className="followup-btn glass-neutral" type="button">
                <span className="followup-btn-label">About the same</span>
              </button>
              <button id="followup-worse" className="followup-btn glass-worse" type="button">
                <span className="followup-btn-label">Worse</span>
              </button>
            </div>
          </div>
        </div>

        {/* Follow-up response screens */}
        <div id="followup-response-overlay" className="followup-backdrop" aria-hidden="true">
          <div className="followup-card" role="dialog" aria-modal="true" aria-label="Response">
            <div id="followup-response-text" className="followup-response-text" />
            <div id="followup-response-buttons" className="followup-response-buttons" />
          </div>
        </div>
      </div>
    </div>
  );
}
