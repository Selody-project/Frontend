import useQuery from "./use-query.jsx";
import { useNavigate } from "react-router-dom";

const useNaver = () => {
  const query = useQuery();
  const navigate = useNavigate();

  const access_Token = query.get("#access_token");
  const state = query.get("state");
  const expiresIn = query.get("expires_in");

  const naverLoginInfo = {
    access_Token,
    navigate,
  };

  return naverLoginInfo;
};

export default useNaver;
