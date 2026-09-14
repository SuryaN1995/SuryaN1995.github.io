import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themesList } from "./theme";
import { GlobalStyles } from "./global";

const darkModeQuery = "(prefers-color-scheme: dark)";
const motionTargets = [
  ".greeting-image-div",
  ".heading-img-div",
  ".projects-heading-img-div",
  ".experience-heading-img-div",
  ".skills-image-div",
  ".contact-portrait",
  ".contact-card__art",
].join(",");

function preferredTheme() {
  const savedThemeId = localStorage.getItem("theme_id");
  const savedTheme = themesList.find((entry) => entry.id === savedThemeId);
  if (savedTheme) return savedTheme;

  const preferredMode = window.matchMedia(darkModeQuery).matches
    ? "dark"
    : "light";
  return (
    themesList.find((entry) => entry.theme.mode === preferredMode) ||
    themesList[0]
  );
}

function App() {
  const [activeTheme, setActiveTheme] = useState(preferredTheme);

  const handleThemeChange = (newTheme) => {
    localStorage.setItem("theme_id", newTheme.id);
    setActiveTheme(newTheme);
  };

  useEffect(() => {
    // Follow the operating system until the visitor makes an explicit choice.
    // A saved choice always wins on subsequent visits.
    if (
      themesList.some((entry) => entry.id === localStorage.getItem("theme_id"))
    ) {
      return undefined;
    }

    const query = window.matchMedia(darkModeQuery);
    const syncWithSystem = () => setActiveTheme(preferredTheme());
    if (query.addEventListener) {
      query.addEventListener("change", syncWithSystem);
      return () => query.removeEventListener("change", syncWithSystem);
    }

    query.addListener(syncWithSystem);
    return () => query.removeListener(syncWithSystem);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    if (!("IntersectionObserver" in window) || reduceMotion) {
      root.classList.add("reveal-static");
      return () => root.classList.remove("reveal-static");
    }

    const observed = new WeakSet();
    // An element can be both a reveal and a decorative-motion target, since the
    // reveal class is merged onto the illustration wrapper itself.
    const isMotionTarget = (element) => element.matches(motionTargets);
    const isReveal = (element) => element.classList.contains("reveal");

    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target;
          if (isMotionTarget(element)) {
            element.classList.toggle("motion-visible", entry.isIntersecting);
          }
          if (!entry.isIntersecting || !isReveal(element)) return;
          element.classList.add("reveal-visible");
          if (!isMotionTarget(element)) visibilityObserver.unobserve(element);
        });
      },
      { rootMargin: "120px 0px", threshold: 0.05 }
    );

    const observeMotion = () => {
      document
        .querySelectorAll(`${motionTargets}, .reveal`)
        .forEach((element) => {
          if (observed.has(element)) return;
          observed.add(element);

          // Anything already on screen reveals immediately, so the first
          // paint is never left blank waiting on an observer callback.
          if (isReveal(element)) {
            const bounds = element.getBoundingClientRect();
            if (bounds.top < window.innerHeight + 120 && bounds.bottom > -120) {
              element.classList.add("reveal-visible");
              if (!isMotionTarget(element)) return;
            }
          }
          if (isMotionTarget(element)) element.classList.add("motion-watch");
          visibilityObserver.observe(element);
        });
    };

    let scanFrame;
    const scheduleScan = () => {
      cancelAnimationFrame(scanFrame);
      scanFrame = requestAnimationFrame(observeMotion);
    };
    const routeObserver = new MutationObserver(scheduleScan);
    routeObserver.observe(document.getElementById("root"), {
      childList: true,
      subtree: true,
    });

    const syncDocumentVisibility = () => {
      root.classList.toggle("motion-paused", document.hidden);
    };

    observeMotion();
    syncDocumentVisibility();
    document.addEventListener("visibilitychange", syncDocumentVisibility);

    return () => {
      cancelAnimationFrame(scanFrame);
      routeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", syncDocumentVisibility);
      root.classList.remove("motion-paused");
    };
  }, []);

  const theme = activeTheme.theme;

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={theme} onThemeChange={handleThemeChange} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
