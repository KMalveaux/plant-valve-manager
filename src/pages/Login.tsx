import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Login.css";
import axios from "axios";

const serverUrl = "http://localhost:9000";

const Login = () => {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <div className="pageBase">
      <div className="login-container">
        <p>Sign in</p>
        <input placeholder={"Username"} onChange={handleUsernameChange} />
        <input
          placeholder={"Password"}
          id={"passwordInputID"}
          type={"password"}
        />
        <button onClick={() => SignUp(username)}>Login</button>
        <Link to="/Blank">Register</Link>
      </div>
    </div>
  );
};

async function hashPassword(password: string) {
  const bcrypt = require("bcryptjs");

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

const SignUp = async (username: string) => {
  const passwordInput = document.getElementById(
    "passwordInputID"
  ) as HTMLInputElement;

  const formData = new FormData();
  formData.append("username", username);

  if (passwordInput !== null) {
    console.log("Original password " + passwordInput.value);
    const hashedPassword = await hashPassword(passwordInput.value);
    formData.append("passwordHash", hashedPassword);
    console.log("Password hash" + hashedPassword);
  } else {
    console.error("Element with ID 'passwordInputID' not found.");
  }

  axios
    .post(`${serverUrl}/authenticate`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log("Response:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export default Login;
