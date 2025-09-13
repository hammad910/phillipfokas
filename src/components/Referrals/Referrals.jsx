import React, { useEffect, useState } from "react";
import styles from "./Referrals.module.css";

const Referrals = () => {
  const [hasUid, setHasUid] = useState(false);
  const [email, setEmail] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);

  const shareUrl = "https://phillipfokas-backend.onrender.com";
  const shareText =
    "Transform your ideas into profitable online stores with AI! Get 50% OFF early adopter pricing - limited time! ";
  const uid = localStorage.getItem("uid");

  useEffect(() => {
    const uid = localStorage.getItem("uid");

    if (uid) {
      fetch("https://phillipfokas.we-publish.com/api/referral-track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data && data.referrals) {
            // Map backend referrals into leaderboard format
            const rows = data.referrals.map((ref) => ({
              user: ref.uid,
              tentative: 1, // ✅ your rule: 1 tentative point
              confirmed: 0, // default 0 unless backend confirms
            }));

            setLeaderboard(rows);
          }
        })
        .catch((err) => console.error("Error fetching referral track:", err));
    }
  }, []);
  // Social share handlers
  const shareOnFacebook = () =>
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank",
      "noopener,noreferrer"
    );

  const shareOnTwitter = () =>
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(shareText)}`,
      "_blank",
      "noopener,noreferrer"
    );

  const shareOnLinkedIn = () =>
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank",
      "noopener,noreferrer"
    );

  const shareOnWhatsApp = () =>
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(
        shareText + " " + shareUrl
      )}`,
      "_blank",
      "noopener,noreferrer"
    );

  // ✅ Generate Referral Code
  const generateCode = async () => {
    if (!email || !email.includes("@")) return;

    const baseUrl = "https://phillipfokas-frontend.vercel.app/";
    const firstPart = email.split("@")[0];
    const randomNum = Math.floor(100 + Math.random() * 900);
    const code = `${baseUrl}?ref=${firstPart}${randomNum}`;

    setReferralCode(code);

    const url = new URL(code);
    const refValue = url.searchParams.get("ref");

    try {
      const uid = localStorage.getItem("uid");
      const res = await fetch(
        "https://phillipfokas.we-publish.com/api/referral-store",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ referral_code: refValue, uid }),
        }
      );

      if (!res.ok) throw new Error("Failed to store referral code");
    } catch (err) {
      console.error(err);
      alert("Error saving referral code");
    }
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

      {/* Referral Earnings Info */}
      <p className={styles.sharesubtext}>
        Share <strong>AiShopClone</strong> and earn{" "}
        <span className={styles.highlight}>$0.50 per share</span> +{" "}
        <span className={styles.highlight}>$10 per referral signup!</span>
      </p>

      {/* Share Buttons */}
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

      {/* Referral Code Generator */}
      <p className={styles.referraltext}>
        Get Your Personal Referral Code &amp; Start Earning!
      </p>
      <div className={styles.referralinputwrap}>
        <input
          type="text"
          placeholder={
            hasUid
              ? "Enter your email to get referral code"
              : "You need to signup first for generating code"
          }
          className={styles.referralinput}
          value={referralCode || email}
          readOnly={!!referralCode}
          onChange={(e) => !referralCode && setEmail(e.target.value)}
        />

        {!referralCode && (
          <button
            disabled={!uid}
            title={
              !uid ? "You need to signup first for generating code" : ""
            }
            onClick={generateCode}
            className={styles.btncode}
          >
            Get Code
          </button>
        )}
      </div>

      {/* Leaderboard Section */}
      <h3 className={styles.subheading}>🏅 Referral Leaderboard</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>UID</th>
            <th>Points (Tentative)</th>
            <th>Confirmed</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.length > 0 ? (
            leaderboard.map((row, idx) => (
              <tr key={idx}>
                <td>{row.user}</td>
                <td>{row.tentative}</td>
                <td>0</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No referrals yet</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Rewards Info */}
      <div className={styles.rewardsinfo}>
        <h3 className={styles.subheading}>🎁 Rewards Rules</h3>
        <ul style={{ fontSize: "17px" }}>
          <li>
            Referral pays <strong>$79 deposit</strong> →{" "}
            <em>1 tentative point</em>
          </li>
          <li>
            Tentative points confirm after <strong>21-day wait</strong>
          </li>
          <li>Full confirmation post-countdown (Sep 28, 2025 onwards)</li>
          <li>Redemption via email instructions</li>
          <li>
            Validation required: Like/Comment/Share on{" "}
            <strong>Instagram, Facebook, Twitter/X, TikTok</strong> +{" "}
            <strong>KYC ID</strong>
          </li>
        </ul>
      </div>

      {/* Rewards Tiers Table */}
      <h3 className={styles.subheading}>🏆 Rewards Tiers</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Referrals</th>
            <th>Reward</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>5</td>
            <td>$200</td>
          </tr>
          <tr>
            <td>10</td>
            <td>$500</td>
          </tr>
          <tr>
            <td>20</td>
            <td>Professional Package</td>
          </tr>
          <tr>
            <td>50</td>
            <td>$4,000 Cash</td>
          </tr>
          <tr>
            <td>75</td>
            <td>$6,000 Cash + Professional</td>
          </tr>
          <tr>
            <td>100+</td>
            <td>$10,000 Cash + Elite Subscription</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Referrals;
