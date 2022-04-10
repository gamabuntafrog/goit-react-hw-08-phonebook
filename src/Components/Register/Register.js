import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { authRegister } from "../../Redux/authSliceOperations";

const axios = require("axios");

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispath = useDispatch();

  async function createAccount() {
    try {
      dispath(
        authRegister({
          name,
          password,
          email,
        })
      );
    } catch {}
  }

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        onChange={(e) => setName(e.target.value)}
        placeholder="text"
        type={"text"}
      ></input>
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        type={"password"}
      ></input>
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        type={"email"}
      ></input>
      <button onClick={() => createAccount()}>Создать аккаунт</button>
    </div>
  );
};

export default Register;
