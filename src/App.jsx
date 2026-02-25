import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { BudgetProvider } from './context/BudgetContext';
import Header from './components/ui/Header';
import Breadcrumbs from './components/ui/Breadcrumbs';
import BackToTop from './components/ui/BackToTop';
import Dashboard from './pages/Dashboard';
import Trends from './pages/Trends';
import Sectors from './pages/Sectors';
import SectorDetail from './pages/SectorDetail';
import Compare from './pages/Compare';
import Calculator from './pages/Calculator';
import WhatsNew from './pages/WhatsNew';
import Glossary from './pages/Glossary';
// BudgetBuddy temporarily paused
// import BudgetBuddy from './pages/BudgetBuddy';
import './App.css';

// ScrollToTop component - resets scroll position on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red', backgroundColor: '#fee' }}>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

function AppContent() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <main className="main-content">
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/sectors/:sectorId" element={<SectorDetail />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/whats-new" element={<WhatsNew />} />
          <Route path="/glossary" element={<Glossary />} />
          {/* Budget Buddy temporarily paused */}
          {/* <Route path="/budget-buddy" element={<BudgetBuddy />} /> */}
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
      <BackToTop />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <BudgetProvider>
          <AppContent />
        </BudgetProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;

