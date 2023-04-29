import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const Google = () => {
  return (
    <>
      <GoogleLogin
        onSuccess={(response) => {
          console.log(response);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
        text="signin"
      />

      {/* 테스트 코드 작성을 위한 div */}
      <div id="google-login" data-testid="google-login"></div>
    </>
  );
};

export default Google;
