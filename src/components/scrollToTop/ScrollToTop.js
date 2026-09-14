import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";

/* React Router changes the route without touching the window scroll position,
   so opening a page while scrolled down lands part-way into the new one. Reset
   before paint to avoid showing the stale offset for a frame.

   POP is skipped so browser back and forward keep the position the browser
   itself restores for that history entry. */
export default function ScrollToTop() {
  const history = useHistory();

  useLayoutEffect(
    () =>
      history.listen((location, action) => {
        if (action === "POP") return;
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }),
    [history]
  );

  return null;
}
