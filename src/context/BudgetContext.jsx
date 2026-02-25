import { createContext, useContext, useState, useMemo } from 'react';
import { budgetData, fiscalYears, getYoYChanges, getGainersLosers, getTotalBudgetTrend } from '../data';

const BudgetContext = createContext(null);

export function BudgetProvider({ children }) {
    const [selectedYear, setSelectedYear] = useState(fiscalYears[fiscalYears.length - 1]);
    const [theme, setTheme] = useState('dark');
    const [comparisonYear, setComparisonYear] = useState(fiscalYears[fiscalYears.length - 2]);

    // Current budget data
    const currentBudget = useMemo(() => budgetData[selectedYear], [selectedYear]);

    // Previous year for comparison
    const previousBudget = useMemo(() => {
        const idx = fiscalYears.indexOf(selectedYear);
        if (idx > 0) {
            return budgetData[fiscalYears[idx - 1]];
        }
        return null;
    }, [selectedYear]);

    // YoY changes
    const changes = useMemo(() => getYoYChanges(), []);

    // Gainers and losers
    const { gainers, losers } = useMemo(() => getGainersLosers(), []);

    // Total budget trend
    const budgetTrend = useMemo(() => getTotalBudgetTrend(), []);

    // Toggle theme
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const value = {
        // State
        selectedYear,
        setSelectedYear,
        comparisonYear,
        setComparisonYear,
        theme,
        toggleTheme,

        // Data
        allBudgets: budgetData,
        fiscalYears,
        currentBudget,
        previousBudget,
        changes,
        gainers,
        losers,
        budgetTrend
    };

    return (
        <BudgetContext.Provider value={value}>
            {children}
        </BudgetContext.Provider>
    );
}

export function useBudget() {
    const context = useContext(BudgetContext);
    if (!context) {
        throw new Error('useBudget must be used within a BudgetProvider');
    }
    return context;
}

export default BudgetContext;
