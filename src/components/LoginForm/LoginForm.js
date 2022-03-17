import React from 'react'
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { login } from '../../store/actions'
import { useDispatch } from 'react-redux'
import Input from '../../common/components/Input/Input';
import Button from '../../common/components/Button/Button';
import { validationRules } from '../../common/validations';
import styles from './LoginForm.module.css'

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, control, handleSubmit, formState: { errors } } = useForm({
    mode: 'onSubmit',
    defaultValues: { email: '', password: '' }
  });
  const data = useWatch({
    control
  });

  const onSubmit = () => {
    dispatch(login(true))
    navigate('/adduser')
  };

  return (
    <>
      <div className={styles.loginForm}>
        <h1> Login </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type='email'
            label='Email'
            name="email"
            value={data.email || ''}
            register={register}
            rules={validationRules.email}
            error={errors?.email?.message}
          />
          <Input
            type='password'
            label='Password'
            name="password"
            value={data.password || ''}
            register={register}
            rules={validationRules.password}
            error={errors?.password?.message}
            notShowErrorMessage={false}
          />

          <Button
            text='Submit'
            onClick={handleSubmit(onSubmit)}
          />
        </form>
      </div>


    </>
  )
}

export default LoginForm