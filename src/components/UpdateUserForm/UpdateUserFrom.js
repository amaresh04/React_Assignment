import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './UpdateUserForm.module.css'
import { updateUser } from '../../store/actions'


const UpdateUserFrom = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const { users } = useSelector(state => state.user)
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({defaultValues: { firstname: '',lastname: '', email: '',mobile: '',address: '' }
    });
    const onSubmit = (data) => {
        let allUsers = [...users]
        allUsers[id] = data
        dispatch(updateUser(allUsers))
        navigate('/userlist')
    }

    useEffect(() => {
        if (users.length) {
            const currentUser = users[id]
            setValue("firstname", currentUser.firstname)
            setValue("lastname", currentUser.lastname)
            setValue("email", currentUser.email)
            setValue("mobile", currentUser.mobile)
            setValue("address", currentUser.address)
        }
    }, [])

    return (
        <div className={styles.editUserrForm}>
            <h1> Update User Form </h1>
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

export default UpdateUserFrom