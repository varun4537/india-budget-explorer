import { useBudget } from '../context/BudgetContext';
import TrendLineChart from '../components/charts/TrendLineChart';
import ComparisonBarChart from '../components/charts/ComparisonBarChart';
import { getSectorTrend, sectorsList } from '../data';
import { formatCurrency } from '../utils/formatters';
import './Trends.css';

export default function Trends() {
    const { budgetTrend, fiscalYears, currentBudget } = useBudget();

    // Get trends for key sectors
    const sectorTrends = ['defense', 'healthcare', 'education', 'infrastructure', 'railways'].map(id => {
        const trend = getSectorTrend(id);
        const sector = currentBudget.sectors.find(s => s.id === id);
        return {
            id,
            name: sector?.name || id,
            color: sector?.color || '#3b82f6',
            icon: sector?.icon || '📊',
            data: trend
        };
    });

    // Prepare multi-line data
    const multiLineData = fiscalYears.map(year => {
        const result = { year };
        sectorTrends.forEach(sector => {
            const yearData = sector.data.find(d => d.year === year);
            result[sector.id] = yearData?.allocation || 0;
        });
        return result;
    });

    return (
        <div className="trends-page">
            <div className="container">
                <div className="page-header">
                    <h1 className="page-title">
                        <span className="title-icon">📈</span>
                        Budget Trends
                    </h1>
                    <p className="page-subtitle">
                        Analyze how India's budget allocations have evolved over the past 5 years
                    </p>
                </div>

                {/* Total Budget Trend */}
                <section className="trends-section">
                    <h2 className="section-title">Total Budget Growth</h2>
                    <div className="chart-card">
                        <TrendLineChart
                            data={budgetTrend}
                            lines={[
                                { dataKey: 'total', name: 'Total Budget', color: '#3b82f6' }
                            ]}
                            height={350}
                        />
                    </div>

                    <div className="stats-row">
                        <div className="trend-stat">
                            <span className="stat-label">Starting Budget</span>
                            <span className="stat-value">₹{(budgetTrend[0].total / 100000).toFixed(2)}L Cr</span>
                            <span className="stat-year">FY {fiscalYears[0]}</span>
                        </div>
                        <div className="trend-stat trend-stat-arrow">
                            <span className="arrow-icon">→</span>
                            <span className="growth-badge">
                                +{((budgetTrend[budgetTrend.length - 1].total / budgetTrend[0].total - 1) * 100).toFixed(0)}%
                            </span>
                        </div>
                        <div className="trend-stat">
                            <span className="stat-label">Current Budget</span>
                            <span className="stat-value">₹{(budgetTrend[budgetTrend.length - 1].total / 100000).toFixed(2)}L Cr</span>
                            <span className="stat-year">FY {fiscalYears[fiscalYears.length - 1]}</span>
                        </div>
                    </div>
                </section>

                {/* Sector-wise Trends */}
                <section className="trends-section">
                    <h2 className="section-title">Key Sector Trends</h2>

                    <div className="chart-card">
                        <TrendLineChart
                            data={multiLineData}
                            lines={sectorTrends.map(s => ({
                                dataKey: s.id,
                                name: s.name,
                                color: s.color
                            }))}
                            height={400}
                        />
                    </div>
                </section>

                {/* Individual Sector Cards */}
                <section className="trends-section">
                    <h2 className="section-title">Sector Deep Dive</h2>

                    <div className="sector-trends-grid">
                        {sectorTrends.map(sector => {
                            const firstValue = sector.data[0].allocation;
                            const lastValue = sector.data[sector.data.length - 1].allocation;
                            const growth = ((lastValue / firstValue - 1) * 100).toFixed(1);

                            return (
                                <div key={sector.id} className="sector-trend-card">
                                    <div className="sector-trend-header">
                                        <span className="sector-icon">{sector.icon}</span>
                                        <h3 className="sector-name">{sector.name}</h3>
                                        <span
                                            className={`growth-badge ${parseFloat(growth) >= 0 ? 'positive' : 'negative'}`}
                                        >
                                            {parseFloat(growth) >= 0 ? '↑' : '↓'} {Math.abs(growth)}%
                                        </span>
                                    </div>

                                    <div className="mini-chart">
                                        <TrendLineChart
                                            data={sector.data}
                                            lines={[{ dataKey: 'allocation', name: sector.name, color: sector.color }]}
                                            height={150}
                                            showGrid={false}
                                        />
                                    </div>

                                    <div className="sector-trend-stats">
                                        <div className="mini-stat">
                                            <span className="mini-label">FY {fiscalYears[0]}</span>
                                            <span className="mini-value">{formatCurrency(firstValue)}</span>
                                        </div>
                                        <span className="mini-arrow">→</span>
                                        <div className="mini-stat">
                                            <span className="mini-label">FY {fiscalYears[fiscalYears.length - 1]}</span>
                                            <span className="mini-value">{formatCurrency(lastValue)}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
}
