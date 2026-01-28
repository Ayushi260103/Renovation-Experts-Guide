import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Work.css';
import ComparisonSlider from './ComparisonSlider';

const projects = [
  {
    id: 1,
    title: 'Carlton Heights home office transforms into creative workspace',
    description: 'Working from home needed to feel inspiring, so we designed a bright, functional office space that makes productivity feel effortless.',
    category: 'Home improvement',
    beforeImage: '/work/home_office_before.png',
    afterImage: '/work/home_office_after.png'
  },
  {
    id: 2,
    title: 'Modern kitchen renovation',
    description: 'A complete kitchen transformation with custom cabinetry and premium appliances.',
    category: 'Kitchen renovation',
    beforeImage: '/work/kitchen_before.png',
    afterImage: '/work/kitchen_after.png'
  },
  {
    id: 3,
    title: 'Luxury bathroom remodel',
    description: 'Spa-like bathroom renovation with modern fixtures and elegant finishes.',
    category: 'Bathroom renovation',
    beforeImage: '/work/bathroom_before.png',
    afterImage: '/work/bathroom_after.png'
  }
];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const categories = ['All', 'Kitchen renovation', 'Bathroom renovation', 'Home improvement'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="work" className="work section">
      <div className="container">
        <div className="work-header">
          <h2 className="section-title">Transforming boring spaces into beautiful room you'll love</h2>
          <button className="btn-explore" onClick={() => navigate('/work')}>Explore work</button>
        </div>
        
        <div className="work-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="work-card">
              <div className="work-image">
                <ComparisonSlider
                  beforeSrc={project.beforeImage}
                  afterSrc={project.afterImage}
                  beforeAlt={`${project.title} (before)`}
                  afterAlt={`${project.title} (after)`}
                />
                <div className="work-overlay">
                  <span className="work-category">{project.category}</span>
                </div>
              </div>
              <div className="work-content">
                <h3 className="work-title">{project.title}</h3>
                <p className="work-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
