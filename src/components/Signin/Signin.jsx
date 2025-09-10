import React from 'react';
import styles from './Signin.module.css';

const Signin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1 className={styles.title}>Welcome back!</h1>
        
        <div className={styles.inputGroup}>
          <label className={styles.label}>Email</label>
          <input type="email" className={styles.input} placeholder="Enter your email" />
        </div>
        
        <div className={styles.inputGroup}>
          <div className={styles.passwordHeader}>
            <label className={styles.label}>Password</label>
          </div>
          <input type="password" className={styles.input} placeholder="Enter your password" />
        </div>
        
        <button className={styles.signInBtn}>
          Sign In
          <span className={styles.arrow}>→</span>
        </button>
        
      </div>
    </div>
  );
};

export default Signin;
