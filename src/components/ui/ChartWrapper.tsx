import { useRef, useState, useCallback } from 'react';
import { toPng } from 'html-to-image';
import { Download, Check } from 'lucide-react';
import MadhubaniBorder from '../decorative/MadhubaniBorder';
import './ChartWrapper.css';

export default function ChartWrapper({ children, title = 'chart', className = '' }) {
    const wrapperRef = useRef(null);
    const [isExporting, setIsExporting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleDownload = useCallback(async () => {
        if (!wrapperRef.current || isExporting) return;

        setIsExporting(true);

        // Show watermark temporarily for the export
        const watermark = wrapperRef.current.querySelector('.chart-watermark');
        if (watermark) watermark.classList.add('visible');

        // Hide the action buttons during export
        const actions = wrapperRef.current.querySelector('.chart-wrapper-actions');
        if (actions) actions.style.display = 'none';

        try {
            // Small delay to let layout settle
            await new Promise(r => setTimeout(r, 100));

            const dataUrl = await toPng(wrapperRef.current, {
                backgroundColor: '#0a0f1a',
                pixelRatio: 2,
                cacheBust: true,
                style: {
                    borderRadius: '0',
                },
                filter: (node) => {
                    // Exclude the action buttons from the export
                    return !node.classList?.contains('chart-wrapper-actions');
                }
            });

            // Trigger download
            const link = document.createElement('a');
            const safeName = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-');
            link.download = `india-budget-${safeName}.png`;
            link.href = dataUrl;
            link.click();

            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 2000);
        } catch (err) {
            console.error('Export failed:', err);
        } finally {
            // Restore UI
            if (watermark) watermark.classList.remove('visible');
            if (actions) actions.style.display = '';
            setIsExporting(false);
        }
    }, [title, isExporting]);

    return (
        <div className={`chart-wrapper ${className}`} ref={wrapperRef}>
            <MadhubaniBorder />
            <div className="chart-wrapper-actions">
                <button
                    className={`chart-action-btn ${showSuccess ? 'success' : ''}`}
                    onClick={handleDownload}
                    disabled={isExporting}
                    aria-label={`Download ${title} as PNG`}
                >
                    {showSuccess ? (
                        <><Check size={14} /> Saved!</>
                    ) : (
                        <><Download size={14} /> {isExporting ? 'Exporting...' : 'PNG'}</>
                    )}
                </button>
            </div>

            {children}

            {/* Watermark — hidden, revealed only during PNG export */}
            <div className="chart-watermark">
                <span className="watermark-flag">🇮🇳</span>
                <span className="watermark-text">
                    India Budget Explorer • Data from indiabudget.gov.in
                </span>
            </div>
        </div>
    );
}
