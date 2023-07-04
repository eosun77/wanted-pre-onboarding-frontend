import { useState } from "react";
import { signin } from "../apis/auth";

const useAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignin = (navigate) => {
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

  return {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSignin,
  };
};

export default useAuth;
