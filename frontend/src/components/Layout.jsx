import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

function Layout({ children }) {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/program-finder', label: 'Program Finder' },
    { path: '/eligibility-checker', label: 'Eligibility Checker' },
    { path: '/cost-calculator', label: 'Cost Calculator' },
    { path: '/scholarship-finder', label: 'Scholarships' },
    { path: '/compare-programs', label: 'Compare' },
    { path: '/career-pathway', label: 'Career Path' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="layout">
      <header className="header">
        <div className="header-container">
          <Link to="/" className="logo">
            <span className="logo-icon">&#127891;</span>
            <span className="logo-text">Smart College Finder</span>
          </Link>
          <nav className="nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>Smart College IT Program Finder</h4>
            <p>Your AI-powered guide to finding the perfect IT and computing program in Canada.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <Link to="/program-finder">Program Finder</Link>
            <Link to="/cost-calculator">Cost Calculator</Link>
            <Link to="/scholarship-finder">Scholarships</Link>
            <Link to="/about">About Us</Link>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@smartcollegefinder.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Smart College IT Program Finder. All rights reserved.</p>
          <p>Capstone Project &mdash; Data Analytics for Business</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
