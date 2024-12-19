import React from "react";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.subtitle}>
        Have a question, feedback, or want to collaborate? Reach out to us!
      </p>

      <div className={styles.formContainer}>
        <form className={styles.form}>
          {/* Name Field */}
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className={styles.input}
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Field */}
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className={styles.input}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message Field */}
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Your Message
            </label>
            <textarea
              id="message"
              className={styles.textarea}
              placeholder="Type your message here"
              rows="5"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className={styles.contactInfo}>
        <h2>Other Ways to Reach Us</h2>
        <p>
          <strong>Email:</strong> support@environmentapp.com
        </p>
        <p>
          <strong>Phone:</strong> +91 98765 43210
        </p>
        <p>
          <strong>Address:</strong> 123 Green Lane, EcoCity, India
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
