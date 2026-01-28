import { useEffect } from 'react';
import FAQs from './FAQs';
import './ServicesPage.css';

const services = [
  {
    id: 'kitchen',
    label: 'Kitchen renovation',
    img: '/kitchen.png',
    headline: "Design the kitchen you've always dreamed of where cooking feels effortless",
    bullets: [
      {
        title: 'Smart storage solutions',
        text: 'Say goodbye to cluttered counters with clever storage designed for modern living.'
      },
      {
        title: 'Stunning visual appeal',
        text: 'Beautiful kitchens become the natural gathering place where family and friends love to spend time.'
      }
    ]
  },
  {
    id: 'bathroom',
    label: 'Bathroom renovation',
    img: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1200&q=80',
    headline: 'Start every morning feeling refreshed in a bathroom designed for your comfort',
    bullets: [
      {
        title: 'Efficient space design',
        text: 'Even small bathrooms can feel spacious with the right design approach with clever storage solutions.'
      },
      {
        title: 'Daily luxury experience',
        text: 'Transform your morning and evening routines with high-quality fixtures, and thoughtful lighting.'
      }
    ]
  },
  {
    id: 'improvement',
    label: 'Home improvement',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    headline: 'Create spaces throughout your home that work perfectly for your family',
    bullets: [
      {
        title: 'Customized living spaces',
        text: 'Every family is unique, and your home should reflect. We design spaces that match your needs.'
      },
      {
        title: 'Better home functionality',
        text: "Smart design improvements make your daily routines easier. Whether it's better storage or layouts."
      }
    ]
  }
];

const benefits = [
  {
    num: '01',
    title: 'Expert craftsmanship',
    text: "Whether it's your kitchen, bathroom, or any space in your home, we create beautiful renovations that make everyday life better."
  },
  {
    num: '02',
    title: 'Stress-free process',
    text: 'We handle all the details from permits to cleanup, so you can relax while we transform your space.'
  },
  {
    num: '03',
    title: '2-year warranty',
    text: 'Every project comes with comprehensive warranty coverage because we stand behind our work.'
  },
  {
    num: '04',
    title: 'On-time delivery',
    text: 'Your project will be completed exactly when we promise, with clear timelines.'
  },
  {
    num: '05',
    title: 'Quality materials',
    text: 'We use only premium materials and fixtures that look beautiful and stand up to daily use.'
  },
  {
    num: '06',
    title: 'Transparent pricing',
    text: "No surprise fees – you'll know exactly what your renovation costs from day one."
  }
];

const ServicesPage = () => {
  useEffect(() => {
    // Ensure we land at the top of the Services page on navigation
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const goQuote = () => {
    window.location.href = '/contact';
  };

  const goWork = () => {
    window.location.href = '/work';
  };

  return (
    <main>
      <div className="services-page-root">
        <section className="services-page-hero">
          <div className="container">
            <h1 className="services-page-hero-title">
              <span className="line">Create spaces</span>
              <span className="line">that you love</span>
            </h1>
            <p className="services-page-hero-sub">
              All services for your needs. Find out which one of our services fit the needs of your project.
            </p>
            <div className="services-page-top-actions">
              <button className="sp-btn sp-btn-primary" onClick={goQuote}>Work with us</button>
              <button className="sp-btn sp-btn-secondary" onClick={goWork}>Explore work</button>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="services-page-section-title">
              <h2 className="services-page-section-heading">All services for your needs</h2>
              <p>Find out which one of our services fit the needs of your project</p>
            </div>

            <div className="services-stack" aria-label="Services stack">
              {services.map((s, idx) => (
                <section
                  key={s.id}
                  className="services-stack-panel"
                  style={{ zIndex: 10 + idx }}
                  aria-label={s.label}
                >
                  <div className="services-stack-card">
                    <div className="services-page-service-img">
                      <img src={s.img} alt={s.label} loading="lazy" />
                    </div>
                    <div className="services-stack-content">
                      <div className="services-page-service-meta">{s.label}</div>
                      <h3>{s.headline}</h3>
                      <div className="services-page-bullets">
                        {s.bullets.map((b) => (
                          <div className="services-page-bullet" key={b.title}>
                            <h4>{b.title}</h4>
                            <p>{b.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <div className="services-page-benefits">
              <div className="services-page-section-title">
                <h2 className="services-page-section-heading">Six reasons why we deliver the best renovation experience</h2>
              </div>
              <div className="benefits-grid">
                {benefits.map((b) => (
                  <div key={b.num} className="benefit-item">
                    <div className="benefit-num">{b.num}</div>
                    <div>
                      <h4>{b.title}</h4>
                      <p>{b.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="services-page-cta">
              <h2>Transform your boring rooms into beautiful spaces you’ll love</h2>
              <p>Our renovation experts create amazing home improvements that perfectly match your needs.</p>
              <button className="sp-btn sp-btn-primary" onClick={goQuote}>Request a quote</button>
            </div>
          </div>
        </section>

        <FAQs />
      </div>
    </main>
  );
};

export default ServicesPage;
