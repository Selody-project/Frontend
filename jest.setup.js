import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { GoogleOAuthProvider } from "@react-oauth/google";
import "@testing-library/jest-dom/extend-expect";
import { render as rtlRender } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { mockIntersectionObserver } from "./__test__/__mocks__/mockIntersectionObserver.js";
import { server } from "./__test__/__mocks__/server.js";
import { setupStore } from "./src/store/index.js";
import lightTheme from "./src/styles/theme.js";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

global.IntersectionObserver = mockIntersectionObserver;

export const render = (
	ui,
	{
		preloadedState = {},
		store = setupStore(preloadedState),
		...renderOptions
	} = {},
) => {
	const Wrapper = ({ children }) => (
		<GoogleOAuthProvider clientId="379597382111-vo2ht0r8a3d0ais7v12q7777lu48al1a.apps.googleusercontent.com">
			<Provider store={store}>
				<ThemeProvider theme={lightTheme}>
					<BrowserRouter>{children}</BrowserRouter>
				</ThemeProvider>
			</Provider>
		</GoogleOAuthProvider>
	);
	return { store, ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export * from "@testing-library/react";
