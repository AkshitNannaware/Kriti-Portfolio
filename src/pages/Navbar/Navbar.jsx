import React, { useState, useEffect } from "react";
import { MdHome } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import Cal, { getCalApi } from "@calcom/embed-react";
import "./Navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 968);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleBookMeeting = () => {
    closeMobileMenu();
    setShowBooking(true);
    setTimeout(() => {
      document.getElementById("book-meeting").scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      {/* Top Navbar - Only show on desktop */}
      {!isMobile && (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
          <div className="nav-container">
            <div className="nav-logo">
              <a href="#home">
                <span className="logo-text">Kriti Verma</span>
                <span className="logo-dot">.</span>
              </a>
            </div>

            <ul className="nav-menu">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link">
                  Work Gallery
                </a>
              </li>
              <li className="nav-item">
                <a href="#technical-skills" className="nav-link">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a href="https://www.cal.eu/kriti-verma15" target="_blank" rel="noopener noreferrer" className="nav-link cta-button">
                  Book Meeting
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}

      {/* Bottom Navbar - Only on mobile */}
      {isMobile && (
        <nav className="bottom-navbar">
          <div className="bottom-nav-container">
            <a href="/" className="bottom-nav-link" onClick={closeMobileMenu}>
              <span className="nav-icon"><MdHome /></span>
              <span>Home</span>
            </a>
            <a href="#about" className="bottom-nav-link" onClick={closeMobileMenu}>
              <span className="nav-icon"><FaUser /></span>
              <span>About</span>
            </a>
            <a href="#projects" className="bottom-nav-link" onClick={closeMobileMenu}>
              <span className="nav-icon"><FaBriefcase /></span>
              <span>Projects</span>
            </a>
            <a href="#technical-skills" className="bottom-nav-link" onClick={closeMobileMenu}>
              <span className="nav-icon"><BsFileEarmarkTextFill /></span>
              <span>Experience</span>
            </a>
            <a href="#contact" className="bottom-nav-link" onClick={closeMobileMenu}>
              <span className="nav-icon"><MdEmail /></span>
              <span>Contact</span>
            </a>
          </div>
        </nav>
      )}

      {/* Booking Section */}
      {showBooking && (
        <section id="book-meeting" className="booking-section">
          <Cal
            namespace="30min"
            calLink="akshit-nannaware/30min"
            style={{ width: "100%", height: "700px", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </section>
      )}
    </>
  );
}

export default Navbar;