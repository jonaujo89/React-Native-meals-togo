import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import AppNavigator from "./src/infrastructure/navigation/app.navigator";

//styling
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

// const isAndroid = Platform.OS === 'android';

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  });

  const [latoLoaded] = useLato({
    Lato_400Regular
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppNavigator />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

// const styles = StyleSheet.create({
// });
