import './WarliDivider.css';

// Warli dancing figure as SVG path
const WarliDancer = ({ flip = false }) => (
    <svg
        className={`warli-figure warli-dancer ${flip ? 'warli-flip' : ''}`}
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
        <line x1="20" y1="20" x2="8" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="warli-arm-left" />
        <line x1="20" y1="20" x2="32" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="warli-arm-right" />
        {/* Legs (dancing spread) */}
        <line x1="20" y1="32" x2="10" y2="50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="warli-leg-left" />
        <line x1="20" y1="32" x2="30" y2="50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="warli-leg-right" />
    </svg>
);

// Warli walking figure
const WarliWalker = ({ flip = false }) => (
    <svg
        className={`warli-figure warli-walker ${flip ? 'warli-flip' : ''}`}
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

// Warli farmer plowing
const WarliFarmer = ({ flip = false }) => (
    <svg
        className={`warli-figure warli-farmer ${flip ? 'warli-flip' : ''}`}
        viewBox="0 0 50 60"
        width="35"
        height="45"
        aria-hidden="true"
    >
        {/* Head */}
        <circle cx="25" cy="8" r="6" fill="currentColor" />
        {/* Body - leaning forward */}
        <line x1="25" y1="14" x2="22" y2="32" stroke="currentColor" strokeWidth="2" />
        {/* Arms - holding plow */}
        <line x1="23" y1="20" x2="10" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="23" y1="20" x2="38" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* Plow tool */}
        <line x1="38" y1="30" x2="45" y2="48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Legs */}
        <line x1="22" y1="32" x2="14" y2="52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="32" x2="30" y2="52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

// Warli tree with leaves
const WarliTree = () => (
    <svg
        className="warli-figure warli-tree"
        viewBox="0 0 50 70"
        width="35"
        height="50"
        aria-hidden="true"
    >
        {/* Trunk */}
        <line x1="25" y1="30" x2="25" y2="65" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        {/* Branches */}
        <line x1="25" y1="40" x2="12" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="25" y1="40" x2="38" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="25" y1="32" x2="15" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="25" y1="32" x2="35" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Leaf clusters */}
        <circle cx="12" cy="26" r="5" fill="currentColor" opacity="0.7" />
        <circle cx="38" cy="26" r="5" fill="currentColor" opacity="0.7" />
        <circle cx="15" cy="16" r="6" fill="currentColor" opacity="0.7" />
        <circle cx="35" cy="16" r="6" fill="currentColor" opacity="0.7" />
        <circle cx="25" cy="10" r="8" fill="currentColor" opacity="0.7" />
        {/* Small leaves */}
        <ellipse cx="8" cy="22" rx="3" ry="5" fill="currentColor" opacity="0.5" transform="rotate(-20 8 22)" />
        <ellipse cx="42" cy="22" rx="3" ry="5" fill="currentColor" opacity="0.5" transform="rotate(20 42 22)" />
    </svg>
);

// Warli bull / ox
const WarliBull = ({ flip = false }) => (
    <svg
        className={`warli-figure warli-bull ${flip ? 'warli-flip' : ''}`}
        viewBox="0 0 60 45"
        width="42"
        height="32"
        aria-hidden="true"
    >
        {/* Body */}
        <ellipse cx="30" cy="22" rx="18" ry="10" fill="currentColor" opacity="0.85" />
        {/* Head */}
        <circle cx="50" cy="16" r="6" fill="currentColor" />
        {/* Horns */}
        <line x1="48" y1="12" x2="44" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="warli-horn" />
        <line x1="52" y1="12" x2="56" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="warli-horn" />
        {/* Legs */}
        <line x1="18" y1="30" x2="16" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="30" x2="22" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="36" y1="30" x2="34" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="42" y1="30" x2="40" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* Tail */}
        <path d="M12 20 Q6 14 8 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

// Warli hut
const WarliHut = () => (
    <svg
        className="warli-figure warli-hut"
        viewBox="0 0 50 55"
        width="35"
        height="40"
        aria-hidden="true"
    >
        {/* Triangular roof */}
        <polygon points="25,5 5,25 45,25" fill="none" stroke="currentColor" strokeWidth="2" />
        {/* Roof hatching */}
        <line x1="15" y1="15" x2="25" y2="5" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        <line x1="35" y1="15" x2="25" y2="5" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        <line x1="20" y1="20" x2="25" y2="5" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="30" y1="20" x2="25" y2="5" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        {/* Walls */}
        <rect x="8" y="25" width="34" height="24" fill="none" stroke="currentColor" strokeWidth="2" />
        {/* Door */}
        <rect x="19" y="34" width="12" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
);

// Warli bird
const WarliBird = ({ flip = false }) => (
    <svg
        className={`warli-figure warli-bird ${flip ? 'warli-flip' : ''}`}
        viewBox="0 0 40 30"
        width="28"
        height="22"
        aria-hidden="true"
    >
        {/* Body */}
        <ellipse cx="20" cy="18" rx="10" ry="7" fill="currentColor" opacity="0.8" />
        {/* Head */}
        <circle cx="32" cy="12" r="4" fill="currentColor" />
        {/* Beak */}
        <line x1="35" y1="12" x2="40" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Eye */}
        <circle cx="33" cy="11" r="1" fill="var(--bg-primary, #0D0D0D)" />
        {/* Wing */}
        <path d="M16 14 Q12 4 20 8 Q24 10 22 14" fill="currentColor" className="warli-wing" />
        {/* Tail */}
        <path d="M10 16 Q4 12 6 18" fill="currentColor" opacity="0.7" />
        {/* Legs */}
        <line x1="18" y1="24" x2="16" y2="30" stroke="currentColor" strokeWidth="1" />
        <line x1="22" y1="24" x2="24" y2="30" stroke="currentColor" strokeWidth="1" />
    </svg>
);

// Warli sun
const WarliSun = () => (
    <svg
        className="warli-figure warli-sun"
        viewBox="0 0 40 40"
        width="28"
        height="28"
        aria-hidden="true"
    >
        {/* Center */}
        <circle cx="20" cy="20" r="7" fill="currentColor" />
        {/* Rays */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(angle => (
            <line
                key={angle}
                x1="20" y1="20"
                x2={20 + 16 * Math.cos(angle * Math.PI / 180)}
                y2={20 + 16 * Math.sin(angle * Math.PI / 180)}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        ))}
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
    pattern = 'dancers', // 'dancers', 'walkers', 'mixed', 'geometric', 'simple', 'village'
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

            case 'village': {
                // A rich village scene: tree, farmer, hut, bull, dancer, bird, etc.
                const figures = [
                    <WarliTree key="t1" />,
                    <WarliFarmer key="f1" />,
                    <WarliBull key="b1" />,
                    <WarliHut key="h1" />,
                    <WarliDancer key="d1" />,
                    <WarliDancer key="d2" flip />,
                    <WarliBird key="bird1" />,
                    <WarliTree key="t2" />,
                    <WarliWalker key="w1" />,
                    <WarliBull key="b2" flip />,
                    <WarliBird key="bird2" flip />,
                    <WarliFarmer key="f2" flip />,
                ];
                return figures.slice(0, Math.min(count, figures.length));
            }

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
        <div className={`warli-divider ${pattern === 'village' ? 'warli-village' : ''} ${className}`} role="separator" aria-hidden="true">
            <span className="warli-line" />
            <div className="warli-figures">
                {renderPattern()}
            </div>
            <span className="warli-line" />
        </div>
    );
}

// Export individual figures for flexible use
export { WarliDancer, WarliWalker, WarliGeometric, WarliFarmer, WarliTree, WarliBull, WarliHut, WarliBird, WarliSun };
