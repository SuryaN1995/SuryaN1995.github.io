import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themesList } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  const [theme, setTheme] = useState(() => {
    const currentThemeId = localStorage.getItem("theme_id");
    const currentTheme = themesList.find(
      (local) => local.id === currentThemeId
    );
    // Fallback to the first theme in the list if currentTheme is undefined
    return currentTheme ? currentTheme.theme : themesList[0].theme;
  });
  // Default theme

  const handleThemeChange = (newTheme) => {
    console.log("@@@@@ ", newTheme.displayName);
    localStorage.setItem("theme_id", newTheme.id);
    setTheme(newTheme.theme);
  };

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
