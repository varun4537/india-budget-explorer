import { useBudget } from '../../context/BudgetContext';
import { formatCurrency, formatPercent } from '../../utils/formatters';
import { BarChart3, Rocket, TrendingDown } from 'lucide-react';
import './GainersLosers.css';
import './GainersLosers.css';

export default function GainersLosers() {
    const { gainers, losers } = useBudget();

    return (
        <section className="gainers-losers">
            <div className="section-header">
                <h2 className="section-title">
                    <span className="title-icon"><BarChart3 size={24} className="text-secondary" /></span>
                    Budget Winners & Losers
                </h2>
                <p className="section-subtitle">
                    Year-over-year changes in sector allocations
                </p>
            </div>

            <div className="gl-grid">
                {/* Gainers */}
                <div className="gl-column gl-gainers">
                    <h3 className="gl-column-title">
                        <span className="gl-icon"><Rocket size={20} className="text-emerald-400" /></span>
                        Top Gainers
                    </h3>

                    <div className="gl-list">
                        {gainers.map((sector, index) => (
                            <div
                                key={sector.id}
                                className="gl-item animate-fadeInUp"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="gl-item-header">
                                    <span className="gl-item-icon">
                                        {(() => { const Icon = sector.icon; return Icon && <Icon size={24} />; })()}
                                    </span>
                                    <div className="gl-item-info">
                                        <span className="gl-item-name">{sector.name}</span>
                                        <span className="gl-item-amount">{formatCurrency(sector.allocation)}</span>
                                    </div>
                                </div>

                                <div className="gl-item-change positive">
                                    <span className="change-arrow">↑</span>
                                    <span className="change-percent">{formatPercent(sector.changePercent)}</span>
                                    <span className="change-absolute">
                                        (+{formatCurrency(sector.change, false)})
                                    </span>
                                </div>

                                <div className="gl-progress-bar">
                                    <div
                                        className="gl-progress positive"
                                        style={{ width: `${Math.min(sector.changePercent * 3, 100)}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Losers */}
                <div className="gl-column gl-losers">
                    <h3 className="gl-column-title">
                        <span className="gl-icon"><TrendingDown size={20} className="text-rose-400" /></span>
                        Reduced Allocations
                    </h3>

                    <div className="gl-list">
                        {losers.map((sector, index) => (
                            <div
                                key={sector.id}
                                className="gl-item animate-fadeInUp"
                                style={{ animationDelay: `${index * 100 + 300}ms` }}
                            >
                                <div className="gl-item-header">
                                    <span className="gl-item-icon">
                                        {(() => { const Icon = sector.icon; return Icon && <Icon size={24} />; })()}
                                    </span>
                                    <div className="gl-item-info">
                                        <span className="gl-item-name">{sector.name}</span>
                                        <span className="gl-item-amount">{formatCurrency(sector.allocation)}</span>
                                    </div>
                                </div>

                                <div className={`gl-item-change ${sector.changePercent < 0 ? 'negative' : 'neutral'}`}>
                                    <span className="change-arrow">{sector.changePercent < 0 ? '↓' : '→'}</span>
                                    <span className="change-percent">{formatPercent(sector.changePercent)}</span>
                                    <span className="change-absolute">
                                        ({sector.change >= 0 ? '+' : ''}{formatCurrency(sector.change, false)})
                                    </span>
                                </div>

                                <div className="gl-progress-bar">
                                    <div
                                        className={`gl-progress ${sector.changePercent < 0 ? 'negative' : 'neutral'}`}
                                        style={{ width: `${Math.min(Math.abs(sector.changePercent) * 3, 100)}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
