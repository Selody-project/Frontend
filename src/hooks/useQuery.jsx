import { useLocation } from "react-router-dom";

const useQuery = () => {
	return new URLSearchParams(useLocation().hash);
};

export default useQuery;
