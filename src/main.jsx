import { Provider } from "react-redux";

import { GoogleOAuthProvider } from "@react-oauth/google";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import App from "@/App";
import { store } from "@/store";
import GlobalStyles from "@/styles/GlobalStyles";
import lightTheme from "@/styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
			<ThemeProvider theme={lightTheme}>
				<GlobalStyles />
				<App />
			</ThemeProvider>
		</GoogleOAuthProvider>
	</Provider>,
);
