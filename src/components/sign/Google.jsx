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
		<>
			<GoogleLogin onSuccess={responseGoogle} onFailure={responseGoogle} />

			{/* 테스트 코드 작성을 위한 div */}
			<div id="google-login" data-testid="google-login"></div>
		</>
	);
};

export default Google;
