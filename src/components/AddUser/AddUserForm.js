import React from 'react'
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { addUser } from '../../store/actions'
import { useDispatch } from 'react-redux'
import Input from '../../common/components/Input/Input';
import Button from '../../common/components/Button/Button';
import Textarea from '../../common/components/TextArea/TextArea';
import { validationRules } from '../../common/validations';
import styles from './AddUserForm.module.css'

const AddUserForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, control, handleSubmit, formState: { errors } } = useForm({
        mode: 'onSubmit',
        defaultValues: { firstName: '', lastName: '', email: '', contactNumber: '', address: '' }
    });
    const data = useWatch({
        control
    });
    const onSubmit = () => {
        dispatch(addUser(data))
        navigate('/userlist')
    };
    return (
        <div className={styles.addUserForm}>
            <h1> Add User </h1>
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
                    notShowErrorMessage={true}
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

export default AddUserForm