import { useState } from 'react';
import './ScholarshipFinder.css';

const scholarships = [
  {
    id: 1,
    name: 'Vanier Canada Graduate Scholarships',
    amount: '$50,000/year',
    deadline: 'November 2025',
    eligibility: 'PhD students',
    focus: 'All fields',
    url: 'https://www.canada.ca/en/services/education/ed-funding/graduate-student-funding/vanier.html',
    tags: ['Federal', 'PhD', 'Merit-based'],
    description: 'Canada' + "'s most prestigious doctoral scholarship for outstanding PhD students."
  },
  {
    id: 2,
    name: 'Ontario Trillium Scholarship',
    amount: '$15,000/year',
    deadline: 'December 2025',
    eligibility: 'International Master/PhD',
    focus: 'All fields',
    url: 'https://osap.gov.on.ca/OSAPPortal/en/Home.aspx',
    tags: ['Provincial', 'International', 'Merit-based'],
    description: 'Supports top international students pursuing graduate studies in Ontario.'
  },
  {
    id: 3,
    name: 'Humber International Scholarships',
    amount: '$2,000-5,000',
    deadline: 'January 2026',
    eligibility: 'International students',
    focus: 'IT programs',
    url: 'https://humber.ca/admissions/international-students/financial-aid-scholarships.html',
    tags: ['College', 'International', 'IT'],
    description: 'Awards for international students enrolled in Humber College IT programs.'
  },
  {
    id: 4,
    name: 'Seneca International Awards',
    amount: '$1,500-3,000',
    deadline: 'February 2026',
    eligibility: 'International students',
    focus: 'All programs',
    url: 'https://senecapolytechnic.ca/admissions/international/financial-aid.html',
    tags: ['College', 'International', 'General'],
    description: 'Financial awards available to international students at Seneca Polytechnic.'
  },
  {
    id: 5,
    name: 'NSERC Canadian Graduate Scholarships',
    amount: '$17,500/year',
    deadline: 'October 2025',
    eligibility: 'Master students',
    focus: 'Science & Tech',
    url: 'https://www.nserc-crsng.gc.ca/students-etudiants/PGS-BES/CGS-D-CESP-D_eng.asp',
    tags: ['Federal', 'Research', 'STEM'],
    description: 'Supports high-calibre scholars in natural sciences and engineering.'
  },
  {
    id: 6,
    name: "St. Clair International Scholarship",
    amount: '$2,000',
    deadline: 'March 2026',
    eligibility: 'International students',
    focus: 'Data Analytics',
    url: 'https://stclaircollege.ca/future-students/international/scholarships',
    tags: ['College', 'International', 'Data'],
    description: 'Dedicated scholarship for international students in Data Analytics programs.'
  },
];

function ScholarshipFinder() {
  const [search, setSearch] = useState('');
  const [amountFilter, setAmountFilter] = useState('all');
  const [focusFilter, setFocusFilter] = useState('all');

  const focusOptions = ['all', 'IT', 'Data', 'STEM', 'General', 'Research', 'Federal', 'Provincial'];

  const filtered = scholarships.filter((s) => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
                        s.eligibility.toLowerCase().includes(search.toLowerCase()) ||
                        s.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const matchAmount = amountFilter === 'all' ||
                        (amountFilter === 'high' && s.amount.includes('15,000')) ||
                        (amountFilter === 'mid' && !s.amount.includes('15,000') && !s.amount.includes('50,000')) ||
                        (amountFilter === 'low' && (s.amount.includes('1,500') || s.amount.includes('2,000')));
    const matchFocus = focusFilter === 'all' || s.focus.toLowerCase().includes(focusFilter.toLowerCase()) ||
                       s.tags.some(t => t.toLowerCase().includes(focusFilter.toLowerCase()));
    return matchSearch && matchAmount && matchFocus;
  });

  const lastUpdated = 'May 2025';

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="scholarship-page">
      <div className="page-header">
        <h1>Scholarship Finder</h1>
        <p>Find scholarships and financial aid for your IT studies in Canada.</p>
      </div>

      <div className="filters">
        <div className="filter-group">
          <label htmlFor="search">Search</label>
          <input
            id="search"
            type="text"
            placeholder="Search by name, eligibility or tag..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <label htmlFor="amount">Amount</label>
          <select id="amount" value={amountFilter} onChange={(e) => setAmountFilter(e.target.value)}>
            <option value="all">Any Amount</option>
            <option value="high">$15,000+</option>
            <option value="mid">$2,000 - $5,000</option>
            <option value="low">Under $2,000</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="focus">Focus</label>
          <select id="focus" value={focusFilter} onChange={(e) => setFocusFilter(e.target.value)}>
            <option value="all">Any Focus</option>
            {focusOptions.filter(o => o !== 'all').map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="results">
        <p className="result-count">{filtered.length} scholarship(s) found — Last updated: {lastUpdated}</p>

        <div className="scholarships-list">
          {filtered.map((scholarship) => (
            <div key={scholarship.id} className="scholarship-card">
              <div className="card-header">
                <h3>{scholarship.name}</h3>
                <span className="amount-badge">{scholarship.amount}</span>
              </div>
              <p className="description">{scholarship.description}</p>
              <div className="meta">
                <span>Eligibility: {scholarship.eligibility}</span>
                <span>Focus: {scholarship.focus}</span>
              </div>
              <div className="tags">
                {scholarship.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="card-footer">
                <span className="deadline">Deadline: {scholarship.deadline}</span>
                <button className="btn-view" onClick={() => openLink(scholarship.url)}>Apply Now</button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="no-results">
            <div className="icon">🔍</div>
            <h3>No scholarships found</h3>
            <p>Try adjusting your search or filter criteria.</p>
          </div>
        )}

        <div className="tips-section">
          <h2>Tips for Applying</h2>
          <ul>
            <li>Start your applications early — many deadlines are months before the program starts.</li>
            <li>Check eligibility requirements carefully before applying.</li>
            <li>Apply to multiple scholarships to increase your chances.</li>
            <li>Keep your academic transcripts and reference letters ready.</li>
            <li>Proofread your essays and statements multiple times.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ScholarshipFinder;
