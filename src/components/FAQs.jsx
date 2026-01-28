import { useState } from 'react';
import './FAQs.css';

const faqs = [
  {
    id: 1,
    question: 'What types of renovations do you specialise in?',
    answer: 'We specialise in kitchens, bathrooms, and other spaces for both home and work. Our team handles everything from complete makeovers to smaller updates with quality results.'
  },
  {
    id: 2,
    question: 'How long does a typical renovation project take?',
    answer: 'Kitchen renovations typically take 2-4 weeks, bathrooms 1-2 weeks, and other spaces 1-3 weeks. We\'ll provide you with a detailed timeline during your free consultation.'
  },
  {
    id: 3,
    question: 'How to start the project?',
    answer: 'Simply contact us to schedule a free consultation where we\'ll visit your space and provide a detailed estimate. We\'re happy to answer all your renovation questions.'
  },
  {
    id: 4,
    question: 'Do you offer warranties or guarantees on your work?',
    answer: 'Yes, we provide a comprehensive 2-year warranty on all workmanship and materials. We stand behind our quality and offer prompt support for any concerns.'
  },
  {
    id: 5,
    question: 'Can you work around my schedule?',
    answer: 'We work with you to find convenient times and minimize disruption to your routine.'
  }
];

const FAQs = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="faqs section">
      <div className="container">
        <div className="faqs-header">
          <h2 className="section-title">Questions you have in mind</h2>
        </div>
        
        <div className="faqs-list">
          {faqs.map((faq) => (
            <div key={faq.id} className={`faq-item ${openId === faq.id ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFAQ(faq.id)}>
                <span>{faq.question}</span>
                <span className="faq-icon">{openId === faq.id ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
