import { describe, it, expect } from 'vitest';
import {
    formatCurrency,
    formatCompact,
    formatPercent,
    formatIndianNumber,
    formatPerCapita,
    formatFiscalYear,
    formatFYShort,
    calculateChange,
    getHundredRupeeBreakdown
} from './formatters';

// ============================================================
// formatCurrency
// ============================================================
describe('formatCurrency', () => {
    it('formats Lakh Crore values with symbol', () => {
        expect(formatCurrency(534700)).toBe('₹5.35 Lakh Cr');
    });

    it('formats Lakh Crore values without symbol', () => {
        expect(formatCurrency(534700, false)).toBe('5.35 Lakh Cr');
    });

    it('formats thousand Crore values', () => {
        expect(formatCurrency(59500)).toBe('₹59.5K Cr');
    });

    it('formats small Crore values', () => {
        expect(formatCurrency(750)).toBe('₹750 Cr');
    });

    it('handles exact boundary at 100000', () => {
        expect(formatCurrency(100000)).toBe('₹1.00 Lakh Cr');
    });

    it('handles exact boundary at 1000', () => {
        expect(formatCurrency(1000)).toBe('₹1.0K Cr');
    });

    it('handles zero', () => {
        expect(formatCurrency(0)).toBe('₹0 Cr');
    });
});

// ============================================================
// formatCompact
// ============================================================
describe('formatCompact', () => {
    it('formats Lakh range', () => {
        expect(formatCompact(534700)).toBe('5.3L');
    });

    it('formats Thousand range', () => {
        expect(formatCompact(59500)).toBe('60K');
    });

    it('formats small numbers with Indian formatting', () => {
        expect(formatCompact(750)).toBe('750');
    });

    it('handles exact boundary at 100000', () => {
        expect(formatCompact(100000)).toBe('1.0L');
    });
});

// ============================================================
// formatPercent
// ============================================================
describe('formatPercent', () => {
    it('formats positive percent with + sign', () => {
        expect(formatPercent(12.345)).toBe('+12.3%');
    });

    it('formats negative percent', () => {
        expect(formatPercent(-5.678)).toBe('-5.7%');
    });

    it('formats zero percent without sign', () => {
        expect(formatPercent(0)).toBe('0.0%');
    });

    it('hides sign when showSign is false', () => {
        expect(formatPercent(12.345, false)).toBe('12.3%');
    });

    it('handles string input', () => {
        expect(formatPercent('7.5')).toBe('+7.5%');
    });
});

// ============================================================
// formatIndianNumber
// ============================================================
describe('formatIndianNumber', () => {
    it('formats large numbers with Indian comma separators', () => {
        const result = formatIndianNumber(14306577);
        // en-IN locale: 1,43,06,577
        expect(result).toContain('1');
        expect(result).toContain('577');
    });

    it('formats small numbers', () => {
        expect(formatIndianNumber(999)).toBe('999');
    });

    it('handles zero', () => {
        expect(formatIndianNumber(0)).toBe('0');
    });
});

// ============================================================
// formatPerCapita
// ============================================================
describe('formatPerCapita', () => {
    it('formats Lakh-range amounts', () => {
        expect(formatPerCapita(250000)).toBe('₹2.5 Lakh');
    });

    it('formats Thousand-range amounts', () => {
        expect(formatPerCapita(5500)).toBe('₹5.5K');
    });

    it('formats small amounts', () => {
        expect(formatPerCapita(750)).toBe('₹750');
    });

    it('handles exact boundary at 100000', () => {
        expect(formatPerCapita(100000)).toBe('₹1.0 Lakh');
    });
});

// ============================================================
// formatFiscalYear
// ============================================================
describe('formatFiscalYear', () => {
    it('prefixes FY to year string', () => {
        expect(formatFiscalYear('2024-25')).toBe('FY 2024-25');
    });

    it('works with any string', () => {
        expect(formatFiscalYear('2026-27')).toBe('FY 2026-27');
    });
});

// ============================================================
// formatFYShort
// ============================================================
describe('formatFYShort', () => {
    it('shortens fiscal year', () => {
        expect(formatFYShort('2024-25')).toBe('24-25');
    });

    it('works with 2026-27', () => {
        expect(formatFYShort('2026-27')).toBe('26-27');
    });
});

// ============================================================
// calculateChange
// ============================================================
describe('calculateChange', () => {
    it('calculates positive change', () => {
        const result = calculateChange(120, 100);
        expect(result.absolute).toBe(20);
        expect(result.percent).toBeCloseTo(20, 1);
        expect(result.isPositive).toBe(true);
        expect(result.isNegative).toBe(false);
        expect(result.className).toBe('change-positive');
    });

    it('calculates negative change', () => {
        const result = calculateChange(80, 100);
        expect(result.absolute).toBe(-20);
        expect(result.percent).toBeCloseTo(-20, 1);
        expect(result.isPositive).toBe(false);
        expect(result.isNegative).toBe(true);
        expect(result.className).toBe('change-negative');
    });

    it('handles no change', () => {
        const result = calculateChange(100, 100);
        expect(result.absolute).toBe(0);
        expect(result.percent).toBe(0);
        expect(result.className).toBe('change-neutral');
    });

    it('handles zero previous value', () => {
        const result = calculateChange(100, 0);
        expect(result.percent).toBe(0);
        expect(result.absolute).toBe(100);
    });

    it('returns formatted percentage string', () => {
        const result = calculateChange(115, 100);
        expect(result.formatted).toBe('+15.0%');
    });
});

// ============================================================
// getHundredRupeeBreakdown
// ============================================================
describe('getHundredRupeeBreakdown', () => {
    it('calculates correct breakdown', () => {
        const result = getHundredRupeeBreakdown(10000, 100000);
        expect(result.amount).toBe('10.00');
        expect(result.display).toBe('₹10.00');
        expect(result.description).toContain('₹10.00');
    });

    it('handles small allocations', () => {
        const result = getHundredRupeeBreakdown(500, 534700);
        expect(parseFloat(result.amount)).toBeLessThan(1);
    });

    it('handles equal allocation and total', () => {
        const result = getHundredRupeeBreakdown(100, 100);
        expect(result.amount).toBe('100.00');
    });
});
