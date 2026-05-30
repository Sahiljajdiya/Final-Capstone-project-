import { useState } from 'react';
import './ProgramFinder.css';

const samplePrograms = [
  {
    id: 1,
    name: 'Computer Programming & Analysis',
    institution: 'Humber College',
    location: 'Toronto, ON',
    duration: '3 years',
    tuition: '$16,500/year',
    focus: 'Software Development, Data Analysis',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Cybersecurity',
    institution: 'Seneca College',
    location: 'Toronto, ON',
    duration: '2 years',
    tuition: '$15,800/year',
    focus: 'Network Security, Ethical Hacking',
    rating: 4.7,
  },
  {
    id: 3,
    name: 'Data Analytics',
    institution: 'St. Clair College',
    location: 'Windsor, ON',
    duration: '1 year',
    tuition: '$14,200/year',
    focus: 'Big Data, Machine Learning, Visualization',
    rating: 4.3,
  },
  {
    id: 4,
    name: 'Cloud Computing',
    institution: 'George Brown College',
    location: 'Toronto, ON',
    duration: '2 years',
    tuition: '$15,500/year',
    focus: 'AWS, Azure, Cloud Architecture',
    rating: 4.4,
  },
];

function ProgramFinder() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFocus, setSelectedFocus] = useState('all');

  const filteredPrograms = samplePrograms.filter((program) => {
    const matchesSearch = program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.institution.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFocus = selectedFocus === 'all' || program.focus.toLowerCase().includes(selectedFocus.toLowerCase());
    return matchesSearch && matchesFocus;
  });

  return (
    <div className="program-finder">
      <div className="container">
        <h1>Find IT Programs</h1>
        <p>Search and filter IT programs from Canadian colleges and universities.</p>

        <div className="filters">
          <input
            type="text"
            placeholder="Search programs or institutions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <select
            value={selectedFocus}
            onChange={(e) => setSelectedFocus(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Focus Areas</option>
            <option value="software">Software Development</option>
            <option value="data">Data Analysis</option>
            <option value="security">Cybersecurity</option>
            <option value="cloud">Cloud Computing</option>
          </select>
        </div>

        <p className="results-count">{filteredPrograms.length} program(s) found</p>

        <div className="programs-grid">
          {filteredPrograms.map((program) => (
            <div key={program.id} className="program-card">
              <h3>{program.name}</h3>
              <p className="institution">{program.institution}</p>
              <p className="location">{program.location}</p>
              <div className="program-details">
                <span>Duration: {program.duration}</span>
                <span>Tuition: {program.tuition}</span>
              </div>
              <p className="focus-area">Focus: {program.focus}</p>
              <div className="rating">
                {'★'.repeat(Math.round(program.rating))}
                <span className="rating-stars">{'☆'.repeat(5 - Math.round(program.rating))}</span>
                <span>({program.rating})</span>
              </div>
              <button className="btn btn-primary btn-full">View Details</button>
            </div>
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <p className="no-results">No programs found. Try adjusting your search.</p>
        )}
      </div>
    </div>
  );
}

export default ProgramFinder;
