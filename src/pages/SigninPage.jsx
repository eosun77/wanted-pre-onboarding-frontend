import React, { useState } from "react";
import { styled } from "styled-components";
import InputBox from "../components/InputBox";
import BtnBox from "../components/BtnBox";
import { readAuth } from "../apis/auth";

const SigninWrapper = styled.div`
  text-align: center;
`;

const SigninHeader = styled.div`
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

  const handleSignin = () => {
    readAuth(email, password)
      .then((res) => {
        console.log(res);
        alert("로그인 성공");
        localStorage.setItem("accessToken", res.data.access_token);
      })
      .catch((err) => {
        console.log(err);
        alert("로그인 실패");
      });
  };
  return (
    <SigninWrapper>
      <SigninHeader>로그인</SigninHeader>
      <InputBox label="이메일" id="email-input" onChange={handleEmailChange} />
      <InputBox
        label="비밀번호"
        id="password-input"
        onChange={handlePasswordChange}
        type="password"
      />
      <BtnBox
        label="로그인"
        id="signin-button"
        onClick={handleSignin}
        disabled={!validateEmail(email) || !validatePassword(password)}
      />
    </SigninWrapper>
  );
}

export default SignupPage;