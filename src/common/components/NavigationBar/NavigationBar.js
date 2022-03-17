import React from 'react'
import { useSelector } from 'react-redux'
import styles from './NavigationBar.module.css'
const NavigationBar = () => {
  const { isLoggedIn } = useSelector(state => state.login)
  return (
    <div className={styles.navbar}>{isLoggedIn ? 'Logout' : 'Login'}</div>

  )
}

export default NavigationBar