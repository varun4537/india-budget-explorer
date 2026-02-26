import './WarliBackground.css';
import { WarliDancer, WarliWalker, WarliBird } from './WarliDivider';

/**
 * WarliBackground — A panoramic village scene rendered as a background layer.
 * Used behind the Hero section at very low opacity with a slow drift animation.
 */
export default function WarliBackground() {
    return (
        <div className="warli-bg" aria-hidden="true">
            <svg
                className="warli-bg-scene"
                viewBox="0 0 1200 180"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* === Row of village life across the full width === */}

                {/* Palm tree - left */}
                <g transform="translate(30, 40)">
                    <line x1="15" y1="40" x2="15" y2="130" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    {/* Coconuts */}
                    <circle cx="15" cy="38" r="4" fill="currentColor" opacity="0.6" />
                    <circle cx="10" cy="42" r="3" fill="currentColor" opacity="0.5" />
                    {/* Fronds */}
                    <path d="M15 40 Q30 20 45 30" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M15 40 Q35 25 50 42" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M15 40 Q-5 20 -15 32" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M15 40 Q-10 28 -20 45" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M15 40 Q25 15 40 18" fill="none" stroke="currentColor" strokeWidth="1.2" />
                </g>

                {/* Farmer plowing with bull */}
                <g transform="translate(120, 80)">
                    {/* Farmer body */}
                    <circle cx="10" cy="10" r="5" fill="currentColor" />
                    <line x1="10" y1="15" x2="10" y2="40" stroke="currentColor" strokeWidth="2" />
                    <line x1="10" y1="22" x2="0" y2="32" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="10" y1="22" x2="25" y2="30" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="10" y1="40" x2="3" y2="60" stroke="currentColor" strokeWidth="2" />
                    <line x1="10" y1="40" x2="17" y2="60" stroke="currentColor" strokeWidth="2" />
                    {/* Plow line */}
                    <line x1="25" y1="30" x2="50" y2="30" stroke="currentColor" strokeWidth="1" />
                    {/* Bull */}
                    <ellipse cx="65" cy="30" rx="14" ry="8" fill="currentColor" opacity="0.7" />
                    <circle cx="80" cy="24" r="5" fill="currentColor" opacity="0.8" />
                    <line x1="78" y1="20" x2="75" y2="12" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="82" y1="20" x2="85" y2="12" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="55" y1="36" x2="53" y2="55" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="60" y1="36" x2="58" y2="55" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="70" y1="36" x2="68" y2="55" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="75" y1="36" x2="73" y2="55" stroke="currentColor" strokeWidth="1.5" />
                </g>

                {/* Grain plant cluster */}
                <g transform="translate(260, 110)">
                    <line x1="10" y1="50" x2="10" y2="15" stroke="currentColor" strokeWidth="1.5" />
                    <ellipse cx="10" cy="12" rx="3" ry="6" fill="currentColor" opacity="0.6" />
                    <line x1="25" y1="50" x2="25" y2="20" stroke="currentColor" strokeWidth="1.5" />
                    <ellipse cx="25" cy="17" rx="3" ry="6" fill="currentColor" opacity="0.6" />
                    <line x1="40" y1="50" x2="40" y2="18" stroke="currentColor" strokeWidth="1.5" />
                    <ellipse cx="40" cy="15" rx="3" ry="6" fill="currentColor" opacity="0.6" />
                </g>

                {/* Hut #1 */}
                <g transform="translate(330, 60)">
                    <polygon points="30,0 0,30 60,30" fill="none" stroke="currentColor" strokeWidth="2" />
                    <line x1="15" y1="15" x2="30" y2="0" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
                    <line x1="45" y1="15" x2="30" y2="0" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
                    <rect x="5" y="30" width="50" height="35" fill="none" stroke="currentColor" strokeWidth="2" />
                    <rect x="20" y="42" width="16" height="23" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </g>

                {/* Dancing circle (Tarpa dance) */}
                <g transform="translate(460, 50)">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.3" />
                    {/* 6 dancers around the circle */}
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                        const x = 50 + 38 * Math.cos(angle * Math.PI / 180);
                        const y = 50 + 38 * Math.sin(angle * Math.PI / 180);
                        return (
                            <g key={i} transform={`translate(${x - 8}, ${y - 12})`}>
                                <circle cx="8" cy="4" r="3.5" fill="currentColor" />
                                <line x1="8" y1="7" x2="8" y2="18" stroke="currentColor" strokeWidth="1.5" />
                                <line x1="8" y1="10" x2="2" y2="6" stroke="currentColor" strokeWidth="1" />
                                <line x1="8" y1="10" x2="14" y2="6" stroke="currentColor" strokeWidth="1" />
                                <line x1="8" y1="18" x2="4" y2="26" stroke="currentColor" strokeWidth="1" />
                                <line x1="8" y1="18" x2="12" y2="26" stroke="currentColor" strokeWidth="1" />
                            </g>
                        );
                    })}
                    {/* Central pot/vase */}
                    <ellipse cx="50" cy="55" rx="8" ry="5" fill="currentColor" opacity="0.5" />
                    <path d="M44 55 Q44 45 50 42 Q56 45 56 55" fill="none" stroke="currentColor" strokeWidth="1.2" />
                </g>

                {/* Tree #2 */}
                <g transform="translate(600, 30)">
                    <line x1="20" y1="35" x2="20" y2="130" stroke="currentColor" strokeWidth="3" />
                    <line x1="20" y1="50" x2="8" y2="35" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="20" y1="50" x2="32" y2="35" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="20" y1="40" x2="10" y2="22" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="20" y1="40" x2="30" y2="22" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="8" cy="33" r="5" fill="currentColor" opacity="0.6" />
                    <circle cx="32" cy="33" r="5" fill="currentColor" opacity="0.6" />
                    <circle cx="10" cy="20" r="6" fill="currentColor" opacity="0.6" />
                    <circle cx="30" cy="20" r="6" fill="currentColor" opacity="0.6" />
                    <circle cx="20" cy="12" r="8" fill="currentColor" opacity="0.6" />
                </g>

                {/* Birds in flight */}
                <g transform="translate(680, 20)">
                    <path d="M0 10 Q5 5 10 10 Q15 5 20 10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </g>
                <g transform="translate(720, 12)">
                    <path d="M0 8 Q4 3 8 8 Q12 3 16 8" fill="none" stroke="currentColor" strokeWidth="1.2" />
                </g>
                <g transform="translate(700, 28)">
                    <path d="M0 6 Q3 2 6 6 Q9 2 12 6" fill="none" stroke="currentColor" strokeWidth="1" />
                </g>

                {/* Sun */}
                <g transform="translate(780, 15)">
                    <circle cx="20" cy="20" r="10" fill="currentColor" opacity="0.4" />
                    {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
                        <line
                            key={angle}
                            x1={20 + 12 * Math.cos(angle * Math.PI / 180)}
                            y1={20 + 12 * Math.sin(angle * Math.PI / 180)}
                            x2={20 + 20 * Math.cos(angle * Math.PI / 180)}
                            y2={20 + 20 * Math.sin(angle * Math.PI / 180)}
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            opacity="0.5"
                        />
                    ))}
                </g>

                {/* Hut #2 */}
                <g transform="translate(860, 70)">
                    <polygon points="25,0 0,25 50,25" fill="none" stroke="currentColor" strokeWidth="2" />
                    <rect x="5" y="25" width="40" height="30" fill="none" stroke="currentColor" strokeWidth="2" />
                    <rect x="17" y="35" width="14" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </g>

                {/* Walking figures */}
                <g transform="translate(940, 90)">
                    {/* Woman carrying pot */}
                    <circle cx="10" cy="6" r="4" fill="currentColor" />
                    <line x1="10" y1="10" x2="10" y2="30" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="10" y1="16" x2="3" y2="22" stroke="currentColor" strokeWidth="1.2" />
                    <line x1="10" y1="16" x2="17" y2="12" stroke="currentColor" strokeWidth="1.2" />
                    {/* Pot on head */}
                    <ellipse cx="10" cy="2" rx="5" ry="3" fill="none" stroke="currentColor" strokeWidth="1" />
                    <line x1="10" y1="30" x2="5" y2="50" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="10" y1="30" x2="15" y2="50" stroke="currentColor" strokeWidth="1.5" />
                </g>

                {/* Rooster */}
                <g transform="translate(1010, 110)">
                    <ellipse cx="15" cy="20" rx="10" ry="7" fill="currentColor" opacity="0.7" />
                    <circle cx="26" cy="14" r="4" fill="currentColor" />
                    <line x1="29" y1="14" x2="34" y2="13" stroke="currentColor" strokeWidth="1.2" />
                    {/* Comb */}
                    <path d="M24 10 Q26 6 28 10" fill="currentColor" opacity="0.6" />
                    {/* Tail feathers */}
                    <path d="M5 18 Q-2 10 0 5" fill="none" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M5 20 Q-4 14 -2 8" fill="none" stroke="currentColor" strokeWidth="1" />
                    {/* Legs */}
                    <line x1="13" y1="26" x2="11" y2="38" stroke="currentColor" strokeWidth="1" />
                    <line x1="18" y1="26" x2="20" y2="38" stroke="currentColor" strokeWidth="1" />
                </g>

                {/* Another palm tree - right edge */}
                <g transform="translate(1100, 30)">
                    <line x1="15" y1="40" x2="15" y2="140" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="15" cy="38" r="3" fill="currentColor" opacity="0.5" />
                    <path d="M15 40 Q30 22 42 30" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M15 40 Q32 28 45 45" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M15 40 Q0 22 -10 32" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M15 40 Q-5 30 -15 42" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </g>

                {/* Ground line */}
                <line x1="0" y1="170" x2="1200" y2="170" stroke="currentColor" strokeWidth="1" opacity="0.2" />

                {/* Small grass tufts along ground */}
                {[80, 200, 310, 420, 580, 700, 830, 950, 1060].map(x => (
                    <g key={x} transform={`translate(${x}, 155)`}>
                        <line x1="5" y1="15" x2="3" y2="5" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                        <line x1="8" y1="15" x2="8" y2="3" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                        <line x1="11" y1="15" x2="13" y2="5" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                    </g>
                ))}
            </svg>
        </div>
    );
}
