import React from "react";
import "./Button.css";

export default function Button({ text, className, href, newTab, ghost }) {
  return (
    <div className={className}>
      <a
        className={`main-button${ghost ? " main-button--ghost" : ""}`}
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        <span>{text}</span>
        <svg
          className="main-button-arrow"
          viewBox="0 0 16 16"
          width="15"
          height="15"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M3 8h9M8.5 4.5L12 8l-3.5 3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}
