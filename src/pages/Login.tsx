import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Login.css";
import axios from "axios";

import MyTextInput from "../components/MyTextInput";

const Login = () => {
  const [username, setUsername] = useState("");

  return (
    <div className="pageBase">
      <div className="login-container">
        <p>Sign in</p>
        <MyTextInput placeholder={"Username"} hideText={false} />
        <MyTextInput
          id="passwordInput"
          placeholder={"Password"}
          hideText={true}
        />
        <button onClick={() => SignUp}>Login</button>
        <Link to="/Blank">Register</Link>
      </div>
    </div>
  );
};

async function hashPassword(password: string) {
  const bcrypt = require("bcrypt");

  const saltRounds = 10; // The number of salt rounds determines the hashing complexity
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

const SignUp = async () => {
  const passwordInput = document.getElementById("passwordInput");
  if (passwordInput !== null) {
    const hashedPassword = await hashPassword(passwordInput.value);
    // Now you can use 'hashedPassword' as needed
  } else {
    // Handle the case where the element with the ID 'passwordInput' is not found
    console.error("Element with ID 'passwordInput' not found.");
  }
};

export default Login;
