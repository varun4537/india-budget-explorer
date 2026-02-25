// Utility functions for formatting budget numbers

/**
 * Format amount to Indian currency format with Crore/Lakh Crore
 * @param {number} amount - Amount in Crore
 * @param {boolean} showSymbol - Whether to show ₹ symbol
 * @returns {string} Formatted string
 */
export function formatCurrency(amount, showSymbol = true) {
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
 * @param {number} amount - Amount in Crore
 * @returns {string} Formatted string
 */
export function formatCompact(amount) {
    if (amount >= 100000) {
        return `${(amount / 100000).toFixed(1)}L`;
    } else if (amount >= 1000) {
        return `${(amount / 1000).toFixed(0)}K`;
    }
    return amount.toLocaleString('en-IN');
}

/**
 * Format percentage with sign
 * @param {number} value - Percentage value
 * @param {boolean} showSign - Whether to show + for positive
 * @returns {string} Formatted percentage
 */
export function formatPercent(value, showSign = true) {
    const num = parseFloat(value);
    const sign = showSign && num > 0 ? '+' : '';
    return `${sign}${num.toFixed(1)}%`;
}

/**
 * Format number in Indian numbering system
 * @param {number} num - Number to format
 * @returns {string} Formatted number
 */
export function formatIndianNumber(num) {
    return num.toLocaleString('en-IN');
}

/**
 * Format per capita amount
 * @param {number} amount - Amount in rupees
 * @returns {string} Formatted string
 */
export function formatPerCapita(amount) {
    if (amount >= 100000) {
        return `₹${(amount / 100000).toFixed(1)} Lakh`;
    } else if (amount >= 1000) {
        return `₹${(amount / 1000).toFixed(1)}K`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
}

/**
 * Convert fiscal year to display format
 * @param {string} fy - Fiscal year like "2024-25"
 * @returns {string} Display format like "FY 2024-25"
 */
export function formatFiscalYear(fy) {
    return `FY ${fy}`;
}

/**
 * Get short fiscal year
 * @param {string} fy - Fiscal year like "2024-25"
 * @returns {string} Short format like "24-25"
 */
export function formatFYShort(fy) {
    const [start, end] = fy.split('-');
    return `${start.slice(2)}-${end}`;
}

/**
 * Calculate and format change
 * @param {number} current - Current value
 * @param {number} previous - Previous value
 * @returns {object} Change details
 */
export function calculateChange(current, previous) {
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

/**
 * Format allocation as fraction of 100
 * @param {number} allocation - Sector allocation
 * @param {number} total - Total budget
 * @returns {object} Breakdown info
 */
export function getHundredRupeeBreakdown(allocation, total) {
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
