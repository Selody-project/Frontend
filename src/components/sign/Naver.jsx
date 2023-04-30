import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Naver = () => {
  const { naver } = window;

  const naverSignin = () => {
    if (naver) {
      const naverLogin = new naver.LoginWithNaverId({
        clientId: 'r6F2Dw1s6vUkQEJeB2eS',
        callbackUrl: 'http://localhost:3000/login',
        isPopup: false,
        loginButton: { color: 'white', type: 2, height: '40' },
        callbackHandle: true,
      });
      naverLogin.init();
    }
  };

  useEffect(() => {
    naverSignin();
  }, []);

  return <div id="naverIdLogin" data-testid="naver-login"></div>;
};

export default Naver;
