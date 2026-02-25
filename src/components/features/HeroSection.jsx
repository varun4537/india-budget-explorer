import { useState, useEffect } from 'react';
import { useBudget } from '../../context/BudgetContext';
import { formatCurrency } from '../../utils/formatters';
import Mandala from '../decorative/Mandala';
import WarliDivider from '../decorative/WarliDivider';
import './HeroSection.css';

// Inline Live Population Counter Component
function InlinePopulationCounter() {
    // Base population: ~1.42 billion as of Jan 1, 2025
    // Growth rate: ~0.83% per year = ~11.8 million per year
    // That's about 0.374 people net increase per second
    const BASE_POPULATION = 1420000000;
    const BASE_DATE = new Date('2025-01-01T00:00:00Z').getTime();
    const GROWTH_PER_SECOND = 11800000 / (365 * 24 * 60 * 60);

    const [population, setPopulation] = useState(BASE_POPULATION);

    useEffect(() => {
        const updatePopulation = () => {
            const now = Date.now();
            const secondsElapsed = (now - BASE_DATE) / 1000;
            const currentPop = BASE_POPULATION + Math.floor(secondsElapsed * GROWTH_PER_SECOND);
            setPopulation(currentPop);
        };

        updatePopulation();
        const interval = setInterval(updatePopulation, 100);

        return () => clearInterval(interval);
    }, []);

    // Format with Indian numbering: 1,43,19,63,000
    const formatIndianNumber = (num) => {
        const str = num.toString();
        let result = '';
        let count = 0;

        for (let i = str.length - 1; i >= 0; i--) {
            if (count === 3 || (count > 3 && (count - 3) % 2 === 0)) {
                result = ',' + result;
            }
            result = str[i] + result;
            count++;
        }

        return result;
    };

    return (
        <span className="inline-population">
            <span className="pop-number">
                {formatIndianNumber(population)}
            </span>
            <span className="pop-live-badge">
                <span className="live-dot"></span>
                LIVE
            </span>
        </span>
    );
}

export default function HeroSection() {
    const { currentBudget, previousBudget, selectedYear } = useBudget();

    const totalChange = previousBudget
        ? ((currentBudget.totalBudget - previousBudget.totalBudget) / previousBudget.totalBudget * 100).toFixed(1)
        : 0;

    // Calculate where each ₹100 goes
    const rupeeBreakdown = currentBudget.sectors
        .map(sector => ({
            ...sector,
            per100: (sector.allocation / currentBudget.totalBudget * 100).toFixed(2)
        }))
        .sort((a, b) => b.per100 - a.per100);

    return (
        <>
            <section className="hero">
                <div className="hero-background">
                    <div className="hero-gradient" />
                    <div className="hero-pattern" />
                </div>

                <div className="hero-layout">
                    {/* Rotating Mandala - Left Side (desktop only) */}
                    <div className="hero-mandala">
                        <Mandala size={200} className="mandala-hero" />
                    </div>

                    {/* Main Content - Right Side */}
                    <div className="hero-content">
                        <div className="hero-badge">
                            <span className="badge-icon">📊</span>
                            <span>Union Budget FY {selectedYear}</span>
                        </div>

                        <h1 className="hero-title">
                            <span className="title-line">Your Budget.</span>
                            <span className="title-line title-accent">Your Money.</span>
                            <span className="title-line">Your Country.</span>
                        </h1>

                        <div className="hero-population-container">
                            <p className="hero-description-text">
                                Explore how India allocates ₹{formatCurrency(currentBudget.totalBudget, false)} for the welfare and development of
                            </p>

                            <InlinePopulationCounter />

                            <p className="hero-description-text">
                                citizens of India
                            </p>
                        </div>

                        <div className="hero-stats">
                            <div className="hero-stat hero-stat-main">
                                <div className="stat-label">Total Budget</div>
                                <div className="stat-amount">
                                    <span className="currency-symbol">₹</span>
                                    <span className="stat-number">
                                        {(currentBudget.totalBudget / 100000).toFixed(2)}
                                    </span>
                                    <span className="stat-unit">Lakh Crore</span>
                                </div>
                                {totalChange !== 0 && (
                                    <div className={`stat-change ${totalChange > 0 ? 'positive' : 'negative'}`}>
                                        {totalChange > 0 ? '↑' : '↓'} {Math.abs(totalChange)}% from last year
                                    </div>
                                )}
                            </div>

                            <div className="hero-stat-grid">
                                <div className="hero-stat-small">
                                    <div className="stat-icon">📅</div>
                                    <div className="stat-info">
                                        <span className="stat-value">{selectedYear}</span>
                                        <span className="stat-label">Fiscal Year</span>
                                    </div>
                                </div>

                                <div className="hero-stat-small">
                                    <div className="stat-icon">🏛️</div>
                                    <div className="stat-info">
                                        <span className="stat-value">{currentBudget.sectors.length}</span>
                                        <span className="stat-label">Sectors</span>
                                    </div>
                                </div>

                                <div className="hero-stat-small">
                                    <div className="stat-icon">📈</div>
                                    <div className="stat-info">
                                        <span className="stat-value">{currentBudget.fiscalDeficit.percentGDP}%</span>
                                        <span className="stat-label">Fiscal Deficit</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Warli Divider */}
                <WarliDivider pattern="dancers" count={5} />

                {/* Where Every ₹100 Goes */}
                <div className="rupee-breakdown">
                    <h3 className="breakdown-title">
                        <span className="title-icon">💰</span>
                        Where Every ₹100 Goes
                        <span className="breakdown-subtitle">(vs Last Year)</span>
                    </h3>

                    <div className="breakdown-bars">
                        {rupeeBreakdown.slice(0, 8).map((sector, index) => {
                            // Calculate previous year's per-100 value
                            let changeText = null;
                            let changeClass = '';

                            if (previousBudget) {
                                const prevSector = previousBudget.sectors.find(s => s.id === sector.id);
                                if (prevSector) {
                                    const prevPer100 = (prevSector.allocation / previousBudget.totalBudget * 100);
                                    const currentPer100 = parseFloat(sector.per100);
                                    const diff = currentPer100 - prevPer100;

                                    if (Math.abs(diff) >= 0.01) {
                                        changeText = `${diff > 0 ? '↑' : '↓'} ${Math.abs(diff).toFixed(2)}p`;
                                        changeClass = diff > 0 ? 'positive' : 'negative';
                                    } else {
                                        changeText = '=';
                                        changeClass = 'neutral';
                                    }
                                }
                            }

                            return (
                                <div
                                    key={sector.id}
                                    className="breakdown-item animate-fadeInUp"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <div className="breakdown-header">
                                        <span className="breakdown-icon">
                                            {(() => { const Icon = sector.icon; return Icon && <Icon size={16} />; })()}
                                        </span>
                                        <span className="breakdown-name">{sector.name}</span>
                                        <div className="breakdown-values">
                                            {changeText && (
                                                <span className={`breakdown-change ${changeClass}`}>
                                                    {changeText}
                                                </span>
                                            )}
                                            <span className="breakdown-amount">₹{sector.per100}</span>
                                        </div>
                                    </div>
                                    <div className="breakdown-bar-container">
                                        <div
                                            className="breakdown-bar"
                                            style={{
                                                width: `${sector.per100}%`,
                                                backgroundColor: sector.color
                                            }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
