import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-page wrapper">
      <h1 className="heading">Contact Us</h1>

      <div className="contact-grid">
        <div className="contact-form-box">
          <h2>Send a Message</h2>
          {submitted && (
            <div className="success-msg">Message sent! We will get back to you soon.</div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows={5}
                required
              />
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        <div className="contact-info-box">
          <h2>Get in Touch</h2>
          <div className="info-item">
            <strong>Email:</strong>
            <p>contact@edupath.ca</p>
          </div>
          <div className="info-item">
            <strong>Phone:</strong>
            <p>+1 (519) 971-3800</p>
          </div>
          <div className="info-item">
            <strong>Address:</strong>
            <p>St. Clair College, 2000 Talbot Rd, Windsor, ON N9A 6S4</p>
          </div>
          <div className="info-item">
            <strong>Hours:</strong>
            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
