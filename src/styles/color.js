// Small colour helpers so the design tokens can be derived from whichever of
// the 14 themes is active, instead of hardcoding greys per component.

function parseHex(hex) {
  const clean = String(hex).replace("#", "").trim();
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean.slice(0, 6);
  const value = parseInt(full, 16);
  if (full.length < 6 || Number.isNaN(value)) return null;
  return { r: (value >> 16) & 255, g: (value >> 8) & 255, b: value & 255 };
}

export function rgbTriplet(hex) {
  const rgb = parseHex(hex);
  return rgb ? `${rgb.r}, ${rgb.g}, ${rgb.b}` : "0, 0, 0";
}

function toHex({ r, g, b }) {
  const part = (n) =>
    Math.round(Math.min(255, Math.max(0, n)))
      .toString(16)
      .padStart(2, "0");
  return `#${part(r)}${part(g)}${part(b)}`;
}

/** Blend `amount` (0-1) of `overlay` into `base`. */
export function mix(base, overlay, amount) {
  const a = parseHex(base);
  const b = parseHex(overlay);
  if (!a || !b) return base;
  return toHex({
    r: a.r + (b.r - a.r) * amount,
    g: a.g + (b.g - a.g) * amount,
    b: a.b + (b.b - a.b) * amount,
  });
}

/** WCAG relative luminance, used to decide light-on-dark vs dark-on-light. */
export function luminance(hex) {
  const rgb = parseHex(hex);
  if (!rgb) return 0;
  const channel = (c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return (
    0.2126 * channel(rgb.r) + 0.7152 * channel(rgb.g) + 0.0722 * channel(rgb.b)
  );
}

export function isDark(hex) {
  return luminance(hex) < 0.4;
}

/** Readable foreground for text sitting on top of `hex`. */
export function readableOn(hex) {
  return isDark(hex) ? "#ffffff" : "#10151c";
}
