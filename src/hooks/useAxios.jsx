import { useEffect, useState } from "react";

import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "/back",
	timeout: 3000,
	withCredentials: true,
});

const errorHandler = (e) => Promise.reject(e);

axiosInstance.interceptors.request.use(
	(config) => {
		const accessToken = "token";
		if (accessToken) {
			config.headers.Authorization = accessToken;
		}
		return config;
	},
	(error) => errorHandler(error),
);

axiosInstance.interceptors.response.use(
	(response) => response,
	(error) => errorHandler(error),
);

export const useAxios = (axiosParams) => {
	const [response, setResponse] = useState();
	const [error, setError] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [trigger, setTrigger] = useState(0);

	const refetch = () => {
		setResponse(response);
		setError(error);
		setIsLoading(true);
		setTrigger(Date.now());
	};

	const axiosData = async (params) => {
		try {
			setIsLoading(true);
			const result = await axiosInstance.request({ ...params });
			setResponse(result);
		} catch (e) {
			setError(e);
			setIsLoading(false);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		axiosData(axiosParams);
	}, [trigger]);

	return {
		response,
		error,
		isLoading,
		refetch,
	};
};
