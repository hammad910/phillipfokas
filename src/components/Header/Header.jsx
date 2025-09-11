import React from 'react';
import styles from './Header.module.css';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.headerRoot}>
      {/* Top Progress Bar */}
      <div className={styles.topBar}>
        <div className={styles.progressSection}>
          <span className={styles.progressText}>0/800 GOAL PROGRESS</span>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: '0%' }}></div>
          </div>
          <span className={styles.progressPercent}>0.0%</span>
        </div>
        <div className={styles.metrics}>
          <span className={styles.metric}>Viral Coefficient: 0x</span>
          <span className={styles.metric}>Conversion: 0%</span>
        </div>
      </div>

      {/* Promotional Banner */}
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <span className={styles.bannerText}>✨🚀 GOING LIVE AUG 31ST - 7 DAYS LEFT! ✨</span>
          <div className={styles.bannerButtons}>
            <div className={styles.timeButton}>
              <span className={styles.timeIcon}>🕐</span>
              <span className={styles.fireIcon}>🔥</span>
              <span>ONLY 168H LEFT</span>
            </div>
            <div className={styles.joinButton}>
              <span className={styles.peopleIcon}>👥</span>
              <span>0+ JOINED</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={styles.header}>
        <div className={styles.left}>
          <div className={styles.logoContainer}>
            <img src="/logo.png" alt="AI SHOP CLONE" className={styles.logo} />
          </div>
          <div className={styles.brandInfo}>
            <h1 className={styles.brandName}>AI SHOP CLONE</h1>
            <p className={styles.tagline}>YOUR MIND YOUR CREATION</p>
          </div>
        </div>

        <nav className={styles.nav}>
          <a href="#features" className={styles.navLink}>Features</a>
          <a href="#pricing" className={styles.navLink}>Pricing</a>
          <a href="#connect" className={styles.navLink}>Connect</a>
        </nav>

        <div className={styles.social}>
          <a href="https://www.facebook.com/AiShopClone?rdid=AsiDn4jAlkXczN1h&share_url=https%253A%252F%252Fwww.facebook.com%252Fshare%252F174wuyBoSF%252F#" target="_blank" className={styles.socialLink}>
            <span className={styles.facebookIcon}><FaFacebookF /></span>
          </a>
          <a href="https://www.instagram.com/aishopclone/?igsh=aXl5anp1b3R2aWlm#" target="_blank" className={styles.socialLink}>
            <span className={styles.instagramIcon}><FaInstagram /></span>
          </a>
          <a href="http://tiktok.com/@aishopclone?_t=ZS-8z5vuOnSphX&_r=1" target="_blank" className={styles.socialLink}>
            <span className={styles.tiktokIcon}><FaTiktok /></span>
          </a>
        </div>

        <div className={styles.right}>
          <Link to="/signup" className={styles.signInLink}>Sign Up</Link>
          <Link to="/signin" className={styles.getStartedBtn}>Get Started</Link>
        </div>
      </header>
    </div>
  );
};

export default Header;


