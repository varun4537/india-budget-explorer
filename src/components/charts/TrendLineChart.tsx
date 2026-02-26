import {
    ComposedChart,
    Line,
    Area,
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
    height = 300,
    margin = { top: 20, right: 30, left: 20, bottom: 10 },
    yAxisWidth = 50,
    dotRadius = 4
}) {
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="chart-tooltip">
                    <div className="tooltip-header">
                        <span className="tooltip-name">FY {label}</span>
                    </div>
                    {payload.filter(e => e.type !== 'none').map((entry, index) => (
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

    // Generate unique gradient IDs per line
    const gradientId = (index) => `gradient-${index}-${Math.random().toString(36).slice(2, 6)}`;
    const gradientIds = lines.map((_, i) => gradientId(i));

    return (
        <div className="chart-container line-chart-container" style={{ height }}>
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                    data={data}
                    margin={margin}
                >
                    <defs>
                        {lines.map((line, index) => (
                            <linearGradient key={index} id={gradientIds[index]} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={line.color || '#3b82f6'} stopOpacity={0.3} />
                                <stop offset="95%" stopColor={line.color || '#3b82f6'} stopOpacity={0.02} />
                            </linearGradient>
                        ))}
                    </defs>

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
                        width={yAxisWidth}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    {lines.length > 1 && (
                        <Legend
                            wrapperStyle={{ paddingTop: 20 }}
                            iconType="circle"
                            iconSize={8}
                        />
                    )}

                    {/* Gradient area fills behind each line */}
                    {lines.map((line, index) => (
                        <Area
                            key={`area-${index}`}
                            type="monotone"
                            dataKey={line.dataKey}
                            name={line.name || line.dataKey}
                            fill={`url(#${gradientIds[index]})`}
                            stroke="none"
                            isAnimationActive={animated}
                            animationDuration={1000}
                            legendType="none"
                        />
                    ))}

                    {/* Crisp line strokes on top */}
                    {lines.map((line, index) => (
                        <Line
                            key={`line-${index}`}
                            type="monotone"
                            dataKey={line.dataKey}
                            name={line.name || line.dataKey}
                            stroke={line.color || 'var(--primary)'}
                            strokeWidth={2.5}
                            dot={{ r: dotRadius, fill: line.color || 'var(--primary)', strokeWidth: 2, stroke: 'var(--bg-card)' }}
                            activeDot={{ r: dotRadius + 3, strokeWidth: 3, stroke: 'var(--bg-card)', fill: line.color || 'var(--primary)' }}
                            isAnimationActive={animated}
                            animationDuration={800}
                            animationEasing="ease-out"
                        />
                    ))}
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}
