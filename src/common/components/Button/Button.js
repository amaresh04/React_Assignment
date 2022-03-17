import React from 'react'
import styles from './Button.module.css'

const Button = ({ text, onClick, className = '', btnClassName = '' }) => {
    return <div className={`${styles.buttonContainer} ${className}`}>
        <button onClick={onClick} className={btnClassName}>
            <div>{text}</div>
        </button>
    </div>
}

export default Button