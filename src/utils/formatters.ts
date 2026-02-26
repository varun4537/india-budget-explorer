// Utility functions for formatting budget numbers

/**
 * Format amount to Indian currency format with Crore/Lakh Crore
 * @param amount - Amount in Crore
 * @param showSymbol - Whether to show ₹ symbol
 * @returns Formatted string
 */
export function formatCurrency(amount: number, showSymbol: boolean = true): string {
    const symbol = showSymbol ? '₹' : '';

    if (amount >= 100000) {
        // Lakh Crore
        return `${symbol}${(amount / 100000).toFixed(2)} Lakh Cr`;
    } else if (amount >= 1000) {
        // Thousand Crore
        return `${symbol}${(amount / 1000).toFixed(1)}K Cr`;
    } else {
        return `${symbol}${amount.toLocaleString('en-IN')} Cr`;
    }
}

/**
 * Format amount for compact display
 * @param amount - Amount in Crore
 * @returns Formatted string
 */
export function formatCompact(amount: number): string {
    if (amount >= 100000) {
        return `${(amount / 100000).toFixed(1)}L`;
    } else if (amount >= 1000) {
        return `${(amount / 1000).toFixed(0)}K`;
    }
    return amount.toLocaleString('en-IN');
}

/**
 * Format percentage with sign
 * @param value - Percentage value
 * @param showSign - Whether to show + for positive
 * @returns Formatted percentage
 */
export function formatPercent(value: number | string, showSign: boolean = true): string {
    const num = parseFloat(String(value));
    const sign = showSign && num > 0 ? '+' : '';
    return `${sign}${num.toFixed(1)}%`;
}

/**
 * Format number in Indian numbering system
 * @param num - Number to format
 * @returns Formatted number
 */
export function formatIndianNumber(num: number): string {
    return num.toLocaleString('en-IN');
}

/**
 * Format per capita amount
 * @param amount - Amount in rupees
 * @returns Formatted string
 */
export function formatPerCapita(amount: number): string {
    if (amount >= 100000) {
        return `₹${(amount / 100000).toFixed(1)} Lakh`;
    } else if (amount >= 1000) {
        return `₹${(amount / 1000).toFixed(1)}K`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
}

/**
 * Convert fiscal year to display format
 * @param fy - Fiscal year like "2024-25"
 * @returns Display format like "FY 2024-25"
 */
export function formatFiscalYear(fy: string): string {
    return `FY ${fy}`;
}

/**
 * Get short fiscal year
 * @param fy - Fiscal year like "2024-25"
 * @returns Short format like "24-25"
 */
export function formatFYShort(fy: string): string {
    const [start, end] = fy.split('-');
    return `${start.slice(2)}-${end}`;
}

export interface ChangeResult {
    absolute: number;
    percent: number;
    formatted: string;
    isPositive: boolean;
    isNegative: boolean;
    className: string;
}

/**
 * Calculate and format change
 * @param current - Current value
 * @param previous - Previous value
 * @returns Change details
 */
export function calculateChange(current: number, previous: number): ChangeResult {
    const absoluteChange = current - previous;
    const percentChange = previous ? ((absoluteChange / previous) * 100) : 0;

    return {
        absolute: absoluteChange,
        percent: percentChange,
        formatted: formatPercent(percentChange),
        isPositive: absoluteChange > 0,
        isNegative: absoluteChange < 0,
        className: absoluteChange > 0 ? 'change-positive' :
            absoluteChange < 0 ? 'change-negative' : 'change-neutral'
    };
}

export interface HundredRupeeBreakdown {
    amount: string;
    display: string;
    description: string;
}

/**
 * Format allocation as fraction of 100
 * @param allocation - Sector allocation
 * @param total - Total budget
 * @returns Breakdown info
 */
export function getHundredRupeeBreakdown(allocation: number, total: number): HundredRupeeBreakdown {
    const perHundred = (allocation / total) * 100;
    return {
        amount: perHundred.toFixed(2),
        display: `₹${perHundred.toFixed(2)}`,
        description: `Out of every ₹100, ₹${perHundred.toFixed(2)} goes here`
    };
}

export default {
    formatCurrency,
    formatCompact,
    formatPercent,
    formatIndianNumber,
    formatPerCapita,
    formatFiscalYear,
    formatFYShort,
    calculateChange,
    getHundredRupeeBreakdown
};
