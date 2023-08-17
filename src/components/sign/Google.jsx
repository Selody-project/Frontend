import React from "react";

import GoogleLogo from "@/assets/icon/ic-google-logo.svg";

const Google = () => {
	// const responseGoogle = (response) => {
	// 	dispatchFn(googleLogin(response));
	// };

	return (
		<button type="button" id="google-login" data-testid="google-login">
			<GoogleLogo />
			{/* <GoogleLogin onSuccess={responseGoogle} onFailure={responseGoogle} /> */}
		</button>
	);
};

export default Google;
