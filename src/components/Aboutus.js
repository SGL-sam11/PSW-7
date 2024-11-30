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
          <button className="btn-primary">Learn More</button>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story fade-in">
        <div className="container">
          <h2>Our Story</h2>
          <p>
            We started with a vision to create a world where technology and
            innovation empower everyone to achieve more. From humble beginnings
            to a global presence, our journey has been defined by passion,
            creativity, and a relentless pursuit of excellence.
          </p>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="vision-mission fade-in">
        <div className="container">
          <h2>Vision & Mission</h2>
          <p>
            <strong>Vision:</strong> To be the leading force of innovation,
            inspiring positive change worldwide.
          </p>
          <p>
            <strong>Mission:</strong> To design, develop, and deliver
            groundbreaking solutions that empower individuals and businesses to
            thrive in the digital age.
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

      {/* Comment Section */}
      <section className="comments-section fade-in">
        <div className="container">
          <h2>We Value Your Feedback</h2>
          <form onSubmit={handleCommentSubmit} className="comment-form">
            <div className="input-wrapper">
              <textarea
                placeholder=" "
                value={userComment}
                onChange={(e) => setUserComment(e.target.value)}
                required
                className="comment-input"
              ></textarea>
              <label className="floating-label">Write your comment here...</label>
            </div>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </form>

          {/* Display Comments */}
          <div className="comments-display">
            <h3>User Comments</h3>
            {comments.length > 0 ? (
              <ul className="comments-list">
                {comments.map((comment, index) => (
                  <li key={index} className="comment-item fade-in">
                    <div className="comment-avatar">
                      <img
                        src={`https://i.pravatar.cc/40?img=${(index % 70) + 1}`}
                        alt="User avatar"
                      />
                    </div>
                    <div className="comment-content">
                      <p>{comment}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No comments yet. Be the first to share your thoughts!</p>
            )}
          </div>
        </div>
      </section>
    </div>
< Footer />
</div>
  );
};

export default AboutUs;
