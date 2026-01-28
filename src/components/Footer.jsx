import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/contact">Request a Quote</Link>
              </li>
            </ul>
          </div>

          

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+61 1717 2625</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>hey@allreno.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Renovation Experts Guide helps renovation businesses attract more clients with a sleek, modern website built in Framer. Designed for contractors, interior designers, and home improvement pros.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
