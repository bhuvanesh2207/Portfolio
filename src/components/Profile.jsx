import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Profile.css";
export default function Profile() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll reveal effect
  useEffect(() => {
    // Scroll to top when component loads
    window.scrollTo({ top: 0, behavior: "auto" });

    const revealOnScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        if (elementTop < windowHeight - revealPoint) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <main className="landing-container">
      {/* Name & Basic Info */}
      <h1 className="reveal profile-name">Bhuvanesh KR</h1>
      <p className="reveal profile-title">Java & Full-Stack Developer</p>
      <p className="reveal profile-description">
        Computer Science graduate with strong Full Stack Development skills and
        a keen interest in Backend Development. Experienced in building
        scalable, secure web applications using REST APIs and database
        integration. Passionate about solving real-world problems through
        technology and effective teamwork, continuously updating skills to keep
        pace with modern web practices.
      </p>

      {/* Explore Me Button */}
      <button className="reveal explore-btn" onClick={handleExploreClick}>
        <Link to="/home" className="explore-link">
          Explore Me
        </Link>
      </button>

      {/* Contact Info */}
      <p className="contact-info">
        📞 +91 93453 17239 &nbsp; | &nbsp; ✉{" "}
        <a href="mailto:bhuvaneshb546@gmail.com" className="contact-link">
          bhuvaneshb546@gmail.com
        </a>{" "}
        &nbsp; | &nbsp; 📍 Hosur, Tamil Nadu
      </p>
    </main>
  );
}
