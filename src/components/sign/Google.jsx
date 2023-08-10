import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { googleLogin } from "@/features/user/user-service";

const Google = () => {
	const dispatchFn = useDispatch();

	const responseGoogle = (response) => {
		dispatchFn(googleLogin(response));
	};

	return (
		<div id="google-login" data-testid="google-login">
			<GoogleLogin onSuccess={responseGoogle} onFailure={responseGoogle} />
		</div>
	);
};

export default Google;
