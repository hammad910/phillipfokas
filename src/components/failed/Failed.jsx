import { useState } from "react";
import styles from "./Failed.module.css";
import { Link } from "react-router-dom";

const failed = () => {
  return (
    <div className={styles.successcontainer}>
      <div className={styles.successcard}>
        <h1 className={styles.successtitle}>Payment Failed</h1>
        <p className={styles.successmessage}>
          Unfortunately, your payment could not be processed. Please check your
          card details or try again with a different payment method.
        </p>
        <Link to="/" className={styles.successbtn}>
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default failed;
