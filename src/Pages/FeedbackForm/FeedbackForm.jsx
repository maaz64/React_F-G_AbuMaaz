import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = ({ onSubmit }) => { 
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    serviceQuality: '',
    beverageQuality: '',
    cleanliness: '',
    overallExperience: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.customerName) newErrors.customerName = 'Customer Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone is invalid';
    if (!formData.serviceQuality) newErrors.serviceQuality = 'Please rate the service quality';
    if (!formData.beverageQuality) newErrors.beverageQuality = 'Please rate the beverage quality';
    if (!formData.cleanliness) newErrors.cleanliness = 'Please rate the cleanliness';
    if (!formData.overallExperience) newErrors.overallExperience = 'Please rate your overall experience';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <h2>Aromatic Bar</h2>
      <p>We are committed to providing you with the best dining experience possible, so we welcome your comments. Please fill out this questionnaire. Thank you.</p>
      <div className="form-row">
        <div className="form-group">
          <label>Customer Name:</label>
          <input type="text" name="customerName" value={formData.customerName} onChange={handleChange} />
          {errors.customerName && <span>{errors.customerName}</span>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Phone:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <span>{errors.phone}</span>}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Please rate the quality of the service you received from your host:</label>
          <div className="rating-options">
            <label><input type="radio" name="serviceQuality" value="Excellent" onChange={handleChange} /> Excellent</label>
            <label><input type="radio" name="serviceQuality" value="Good" onChange={handleChange} /> Good</label>
            <label><input type="radio" name="serviceQuality" value="Fair" onChange={handleChange} /> Fair</label>
            <label><input type="radio" name="serviceQuality" value="Bad" onChange={handleChange} /> Bad</label>
          </div>
          {errors.serviceQuality && <span>{errors.serviceQuality}</span>}
        </div>
        <div className="form-group">
          <label>Please rate the quality of your beverage:</label>
          <div className="rating-options">
            <label><input type="radio" name="beverageQuality" value="Excellent" onChange={handleChange} /> Excellent</label>
            <label><input type="radio" name="beverageQuality" value="Good" onChange={handleChange} /> Good</label>
            <label><input type="radio" name="beverageQuality" value="Fair" onChange={handleChange} /> Fair</label>
            <label><input type="radio" name="beverageQuality" value="Bad" onChange={handleChange} /> Bad</label>
          </div>
          {errors.beverageQuality && <span>{errors.beverageQuality}</span>}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Was our restaurant clean?</label>
          <div className="rating-options">
            <label><input type="radio" name="cleanliness" value="Excellent" onChange={handleChange} /> Excellent</label>
            <label><input type="radio" name="cleanliness" value="Good" onChange={handleChange} /> Good</label>
            <label><input type="radio" name="cleanliness" value="Fair" onChange={handleChange} /> Fair</label>
            <label><input type="radio" name="cleanliness" value="Bad" onChange={handleChange} /> Bad</label>
          </div>
          {errors.cleanliness && <span>{errors.cleanliness}</span>}
        </div>
        <div className="form-group">
          <label>Please rate your overall dining experience:</label>
          <div className="rating-options">
            <label><input type="radio" name="overallExperience" value="Excellent" onChange={handleChange} /> Excellent</label>
            <label><input type="radio" name="overallExperience" value="Good" onChange={handleChange} /> Good</label>
            <label><input type="radio" name="overallExperience" value="Fair" onChange={handleChange} /> Fair</label>
            <label><input type="radio" name="overallExperience" value="Bad" onChange={handleChange} /> Bad</label>
          </div>
          {errors.overallExperience && <span>{errors.overallExperience}</span>}
        </div>
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default FeedbackForm;
