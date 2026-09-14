import React from "react";
import "./Reveal.css";

const durationLimit = 900;
const delayLimit = 320;

// The reveal class goes onto the child element rather than a wrapper, because
// several layouts style the revealed element as a direct flex item of their
// row. A wrapper would become that flex item instead and collapse the child.
function withReveal(children, { x, y, duration, delay, flip }) {
  const style = {
    "--reveal-x": x,
    "--reveal-y": y,
    "--reveal-duration": `${Math.min(duration, durationLimit)}ms`,
    "--reveal-delay": `${Math.min(delay, delayLimit)}ms`,
  };
  const className = flip ? "reveal reveal--flip" : "reveal";
  const child = React.Children.count(children) === 1 ? children : null;

  // Only a plain DOM element can take the class directly. Anything else (a
  // component, several children, bare text) gets a wrapper to animate.
  if (React.isValidElement(child) && typeof child.type === "string") {
    return React.cloneElement(child, {
      className: [className, child.props.className].filter(Boolean).join(" "),
      style: { ...style, ...child.props.style },
    });
  }

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

export function Fade({
  children,
  left,
  right,
  top,
  bottom,
  distance = "20px",
  duration = 650,
  delay = 0,
}) {
  return withReveal(children, {
    x: left ? `-${distance}` : right ? distance : "0px",
    y: top ? `-${distance}` : bottom ? distance : "0px",
    duration,
    delay,
  });
}

export function Flip({ children, duration = 700, delay = 0 }) {
  return withReveal(children, {
    x: "0px",
    y: "12px",
    duration,
    delay,
    flip: true,
  });
}
