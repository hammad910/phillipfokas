import React, { useState } from "react";
import styles from "./Header.module.css";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF, FaTiktok, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [uid, setUid] = useState("");
  const [userData, setUserData] = useState(null);
  const [referralData, setreferralData] = useState(null);

  const handleSearchClick = () => {
    setIsSearchModalOpen(true);
  };

  const handleCloseSearchModal = () => {
    setIsSearchModalOpen(false);
    setUid("");
  };

  const handleCloseResultModal = () => {
    setIsResultModalOpen(false);
    setUserData(null);
    setreferralData(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!uid) {
      alert("Please enter a UID");
      return;
    }

    try {
      const res = await fetch("https://phillipfokas.we-publish.com/payment-track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid }), // send UID in request body
      });

      if (!res.ok) {
        throw new Error("Failed to fetch payment data");
      }

      const data = await res.json();

      setUserData(data);

      setIsSearchModalOpen(false);
      setIsResultModalOpen(true);
      setUid(""); // reset UID
    } catch (error) {
      console.error(error);
      alert("Something went wrong while fetching payment data.");
    }
    try {
      const res = await fetch("https://phillipfokas.we-publish.com/referral-track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid }), // send UID in request body
      });

      if (!res.ok) {
        throw new Error("Failed to fetch referral data");
      }

      const refData = await res.json();

      setreferralData(refData);

      setIsSearchModalOpen(false);
      setIsResultModalOpen(true);
      setUid("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong while fetching payment data.");
    }
  };
  const id = localStorage.getItem("uid");

  return (
    <div className={styles.headerRoot}>
      {/* Top Progress Bar */}
      <div className={styles.topBar}>
        <div className={styles.progressSection}>
          <span className={styles.progressText}>0/800 GOAL PROGRESS</span>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: "0%" }}></div>
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
          <span className={styles.bannerText}>
            ✨🚀 GOING LIVE ON 28th SEPTEMBER ✨
          </span>
          <div className={styles.bannerButtons}>
            <div className={styles.timeButton}>
              <span className={styles.timeIcon}>🕐</span>
              <span className={styles.fireIcon}>🔥</span>
              <span>ONLY FEW HOURS LEFT</span>
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
          <a href="#features" className={styles.navLink}>
            Features
          </a>
          <a href="#pricing" className={styles.navLink}>
            Pricing
          </a>
          <a href="#connect" className={styles.navLink}>
            Connect
          </a>
        </nav>

        {/* Social + Search */}
        <div className={styles.social}>
          <a
            href="https://www.facebook.com/AiShopClone..."
            target="_blank"
            className={styles.socialLink}
          >
            <span className={styles.facebookIcon}>
              <FaFacebookF />
            </span>
          </a>
          <a
            href="https://www.instagram.com/aishopclone..."
            target="_blank"
            className={styles.socialLink}
          >
            <span className={styles.instagramIcon}>
              <FaInstagram />
            </span>
          </a>
          <a
            href="http://tiktok.com/@aishopclone..."
            target="_blank"
            className={styles.socialLink}
          >
            <span className={styles.tiktokIcon}>
              <FaTiktok />
            </span>
          </a>
          {/* Search Icon */}
          <button onClick={handleSearchClick} className={styles.searchBtn}>
            <FaSearch />{" "}
            <span className={styles.searchText}>Track Details</span>
          </button>
        </div>
        {!id? (
          <div className={styles.right}>
            <Link to="/signup" className={styles.signInLink}>
              Sign Up
            </Link>
            <Link to="/signin" className={styles.getStartedBtn}>
              Get Started
            </Link>
          </div>
        ) : (
          <div className={styles.successBox}>
            <p>
              Please <strong>save this key {id}</strong>. Share it with support for
              verification or discounts.
            </p>
          </div>
        )}
      </header>

      {/* Modal 1: Enter UID */}
      {isSearchModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Enter Customer UID</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={uid}
                onChange={(e) => setUid(e.target.value)}
                placeholder="Enter UID"
                className={styles.input}
              />
              <div className={styles.modalActions}>
                <button type="submit" className={styles.submitBtn}>
                  Search
                </button>
                <button
                  type="button"
                  onClick={handleCloseSearchModal}
                  className={styles.cancelBtn}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal 2: Results */}
      {isResultModalOpen && userData && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Payment Tracking</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Package</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {userData?.package_name ?? "User Not Purchased Any Package"}
                  </td>
                  <td>{userData?.pay_today ?? "$0"}</td>
                </tr>
              </tbody>
            </table>

            <h2 style={{ marginTop: "20px" }}>Referral Tracking</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Total Referred</th>
                  <th>Joined via Link</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{referralData?.total_referred}</td>
                  <td>{referralData?.total_joined_referred}</td>
                </tr>
              </tbody>
            </table>

            <h3 style={{ marginTop: "15px" }}>Referral UIDs</h3>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>UID</th>
                </tr>
              </thead>
              <tbody>
                {referralData?.referrals?.length > 0 ? (
                  referralData.referrals.map((user, index) => (
                    <tr key={user.id}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.country}</td>
                      <td>{user.uid}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" style={{ textAlign: "center" }}>
                      No referrals yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            <div className={styles.modalActions}>
              <button
                type="button"
                onClick={handleCloseResultModal}
                className={styles.cancelBtn}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
