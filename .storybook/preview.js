/** @type { import('@storybook/react').Preview } */

import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { GlobalStyles } from "../src/styles/GlobalStyles";

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
  }),
];
