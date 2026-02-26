import { useState, useCallback } from 'react';
import { Share2, Check } from 'lucide-react';
import { createPortal } from 'react-dom';
import './ShareButton.css';

export default function ShareButton({ text, url, label = 'Share' }) {
    const [copied, setCopied] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const shareUrl = url || window.location.href;
    const shareText = `${text}\n\nExplore more → ${shareUrl}`;

    const handleShare = useCallback(async () => {
        // Try native Web Share API first (mobile)
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'India Budget Explorer',
                    text: text,
                    url: shareUrl,
                });
                return;
            } catch (err) {
                // User cancelled or share failed — fall through to clipboard
                if (err.name === 'AbortError') return;
            }
        }

        // Fallback: copy to clipboard
        try {
            await navigator.clipboard.writeText(shareText);
            setCopied(true);
            setShowToast(true);
            setTimeout(() => {
                setCopied(false);
                setShowToast(false);
            }, 2000);
        } catch (err) {
            console.error('Copy failed:', err);
        }
    }, [text, shareUrl, shareText]);

    return (
        <>
            <button
                className={`share-btn ${copied ? 'copied' : ''}`}
                onClick={handleShare}
                aria-label={`Share: ${text?.slice(0, 50)}`}
            >
                {copied ? <Check size={14} /> : <Share2 size={14} />}
                {copied ? 'Copied!' : label}
            </button>

            {/* Toast portal */}
            {showToast && createPortal(
                <div className={`share-toast ${showToast ? 'show' : ''}`}>
                    ✓ Copied to clipboard — paste it anywhere!
                </div>,
                document.body
            )}
        </>
    );
}
