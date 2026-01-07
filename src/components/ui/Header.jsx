import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useBudget } from '../../context/BudgetContext';
import './Header.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const { theme, toggleTheme, selectedYear, setSelectedYear, fiscalYears } = useBudget();

    const navLinks = [
        { path: '/', label: 'Dashboard', icon: '📊' },
        { path: '/trends', label: 'Trends', icon: '📈' },
        { path: '/sectors', label: 'Sectors', icon: '🏛️' },
        { path: '/compare', label: 'Compare', icon: '⚖️' },
        { path: '/calculator', label: 'Your Share', icon: '💰' },
        { path: '/budget-buddy', label: 'Ask AI', icon: '🤖' }
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo */}
                <Link to="/" className="header-logo">
                    <span className="logo-icon">🇮🇳</span>
                    <div className="logo-text">
                        <span className="logo-title">Budget Explorer</span>
                        <span className="logo-subtitle">India Union Budget</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="header-nav desktop-nav">
                    {navLinks.map(link => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                        >
                            <span className="nav-icon">{link.icon}</span>
                            <span className="nav-label">{link.label}</span>
                        </Link>
                    ))}
                </nav>

                {/* Controls */}
                <div className="header-controls">
                    {/* Year Selector */}
                    <select
                        className="year-select"
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        aria-label="Select fiscal year"
                    >
                        {fiscalYears.map(year => (
                            <option key={year} value={year}>FY {year}</option>
                        ))}
                    </select>

                    {/* Theme Toggle */}
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    >
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="menu-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                {navLinks.map(link => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <span className="nav-icon">{link.icon}</span>
                        <span className="nav-label">{link.label}</span>
                    </Link>
                ))}
            </nav>
        </header>
    );
}
