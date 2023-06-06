import React, { useState } from "react";
import { styled } from "styled-components";
import InputBox from "../components/InputBox";
import BtnBox from "../components/BtnBox";
import { createAuth } from "../apis/auth";

const SignupWrapper = styled.div`
  text-align: center;
`;

const SignupHeader = styled.div`
  font-size: 32px;
  margin-block: 36px;
  font-weight: bold;
`;

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateEmail = (value) => {
    return value.includes("@");
  };

  const validatePassword = (value) => {
    return value.length >= 8;
  };

  const handleSignup = () => {
    createAuth(email, password)
      .then((res) => {
        console.log(res);
        alert("회원가입 완료");
      })
      .catch((err) => {
        console.log(err);
        alert("회원가입 실패");
      });
  };
  return (
    <SignupWrapper>
      <SignupHeader>회원가입</SignupHeader>
      <InputBox label="이메일" id="email-input" onChange={handleEmailChange} />
      <InputBox
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

export default SignupPage;
