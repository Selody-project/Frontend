import React from "react";

import NaverLogo from "@/assets/icon/ic-naver-logo.svg";

const Naver = () => {
	// const { naver } = window;

	// const naverSignin = () => {
	// 	if (naver) {
	// 		const naverLogin = new naver.LoginWithNaverId({
	// 			clientId: "r6F2Dw1s6vUkQEJeB2eS",
	// 			callbackUrl: "http://localhost:3000/login",
	// 			isPopup: false,
	// 			loginButton: { color: "white", type: 2, height: "40" },
	// 			callbackHandle: true,
	// 		});
	// 		naverLogin.init();
	// 	}
	// };

	// useEffect(() => {
	// 	naverSignin();
	// }, []);

	return (
		<button type="button" id="naverIdLogin" data-testid="naver-login">
			<NaverLogo />
		</button>
	);
};

export default Naver;
