import './MadhubaniCorner.css';

/**
 * Madhubani-inspired corner ornament — delicate floral/vine SVG
 * Placed in corners of cards for a heritage accent.
 */
export default function MadhubaniCorner({
    position = 'top-left', // 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
    size = 50,
    className = ''
}) {
    // Rotation based on corner position
    const rotations = {
        'top-left': 0,
        'top-right': 90,
        'bottom-right': 180,
        'bottom-left': 270,
    };

    const rotation = rotations[position] || 0;

    return (
        <svg
            className={`madhubani-corner madhubani-${position} ${className}`}
            viewBox="0 0 60 60"
            width={size}
            height={size}
            aria-hidden="true"
            style={{ transform: `rotate(${rotation}deg)` }}
        >
            {/* Main vine curl */}
            <path
                d="M0 0 Q15 5 20 20 Q22 30 18 40 Q14 48 5 55"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            />

            {/* Leaf 1 — upper */}
            <path
                d="M12 10 Q20 6 18 14 Q16 10 12 10Z"
                fill="currentColor"
                opacity="0.6"
            />

            {/* Leaf 2 — middle */}
            <path
                d="M20 22 Q28 18 26 26 Q24 22 20 22Z"
                fill="currentColor"
                opacity="0.5"
            />

            {/* Small flower */}
            <circle cx="22" cy="20" r="2" fill="currentColor" opacity="0.4" />

            {/* Leaf 3 — lower */}
            <path
                d="M16 36 Q24 32 22 40 Q20 36 16 36Z"
                fill="currentColor"
                opacity="0.5"
            />

            {/* Tiny dots (Madhubani style) */}
            <circle cx="8" cy="6" r="1" fill="currentColor" opacity="0.4" />
            <circle cx="16" cy="16" r="1" fill="currentColor" opacity="0.3" />
            <circle cx="14" cy="30" r="1" fill="currentColor" opacity="0.3" />
            <circle cx="10" cy="44" r="1" fill="currentColor" opacity="0.3" />

            {/* Small vine branch */}
            <path
                d="M10 15 Q16 12 14 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                opacity="0.5"
            />

            {/* Paisley accent */}
            <path
                d="M6 28 Q10 24 12 28 Q10 32 6 28Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                opacity="0.4"
            />
        </svg>
    );
}
