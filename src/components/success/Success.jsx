import { useState } from "react";
import styles from "./Success.module.css";
import { Link } from "react-router-dom";

const success = () => {
  return (
    <div className={styles.successcontainer}>
      <div className={styles.successcard}>
        <h1 className={styles.successtitle}>Payment Successful!</h1>
        <p className={styles.successmessage}>
          Thank you for your purchase! Your transaction has been completed
          successfully.
        </p>
        <Link to="/" className={styles.successbtn}>
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default success;