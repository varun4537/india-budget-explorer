import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBudget } from '../context/BudgetContext';
import { getSectorDetails, getSectorTrend, getSchemeDetails } from '../data';
import { formatCurrency, formatPercent } from '../utils/formatters';
import TrendLineChart from '../components/charts/TrendLineChart';
import { BarChart, Bar, XAxis, YAxis, Cell, ResponsiveContainer, Tooltip, LabelList } from 'recharts';
import './SectorDetail.css';

// Helper to safely render icons that might be Lucide components or strings
const renderIcon = (IconObj, props = {}) => {
    if (!IconObj) return null;
    if (typeof IconObj === 'string') return IconObj;
    return <IconObj {...props} />;
};

// Madhubani/Santhal inspired muted color palette
const MADHUBANI_COLORS = [
    '#C75B39', // Terracotta
    '#8B4513', // Saddle Brown
    '#D4A574', // Tan
    '#6B4423', // Cocoa
    '#CD853F', // Peru
    '#A0522D', // Sienna
    '#8B6914', // Dark Goldenrod
    '#556B2F', // Dark Olive
];

// Custom Bar Label - always visible with good contrast
const CustomBarLabel = ({ x, y, width, height, value, name }) => {
    const displayName = name?.length > 20 ? name.substring(0, 20) + '...' : name;
    return (
        <g>
            <text
                x={x + 12}
                y={y + height / 2}
                dy={4}
                fill="#1a1a1a"
                fontSize={13}
                fontWeight={600}
            >
                {displayName}
            </text>
        </g>
    );
};

// Custom Tooltip with Madhubani border style
const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null;

    const data = payload[0].payload;
    return (
        <div className="madhubani-tooltip">
            <div className="tooltip-border-pattern"></div>
            <div className="tooltip-inner">
                <div className="tooltip-header">
                    <span className="tooltip-icon">{renderIcon(data.icon, { size: 16 })}</span>
                    <span className="tooltip-name">{data.name}</span>
                </div>
                <div className="tooltip-amount">{formatCurrency(data.amount)}</div>
                <div className="tooltip-desc">{data.description}</div>
                <div className="tooltip-percent">{data.percentage}% of sector budget</div>
            </div>
        </div>
    );
};

// Interactive Scheme Tag with expandable info
function SchemeTag({ scheme }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const details = getSchemeDetails(scheme);

    if (!details) {
        // Fallback for schemes without detailed info
        return <span className="scheme-tag scheme-tag-simple">{scheme}</span>;
    }

    return (
        <div className={`scheme-tag-wrapper ${isExpanded ? 'expanded' : ''}`}>
            <button
                className="scheme-tag scheme-tag-interactive"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
            >
                {scheme}
                <span className="scheme-toggle">{isExpanded ? '−' : '+'}</span>
            </button>

            {isExpanded && (
                <div className="scheme-explainer">
                    <h4 className="scheme-name">{details.name}</h4>
                    <p className="scheme-description">{details.description}</p>
                    <div className="scheme-meta">
                        <span className="scheme-year">Launched: {details.launched}</span>
                        <span className="scheme-category">{details.category}</span>
                    </div>
                    <a
                        href={details.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="scheme-link"
                    >
                        Visit Official Website →
                    </a>
                </div>
            )}
        </div>
    );
}

export default function SectorDetail() {
    const { sectorId } = useParams();
    const { currentBudget, selectedYear, fiscalYears, allBudgets } = useBudget();

    // Get sector details
    const details = getSectorDetails(sectorId);
    const trend = getSectorTrend(sectorId);

    // Get current sector allocation
    const currentSector = currentBudget.sectors.find(s => s.id === sectorId);

    // Calculate YoY change
    const previousYear = fiscalYears[fiscalYears.length - 2];
    const previousBudget = allBudgets[previousYear];
    const previousSector = previousBudget?.sectors.find(s => s.id === sectorId);
    const change = previousSector
        ? ((currentSector.allocation - previousSector.allocation) / previousSector.allocation * 100).toFixed(1)
        : 0;

    if (!details || !currentSector) {
        return (
            <div className="sector-not-found">
                <h1>Sector Not Found</h1>
                <p>The sector you're looking for doesn't exist.</p>
                <Link to="/sectors" className="btn btn-primary">View All Sectors</Link>
            </div>
        );
    }

    // Prepare bar chart data sorted by amount
    const barChartData = details.subAllocations
        .map((item, index) => ({
            ...item,
            percentage: ((item.amount / currentSector.allocation) * 100).toFixed(1),
            fill: MADHUBANI_COLORS[index % MADHUBANI_COLORS.length]
        }))
        .sort((a, b) => b.amount - a.amount);

    // Calculate percentage of total budget
    const percentOfBudget = ((currentSector.allocation / currentBudget.totalBudget) * 100).toFixed(1);

    // Related sectors (similar allocation range)
    const relatedSectors = currentBudget.sectors
        .filter(s => s.id !== sectorId)
        .sort((a, b) => Math.abs(a.allocation - currentSector.allocation) - Math.abs(b.allocation - currentSector.allocation))
        .slice(0, 4);

    return (
        <div className="sector-detail madhubani-theme">
            {/* Decorative Madhubani pattern header */}
            <div className="madhubani-border-top"></div>

            {/* Hero Section */}
            <section className="sector-hero" style={{ '--sector-color': details.color }}>
                <div className="container">
                    <Link to="/sectors" className="back-link">
                        <span className="back-arrow">←</span> All Sectors
                    </Link>

                    <div className="hero-content">
                        <div className="sector-icon-large">{renderIcon(details.icon, { size: 48 })}</div>

                        <div className="hero-info">
                            <div className="sector-badge">{details.fullName}</div>
                            <h1 className="sector-title">{details.name}</h1>
                            <p className="sector-description">{details.description}</p>
                        </div>

                        <div className="hero-stats">
                            <div className="hero-stat-main">
                                <span className="stat-label">FY {selectedYear} Allocation</span>
                                <span className="stat-value">{formatCurrency(currentSector.allocation)}</span>
                                <span className={`stat-change ${parseFloat(change) >= 0 ? 'positive' : 'negative'}`}>
                                    {parseFloat(change) >= 0 ? '↑' : '↓'} {Math.abs(change)}% from last year
                                </span>
                            </div>

                            <div className="hero-stat-grid">
                                <div className="hero-stat-small">
                                    <span className="stat-number">{percentOfBudget}%</span>
                                    <span className="stat-label">of Total Budget</span>
                                </div>
                                <div className="hero-stat-small">
                                    <span className="stat-number">₹{details.perCapita}</span>
                                    <span className="stat-label">Per Citizen</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-decoration" style={{ backgroundColor: details.color }}></div>
            </section>

            {/* Sub-allocations - Horizontal Bar Chart */}
            <section className="sector-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="title-icon">📊</span>
                            Where the Money Goes
                        </h2>
                        <p className="section-subtitle">
                            Breakdown of ₹{formatCurrency(currentSector.allocation, false)} allocated to {details.name}
                        </p>
                    </div>

                    {/* Readable Horizontal Bar Chart */}
                    <div className="allocation-chart-container">
                        <div className="chart-legend">
                            <span className="legend-hint">Click or hover for details</span>
                        </div>

                        <div className="horizontal-bars">
                            {barChartData.map((item, index) => (
                                <div
                                    key={item.name}
                                    className="bar-row animate-fadeInUp"
                                    style={{ animationDelay: `${index * 80}ms` }}
                                >
                                    <div className="bar-label">
                                        <span className="bar-icon">{renderIcon(item.icon, { size: 18 })}</span>
                                        <span className="bar-name">{item.name}</span>
                                    </div>

                                    <div className="bar-track">
                                        <div
                                            className="bar-fill"
                                            style={{
                                                width: `${item.percentage}%`,
                                                backgroundColor: item.fill,
                                                minWidth: '40px'
                                            }}
                                        >
                                            <span className="bar-percent">{item.percentage}%</span>
                                        </div>
                                    </div>

                                    <div className="bar-amount">
                                        {formatCurrency(item.amount)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sub-allocation Cards with Madhubani borders */}
                    <div className="suballoc-grid">
                        {details.subAllocations.map((item, index) => (
                            <div
                                key={item.name}
                                className="suballoc-card madhubani-card animate-fadeInUp"
                                style={{
                                    animationDelay: `${index * 50}ms`,
                                    '--card-accent': MADHUBANI_COLORS[index % MADHUBANI_COLORS.length]
                                }}
                            >
                                <div className="card-pattern-corner"></div>
                                <div className="suballoc-header">
                                    <span className="suballoc-icon">{renderIcon(item.icon, { size: 24 })}</span>
                                    <div className="suballoc-info">
                                        <h4 className="suballoc-name">{item.name}</h4>
                                        <p className="suballoc-desc">{item.description}</p>
                                    </div>
                                </div>
                                <div className="suballoc-amount">
                                    <span className="amount-value">{formatCurrency(item.amount)}</span>
                                    <span className="amount-percent">
                                        {((item.amount / currentSector.allocation) * 100).toFixed(1)}%
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Decorative divider */}
            <div className="madhubani-divider">
                <span className="divider-pattern">◆ ◇ ◆ ◇ ◆</span>
            </div>

            {/* 5-Year Trend */}
            <section className="sector-section section-alt">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="title-icon">📈</span>
                            5-Year Trend
                        </h2>
                        <p className="section-subtitle">
                            How {details.name} allocation has changed from FY {fiscalYears[0]} to FY {fiscalYears[fiscalYears.length - 1]}
                        </p>
                    </div>

                    <div className="trend-chart-card">
                        <TrendLineChart
                            data={trend}
                            lines={[{ dataKey: 'allocation', name: details.name, color: '#C75B39' }]}
                            height={350}
                        />
                    </div>

                    <div className="trend-stats">
                        <div className="trend-stat">
                            <span className="trend-label">FY {fiscalYears[0]}</span>
                            <span className="trend-value">{formatCurrency(trend[0].allocation)}</span>
                        </div>
                        <div className="trend-arrow">
                            <span className="arrow-line"></span>
                            {(() => {
                                const growthPercent = ((trend[trend.length - 1].allocation / trend[0].allocation - 1) * 100);
                                const isPositive = growthPercent >= 0;
                                return (
                                    <span className={`arrow-growth ${isPositive ? 'growth-positive' : 'growth-negative'}`}>
                                        {isPositive ? '+' : ''}{growthPercent.toFixed(0)}%
                                    </span>
                                );
                            })()}
                        </div>
                        <div className="trend-stat">
                            <span className="trend-label">FY {fiscalYears[fiscalYears.length - 1]}</span>
                            <span className="trend-value">{formatCurrency(trend[trend.length - 1].allocation)}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Insights */}
            <section className="sector-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="title-icon">💡</span>
                            Key Insights
                        </h2>
                    </div>

                    <div className="insights-grid">
                        {details.insights.map((insight, index) => (
                            <div
                                key={index}
                                className="insight-card madhubani-card animate-fadeInUp"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <span className="insight-number">{index + 1}</span>
                                <p className="insight-text">{insight}</p>
                            </div>
                        ))}
                    </div>

                    {details.keySchemes.length > 0 && (
                        <div className="schemes-section">
                            <h3 className="schemes-title">Key Government Schemes</h3>
                            <p className="schemes-hint">Click on a scheme to learn more →</p>
                            <div className="schemes-list">
                                {details.keySchemes.map((scheme, index) => (
                                    <SchemeTag key={index} scheme={scheme} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Related Sectors */}
            <section className="sector-section section-alt">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="title-icon">🔗</span>
                            Explore Other Sectors
                        </h2>
                    </div>

                    <div className="related-grid">
                        {relatedSectors.map((sector, index) => (
                            <Link
                                key={sector.id}
                                to={`/sectors/${sector.id}`}
                                className="related-card animate-fadeInUp"
                                style={{
                                    animationDelay: `${index * 50}ms`,
                                    '--card-color': sector.color
                                }}
                            >
                                <span className="related-icon">{renderIcon(sector.icon, { size: 24 })}</span>
                                <div className="related-info">
                                    <h4 className="related-name">{sector.name}</h4>
                                    <span className="related-amount">{formatCurrency(sector.allocation)}</span>
                                </div>
                                <span className="related-arrow">→</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom border pattern */}
            <div className="madhubani-border-bottom"></div>
        </div>
    );
}
