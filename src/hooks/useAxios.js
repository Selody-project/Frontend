import { useState } from "react";

import axios from "axios";

const customAxios = axios.create({
	baseURL: "/back",
	withCredentials: true,
});

const useAxios = () => {
	const [loading, setLoading] = useState(false);

	const requestHandler = (config) => {
		setLoading(true);
		return config;
	};

	const responseHandler = (response) => {
		setLoading(false);
		return response;
	};

	const errorHandler = (error) => {
		setLoading(false);
		return error;
	};

	customAxios.interceptors.request.use(
		(config) => requestHandler(config),
		(error) => errorHandler(error),
	);

	customAxios.interceptors.response.use(
		(response) => responseHandler(response),
		(error) => errorHandler(error),
	);

	return [customAxios, loading];
};

export default useAxios;
