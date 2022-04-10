import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { authLogin } from "../../Redux/authSliceOperations";

const axios = require("axios");

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispath = useDispatch();

  const loginAccount = () => {
    dispath(
      authLogin({
        email,
        password,
      })
    );
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        type={"email"}
      ></input>
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        type={"password"}
      ></input>
      <button onClick={() => loginAccount()}>Войти в аккаунт</button>
    </div>
  );
};

export default Login;
