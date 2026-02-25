import React from 'react';
import { Sparkles, TrendingUp, TrendingDown } from 'lucide-react';
import { useBudget } from '../context/BudgetContext';
import { getGainersLosers } from '../data';
import './WhatsNew.css';

export default function WhatsNew() {
    const { latestBudget } = useBudget();
    const { gainers, losers } = getGainersLosers();

    const formatCurrency = (val) => {
        return `₹${val.toLocaleString('en-IN')} Cr`;
    };

    return (
        <div className="whats-new-page animate-fade-in container">
            <header className="page-header">
                <div className="header-icon whats-new">
                    <Sparkles className="w-8 h-8" />
                </div>
                <div>
                    <h1 className="page-title">What's New in {latestBudget.fiscalYear}</h1>
                    <p className="page-subtitle">Key highlights, policy shifts, and major allocation changes</p>
                </div>
            </header>

            <div className="whats-new-grid">
                <section className="highlights-section card">
                    <div className="card-header">
                        <h2 className="card-title">Top Policy Announcements</h2>
                    </div>
                    <ul className="highlights-list">
                        {latestBudget.highlights.map((highlight, index) => (
                            <li key={index} className="highlight-item">
                                <Sparkles className="highlight-icon" size={18} />
                                <span>{highlight}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <div className="changes-section">
                    <section className="gainers-card card">
                        <div className="card-header">
                            <h2 className="card-title text-green-600 flex items-center gap-2">
                                <TrendingUp size={20} /> Top Gainers
                            </h2>
                            <p className="text-sm text-gray-500">Highest % increase in allocation vs previous year</p>
                        </div>
                        <div className="sector-changes-list">
                            {gainers.map(sector => (
                                <div key={sector.id} className="sector-change-item">
                                    <div className="sector-change-header">
                                        <div className="flex items-center gap-2">
                                            <span style={{ color: sector.color }}><sector.icon size={18} /></span>
                                            <span className="font-medium">{sector.name}</span>
                                        </div>
                                        <span className="change-badge positive">+{sector.changePercent}%</span>
                                    </div>
                                    <div className="sector-change-amounts">
                                        <span>{formatCurrency(sector.previousAllocation)}</span>
                                        <TrendingUp size={14} className="text-gray-400" />
                                        <span>{formatCurrency(sector.allocation)}</span>
                                    </div>
                                    <div className="text-xs text-green-600 font-medium">
                                        +{formatCurrency(sector.change)} increase
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="losers-card card mt-4">
                        <div className="card-header">
                            <h2 className="card-title text-red-600 flex items-center gap-2">
                                <TrendingDown size={20} /> Largest Reductions
                            </h2>
                            <p className="text-sm text-gray-500">Highest % decrease in allocation vs previous year</p>
                        </div>
                        <div className="sector-changes-list">
                            {losers.map(sector => (
                                <div key={sector.id} className="sector-change-item">
                                    <div className="sector-change-header">
                                        <div className="flex items-center gap-2">
                                            <span style={{ color: sector.color }}><sector.icon size={18} /></span>
                                            <span className="font-medium">{sector.name}</span>
                                        </div>
                                        <span className="change-badge negative">{sector.changePercent}%</span>
                                    </div>
                                    <div className="sector-change-amounts">
                                        <span>{formatCurrency(sector.previousAllocation)}</span>
                                        <TrendingDown size={14} className="text-gray-400" />
                                        <span>{formatCurrency(sector.allocation)}</span>
                                    </div>
                                    <div className="text-xs text-red-600 font-medium">
                                        {formatCurrency(sector.change)} reduction
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
