import React from "react";
import ReactDOM from "react-dom";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const engine = new Styletron();

ReactDOM.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <App />
    </BaseProvider>
  </StyletronProvider>,
  document.getElementById("root")
);

// Cache the production app shell so returning visitors can still reach the
// portfolio and its dedicated connection state after losing their network.
serviceWorker.register({
  // A freshly deployed worker otherwise sits in "waiting" until every tab for
  // the site is closed, so returning visitors keep being served the previous
  // build. The generated worker listens for SKIP_WAITING, so hand control over
  // as soon as the new one is installed and reload onto it.
  onUpdate: (registration) => {
    const installed = registration.waiting;
    if (!installed) {
      return;
    }

    installed.addEventListener("statechange", (event) => {
      if (event.target.state === "activated") {
        window.location.reload();
      }
    });

    installed.postMessage({ type: "SKIP_WAITING" });
  },
});
