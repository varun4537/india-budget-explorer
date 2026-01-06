import { useBudget } from '../context/BudgetContext';
import HeroSection from '../components/features/HeroSection';
import GainersLosers from '../components/features/GainersLosers';
import TaxCalculator from '../components/features/TaxCalculator';
import SectorCard from '../components/ui/SectorCard';
import SectorPieChart from '../components/charts/SectorPieChart';
import TrendLineChart from '../components/charts/TrendLineChart';
import { getRevenueSources, getBudgetDocuments, getQuickFacts, getEconomicIndicators } from '../data';
import { formatCurrency } from '../utils/formatters';
import './Dashboard.css';

export default function Dashboard() {
    const { currentBudget, budgetTrend, fiscalYears, selectedYear } = useBudget();

    // Prepare trend data for line chart
    const trendData = budgetTrend.map(item => ({
        year: item.year,
        total: item.total
    }));

    // Get additional data
    const revenueSources = getRevenueSources();
    const budgetDocuments = getBudgetDocuments(selectedYear);
    const quickFacts = getQuickFacts(selectedYear);
    const economicIndicators = getEconomicIndicators();

    return (
        <div className="dashboard">
            <HeroSection />

            {/* Quick Facts Ticker */}
            <section className="quick-facts-section">
                <div className="quick-facts-scroll">
                    {quickFacts.concat(quickFacts).map((item, index) => (
                        <div key={index} className="quick-fact-item">
                            <span className="fact-icon">{item.icon}</span>
                            <span className="fact-text">{item.fact}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Budget Composition */}
            <section className="dashboard-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="title-icon">🏛️</span>
                            Budget Composition
                        </h2>
                        <p className="section-subtitle">
                            How the budget is distributed across major sectors
                        </p>
                    </div>

                    <div className="composition-grid">
                        <div className="chart-panel">
                            <SectorPieChart
                                data={currentBudget.sectors}
                                innerRadius={70}
                                outerRadius={120}
                            />
                        </div>

                        <div className="sectors-grid">
                            {currentBudget.sectors.slice(0, 6).map((sector, index) => (
                                <SectorCard
                                    key={sector.id}
                                    sector={{
                                        ...sector,
                                        percentage: ((sector.allocation / currentBudget.totalBudget) * 100).toFixed(1)
                                    }}
                                    size="compact"
                                    animate={true}
                                    animationDelay={index * 100}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Revenue Sources - Where the Money Comes From */}
            <section className="dashboard-section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="title-icon">💵</span>
                            Where the Money Comes From
                        </h2>
                        <p className="section-subtitle">
                            Revenue sources that fund the ₹{formatCurrency(currentBudget.totalBudget, false)} budget
                        </p>
                    </div>

                    <div className="revenue-grid">
                        {revenueSources.map((source, index) => (
                            <div
                                key={source.name}
                                className="revenue-card animate-fadeInUp"
                                style={{
                                    animationDelay: `${index * 80}ms`,
                                    '--card-color': source.color
                                }}
                            >
                                <div className="revenue-icon">{source.icon}</div>
                                <div className="revenue-info">
                                    <h4 className="revenue-name">{source.name}</h4>
                                    <div className="revenue-amount">₹{(source.amount / 100000).toFixed(2)} L Cr</div>
                                </div>
                                <div className="revenue-percent">
                                    <span className="percent-value">{source.percent}%</span>
                                    <div className="percent-bar">
                                        <div
                                            className="percent-fill"
                                            style={{
                                                width: `${source.percent * 3}%`,
                                                backgroundColor: source.color
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="revenue-insight">
                        <span className="insight-icon">💡</span>
                        <p>
                            <strong>Key Insight:</strong> Nearly 32% of the budget is funded through borrowings,
                            while direct taxes (Income Tax + Corporate Tax) contribute about 41%.
                        </p>
                    </div>
                </div>
            </section>

            {/* Economic Indicators */}
            <section className="dashboard-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="title-icon">📊</span>
                            Key Economic Indicators
                        </h2>
                        <p className="section-subtitle">
                            India's economic health at a glance for FY {selectedYear}
                        </p>
                    </div>

                    <div className="indicators-grid">
                        {Object.values(economicIndicators).map((indicator, index) => (
                            <div
                                key={indicator.name}
                                className="indicator-card animate-fadeInUp"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <span className="indicator-icon">{indicator.icon}</span>
                                <div className="indicator-content">
                                    <span className="indicator-value">{indicator.value}</span>
                                    <span className="indicator-name">{indicator.name}</span>
                                </div>
                                <span className={`indicator-trend trend-${indicator.trend}`}>
                                    {indicator.trend === 'up' ? '↑' : indicator.trend === 'down' ? '↓' : '→'}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gainers & Losers */}
            <GainersLosers />

            {/* Budget Trend */}
            <section className="dashboard-section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="title-icon">📈</span>
                            5-Year Budget Trend
                        </h2>
                        <p className="section-subtitle">
                            India's total budget allocation from FY {fiscalYears[0]} to {fiscalYears[fiscalYears.length - 1]}
                        </p>
                    </div>

                    <div className="trend-chart-wrapper">
                        <TrendLineChart
                            data={trendData}
                            lines={[
                                { dataKey: 'total', name: 'Total Budget', color: '#3b82f6' }
                            ]}
                            height={350}
                        />
                    </div>

                    <div className="trend-highlights">
                        <div className="highlight-card">
                            <span className="highlight-icon">🚀</span>
                            <div className="highlight-content">
                                <span className="highlight-value">
                                    {((budgetTrend[budgetTrend.length - 1].total / budgetTrend[0].total - 1) * 100).toFixed(0)}%
                                </span>
                                <span className="highlight-label">Growth over 5 years</span>
                            </div>
                        </div>

                        <div className="highlight-card">
                            <span className="highlight-icon">📊</span>
                            <div className="highlight-content">
                                <span className="highlight-value">
                                    ₹{((budgetTrend[budgetTrend.length - 1].total - budgetTrend[0].total) / 100000).toFixed(2)}L Cr
                                </span>
                                <span className="highlight-label">Absolute increase</span>
                            </div>
                        </div>

                        <div className="highlight-card">
                            <span className="highlight-icon">📅</span>
                            <div className="highlight-content">
                                <span className="highlight-value">
                                    {(Math.pow(budgetTrend[budgetTrend.length - 1].total / budgetTrend[0].total, 1 / 4) * 100 - 100).toFixed(1)}%
                                </span>
                                <span className="highlight-label">Avg. annual growth</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tax Calculator */}
            <TaxCalculator />

            {/* Budget Documents Download */}
            <section className="dashboard-section section-download">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="title-icon">📥</span>
                            Download Budget Documents
                        </h2>
                        <p className="section-subtitle">
                            Official budget documents from Union Budget FY {selectedYear}
                        </p>
                    </div>

                    <div className="documents-grid">
                        {budgetDocuments.map((doc, index) => (
                            <a
                                key={doc.name}
                                href={doc.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="document-card animate-fadeInUp"
                                style={{ animationDelay: `${index * 80}ms` }}
                            >
                                <span className="doc-icon">{doc.icon}</span>
                                <div className="doc-info">
                                    <h4 className="doc-name">{doc.name}</h4>
                                    <p className="doc-description">{doc.description}</p>
                                    <span className="doc-size">{doc.size}</span>
                                </div>
                                <span className="doc-download">↓</span>
                            </a>
                        ))}
                    </div>

                    <div className="official-link">
                        <a
                            href="https://www.indiabudget.gov.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                        >
                            🌐 Visit Official India Budget Portal
                        </a>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="dashboard-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="title-icon">✨</span>
                            Budget Highlights
                        </h2>
                        <p className="section-subtitle">
                            Key announcements from Union Budget FY {currentBudget.fiscalYear}
                        </p>
                    </div>

                    <div className="highlights-grid">
                        {currentBudget.highlights.map((highlight, index) => (
                            <div
                                key={index}
                                className="highlight-item animate-fadeInUp"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <span className="highlight-number">{index + 1}</span>
                                <p className="highlight-text">{highlight}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Sectors */}
            <section className="dashboard-section section-alt">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="title-icon">📋</span>
                            All Sectors
                        </h2>
                        <p className="section-subtitle">
                            Complete breakdown of budget allocations
                        </p>
                    </div>

                    <div className="all-sectors-grid">
                        {currentBudget.sectors.map((sector, index) => (
                            <SectorCard
                                key={sector.id}
                                sector={{
                                    ...sector,
                                    percentage: ((sector.allocation / currentBudget.totalBudget) * 100).toFixed(1)
                                }}
                                animate={true}
                                animationDelay={index * 50}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
