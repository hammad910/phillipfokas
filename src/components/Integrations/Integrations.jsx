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
          <div className={styles.badge}>INTEGRATIONS</div>
          <h2 className={styles.title}>Integrate with all feedback channels</h2>
          <p className={styles.lede}>Enterpret connects to your existing channels, and more with our CSV importer and API.</p>
          <a href="#integrations" className={styles.cta}>Integrations</a>
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


