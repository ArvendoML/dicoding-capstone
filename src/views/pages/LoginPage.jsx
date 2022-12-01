import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/pages/loginRegisterPage.css";
import appLogo from "../../public/images/ngantriDok-logo.png";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleOnChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleOnChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmitButton = (event) => {
    event.preventDefault();
    console.log(email, password);
    navigate("/");
  };

  return (
    <section id="loginPage">
      <form className="container">
        <img src={appLogo} alt="NgantriDok" className="app-img-logo" />
        <div className="form-main">
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="example@gmail.com"
              onChange={handleOnChangeEmail}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="*********"
              onChange={handleOnChangePassword}
            />
          </div>
        </div>
        <div className="form-footer">
          <button
            type="button"
            className="btn btn-primary btn-login"
            onClick={(e) => handleSubmitButton(e)}
          >
            Login
          </button>
          <p>
            Belum punya akun?
            {' '}
            <Link to="/register/user">Daftar disini!</Link>
          </p>
        </div>
      </form>
    </section>
  );
}

export default Login;
