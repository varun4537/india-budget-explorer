import { Link } from 'react-router-dom';
import { formatCurrency, formatPercent } from '../../utils/formatters';
import './SectorCard.css';

export default function SectorCard({
    sector,
    showChange = true,
    showPercentage = true,
    linkToDetails = true,
    size = 'normal',
    animate = false,
    animationDelay = 0
}) {
    const { id, name, allocation, color, icon: Icon, previousAllocation, changePercent, percentage } = sector;

    const change = previousAllocation
        ? ((allocation - previousAllocation) / previousAllocation * 100)
        : changePercent || 0;

    const content = (
        <div
            className={`sector-card sector-card--${size} ${animate ? 'animate-fadeInUp' : ''}`}
            style={{
                '--sector-color': color,
                animationDelay: `${animationDelay}ms`
            }}
        >
            <div className="sector-card__header">
                <span className="sector-card__icon">{Icon && <Icon size={24} />}</span>
                <div className="sector-card__color-bar" />
            </div>

            <div className="sector-card__body">
                <h3 className="sector-card__name">{name}</h3>
                <div className="sector-card__amount">{formatCurrency(allocation)}</div>

                <div className="sector-card__meta">
                    {showPercentage && percentage && (
                        <span className="sector-card__percentage">
                            {percentage}% of budget
                        </span>
                    )}

                    {showChange && (
                        <span className={`sector-card__change ${change >= 0 ? 'positive' : 'negative'}`}>
                            {change >= 0 ? '↑' : '↓'} {formatPercent(Math.abs(change), false)}
                        </span>
                    )}
                </div>
            </div>

            {linkToDetails && (
                <div className="sector-card__arrow">→</div>
            )}
        </div>
    );

    if (linkToDetails) {
        return (
            <Link to={`/sectors/${id}`} className="sector-card-link">
                {content}
            </Link>
        );
    }

    return content;
}
