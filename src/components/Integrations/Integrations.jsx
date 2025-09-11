import React from 'react';
import styles from './Integrations.module.css';

const Icon = ({ children }) => (
  <div className={styles.icon}>{children}</div>
);

const Integrations = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.title}>DREAM → STORE → SUCCESS</h2>
          <p className={styles.lede}>Build your eCommerce brand in record time. No coding, no stress—just results with AI at your side.</p>
          <a className={styles.cta}>99% Launch Success</a>
        </div>

        <div className={styles.right}>
          <div className={styles.videoWrap}>
            <video className={styles.video} src="/video-2.mp4" controls playsInline preload="metadata" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;


