import React from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import { Fade } from "react-reveal";
import "../error404/Error.css";
import "./Offline.css";

export default function Offline({ theme, onThemeChange, onRetry }) {
  return (
    <div className="error-main">
      <Header theme={theme} onThemeChange={onThemeChange} />
      <main className="error-class">
        <Fade bottom duration={900} distance="24px">
          <section className="error-state" aria-labelledby="offline-title">
            <div className="error-visual offline-visual" aria-hidden="true">
              <span className="offline-pulse offline-pulse--one" />
              <span className="offline-pulse offline-pulse--two" />
              <span className="offline-pulse offline-pulse--three" />
              <span className="offline-dot" />
              <span className="offline-slash" />
            </div>
            <p className="error-eyebrow">
              <span className="offline-status-dot" />
              You are offline
            </p>
            <h1 id="offline-title">Connection paused.</h1>
            <p className="error-message">
              Check your network connection. This page will reconnect
              automatically when you are back online.
            </p>
            <div className="error-actions">
              <button className="main-button" type="button" onClick={onRetry}>
                Try again
              </button>
            </div>
          </section>
        </Fade>
      </main>
      <Footer />
    </div>
  );
}
