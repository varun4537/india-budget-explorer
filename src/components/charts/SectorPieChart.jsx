import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { formatCurrency } from '../../utils/formatters';
import './Charts.css';

export default function SectorPieChart({
    data,
    showLegend = true,
    innerRadius = 60,
    outerRadius = 100,
    animated = true
}) {
    // Calculate percentages
    const total = data.reduce((sum, item) => sum + item.allocation, 0);
    const chartData = data.map(item => ({
        ...item,
        value: item.allocation,
        percentage: ((item.allocation / total) * 100).toFixed(1)
    }));

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="chart-tooltip">
                    <div className="tooltip-header">
                        <span className="tooltip-icon">
                            {(() => { const Icon = data.icon; return Icon && <Icon size={16} />; })()}
                        </span>
                        <span className="tooltip-name">{data.name}</span>
                    </div>
                    <div className="tooltip-value">{formatCurrency(data.allocation)}</div>
                    <div className="tooltip-percent">{data.percentage}% of budget</div>
                </div>
            );
        }
        return null;
    };

    const renderLegend = (props) => {
        const { payload } = props;
        return (
            <ul className="chart-legend">
                {payload.slice(0, 6).map((entry, index) => (
                    <li key={`legend-${index}`} className="legend-item">
                        <span
                            className="legend-dot"
                            style={{ backgroundColor: entry.color }}
                        />
                        <span className="legend-label">{entry.payload.name}</span>
                    </li>
                ))}
                {payload.length > 6 && (
                    <li className="legend-item legend-more">
                        +{payload.length - 6} more
                    </li>
                )}
            </ul>
        );
    };

    return (
        <div className="chart-container pie-chart-container">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={innerRadius}
                        outerRadius={outerRadius}
                        paddingAngle={2}
                        dataKey="value"
                        isAnimationActive={animated}
                        animationBegin={0}
                        animationDuration={800}
                    >
                        {chartData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={entry.color}
                                stroke="transparent"
                            />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    {showLegend && <Legend content={renderLegend} />}
                </PieChart>
            </ResponsiveContainer>

            {/* Center label */}
            <div className="pie-center-label">
                <span className="center-value">{formatCurrency(total, false)}</span>
                <span className="center-label">Total Budget</span>
            </div>
        </div>
    );
}
