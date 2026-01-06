import './WarliDivider.css';

// Warli dancing figure as SVG path
const WarliDancer = ({ flip = false }) => (
    <svg
        className={`warli-figure ${flip ? 'warli-flip' : ''}`}
        viewBox="0 0 40 60"
        width="30"
        height="45"
        aria-hidden="true"
    >
        {/* Head */}
        <circle cx="20" cy="8" r="6" fill="currentColor" />
        {/* Body */}
        <line x1="20" y1="14" x2="20" y2="32" stroke="currentColor" strokeWidth="2" />
        {/* Arms raised (dancing pose) */}
        <line x1="20" y1="20" x2="8" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="20" x2="32" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* Legs (dancing spread) */}
        <line x1="20" y1="32" x2="10" y2="50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="32" x2="30" y2="50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

// Warli walking figure
const WarliWalker = ({ flip = false }) => (
    <svg
        className={`warli-figure ${flip ? 'warli-flip' : ''}`}
        viewBox="0 0 40 60"
        width="30"
        height="45"
        aria-hidden="true"
    >
        {/* Head */}
        <circle cx="20" cy="8" r="6" fill="currentColor" />
        {/* Body */}
        <line x1="20" y1="14" x2="20" y2="32" stroke="currentColor" strokeWidth="2" />
        {/* Arms walking */}
        <line x1="20" y1="20" x2="10" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="20" x2="30" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* Legs walking */}
        <line x1="20" y1="32" x2="12" y2="52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="32" x2="28" y2="52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

// Warli geometric pattern
const WarliGeometric = () => (
    <svg
        className="warli-figure warli-geometric"
        viewBox="0 0 40 40"
        width="30"
        height="30"
        aria-hidden="true"
    >
        <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="20" cy="20" r="3" fill="currentColor" />
    </svg>
);

export default function WarliDivider({
    pattern = 'dancers', // 'dancers', 'walkers', 'mixed', 'geometric', 'simple'
    count = 5,
    className = ''
}) {
    const renderPattern = () => {
        switch (pattern) {
            case 'dancers':
                return Array(count).fill(null).map((_, i) => (
                    <WarliDancer key={i} flip={i % 2 === 1} />
                ));

            case 'walkers':
                return Array(count).fill(null).map((_, i) => (
                    <WarliWalker key={i} flip={i % 2 === 1} />
                ));

            case 'mixed':
                return Array(count).fill(null).map((_, i) => (
                    i % 2 === 0
                        ? <WarliDancer key={i} />
                        : <WarliWalker key={i} flip />
                ));

            case 'geometric':
                return Array(count).fill(null).map((_, i) => (
                    <WarliGeometric key={i} />
                ));

            case 'simple':
            default:
                return (
                    <>
                        <span className="warli-dot" />
                        <span className="warli-dot" />
                        <span className="warli-dot" />
                    </>
                );
        }
    };

    return (
        <div className={`warli-divider ${className}`} role="separator" aria-hidden="true">
            <span className="warli-line" />
            <div className="warli-figures">
                {renderPattern()}
            </div>
            <span className="warli-line" />
        </div>
    );
}

// Export individual figures for flexible use
export { WarliDancer, WarliWalker, WarliGeometric };
