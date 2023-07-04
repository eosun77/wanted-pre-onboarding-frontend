import React from "react";
import { styled } from "styled-components";
import InputLine from "../components/InputLine";
import BtnBox from "../components/BtnBox";
import { validateEmail, validatePassword } from "../utils/validate";
import useAuth from "../hooks/useAuth";

function SignupPage() {
  const {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSignup,
  } = useAuth();

  return (
    <SignupWrapper>
      <SignupHeader>회원가입</SignupHeader>
      <InputLine label="이메일" id="email-input" onChange={handleEmailChange} />
      <InputLine
        label="비밀번호"
        id="password-input"
        onChange={handlePasswordChange}
        type="password"
      />
      <BtnBox
        label="회원가입"
        id="signup-button"
        onClick={handleSignup}
        disabled={!validateEmail(email) || !validatePassword(password)}
      />
    </SignupWrapper>
  );
}

const SignupWrapper = styled.div`
  text-align: center;
`;

const SignupHeader = styled.div`
  font-size: 32px;
  margin-block: 36px;
  font-weight: bold;
`;

export default SignupPage;
