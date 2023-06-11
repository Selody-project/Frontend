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
		<GoogleOAuthProvider clientId="379597382111-vo2ht0r8a3d0ais7v12q7777lu48al1a.apps.googleusercontent.com">
			<ThemeProvider theme={lightTheme}>
				<GlobalStyles />
				<App />
			</ThemeProvider>
		</GoogleOAuthProvider>
	</Provider>,
);
