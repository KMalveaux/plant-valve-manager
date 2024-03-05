// Third Party Library Imports
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Local imports
import { signUp } from "../functions/SignUpRequest";

import styles from "../css/Login.module.css";

/**
 * The login screen
 * @returns JSX.Element representing the Login Page
 */
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
    <div className={styles.pageBase}>
      <div className={styles.loginContainer}>
        <p id={styles.companyName}>Marshall, Carter and Dark, Ltd.</p>
        <div>
          <p>Username</p>
          <input placeholder={"Username"} onChange={handleUsernameChange} />
        </div>
        <div>
          <p>Password</p>
          <input
            placeholder={"Password"}
            type={"password"}
            onChange={handlePasswordChange}
          />
        </div>
        <button
          id={styles.loginButton}
          onClick={() => signUp(username, password)}
        >
          Register
        </button>
        <Link to="/Blank">Login</Link>
      </div>
    </div>
  );
};

export default Login;
