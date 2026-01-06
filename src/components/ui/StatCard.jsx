import './StatCard.css';

export default function StatCard({
    title,
    value,
    subtitle,
    change,
    icon,
    variant = 'default',
    size = 'normal',
    className = ''
}) {
    const changeClass = change > 0 ? 'positive' : change < 0 ? 'negative' : 'neutral';

    return (
        <div className={`stat-card stat-card--${variant} stat-card--${size} ${className}`}>
            {icon && <div className="stat-card__icon">{icon}</div>}

            <div className="stat-card__content">
                <h3 className="stat-card__title">{title}</h3>
                <div className="stat-card__value">{value}</div>

                {subtitle && (
                    <p className="stat-card__subtitle">{subtitle}</p>
                )}

                {change !== undefined && (
                    <div className={`stat-card__change stat-card__change--${changeClass}`}>
                        <span className="change-icon">
                            {change > 0 ? '↑' : change < 0 ? '↓' : '→'}
                        </span>
                        <span className="change-value">
                            {change > 0 ? '+' : ''}{change}%
                        </span>
                        <span className="change-label">vs last year</span>
                    </div>
                )}
            </div>
        </div>
    );
}
