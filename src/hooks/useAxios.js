import { useState } from "react";

import axios from "axios";

const useAxios = () => {
	const [loading, setLoading] = useState(false);

	const customAxios = axios.create({
		baseURL: "/back",
		withCredentials: true,
	});

	const fetchData = async (config) => {
		setLoading(true);

		try {
			const response = await customAxios(config);
			return response;
		} catch (err) {
			return err.response;
		} finally {
			setLoading(false);
		}
	};

	const get = async (url, config = {}) => {
		const response = await fetchData({ ...config, method: "get", url });
		return response;
	};

	const post = async (url, data = {}, config = {}) => {
		const response = await fetchData({ ...config, method: "post", url, data });
		return response;
	};

	const put = async (url, data = {}, config = {}) => {
		const response = await fetchData({ ...config, method: "put", url, data });
		return response;
	};

	const del = async (url, config = {}) => {
		const response = await fetchData({ ...config, method: "delete", url });
		return response;
	};

	return {
		loading,
		get,
		post,
		put,
		del,
	};
};

export default useAxios;
