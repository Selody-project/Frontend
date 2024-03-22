import { useNavigate } from "react-router-dom";

import useQuery from "./useQuery.jsx";

const useNaver = () => {
	const query = useQuery();
	const navigate = useNavigate();

	const accessToken = query.get("#access_token");
	// const state = query.get("state");
	// const expiresIn = query.get("expires_in");

	const naverLoginInfo = {
		accessToken,
		navigate,
	};

	return naverLoginInfo;
};

export default useNaver;
