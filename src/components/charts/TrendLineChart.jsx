import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts';
import { formatCurrency, formatFYShort } from '../../utils/formatters';
import './Charts.css';

export default function TrendLineChart({
    data,
    lines = [],
    xKey = 'year',
    showGrid = true,
    animated = true,
    height = 300
}) {
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="chart-tooltip">
                    <div className="tooltip-header">
                        <span className="tooltip-name">FY {label}</span>
                    </div>
                    {payload.map((entry, index) => (
                        <div key={index} className="tooltip-row">
                            <span
                                className="tooltip-dot"
                                style={{ backgroundColor: entry.color }}
                            />
                            <span className="tooltip-label">{entry.name}:</span>
                            <span className="tooltip-value">{formatCurrency(entry.value)}</span>
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    };

    const formatYAxis = (value) => {
        if (value >= 100000) {
            return `${(value / 100000).toFixed(0)}L`;
        } else if (value >= 1000) {
            return `${(value / 1000).toFixed(0)}K`;
        }
        return value;
    };

    return (
        <div className="chart-container line-chart-container" style={{ height }}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                >
                    {showGrid && (
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="var(--border-subtle)"
                            vertical={false}
                        />
                    )}
                    <XAxis
                        dataKey={xKey}
                        tickFormatter={formatFYShort}
                        stroke="var(--text-muted)"
                        fontSize={12}
                        tickLine={false}
                        axisLine={{ stroke: 'var(--border-subtle)' }}
                    />
                    <YAxis
                        tickFormatter={formatYAxis}
                        stroke="var(--text-muted)"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        width={50}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    {lines.length > 1 && (
                        <Legend
                            wrapperStyle={{ paddingTop: 20 }}
                            iconType="circle"
                            iconSize={8}
                        />
                    )}
                    {lines.map((line, index) => (
                        <Line
                            key={index}
                            type="monotone"
                            dataKey={line.dataKey}
                            name={line.name || line.dataKey}
                            stroke={line.color || 'var(--primary)'}
                            strokeWidth={2.5}
                            dot={{ r: 4, fill: line.color || 'var(--primary)' }}
                            activeDot={{ r: 6, strokeWidth: 2, stroke: 'var(--bg-card)' }}
                            isAnimationActive={animated}
                            animationDuration={800}
                        />
                    ))}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
