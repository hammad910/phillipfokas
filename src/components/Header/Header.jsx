import React from 'react';
import styles from './Header.module.css';

const ChevronDown = () => (
  <svg className={styles.chevron} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LogoMark = () => (
  <svg className={styles.logoMark} width="28" height="28" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7C5CFF" />
        <stop offset="50%" stopColor="#9B5CFF" />
        <stop offset="100%" stopColor="#FF5C89" />
      </linearGradient>
    </defs>
    <path fill="url(#g)" d="M10 4c-1.657 0-3 1.343-3 3v2c0 1.657-1.343 3-3 3h-2v2h2c1.657 0 3 1.343 3 3v2c0 1.657 1.343 3 3 3h2v-2h-2c-1.105 0-2-.895-2-2v-2c0-1.967-1.138-3.663-2.792-4.47C8.862 12.263 10 10.567 10 8.6v-2c0-1.105.895-2 2-2h2V4h-2zM22 4h-2v2h2c1.105 0 2 .895 2 2v2c0 1.967 1.138 3.663 2.792 4.47C25.138 17.737 24 19.433 24 21.4v2c0 1.105-.895 2-2 2h-2v2h2c1.657 0 3-1.343 3-3v-2c0-1.657 1.343-3 3-3h2v-2h-2c-1.657 0-3-1.343-3-3v-2c0-1.657-1.343-3-3-3z" />
  </svg>
);

const Header = () => {
  return (
    <div className={styles.headerRoot}>
      <div className={styles.topGradient} />
      <header className={styles.header}>
        <div className={styles.left}>
          <LogoMark />
          <span className={styles.brand}>Enterpret</span>
        </div>
        <nav className={styles.nav} aria-label="Primary">
          <button className={styles.navItem} type="button">
            <span>Product</span>
            <ChevronDown />
          </button>
          <button className={styles.navItem} type="button">
            <span>Customers</span>
            <ChevronDown />
          </button>
          <button className={styles.navItem} type="button">
            <span>Solutions</span>
            <ChevronDown />
          </button>
          <button className={styles.navItem} type="button">
            <span>Resources</span>
            <ChevronDown />
          </button>
          <a className={`${styles.navItem} ${styles.link}`} href="#pricing">Pricing</a>
        </nav>
        <div className={styles.right}>
          <a className={`${styles.link} ${styles.signIn}`} href="#signin">Sign In</a>
          <a className={styles.cta} href="#book-demo">Book a Demo</a>
        </div>
      </header>
    </div>
  );
};

export default Header;


