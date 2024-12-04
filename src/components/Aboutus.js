import React, { useEffect, useState } from "react";
import "./AboutUs.css";
import Navbar from "./Navbar";
import Footer from "./Footer";



const AboutUs = () => {
  const [comments, setComments] = useState([]);
  const [userComment, setUserComment] = useState("");

  useEffect(() => {
    const fadeInElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    fadeInElements.forEach((element) => observer.observe(element));
  }, []);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (userComment.trim()) {
      setComments((prev) => [...prev, userComment.trim()]);
      setUserComment("");
    }
  };

  return (
<div>
< Navbar />
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="background-animation"></div>
        <div className="hero-content fade-in">
          <h1 className="hero-title">About Us</h1>
          <p>Your journey to innovation starts here.</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story fade-in">
        <div className="container">
          <h2>Our Story</h2>
          <p>
          ChemistryHub was founded with the goal of making learning chemistry easier and more engaging for students. We started by recognizing the challenges that high school students face in understanding complex chemistry concepts. Our mission is to provide clear, interactive, and accessible educational content to students in class 11. From educational materials to virtual experiments and quizzes, ChemistryHub has grown into a trusted platform for students eager to learn and excel in their chemistry studies.
          </p>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="vision-mission fade-in">
        <div className="container">
          <h2>Vision & Mission</h2>
          <p>
            <strong>Vision:</strong>To become the leading platform for chemistry education, empowering students to explore the wonders of chemistry and develop critical thinking skills that will prepare them for a future in science and technology.
          </p>
          <p>
            <strong>Mission:</strong> Our mission is to deliver high-quality, comprehensive, and engaging learning materials for class 11 chemistry students. We aim to provide a variety of resources such as study notes, tutorial videos, quizzes, and interactive simulations to make chemistry accessible, fun, and effective for every learner.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values fade-in">
        <div className="container">
          <h2>Our Core Values</h2>
          <ul>
            <li>🚀 Innovation: Always pushing boundaries.</li>
            <li>💡 Creativity: Finding unique solutions.</li>
            <li>🌍 Integrity: Doing what’s right.</li>
            <li>🤝 Collaboration: Stronger together.</li>
          </ul>
        </div>
      </section>

    </div>
< Footer />
</div>
  );
};

export default AboutUs;
