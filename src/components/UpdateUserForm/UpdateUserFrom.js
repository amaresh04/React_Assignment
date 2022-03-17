import React, { useEffect } from 'react'
import { useForm, useWatch } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Input from '../../common/components/Input/Input';
import Button from '../../common/components/Button/Button';
import Textarea from '../../common/components/TextArea/TextArea';
import { validationRules } from '../../common/validations';
import styles from './UpdateUserForm.module.css'
import { updateUser } from '../../store/actions'


const UpdateUserFrom = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const { users } = useSelector(state => state.user)
    const { register, control, handleSubmit, setValue, formState: { errors } } = useForm({
        mode: 'onSubmit',
        defaultValues: { firstName: '', lastName: '', email: '', contactNumber: '', address: '' }
    });
    const data = useWatch({
        control
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
            setValue("firstName", currentUser.firstName)
            setValue("lastName", currentUser.lastName)
            setValue("email", currentUser.email)
            setValue("contactNumber", currentUser.contactNumber)
            setValue("address", currentUser.address)
        }
    }, [])

    return (
        <div className={styles.editUserrForm}>
            <h1> Update User Form </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type='text'
                    label='First Name'
                    name="firstName"
                    value={data.firstName || ''}
                    register={register}
                    rules={validationRules.firstName}
                    error={errors?.firstName?.message}
                />
                <Input
                    type='text'
                    label='Last Name'
                    name="lastName"
                    value={data.lastName || ''}
                    register={register}
                    rules={validationRules.lastName}
                    error={errors?.lastName?.message}
                />
                <Input
                    type='email'
                    label='Eamil'
                    name="email"
                    value={data.email || ''}
                    register={register}
                    rules={validationRules.email}
                    error={errors?.email?.message}
                />
                <Input
                    type='text'
                    label='Mobile Number'
                    name="contactNumber"
                    value={data.contactNumber || ''}
                    register={register}
                    rules={validationRules.contactNumber}
                    error={errors?.contactNumber?.message}
                    notShowErrorMessage={false}
                />
                <Textarea
                    type='textarea'
                    label='Address'
                    name="address"
                    value={data.address || ''}
                    register={register}
                    rules={validationRules.address}
                    error={errors?.address?.message}
                />

                <Button
                    text='Submit'
                    onClick={handleSubmit(onSubmit)}
                />
            </form>
        </div>
    )
}

export default UpdateUserFrom