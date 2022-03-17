import React, { useState, useEffect } from 'react'
import styles from './Input.module.css'

const Input = ({
    disabled = false,
    name,
    label,
    type = 'text',
    value,
    onChange,
    placeholder,
    register,
    rules,
    error,
    notShowErrorMessage,
    refObj,
    autoComplete,
    onkeydown,
    style,
    outerStyle,
    labelStyle
}) => {

    const [inputType, setInputType] = useState('text')
    useEffect(() => {
        setInputType(type)
    }, [])

    return <div className={styles.inputContainer} style={outerStyle || null}>
        <div className={`${styles.label} ${labelStyle}`}>{label}</div>
        {!notShowErrorMessage ? error && <div className={styles.required}>{error}</div> : ''}
        <div className={styles.input}>
            <input
                className={`${error ? styles.error : ''}`}
                name={name}
                type={inputType}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                ref={refObj || null}
                autoComplete={autoComplete || null}
                onKeyPress={onkeydown}
                disabled={disabled}
                style={style || null}
                {...(register && register(name, rules))}
            >
            </input>
        </div>

    </div>
}

export default Input