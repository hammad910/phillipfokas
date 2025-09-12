import { useEffect } from "react";
import styles from "./Success.module.css";
import { Link } from "react-router-dom";

const Success = () => {
  useEffect(() => {
    const uid = localStorage.getItem("uid");
    const selectedPlan = localStorage.getItem("selectedPlan"); // save plan id during checkout

    if (uid && selectedPlan) {
      fetch("https://phillipfokas.we-publish.com/package-store", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uid,
          selectedPlan,
        }),
      }).catch((err) => {
        console.error("API error:", err);
      });
    }
  }, []);

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

export default Success;
