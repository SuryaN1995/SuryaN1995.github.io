import React from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import TopButton from "../../../components/topButton/TopButton";
import { Fade } from "../../../components/reveal/Reveal";
import "./Error.css";
import { Link } from "react-router-dom";

export default function Error({ theme, onThemeChange }) {
  return (
    <div className="error-main">
      <Header theme={theme} onThemeChange={onThemeChange} />
      <main className="error-class">
        <Fade bottom duration={900} distance="24px">
          <section className="error-state" aria-labelledby="error-title">
            <div className="error-visual error-visual--404" aria-hidden="true">
              <span className="error-orbit error-orbit--outer" />
              <span className="error-orbit error-orbit--inner" />
              <span className="error-code">404</span>
            </div>
            <p className="error-eyebrow">Lost in the stack</p>
            <h1 id="error-title">This route does not exist.</h1>
            <p className="error-message">
              The page may have moved, or the address might have a typo.
            </p>
            <div className="error-actions">
              <Link className="main-button" to="/home">
                Back to home
              </Link>
              <button
                className="error-text-button"
                type="button"
                onClick={() => window.history.back()}
              >
                Go back
              </button>
            </div>
          </section>
        </Fade>
      </main>
      <Footer />
      <TopButton theme={theme} />
    </div>
  );
}
