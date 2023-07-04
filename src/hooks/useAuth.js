import { useState } from "react";
import { signin, signup } from "../apis/auth";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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

  return {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSignin,
    handleSignup,
  };
};

export default useAuth;
