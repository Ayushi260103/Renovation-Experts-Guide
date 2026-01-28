import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Steven Clear',
    project: 'Building new bedroom',
    text: 'Fantastic experience with this renovation team. They turned our small bedroom into a beautiful, functional space.'
  },
  {
    id: 2,
    name: 'Lisa Wright',
    project: 'Building new home office',
    text: 'Outstanding attention to detail. The team listened to our needs and created the perfect home office space that super neat.'
  },
  {
    id: 3,
    name: 'Robin Thomson',
    project: 'Building new kitchen',
    text: 'Reliable and skilled contractors who completed our kitchen remodel on time and within our family budget.'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="testimonials-header">
          <p className="testimonials-tagline">Trusted by 500+ Melbourne homeowners</p>
          <h2 className="section-title">Hear from families who love their new spaces</h2>
        </div>
        
        <div className="testimonials-carousel">
          <button className="carousel-btn carousel-btn-prev" onClick={prevTestimonial} aria-label="Previous">
            <FaChevronLeft />
          </button>
          
          <div className="testimonial-card">
            <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
            <div className="testimonial-author">
              <h4 className="author-name">{testimonials[currentIndex].name}</h4>
              <p className="author-project">{testimonials[currentIndex].project}</p>
            </div>
          </div>
          
          <button className="carousel-btn carousel-btn-next" onClick={nextTestimonial} aria-label="Next">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
