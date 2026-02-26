import './MadhubaniBorder.css';

/**
 * MadhubaniBorder — An SVG overlay frame inspired by Mithila painting borders.
 *
 * Traditional Madhubani borders feature:
 *  • Double parallel lines framing the painting
 *  • Lotus bud chains running along edges
 *  • Vine/leaf motifs in side borders
 *  • Paisley or flower motifs at corners
 *
 * This component renders an absolutely positioned SVG that sits on top of
 * its parent container (which must be position:relative).
 */
export default function MadhubaniBorder({ className = '' }: { className?: string }) {
    return (
        <div className={`madhubani-border ${className}`} aria-hidden="true">
            {/* ── Top Border ── */}
            <svg className="mb-edge mb-top" width="100%" height="100%">
                <pattern id="mb-folk-h" x="0" y="0" width="70" height="16" patternUnits="userSpaceOnUse">
                    {/* Parallel outer bounds */}
                    <line x1="0" y1="1" x2="70" y2="1" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="0" y1="15" x2="70" y2="15" stroke="currentColor" strokeWidth="0.8" />

                    {/* Left cell with sunburst (Semicircle pointing down from top line) */}
                    <line x1="0" y1="1" x2="0" y2="15" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="20" y1="1" x2="20" y2="15" stroke="currentColor" strokeWidth="0.8" />
                    <path d="M 4,1 A 6,6 0 0,0 16,1" fill="none" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="10" y1="1" x2="10" y2="7" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="6" y1="1" x2="8" y2="6" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="14" y1="1" x2="12" y2="6" stroke="currentColor" strokeWidth="0.8" />
                    <circle cx="10" cy="11" r="1" fill="currentColor" />
                    <circle cx="4" cy="11" r="1" fill="currentColor" />
                    <circle cx="16" cy="11" r="1" fill="currentColor" />

                    {/* Right cell with vines, leaves, and stripes */}
                    <path d="M 24,1 Q 35,14 66,12" fill="none" stroke="currentColor" strokeWidth="0.8" />
                    <path d="M 24,1 C 24,6 20,6 22,10" fill="none" stroke="currentColor" strokeWidth="0.8" />

                    {/* Leaves pointing up */}
                    <path d="M 40,15 Q 32,8 30,10 Q 36,15 40,15" fill="none" stroke="currentColor" strokeWidth="0.8" />
                    <path d="M 52,15 Q 44,7 42,9 Q 48,15 52,15" fill="none" stroke="currentColor" strokeWidth="0.8" />
                    <path d="M 64,15 Q 56,8 54,10 Q 60,15 64,15" fill="none" stroke="currentColor" strokeWidth="0.8" />

                    {/* Diagonal Stripes */}
                    <line x1="26" y1="1" x2="30" y2="9" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="33" y1="1" x2="37" y2="9" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="40" y1="1" x2="44" y2="9" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="47" y1="1" x2="51" y2="9" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="54" y1="1" x2="58" y2="9" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="61" y1="1" x2="65" y2="9" stroke="currentColor" strokeWidth="0.8" />

                    {/* Floating dots */}
                    <circle cx="40" cy="12" r="1" fill="currentColor" />
                    <circle cx="50" cy="12" r="1" fill="currentColor" />
                    <circle cx="60" cy="12" r="1" fill="currentColor" />
                    <circle cx="34" cy="12" r="1" fill="currentColor" />
                </pattern>
                <rect x="0" y="0" width="100%" height="16" fill="url(#mb-folk-h)" />
            </svg>

            {/* ── Bottom Border ── */}
            <svg className="mb-edge mb-bottom" width="100%" height="100%">
                <pattern id="mb-folk-h-b" x="0" y="0" width="70" height="16" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="1" x2="70" y2="1" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="0" y1="15" x2="70" y2="15" stroke="currentColor" strokeWidth="0.8" />

                    <line x1="0" y1="1" x2="0" y2="15" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="20" y1="1" x2="20" y2="15" stroke="currentColor" strokeWidth="0.8" />
                    <path d="M 4,15 A 6,6 0 0,1 16,15" fill="none" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="10" y1="15" x2="10" y2="9" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="6" y1="15" x2="8" y2="10" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="14" y1="15" x2="12" y2="10" stroke="currentColor" strokeWidth="0.8" />
                    <circle cx="10" cy="5" r="1" fill="currentColor" />
                    <circle cx="4" cy="5" r="1" fill="currentColor" />
                    <circle cx="16" cy="5" r="1" fill="currentColor" />

                    <path d="M 24,15 Q 35,2 66,4" fill="none" stroke="currentColor" strokeWidth="0.8" />
                    <path d="M 24,15 C 24,10 20,10 22,6" fill="none" stroke="currentColor" strokeWidth="0.8" />

                    <path d="M 40,1 Q 32,8 30,6 Q 36,1 40,1" fill="none" stroke="currentColor" strokeWidth="0.8" />
                    <path d="M 52,1 Q 44,8 42,6 Q 48,1 52,1" fill="none" stroke="currentColor" strokeWidth="0.8" />
                    <path d="M 64,1 Q 56,8 54,6 Q 60,1 64,1" fill="none" stroke="currentColor" strokeWidth="0.8" />

                    {/* Diagonal Stripes */}
                    <line x1="26" y1="15" x2="30" y2="7" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="33" y1="15" x2="37" y2="7" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="40" y1="15" x2="44" y2="7" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="47" y1="15" x2="51" y2="7" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="54" y1="15" x2="58" y2="7" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="61" y1="15" x2="65" y2="7" stroke="currentColor" strokeWidth="0.8" />

                    {/* Floating dots */}
                    <circle cx="40" cy="4" r="1" fill="currentColor" />
                    <circle cx="50" cy="4" r="1" fill="currentColor" />
                    <circle cx="60" cy="4" r="1" fill="currentColor" />
                    <circle cx="34" cy="4" r="1" fill="currentColor" />
                </pattern>
                <rect x="0" y="0" width="100%" height="16" fill="url(#mb-folk-h-b)" />
            </svg>

            {/* ── Left Border ── */}
            <svg className="mb-edge mb-left" width="100%" height="100%">
                <pattern id="mb-folk-v" x="0" y="0" width="16" height="70" patternUnits="userSpaceOnUse">
                    <line x1="1" y1="0" x2="1" y2="70" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="15" y1="0" x2="15" y2="70" stroke="currentColor" strokeWidth="0.8" />

                    <line x1="1" y1="0" x2="15" y2="0" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="1" y1="20" x2="15" y2="20" stroke="currentColor" strokeWidth="0.8" />

                    <path d="M 1,4 A 6,6 0 0,0 1,16" fill="none" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="1" y1="10" x2="7" y2="10" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="1" y1="6" x2="6" y2="8" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="1" y1="14" x2="6" y2="12" stroke="currentColor" strokeWidth="0.8" />

                    <circle cx="11" cy="10" r="1" fill="currentColor" />
                    <circle cx="11" cy="4" r="1" fill="currentColor" />
                    <circle cx="11" cy="16" r="1" fill="currentColor" />

                    <path d="M 1,24 Q 14,35 12,66" fill="none" stroke="currentColor" strokeWidth="0.8" />
                    <path d="M 1,24 C 6,24 6,20 10,22" fill="none" stroke="currentColor" strokeWidth="0.8" />

                    <path d="M 15,40 Q 8,32 10,30 Q 15,36 15,40" fill="none" stroke="currentColor" strokeWidth="0.8" />
                    <path d="M 15,52 Q 8,44 10,42 Q 15,48 15,52" fill="none" stroke="currentColor" strokeWidth="0.8" />
                    <path d="M 15,64 Q 8,56 10,54 Q 15,60 15,64" fill="none" stroke="currentColor" strokeWidth="0.8" />

                    <line x1="1" y1="26" x2="9" y2="30" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="1" y1="33" x2="9" y2="37" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="1" y1="40" x2="9" y2="44" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="1" y1="47" x2="9" y2="51" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="1" y1="54" x2="9" y2="58" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="1" y1="61" x2="9" y2="65" stroke="currentColor" strokeWidth="0.8" />

                    <circle cx="12" cy="40" r="1" fill="currentColor" />
                    <circle cx="12" cy="50" r="1" fill="currentColor" />
                    <circle cx="12" cy="60" r="1" fill="currentColor" />
                    <circle cx="12" cy="34" r="1" fill="currentColor" />
                </pattern>
                <rect x="0" y="0" width="16" height="100%" fill="url(#mb-folk-v)" />
            </svg>

            {/* ── Right Border ── */}
            <svg className="mb-edge mb-right" width="100%" height="100%">
                <pattern id="mb-folk-v-r" x="0" y="0" width="16" height="70" patternUnits="userSpaceOnUse">
                    <line x1="1" y1="0" x2="1" y2="70" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="15" y1="0" x2="15" y2="70" stroke="currentColor" strokeWidth="0.8" />

                    <line x1="1" y1="0" x2="15" y2="0" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="1" y1="20" x2="15" y2="20" stroke="currentColor" strokeWidth="0.8" />

                    <path d="M 15,4 A 6,6 0 0,1 15,16" fill="none" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="15" y1="10" x2="9" y2="10" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="15" y1="6" x2="10" y2="8" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="15" y1="14" x2="10" y2="12" stroke="currentColor" strokeWidth="0.8" />

                    <circle cx="5" cy="10" r="1" fill="currentColor" />
                    <circle cx="5" cy="4" r="1" fill="currentColor" />
                    <circle cx="5" cy="16" r="1" fill="currentColor" />

                    <path d="M 15,24 Q 2,35 4,66" fill="none" stroke="currentColor" strokeWidth="0.8" />
                    <path d="M 15,24 C 10,24 10,20 6,22" fill="none" stroke="currentColor" strokeWidth="0.8" />

                    <path d="M 1,40 Q 8,32 6,30 Q 1,36 1,40" fill="none" stroke="currentColor" strokeWidth="0.8" />
                    <path d="M 1,52 Q 8,44 6,42 Q 1,48 1,52" fill="none" stroke="currentColor" strokeWidth="0.8" />
                    <path d="M 1,64 Q 8,56 6,54 Q 1,60 1,64" fill="none" stroke="currentColor" strokeWidth="0.8" />

                    <line x1="15" y1="26" x2="7" y2="30" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="15" y1="33" x2="7" y2="37" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="15" y1="40" x2="7" y2="44" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="15" y1="47" x2="7" y2="51" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="15" y1="54" x2="7" y2="58" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="15" y1="61" x2="7" y2="65" stroke="currentColor" strokeWidth="0.8" />

                    <circle cx="4" cy="40" r="1" fill="currentColor" />
                    <circle cx="4" cy="50" r="1" fill="currentColor" />
                    <circle cx="4" cy="60" r="1" fill="currentColor" />
                    <circle cx="4" cy="34" r="1" fill="currentColor" />
                </pattern>
                <rect x="0" y="0" width="16" height="100%" fill="url(#mb-folk-v-r)" />
            </svg>

            {/* ── Corner flowers (4 corners) ── */}
            {/* Each corner is a small Madhubani-style flower/mandala */}
            <svg className="mb-corner mb-corner-tl" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="0.7" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                {/* Petals — 8 directions */}
                <path d="M12,8 Q10,6 12,4" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M12,8 Q14,6 12,4" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M16,12 Q18,10 20,12" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M16,12 Q18,14 20,12" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M12,16 Q10,18 12,20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M12,16 Q14,18 12,20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M8,12 Q6,10 4,12" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M8,12 Q6,14 4,12" fill="none" stroke="currentColor" strokeWidth="0.5" />
                {/* Corner dots */}
                <circle cx="5" cy="5" r="0.7" fill="currentColor" />
                <circle cx="19" cy="5" r="0.7" fill="currentColor" />
                <circle cx="5" cy="19" r="0.7" fill="currentColor" />
                <circle cx="19" cy="19" r="0.7" fill="currentColor" />
            </svg>

            <svg className="mb-corner mb-corner-tr" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="0.7" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                <path d="M12,8 Q10,6 12,4" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M12,8 Q14,6 12,4" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M16,12 Q18,10 20,12" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M16,12 Q18,14 20,12" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M12,16 Q10,18 12,20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M12,16 Q14,18 12,20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M8,12 Q6,10 4,12" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M8,12 Q6,14 4,12" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="5" cy="5" r="0.7" fill="currentColor" />
                <circle cx="19" cy="5" r="0.7" fill="currentColor" />
                <circle cx="5" cy="19" r="0.7" fill="currentColor" />
                <circle cx="19" cy="19" r="0.7" fill="currentColor" />
            </svg>

            <svg className="mb-corner mb-corner-bl" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="0.7" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                <path d="M12,8 Q10,6 12,4" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M12,8 Q14,6 12,4" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M16,12 Q18,10 20,12" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M16,12 Q18,14 20,12" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M12,16 Q10,18 12,20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M12,16 Q14,18 12,20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M8,12 Q6,10 4,12" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M8,12 Q6,14 4,12" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="5" cy="5" r="0.7" fill="currentColor" />
                <circle cx="19" cy="5" r="0.7" fill="currentColor" />
                <circle cx="5" cy="19" r="0.7" fill="currentColor" />
                <circle cx="19" cy="19" r="0.7" fill="currentColor" />
            </svg>

            <svg className="mb-corner mb-corner-br" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="0.7" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                <path d="M12,8 Q10,6 12,4" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M12,8 Q14,6 12,4" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M16,12 Q18,10 20,12" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M16,12 Q18,14 20,12" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M12,16 Q10,18 12,20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M12,16 Q14,18 12,20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M8,12 Q6,10 4,12" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M8,12 Q6,14 4,12" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="5" cy="5" r="0.7" fill="currentColor" />
                <circle cx="19" cy="5" r="0.7" fill="currentColor" />
                <circle cx="5" cy="19" r="0.7" fill="currentColor" />
                <circle cx="19" cy="19" r="0.7" fill="currentColor" />
            </svg>
        </div>
    );
}
