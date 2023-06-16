import App from "@/App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "@/styles/theme";
import GlobalStyles from "@/styles/GlobalStyles";
import ReactDOM from "react-dom/client";
import { store } from "@/store";

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
