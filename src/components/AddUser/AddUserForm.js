import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { addUser } from '../../store/actions'
import { useDispatch } from 'react-redux'
import styles from './AddUserForm.module.css'

const AddUserForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
        firstname :'',
        lastname :'',
        email: '',
        mobile: '',
        address:''
      }
    });
    const onSubmit = (data) => {
        console.log(data);
        dispatch(addUser(data))
        navigate('/userlist')
    }
    return (
        <div className={styles.addUserForm}>
            <h1> Add User </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder='FirstName'
                    {...register('firstname')}
                />
                <input
                    placeholder='LastName'
                    {...register('lastname')}
                />
                <input
                    placeholder='Email'
                    {...register('email',
                        {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        })}
                />
                {errors.email && <p className="error">Please Enter Valid Email</p>}
                <input
                    placeholder='Mobile'
                    {...register('mobile',
                        {
                            required: true,
                            pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/
                        })}
                />
                {errors.mobile && <p className="error">Please Enter Valid Mobile Number</p>}

                <textarea
                    placeholder='Address'
                    {...register('address')}
                />
                <input type="submit" />
            </form>
        </div>
    )
}

export default AddUserForm