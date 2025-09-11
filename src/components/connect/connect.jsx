import React, { useState } from 'react';
import styles from './connect.module.css';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
const Connect = () => {
    const [email, setEmail] = useState("");
    // const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
          e.preventDefault();
        const res = await fetch("http://localhost:5000/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });

        const data = await res.json();
        // setStatus(data.success ? "✅ Subscribed! Email sent." : `❌ ${data.error}`);
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Connect & Stay Updated</h2>
                    <p className={styles.subtitle}>Join our growing community and never miss important updates about AiShopClone</p>
                </div>

                <div className={styles.content}>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.cardIcon}>🔗</div>
                            <h3 className={styles.cardTitle}>Follow Our Journey</h3>
                        </div>
                        <p className={styles.cardDesc}>Connect with us on social media for behind-the-scenes content, success stories, and community support.</p>

                        <div className={styles.connectSection}>
                            <h4 className={styles.connectTitle}>Connect With Us</h4>
                            <p className={styles.connectSubtitle}>Follow for updates, tips, and exclusive content</p>
                        </div>

                        <div className={styles.socialLinks}>
                            <a href="https://www.facebook.com/AiShopClone?rdid=AsiDn4jAlkXczN1h&share_url=https%253A%252F%252Fwww.facebook.com%252Fshare%252F174wuyBoSF%252F#" className={styles.socialLink}>
                                <div className={styles.socialIcon}><FaFacebookF /></div>
                                <div className={styles.socialText}>
                                    <div className={styles.socialName}>AiShopClone - AI-Powered E-commerce Platform</div>
                                    <div className={styles.socialAction}>Follow On Facebook</div>
                                </div>
                            </a>
                            <a href="https://www.instagram.com/aishopclone/?igsh=aXl5anp1b3R2aWlm#" className={styles.socialLink}>
                                <div className={styles.socialIcon}><FaInstagram /></div>
                                <div className={styles.socialText}>
                                    <div className={styles.socialName}>AiShopClone - Transform Ideas to Stores</div>
                                    <div className={styles.socialAction}>Follow On Instagram</div>
                                </div>
                            </a>
                            <a href="http://tiktok.com/@aishopclone?_t=ZS-8z5vuOnSphX&_r=1" className={styles.socialLink}>
                                <div className={styles.socialIcon}><FaTiktok /></div>
                                <div className={styles.socialText}>
                                    <div className={styles.socialName}>AiShopClone - AI E-commerce Platform</div>
                                    <div className={styles.socialAction}>Follow On Tiktok</div>
                                </div>
                            </a>
                        </div>

                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <div className={styles.statIcon}>👥</div>
                                <div className={styles.statText}>
                                    <div className={styles.statNumber}>10K+</div>
                                    <div className={styles.statLabel}>Community</div>
                                </div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.statIcon}>🔔</div>
                                <div className={styles.statText}>
                                    <div className={styles.statNumber}>Daily</div>
                                    <div className={styles.statLabel}>Updates</div>
                                </div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.statIcon}>💬</div>
                                <div className={styles.statText}>
                                    <div className={styles.statNumber}>24/7</div>
                                    <div className={styles.statLabel}>Support</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.cardIcon}>✉️</div>
                            <h3 className={styles.cardTitle}>Stay Updated</h3>
                        </div>
                        <p className={styles.cardDesc}>Get the latest updates, exclusive offers, and AI-powered insights delivered to your inbox.</p>

                        <form className={styles.newsletterForm}>
                            <div className={styles.inputGroup}>
                                <input type="text" placeholder="First name" className={styles.input} />
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className={styles.input} />
                            </div>
                            <button type="submit" className={styles.subscribeBtn} onClick={handleSubmit}>
                                <span className={styles.btnIcon}>✉️</span>
                                Subscribe to Newsletter
                            </button>
                            <p className={styles.privacy}>We respect your privacy. Unsubscribe at any time.</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Connect;
