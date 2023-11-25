import React, { useEffect } from "react";

const Naver = () => {
	const { naver } = window;

	useEffect(() => {
		if (naver) {
			const naverLogin = new naver.LoginWithNaverId({
				clientId: process.env.VITE_NAVER_CLIENT_ID,
				callbackUrl: "http://localhost:3000/login",
				isPopup: false,
				loginButton: { color: "green", type: 1, height: "40" },
			});
			naverLogin.init();
		}
	}, []);

	return <div id="naverIdLogin" data-testid="naver-login" />;
};

export default Naver;
