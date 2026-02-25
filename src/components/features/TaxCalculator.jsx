import { useState, useMemo } from 'react';
import { useBudget } from '../../context/BudgetContext';
import { formatCurrency, formatPerCapita } from '../../utils/formatters';
import { getPerCapita } from '../../data';
import './TaxCalculator.css';

const TAX_SLABS = [
    { min: 0, max: 250000, rate: 0, label: '0 - 2.5 Lakh' },
    { min: 250001, max: 500000, rate: 0.05, label: '2.5 - 5 Lakh' },
    { min: 500001, max: 1000000, rate: 0.20, label: '5 - 10 Lakh' },
    { min: 1000001, max: Infinity, rate: 0.30, label: 'Above 10 Lakh' }
];

function calculateTax(income) {
    // Income Tax Act, 2025 - Simplified 4-tier structure
    if (income <= 250000) return 0;
    if (income <= 500000) return (income - 250000) * 0.05;
    if (income <= 1000000) return 12500 + (income - 500000) * 0.20;
    return 112500 + (income - 1000000) * 0.30;
}

export default function TaxCalculator() {
    const [income, setIncome] = useState(1000000);
    const { currentBudget } = useBudget();

    const taxAmount = useMemo(() => calculateTax(income), [income]);

    // Calculate how much of your tax goes to each sector
    const sectorBreakdown = useMemo(() => {
        const totalBudget = currentBudget.sectors.reduce((sum, s) => sum + s.allocation, 0);

        return currentBudget.sectors
            .map(sector => ({
                ...sector,
                percentage: (sector.allocation / totalBudget) * 100,
                yourShare: Math.round((sector.allocation / totalBudget) * taxAmount)
            }))
            .sort((a, b) => b.yourShare - a.yourShare);
    }, [currentBudget, taxAmount]);

    const formatIncome = (value) => {
        return value.toLocaleString('en-IN');
    };

    const presets = [
        { label: '5 Lakh', value: 500000 },
        { label: '10 Lakh', value: 1000000 },
        { label: '15 Lakh', value: 1500000 },
        { label: '25 Lakh', value: 2500000 }
    ];

    return (
        <section className="tax-calculator">
            <div className="calc-header">
                <h2 className="calc-title">
                    <span className="title-icon">💰</span>
                    Your Tax, Your Contribution
                </h2>
                <p className="calc-subtitle">
                    See exactly where your tax rupees go in the Union Budget
                </p>
            </div>

            <div className="calc-content">
                <div className="calc-input-section">
                    <label className="input-label">Your Annual Income</label>

                    <div className="income-input-wrapper">
                        <span className="currency-prefix">₹</span>
                        <input
                            type="text"
                            className="income-input"
                            value={formatIncome(income)}
                            onChange={(e) => {
                                const value = parseInt(e.target.value.replace(/,/g, '')) || 0;
                                setIncome(Math.min(value, 100000000));
                            }}
                        />
                    </div>

                    <input
                        type="range"
                        className="income-slider"
                        min="0"
                        max="5000000"
                        step="50000"
                        value={income}
                        onChange={(e) => setIncome(parseInt(e.target.value))}
                    />

                    <div className="preset-buttons">
                        {presets.map(preset => (
                            <button
                                key={preset.value}
                                className={`preset-btn ${income === preset.value ? 'active' : ''}`}
                                onClick={() => setIncome(preset.value)}
                            >
                                {preset.label}
                            </button>
                        ))}
                    </div>

                    <div className="tax-summary">
                        <div className="tax-summary-row">
                            <span className="summary-label">Estimated Tax (New Regime)</span>
                            <span className="summary-value">₹{formatIncome(Math.round(taxAmount))}</span>
                        </div>
                        <div className="tax-summary-row">
                            <span className="summary-label">Effective Tax Rate</span>
                            <span className="summary-value">
                                {income > 0 ? ((taxAmount / income) * 100).toFixed(1) : 0}%
                            </span>
                        </div>
                    </div>
                </div>

                <div className="calc-breakdown-section">
                    <h3 className="breakdown-title">Your Contribution to Each Sector</h3>

                    <div className="sector-breakdown-list">
                        {sectorBreakdown.slice(0, 8).map((sector, index) => (
                            <div
                                key={sector.id}
                                className="breakdown-sector-item"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <div className="sector-row">
                                    <span className="sector-icon">
                                        {(() => { const Icon = sector.icon; return Icon && <Icon size={20} />; })()}
                                    </span>
                                    <span className="sector-name">{sector.name}</span>
                                    <span className="sector-share">
                                        ₹{formatIncome(sector.yourShare)}
                                    </span>
                                </div>
                                <div className="sector-bar-container">
                                    <div
                                        className="sector-bar"
                                        style={{
                                            width: `${sector.percentage}%`,
                                            backgroundColor: sector.color
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {taxAmount === 0 && (
                        <div className="no-tax-message">
                            <span className="no-tax-icon">🎉</span>
                            <p>Great news! With an income of ₹{formatIncome(income)}, you fall under the tax-free slab in the new tax regime.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
