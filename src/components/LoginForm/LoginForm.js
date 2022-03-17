import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { login } from '../../store/actions'
import { useDispatch } from 'react-redux'
import styles from './LoginForm.module.css'

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
      defaultValues: {
      email: '',
      password: ''
    }
  });
  const onSubmit = (data) => {
    dispatch(login(true))
    navigate('/adduser')
  }
  
  return (
    <div className={styles.loginForm}>
      <h1> Login </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.input}
          placeholder='Email'
          {...register('email',
            {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            })}
        />
        {errors.email && <p className="error">Please Enter Valid Email</p>}
        <input
          className={styles.input}
          placeholder='password'
          {...register('password',
            {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/
            })}
        />
        {errors.password && <p className="error">Password should be 8 - 16 characters.(1 Special Character,1 Uppercase, 1 Lowercase, 1 Number)</p>}
        <input type="submit" />
      </form>
    </div>
  )
}

export default LoginForm