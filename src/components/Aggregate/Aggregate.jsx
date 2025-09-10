import React from 'react';
import styles from './Aggregate.module.css';

const Source = ({ icon, count, alt }) => (
  <div className={styles.sourceRow}>
    <div className={styles.sourceIcon} aria-hidden="true">{icon}</div>
    <span className={styles.count}>{count}</span>
  </div>
);

const Badge = ({ children }) => (
  <span className={styles.badge}>{children}</span>
);

const Aggregate = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}> 
          <Badge>AGGREGATE</Badge>
          <h2 className={styles.title}>BUILD. LAUNCH. SCALE.</h2>
          <p className={styles.lede}>Turn your business vision into a thriving online store with AI-driven solutions. From setup to sales, everything is automated.</p>

          <a href="#canva-case" className={styles.cta}>How to Build a Successful Online Store</a>
        </div>

        <div className={styles.right}>
          <div className={styles.videoWrap}>
            <video className={styles.video} style={{height: '600px', width: '400px'}} src="/video-3.mp4" controls playsInline preload="metadata" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aggregate;


