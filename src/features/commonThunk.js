import customFetch from "@/components/Base/BaseAxios";

const getSuccessCode = (method) => {
	if (method === "GET") {
		return 200;
	}
	if (method === "POST" || method === "PUT") {
		return 201;
	}
	if (method === "DELETE") {
		return 204;
	}
	throw new Error("올바른 HTTP method가 아닙니다.");
};

const commonThunk = async (
	{ method, url, params = undefined, data = undefined, ...rest },
	thunkAPI,
) => {
	try {
		const response = await customFetch.request({
			method,
			url,
			params,
			data,
			...rest,
		});
		if (response.status !== getSuccessCode(method)) {
			throw response.data;
		}
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
};

export default commonThunk;
