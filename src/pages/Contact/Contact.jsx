import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

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

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [eduRef, eduVisible] = useVisible();
  const [contactRef, contactVisible] = useVisible();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .send("service_q9lu7xo", "template_09om01n", formData, "1WvRWjdB3IxAu5Xm3")
      .then(() => {
        alert("✅ Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
        setIsSending(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error.text);
        alert("❌ Failed to send message. Please try again.");
        setIsSending(false);
      });
  };

  return (
    <>
      {/* ── Education / Technical Mindset Card ── */}
      <section className="edu-section">
        <div
          ref={eduRef}
          className={`edu-card ${eduVisible ? "animate" : ""}`}
        >
          {/* Left: text */}
          <div className="edu-text-side">
            <span className="edu-pill">ANALYTICAL CORE</span>
            <h2 className="edu-title">
              Technical <span className="edu-accent">Mindset</span>
            </h2>
            <p className="edu-degree">B.Sc. in Computer Science</p>
            <p className={`edu-desc ${eduVisible ? "animate" : ""}`}
               style={{ transitionDelay: "0.3s" }}>
              Graduated from <strong>Vikram University, Ujjain (2023)</strong>. This
              academic foundation shapes my algorithmic tracking methodology.
            </p>
            <p className={`edu-desc ${eduVisible ? "animate" : ""}`}
               style={{ transitionDelay: "0.45s" }}>
              Bridging the gap between complex data tracking and creative marketing strategy.
            </p>
          </div>

          {/* Right: image */}
          <div className="edu-img-side">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&auto=format"
              alt="Technical mindset - laptop and hands"
              className="edu-img"
            />
            <div className="edu-img-overlay" />
          </div>
        </div>
      </section>

      {/* ── Contact Form ──
      <section id="contact" className="contact" ref={contactRef}>
        <div className={`contact-container ${contactVisible ? "animate-container" : ""}`}>
          <div className={`contact-header ${contactVisible ? "animate-header" : ""}`}>
            <h2>Get in <span className="contact-accent">Touch</span></h2>
            <p className="contact-subtitle">
              Send a message and I'll get back to you as soon as possible.
            </p>
          </div>

          <div className={`contact-content ${contactVisible ? "animate-content" : ""}`}>
            <form className="contact-form" onSubmit={handleSubmit}>
              {["name", "email", "message"].map((field, i) => (
                <div className="form-group" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                  {field !== "message" ? (
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      placeholder={field === "name" ? "Your Name" : "Your Email"}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                    />
                  ) : (
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  )}
                  <i className={`fas fa-${field === "name" ? "user" : field === "email" ? "envelope" : "pen"}`} />
                </div>
              ))}
              <button type="submit" disabled={isSending}>
                {isSending ? "Sending..." : "Send Message"}&nbsp;
                <i className="fas fa-paper-plane" />
              </button>
            </form>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Contact;