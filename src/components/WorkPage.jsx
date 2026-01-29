import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Reveal from './Reveal';
import ComparisonSlider from './ComparisonSlider';
import './WorkPage.css';

const projects = [
  {
    id: 'richmond-kitchen',
    title: 'Richmond Gardens kitchen gets a complete modern makeover',
    text: 'This family wanted a kitchen where everyone could gather comfortably, so we opened up the space.',
    beforeImage:
      '/work/kitchen_before.png',
    afterImage:
      '/work/kitchen_after.png'
  },
  {
    id: 'brighton-bath',
    title: 'Brighton Bay bathroom becomes a luxurious spa retreat',
    text: 'The homeowners dreamed of a relaxing bathroom where they could unwind after long days, so we created a space with modern fixtures.',
    beforeImage:
      '/work/bathroom_before.png',
    afterImage:
      '/work/bathroom_after.png'
  },
  {
    id: 'carlton-office',
    title: 'Carlton Heights home office turns into creative workspace',
    text: 'Working from home needed to feel inspiring and organized, so we designed a functional space that makes productivity feel effortless.',
    beforeImage:
      '/work/home_office_before.png',
    afterImage:
      '/work/home_office_after.png'
  },
  {
    id: 'windsor-bath',
    title: 'Windsor Park bathroom gets stunning contemporary update',
    text: 'This couple wanted their bathroom to feel like a luxury, so we added elegant features that makes every morning feel special.',
    beforeImage:
      '/work/bathroom2_before.png',
    afterImage:
      '/work/bathroom2_after.png'
  },
  {
    id: 'hawthorn-kitchen',
    title: 'Hawthorn Ridge kitchen opens up for better family living',
    text: 'The old kitchen felt disconnected from family life, so we created an open, welcoming space where cooking and conversation happen naturally.',
    beforeImage:
      '/work/kitchen2_before.png',
    afterImage:
      '/work/kitchen2_after.png'
  }
];

const processSteps = [
  {
    num: '01',
    title: 'Get your quote',
    text: "No hidden costs or surprise fees – you'll know exactly what your renovation costs from day one."
  },
  {
    num: '02',
    title: 'Approve and schedule',
    text: "Once you're happy with the plan and pricing, we'll schedule your project at your convenience."
  },
  {
    num: '03',
    title: 'Transform your space',
    text: 'Our professional team gets to work, keeping you updated every step of the way. Watch as your vision becomes a beautiful reality.'
  }
];

const WorkPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);
  const navigate = useNavigate();

  const goContact = () => {
    navigate('/contact');
  };

  const goServices = () => {
    navigate('/services');
  };

  return (
    <main className="workpage">
      <section className="workpage-hero">
        <div className="container">
          <Reveal>
            <h1 className="workpage-title">
              Beautiful results with easy steps
            </h1>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="workpage-subtitle">
              Explore gorgeous transformations we've created for Melbourne families and our process.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="workpage-gallery section">
        <div className="container">
          <div className="workpage-grid">
            {projects.map((p, idx) => (
              <Reveal key={p.id} delayMs={idx * 70}>
                <article className="workpage-card">
                  <div className="workpage-img">
                    <ComparisonSlider
                      beforeSrc={p.beforeImage}
                      afterSrc={p.afterImage}
                      beforeAlt={`${p.title} (before)`}
                      afterAlt={`${p.title} (after)`}
                    />
                  </div>
                  <div className="workpage-card-body">
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="workpage-process section">
        <div className="container">
          <Reveal>
            <div className="workpage-process-header">
              <p className="workpage-kicker">Our process</p>
              <h2 className="workpage-h2">The simple steps that make your renovation journey smooth</h2>
              <button className="workpage-linkbtn" onClick={goContact}>Contact us</button>
            </div>
          </Reveal>

          <div className="workpage-steps">
            {processSteps.map((s, idx) => (
              <Reveal key={s.num} delayMs={idx * 80}>
                <div className="workpage-step">
                  <div className="workpage-step-num">{s.num}</div>
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="workpage-cta section">
        <div className="container">
          <Reveal>
            <div className="workpage-cta-card">
              <h2>Don't wait another day to create the home you've always wanted</h2>
              <p>From outdated kitchens to tired bathrooms, we create spaces that make you fall in love with your home again.</p>
              <div className="workpage-cta-actions">
                <button className="workpage-btn primary" onClick={goServices}>Discover services</button>
                <button className="workpage-btn secondary" onClick={goContact}>Request a quote</button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default WorkPage;

