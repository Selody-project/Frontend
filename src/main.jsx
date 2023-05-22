import React from "react";
import ReactDOM from "react-dom/client";
import Modal from "react-modal";
import App from "./App";
import "./index.css";

import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { store } from "./store/store";
import GlobalStyles from "./styles/GlobalStyles";

if (Modal && Modal.setAppElement) {
  Modal.setAppElement("#root");
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="379597382111-vo2ht0r8a3d0ais7v12q7777lu48al1a.apps.googleusercontent.com">
      <GlobalStyles />
      <App />
    </GoogleOAuthProvider>
  </Provider>
);
