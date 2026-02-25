import React, { useState } from 'react';
import { Book, Search } from 'lucide-react';
import { budgetGlossary } from '../data/glossary';
import './Glossary.css';

export default function Glossary() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredGlossary = budgetGlossary.filter(item =>
        item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="glossary-page animate-fade-in container">
            <header className="page-header">
                <div className="header-icon glossary">
                    <Book className="w-8 h-8" />
                </div>
                <div>
                    <h1 className="page-title">Budget Glossary</h1>
                    <p className="page-subtitle">Understand key economic and budget terminologies</p>
                </div>
            </header>

            <div className="glossary-search-container">
                <div className="search-input-wrapper">
                    <Search className="search-icon w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        className="glossary-search-input"
                        placeholder="Search for a term or definition..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="glossary-grid">
                {filteredGlossary.length > 0 ? (
                    filteredGlossary.map((item, index) => (
                        <div key={index} className="glossary-card card">
                            <h3 className="glossary-term">{item.term}</h3>
                            <p className="glossary-definition">{item.definition}</p>
                        </div>
                    ))
                ) : (
                    <div className="no-results">
                        <p>No terms found matching "{searchTerm}"</p>
                    </div>
                )}
            </div>
        </div>
    );
}
