import { useEffect, useRef, useState } from 'react';

/**
 * Simple scroll-reveal wrapper using IntersectionObserver.
 * Adds `reveal-in` class when element enters viewport.
 */
const Reveal = ({ children, className = '', delayMs = 0 }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'reveal-in' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delayMs}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;

