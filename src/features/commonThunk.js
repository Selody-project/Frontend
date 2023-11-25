import customFetch from "@/components/Base/BaseAxios";

const commonThunk = async (
	{ method, url, params = undefined, data = undefined, successCode, ...rest },
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
		return thunkAPI.rejectWithValue(error.message);
	}
};

export default commonThunk;
