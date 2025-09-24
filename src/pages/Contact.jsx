// /src/pages/Contact.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from 'emailjs-com';
import { EMAILJS_CONFIG } from '../config/emailjs';
import '../styles/Contact.css';

// Form validation schema
const schema = yup.object().shape({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().required('Email is required').email('Please enter a valid email'),
  phone: yup.string().matches(/^[0-9\s+-]*$/, 'Please enter a valid phone number'),
  subject: yup.string().required('Please select a subject'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters')
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message
      };

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.userId
      );

      // Custom success message based on subject
      const successMessage = data.subject === 'website' 
        ? 'Thank you for your website proposal! We have received it and will review it shortly. We will notify you soon about the next steps.'
        : 'Thank you for your message! We will get back to you soon.';

      setSubmitStatus({
        type: 'success',
        message: successMessage
      });
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      // More specific error message
      setSubmitStatus({
        type: 'error',
        message: 'We apologize, but we are currently experiencing technical difficulties. Please try again in a few minutes or contact us directly at support@fitnessinfluencer.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h1>Get In Touch</h1>
          <p className="contact-description">
            Have questions about your fitness journey? Want to learn more about our programs? 
            We're here to help you achieve your fitness goals.
          </p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <div className="method-icon">📍</div>
              <div className="method-details">
                <h3>Location</h3>
                <p>ADYPU NST 🤪</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="method-icon">📞</div>
              <div className="method-details">
                <h3>Phone</h3>
                <p>9703002022</p>
                <p>Mon - Fri: 8:00 AM - 8:00 PM</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="method-icon">📧</div>
              <div className="method-details">
                <h3>Email</h3>
                <p>info@fitnessinfluencer.com</p>
                <p>support@fitnessinfluencer.com</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.instagram.com/kantrolvamshikrishna/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">📱</a>


              <a href="https://x.com/Kvamshi90749974" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">🐦</a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <h2>Send Us a Message</h2>
            
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                {...register('name')}
                placeholder="Your full name"
                className={errors.name ? 'error' : ''}
                aria-invalid={errors.name ? 'true' : 'false'}
              />
              {errors.name && <span className="error-message" role="alert">{errors.name.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                {...register('email')}
                placeholder="your.email@example.com"
                className={errors.email ? 'error' : ''}
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.email && <span className="error-message" role="alert">{errors.email.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone (optional)</label>
              <input
                type="tel"
                id="phone"
                {...register('phone')}
                placeholder="(555) 123-4567"
                className={errors.phone ? 'error' : ''}
                aria-invalid={errors.phone ? 'true' : 'false'}
              />
              {errors.phone && <span className="error-message" role="alert">{errors.phone.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select
                id="subject"
                {...register('subject')}
                className={errors.subject ? 'error' : ''}
                aria-invalid={errors.subject ? 'true' : 'false'}
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="membership">Membership</option>
                <option value="training">Personal Training</option>
                <option value="nutrition">Nutrition Consultation</option>
                <option value="website">Website Proposal</option>
                <option value="other">Other</option>
              </select>
              {errors.subject && <span className="error-message" role="alert">{errors.subject.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                {...register('message')}
                placeholder="How can we help you?"
                rows="4"
                className={errors.message ? 'error' : ''}
                aria-invalid={errors.message ? 'true' : 'false'}
              ></textarea>
              {errors.message && <span className="error-message" role="alert">{errors.message.message}</span>}
            </div>

            <button 
              type="submit" 
              className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              <span className="screen-reader-only">{isSubmitting ? 'Sending message...' : 'Send message'}</span>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus.message && (
              <div 
                className={`status-message ${submitStatus.type}`}
                role="alert"
                aria-live="polite"
              >
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;