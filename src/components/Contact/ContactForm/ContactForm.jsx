import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Message sent successfully!');

    // Reset form after submit
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      file: null,
    });

    // Optional: reset file input if used
    const fileInput = document.getElementById("file");
    if (fileInput) fileInput.value = "";
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input 
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input 
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input 
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Phone"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Message"
        />
      </div>

      {/* Optional file input — remove if not needed */}
      {/* <div className="form-group">
        <label htmlFor="file">Attach File (Optional)</label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={handleChange}
        />
      </div> */}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
