import React, { useState } from "react";
import InfoPage from "../../InfoPage";
import { MENU_CONTENT } from "../data/menuContent";

type MenuOverlayProps = {
  isOpen?: boolean;
  onClose?: () => void;
  onEmergencyContacts?: () => void;
  onShare?: () => void;
  onFeedback?: () => void;
  onSupporters?: () => void;
};

export default function MenuOverlay({
  isOpen = false,
  onClose,
  onEmergencyContacts,
  onShare,
  onFeedback,
  onSupporters
}: MenuOverlayProps) {
  const [infoPage, setInfoPage] = useState<keyof typeof MENU_CONTENT | null>(null);

  if (infoPage) {
    return (
      <InfoPage title={MENU_CONTENT[infoPage].title} onBack={() => setInfoPage(null)}>
        <div dangerouslySetInnerHTML={{ __html: MENU_CONTENT[infoPage].content }} />
      </InfoPage>
    );
  }

  return (
    <div className={`menu-overlay${isOpen ? " active" : ""}`} aria-hidden={!isOpen}>
      <div className="menu-backdrop" onClick={onClose} />
      <div className="menu-drawer" role="dialog" aria-modal="true" aria-label="Menu">
        <div className="menu-header">
          <button id="menu-close" type="button" aria-label="Close menu" onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="menu-version">v1.0.0</div>
        </div>
        <nav className="menu-nav">
          <button className="menu-link emergency-link" type="button" onClick={onEmergencyContacts}>
            Emergency contacts
          </button>
          <button className="menu-link notice-link" type="button" onClick={() => setInfoPage("notice")}>
            Important notice
          </button>
          <button className="menu-link" type="button" onClick={() => setInfoPage("privacy")}>
            Privacy
          </button>
          <button className="menu-link section-end" type="button" onClick={() => setInfoPage("accessibility")}>
            Accessibility
          </button>
          <div className="menu-divider" />
          <button className="menu-link" type="button" onClick={() => setInfoPage("about")}>
            About
          </button>
          <button className="menu-link" type="button" onClick={() => setInfoPage("howToUse")}>
            How to use
          </button>
          <button className="menu-link section-end" type="button" onClick={() => setInfoPage("story")}>
            Our story
          </button>
          <div className="menu-divider" />
          <button className="menu-link" type="button" onClick={onSupporters}>
            Founding Supporters
          </button>
          <button className="menu-link section-end" type="button" onClick={() => setInfoPage("support")}>
            Support Kerunity
          </button>
          <div className="menu-divider" />
          <button className="menu-link" type="button" onClick={onShare}>
            Share Kerunity
          </button>
          <button className="menu-link section-end" type="button" onClick={onFeedback}>
            Send feedback
          </button>
        </nav>
      </div>
    </div>
  );
}
