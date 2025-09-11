import React from "react";
import styles from "./Pricing.module.css";
import { handleCheckout } from "../../utils/checkout";

const plans = [
  {
    name: "Business Starter",
    save: "Save $99.00 - 20% OFF",
    crossed: "$495.00",
    today: "Pay Today: $79.00",
    due: "Balance After Deposit: $317.00",
    total: "Total: $396.00",
    features: [
      "1 Store Setup",
      "11 AI Store Templates",
      "55 AI Requests (GPT-5 Nano)",
      "Essential Setup + Hosting",
      "Mobile Responsive Design",
      "Basic Analytics Dashboard",
      "Email Support",
      "Standard Payment Gateway",
      "SSL Certificate",
    ],
    cta: "Reserve Now - $79",
  },
  {
    name: "Professional",
    featured: true,
    save: "Save $248.75 - 25% OFF",
    crossed: "$995.00",
    today: "Pay Today: $79.00",
    due: "Balance After Deposit: $567.75",
    total: "Total: $646.75",
    features: [
      "3 Stores Setup",
      "25 AI Store Templates",
      "330 AI Requests",
      "Professional Setup + Hosting",
      "Viral Content Generator",
      "Advanced Analytics & Reports",
      "Priority Support (24/7)",
      "Advanced AI Recommendations",
      "Competitor Analysis Tools",
    ],
    cta: "Reserve Now - $79",
  },
  {
    name: "Elite Entrepreneur",
    save: "Save $448.50 - 30% OFF",
    crossed: "$1,495.00",
    today: "Pay Today: $79.00",
    due: "Balance After Deposit: $967.50",
    total: "Total: $1,046.50",
    features: [
      "5 Stores Setup",
      "50 AI Store Templates",
      "550 AI Requests",
      "Complete E-commerce Solution + Hosting",
      "Full Automated Viral Campaigns",
      "Real-time Market Intelligence",
      "Social Media Tools",
      "All Premium Features",
    ],
    cta: "Reserve Now - $79",
  },
];

const Pricing = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading} style={{ color: "#fff" }}>
          Early Adopter Pricing Plans
        </h2>
        <p className={styles.subheading}>
          Pay only $65 today, complete payment on August 31st with massive
          discounts + holding deposit credit.
        </p>
        <div className={styles.grid}>
          {plans.map((p) => (
            <div
              key={p.name}
              className={`${styles.card} ${p.featured ? styles.featured : ""}`}
            >
              <div className={styles.planName} style={{ fontSize: "30px" }}>
                {p.name}
              </div>
              <div className={styles.save}>{p.save}</div>
              <div className={styles.crossed}>{p.crossed}</div>
              <div className={styles.today}>{p.today}</div>
              <div className={styles.due}>{p.due}</div>
              <div className={styles.total}>{p.total}</div>
              <ul className={styles.features}>
                {p.features.map((f) => (
                  <li key={f}>
                    <span className={styles.tick}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                onClick={handleCheckout}
                href="#reserve"
                className={`${styles.cta} ${
                  p.featured ? styles.ctaPrimary : ""
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
