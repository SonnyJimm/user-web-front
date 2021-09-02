import React from "react";

import Logo from "../../styles/img/main.svg";
import LoginForm from "../forms/LoginForm";
function Login() {
  return (
    <div className='page_login'>
      <div className='container'>
        <div className='container_header'>
          <img className='logo_main' alt='app logo' src={Logo} />
          <h1 className='app_name'>E-Nom</h1>
        </div>
          <LoginForm />
      </div>
    </div>
  );
}

export default Login;
