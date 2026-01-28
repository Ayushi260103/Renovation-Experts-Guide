import { useEffect, useId, useRef, useState } from 'react';
import './ComparisonSlider.css';

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

/**
 * Before/After image comparison slider (Dribbble-style).
 * - Drag handle (mouse/touch)
 * - Range input for accessibility
 * - Optional labels
 */
const ComparisonSlider = ({
  beforeSrc,
  afterSrc,
  beforeAlt = 'Before',
  afterAlt = 'After',
  beforeLabel = 'Before',
  afterLabel = 'After',
  initial = 55,
  className = '',
}) => {
  const id = useId();
  const rootRef = useRef(null);
  const draggingRef = useRef(false);
  const [value, setValue] = useState(clamp(initial, 0, 100));

  const setFromClientX = (clientX) => {
    const el = rootRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setValue(clamp(pct, 0, 100));
  };

  useEffect(() => {
    const onMove = (e) => {
      if (!draggingRef.current) return;
      if ('touches' in e) {
        if (e.touches[0]) setFromClientX(e.touches[0].clientX);
      } else {
        setFromClientX(e.clientX);
      }
    };

    const onUp = () => {
      draggingRef.current = false;
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onUp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
  }, []);

  const startDragMouse = (e) => {
    e.preventDefault();
    draggingRef.current = true;
    setFromClientX(e.clientX);
  };

  const startDragTouch = (e) => {
    e.preventDefault();
    draggingRef.current = true;
    if (e.touches[0]) setFromClientX(e.touches[0].clientX);
  };

  return (
    <div ref={rootRef} className={`cmp ${className}`.trim()}>
      <div className="cmp__img cmp__img--after">
        <img src={afterSrc} alt={afterAlt} loading="lazy" />
        <span className="cmp__label cmp__label--after">{afterLabel}</span>
      </div>

      <div className="cmp__img cmp__img--before" style={{ width: `${value}%` }}>
        <img src={beforeSrc} alt={beforeAlt} loading="lazy" />
        <span className="cmp__label cmp__label--before">{beforeLabel}</span>
      </div>

      <div
        className="cmp__handle"
        style={{ left: `${value}%` }}
        onMouseDown={startDragMouse}
        onTouchStart={startDragTouch}
        role="presentation"
      >
        <div className="cmp__line" />
        <div className="cmp__knob" aria-hidden="true">
          <span className="cmp__chev cmp__chev--l">‹</span>
          <span className="cmp__chev cmp__chev--r">›</span>
        </div>
      </div>

      <label className="cmp__sr" htmlFor={id}>
        Image comparison slider
      </label>
      <input
        id={id}
        className="cmp__range"
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        aria-label="Compare before and after"
      />
    </div>
  );
};

export default ComparisonSlider;

