import "@testing-library/jest-dom/extend-expect";
import { server } from "./__test__/__mocks__/msw/server.js";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { store } from "./src/store/index.js";

const render = (ui, { ...options } = {}) => {
	const Wrapper = ({ children }) => (
		<GoogleOAuthProvider clientId="379597382111-vo2ht0r8a3d0ais7v12q7777lu48al1a.apps.googleusercontent.com">
			<Provider store={store}>
				<BrowserRouter>{children}</BrowserRouter>
			</Provider>
		</GoogleOAuthProvider>
	);
	return rtlRender(ui, { wrapper: Wrapper, ...options });
};

export * from "@testing-library/react";
export { render };
