import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Landmark, FileText, ArrowRight } from 'lucide-react';
import { useBudget } from '../../context/BudgetContext';
import { keySchemeDetails } from '../../data/schemes';
import './GlobalSearch.css';

export default function GlobalSearch({ isOpen, onClose }) {
    const [query, setQuery] = useState('');
    const { currentBudget } = useBudget();
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const modalRef = useRef(null);

    // Focus input when modal opens
    useEffect(() => {
        if (isOpen) {
            // eslint-disable-next-line
            setQuery(''); // Clear when opening
            if (inputRef.current) {
                setTimeout(() => inputRef.current.focus(), 100);
            }
        }
    }, [isOpen]);

    // Handle click outside to close
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    // Derive results directly from query
    let results = { sectors: [], schemes: [] };

    if (query.trim()) {
        const lowerQuery = query.toLowerCase();

        // Search in sectors
        const matchedSectors = currentBudget?.sectors?.filter(s =>
            s.name.toLowerCase().includes(lowerQuery) ||
            s.id.toLowerCase().includes(lowerQuery)
        ) || [];

        // Search in schemes
        const matchedSchemes = Object.entries(keySchemeDetails).filter(([key, scheme]) =>
            key.toLowerCase().includes(lowerQuery) ||
            scheme.name.toLowerCase().includes(lowerQuery) ||
            scheme.shortName.toLowerCase().includes(lowerQuery) ||
            scheme.category.toLowerCase().includes(lowerQuery)
        ).map(([key, scheme]) => ({ id: key, ...scheme }));

        results = {
            sectors: matchedSectors.slice(0, 5), // Limit to 5 results
            schemes: matchedSchemes.slice(0, 5) // Limit to 5 results
        };
    }

    if (!isOpen) return null;

    const handleResultClick = (type, item) => {
        onClose();
        if (type === 'sector') {
            navigate(`/sectors/${item.id}`);
        } else if (type === 'scheme') {
            // Can route to a dedicated scheme page or sectors page
            navigate(`/sectors`);
        }
    };

    return (
        <div className="search-overlay">
            <div className="search-modal animate-fade-in" ref={modalRef}>
                <div className="search-header">
                    <Search className="search-icon text-gray-400" />
                    <input
                        ref={inputRef}
                        type="text"
                        className="search-input"
                        placeholder="Search for sectors, schemes, or topics..."
                        value={query}
                        aria-label="Search budget data"
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="close-btn" onClick={onClose} aria-label="Close search">
                        <X size={20} />
                    </button>
                </div>

                <div className="search-body">
                    {!query.trim() && (
                        <div className="search-empty-state">
                            <p>Try searching for "Defense", "Health", "PM-KISAN", or "Infrastructure"</p>
                        </div>
                    )}

                    {query.trim() && results.sectors.length === 0 && results.schemes.length === 0 && (
                        <div className="search-empty-state">
                            <p>No results found for "{query}"</p>
                        </div>
                    )}

                    <div className="search-results">
                        {results.sectors.length > 0 && (
                            <div className="result-group">
                                <h3 className="result-group-title">Sectors</h3>
                                {results.sectors.map(sector => (
                                    <button
                                        key={sector.id}
                                        className="result-item"
                                        onClick={() => handleResultClick('sector', sector)}
                                    >
                                        <div className="result-item-icon" style={{ color: sector.color }}>
                                            <Landmark size={20} />
                                        </div>
                                        <div className="result-item-content">
                                            <div className="result-item-title">{sector.name}</div>
                                            <div className="result-item-desc">Budget Sector</div>
                                        </div>
                                        <ArrowRight size={16} className="result-item-arrow" />
                                    </button>
                                ))}
                            </div>
                        )}

                        {results.schemes.length > 0 && (
                            <div className="result-group">
                                <h3 className="result-group-title">Government Schemes</h3>
                                {results.schemes.map(scheme => (
                                    <a
                                        key={scheme.id}
                                        href={scheme.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="result-item"
                                        onClick={onClose}
                                    >
                                        <div className="result-item-icon text-blue-500">
                                            <FileText size={20} />
                                        </div>
                                        <div className="result-item-content">
                                            <div className="result-item-title">{scheme.shortName} - {scheme.name}</div>
                                            <div className="result-item-desc">Scheme • {scheme.category}</div>
                                        </div>
                                        <ArrowRight size={16} className="result-item-arrow" />
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
