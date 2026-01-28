import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/contact');
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-main-image">
          <div className="hero-main-image-overlay"></div>
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-gradient"></div>
      </div>

      <div className="hero-content">
        <div className="container">
          <div className="hero-content-wrapper">
            <div className="hero-copy">
              <p className="hero-tagline">Expert renovation specialists for you</p>
              <h1 className="hero-title">Beautiful renovations made simple</h1>
            </div>

            <div className="hero-actions">
              <button className="hero-cta-btn" onClick={scrollToContact}>
                Work with us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
