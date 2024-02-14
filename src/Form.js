import React, { useState } from 'react';

const FormValidationExample = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    checkbox: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // Form is valid, proceed with submission
      console.log('Form is valid:', formData);
    } else {
      // Form is not valid, display errors
      setErrors(errors);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email format';
    }

    if (!data.message.trim()) {
      errors.message = 'Message is required';
    }

    if (!data.checkbox) {
      errors.checkbox = 'Please accept terms';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </label>
      </div>
      <div>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span>{errors.message}</span>}
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
          />
          Accept Terms and Conditions
        </label>
        {errors.checkbox && <span>{errors.checkbox}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidationExample;
