import React from "react";
import "./LoginStyle.css";

function Login() {
  return (
    <div className="container">
      <div className="box">
        <h1 className="heading">Login Page</h1>
        <div className="email-box">
          <label>Email or Username</label>
          <input type="text" placeholder="Enter Email Or Username" name="email" />
        </div>
        <div className="password-box">
          <label>Password</label>
          <input type="password" placeholder="Enter Password" name="password" />
        </div>
        <div className="button-box">
          <button className="signin">Sign In</button>
          <button className="signup">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
