import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Header,
  LeftSide,
  LogoForm,
  LogoContainer,
  LogoContainer2,
  RightSide,
  SignUpForm,
  InputContainer,
  Input,
  DuplicateCheckButton,
  SignUpButton,
} from "./SignUpPage.styles";
import { toast } from "react-toastify";
import { signup } from "../store/user/user-slice";

function SignUpPage() {
  const dispatchFn = useDispatch();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordCheckChange = (event) => {
    setPasswordCheck(event.target.value);
  };

  const handleDuplicateCheck = (event) => {
    event.preventDefault();
    // 중복 확인 로직 작성
  };

  const validate = () => {
    if (!email.trim() || !name.trim() || !password.trim() || !passwordCheck.trim()) {
      toast.error("모든 항목은 반드시 입력되어야 합니다.");
      return false;
    }

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      toast.error("올바른 이메일 형식이 아닙니다. 다시 입력해주세요.");
      return false;
    }

    if (password !== passwordCheck) {
      toast.error("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) return;

    dispatchFn(signup({ email, nickname: name, password, passwordCheck, navigate }));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <>
      <Header>
        <LogoContainer>
          <img src="/logo.svg" alt="logo" />
          <h1>Selody</h1>
        </LogoContainer>
      </Header>
      <Container>
        <LeftSide>
          <LogoForm>
            <LogoContainer2>
              <h3>
                JOIN <br />
                MEMBER
              </h3>
              <h4>Selody 프로젝트에 오신 것을 환영합니다.</h4>
            </LogoContainer2>
          </LogoForm>
        </LeftSide>
        <RightSide>
          <SignUpForm onSubmit={handleSubmit}>
            <label htmlFor="email">아이디 (이메일)</label>
            <InputContainer>
              <Input type="email" id="email" value={email} onChange={handleEmailChange} placeholder="이메일을 입력해주세요." />
              <DuplicateCheckButton onClick={handleDuplicateCheck}>중복확인</DuplicateCheckButton>
            </InputContainer>
            <label htmlFor="name">어떤 이름을 사용하시겠어요?</label>
            <InputContainer>
              <Input type="name" id="name" value={name} onChange={handleNameChange} placeholder="이름을 입력해주세요." />
              <DuplicateCheckButton onClick={handleDuplicateCheck}>중복확인</DuplicateCheckButton>
            </InputContainer>
            <label htmlFor="password">비밀번호</label>
            <InputContainer>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="비밀번호를 입력해주세요."
              />
            </InputContainer>
            <label htmlFor="passwordCheck">비밀번호 확인</label>
            <InputContainer>
              <Input
                type="password"
                id="passwordCheck"
                value={passwordCheck}
                onChange={handlePasswordCheckChange}
                placeholder="비밀번호를 다시 입력해주세요."
              />{" "}
            </InputContainer>
            <SignUpButton type="submit">회원가입</SignUpButton>
            <Link to="/login">로그인</Link>
          </SignUpForm>
        </RightSide>
      </Container>
    </>
  );
}

export default SignUpPage;
