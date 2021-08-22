import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

//imports for users api call
import { connect } from "react-redux";
import { loginUser } from "../../actions";
import Logo from "../../styles/img/main.svg";

function Login(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => props.loginUser(data);
  return (
    <div className='page_login'>
      <div className='container'>
        <div className='container_header'>
          <img className='logo_main' alt='app logo' src={Logo} />
          <h1 className='app_name'>E-Nom</h1>
        </div>

        <form className='page_login__form' onSubmit={handleSubmit(onSubmit)}>
          <label className='page_login__form--email'>
            <input
              placeholder='Нэвтрэх нэр'
              {...register("email", { required: true, maxLength: 250 })}
            />
          </label>
          <label className='page_login__form--password'>
            <input
              type='password'
              placeholder='Нууц үг'
              {...register("password", { required: true, maxLength: 250 })}
            />
          </label>
          <div className='page_login__form--links'>
            <label className='page_login__form--remember'>
              <input type='checkbox' defaultChecked {...register("remember")} />
              <span>Намайг санах</span>
            </label>
            <div className='page_login__form--forget-pass'>
              <span>Нууц үгээ мартсан уу?</span>
            </div>
          </div>

          <button className='button_blue button_login' type='submit'>
            Нэвтрэх
          </button>
          <div className='text-center'>
            <span>Шинээр бүртгэл үүсгэх бол</span>
            <br />
            <Link to='/signup'>Энд дарнуу</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default connect(null, { loginUser })(Login);
