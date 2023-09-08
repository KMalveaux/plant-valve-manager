import React from "react";
import { Link } from "react-router-dom";
import "../css/Login.css";

const Login = () => {
    return(<div className="pageBase">
        <div className="login-container">
            <p>hello</p>

            <input placeholder="Username"></input>
            <input placeholder="Password"></input>
            <button>Login</button>
            <Link to="/Blank">Register</Link>
        </div>
    </div>);
}

export default Login;