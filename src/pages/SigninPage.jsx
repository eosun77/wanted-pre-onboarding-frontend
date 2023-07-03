import React, { useState } from "react";
import { styled } from "styled-components";
import InputLine from "../components/InputLine";
import BtnBox from "../components/BtnBox";
import { signin } from "../apis/auth";
import { useNavigate } from "react-router-dom";

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

function SigninPage() {
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

  const handleSignin = () => {
    signin(email, password)
      .then((res) => {
        console.log(res);
        alert("로그인 성공");
        localStorage.setItem("accessToken", res.data.access_token);
        navigate("/todo");
      })
      .catch((err) => {
        console.log(err);
        alert("로그인 실패");
      });
  };
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

export default SigninPage;
