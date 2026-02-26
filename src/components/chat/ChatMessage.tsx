import { useMemo } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { User, Bot } from 'lucide-react';
import './ChatMessage.css';

// Colors for charts
const CHART_COLORS = ['#C75B39', '#FF9933', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#14b8a6', '#f59e0b'];

// Simple markdown parser
function parseMarkdown(text) {
    if (!text) return '';

    return text
        // Headers
        .replace(/^### (.*$)/gim, '<h4>$1</h4>')
        .replace(/^## (.*$)/gim, '<h3>$1</h3>')
        .replace(/^# (.*$)/gim, '<h2>$1</h2>')
        // Bold
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Italic
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        // Code blocks
        .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
        // Inline code
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        // Lists
        .replace(/^\- (.*$)/gim, '<li>$1</li>')
        .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
        // Line breaks
        .replace(/\n/g, '<br />');
}

// Dynamic chart component
function DynamicChart({ config }) {
    const { type, title, data } = config;

    if (!data || !Array.isArray(data) || data.length === 0) {
        return <div className="chart-error">Invalid chart data</div>;
    }

    const renderChart = () => {
        switch (type) {
            case 'bar':
                return (
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                        <XAxis dataKey="name" tick={{ fill: '#999', fontSize: 12 }} />
                        <YAxis tick={{ fill: '#999', fontSize: 12 }} />
                        <Tooltip
                            contentStyle={{ background: '#1a1a2e', border: '1px solid #333' }}
                            labelStyle={{ color: '#fff' }}
                        />
                        <Bar dataKey="value" fill="#C75B39">
                            {data.map((entry, index) => (
                                <Cell key={index} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                );

            case 'line':
                return (
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                        <XAxis dataKey="name" tick={{ fill: '#999', fontSize: 12 }} />
                        <YAxis tick={{ fill: '#999', fontSize: 12 }} />
                        <Tooltip
                            contentStyle={{ background: '#1a1a2e', border: '1px solid #333' }}
                            labelStyle={{ color: '#fff' }}
                        />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#C75B39"
                            strokeWidth={3}
                            dot={{ fill: '#C75B39', strokeWidth: 2 }}
                        />
                    </LineChart>
                );

            case 'pie':
                return (
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            dataKey="value"
                            nameKey="name"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            labelLine={false}
                        >
                            {data.map((entry, index) => (
                                <Cell key={index} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{ background: '#1a1a2e', border: '1px solid #333' }}
                        />
                        <Legend />
                    </PieChart>
                );

            default:
                return <div className="chart-error">Unknown chart type: {type}</div>;
        }
    };

    return (
        <div className="ai-chart">
            {title && <h4 className="chart-title">{title}</h4>}
            <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height={300}>
                    {renderChart()}
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default function ChatMessage({ message }) {
    const { role, content, parts } = message;
    const isUser = role === 'user';

    // Memoize parsed content
    const renderedContent = useMemo(() => {
        if (parts && parts.length > 0) {
            return parts.map((part, i) => {
                if (part.type === 'chart') {
                    return <DynamicChart key={i} config={part.config} />;
                }
                return (
                    <div
                        key={i}
                        className="message-text"
                        dangerouslySetInnerHTML={{ __html: parseMarkdown(part.content) }}
                    />
                );
            });
        }

        return (
            <div
                className="message-text"
                dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
            />
        );
    }, [content, parts]);

    return (
        <div className={`message ${isUser ? 'user-message' : 'assistant-message'}`}>
            <div className="message-avatar">
                {isUser ? <User size={20} /> : <Bot className="text-blue-400" size={20} />}
            </div>
            <div className="message-content">
                {renderedContent}
            </div>
        </div>
    );
}
