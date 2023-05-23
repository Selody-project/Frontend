/** @type { import('@storybook/react').Preview } */

import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import GlobalStyles from "@/styles/GlobalStyles";
import { lightTheme } from "@/styles/theme";
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
