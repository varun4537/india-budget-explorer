import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BudgetProvider } from './context/BudgetContext';
import Header from './components/ui/Header';
import Dashboard from './pages/Dashboard';
import Trends from './pages/Trends';
import Sectors from './pages/Sectors';
import SectorDetail from './pages/SectorDetail';
import Compare from './pages/Compare';
import Calculator from './pages/Calculator';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <BudgetProvider>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/trends" element={<Trends />} />
              <Route path="/sectors" element={<Sectors />} />
              <Route path="/sectors/:sectorId" element={<SectorDetail />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/calculator" element={<Calculator />} />
            </Routes>
          </main>
          <footer className="footer">
            <div className="container">
              <div className="footer-content">
                <div className="footer-brand">
                  <span className="footer-logo">🇮🇳</span>
                  <span className="footer-title">India Budget Explorer</span>
                </div>
                <p className="footer-text">
                  Data sourced from official Union Budget documents at indiabudget.gov.in
                </p>
                <p className="footer-disclaimer">
                  For educational purposes. Verify data with official sources.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </BudgetProvider>
    </BrowserRouter>
  );
}

export default App;
