import axios from "axios";

export const customFetch = axios.create({
	baseURL: "/back",
	timeout: 3000,
	withCredentials: true,
});

customFetch.interceptors.request.use(
	(config) => config,
	(error) => error.response,
);

customFetch.interceptors.response.use(
	(response) => response,
	(error) => error.response,
);

export default customFetch;
