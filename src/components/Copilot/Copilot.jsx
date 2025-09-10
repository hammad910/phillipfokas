import React from 'react';
import styles from './Copilot.module.css';

const WindowChrome = () => (
  <div className={styles.chrome}>
    <span />
    <span />
    <span />
  </div>
);

const Copilot = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.videoWrap}>
            <video className={styles.video} style={{height: '500px', width: '500px'}} src="/video-1.mp4" controls playsInline preload="metadata" />
          </div>
        </div>

        <div className={styles.right}>
          <h2 className={styles.title}>AI COMMERCE REVOLUTION</h2>
          <p className={styles.body}>
            "Start your online store today with zero hassle. Our AI handles design, setup, and growth—so you focus on profits."
          </p>

          <a href="#descript-case" className={styles.cta}>24/7 Smart Automation</a>
        </div>
      </div>
    </section>
  );
};

export default Copilot;


