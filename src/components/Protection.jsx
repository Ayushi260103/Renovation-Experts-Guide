import { FaHeadset, FaShield } from 'react-icons/fa6';
import './Protection.css';

const protections = [
  {
    id: 1,
    icon: <FaHeadset />,
    title: 'Friendly support always',
    description: 'Fast, friendly help whenever you have questions or need support.'
  },
  {
    id: 2,
    icon: <FaShield />,
    title: 'Full 24-month warranty',
    description: 'Your renovation stays protected so you can just love living in it.'
  }
];

const Protection = () => {
  return (
    <section id="protection" className="protection section">
      <div className="container">
        <div className="protection-header">
          <h2 className="section-title">Take advantage of our full warranty and relax during your renovation</h2>
          <p className="protection-subtitle">
            Every project we complete comes with solid warranty protection because we believe in delivering quality
          </p>
        </div>
        
        <div className="protection-grid">
          {protections.map((item) => (
            <div key={item.id} className="protection-card">
              <div className="protection-icon">{item.icon}</div>
              <h3 className="protection-title">{item.title}</h3>
              <p className="protection-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Protection;
