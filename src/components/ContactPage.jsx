import { useEffect } from 'react';
import ContactForm from './ContactForm';
import './ContactPage.css';

const ContactPage = () => {
  useEffect(() => {
    // Ensure we land at the top of the Contact page on navigation
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <main>
      <ContactForm />
    </main>
  );
};

export default ContactPage;
