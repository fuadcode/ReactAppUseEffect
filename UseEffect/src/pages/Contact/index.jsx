import React, { useState } from 'react';
import './style.css';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Send Message..');
  };

  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Contact us" />
      </Helmet>
      <div className="contact-container">
        <h1>Contact us</h1>
        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p><strong>Phone:</strong> Hidden :)</p>
            <p><strong>Email:</strong> fuadgi@code.edu.az</p>
            <p><strong>Address:</strong> Baku, Azerbaijan</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
