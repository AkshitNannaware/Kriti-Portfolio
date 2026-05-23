import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';

const kesariHighlights = [
  'Executed keyword analytics and assisted in ad campaign layouts.',
  'Managed WordPress backends and on-page SEO best practices.',
  'Developed visual branding assets and tracking metrics support.',
];

const metaFourHighlights = [
  'Designed core campaign architectures for Real Estate & Education.',
  'Deployed audience layering frameworks to stabilize lead delivery.',
  'Executed creative testing protocols to drive performance continuity.',
];

function useVisible(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Experience() {
  const [kesariRef, kesariVisible] = useVisible();
  const [metaRef, metaVisible] = useVisible();

  return (
    <section id="technical-skills" className="technical-skills">
      <div className="container-experience">

        {/* ── Card 1: Kesari Enterprises ── */}
        <div
          ref={kesariRef}
          className={`kesari-card ${kesariVisible ? 'animate' : ''}`}
        >
          {/* Left: Image */}
          <div className="kesari-img-side">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format"
              alt="Digital Marketing Analytics Dashboard"
              className="kesari-img"
            />
            <div className="kesari-img-overlay" />
          </div>

          {/* Right: Text */}
          <div className="kesari-text-side">
            <span className="kesari-pill">FOUNDATIONS</span>
            <h2 className="kesari-company">Kesari Enterprises</h2>
            <p className="kesari-role">Digital Marketing Intern — 2024</p>
            <ul className="kesari-highlights">
              {kesariHighlights.map((h, i) => (
                <li
                  key={i}
                  style={{ transitionDelay: `${0.3 + i * 0.15}s` }}
                  className={kesariVisible ? 'animate' : ''}
                >
                  <span className="kesari-arrow">→</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Card 2: MetaFour Media ── */}
        <div
          ref={metaRef}
          className={`kesari-card metafour-card ${metaVisible ? 'animate' : ''}`}
        >
          {/* Left: Text */}
          <div className="kesari-text-side metafour-text-side">
            <span className="kesari-pill metafour-pill">AGENCY EXPERIENCE</span>
            <h2 className="kesari-company">MetaFour Media</h2>
            <p className="kesari-role metafour-role">Digital Marketing Executive — 2025</p>
            <ul className="kesari-highlights">
              {metaFourHighlights.map((h, i) => (
                <li
                  key={i}
                  style={{ transitionDelay: `${0.3 + i * 0.15}s` }}
                  className={metaVisible ? 'animate' : ''}
                >
                  <span className="kesari-arrow">→</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Analytics Image */}
          <div className="kesari-img-side metafour-img-side">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format"
              alt="MetaFour Media Analytics Dashboard"
              className="kesari-img"
            />
            <div className="kesari-img-overlay metafour-img-overlay" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;