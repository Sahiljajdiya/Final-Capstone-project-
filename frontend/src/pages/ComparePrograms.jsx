import React, { useState } from 'react';
import './ComparePrograms.css';

const ComparePrograms = () => {
  const programs = [
    { id: 1, name: "Data Analytics", college: "St. Clair College", tuition: 13000, duration: "2 years" },
    { id: 2, name: "Computer Engineering", college: "Seneca College", tuition: 15000, duration: "2 years" },
    { id: 3, name: "Software Developer", college: "Humber College", tuition: 12500, duration: "2 years" },
    { id: 4, name: "Machine Learning", college: "George Brown College", tuition: 16000, duration: "2 years" },
    { id: 5, name: "Business Analytics", college: "Mohawk College", tuition: 13500, duration: "2 years" },
  ];

  const [program1, setProgram1] = useState(programs[0]);
  const [program2, setProgram2] = useState(programs[1]);

  const comparisonRows = [
    { label: "Program Name", key: "name" },
    { label: "College", key: "college" },
    { label: "Tuition (CAD/year)", key: "tuition" },
    { label: "Duration", key: "duration" },
    { label: "Eligibility Rate", value1: "High", value2: "Medium" },
    { label: "Scholarships Available", value1: "Yes", value2: "Yes" },
    { label: "Job Prospects", value1: "Excellent", value2: "Good" },
  ];

  return (
    <div className="compare-page wrapper">
      <h1 className="heading">Compare Programs</h1>

      <div className="selectors">
        <div className="selector-box">
          <label>Program 1:</label>
          <select
            className="program-select"
            value={program1.id}
            onChange={(e) => {
              const selected = programs.find((p) => p.id === parseInt(e.target.value));
              setProgram1(selected);
            }}
          >
            {programs.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </div>

        <div className="vs-badge">VS</div>

        <div className="selector-box">
          <label>Program 2:</label>
          <select
            className="program-select"
            value={program2.id}
            onChange={(e) => {
              const selected = programs.find((p) => p.id === parseInt(e.target.value));
              setProgram2(selected);
            }}
          >
            {programs.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="comparison-grid">
        <div className="program-card highlight">
          {comparisonRows.map((row) => (
            <div key={row.label} className="comp-row">
              <span className="row-label">{row.label}</span>
              <span className="row-value">
                {program2 ? row.value2 || program2[row.key] : ''}
              </span>
            </div>
          ))}
          <h3>{program2 ? program2.name : ''}</h3>
        </div>
        <div className="program-card">
          {comparisonRows.map((row) => (
            <div key={row.label} className="comp-row">
              <span className="row-label">{row.label}</span>
              <span className="row-value">
                {row.value1 || (program1 ? program1[row.key] : '')}
              </span>
            </div>
          ))}
          <h3>{program1 ? program1.name : ''}</h3>
        </div>
      </div>

      <div className="insights-box">
        <h3>Comparison Insights</h3>
        <ul>
          <li>Both programs offer strong industry connections in Ontario.</li>
          <li>St. Clair College Data Analytics has a lower tuition cost.</li>
          <li>Consider location, campus culture, and co-op opportunities before deciding.</li>
        </ul>
      </div>
    </div>
  );
};

export default ComparePrograms;
