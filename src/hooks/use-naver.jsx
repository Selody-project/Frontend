import useQuery from "./use-query.jsx";

const useNaver = () => {
  const query = useQuery();

  const accessToken = query.get("#access_token");
  const state = query.get("state");
  const expiresIn = query.get("expires_in");

  const naverLoginInfo = {
    accessToken,
    state,
    expiresIn,
  };

  return naverLoginInfo;
};

export default useNaver;
