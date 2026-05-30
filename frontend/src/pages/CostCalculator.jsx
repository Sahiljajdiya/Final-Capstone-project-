import { useState } from 'react';
import './CostCalculator.css';

function CostCalculator() {
  const [inputs, setInputs] = useState({
    tuition: '',
    duration: '2',
    accommodation: '',
    food: '',
    transportation: '',
    insurance: '',
    books: '',
    miscellaneous: '',
  });
  const [totals, setTotals] = useState(null);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    const num = (val) => parseFloat(val) || 0;
    const yearlyOther = num(inputs.accommodation) + num(inputs.food) +
      num(inputs.transportation) + num(inputs.insurance) +
      num(inputs.books) + num(inputs.miscellaneous);
    const yearlyTotal = num(inputs.tuition) + yearlyOther;
    const programTotal = yearlyTotal * num(inputs.duration);

    setTotals({
      yearlyTuition: num(inputs.tuition),
      yearlyLiving: yearlyOther,
      yearlyTotal,
      programTotal,
      duration: num(inputs.duration),
    });
  };

  const formatCurrency = (val) =>
    new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(val);

  return (
    <div className="cost-calculator">
      <div className="container">
        <h1>Cost Calculator</h1>
        <p>Estimate the total cost of your IT education in Canada.</p>

        <form onSubmit={handleCalculate} className="cost-form">
          <h2>Tuition</h2>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="tuition">Annual Tuition (CAD)</label>
              <input type="number" name="tuition" min="0" placeholder="e.g., 15000" value={inputs.tuition} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="duration">Program Duration (years)</label>
              <select name="duration" value={inputs.duration} onChange={handleChange}>
                <option value="1">1 Year</option>
                <option value="2">2 Years</option>
                <option value="3">3 Years</option>
                <option value="4">4 Years</option>
              </select>
            </div>
          </div>

          <h2>Living Expenses (per year)</h2>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="accommodation">Accommodation/Rent</label>
              <input type="number" name="accommodation" min="0" placeholder="e.g., 8000" value={inputs.accommodation} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="food">Food & Groceries</label>
              <input type="number" name="food" min="0" placeholder="e.g., 4000" value={inputs.food} onChange={handleChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="transportation">Transportation</label>
              <input type="number" name="transportation" min="0" placeholder="e.g., 1500" value={inputs.transportation} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="insurance">Health Insurance</label>
              <input type="number" name="insurance" min="0" placeholder="e.g., 800" value={inputs.insurance} onChange={handleChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="books">Books & Supplies</label>
              <input type="number" name="books" min="0" placeholder="e.g., 1000" value={inputs.books} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="miscellaneous">Miscellaneous</label>
              <input type="number" name="miscellaneous" min="0" placeholder="e.g., 2000" value={inputs.miscellaneous} onChange={handleChange} />
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-full">Calculate Total Cost</button>
        </form>

        {totals && (
          <div className="cost-results">
            <h2>Your Cost Estimate</h2>
            <div className="results-grid">
              <div className="result-card">
                <span className="result-label">Yearly Tuition</span>
                <span className="result-value">{formatCurrency(totals.yearlyTuition)}</span>
              </div>
              <div className="result-card">
                <span className="result-label">Yearly Living Expenses</span>
                <span className="result-value">{formatCurrency(totals.yearlyLiving)}</span>
              </div>
              <div className="result-card highlight">
                <span className="result-label">Yearly Total</span>
                <span className="result-value">{formatCurrency(totals.yearlyTotal)}</span>
              </div>
              <div className="result-card highlight big">
                <span className="result-label">Total Program Cost ({totals.duration} years)</span>
                <span className="result-value">{formatCurrency(totals.programTotal)}</span>
              </div>
            </div>
            <p className="disclaimer">* Estimates are approximate. Actual costs may vary.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CostCalculator;
