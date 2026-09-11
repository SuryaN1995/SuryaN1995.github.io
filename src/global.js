import { createGlobalStyle } from "styled-components";
import { isDark, mix, readableOn, rgbTriplet } from "./styles/color";

// Card surfaces lift away from the page colour: light themes go toward white,
// dark themes get a gentle wash of light so elevation reads without a border.
const surface = (t) =>
  isDark(t.body) ? mix(t.body, "#ffffff", 0.07) : mix(t.body, "#ffffff", 0.72);
const surfaceRaised = (t) =>
  isDark(t.body) ? mix(t.body, "#ffffff", 0.13) : "#ffffff";
const border = (t) => mix(t.body, t.text, 0.14);
const shadowBase = (t) =>
  isDark(t.body) ? "#000000" : mix(t.dark, t.body, 0.2);

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-bg: ${({ theme }) => theme.body};
    --color-bg-rgb: ${({ theme }) => rgbTriplet(theme.body)};
    --color-surface: ${({ theme }) => surface(theme)};
    --color-surface-raised: ${({ theme }) => surfaceRaised(theme)};
    --color-border: ${({ theme }) => border(theme)};
    --color-text: ${({ theme }) => theme.text};
    --color-text-rgb: ${({ theme }) => rgbTriplet(theme.text)};
    --color-muted: ${({ theme }) => theme.secondaryText};
    --color-accent: ${({ theme }) => theme.accentColor};
    --color-accent-rgb: ${({ theme }) => rgbTriplet(theme.accentColor)};
    --color-accent-contrast: ${({ theme }) => readableOn(theme.accentColor)};
    --color-accent-strong: ${({ theme }) => theme.jacketColor};
    --color-highlight: ${({ theme }) => theme.highlight};
    --shadow-rgb: ${({ theme }) => rgbTriplet(shadowBase(theme))};
    /* Flips black-on-transparent logo assets so they stay legible on dark themes. */
    --logo-invert: ${({ theme }) =>
      isDark(theme.body) ? "invert(1)" : "none"};

    --radius-xs: 6px;
    --radius-sm: 10px;
    --radius-md: 14px;
    --radius-lg: 20px;
    --radius-xl: 28px;
    --radius-pill: 999px;

    --shadow-sm:
      0 1px 2px rgba(var(--shadow-rgb), 0.05),
      0 2px 6px rgba(var(--shadow-rgb), 0.06);
    --shadow-md:
      0 2px 4px rgba(var(--shadow-rgb), 0.05),
      0 8px 20px rgba(var(--shadow-rgb), 0.09);
    --shadow-lg:
      0 4px 10px rgba(var(--shadow-rgb), 0.06),
      0 18px 40px rgba(var(--shadow-rgb), 0.13);
    --shadow-xl:
      0 8px 18px rgba(var(--shadow-rgb), 0.07),
      0 30px 64px rgba(var(--shadow-rgb), 0.17);

    --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
    --dur-fast: 140ms;
    --dur: 240ms;
    --dur-slow: 420ms;

    --space-1: 4px;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-5: 24px;
    --space-6: 32px;
    --space-7: 48px;
    --space-8: 64px;
    --space-9: 96px;

    --container: 1200px;
    --container-wide: 1440px;

    --text-xs: 0.78rem;
    --text-sm: 0.88rem;
    --text-base: 1rem;
    --text-lg: clamp(1.05rem, 0.98rem + 0.35vw, 1.25rem);
    --text-xl: clamp(1.25rem, 1.1rem + 0.7vw, 1.6rem);
    --text-2xl: clamp(1.5rem, 1.25rem + 1.1vw, 2.1rem);
    --text-3xl: clamp(1.9rem, 1.45rem + 2vw, 3rem);
    --text-4xl: clamp(2.4rem, 1.6rem + 3.4vw, 4.2rem);
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background: var(--color-bg);
    color: var(--color-text);
    font-family: "Google Sans Regular", Inter, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    transition:
      background-color var(--dur) var(--ease-out),
      color var(--dur) var(--ease-out);
  }

  ::selection {
    background: rgba(var(--color-accent-rgb), 0.28);
  }

  :focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 3px;
    border-radius: var(--radius-xs);
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
