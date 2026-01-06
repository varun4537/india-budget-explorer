import { useBudget } from '../context/BudgetContext';
import SectorCard from '../components/ui/SectorCard';
import SectorPieChart from '../components/charts/SectorPieChart';
import './Sectors.css';

export default function Sectors() {
    const { currentBudget, selectedYear } = useBudget();

    // Sort sectors by allocation
    const sortedSectors = [...currentBudget.sectors]
        .map(sector => ({
            ...sector,
            percentage: ((sector.allocation / currentBudget.totalBudget) * 100).toFixed(1)
        }))
        .sort((a, b) => b.allocation - a.allocation);

    return (
        <div className="sectors-page">
            <div className="container">
                <div className="page-header">
                    <h1 className="page-title">
                        <span className="title-icon">🏛️</span>
                        Budget Sectors
                    </h1>
                    <p className="page-subtitle">
                        Explore detailed allocations for all sectors in FY {selectedYear}
                    </p>
                </div>

                {/* Overview */}
                <section className="sectors-overview">
                    <div className="overview-chart">
                        <SectorPieChart
                            data={currentBudget.sectors}
                            innerRadius={80}
                            outerRadius={140}
                        />
                    </div>

                    <div className="overview-stats">
                        <div className="overview-stat">
                            <span className="stat-number">{currentBudget.sectors.length}</span>
                            <span className="stat-label">Total Sectors</span>
                        </div>
                        <div className="overview-stat">
                            <span className="stat-number">{sortedSectors[0].percentage}%</span>
                            <span className="stat-label">Largest Sector</span>
                        </div>
                        <div className="overview-stat">
                            <span className="stat-number">{sortedSectors[sortedSectors.length - 1].percentage}%</span>
                            <span className="stat-label">Smallest Sector</span>
                        </div>
                    </div>
                </section>

                {/* All Sectors Grid */}
                <section className="all-sectors">
                    <h2 className="section-title">All Sectors (Sorted by Allocation)</h2>

                    <div className="sectors-grid">
                        {sortedSectors.map((sector, index) => (
                            <SectorCard
                                key={sector.id}
                                sector={sector}
                                linkToDetails={false}
                                animate={true}
                                animationDelay={index * 50}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
