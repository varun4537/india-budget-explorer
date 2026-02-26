import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useBudget } from '../../context/BudgetContext';
import './Breadcrumbs.css';

export default function Breadcrumbs() {
    const location = useLocation();
    const { currentBudget } = useBudget();

    const paths = location.pathname.split('/').filter(p => p);

    if (paths.length === 0) return null;

    const breadcrumbs = paths.map((path, index) => {
        const routeTo = `/${paths.slice(0, index + 1).join('/')}`;
        const isLast = index === paths.length - 1;

        let name = path.charAt(0).toUpperCase() + path.slice(1).replace('-', ' ');

        // Custom name mappings
        if (path === 'whats-new') name = "What's New";
        if (path === 'calculator') name = "Tax Calculator";

        // Try to resolve sector names
        if (paths[0] === 'sectors' && index === 1) {
            const sector = currentBudget?.sectors?.find(s => s.id === path);
            if (sector) name = sector.name;
        }

        return { name, routeTo, isLast };
    });

    return (
        <div className="breadcrumbs-container">
            <nav className="breadcrumbs" aria-label="breadcrumb">
                <ol className="breadcrumbs-list">
                    <li className="breadcrumbs-item">
                        <Link to="/" className="breadcrumbs-link" aria-label="Home">
                            <Home size={16} />
                        </Link>
                    </li>
                    {breadcrumbs.map((crumb) => (
                        <li key={crumb.routeTo} className="breadcrumbs-item">
                            <ChevronRight size={14} className="breadcrumbs-separator" />
                            {crumb.isLast ? (
                                <span className="breadcrumbs-current" aria-current="page">
                                    {crumb.name}
                                </span>
                            ) : (
                                <Link to={crumb.routeTo} className="breadcrumbs-link">
                                    {crumb.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
}
