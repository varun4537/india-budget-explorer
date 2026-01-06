# 🇮🇳 India Budget Explorer

An interactive visualization tool to explore India's Union Budget. Understand where your tax money goes with beautiful charts, real-time insights, and comprehensive budget breakdowns.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 📊 Dashboard
- **Live Population Counter** - Real-time ticking population embedded in the hero
- **Where Every ₹100 Goes** - Visual breakdown of budget allocation
- **Revenue Sources** - Understanding where the money comes from (GST, Income Tax, etc.)
- **Economic Indicators** - GDP growth, inflation, fiscal deficit at a glance
- **Budget PDF Downloads** - Direct links to official budget documents

### 📈 Trends
- 5-year budget trend analysis (FY 2021-22 to 2025-26)
- Interactive line charts for sector comparisons
- Year-over-year growth tracking

### 🏛️ Sector Deep Dives
- 12 major sectors with detailed breakdowns
- Sub-allocation visualization with horizontal bar charts
- Key insights and government schemes
- Per capita spending calculations

### 🔍 Compare
- Side-by-side sector comparisons
- Multi-year trend comparisons
- Allocation change analysis

### 💰 Tax Calculator
- New vs Old tax regime comparison
- Personalized tax savings insights

## 🎨 Design

- **Indian Cultural Theme** - Madhubani/Santhal art-inspired design
- **Saffron accents** with earthy color palette
- **Dark mode optimized** for comfortable viewing
- **Fully responsive** - works on mobile, tablet, and desktop

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/varun4537/india-budget-explorer.git

# Navigate to project directory
cd india-budget-explorer

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite 6** - Build tool
- **React Router** - Navigation
- **Recharts** - Data visualization
- **CSS Variables** - Theming and design tokens

## 📁 Project Structure

```
india-budget-explorer/
├── src/
│   ├── components/
│   │   ├── charts/         # Recharts components
│   │   ├── features/       # Feature components (Hero, GainersLosers, etc.)
│   │   ├── layout/         # Header, Footer, Navigation
│   │   └── ui/             # Reusable UI components
│   ├── context/            # React Context for budget data
│   ├── data/               # Budget data (FY 2021-26)
│   ├── pages/              # Route pages (Dashboard, Trends, Sectors, Compare)
│   └── utils/              # Formatters and helpers
├── public/
└── index.html
```

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📄 Data Sources

Budget data is sourced from:
- [India Budget Portal](https://www.indiabudget.gov.in/)
- Ministry of Finance publications
- Economic Survey of India

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📜 License

MIT License - feel free to use this project for learning and personal projects.

## 🙏 Acknowledgments

- Design inspired by Madhubani and Santhal traditional Indian art
- Budget data from Government of India official publications

---

**Made with ❤️ for understanding India's finances better**
