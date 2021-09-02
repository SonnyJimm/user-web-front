import React from "react";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

//imports for users api call
import { connect } from "react-redux";
import { loginUser } from "../../actions";

function LoginForm(props){
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => props.loginUser(data);
    return <form className='page_login__form' onSubmit={handleSubmit(onSubmit)}>
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
              <Link to='/forgot_password'>
                <span>Нууц үгээ мартсан уу?</span>
              </Link>
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
} 
export default connect(null, { loginUser })(LoginForm);