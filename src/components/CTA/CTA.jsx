import React from 'react';
import styles from './CTA.module.css';

const CTA = () => {
  return (
    <section className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.container}>
        <h2 className={styles.title}>Ready to Build Your Empire?</h2>
        <p className={styles.subtitle}>Join thousands of entrepreneurs who've transformed their lives with AI-powered e-commerce.</p>
        <a href="#start" className={styles.button}>
          <span className={styles.icon}>⚡</span>
          Start Building Now - $79
        </a>
      </div>
    </section>
  );
};

export default CTA;


