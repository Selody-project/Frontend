import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import useQuery from "../../hooks/use-query";
import { naverLogin } from "../../store/user/user-slice";

const Landing = () => {
  const dispatchFn = useDispatch();
  const query = useQuery();

  const accessToken = query.get("#access_token");
  const state = query.get("state");
  const expiresIn = query.get("expires_in");

  const naverLoginInfo = {
    accessToken,
    state,
    expiresIn,
  };

  useEffect(() => {
    console.log(naverLoginInfo);
    dispatchFn(naverLogin(naverLoginInfo));
  }, []);

  return <div>Landing</div>;
};

export default Landing;
