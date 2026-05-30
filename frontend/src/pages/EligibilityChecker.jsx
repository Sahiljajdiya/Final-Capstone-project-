import { useState } from 'react';
import './EligibilityChecker.css';

function EligibilityChecker() {
  const [formData, setFormData] = useState({
    degree: '',
    gpa: '',
    englishScore: '',
    workExperience: '0',
    programChoice: '',
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const gpa = parseFloat(formData.gpa) || 0;
    const english = parseFloat(formData.englishScore) || 0;
    const exp = parseInt(formData.workExperience) || 0;

    let matchScore = 0;
    let eligiblePrograms = [];
    let suggestions = [];

    if (gpa >= 3.0) {
      if (formData.programChoice === 'data') {
        matchScore += 3;
        eligiblePrograms.push('Data Analytics');
      } else {
        eligiblePrograms.push('Data Analytics', 'Cybersecurity', 'Cloud Computing');
      }
    } else if (gpa >= 2.5) {
      eligiblePrograms.push('Computer Programming', 'IT Fundamentals');
      suggestions.push('Consider improving your GPA for more competitive programs.');
    }

    if (english >= 6.5) {
      matchScore += 2;
    } else if (english < 5.5) {
      suggestions.push('You may need an English language course before applying.');
    }

    if (exp >= 2) {
      matchScore += 1;
      suggestions.push('Your work experience strengthens your application.');
    }

    setResult({ matchScore, eligiblePrograms, suggestions });
  };

  return (
    <div className="eligibility-checker">
      <div className="container">
        <h1>Eligibility Checker</h1>
        <p>Check if you qualify for IT programs in Canada.</p>

        <form onSubmit={handleSubmit} className="eligibility-form">
          <div className="form-group">
            <label htmlFor="degree">Current Degree</label>
            <select name="degree" value={formData.degree} onChange={handleChange} required>
              <option value="">Select your degree</option>
              <option value="bachelor">Bachelor (BSc/BA/BCA)</option>
              <option value="master">Master (MSc/MBA)</option>
              <option value="diploma">Diploma</option>
              <option value="highschool">High School</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="gpa">GPA (out of 4.0)</label>
            <input type="number" name="gpa" min="0" max="4" step="0.1" placeholder="e.g., 3.2" value={formData.gpa} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="englishScore">English Proficiency Score (IELTS)</label>
            <input type="number" name="englishScore" min="0" max="9" step="0.5" placeholder="e.g., 6.5" value={formData.englishScore} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="workExperience">Years of Work Experience</label>
            <select name="workExperience" value={formData.workExperience} onChange={handleChange}>
              <option value="0">None</option>
              <option value="1">1 year</option>
              <option value="2">2 years</option>
              <option value="3">3+ years</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="programChoice">Preferred Program</label>
            <select name="programChoice" value={formData.programChoice} onChange={handleChange}>
              <option value="">Select program of interest</option>
              <option value="data">Data Analytics</option>
              <option value="security">Cybersecurity</option>
              <option value="cloud">Cloud Computing</option>
              <option value="software">Software Development</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary btn-full">Check Eligibility</button>
        </form>

        {result && (
          <div className="results">
            <h2>Your Eligibility Results</h2>
            <div className={`match-score ${result.matchScore >= 4 ? 'high' : result.matchScore >= 2 ? 'medium' : 'low'}`}>
              Match Score: {result.matchScore}/5
            </div>
            <h3>Eligible Programs:</h3>
            {result.eligiblePrograms.length > 0 ? (
              <ul>{result.eligiblePrograms.map((p, i) => <li key={i}>{p}</li>)}</ul>
            ) : (
              <p>No matching programs found.</p>
            )}
            {result.suggestions.length > 0 && (
              <div className="suggestions">
                <h3>Suggestions:</h3>
                <ul>{result.suggestions.map((s, i) => <li key={i}>{s}</li>)}</ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default EligibilityChecker;
