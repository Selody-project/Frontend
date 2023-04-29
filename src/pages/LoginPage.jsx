import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import {
  Container,
  LeftSide,
  LogoForm,
  RightSide,
  LoginForm,
  Input,
  FindPW,
  LoginButton,
  SignUpButton,
  BtnWrapper,
} from './LoginPage.styles';
import Google from '../components/sign/Google';
import Naver from '../components/sign/Naver';
import { login, naverLogin } from '../store/user/user-slice';
import useNaver from '../hooks/use-naver.jsx';

function LoginPage() {
  const dispatchFn = useDispatch();
  const navigate = useNavigate();

  const naver = useNaver();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validate = () => {
    if (!email.trim() || !password.trim()) {
      toast.error('이메일과 비밀번호는 반드시 입력되어야 합니다.');
      return false;
    }

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      toast.error('올바른 이메일 형식이 아닙니다. 다시 입력해주세요.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) return;

    dispatchFn(login({ email, password }));
  };

  useEffect(() => {
    dispatchFn(naverLogin(naver));
  }, [naver]);

  return (
    <Container>
      <LeftSide>
        <LogoForm>
          <img src="/logo.svg" alt="logo" />
          <h1>Selody</h1>
          <h3>
            이번 주 우리 약속은 이날! <br />
            그룹 일정을 편하게 관리해보세요.
          </h3>
        </LogoForm>
      </LeftSide>
      <RightSide>
        <LoginForm onSubmit={handleSubmit}>
          <h1>LOGIN</h1>
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <FindPW>비밀번호를 잊으셨나요?</FindPW>
          <LoginButton type="submit">로그인</LoginButton>
          <SignUpButton type="button" onClick={() => navigate('/signup')}>
            회원가입
          </SignUpButton>
          <BtnWrapper>
            <Google />
            <Naver />
          </BtnWrapper>
        </LoginForm>
      </RightSide>
    </Container>
  );
}

export default LoginPage;
