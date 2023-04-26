import React, { useEffect } from "react";

const Naver = () => {
  const { naver } = window;

  const naverSignin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: "r6F2Dw1s6vUkQEJeB2eS",
      callbackUrl: "http://localhost:3000",
      isPopup: false,
      loginButton: { color: "white", type: 2, height: "40" },
      callbackHandle: true,
      accessToken: localStorage.getItem("naverToken"),
    });
    naverLogin.init();

    console.log(naverLogin);
  };

  useEffect(() => {
    naverSignin();
  }, []);

  return <div id="naverIdLogin"></div>;
};

export default Naver;
