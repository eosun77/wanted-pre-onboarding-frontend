import React, { useState } from "react";
import { styled } from "styled-components";
import InputLine from "../components/InputLine";
import BtnBox from "../components/BtnBox";
import { signup } from "../apis/auth";
import { useNavigate } from "react-router-dom";

const SignupWrapper = styled.div`
  text-align: center;
`;

const SignupHeader = styled.div`
  font-size: 32px;
  margin-block: 36px;
  font-weight: bold;
`;

function SignupPage() {
  const navigate = useNavigate();
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
    signup(email, password)
      .then((res) => {
        console.log(res);
        alert("회원가입 완료");
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err);
        alert("회원가입 실패");
      });
  };
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

export default SignupPage;
