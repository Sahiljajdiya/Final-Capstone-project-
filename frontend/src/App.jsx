import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProgramFinder from './pages/ProgramFinder';
import EligibilityChecker from './pages/EligibilityChecker';
import CostCalculator from './pages/CostCalculator';
import ScholarshipFinder from './pages/ScholarshipFinder';
import ComparePrograms from './pages/ComparePrograms';
import CareerPathway from './pages/CareerPathway';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program-finder" element={<ProgramFinder />} />
        <Route path="/eligibility-checker" element={<EligibilityChecker />} />
        <Route path="/cost-calculator" element={<CostCalculator />} />
        <Route path="/scholarship-finder" element={<ScholarshipFinder />} />
        <Route path="/compare-programs" element={<ComparePrograms />} />
        <Route path="/career-pathway" element={<CareerPathway />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
