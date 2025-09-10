"use client";

import { useState } from "react";
import styles from "./connect.module.css";

export default function Connect() {
  const [form, setForm] = useState({ firstName: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="heading">Connect & Stay Updated</h2>
        <p className="subheading">
          Join our growing community and never miss important updates about AiShopClone
        </p>

        <div className={styles.gridWrapper}>
          {/* Left Card */}
          <div className="card">
            <h3 className={styles.cardHeading}>Follow Our Journey</h3>
            <p className={styles.cardSub}>
              Connect with us on social media for behind-the-scenes content,
              success stories, and community support.
            </p>

            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialBtn}>📘 AiShopClone - AI-Powered E-commerce Platform</a>
              <a href="#" className={styles.socialBtn}>📸 AiShopClone - Transform Ideas to Stores</a>
              <a href="#" className={styles.socialBtn}>🎵 AiShopClone - AI E-commerce Platform</a>
            </div>

            <div className={styles.stats}>
              <div>
                <strong>10K+</strong>
                <p>Community</p>
              </div>
              <div>
                <strong>Daily</strong>
                <p>Updates</p>
              </div>
              <div>
                <strong>24/7</strong>
                <p>Support</p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="card">
            <h3 className={styles.cardHeading}>Stay Updated</h3>
            <p className={styles.cardSub}>
              Get the latest updates, exclusive offers, and AI-powered insights delivered to your inbox.
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={form.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={form.email}
                onChange={handleChange}
                required
              />
              <button type="submit" className="cta ctaPrimary">
                Subscribe to Newsletter
              </button>
            </form>
            <p className={styles.privacy}>
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
