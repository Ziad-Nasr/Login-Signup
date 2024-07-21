import React from "react";
import "./Login.css";

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="email" id="password" />
        </div>
      </form>
    </div>
  );
}

export default Login;
