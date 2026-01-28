import { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budgetRange: '',
    description: '',
    contactMethod: 'email'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const projectTypes = [
    'Kitchen Renovation',
    'Bathroom Remodeling',
    'Whole Home Renovation',
    'Basement Finishing',
    'Exterior Upgrades',
    'Custom Project'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    'Over $250,000'
  ];

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    if (!formData.budgetRange) {
      newErrors.budgetRange = 'Please select a budget range';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Project description is required';
    } else if (formData.description.trim().length < 20) {
      newErrors.description = 'Please provide more details (at least 20 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Prepare data for Google Sheets (ready for Apps Script integration)
    const submissionData = {
      ...formData,
      timestamp: new Date().toISOString()
    };

    // TODO: Replace this with actual Google Apps Script endpoint
    // For now, simulate API call
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // This is where you'll connect to Google Apps Script later
      // Example: await fetch('YOUR_APPS_SCRIPT_URL', { method: 'POST', body: JSON.stringify(submissionData) });
      
      console.log('Form data ready for submission:', submissionData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budgetRange: '',
        description: '',
        contactMethod: 'email'
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Don't wait another day to create the home you've always wanted</h2>
          <p className="section-subtitle">
            From outdated kitchens to tired bathrooms, we create spaces that make you fall in love with your home again.
          </p>
        </div>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="John Doe"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="john@example.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="projectType">Project Type *</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={errors.projectType ? 'error' : ''}
                >
                  <option value="">Select a project type</option>
                  {projectTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.projectType && <span className="error-message">{errors.projectType}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="budgetRange">Budget Range *</label>
                <select
                  id="budgetRange"
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className={errors.budgetRange ? 'error' : ''}
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
                {errors.budgetRange && <span className="error-message">{errors.budgetRange}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Project Description *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className={errors.description ? 'error' : ''}
                placeholder="Tell us about your renovation project, your vision, timeline, and any specific requirements..."
                rows="5"
              ></textarea>
              {errors.description && <span className="error-message">{errors.description}</span>}
            </div>

            <div className="form-group">
              <label>Preferred Contact Method *</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    checked={formData.contactMethod === 'email'}
                    onChange={handleChange}
                  />
                  <span>Email</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="phone"
                    checked={formData.contactMethod === 'phone'}
                    onChange={handleChange}
                  />
                  <span>Phone</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="both"
                    checked={formData.contactMethod === 'both'}
                    onChange={handleChange}
                  />
                  <span>Both</span>
                </label>
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="form-message success">
                Thank you! Your submission has been received. We'll be in touch soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="form-message error">
                Something went wrong. Please try again or contact us directly.
              </div>
            )}

            <button type="submit" className="btn btn-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Request a quote'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
