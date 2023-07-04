import React from "react";
import { styled } from "styled-components";
import InputLine from "../components/InputLine";
import BtnBox from "../components/BtnBox";
import useAuth from "../hooks/useAuth";
import { validateEmail, validatePassword } from "../utils/validate";
import { useNavigate } from "react-router-dom";

function SigninPage() {
  const navigate = useNavigate();

  const {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSignin,
  } = useAuth();

  return (
    <SigninWrapper>
      <SigninHeader>로그인</SigninHeader>
      <InputLine label="이메일" id="email-input" onChange={handleEmailChange} />
      <InputLine
        label="비밀번호"
        id="password-input"
        onChange={handlePasswordChange}
        type="password"
      />
      <SigninButtonContainer>
        <BtnBox
          label="로그인"
          id="signin-button"
          onClick={handleSignin}
          disabled={!validateEmail(email) || !validatePassword(password)}
        />
        <BtnBox
          label="회원가입"
          id="move-signup-button"
          onClick={() => navigate("/signup")}
          ghost="true"
        />
      </SigninButtonContainer>
    </SigninWrapper>
  );
}

const SigninWrapper = styled.div`
  text-align: center;
`;

const SigninHeader = styled.div`
  font-size: 32px;
  margin-block: 36px;
  font-weight: bold;
`;

const SigninButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export default SigninPage;
