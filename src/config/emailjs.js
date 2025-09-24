import emailjs from 'emailjs-com';

// Initialize EmailJS with your User ID
// Replace 'YOUR_USER_ID' with your actual EmailJS User ID
emailjs.init('YOUR_USER_ID');

export const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID',    // Replace with your EmailJS service ID
  templateId: 'YOUR_TEMPLATE_ID',  // Replace with your EmailJS template ID
  userId: 'YOUR_USER_ID'          // Replace with your EmailJS user ID
}; 