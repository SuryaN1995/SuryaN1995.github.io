import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import "./ThemeSwitcher.css";
import { themesList } from "../../theme";

const PANEL_WIDTH = 380;
const PANEL_OFFSET = 12;
const VIEWPORT_GUTTER = 12;
const MIN_PANEL_HEIGHT = 220;

// "Blue Theme" reads as "Blue" in the grid; the full name stays in the label.
function shortName(displayName) {
  return displayName.replace(/\s+Theme$/, "");
}

function withAlpha(color, alpha) {
  const hex = String(color).replace("#", "").slice(0, 6);
  const value = parseInt(hex, 16);
  if (hex.length < 6 || Number.isNaN(value)) return color;
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function ThemeSwitcher({ theme, onThemeChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [panelPosition, setPanelPosition] = useState(null);
  const triggerRef = useRef(null);
  const panelRef = useRef(null);
  const optionRefs = useRef([]);

  const activeIndex = Math.max(
    themesList.findIndex((entry) => entry.theme === theme),
    0
  );
  const activeTheme = themesList[activeIndex];

  const positionPanel = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const width = Math.min(
      PANEL_WIDTH,
      window.innerWidth - VIEWPORT_GUTTER * 2
    );
    const left = Math.min(
      Math.max(rect.right - width, VIEWPORT_GUTTER),
      window.innerWidth - width - VIEWPORT_GUTTER
    );

    // Drop down by default, flip above the trigger when the space below the
    // header runs out (mobile menu pushes the trigger far down the screen).
    const spaceBelow =
      window.innerHeight - rect.bottom - PANEL_OFFSET - VIEWPORT_GUTTER;
    const spaceAbove = rect.top - PANEL_OFFSET - VIEWPORT_GUTTER;
    const placeAbove = spaceBelow < MIN_PANEL_HEIGHT && spaceAbove > spaceBelow;

    setPanelPosition({
      left,
      width,
      placeAbove,
      top: placeAbove ? undefined : rect.bottom + PANEL_OFFSET,
      bottom: placeAbove
        ? window.innerHeight - rect.top + PANEL_OFFSET
        : undefined,
      maxHeight: Math.max(
        MIN_PANEL_HEIGHT,
        placeAbove ? spaceAbove : spaceBelow
      ),
    });
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    positionPanel();

    const handlePointerDown = (event) => {
      const insidePanel =
        panelRef.current && panelRef.current.contains(event.target);
      const insideTrigger =
        triggerRef.current && triggerRef.current.contains(event.target);
      if (!insidePanel && !insideTrigger) setIsOpen(false);
    };

    const handleKeyDown = (event) => {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      if (triggerRef.current) triggerRef.current.focus();
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", positionPanel);
    window.addEventListener("scroll", positionPanel, true);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", positionPanel);
      window.removeEventListener("scroll", positionPanel, true);
    };
  }, [isOpen, positionPanel]);

  useEffect(() => {
    if (!isOpen || !panelPosition) return;
    const option = optionRefs.current[activeIndex];
    if (option) option.focus();
  }, [isOpen, panelPosition, activeIndex]);

  const selectTheme = (entry) => {
    onThemeChange(entry);
    setIsOpen(false);
    if (triggerRef.current) triggerRef.current.focus();
  };

  // Arrow keys follow what the user sees, so the row step is the rendered
  // column count: two on desktop, one once the grid collapses on mobile.
  const columnCount = () => {
    const grid =
      panelRef.current && panelRef.current.querySelector(".theme-panel__grid");
    if (!grid) return 1;
    return window.getComputedStyle(grid).gridTemplateColumns.split(" ").length;
  };

  const moveFocus = (event, index) => {
    const lastIndex = themesList.length - 1;
    const step = columnCount();
    const keyMap = {
      ArrowDown: Math.min(index + step, lastIndex),
      ArrowUp: Math.max(index - step, 0),
      ArrowRight: Math.min(index + 1, lastIndex),
      ArrowLeft: Math.max(index - 1, 0),
      Home: 0,
      End: lastIndex,
    };
    const nextIndex = keyMap[event.key];
    if (nextIndex === undefined) return;
    event.preventDefault();
    const nextOption = optionRefs.current[nextIndex];
    if (nextOption) nextOption.focus();
  };

  const panelStyle = panelPosition
    ? {
        top: panelPosition.top,
        bottom: panelPosition.bottom,
        left: panelPosition.left,
        width: panelPosition.width,
        maxHeight: panelPosition.maxHeight,
        backgroundColor: theme.body,
        color: theme.text,
        borderColor: withAlpha(theme.text, 0.12),
        boxShadow: `0 18px 48px ${withAlpha(theme.dark, 0.22)}`,
        "--ts-accent": theme.accentColor,
        "--ts-hover": withAlpha(theme.accentColor, 0.14),
        "--ts-selected": withAlpha(theme.accentColor, 0.2),
        "--ts-border": withAlpha(theme.text, 0.12),
        "--ts-muted": theme.secondaryText,
      }
    : null;

  return (
    <div className="theme-switcher">
      <button
        ref={triggerRef}
        type="button"
        className="theme-switcher__trigger"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={`Change theme, current theme ${activeTheme.displayName}`}
        onClick={() => setIsOpen((open) => !open)}
        style={{
          color: theme.text,
          backgroundColor: theme.highlight,
          borderColor: withAlpha(theme.text, 0.12),
          "--ts-accent": theme.accentColor,
        }}
      >
        <span
          className="theme-switcher__chip"
          style={{
            background: `linear-gradient(135deg, ${theme.accentColor} 0%, ${theme.jacketColor} 100%)`,
            borderColor: withAlpha(theme.text, 0.18),
          }}
        />
        <span className="theme-switcher__label">{activeTheme.displayName}</span>
        <svg
          className={`theme-switcher__chevron${
            isOpen ? " theme-switcher__chevron--open" : ""
          }`}
          viewBox="0 0 16 16"
          width="12"
          height="12"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M4 6l4 4 4-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen &&
        panelStyle &&
        ReactDOM.createPortal(
          <div
            ref={panelRef}
            className={`theme-panel${
              panelPosition.placeAbove ? " theme-panel--above" : ""
            }`}
            role="menu"
            aria-label="Choose a theme"
            style={panelStyle}
          >
            <div className="theme-panel__header">
              <span className="theme-panel__title">Appearance</span>
              <span
                className="theme-panel__hint"
                style={{ color: theme.secondaryText }}
              >
                {themesList.length} themes
              </span>
            </div>

            <div className="theme-panel__grid">
              {themesList.map((entry, index) => {
                const isSelected = index === activeIndex;
                return (
                  <button
                    key={entry.id}
                    type="button"
                    role="menuitemradio"
                    aria-checked={isSelected}
                    aria-label={entry.displayName}
                    ref={(node) => {
                      optionRefs.current[index] = node;
                    }}
                    className={`theme-option${
                      isSelected ? " theme-option--selected" : ""
                    }`}
                    onClick={() => selectTheme(entry)}
                    onKeyDown={(event) => moveFocus(event, index)}
                    style={{ color: theme.text }}
                  >
                    <span
                      className="theme-option__preview"
                      style={{
                        backgroundColor: entry.theme.body,
                        borderColor: withAlpha(entry.theme.text, 0.2),
                      }}
                      aria-hidden="true"
                    >
                      <span
                        style={{ backgroundColor: entry.theme.accentColor }}
                      />
                      <span
                        style={{ backgroundColor: entry.theme.jacketColor }}
                      />
                      <span style={{ backgroundColor: entry.theme.text }} />
                    </span>
                    <span className="theme-option__name">
                      {shortName(entry.displayName)}
                    </span>
                    {isSelected && (
                      <svg
                        className="theme-option__check"
                        viewBox="0 0 16 16"
                        width="14"
                        height="14"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          d="M3.5 8.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
