import { useNavigate } from 'react-router-dom';
import WarliDivider from '../components/decorative/WarliDivider';
import MadhubaniCorner from '../components/decorative/MadhubaniCorner';
import { useBudget } from '../context/BudgetContext';
import HeroSection from '../components/features/HeroSection';
import GainersLosers from '../components/features/GainersLosers';
import TaxCalculator from '../components/features/TaxCalculator';
import SectorCard from '../components/ui/SectorCard';
import ChartWrapper from '../components/ui/ChartWrapper';
import ShareButton from '../components/ui/ShareButton';
import SectorPieChart from '../components/charts/SectorPieChart';
import TrendLineChart from '../components/charts/TrendLineChart';
import { getRevenueSources, getBudgetDocuments, getQuickFacts, getEconomicIndicators, getTotalBudgetTrend, INDIA_POPULATION } from '../data';
import { formatCurrency } from '../utils/formatters';
import { formatCurrency as formatCurrencyImport } from '../utils/formatters';
import {
    Heart, BookOpen, Shield, Home, TreePine, Truck,
    TrendingUp, TrendingDown, ArrowRight, Scale, Calculator,
    Bot, FileText, Landmark, DollarSign, Wallet, PieChart,
    BarChart3, Download, ExternalLink, ChevronRight, Globe,
    Lightbulb, Rocket, Calendar, User, Users, Target, TrendingUp as TrendUp,
    BarChart, PieChart as ChartPie, Sparkles, Building2, Compass, Zap, Banknote, ClipboardList
} from 'lucide-react';
import './Dashboard.css';

// Calculate per-capita spending for each sector
function calculatePerCapita(amount, population = INDIA_POPULATION) {
    // amount is in crore, population is in lakhs (1 lakh = 100,000)
    // Convert to rupees per person: (amount * 10000000) / (population * 100000)
    return Math.round(amount * 10000000 / (population * 100000));
}

export default function Dashboard() {
    const navigate = useNavigate();
    const { currentBudget, budgetTrend, fiscalYears, selectedYear, allBudgets: budgetData } = useBudget();

    // Prepare trend data for line chart
    const trendData = budgetTrend.map(item => ({
        year: item.year,
        total: item.total
    }));

    // Calculate previous year data for YoY comparison
    const currentYearIndex = fiscalYears.indexOf(selectedYear);
    const previousYear = currentYearIndex > 0 ? fiscalYears[currentYearIndex - 1] : null;
    const previousBudget = previousYear ? budgetData[previousYear] : null;

    // Enrich sectors with YoY change data
    const sectorsWithChange = currentBudget.sectors.map(sector => {
        const prevSector = previousBudget?.sectors.find(s => s.id === sector.id);
        const previousAllocation = prevSector?.allocation || 0;
        const changePercent = previousAllocation
            ? ((sector.allocation - previousAllocation) / previousAllocation * 100)
            : 0;

        return {
            ...sector,
            previousAllocation,
            changePercent,
            percentage: ((sector.allocation / currentBudget.totalBudget) * 100).toFixed(1)
        };
    });

    // Get additional data
    const revenueSources = getRevenueSources();
    const budgetDocuments = getBudgetDocuments(selectedYear);
    const quickFacts = getQuickFacts(selectedYear);
    const economicIndicators = getEconomicIndicators();

    // Calculate per-capita spending for major sectors
    const perCapitaSpending = [
        { id: 'healthcare', name: 'Healthcare', amount: calculatePerCapita(sectorsWithChange.find(s => s.id === 'healthcare')?.allocation || 0), icon: Heart, color: '#10b981' },
        { id: 'education', name: 'Education', amount: calculatePerCapita(sectorsWithChange.find(s => s.id === 'education')?.allocation || 0), icon: BookOpen, color: '#f59e0b' },
        { id: 'defense', name: 'Defense', amount: calculatePerCapita(sectorsWithChange.find(s => s.id === 'defense')?.allocation || 0), icon: Shield, color: '#f43f5e' },
        { id: 'rural', name: 'Rural Development', amount: calculatePerCapita(sectorsWithChange.find(s => s.id === 'rural')?.allocation || 0), icon: Home, color: '#22c55e' },
        { id: 'agriculture', name: 'Agriculture', amount: calculatePerCapita(sectorsWithChange.find(s => s.id === 'agriculture')?.allocation || 0), icon: TreePine, color: '#84cc16' },
        { id: 'infrastructure', name: 'Roads & Highways', amount: calculatePerCapita(sectorsWithChange.find(s => s.id === 'infrastructure')?.allocation || 0), icon: Truck, color: '#06b6d4' }
    ];

    // Total per-capita tax contribution (approximate)
    const totalTaxPerCapita = calculatePerCapita(
        (revenueSources.find(r => r.name === 'Income Tax')?.amount || 0) +
        (revenueSources.find(r => r.name === 'Corporate Tax')?.amount || 0)
    );

    return (
        <div className="dashboard">
            <HeroSection />

            {/* Per-Capita Spending - Making Numbers Relatable */}
            <section className="dashboard-section section-per-capita">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="title-icon"><Users className="text-indigo-400" size={28} /></span>
                            What Every Indian Gets
                        </h2>
                        <p className="section-subtitle">
                            Making abstract numbers relatable - your share of the budget
                        </p>
                    </div>

                    <div className="per-capita-grid">
                        {perCapitaSpending.map((item, index) => (
                            <div
                                key={item.id}
                                className="per-capita-card animate-fadeInUp"
                                style={{
                                    animationDelay: `${index * 80}ms`,
                                    '--card-color': item.color
                                }}
                            >
                                <div className="per-capita-icon"><item.icon size={32} /></div>
                                <div className="per-capita-info">
                                    <h4 className="per-capita-name">{item.name}</h4>
                                    <div className="per-capita-amount">₹{item.amount.toLocaleString()}</div>
                                    <span className="per-capita-label">per person/year</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="per-capita-summary">
                        <span className="summary-icon"><Wallet size={28} /></span>
                        <div className="summary-content">
                            <span className="summary-label">Total Tax Contribution per Indian:</span>
                            <span className="summary-value">₹{totalTaxPerCapita.toLocaleString()}</span>
                            <span className="summary-note">(Income Tax + Corporate Tax share)</span>
                        </div>
                    </div>
                </div>
            </section>

            <WarliDivider pattern="village" count={8} />

            {/* Explore by Category */}
            <section className="dashboard-section section-explore">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="title-icon"><Compass className="text-orange-400" size={28} /></span>
                            Explore the Budget
                        </h2>
                        <p className="section-subtitle">
                            Deep dive into different aspects of India's budget
                        </p>
                    </div>

                    <div className="explore-grid">
                        <div
                            className="explore-card explore-trends"
                            onClick={() => navigate('/trends')}
                        >
                            <MadhubaniCorner position="top-right" size={45} />
                            <MadhubaniCorner position="bottom-left" size={45} />
                            <div className="explore-icon"><TrendingUp size={40} /></div>
                            <h3 className="explore-title">Spending Trends</h3>
                            <p className="explore-desc">See how budget allocations have changed over the years</p>
                            <span className="explore-cta">View Trends →</span>
                        </div>

                        <div
                            className="explore-card explore-compare"
                            onClick={() => navigate('/compare')}
                        >
                            <MadhubaniCorner position="top-right" size={45} />
                            <MadhubaniCorner position="bottom-left" size={45} />
                            <div className="explore-icon"><Scale size={40} /></div>
                            <h3 className="explore-title">Compare Years</h3>
                            <p className="explore-desc">Compare budget allocations between different fiscal years</p>
                            <span className="explore-cta">Compare →</span>
                        </div>

                        <div
                            className="explore-card explore-calculator"
                            onClick={() => navigate('/calculator')}
                        >
                            <MadhubaniCorner position="top-right" size={45} />
                            <MadhubaniCorner position="bottom-left" size={45} />
                            <div className="explore-icon"><Calculator size={40} /></div>
                            <h3 className="explore-title">Your Tax Impact</h3>
                            <p className="explore-desc">Calculate how the budget affects your taxes</p>
                            <span className="explore-cta">Calculate →</span>
                        </div>
                        {/* Budget Buddy temporarily paused */}
                    </div>

                    <div className="explore-cta-container">
                        <button
                            className="btn btn-primary"
                            onClick={() => navigate('/sectors')}
                        >
                            <FileText size={18} /> View All Sectors
                        </button>
                    </div>
                </div>
            </section>

            {/* Quick Facts Grid */}
            <section className="dashboard-section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="title-icon"><Zap className="text-yellow-400" size={28} /></span>
                            Quick Insights
                        </h2>
                        <p className="section-subtitle">
                            Key takeaways from the FY {selectedYear} budget
                        </p>
                    </div>

                    <div className="quick-facts-grid">
                        {quickFacts.map((item, index) => (
                            <div
                                key={index}
                                className="quick-fact-card animate-fadeInUp"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <div className="fact-icon-wrapper">{item.icon}</div>
                                <p className="fact-card-text">{item.fact}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Budget Composition */}
            <section className="dashboard-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="title-icon"><Building2 className="text-slate-400" size={28} /></span>
                            Budget Composition
                        </h2>
                        <p className="section-subtitle">
                            How the budget is distributed across major sectors
                        </p>
                    </div>

                    <div className="composition-grid">
                        <div className="chart-panel">
                            <ChartWrapper title="Sector Allocation">
                                <SectorPieChart
                                    data={currentBudget.sectors}
                                    innerRadius={70}
                                    outerRadius={120}
                                />
                            </ChartWrapper>
                        </div>

                        <div className="sectors-grid">
                            {sectorsWithChange.slice(0, 6).map((sector, index) => (
                                <SectorCard
                                    key={sector.id}
                                    sector={sector}
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
                            <span className="title-icon"><Banknote className="text-green-400" size={28} /></span>
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
                                <div className="revenue-icon"><source.icon size={24} /></div>
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
                        <span className="insight-icon"><Lightbulb size={20} /></span>
                        <p>
                            <strong>Key Insight:</strong> Nearly 32% of the budget is funded through borrowings,
                            while direct taxes (Income Tax + Corporate Tax) contribute about 41%.
                        </p>
                    </div>
                </div>
            </section>

            <WarliDivider pattern="village" count={7} />

            {/* Economic Indicators */}
            <section className="dashboard-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="title-icon"><BarChart3 className="text-blue-400" size={28} /></span>
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
                                <span className="indicator-icon"><indicator.icon size={24} /></span>
                                <div className="indicator-content">
                                    <span className="indicator-value">{indicator.value}</span>
                                    <span className="indicator-name">{indicator.name}</span>
                                </div>
                                {(() => {
                                    const invertedNames = ['Inflation (CPI)', 'Fiscal Deficit', 'Debt-to-GDP'];
                                    const isInverted = invertedNames.includes(indicator.name);
                                    let colorClass = 'trend-stable';
                                    if (indicator.trend === 'up') {
                                        colorClass = isInverted ? 'trend-down' : 'trend-up';
                                    } else if (indicator.trend === 'down') {
                                        colorClass = isInverted ? 'trend-up' : 'trend-down';
                                    }

                                    return (
                                        <span className={`indicator-trend ${colorClass}`}>
                                            {indicator.trend === 'up' ? <TrendingUp size={20} /> : indicator.trend === 'down' ? <TrendingDown size={20} /> : '→'}
                                        </span>
                                    );
                                })()}
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
                            <span className="title-icon"><TrendingUp className="text-emerald-400" size={28} /></span>
                            5-Year Budget Trend
                        </h2>
                        <p className="section-subtitle">
                            India's total budget allocation from FY {getTotalBudgetTrend()[0].year} to {getTotalBudgetTrend()[getTotalBudgetTrend().length - 1].year}
                        </p>
                    </div>

                    <ChartWrapper title="5-Year Budget Trend">
                        <div className="trend-chart-wrapper">
                            <TrendLineChart
                                data={trendData}
                                lines={[
                                    { dataKey: 'total', name: 'Total Budget', color: '#3b82f6' }
                                ]}
                                height={350}
                            />
                        </div>
                    </ChartWrapper>

                    <div className="trend-highlights">
                        <div className="highlight-card">
                            <span className="highlight-icon"><Rocket className="text-purple-400" size={24} /></span>
                            <div className="highlight-content">
                                <span className="highlight-value">
                                    {((budgetTrend[budgetTrend.length - 1].total / budgetTrend[0].total - 1) * 100).toFixed(0)}%
                                </span>
                                <span className="highlight-label">Growth over 5 years</span>
                            </div>
                        </div>

                        <div className="highlight-card">
                            <span className="highlight-icon"><BarChart3 className="text-blue-400" size={24} /></span>
                            <div className="highlight-content">
                                <span className="highlight-value">
                                    ₹{((budgetTrend[budgetTrend.length - 1].total - budgetTrend[0].total) / 100000).toFixed(2)}L Cr
                                </span>
                                <span className="highlight-label">Absolute increase</span>
                            </div>
                        </div>

                        <div className="highlight-card">
                            <span className="highlight-icon"><Calendar className="text-orange-400" size={24} /></span>
                            <div className="highlight-content">
                                <span className="highlight-value">
                                    {(Math.pow(budgetTrend[budgetTrend.length - 1].total / budgetTrend[0].total, 1 / 4) * 100 - 100).toFixed(1)}%
                                </span>
                                <span className="highlight-label">Avg. annual growth</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-4)' }}>
                        <ShareButton
                            text={`India's budget grew ${((budgetTrend[budgetTrend.length - 1].total / budgetTrend[0].total - 1) * 100).toFixed(0)}% over the last 5 years, from ₹${(budgetTrend[0].total / 100000).toFixed(2)}L Cr to ₹${(budgetTrend[budgetTrend.length - 1].total / 100000).toFixed(2)}L Cr`}
                            label="Share this trend"
                        />
                    </div>
                </div>
            </section>

            <WarliDivider pattern="mixed" count={5} />

            {/* Tax Calculator */}
            <TaxCalculator />

            {/* Budget Documents Download */}
            <section className="dashboard-section section-download">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="title-icon"><Download className="text-teal-400" size={28} /></span>
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
                            <Globe size={18} className="inline-block mr-2" /> Visit Official India Budget Portal
                        </a>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="dashboard-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="title-icon"><Sparkles className="text-amber-400" size={28} /></span>
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
                            <span className="title-icon"><ClipboardList className="text-gray-400" size={28} /></span>
                            All Sectors
                        </h2>
                        <p className="section-subtitle">
                            Complete breakdown of budget allocations
                        </p>
                    </div>

                    <div className="all-sectors-grid">
                        {sectorsWithChange.map((sector, index) => (
                            <SectorCard
                                key={sector.id}
                                sector={sector}
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
