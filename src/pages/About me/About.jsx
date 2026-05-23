import React, { useState, useEffect, useRef } from 'react';
import './About.css';

const stats = [
  { label: 'LEAD QUALITY', value: 85, display: '85%', color: 'linear-gradient(180deg, #FF6B9D 0%, #a855f7 100%)' },
  { label: 'CPL DROP', value: 60, display: '-40%', color: 'linear-gradient(180deg, #38bdf8 0%, #6366f1 100%)' },
  { label: 'AVG ROAS', value: 75, display: '3.5x', color: 'linear-gradient(180deg, #a78bfa 0%, #7c3aed 100%)' },
];

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [barAnimate, setBarAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setBarAnimate(true), 400);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container-about">

        {/* Section Header */}
        <div className={`about-header ${isVisible ? 'animate' : ''}`}>
          <span className="lightning">⚡</span>
          <h2 className="section-title">
            Growth <span className="accent">Framework</span>
          </h2>
        </div>

        <div className="about-content">
          {/* Left: Text */}
          <div className={`about-text ${isVisible ? 'animate' : ''}`}>
            <p className="about-tagline">
              Scaling brands through predictable conversion funnels.
            </p>
            <p className="about-description">
              I specialize in high-converting Meta and Google Ads
              infrastructures, optimizing the complete lead-to-revenue journey.
            </p>
            <p className="about-description">
              By eliminating creative fatigue and audience overlap, I establish
              long-term digital authority for diverse business portfolios.
            </p>
          </div>

          {/* Right: Bar Chart */}
          <div className={`chart-wrapper ${isVisible ? 'animate' : ''}`}>
            <div className="chart-card">
              <div className="bars">
                {stats.map((stat, i) => (
                  <div className="bar-col" key={i}>
                    <span className="bar-value">{stat.display}</span>
                    <div className="bar-track">
                      <div
                        className="bar-fill"
                        style={{
                          background: stat.color,
                          height: barAnimate ? `${stat.value}%` : '0%',
                          transitionDelay: `${i * 0.15}s`,
                        }}
                      />
                    </div>
                    <span className="bar-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;