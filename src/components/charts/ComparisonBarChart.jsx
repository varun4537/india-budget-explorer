import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell
} from 'recharts';
import { formatCurrency } from '../../utils/formatters';
import './Charts.css';

export default function ComparisonBarChart({
    data,
    dataKey = 'value',
    nameKey = 'name',
    colorKey = 'color',
    horizontal = true,
    showValues = true,
    animated = true,
    height = 300
}) {
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="chart-tooltip">
                    <div className="tooltip-header">
                        {data.icon && <span className="tooltip-icon">{data.icon}</span>}
                        <span className="tooltip-name">{data[nameKey]}</span>
                    </div>
                    <div className="tooltip-value">{formatCurrency(data[dataKey])}</div>
                    {data.changePercent !== undefined && (
                        <div className={`tooltip-change ${data.changePercent >= 0 ? 'positive' : 'negative'}`}>
                            {data.changePercent >= 0 ? '↑' : '↓'} {Math.abs(data.changePercent).toFixed(1)}%
                        </div>
                    )}
                </div>
            );
        }
        return null;
    };

    const formatValue = (value) => {
        if (value >= 100000) {
            return `${(value / 100000).toFixed(1)}L`;
        } else if (value >= 1000) {
            return `${(value / 1000).toFixed(0)}K`;
        }
        return value;
    };

    if (horizontal) {
        return (
            <div className="chart-container bar-chart-container" style={{ height }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        layout="vertical"
                        margin={{ top: 10, right: 30, left: 100, bottom: 10 }}
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="var(--border-subtle)"
                            horizontal={false}
                        />
                        <XAxis
                            type="number"
                            tickFormatter={formatValue}
                            stroke="var(--text-muted)"
                            fontSize={12}
                            tickLine={false}
                            axisLine={{ stroke: 'var(--border-subtle)' }}
                        />
                        <YAxis
                            type="category"
                            dataKey={nameKey}
                            stroke="var(--text-muted)"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            width={90}
                            tick={{ fill: 'var(--text-secondary)' }}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar
                            dataKey={dataKey}
                            radius={[0, 4, 4, 0]}
                            isAnimationActive={animated}
                            animationDuration={800}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry[colorKey] || 'var(--primary)'}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }

    return (
        <div className="chart-container bar-chart-container" style={{ height }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 20, left: 20, bottom: 40 }}
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="var(--border-subtle)"
                        vertical={false}
                    />
                    <XAxis
                        dataKey={nameKey}
                        stroke="var(--text-muted)"
                        fontSize={11}
                        tickLine={false}
                        axisLine={{ stroke: 'var(--border-subtle)' }}
                        angle={-45}
                        textAnchor="end"
                        height={60}
                    />
                    <YAxis
                        tickFormatter={formatValue}
                        stroke="var(--text-muted)"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar
                        dataKey={dataKey}
                        radius={[4, 4, 0, 0]}
                        isAnimationActive={animated}
                        animationDuration={800}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={entry[colorKey] || 'var(--primary)'}
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
