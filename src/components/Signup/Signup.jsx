import React, { useState } from "react";
import styles from "./Signup.module.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    country: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (let key in formData) {
      if (!formData[key]) {
        alert(`Please fill in your ${key}`);
        return;
      }
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const generateRandomCustomerId = () => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let id = "#";
        for (let i = 0; i < 10; i++) {
          id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
      };
      const customerId = generateRandomCustomerId();
      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, UID: customerId }),
      });

      const userPayload = {
        name: formData.fullName,
        country: formData.country,
        phone: formData.phone,
        email: formData.email,
        password: formData.password,
        uid: customerId,
      };

      const code = localStorage.getItem("referralCode");
      if (code) {
        userPayload.referral_code = code;
      }

      const userRes = await fetch("http://localhost:8000/api/sign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json", // prevents redirect to /login
        },
        body: JSON.stringify(userPayload),
      });

      const userData = await userRes.json();

      if (userData.success) {
        localStorage.setItem("uid", customerId);
        navigate("/");
      } else {
        alert(userData.message || "Signup failed.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Welcome back!</h1>

        {/* Full Name */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Country */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter your country"
            required
          />
        </div>

        {/* Phone */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter your phone number"
            required
          />
        </div>

        {/* Email */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Confirm Password */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={styles.input}
            placeholder="Confirm your password"
            required
          />
        </div>

        <button type="submit" className={styles.signInBtn}>
          Sign Up <span className={styles.arrow}>→</span>
        </button>
      </form>
    </div>
  );
};

export default Signup;
