import { FaClipboardList, FaUserCheck, FaFileLines, FaHandshake } from 'react-icons/fa6';
import './HowItWorks.css';

const steps = [
  {
    id: 1,
    icon: <FaClipboardList />,
    title: 'Submit Your Project Details',
    description: 'Fill out our simple form with your renovation needs, budget, and preferences. Tell us about your vision.'
  },
  {
    id: 2,
    icon: <FaUserCheck />,
    title: 'We Match You with Experts',
    description: 'Our algorithm connects you with verified, top-rated renovation professionals in your area.'
  },
  {
    id: 3,
    icon: <FaFileLines />,
    title: 'Compare Quotes and Profiles',
    description: 'Review detailed profiles, portfolios, and competitive quotes from multiple expert contractors.'
  },
  {
    id: 4,
    icon: <FaHandshake />,
    title: 'Choose Your Perfect Match',
    description: 'Select the expert that best fits your needs and start your renovation journey with confidence.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works section">
      <div className="container">
        <div className="how-it-works-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Getting started is simple. Follow these four easy steps to find your perfect renovation expert.
          </p>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={step.id} className="step-item">
              <div className="step-number">{step.id}</div>
              <div className="step-content">
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
