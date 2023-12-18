import customFetch from "@/components/Base/BaseAxios";

const commonThunk = async (
	{ method, url, successCode, params = undefined, data = undefined, ...rest },
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
		if (response.status !== successCode) {
			throw response.data;
		}
		return response.data;
	} catch (error) {
		if (error.response) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
		return thunkAPI.rejectWithValue(error.error);
	}
};

export default commonThunk;
