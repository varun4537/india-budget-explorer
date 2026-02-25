import { useState } from 'react';
import { useBudget } from '../context/BudgetContext';
import ComparisonBarChart from '../components/charts/ComparisonBarChart';
import { formatCurrency, formatPercent } from '../utils/formatters';
import './Compare.css';

export default function Compare() {
    const { allBudgets, fiscalYears } = useBudget();
    const [year1, setYear1] = useState(fiscalYears[fiscalYears.length - 2]);
    const [year2, setYear2] = useState(fiscalYears[fiscalYears.length - 1]);

    const budget1 = allBudgets[year1];
    const budget2 = allBudgets[year2];

    // Calculate comparison data
    const comparisonData = budget2.sectors.map(sector2 => {
        const sector1 = budget1.sectors.find(s => s.id === sector2.id);
        const alloc1 = sector1?.allocation || 0;
        const alloc2 = sector2.allocation;
        const change = alloc2 - alloc1;
        const changePercent = alloc1 ? ((change / alloc1) * 100) : 0;

        return {
            id: sector2.id,
            name: sector2.name,
            icon: sector2.icon,
            color: sector2.color,
            allocation1: alloc1,
            allocation2: alloc2,
            change,
            changePercent
        };
    }).sort((a, b) => b.changePercent - a.changePercent);

    const totalChange = budget2.totalBudget - budget1.totalBudget;
    const totalChangePercent = ((totalChange / budget1.totalBudget) * 100).toFixed(1);

    return (
        <div className="compare-page">
            <div className="container">
                <div className="page-header">
                    <h1 className="page-title">
                        <span className="title-icon">⚖️</span>
                        Compare Budgets
                    </h1>
                    <p className="page-subtitle">
                        Compare budget allocations between any two fiscal years
                    </p>
                </div>

                {/* Year Selectors */}
                <div className="year-selectors">
                    <div className="year-selector">
                        <label>From Year</label>
                        <select value={year1} onChange={(e) => setYear1(e.target.value)}>
                            {fiscalYears.map(year => (
                                <option key={year} value={year}>FY {year}</option>
                            ))}
                        </select>
                    </div>

                    <div className="vs-badge">VS</div>

                    <div className="year-selector">
                        <label>To Year</label>
                        <select value={year2} onChange={(e) => setYear2(e.target.value)}>
                            {fiscalYears.map(year => (
                                <option key={year} value={year}>FY {year}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Overall Summary */}
                <div className="comparison-summary">
                    <div className="summary-card">
                        <span className="summary-label">FY {year1}</span>
                        <span className="summary-value">₹{(budget1.totalBudget / 100000).toFixed(2)}L Cr</span>
                    </div>

                    <div className="summary-change">
                        <span className={`change-arrow ${totalChange >= 0 ? 'positive' : 'negative'}`}>
                            {totalChange >= 0 ? '↑' : '↓'}
                        </span>
                        <span className={`change-value ${totalChange >= 0 ? 'positive' : 'negative'}`}>
                            {totalChange >= 0 ? '+' : ''}{formatCurrency(totalChange)}
                        </span>
                        <span className={`change-percent ${totalChange >= 0 ? 'positive' : 'negative'}`}>
                            ({totalChange >= 0 ? '+' : ''}{totalChangePercent}%)
                        </span>
                    </div>

                    <div className="summary-card">
                        <span className="summary-label">FY {year2}</span>
                        <span className="summary-value">₹{(budget2.totalBudget / 100000).toFixed(2)}L Cr</span>
                    </div>
                </div>

                {/* Sector Comparison Table */}
                <section className="comparison-section">
                    <h2 className="section-title">Sector-wise Comparison</h2>

                    <div className="comparison-table">
                        <div className="table-header">
                            <div className="col-sector">Sector</div>
                            <div className="col-year">FY {year1}</div>
                            <div className="col-year">FY {year2}</div>
                            <div className="col-change">Change</div>
                        </div>

                        {comparisonData.map((sector, index) => (
                            <div
                                key={sector.id}
                                className="table-row animate-fadeInUp"
                                style={{ animationDelay: `${index * 30}ms` }}
                            >
                                <div className="col-sector">
                                    <span className="sector-icon">
                                        {(() => { const Icon = sector.icon; return Icon && <Icon size={20} />; })()}
                                    </span>
                                    <span className="sector-name">{sector.name}</span>
                                </div>
                                <div className="col-year">
                                    {formatCurrency(sector.allocation1)}
                                </div>
                                <div className="col-year">
                                    {formatCurrency(sector.allocation2)}
                                </div>
                                <div className="col-change">
                                    <span className={`change-badge ${sector.changePercent >= 0 ? 'positive' : 'negative'}`}>
                                        {sector.changePercent >= 0 ? '↑' : '↓'} {Math.abs(sector.changePercent).toFixed(1)}%
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Visual Comparison */}
                <section className="comparison-section">
                    <h2 className="section-title">Visual Comparison</h2>

                    <div className="chart-card">
                        <ComparisonBarChart
                            data={comparisonData.slice(0, 8).map(s => ({
                                name: s.name.length > 15 ? s.name.substring(0, 15) + '...' : s.name,
                                value: s.allocation2,
                                color: s.color,
                                icon: s.icon,
                                changePercent: s.changePercent
                            }))}
                            dataKey="value"
                            nameKey="name"
                            height={400}
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}
