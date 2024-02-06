import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Login.css";
import { signUp } from "../functions/SignUpRequest";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="pageBase">
      <div className="login-container">
        <p>Sign in</p>
        <input placeholder={"Username"} onChange={handleUsernameChange} />
        <input
          placeholder={"Password"}
          type={"password"}
          onChange={handlePasswordChange}
        />
        <button onClick={() => signUp(username, password)}>Login</button>
        <Link to="/Blank">Register</Link>
      </div>
    </div>
  );
};

export default Login;
