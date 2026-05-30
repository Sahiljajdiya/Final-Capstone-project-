import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page wrapper">
      <h1 className="heading">About EduPath</h1>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          EduPath is a capstone project designed to help prospective students navigate their
          educational journey in Canada. We provide tools to explore programs, check eligibility,
          estimate costs, find scholarships, compare options, and plan your career pathway.
        </p>
      </div>

      <div className="about-section">
        <h2>What We Offer</h2>
        <div className="features-grid about-features">
          <div className="feature-card about-card">
            <h3>Program Finder</h3>
            <p>Search and filter post-secondary programs by name, province, and field of study.</p>
          </div>
          <div className="feature-card about-card">
            <h3>Eligibility Checker</h3>
            <p>Estimate your chances of admission based on GPA, IELTS, and background.</p>
          </div>
          <div className="feature-card about-card">
            <h3>Cost Calculator</h3>
            <p>Calculate estimated tuition and living expenses for your programs.</p>
          </div>
          <div className="feature-card about-card">
            <h3>Scholarship Finder</h3>
            <p>Discover scholarships and awards tailored to your profile and interests.</p>
          </div>
          <div className="feature-card about-card">
            <h3>Compare Programs</h3>
            <p>Compare two programs side-by-side across key criteria.</p>
          </div>
          <div className="feature-card about-card">
            <h3>Career Pathway</h3>
            <p>View step-by-step career progression for data analytics and software development.</p>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2>About the Project</h2>
        <p>
          This project was built as a full-stack capstone for the Post-Graduate Diploma
          in Data Analytics for Business at St. Clair College, Windsor, Ontario.
          The frontend is built with React and Vite, and the backend API provides
          program, eligibility, cost, and scholarship data.
        </p>
      </div>

      <div className="about-section">
        <h2>Tech Stack</h2>
        <div className="tech-tags">
          <span className="tech-tag">React</span>
          <span className="tech-tag">Vite</span>
          <span className="tech-tag">React Router</span>
          <span className="tech-tag">CSS3</span>
          <span className="tech-tag">JavaScript</span>
          <span className="tech-tag">REST API</span>
        </div>
      </div>
    </div>
  );
};

export default About;
