import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import LoaderLogo from "../../components/Loader/LoaderIcon.js";
import { greeting } from "../../portfolio";
import { mix, readableOn, rgbTriplet } from "../../styles/color";

// The logo finishes drawing at ~2.4s; the rest is breathing room before the
// exit fade. Keep these two in step with the CSS custom properties below.
const SPLASH_MS = 3000;
const EXIT_MS = 520;

function AnimatedSplash({ theme, isLeaving }) {
  const background = theme.splashBg;

  // splashBg ranges from near-black to mid grey across the 14 themes, so pick
  // the ink from its luminance rather than assuming a light-on-dark splash.
  const ink = readableOn(background);

  const style = {
    "--splash-bg": background,
    "--splash-deep": mix(background, "#000000", 0.55),
    "--splash-ink": ink,
    "--splash-ink-rgb": rgbTriplet(ink),
    "--splash-accent": theme.accentColor,
    "--splash-accent-rgb": rgbTriplet(theme.accentColor),
    "--splash-duration": `${SPLASH_MS}ms`,
    "--splash-exit": `${EXIT_MS}ms`,
  };

  return (
    <div
      className={`splash${isLeaving ? " splash--leaving" : ""}`}
      style={style}
      role="status"
      aria-label={`Loading ${greeting.title}'s portfolio`}
    >
      <span className="splash__glow" aria-hidden="true" />
      <span className="splash__ring" aria-hidden="true" />
      <span className="splash__ring splash__ring--delayed" aria-hidden="true" />

      <div className="splash__content">
        <div className="splash__logo" aria-hidden="true">
          <LoaderLogo />
        </div>
        {greeting.nickname && (
          <p className="splash__handle">{greeting.nickname}</p>
        )}
      </div>

      <div className="splash__progress" aria-hidden="true">
        <span className="splash__progress-bar" />
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false, isLeaving: false };
  }

  componentDidMount() {
    this.exitId = setTimeout(
      () => this.setState({ isLeaving: true }),
      SPLASH_MS - EXIT_MS
    );
    this.redirectId = setTimeout(
      () => this.setState({ redirect: true }),
      SPLASH_MS
    );
  }

  componentWillUnmount() {
    clearTimeout(this.exitId);
    clearTimeout(this.redirectId);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <AnimatedSplash
        theme={this.props.theme}
        isLeaving={this.state.isLeaving}
      />
    );
  }
}

export default Splash;
