import { Link, useNavigate } from 'react-router-dom';
import './Services.css';

const services = [
  {
    id: 1,
    number: '01',
    title: 'Kitchen renovation',
    description: 'Build the kitchen where your family gathers, memories happen, and every meal becomes a celebration.',
    image:
      '/kitchen.png'
  },
  {
    id: 2,
    number: '02',
    title: 'Bathroom renovation',
    description:
      'Wake up to a bathroom so beautiful that makes your morning routine feel like relaxing & pure luxury.',
    image:
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1200&q=80'
  },
  {
    id: 3,
    number: '03',
    title: 'Home improvement',
    description:
      "From living rooms to home offices, we transform any space into something you'll love spending time in.",
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80'
  }
];

const Services = () => {
  const navigate = useNavigate();

  const handleArrowClick = (e) => {
    e.preventDefault();
    navigate('/services');
  };

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">Popular services</h2>
        </div>
        <div className="services-list">
          {services.map((service) => (
            <div key={service.id} className="service-item">
              <div className="service-image" aria-hidden="true">
                <img src={service.image} alt="" loading="lazy" />
              </div>
              <div className="service-number">{service.number}</div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
              <Link to="/services" className="service-action" onClick={handleArrowClick} aria-label="View service details">
                <span className="service-arrow">→</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="services-footer">
          <Link to="/services" className="btn-discover">
            Discover more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
