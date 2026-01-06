import './Mandala.css';

export default function Mandala({ size = 180, className = '' }) {
    return (
        <div className={`mandala-container ${className}`}>
            <svg
                className="rotating-mandala"
                viewBox="0 0 200 200"
                width={size}
                height={size}
                aria-hidden="true"
            >
                {/* Outer circles */}
                <circle cx="100" cy="100" r="95" fill="none" stroke="var(--accent-gold)" strokeWidth="2" />
                <circle cx="100" cy="100" r="88" fill="none" stroke="var(--accent-terra)" strokeWidth="1" opacity="0.6" />
                <circle cx="100" cy="100" r="80" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" />

                {/* Middle ring with pattern */}
                <circle cx="100" cy="100" r="65" fill="none" stroke="var(--accent-purple)" strokeWidth="2" strokeDasharray="8 4" />
                <circle cx="100" cy="100" r="55" fill="none" stroke="var(--accent-terra)" strokeWidth="1.5" />

                {/* Inner circles */}
                <circle cx="100" cy="100" r="40" fill="none" stroke="var(--accent-gold)" strokeWidth="2" />
                <circle cx="100" cy="100" r="30" fill="none" stroke="var(--accent-purple)" strokeWidth="1" opacity="0.7" />
                <circle cx="100" cy="100" r="20" fill="none" stroke="var(--accent-terra)" strokeWidth="1.5" />
                <circle cx="100" cy="100" r="10" fill="var(--accent-gold)" opacity="0.3" />

                {/* 8 Radiating lines */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <g key={angle} transform={`rotate(${angle} 100 100)`}>
                        <line
                            x1="100" y1="10" x2="100" y2="35"
                            stroke="var(--accent-gold)"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <line
                            x1="100" y1="45" x2="100" y2="55"
                            stroke="var(--accent-terra)"
                            strokeWidth="1.5"
                        />
                        {/* Small decorative dots at outer edge */}
                        <circle
                            cx="100" cy="8" r="3"
                            fill={i % 2 === 0 ? "var(--accent-gold)" : "var(--accent-terra)"}
                        />
                    </g>
                ))}

                {/* Decorative petals (lotus-inspired) */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                    <g key={`petal-${angle}`} transform={`rotate(${angle} 100 100)`}>
                        <ellipse
                            cx="100" cy="72" rx="6" ry="12"
                            fill="none"
                            stroke="var(--accent-gold)"
                            strokeWidth="1.5"
                            opacity="0.8"
                        />
                    </g>
                ))}

                {/* Inner decorative elements */}
                {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle) => (
                    <g key={`inner-${angle}`} transform={`rotate(${angle} 100 100)`}>
                        <line
                            x1="100" y1="60" x2="100" y2="75"
                            stroke="var(--accent-purple)"
                            strokeWidth="1"
                            opacity="0.6"
                        />
                    </g>
                ))}
            </svg>
        </div>
    );
}
