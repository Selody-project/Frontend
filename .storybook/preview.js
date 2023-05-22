/** @type { import('@storybook/react').Preview } */

import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { GlobalStyles } from "../src/styles/GlobalStyles";
import { lightTheme } from "../src/styles/theme";
import { ThemeProvider } from "styled-components";

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles,
  }),
];
