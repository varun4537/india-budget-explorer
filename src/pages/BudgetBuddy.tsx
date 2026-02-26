import { useState, useRef, useEffect } from 'react';
import { chatWithBudgetBuddy, getSuggestedQuestions, getQuickStats } from '../services/geminiService';
import ChatMessage from '../components/chat/ChatMessage';
import { Bot, MessageSquare, AlertTriangle } from 'lucide-react';
import './BudgetBuddy.css';

export default function BudgetBuddy() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const quickStats = getQuickStats();
    const suggestedQuestions = getSuggestedQuestions();

    // Scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Focus input on load
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        setError(null);

        // Add user message
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            const response = await chatWithBudgetBuddy(userMessage, messages);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: response.text,
                parts: response.parts
            }]);
        } catch (err) {
            setError(err.message);
            // Remove the user message if API failed
            setMessages(prev => prev.slice(0, -1));
        } finally {
            setIsLoading(false);
        }
    };

    const handleSuggestionClick = (question) => {
        setInput(question);
        inputRef.current?.focus();
    };

    return (
        <div className="budget-buddy-page">
            <div className="container">
                {/* Header */}
                <div className="buddy-header">
                    <div className="buddy-avatar"><Bot className="text-blue-400" size={40} /></div>
                    <div className="buddy-info">
                        <h1 className="buddy-title">Budget Buddy</h1>
                        <p className="buddy-subtitle">
                            Your AI assistant for India's Union Budget • Ask me anything!
                        </p>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="quick-stats-bar">
                    <div className="quick-stat">
                        <span className="stat-label">FY 2025-26 Budget</span>
                        <span className="stat-value">{quickStats.totalBudget}</span>
                    </div>
                    <div className="quick-stat">
                        <span className="stat-label">Fiscal Deficit</span>
                        <span className="stat-value">{quickStats.fiscalDeficit} of GDP</span>
                    </div>
                    <div className="quick-stat">
                        <span className="stat-label">Sectors</span>
                        <span className="stat-value">{quickStats.sectorCount}</span>
                    </div>
                    <div className="quick-stat">
                        <span className="stat-label">Top Sector</span>
                        <span className="stat-value">{quickStats.topSector}</span>
                    </div>
                </div>

                {/* Chat Container */}
                <div className="chat-container">
                    {/* Messages */}
                    <div className="messages-container">
                        {messages.length === 0 ? (
                            <div className="welcome-state">
                                <div className="welcome-icon"><MessageSquare className="text-blue-400" size={48} /></div>
                                <h2 className="welcome-title">Ask me about India's Budget!</h2>
                                <p className="welcome-text">
                                    I can help you understand budget allocations, compare sectors,
                                    explain government schemes, and even generate charts.
                                </p>

                                <div className="suggested-questions">
                                    <h3 className="suggestions-title">Try asking:</h3>
                                    <div className="suggestions-grid">
                                        {suggestedQuestions.slice(0, 6).map((q, i) => (
                                            <button
                                                key={i}
                                                className="suggestion-chip"
                                                onClick={() => handleSuggestionClick(q)}
                                            >
                                                {q}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                {messages.map((msg, i) => (
                                    <ChatMessage key={i} message={msg} />
                                ))}

                                {isLoading && (
                                    <div className="message assistant-message loading-message">
                                        <div className="message-avatar"><Bot className="text-blue-400" size={24} /></div>
                                        <div className="message-content">
                                            <div className="typing-indicator">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div ref={messagesEndRef} />
                            </>
                        )}
                    </div>

                    {/* Error Display */}
                    {error && (
                        <div className="error-banner">
                            <span className="error-icon"><AlertTriangle size={20} /></span>
                            <span>{error}</span>
                            <button
                                className="error-dismiss"
                                onClick={() => setError(null)}
                            >
                                ✕
                            </button>
                        </div>
                    )}

                    {/* Input Form */}
                    <form className="chat-input-form" onSubmit={handleSubmit}>
                        <input
                            ref={inputRef}
                            type="text"
                            className="chat-input"
                            placeholder="Ask about budget allocations, trends, schemes..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            className="send-button"
                            disabled={!input.trim() || isLoading}
                        >
                            {isLoading ? '...' : '→'}
                        </button>
                    </form>
                </div>

                {/* Footer note */}
                <p className="buddy-footer">
                    Budget Buddy uses AI to provide insights. Always verify important data with official sources at
                    <a href="https://www.indiabudget.gov.in" target="_blank" rel="noopener noreferrer"> indiabudget.gov.in</a>
                </p>
            </div>
        </div>
    );
}
