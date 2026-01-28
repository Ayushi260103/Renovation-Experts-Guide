import { useState } from 'react';
import Reveal from './Reveal';
import './Teams.css';

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Lead Interior Designer',
    image: '/team/team-member-1.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Project Manager',
    image: '/team/team-member-2.jpg'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Architectural Designer',
    image: '/team/team-member-3.jpg'
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Master Craftsman',
    image: '/team/team-member-4.jpg'
   },
  {
    id: 5,
    name: 'Jessica Martinez',
    role: 'Client Relations Specialist',
    image:'/team/team-member-5.jpg'
  },
  // {
  //   id: 6,
  //   name: 'James Wilson',
  //   role: 'Renovation Specialist',
  //   image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80'
  // }
];

const Teams = ({ variant = 'page' }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const isHome = variant === 'home';

  return (
    <section id="team" className={`team-page ${isHome ? 'team-page--home' : ''}`.trim()}>
      {!isHome && (
        <div className="team-hero">
          <div className="container">
            <Reveal>
              <div className="team-hero-content">
                <span className="team-hero-kicker">Our Team</span>
                <h1 className="team-hero-title">
                  Meet the experts behind
                  <span className="team-hero-title-accent"> every renovation</span>
                </h1>
                <p className="team-hero-description">
                  Our talented team of designers, architects, and craftspeople work together to bring your renovation dreams to life.
                  With years of combined experience, we ensure every project exceeds expectations.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      )}

      {/* Team Cards Section - Horizontal Scrollable */}
      <div className="team-section">
        {isHome && (
          <div className="container">
            <Reveal>
              <div className="team-home-header">
                <h2 className="team-home-title">Meet our team</h2>
                <p className="team-home-subtitle">The people who bring your renovation vision to life.</p>
              </div>
            </Reveal>
          </div>
        )}
        <div className="team-cards-container">
          <div className="team-cards-scroll">
            {teamMembers.map((member, index) => (
              <Reveal key={member.id} delayMs={index * 100}>
                <div
                  className={`team-card ${hoveredCard === member.id ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredCard(member.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="team-card-image-wrapper">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="team-card-image"
                    />
                    <div className="team-card-overlay">
                      <div className="team-card-info">
                        <h3 className="team-card-name">{member.name}</h3>
                        <span className="team-card-role">{member.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {!isHome && (
        <div className="team-cta">
          <div className="container">
            <Reveal>
              <div className="team-cta-content">
                <h2 className="team-cta-title">Ready to work with our team?</h2>
                <p className="team-cta-text">
                  Let's discuss your renovation project and see how we can help transform your space.
                </p>
                <a href="/contact" className="team-cta-button">
                  Get Started
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      )}
    </section>
  );
};

export default Teams;
