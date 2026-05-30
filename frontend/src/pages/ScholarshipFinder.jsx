import { useState } from 'react';
import './ScholarshipFinder.css';

const scholarships = [
  { id: 1, name: 'Vanier Canada Graduate Scholarships', amount: '$50,000/year', deadline: 'Nov 2025', eligibility: 'PhD students', focus: 'All fields' },
  { id: 2, name: 'Ontario Trillium Scholarship', amount: '$15,000/year', deadline: 'Dec 2025', eligibility: 'Master/PhD students', focus: 'All fields' },
  { id: 3, name: 'Humber International Scholarships', amount: '$2,000-5,000', deadline: 'Jan 2026', eligibility: 'International students', focus: 'IT programs' },
  { id: 4, name: 'Seneca International Awards', amount: '$1,500-3,000', deadline: 'Feb 2026', eligibility: 'International students', focus: 'All programs' },
  { id: 5, name: 'NSERC Canadian Graduate Scholarships', amount: '$17,500/year', deadline: 'Oct 2025', eligibility: 'Master students', focus: 'Science & Tech' },
  { id: 6, name: 'St. Clair International Scholarship', amount: '$2,000', deadline: 'Mar 2026', eligibility: 'International students', focus: 'Data Analytics' },
];

function ScholarshipFinder() {
  const [search, setSearch] = useState('');
  const [amountFilter, setAmountFilter] = useState('all');

  const filtered = scholarships.filter((s) => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.eligibility.toLowerCase().includes(search.toLowerCase());
    const matchAmount = amountFilter === 'all' ||
      (amountFilter === 'high' && s.amount.includes('15,000')) ||
      (amountFilter === 'mid' && !s.amount.includes('15,000') && !s.amount.includes('50,000')) ||
      (amountFilter === 'low' && s.amount.includes('1,500') || s.amount.includes('2,000'));
    return matchSearch && matchAmount;
  });

  return (
    <div className="scholarship-finder">
      <div className="container">
        <h1>Scholarship Finder</h1>
        <p>Find scholarships and financial aid for your IT studies in Canada.</p>

        <div className="filters">
          <input
            type="text"
            placeholder="Search scholarships..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <select value={amountFilter} onChange={(e) => setAmountFilter(e.target.value)} className="filter-select">
            <option value="all">Any Amount</option>
            <option value="high">$15,000+</option>
            <option value="mid">$2,000 - $5,000</option>
            <option value="low">Under $2,000</option>
          </select>
        </div>

        <p className="results-count">{filtered.length} scholarship(s) found</p>

        <div className="scholarships-list">
          {filtered.map((scholarship) => (
            <div key={scholarship.id} className="scholarship-card">
              <h3>{scholarship.name}</h3>
              <p className="scholarship-amount">{scholarship.amount}</p>
              <div className="scholarship-details">
                <span>Eligibility: {scholarship.eligibility}</span>
                <span>Focus: {scholarship.focus}</span>
                <span>Deadline: {scholarship.deadline}</span>
              </div>
              <button className="btn btn-secondary btn-small">Apply Now</button>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="no-results">No scholarships found. Try adjusting your search.</p>
        )}

        <div className="scholarship-tips">
          <h2>Tips for Applying</h2>
          <ul>
            <li>Start your applications early &mdash; many deadlines are months before the program starts.</li>
            <li>Check eligibility requirements carefully before applying.</li>
            <li>Apply to multiple scholarships to increase your chances.</li>
            <li>Keep your academic transcripts and reference letters ready.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ScholarshipFinder;
