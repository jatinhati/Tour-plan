import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="contact-item">
          <h3>Customer Support</h3>
          <p>Email: support@planwithlove.com</p>
          <p>Phone: +91 9876543210</p>
        </div>
        <div className="contact-item">
          <h3>Booking Inquiries</h3>
          <p>Email: bookings@planwithlove.com</p>
          <p>Phone: +91 9876543211</p>
        </div>
        <div className="contact-item">
          <h3>Head Office</h3>
          <p>123 Tourism Avenue, Travel City</p>
          <p>Open Monday-Friday, 9:00 AM - 6:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;