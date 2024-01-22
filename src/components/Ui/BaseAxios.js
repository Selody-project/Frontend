/* eslint-disable no-underscore-dangle */
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
	async (error) => {
		const originalRequest = error.config;
		if (
			originalRequest.url !== "/api/auth/token/refresh" &&
			error.response.status === 401 &&
			!originalRequest._retry
		) {
			try {
				originalRequest._retry = true;
				const response = await customFetch.get("/api/auth/token/refresh");
				if (response.status !== 200) {
					throw response;
				}
				return customFetch(originalRequest);
			} catch (refreshError) {
				return refreshError.response;
			}
		}
		return error.response;
	},
);

export default customFetch;
