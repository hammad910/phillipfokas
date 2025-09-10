import React from 'react';
import styles from './Signup.module.css';

const Signup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1 className={styles.title}>Welcome back!</h1>
        
        <div className={styles.inputGroup}>
          <label className={styles.label}>Full Name</label>
          <input type="text" className={styles.input} placeholder="Enter your full name" />
        </div>
        
        <div className={styles.inputGroup}>
          <label className={styles.label}>Country</label>
          <input type="text" className={styles.input} placeholder="Enter your country" />
        </div>
        
        <div className={styles.inputGroup}>
          <label className={styles.label}>Phone Number</label>
          <input type="tel" className={styles.input} placeholder="Enter your phone number" />
        </div>
        
        <div className={styles.inputGroup}>
          <label className={styles.label}>Email</label>
          <input type="email" className={styles.input} placeholder="Enter your email" />
        </div>
        
        <div className={styles.inputGroup}>
          <label className={styles.label}>Password</label>
          <input type="password" className={styles.input} placeholder="Enter your password" />
        </div>
        
        <div className={styles.inputGroup}>
          <label className={styles.label}>Confirm Password</label>
          <input type="password" className={styles.input} placeholder="Confirm your password" />
        </div>
        
        <button className={styles.signInBtn}>
          Sign Up
          <span className={styles.arrow}>→</span>
        </button>
      
      </div>
    </div>
  );
};

export default Signup;
