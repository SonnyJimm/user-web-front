import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ICON from "../../styles/img/back.svg";

//imports for users api call
import { connect } from "react-redux";
import { signupUser } from "../../actions";

function SignUp(props) {
  const { register, formState: errors, handleSubmit } = useForm();
  const onSubmit = (data) => props.signupUser(data);
  const password = register("password", { required: true, maxLength: 250 });
  return (
    <div className='page_signup'>
      <div className='container'>
        <div className='container_header'>
          <Link to='/'>
            <img className='back-link-icon' alt='back icon' src={ICON} />
          </Link>
          <h1 className='app_name'>Бүртгүүлэх</h1>
        </div>

        <form className='page_signup__form' onSubmit={handleSubmit(onSubmit)}>
          <label className='page_signup__form--username'>
            <input
              placeholder='Нэвтрэх нэр'
              {...register("user_name", { required: true, maxLength: 250 })}
            />
          </label>
          <label className='page_signup__form--email'>
            <input
              placeholder='Цахим шуудан'
              {...register("email", { required: true, maxLength: 250 })}
            />
          </label>
          <label className='page_signup__form--phone'>
            <input
              placeholder='Утасны дугаар'
              {...register("phone", { required: true, maxLength: 8 })}
            />
          </label>
          <label className='page_signup__form--password'>
            <input
              type='password'
              placeholder='Нууц үг'
              onChange={(e) => {
                password.onChange(e);
              }}
              onBlur={password.onBlur}
              ref={password.ref}
            />
          </label>
          {errors.password && <div>"hi"</div>}
          <label className='page_signup__form--password'>
            <input
              name='password_re'
              type='password'
              placeholder='Нууц үг давтах'
              {...register("password_re", { required: true, maxLength: 250 })}
            />
          </label>
          <button className='button_signup button_blue' type='submit'>
            Бүртгүүлэх
          </button>
          <div className='text-center'>
            <span>Аль хэдийн бүртгэлтэй бол</span>
            <br />
            <Link to='/'>Энд дарнуу</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default connect(null, { signupUser })(SignUp);
