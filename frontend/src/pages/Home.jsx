import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const features = [
    {
      icon: '&#128269;',
      title: 'Program Finder',
      description: 'Discover IT programs that match your interests, budget, and career goals.',
      link: '/program-finder',
    },
    {
      icon: '&#9989;',
      title: 'Eligibility Checker',
      description: 'Check if you meet the admission requirements for your desired programs.',
      link: '/eligibility-checker',
    },
    {
      icon: '&#128176;',
      title: 'Cost Calculator',
      description: 'Estimate tuition, living expenses, and total cost of your education.',
      link: '/cost-calculator',
    },
    {
      icon: '&#127891;',
      title: 'Scholarship Finder',
      description: 'Find scholarships and financial aid opportunities for international students.',
      link: '/scholarship-finder',
    },
    {
      icon: '&#128200;',
      title: 'Compare Programs',
      description: 'Side-by-side comparison of programs to make informed decisions.',
      link: '/compare-programs',
    },
    {
      icon: '&#128218;',
      title: 'Career Pathway',
      description: 'Explore career paths and job prospects after completing your program.',
      link: '/career-pathway',
    },
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <h1>Find Your Perfect IT Program in Canada</h1>
          <p className="hero-subtitle">Smart College IT Program Finder helps you explore, compare, and choose the right Information Technology program for your future.</p>
          <div className="hero-buttons">
            <Link to="/program-finder" className="btn btn-primary">Find Programs</Link>
            <Link to="/eligibility-checker" className="btn btn-secondary">Check Eligibility</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>What We Offer</h2>
          <p className="section-description">Everything you need to make an informed decision about your education.</p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <span className="feature-icon" dangerouslySetInnerHTML={{ __html: feature.icon }}></span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <Link to={feature.link} className="feature-link">Learn more &#8594;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Start Your Journey?</h2>
          <p>Take the first step towards your IT career in Canada.</p>
          <Link to="/program-finder" className="btn btn-primary btn-large">Get Started Now</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
