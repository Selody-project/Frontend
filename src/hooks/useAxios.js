import { useEffect, useState } from "react";

import customFetch from "@/components/test/BaseAxios";

export const useAxios = (defaultParams) => {
	const [response, setResponse] = useState();
	const [error, setError] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [trigger, setTrigger] = useState(0);
	const [axiosParams, setAxiosParams] = useState(defaultParams);

	const refetch = () => {
		setResponse(response);
		setError(error);
		setIsLoading(true);
		setTrigger(Date.now());
	};

	const refetchWithParams = (params) => {
		setAxiosParams((prev) => ({ ...prev, ...params }));
		setTrigger(Date.now());
	};

	const fetchData = async (params) => {
		try {
			setIsLoading(true);
			const result = await customFetch.request(params);
			setResponse(result);
			setError();
		} catch (err) {
			setResponse();
			setError(err);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData(axiosParams);
	}, [trigger]);

	return {
		response,
		error,
		isLoading,
		refetch,
		refetchWithParams,
	};
};
