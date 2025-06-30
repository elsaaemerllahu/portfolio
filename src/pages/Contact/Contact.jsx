import { useState } from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import "../Contact/Contact.css";
import "../../components/Profile/Profile.css";
import "../../styles/main.css";
import { motion } from "framer-motion";
  import emailjs from 'emailjs-com';

const Contact = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);


const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_cq8f5wg',
    'template_byllzuh',
    e.target,
    'zj1mfvpsVvRJHt3P_'
  )
  .then((result) => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 2500);
  })
  .catch((error) => {
    console.error('Email send error:', error);
  });
};


  return (
    <div className="project-wrapper">
      <Header />
      <div className="contact-page">
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-description">
              I’d love to hear from you! Whether you have a question, a project
              idea, or just want to say hi, feel free to reach out.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input name="name" type="text" placeholder="Your Name" required />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input name="email" type="email" placeholder="you@example.com" required />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea name="message" placeholder="Write your message here..." rows="5" required />
              </div>

              <Button type="submit" className="submit-button">Send Message</Button>
            </form>

            {showSuccessMessage && (
              <div className="email-toast">Message sent successfully!</div>
            )}
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
