import React, { useEffect, useState } from "react";
import "./TopButton.css";

export default function TopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.pageYOffset > 240);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goUp = () =>
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });

  return (
    <button
      type="button"
      id="topButton"
      className={isVisible ? "is-visible" : ""}
      onClick={goUp}
      title="Go up"
      aria-label="Scroll back to top"
      tabIndex={isVisible ? 0 : -1}
    >
      <i className="fas fa-arrow-up" aria-hidden="true" />
    </button>
  );
}
