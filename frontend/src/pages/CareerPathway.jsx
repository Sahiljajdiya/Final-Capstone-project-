import React, { useState } from 'react';
import './CareerPathway.css';

const CareerPathway = () => {
  const [selectedPath, setSelectedPath] = useState('data');

  const paths = {
    data: {
      title: 'Data Analytics Pathway',
      steps: [
        { title: 'Complete Program', desc: '2-year diploma in Data Analytics' },
        { title: 'Build Portfolio', desc: 'Create projects on GitHub, Kaggle' },
        { title: 'Internship', desc: 'Co-op or summer placement' },
        { title: 'Entry-Level Role', desc: 'Data Analyst, Junior Data Scientist' },
        { title: 'Mid-Level', desc: 'Senior Data Analyst, ML Engineer' },
        { title: 'Expert Level', desc: 'Data Scientist Lead, AI Architect' },
      ],
      roles: ['Data Analyst', 'Business Intelligence Analyst', 'Data Scientist', 'ML Engineer'],
    },
    dev: {
      title: 'Software Development Pathway',
      steps: [
        { title: 'Complete Program', desc: '2-year diploma in Software Dev' },
        { title: 'Build Projects', desc: 'Full-stack apps, open source contributions' },
        { title: 'Technical Interview Prep', desc: 'LeetCode, system design practice' },
        { title: 'Junior Developer', desc: 'Frontend/Backend Developer role' },
        { title: 'Mid-Level', desc: 'Senior Developer, Tech Lead' },
        { title: 'Expert Level', desc: 'Staff Engineer, Engineering Manager' },
      ],
      roles: ['Junior Developer', 'Full-Stack Developer', 'DevOps Engineer', 'Solutions Architect'],
    },
  };

  const path = paths[selectedPath];

  return (
    <div className="career-page wrapper">
      <h1 className="heading">Career Pathway</h1>

      <div className="pathway-tabs">
        <button
          className={`tab-btn ${selectedPath === 'data' ? 'active' : ''}`}
          onClick={() => setSelectedPath('data')}
        >
          Data Analytics
        </button>
        <button
          className={`tab-btn ${selectedPath === 'dev' ? 'active' : ''}`}
          onClick={() => setSelectedPath('dev')}
        >
          Software Development
        </button>
      </div>

      <h2 className="sub-heading">{path.title}</h2>

      <div className="timeline">
        {path.steps.map((step, index) => (
          <div key={step.title} className={`timeline-item step-${index + 1}`}>
            <div className="timeline-number">{index + 1}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="roles-box">
        <h2>Target Roles</h2>
        <div className="roles-list">
          {path.roles.map((role) => (
            <span key={role} className="role-tag">{role}</span>
          ))}
        </div>
      </div>

      <div className="tips-box">
        <h2>Tips for Success</h2>
        <ul>
          <li>Start building your portfolio from day one of your program.</li>
          <li>Network actively on LinkedIn and attend industry events.</li>
          <li>Complete certifications in tools like Python, SQL, and Power BI.</li>
          <li>Apply for co-op programs to gain real-world experience.</li>
        </ul>
      </div>
    </div>
  );
};

export default CareerPathway;
