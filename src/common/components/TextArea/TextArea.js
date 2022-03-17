import React from 'react'
import styles from './TextArea.module.css'

const Textarea = ({ name, label, type = 'text', value, onChange, placeholder, register, rules, error,labelStyle }) => {
    return <div className={styles.textAreaContainer}>
        <div className={`${styles.label} ${labelStyle}`}>{label}</div>
        {error && <div className={styles.required}>{error}</div>}
        <textarea
            className={`${error ? styles.error : ''}`}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            {...register(name, rules)}
        ></textarea>
    </div>
}

export default Textarea