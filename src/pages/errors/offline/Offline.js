import React, { useCallback, useEffect, useRef, useState } from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import { Fade } from "../../../components/reveal/Reveal";
import "../error404/Error.css";
import "./Offline.css";

// Backoff between automatic checks, in seconds, holding at the last step.
const RETRY_STEPS = [5, 10, 20, 30];
const PROBE_TIMEOUT = 6000;

/* The two connectivity signals are each only trustworthy in one direction.

   navigator.onLine is reliable when it says no: the browser sees no usable
   interface. It is not reliable when it says yes, which is still the case
   behind a captive portal or a dead router.

   A same-origin request is the reverse. It cannot be trusted as proof of
   reachability, because the service worker can answer it from the precache and
   in local development it travels over loopback, which survives the network
   being switched off entirely. It is useful only once the browser already
   believes there is a connection, to check that one actually carries traffic.

   So: believe navigator.onLine's no immediately, and verify its yes. */
async function probeNetwork() {
  if (!navigator.onLine) return false;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), PROBE_TIMEOUT);
  try {
    // A path deliberately absent from the precache, so the service worker has
    // no cache entry to answer with. Any reply, 404 included, is enough.
    await fetch(`__connectivity-probe?t=${Date.now()}`, {
      method: "HEAD",
      cache: "no-store",
      signal: controller.signal,
    });
    return true;
  } catch (error) {
    return false;
  } finally {
    clearTimeout(timer);
  }
}

function formatDuration(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

const COPY = {
  offline: {
    eyebrow: "No connection",
    title: "You are offline.",
    message:
      "Nothing is lost. This page keeps checking on its own and lets you straight back in the moment the network returns.",
  },
  checking: {
    eyebrow: "Checking",
    title: "Looking for the network.",
    message:
      "Reaching past the browser to confirm the connection actually carries traffic, not just that an interface is up.",
  },
  online: {
    eyebrow: "Connected",
    title: "Back online.",
    message: "The connection is live again. Taking you back to the site.",
  },
};

export default function Offline({
  theme,
  onThemeChange,
  onReconnected,
  onContinue,
}) {
  const [status, setStatus] = useState("offline");
  const [attempts, setAttempts] = useState(0);
  const [countdown, setCountdown] = useState(RETRY_STEPS[0]);
  const [offlineFor, setOfflineFor] = useState(0);
  const [hasCache, setHasCache] = useState(false);
  const startedAt = useRef(Date.now());

  const check = useCallback(async () => {
    setStatus("checking");
    const reachable = await probeNetwork();
    if (reachable) {
      setStatus("online");
      // Let the confirmation register before handing control back.
      setTimeout(onReconnected, 1100);
      return;
    }
    setAttempts((count) => count + 1);
    setStatus("offline");
  }, [onReconnected]);

  // Schedule the next automatic check. A timeout fires it and the interval
  // only drives the visible countdown, so the two cannot drift apart.
  useEffect(() => {
    if (status !== "offline") return undefined;

    const delay = RETRY_STEPS[Math.min(attempts, RETRY_STEPS.length - 1)];
    const deadline = Date.now() + delay * 1000;
    setCountdown(delay);

    const tick = setInterval(() => {
      setCountdown(Math.max(0, Math.round((deadline - Date.now()) / 1000)));
    }, 500);
    const run = setTimeout(check, delay * 1000);

    return () => {
      clearInterval(tick);
      clearTimeout(run);
    };
  }, [status, attempts, check]);

  useEffect(() => {
    if (status === "online") return undefined;
    const id = setInterval(() => {
      setOfflineFor(Math.floor((Date.now() - startedAt.current) / 1000));
    }, 1000);
    return () => clearInterval(id);
  }, [status]);

  // Every page is static and precached, so browsing offline is only offered
  // once there is actually something in the cache to browse.
  useEffect(() => {
    if (!("caches" in window) || !onContinue) return undefined;
    let active = true;
    caches
      .keys()
      .then((keys) => active && setHasCache(keys.length > 0))
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [onContinue]);

  const copy = COPY[status];
  const checking = status === "checking";

  return (
    <div className="error-main">
      <Header theme={theme} onThemeChange={onThemeChange} />
      <main className="error-class">
        <Fade bottom duration={900} distance="24px">
          <section className="error-state" aria-labelledby="offline-title">
            <div
              className={`error-visual offline-visual offline-visual--${status}`}
              aria-hidden="true"
            >
              <span className="offline-ripple offline-ripple--one" />
              <span className="offline-ripple offline-ripple--two" />
              <svg className="offline-signal" viewBox="20 48 80 54">
                <g fill="none" strokeLinecap="round" strokeWidth="8.5">
                  <path
                    className="offline-arc offline-arc--far"
                    d="M26.06 56.06 A48 48 0 0 1 93.94 56.06"
                  />
                  <path
                    className="offline-arc offline-arc--mid"
                    d="M37.37 67.37 A32 32 0 0 1 82.63 67.37"
                  />
                  <path
                    className="offline-arc offline-arc--near"
                    d="M48.69 78.69 A16 16 0 0 1 71.31 78.69"
                  />
                </g>
                <circle
                  className="offline-signal__dot"
                  cx="60"
                  cy="90"
                  r="5.5"
                />
              </svg>
              <span className="offline-slash" />
            </div>

            {/* Only the wording changes between the three states, so this is
                the one region worth announcing. The counters below update every
                second and would otherwise talk over everything else. */}
            <div className="offline-status" role="status">
              <p className="error-eyebrow offline-eyebrow">
                <span className="offline-status-dot" />
                {copy.eyebrow}
              </p>
              <h1 id="offline-title">{copy.title}</h1>
              <p className="error-message">{copy.message}</p>
            </div>

            <div className="error-actions">
              <button
                className="main-button offline-retry"
                type="button"
                onClick={check}
                disabled={checking || status === "online"}
              >
                {checking && <span className="offline-spinner" />}
                {checking ? "Checking" : "Retry now"}
              </button>
              {hasCache && status !== "online" && (
                <button
                  className="offline-ghost-button"
                  type="button"
                  onClick={onContinue}
                >
                  Browse the offline copy
                </button>
              )}
            </div>

            <dl className="offline-meta">
              <div className="offline-meta__item">
                <dt>Offline for</dt>
                <dd>{formatDuration(offlineFor)}</dd>
              </div>
              <div className="offline-meta__item">
                <dt>Next check</dt>
                <dd>
                  {status === "offline"
                    ? `${countdown}s`
                    : checking
                    ? "now"
                    : "—"}
                </dd>
              </div>
              <div className="offline-meta__item">
                <dt>Attempts</dt>
                <dd>{attempts}</dd>
              </div>
            </dl>
          </section>
        </Fade>
      </main>
      <Footer />
    </div>
  );
}
