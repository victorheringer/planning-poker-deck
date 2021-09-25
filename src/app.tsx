import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { StorageService } from "services";
import Routes from "./routes";
import { StorageContext } from "contexts";
import { themes, i18n } from "static";
import { GlobalStyle } from "global-style";
import { useWakeLock, useConnection, useThemeStatus } from "hooks";
import { Screens } from "enums";

function App() {
  const [storage, setStorage] = useState(StorageService.get());
  const { connected } = useConnection();
  const theme = themes[storage.preferences.theme];
  const text = i18n[storage.preferences.language][Screens.SHARED];
  const { setThemeColor } = useThemeStatus(theme.backgroundColor);
  useWakeLock(storage.preferences.wakeLock);

  useEffect(() => {
    setThemeColor(theme.backgroundColor);
  }, [theme, setThemeColor]);

  return (
    <StorageContext.Provider value={{ storage, setStorage }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes
          connected={connected}
          theme={theme}
          initial={storage.preferences.screen}
          text={text}
        />
      </ThemeProvider>
    </StorageContext.Provider>
  );
}

export default App;
