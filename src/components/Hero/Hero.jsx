import React from "react";
import styles from "./Hero.module.css";
import { handleCheckout } from "../../utils/checkout";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.break} />
          {/* <span className={styles.gradientWord}>YOUR MIND</span> <span className={styles.gradientWord}>YOUR CREATION</span> */}
          <img
            src="/logo.png"
            alt="AiShopClone Logo"
            style={{ width: '350px'}}
          />
        </h1>
        <p className={styles.subtitle}>
          Transform your ideas into profitable online stores with AI-powered
          automation. Generate, deploy, and scale your e-commerce empire in
          minutes, not months.
        </p>
        <div className={styles.actions}>
          <a
            onClick={handleCheckout}
            href="#book-demo"
            className={`${styles.btn} ${styles.primary}`}
          >
            Reserve Your Spot - $79
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
