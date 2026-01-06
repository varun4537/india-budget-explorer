import { useState, useMemo } from 'react';
import { useBudget } from '../../context/BudgetContext';
import { formatCurrency, formatPerCapita } from '../../utils/formatters';
import { getPerCapita } from '../../data';
import './TaxCalculator.css';

const TAX_SLABS = [
    { min: 0, max: 300000, rate: 0, label: '0 - 3 Lakh' },
    { min: 300001, max: 700000, rate: 0.05, label: '3 - 7 Lakh' },
    { min: 700001, max: 1000000, rate: 0.10, label: '7 - 10 Lakh' },
    { min: 1000001, max: 1200000, rate: 0.15, label: '10 - 12 Lakh' },
    { min: 1200001, max: 1500000, rate: 0.20, label: '12 - 15 Lakh' },
    { min: 1500001, max: Infinity, rate: 0.30, label: 'Above 15 Lakh' }
];

function calculateTax(income) {
    let tax = 0;
    let remainingIncome = income;

    for (const slab of TAX_SLABS) {
        if (remainingIncome <= 0) break;

        const slabWidth = slab.max === Infinity ? remainingIncome : Math.min(slab.max - slab.min + 1, remainingIncome);
        const taxableInThisSlab = remainingIncome >= slab.min ? slabWidth : 0;

        if (income > slab.min) {
            const taxableAmount = Math.min(income - slab.min, slab.max - slab.min);
            tax += taxableAmount * slab.rate;
        }
    }

    // Simplified calculation
    if (income <= 300000) return 0;
    if (income <= 700000) return (income - 300000) * 0.05;
    if (income <= 1000000) return 20000 + (income - 700000) * 0.10;
    if (income <= 1200000) return 50000 + (income - 1000000) * 0.15;
    if (income <= 1500000) return 80000 + (income - 1200000) * 0.20;
    return 140000 + (income - 1500000) * 0.30;
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
                                    <span className="sector-icon">{sector.icon}</span>
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
