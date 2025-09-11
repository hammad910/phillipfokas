import React, { useState } from "react";
import styles from "./Referrals.module.css";

const Referrals = () => {
  const shareUrl = "https://phillipfokas-frontend.vercel.app/";
  const shareText =
    "Transform your ideas into profitable online stores with AI! Get 50% OFF early adopter pricing - limited time! ";

  const [email, setEmail] = useState("");
  const [referralCode, setReferralCode] = useState("");

  // share handlers
  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(shareText)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const shareOnWhatsApp = () => {
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(
        shareText + " " + shareUrl
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // Generate referral code
  const generateCode = () => {
    if (!email || !email.includes("@")) return;

    const firstPart = email.split("@")[0]; // before @
    const randomNum = Math.floor(100 + Math.random() * 900); // random 3-digit
    const code = `${firstPart}${randomNum}`;

    setReferralCode(code);
  };

  return (
    <section className={styles.sharesection}>
      <h2 className={styles.shareheading}>
        <span role="img" aria-label="share">
          🔗
        </span>{" "}
        VIRAL SHARING REWARDS - EARN WHILE YOU SHARE!{" "}
        <span role="img" aria-label="trophy">
          🏆
        </span>
      </h2>
      <p className={styles.sharesubtext}>
        Share <strong>AiShopClone</strong> and earn{" "}
        <span className={styles.highlight}>$0.50 per share</span> +{" "}
        <span className={styles.highlight}>$10 per referral signup!</span>
      </p>

      <div className={styles.sharebuttons}>
        <button
          onClick={shareOnFacebook}
          className={`${styles.btn} ${styles.fb}`}
        >
          📺 Share on Facebook
        </button>
        <button
          onClick={shareOnTwitter}
          className={`${styles.btn} ${styles.tw}`}
        >
          🐦 Share on Twitter
        </button>
        <button
          onClick={shareOnLinkedIn}
          className={`${styles.btn} ${styles.li}`}
        >
          💼 Share on LinkedIn
        </button>
        <button
          onClick={shareOnWhatsApp}
          className={`${styles.btn} ${styles.wa}`}
        >
          📱 Share on WhatsApp
        </button>
      </div>

      <p className={styles.referraltext}>
        Get Your Personal Referral Code &amp; Start Earning!
      </p>

      <div className={styles.referralinputwrap}>
        {referralCode ? (
          <p className={styles.referraltext}>
            🎉 Your Referral Code: <strong>{referralCode}</strong>
          </p>
        ) : (
          <>
            <input
              type="email"
              placeholder="Enter your email to get referral code"
              className={styles.referralinput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={generateCode} className={styles.btncode}>
              Get Code
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default Referrals;
