import React from "react";

type InfoPageProps = {
  title: string;
  onBack?: () => void;
  children: React.ReactNode;
};

const styles = `
.info-page {
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(50, 55, 80, 0.6) 0%, rgba(30, 35, 50, 0.7) 100%);
  color: #ffffff;
}
.info-header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px;
  background: rgba(15, 20, 35, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.info-back {
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: #f7e1c6;
  cursor: pointer;
}
.info-title {
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  flex: 1;
}
.info-header-spacer {
  width: 44px;
  height: 44px;
}
.info-body {
  padding: 24px;
}
.info-body h2 {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin-top: 32px;
  margin-bottom: 12px;
}
.info-body p {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 16px;
}
.info-highlight {
  color: #f7e1c6;
  font-weight: 600;
}
`;

export default function InfoPage({ title, onBack, children }: InfoPageProps) {
  return (
    <div className="info-page">
      <style>{styles}</style>
      <header className="info-header">
        <button className="info-back" type="button" aria-label="Back" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="info-title">{title}</div>
        <div className="info-header-spacer" aria-hidden="true" />
      </header>
      <main className="info-body">{children}</main>
    </div>
  );
}
