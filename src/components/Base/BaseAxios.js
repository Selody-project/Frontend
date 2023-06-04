import axios from "axios";

const customFetch = axios.create({
	baseURL: "/back",
	withCredentials: true,
});

export default customFetch;
