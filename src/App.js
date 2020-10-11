import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./theme";

import Header from "./components/Header";
import { Body } from "./components/layout/body";

function App() {
  const [theme, setTheme] = useState(light);
  const [isDark, setIsDark] = useState(false);

  const changeTheme = () => {
    setIsDark(!isDark);
    setTheme(isDark ? dark : light);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Body>
          <Header>
            <h1>Luciano dii Souza</h1>
          </Header>
          <button type="button" onClick={changeTheme}>
            Trocar tema
          </button>
        </Body>
      </ThemeProvider>
    </>
  );
}

export default App;
