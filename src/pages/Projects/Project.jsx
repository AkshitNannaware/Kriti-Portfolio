import React, { useState, useEffect, useRef, useCallback } from "react";
import "./project.css";

const services = [
  {
    icon: "𝕄",
    iconClass: "icon-meta",
    title: "Paid Meta Ads",
    desc: "Advanced Ads Manager mastery, audience layering, and intent-based retargeting.",
    images: [
      "/Paid%20MetaAds/hed1.jpeg",
      "/Paid%20MetaAds/hed2.jpeg",
      "/Paid%20MetaAds/hed3.jpeg",
      "/Paid%20MetaAds/hed4.jpeg",
      "/Paid%20MetaAds/karwa2.jpeg",
      "/Paid%20MetaAds/karwa3.jpeg",
      "/Paid%20MetaAds/WhatsApp%20Image%202026-05-23%20at%201.58.08%20PM.jpeg",
    ],
  },
  {
    icon: "G",
    iconClass: "icon-google",
    title: "Paid Google Ads",
    desc: "Search & Display architecture designed for high-intent capture and ROI analytics.",
    images: [
      "/Google%20Ads/WhatsApp%20Image%202026-05-23%20at%2011.48.11%20AM.jpeg",
    ],
  },
  {
    icon: "#",
    iconClass: "icon-social",
    title: "Social Media Management",
    desc: "Brand storytelling and community engagement to build long-term digital authority.",
    images: [
      "/Social%20Media/Divine.jpeg",
      "/Social%20Media/Divine2.jpeg",
      "/Social%20Media/WhatsApp%20Image1%202026-05-23%20at%2011.08.23%20AM.jpeg",
      "/Social%20Media/WhatsApp%20Image%202026-05-23%20at%2011.08.23%20AM.jpeg",
      "/Social%20Media/11WhatsApp%20Image%202026-05-23%20at%2011.08.22%20AM.jpeg",
      "/Social%20Media/WhatsApp%20Image%202026-05-23%20at%2011.08.24%20AM.jpeg",
    ],
  },
  {
    icon: "⌨",
    iconClass: "icon-web",
    title: "Website Design",
    desc: "Conversion-focused landing pages and business sites built for speed and lead capture.",
    images: [
      "/Web%20Design/Screenshot%202026-05-23%20134238.png",
      "/Web%20Design/Screenshot%202026-05-23%20134739.png",
      "/Web%20Design/WhatsApp%20Image%202026-05-23%20at%2011.43.40%20AM.jpeg",
      "/Web%20Design/WhatsApp%20Image%202026-05-23%20at%2011.44.55%20AM.jpeg",
    ],
  },
];

/* ── Lightbox Modal ── */
function GalleryModal({ service, onClose }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = useCallback(() =>
    setActiveIdx((i) => (i - 1 + service.images.length) % service.images.length), [service]);
  const next = useCallback(() =>
    setActiveIdx((i) => (i + 1) % service.images.length), [service]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-row">
            <span className={`service-icon ${service.iconClass}`} style={{ marginBottom: 0, fontSize: "1.4rem" }}>
              {service.icon}
            </span>
            <h3 className="modal-title">{service.title}</h3>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {/* Main image viewer */}
        <div className="modal-viewer">
          <button className="nav-btn nav-prev" onClick={prev} aria-label="Previous">‹</button>

          <div className="main-img-wrap">
            <img
              key={activeIdx}
              src={service.images[activeIdx]}
              alt={`${service.title} - ${activeIdx + 1}`}
              className="main-img"
            />
            <div className="img-counter">
              {activeIdx + 1} / {service.images.length}
            </div>
          </div>

          <button className="nav-btn nav-next" onClick={next} aria-label="Next">›</button>
        </div>

        {/* Thumbnails strip */}
        <div className="thumbs-strip">
          {service.images.map((src, i) => (
            <button
              key={i}
              className={`thumb-btn ${i === activeIdx ? "thumb-active" : ""}`}
              onClick={() => setActiveIdx(i)}
              aria-label={`Image ${i + 1}`}
            >
              <img src={src} alt={`thumb-${i + 1}`} className="thumb-img" />
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

/* ── Main Projects Component ── */
function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [openService, setOpenService] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="projects" className="projects" ref={sectionRef}>
        <div className="container-project">
          {/* Header */}
          <div className={`gallery-header ${isVisible ? "animate" : ""}`}>
            <span className="gallery-rocket">🚀</span>
            <h2 className="section-title-project">
              Expertise &amp; <span className="gallery-accent">Work Gallery</span>
            </h2>
          </div>

          {/* 2×2 Grid */}
          <div className="projects-grid">
            {services.map((s, i) => (
              <div
                key={i}
                className={`project-card ${isVisible ? "animate" : ""}`}
                style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
                onClick={() => setOpenService(s)}
              >
                <span className={`service-icon ${s.iconClass}`}>{s.icon}</span>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <button
                  className="service-link view-work-btn"
                  onClick={(e) => { e.stopPropagation(); setOpenService(s); }}
                >
                  VIEW WORK →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {openService && (
        <GalleryModal service={openService} onClose={() => setOpenService(null)} />
      )}
    </>
  );
}

export default Projects;