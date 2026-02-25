// Lucide icon imports
import {
  Landmark, Briefcase, Building2, Receipt, Ship, FileText,
  TrendingUp, TrendingDown, DollarSign, PiggyBank, Coins, PieChart,
  Shield, Heart, BookOpen, GraduationCap, Plane, Train,
  TreePine, Home, Users, Building, FlaskConical, Lightbulb,
  Wallet, Gift, UtensilsCrossed, Droplets, Flame, TrainFront,
  Bus, Bike, Landmark as Government, Megaphone, ArrowRight,
  Hospital, Scroll, GraduationCap as Education, Baby, Code,
  Banknote, Recycle, Factory, Cpu, Globe, Rocket, Atom,
  Mountain, Compass, Warehouse, Truck, Mail, Phone, Tv,
  Radio, Newspaper, BookMarked, HelpCircle, Info, AlertCircle,
  CheckCircle, XCircle, ArrowUpRight, ArrowDownRight, Minus, Plus,
  Search, Filter, Download, ExternalLink, Calendar, Clock,
  MapPin, User, UserCheck, UserPlus, CreditCard, Smartphone,
  Wifi, Cloud, Database, Server, Lock, Unlock, Eye, EyeOff,
  Settings, Menu, X, ChevronDown, ChevronUp, ChevronLeft, ChevronRight,
  ArrowLeft, RefreshCw, Play, Pause, SkipForward, SkipBack,
  Volume2, VolumeX, Mic, MicOff, Camera, CameraOff, Image, File,
  Folder, FolderOpen, Archive, Paperclip, Link, Share2, Copy, Printer,
  Scissors, PenTool, Type, Bold, Italic, Underline, AlignLeft, AlignCenter,
  AlignRight, List, ListOrdered, Grid, Layout, Maximize, Minimize, ZoomIn,
  ZoomOut, Move, RotateCw, RotateCcw, FlipHorizontal, FlipVertical,
  Sun, Moon, Star, ThumbsUp, ThumbsDown, Flag, Tag, Flag as FlagIcon,
  // Additional icons for sectors
  Zap, Package, Signal, Accessibility, Car, AlertTriangle, Target,
  Cross, Anchor, Navigation, Waypoints, ScanLine, Box, Route
} from 'lucide-react';

// Budget data for FY 2021-22 to 2026-27
// All amounts in ₹ Crore

export const INDIA_POPULATION = 142000; // in lakhs (1.42 billion)

// Revenue Sources (Where the money comes from) - FY 2026-27
export const revenueSources = {
  borrowings: { name: "Borrowings & Other Liabilities", amount: 1695768, percent: 31.7, icon: Landmark, color: "#ef4444" },
  incomeTax: { name: "Income Tax", amount: 1466000, percent: 27.4, icon: Briefcase, color: "#10b981" },
  corporateTax: { name: "Corporate Tax", amount: 1231000, percent: 23.0, icon: Building2, color: "#3b82f6" },
  gst: { name: "Goods & Services Tax", amount: 1019020, percent: 19.1, icon: Receipt, color: "#f59e0b" },
  customsDuty: { name: "Customs Duty", amount: 271200, percent: 5.1, icon: Ship, color: "#8b5cf6" },
  nonTaxRevenue: { name: "Non-Tax Revenue", amount: 666228, percent: 12.5, icon: FileText, color: "#14b8a6" }
};

// Budget PDFs and Documents
export const budgetDocuments = {
  "2026-27": [
    {
      name: "Budget at a Glance",
      description: "Summary of receipts and expenditure",
      url: "https://www.indiabudget.gov.in/doc/Budget_at_Glance/budget_at_a_glance.pdf",
      icon: <PieChart className="w-6 h-6" />,
      size: "2.1 MB"
    },
    {
      name: "Budget Speech",
      description: "Finance Minister's speech in Parliament",
      url: "https://www.indiabudget.gov.in/doc/budget_speech.pdf",
      icon: <Mic className="w-6 h-6" />,
      size: "1.8 MB"
    },
    {
      name: "Annual Financial Statement",
      description: "Detailed receipts and expenditure",
      url: "https://www.indiabudget.gov.in/doc/rec/allrec.pdf",
      icon: <FileText className="w-6 h-6" />,
      size: "4.2 MB"
    },
    {
      name: "Economic Survey 2025-26",
      description: "State of the economy report",
      url: "https://www.indiabudget.gov.in/economicsurvey/",
      icon: <TrendingUp className="w-6 h-6" />,
      size: "15 MB"
    },
    {
      name: "Expenditure Budget Vol-I",
      description: "Ministry-wise expenditure details",
      url: "https://www.indiabudget.gov.in/doc/eb/vol1.pdf",
      icon: <ListOrdered className="w-6 h-6" />,
      size: "8.5 MB"
    },
    {
      name: "Receipt Budget",
      description: "Detailed revenue estimates",
      url: "https://www.indiabudget.gov.in/doc/rec/allrec.pdf",
      icon: <Banknote className="w-6 h-6" />,
      size: "3.2 MB"
    }
  ],
  "2025-26": [
    {
      name: "Budget at a Glance",
      description: "Summary of receipts and expenditure",
      url: "https://www.indiabudget.gov.in/doc/Budget_at_Glance/budget_at_a_glance.pdf",
      icon: <PieChart className="w-6 h-6" />,
      size: "2.1 MB"
    },
    {
      name: "Budget Speech",
      description: "Finance Minister's speech in Parliament",
      url: "https://www.indiabudget.gov.in/doc/budget_speech.pdf",
      icon: <Mic className="w-6 h-6" />,
      size: "1.8 MB"
    },
    {
      name: "Annual Financial Statement",
      description: "Detailed receipts and expenditure",
      url: "https://www.indiabudget.gov.in/doc/rec/allrec.pdf",
      icon: <FileText className="w-6 h-6" />,
      size: "4.2 MB"
    },
    {
      name: "Economic Survey 2024-25",
      description: "State of the economy report",
      url: "https://www.indiabudget.gov.in/economicsurvey/",
      icon: <TrendingUp className="w-6 h-6" />,
      size: "15 MB"
    },
    {
      name: "Expenditure Budget Vol-I",
      description: "Ministry-wise expenditure details",
      url: "https://www.indiabudget.gov.in/doc/eb/vol1.pdf",
      icon: <ListOrdered className="w-6 h-6" />,
      size: "8.5 MB"
    },
    {
      name: "Receipt Budget",
      description: "Detailed revenue estimates",
      url: "https://www.indiabudget.gov.in/doc/rec/allrec.pdf",
      icon: <Banknote className="w-6 h-6" />,
      size: "3.2 MB"
    }
  ]
};

// Key Economic Indicators
export const economicIndicators = {
  gdpGrowth: { name: "GDP Growth Rate", value: "7.4%", trend: "up", icon: TrendingUp },
  inflation: { name: "Inflation (CPI)", value: "4.5%", trend: "down", icon: TrendingDown },
  fiscalDeficit: { name: "Fiscal Deficit", value: "4.3% of GDP", trend: "down", icon: ArrowDownRight },
  currentAccount: { name: "Current Account Deficit", value: "1.2% of GDP", trend: "stable", icon: DollarSign },
  forexReserves: { name: "Forex Reserves", value: "$640 Bn", trend: "up", icon: Landmark },
  debtToGdp: { name: "Debt-to-GDP", value: "56.8%", trend: "down", icon: TrendingDown }
};

// Quick Facts for each budget year
export const budgetQuickFacts = {
  "2026-27": [
    { fact: "Budget crosses ₹53.47 Lakh Crore milestone", icon: <Target className="w-6 h-6 text-blue-500" /> },
    { fact: "Fiscal deficit reduced to 4.3% of GDP (lowest ever)", icon: <TrendingDown className="w-6 h-6 text-green-500" /> },
    { fact: "Capital expenditure at ₹12.22 Lakh Crore (3.1% of GDP)", icon: <Building2 className="w-6 h-6 text-amber-500" /> },
    { fact: "Income Tax Act 2025 introduced for tax simplification", icon: <Briefcase className="w-6 h-6 text-indigo-500" /> },
    { fact: "Transport allocation at ₹5.98 Lakh Cr (highest ever)", icon: <Truck className="w-6 h-6 text-cyan-500" /> },
    { fact: "PM Surya Ghar: ₹22,000 Cr for 39 lakh solar installations", icon: <Sun className="w-6 h-6 text-yellow-500" /> },
    { fact: "Viksit Bharat Rozgar Yojana: ₹20,083 Cr for jobs", icon: <Users className="w-6 h-6 text-purple-500" /> },
    { fact: "MGNREGA reduced to ₹30,000 Cr (focus on skilling)", icon: <GraduationCap className="w-6 h-6 text-orange-500" /> }
  ],
  "2025-26": [
    { fact: "First budget to cross ₹50 Lakh Crore", icon: <Target className="w-6 h-6 text-blue-500" /> },
    { fact: "Capital expenditure at ₹11.5 Lakh Crore (record high)", icon: <Building2 className="w-6 h-6 text-amber-500" /> },
    { fact: "Fiscal deficit reduced to 4.5% of GDP", icon: <TrendingDown className="w-6 h-6 text-green-500" /> },
    { fact: "New income tax regime: No tax up to ₹12 Lakh", icon: <Coins className="w-6 h-6 text-yellow-500" /> },
    { fact: "₹2.66 Lakh Crore for rural development", icon: <Home className="w-6 h-6 text-emerald-500" /> },
    { fact: "100% railway electrification achieved", icon: <Zap className="w-6 h-6 text-yellow-600" /> },
    { fact: "PM Awas Yojana: 3 Cr more houses targeted", icon: <Building className="w-6 h-6 text-blue-400" /> },
    { fact: "Semiconductor manufacturing push: ₹76,000 Cr", icon: <Cpu className="w-6 h-6 text-purple-500" /> }
  ]
};

// Key Government Schemes with descriptions and official links (Imported from schemes.js)
import { keySchemeDetails } from './schemes';
export { keySchemeDetails };

// Helper function to get scheme details
export function getSchemeDetails(schemeName) {
  // Try exact match first
  if (keySchemeDetails[schemeName]) {
    return keySchemeDetails[schemeName];
  }

  // Try partial match
  const lowerName = schemeName.toLowerCase();
  for (const [key, value] of Object.entries(keySchemeDetails)) {
    if (key.toLowerCase().includes(lowerName) ||
      value.shortName.toLowerCase().includes(lowerName) ||
      value.name.toLowerCase().includes(lowerName)) {
      return value;
    }
  }

  return null;
}

export const sectorDetails = {
  defense: {
    id: "defense",
    name: "Defense",
    fullName: "Ministry of Defense",
    description: "India's defense budget covers military personnel, equipment modernization, and strategic capabilities to protect national security.",
    icon: Shield,
    color: "#f43f5e",
    subColor: "#fda4af",
    subAllocations: [
      { name: "Army", amount: 264300, description: "Personnel, equipment, maintenance", icon: Shield },
      { name: "Air Force", amount: 173420, description: "Aircraft, missiles, air defense", icon: Plane },
      { name: "Navy", amount: 119200, description: "Ships, submarines, naval aviation", icon: Ship },
      { name: "Defense Research (DRDO)", amount: 23800, description: "Indigenous weapon development", icon: FlaskConical },
      { name: "Ordnance Factories", amount: 45450, description: "Ammunition and equipment production", icon: Factory },
      { name: "Capital Acquisitions", amount: 56200, description: "New weapons and systems", icon: Target }
    ],
    insights: [
      "Defense budget is 2.1% of GDP",
      "Focus on self-reliance under 'Atmanirbhar Bharat'",
      "68% allocated to revenue expenditure (salaries, maintenance)",
      "₹1.72 lakh Cr for capital expenditure (new equipment)"
    ],
    keySchemes: ["Make in India Defense", "Defense Corridor Projects", "Agnipath Scheme"],
    perCapita: 481
  },

  healthcare: {
    id: "healthcare",
    name: "Health & Family Welfare",
    fullName: "Ministry of Health and Family Welfare",
    description: "Healthcare budget supports hospitals, medical infrastructure, disease control programs, and health insurance for the poor.",
    icon: Heart,
    color: "#10b981",
    subColor: "#6ee7b7",
    subAllocations: [
      { name: "Ayushman Bharat PM-JAY", amount: 29500, description: "Free health insurance for poor families", icon: Heart },
      { name: "AIIMS & Central Hospitals", amount: 18500, description: "Premier medical institutions", icon: Building },
      { name: "National Health Mission", amount: 24300, description: "Primary healthcare in rural areas", icon: Users },
      { name: "Medical Education", amount: 12500, description: "Medical colleges, training", icon: GraduationCap },
      { name: "Disease Control Programs", amount: 8707, description: "TB, Malaria, HIV prevention", icon: FlaskConical },
      { name: "Family Welfare", amount: 6000, description: "Maternal & child health", icon: Baby }
    ],
    insights: [
      "Government health spending is 1.8% of GDP",
      "Ayushman Bharat covers 55 Cr beneficiaries",
      "157 new medical colleges approved since 2014",
      "₹700 per person public health expenditure"
    ],
    keySchemes: ["Ayushman Bharat", "PM-ABHIM", "National Health Mission"],
    perCapita: 70
  },

  education: {
    id: "education",
    name: "Education",
    fullName: "Ministry of Education",
    description: "Education budget covers school education, higher education, skill development, and research institutions across India.",
    icon: BookOpen,
    color: "#f59e0b",
    subColor: "#fcd34d",
    subAllocations: [
      { name: "Samagra Shiksha", amount: 37500, description: "School education from pre-primary to Class 12", icon: Building },
      { name: "PM POSHAN (Mid-Day Meals)", amount: 12800, description: "Free meals for 12 Cr students", icon: UtensilsCrossed },
      { name: "Higher Education", amount: 47000, description: "Universities, IITs, IIMs, NITs", icon: GraduationCap },
      { name: "National Education Mission", amount: 15500, description: "NEP implementation, digital learning", icon: Cpu },
      { name: "Teacher Training", amount: 8500, description: "NCERT, teacher education", icon: Users },
      { name: "Research & Innovation", amount: 10435, description: "ANRF, research grants", icon: Lightbulb }
    ],
    insights: [
      "Education spending is 2.9% of GDP",
      "Per student allocation: ₹15,500/year for school education",
      "25 Cr students covered under RTE",
      "Focus on digital India and skill development"
    ],
    keySchemes: ["Samagra Shiksha", "PM POSHAN", "PM SHRI Schools", "Digital University"],
    perCapita: 93
  },

  infrastructure: {
    id: "infrastructure",
    name: "Roads & Highways",
    fullName: "Ministry of Road Transport and Highways",
    description: "Infrastructure budget focuses on building and maintaining national highways, expressways, and rural roads.",
    icon: Truck,
    color: "#06b6d4",
    subColor: "#67e8f9",
    subAllocations: [
      { name: "National Highways", amount: 145000, description: "NH construction and maintenance", icon: Route },
      { name: "Bharatmala Project", amount: 72000, description: "Economic corridors, coastal roads", icon: MapPin },
      { name: "PM Gram Sadak Yojana", amount: 38000, description: "Rural road connectivity", icon: Home },
      { name: "Expressways", amount: 28000, description: "High-speed corridors", icon: Car },
      { name: "Road Safety", amount: 8000, description: "Accident reduction, signage", icon: AlertTriangle },
      { name: "Bridge Construction", amount: 5000, description: "River bridges, flyovers", icon: Anchor }
    ],
    insights: [
      "India building 27 km of highways per day",
      "1.5 lakh km of national highways planned by 2025",
      "Bharatmala to add 34,800 km of roads",
      "Focus on last-mile connectivity"
    ],
    keySchemes: ["Bharatmala Pariyojana", "PM Gram Sadak Yojana", "Setu Bandhan"],
    perCapita: 208
  },

  railways: {
    id: "railways",
    name: "Railways",
    fullName: "Ministry of Railways",
    description: "Railways budget covers passenger and freight services, new trains, station modernization, and railway infrastructure.",
    icon: Train,
    color: "#8b5cf6",
    subColor: "#c4b5fd",
    subAllocations: [
      { name: "New Lines & Electrification", amount: 92000, description: "Expanding rail network", icon: Zap },
      { name: "Track Renewal", amount: 48000, description: "Safety upgrades, maintenance", icon: RefreshCw },
      { name: "Rolling Stock", amount: 42000, description: "Coaches, wagons, locomotives", icon: TrainFront },
      { name: "Station Redevelopment", amount: 35000, description: "World-class stations", icon: Building },
      { name: "Vande Bharat Trains", amount: 28000, description: "Semi-high-speed trains", icon: Train },
      { name: "Signaling & Safety", amount: 27000, description: "Modern signaling systems", icon: Signal }
    ],
    insights: [
      "100% railway electrification target by 2024",
      "400 new Vande Bharat trains planned",
      "Highest-ever capex for railways",
      "Focus on zero accident mission"
    ],
    keySchemes: ["Vande Bharat", "Kavach Safety System", "Amrit Bharat Stations"],
    perCapita: 192
  },

  agriculture: {
    id: "agriculture",
    name: "Agriculture & Farmers Welfare",
    fullName: "Ministry of Agriculture & Farmers Welfare",
    description: "Agriculture budget supports farmers through direct payments, crop insurance, irrigation, and market access.",
    icon: TreePine,
    color: "#84cc16",
    subColor: "#bef264",
    subAllocations: [
      { name: "PM-KISAN", amount: 60000, description: "₹6,000/year to 10 Cr farmers", icon: User },
      { name: "Fertilizer Subsidy", amount: 35000, description: "Affordable fertilizers", icon: FlaskConical },
      { name: "Crop Insurance (PMFBY)", amount: 15500, description: "Protection against crop loss", icon: Cloud },
      { name: "Irrigation (PMKSY)", amount: 12500, description: "Per drop more crop", icon: Droplets },
      { name: "Agriculture Infrastructure", amount: 8700, description: "Cold storage, markets", icon: Warehouse },
      { name: "Agricultural Research", amount: 5500, description: "ICAR, crop development", icon: FlaskConical }
    ],
    insights: [
      "Agriculture employs 42% of India's workforce",
      "PM-KISAN reaches 10+ Cr farmer families",
      "MSP increased for all 22 mandated crops",
      "Target: 50% more irrigation coverage"
    ],
    keySchemes: ["PM-KISAN", "PMFBY", "PM-KUSUM", "eNAM"],
    perCapita: 97
  },

  rural: {
    id: "rural",
    name: "Rural Development",
    fullName: "Ministry of Rural Development",
    description: "Rural development budget focuses on employment guarantee, housing, and infrastructure for India's villages.",
    icon: Home,
    color: "#22c55e",
    subColor: "#86efac",
    subAllocations: [
      { name: "MGNREGA", amount: 86000, description: "100 days guaranteed employment", icon: Users },
      { name: "PM Awas Yojana (Rural)", amount: 54500, description: "Housing for all", icon: Home },
      { name: "National Rural Livelihood", amount: 15200, description: "Self-help groups, skills", icon: Users },
      { name: "Rural Infrastructure", amount: 14000, description: "Roads, bridges, markets", icon: Truck },
      { name: "Swachh Bharat (Rural)", amount: 8000, description: "Toilets, sanitation", icon: Droplets },
      { name: "DAY-NRLM", amount: 4000, description: "Rural livelihood missions", icon: Briefcase }
    ],
    insights: [
      "MGNREGA provides jobs to 7 Cr households",
      "4 Cr rural houses built under PMAY",
      "9 Cr rural toilets constructed",
      "Target: Saturation of rural housing by 2024"
    ],
    keySchemes: ["MGNREGA", "PM Awas Yojana", "DAY-NRLM", "PMGSY"],
    perCapita: 128
  },

  social: {
    id: "social",
    name: "Social Welfare",
    fullName: "Ministry of Social Justice & Empowerment",
    description: "Social welfare budget supports marginalized communities, women empowerment, pension schemes, and social security.",
    icon: Users,
    color: "#a855f7",
    subColor: "#d8b4fe",
    subAllocations: [
      { name: "SC/ST Welfare", amount: 72000, description: "Scholarships, skill development", icon: FileText },
      { name: "PM Ujjwala Yojana", amount: 35000, description: "Free LPG connections for poor", icon: Flame },
      { name: "Women & Child Development", amount: 45000, description: "Anganwadi, nutrition", icon: Heart },
      { name: "Old Age Pension", amount: 32000, description: "Pension for seniors, widows", icon: User },
      { name: "Disability Welfare", amount: 18500, description: "Support for differently-abled", icon: Accessibility },
      { name: "Minority Welfare", amount: 23840, description: "Education, skill programs", icon: Globe }
    ],
    insights: [
      "10 Cr Ujjwala connections distributed",
      "5.8 Cr beneficiaries under pension schemes",
      "Focus on 'Sabka Saath, Sabka Vikas'",
      "Direct Benefit Transfer reduced leakages by 27%"
    ],
    keySchemes: ["PM Ujjwala", "PM Jan Dhan", "Stand Up India", "Beti Bachao Beti Padhao"],
    perCapita: 159
  },

  urban: {
    id: "urban",
    name: "Urban Development",
    fullName: "Ministry of Housing and Urban Affairs",
    description: "Urban development budget covers smart cities, metro rail, urban housing, and municipal infrastructure.",
    icon: Building,
    color: "#14b8a6",
    subColor: "#5eead4",
    subAllocations: [
      { name: "PM Awas Yojana (Urban)", amount: 35000, description: "Affordable housing in cities", icon: Building },
      { name: "Smart Cities Mission", amount: 18500, description: "100 smart cities development", icon: Lightbulb },
      { name: "Metro Rail Projects", amount: 22000, description: "Urban mass transit", icon: Train },
      { name: "AMRUT", amount: 8600, description: "Water, sewerage in 500 cities", icon: Droplets },
      { name: "Swachh Bharat (Urban)", amount: 5000, description: "Urban sanitation, waste", icon: Recycle },
      { name: "Urban Transport", amount: 3000, description: "Buses, infrastructure", icon: Bus }
    ],
    insights: [
      "1.2 Cr urban houses sanctioned under PMAY",
      "27 cities have operational metro",
      "Smart Cities Mission covers 100 cities",
      "Focus on circular economy and sustainability"
    ],
    keySchemes: ["PMAY-Urban", "Smart Cities", "AMRUT", "Swachh Bharat Urban"],
    perCapita: 65
  },

  science: {
    id: "science",
    name: "Science & Technology",
    fullName: "Ministry of Science and Technology",
    description: "Science budget supports space exploration (ISRO), atomic energy, scientific research, and innovation.",
    icon: FlaskConical,
    color: "#6366f1",
    subColor: "#a5b4fc",
    subAllocations: [
      { name: "ISRO (Space)", amount: 7800, description: "Satellites, launch vehicles", icon: Rocket },
      { name: "Atomic Energy", amount: 4500, description: "Nuclear power, research", icon: Atom },
      { name: "CSIR Labs", amount: 2500, description: "Scientific & industrial research", icon: FlaskConical },
      { name: "DST Programs", amount: 1800, description: "Science promotion, grants", icon: Lightbulb },
      { name: "Biotechnology", amount: 1100, description: "Biotech research, vaccines", icon: FlaskConical },
      { name: "Earth Sciences", amount: 500, description: "Weather, ocean, seismology", icon: Globe }
    ],
    insights: [
      "ISRO's Chandrayaan-3 successful moon landing",
      "India's R&D spending is 0.7% of GDP",
      "Push for 50% indigenous technology",
      "Focus on semiconductor manufacturing"
    ],
    keySchemes: ["Gaganyaan", "National Quantum Mission", "Semiconductor Mission"],
    perCapita: 13
  },

  interest: {
    id: "interest",
    name: "Interest Payments",
    fullName: "Debt Servicing",
    description: "Interest payments on government borrowings form the largest expenditure item, covering domestic and external debt.",
    icon: Wallet,
    color: "#78716c",
    subColor: "#a8a29e",
    subAllocations: [
      { name: "Internal Debt Interest", amount: 1150000, description: "Interest on government securities", icon: Landmark },
      { name: "External Debt Interest", amount: 45000, description: "Interest on foreign loans", icon: Globe },
      { name: "State Government Loans", amount: 35000, description: "Interest on state advances", icon: Government },
      { name: "Small Savings Interest", amount: 30842, description: "PPF, NSC, postal savings", icon: PiggyBank }
    ],
    insights: [
      "Interest payments are 25% of total revenue",
      "Debt-to-GDP ratio is 57%",
      "Largest single expenditure item",
      "Focus on fiscal consolidation"
    ],
    keySchemes: [],
    perCapita: 888
  },

  subsidies: {
    id: "subsidies",
    name: "Subsidies",
    fullName: "Central Subsidies",
    description: "Subsidies make essential commodities affordable for the poor, covering food, fuel, and fertilizers.",
    icon: Gift,
    color: "#ec4899",
    subColor: "#f9a8d4",
    subAllocations: [
      { name: "Food Subsidy", amount: 205000, description: "Free/subsidized ration to 80 Cr people", icon: UtensilsCrossed },
      { name: "Fertilizer Subsidy", amount: 164000, description: "Affordable fertilizers for farmers", icon: FlaskConical },
      { name: "LPG Subsidy", amount: 22000, description: "Cooking gas for poor households", icon: Flame },
      { name: "Interest Subvention", amount: 12000, description: "Cheap loans for farmers, MSMEs", icon: TrendingDown },
      { name: "Other Subsidies", amount: 9126, description: "Railways, exports, etc.", icon: Package }
    ],
    insights: [
      "Food subsidy benefits 80 Cr people via NFSA",
      "Direct Benefit Transfer reduced leakages",
      "Fertilizer subsidy protects farmers from price shocks",
      "Targeted subsidies replacing universal ones"
    ],
    keySchemes: ["NFSA", "PM Garib Kalyan Anna Yojana", "DBT"],
    perCapita: 290
  },

  transport: {
    id: "transport",
    name: "Transport",
    fullName: "Ministry of Road Transport, Highways & Railways",
    description: "Transport budget covers railways, civilian aviation, roads, highways, and shipping to improve nation-wide connectivity and reduce logistics costs.",
    icon: Truck,
    color: "#06b6d4",
    subColor: "#67e8f9",
    subAllocations: [
      { name: "Railways Allocation", amount: 272000, description: "Capital support for Indian Railways", icon: Train },
      { name: "Roads & Highways", amount: 296000, description: "National Highways & Expressways targeting 10,000 km", icon: Route },
      { name: "Aviation & Shipping", amount: 30520, description: "Airports and maritime infrastructure", icon: Plane }
    ],
    insights: [
      "Highest ever allocation for the transport sector at ₹5.98 Lakh Cr.",
      "Targeting 10,000 km of new highways via NHAI.",
      "Focus on reducing logistics costs across the nation.",
      "Significant boost to EV infrastructure and Vande Bharat expansion."
    ],
    keySchemes: ["PM GatiShakti", "Bharatmala", "Vande Bharat", "PM E-DRIVE"],
    perCapita: 421
  }
};

export const budgetData = {
  "2025-26": {
    fiscalYear: "2025-26",
    presented: "February 1, 2025",
    totalBudget: 5042120,
    totalExpenditure: 5042120,
    revenueReceipts: 3026244,
    capitalExpenditure: 1150000,
    fiscalDeficit: {
      amount: 1804892,
      percentGDP: 4.5
    },
    sectors: [
      { id: "defense", name: "Defense", allocation: 682370, color: "#f43f5e", icon: Shield },
      { id: "healthcare", name: "Health & Family Welfare", allocation: 99507, color: "#10b981", icon: Heart },
      { id: "education", name: "Education", allocation: 131735, color: "#f59e0b", icon: BookOpen },
      { id: "infrastructure", name: "Roads & Highways", allocation: 296000, color: "#06b6d4", icon: Route },
      { id: "railways", name: "Railways", allocation: 272000, color: "#8b5cf6", icon: Train },
      { id: "agriculture", name: "Agriculture & Farmers Welfare", allocation: 137200, color: "#84cc16", icon: TreePine },
      { id: "rural", name: "Rural Development", allocation: 181700, color: "#22c55e", icon: Home },
      { id: "social", name: "Social Welfare", allocation: 226340, color: "#a855f7", icon: Users },
      { id: "urban", name: "Urban Development", allocation: 92100, color: "#14b8a6", icon: Building },
      { id: "science", name: "Science & Technology", allocation: 18200, color: "#6366f1", icon: FlaskConical },
      { id: "interest", name: "Interest Payments", allocation: 1260842, color: "#78716c", icon: Wallet },
      { id: "subsidies", name: "Subsidies", allocation: 412126, color: "#ec4899", icon: Gift }
    ],
    highlights: [
      "Total budget crosses ₹50 lakh Cr for first time",
      "Focus on Viksit Bharat 2047 vision",
      "New tax slabs provide relief to middle class",
      "No income tax up to ₹12 Lakh under new regime",
      "₹1.5 Lakh Cr for Jal Jeevan Mission",
      "Green energy transition: ₹35,000 Cr",
      "Semiconductor manufacturing push: ₹76,000 Cr",
      "100 new Kendriya Vidyalayas announced"
    ]
  },
  "2026-27": {
    fiscalYear: "2026-27",
    presented: "February 1, 2026",
    totalBudget: 5347315,
    totalExpenditure: 5347315,
    revenueReceipts: 3533150,
    capitalExpenditure: 1221821,
    fiscalDeficit: {
      amount: 1695768,
      percentGDP: 4.3
    },
    sectors: [
      { id: "defense", name: "Defense", allocation: 594585, color: "#f43f5e", icon: Shield },
      { id: "pension", name: "Pension", allocation: 296214, color: "#64748b", icon: User },
      { id: "transport", name: "Transport", allocation: 598520, color: "#06b6d4", icon: Truck },
      { id: "agriculture", name: "Agriculture & Farmers Welfare", allocation: 162671, color: "#84cc16", icon: TreePine },
      { id: "rural", name: "Rural Development", allocation: 273108, color: "#22c55e", icon: Home },
      { id: "education", name: "Education", allocation: 139289, color: "#f59e0b", icon: BookOpen },
      { id: "interest", name: "Interest Payments", allocation: 1403972, color: "#78716c", icon: Wallet },
      { id: "energy", name: "Energy", allocation: 109029, color: "#eab308", icon: Zap },
      { id: "healthcare", name: "Health & Family Welfare", allocation: 104599, color: "#10b981", icon: Heart },
      { id: "urban", name: "Urban Development", allocation: 85522, color: "#14b8a6", icon: Building },
      { id: "infrastructure", name: "Roads & Highways", allocation: 187293, color: "#0891b2", icon: Route },
      { id: "science", name: "Science & Technology", allocation: 55756, color: "#6366f1", icon: FlaskConical },
      { id: "social", name: "Social Welfare", allocation: 62362, color: "#a855f7", icon: Users },
      { id: "commerce", name: "Commerce & Industry", allocation: 70296, color: "#f97316", icon: Factory },
      { id: "subsidies", name: "Subsidies", allocation: 455000, color: "#ec4899", icon: Gift },
      { id: "northEast", name: "North East Development", allocation: 6812, color: "#0d9488", icon: Mountain },
      { id: "home", name: "Home Affairs", allocation: 255234, color: "#be185d", icon: Building2 },
      { id: "external", name: "External Affairs", allocation: 22119, color: "#1e40af", icon: Globe }
    ],
    highlights: [
      "Budget crosses ₹53.47 Lakh Crore milestone",
      "Fiscal deficit reduced to 4.3% of GDP (from 4.4%)",
      "Capital expenditure at ₹12.22 Lakh Crore (3.1% of GDP)",
      "Income Tax Act, 2025 introduced for tax simplification",
      "PM Surya Ghar: ₹22,000 Cr for rooftop solar (39 lakh installations)",
      "Green Hydrogen Mission: ₹600 Cr for 0.1 MMTPA capacity",
      "Transport allocation at ₹5.98 Lakh Cr (highest ever)",
      "Roads (NHAI): ₹1.87 Lakh Cr targeting 10,000 km of new highways",
      "Semiconductor push: ₹8,000 Cr for chip manufacturing",
      "PM-KISAN: ₹63,500 Cr for farmer income support",
      "Viksit Bharat Rozgar Yojana: ₹20,083 Cr for employment",
      "MGNREGA: ₹30,000 Cr (reduced from ₹86,000 Cr)",
      "Jal Jeevan Mission: ₹67,670 Cr for piped water to all households"
    ]
  }
};

// Get all fiscal years
export const fiscalYears = Object.keys(budgetData).sort();

// Get latest budget
export const latestBudget = budgetData[fiscalYears[fiscalYears.length - 1]];

// Get sector list
export const sectorsList = latestBudget.sectors.map(s => ({
  id: s.id,
  name: s.name,
  color: s.color,
  icon: s.icon
}));

// Get sector details by ID
export function getSectorDetails(sectorId) {
  if (sectorDetails[sectorId]) {
    return sectorDetails[sectorId];
  }

  // Find in latest budget to provide a robust fallback
  const fallbackSector = budgetData["2026-27"]?.sectors.find(s => s.id === sectorId) ||
    budgetData["2025-26"]?.sectors.find(s => s.id === sectorId);

  if (fallbackSector) {
    return {
      id: fallbackSector.id,
      name: fallbackSector.name,
      fullName: `Ministry of ${fallbackSector.name}`,
      description: `Budgetary allocation and provisions for the ${fallbackSector.name} sector.`,
      icon: fallbackSector.icon || PieChart,
      color: fallbackSector.color || "#888",
      subColor: fallbackSector.color || "#aaa",
      subAllocations: [
        { name: "General Allocation", amount: fallbackSector.allocation, description: `Primary funding for ${fallbackSector.name}`, icon: fallbackSector.icon || PieChart }
      ],
      insights: [
        `${fallbackSector.name} is a key focus area in the current budget.`,
        `Per capita allocation stands at ₹${getPerCapita(fallbackSector.allocation)}.`
      ],
      keySchemes: [],
      perCapita: getPerCapita(fallbackSector.allocation)
    };
  }

  return null;
}

// Calculate trend data for a specific sector
export function getSectorTrend(sectorId) {
  return fiscalYears.map(year => {
    const sector = budgetData[year].sectors.find(s => s.id === sectorId);
    return {
      year,
      allocation: sector ? sector.allocation : 0,
      name: sector ? sector.name : sectorId
    };
  });
}

// Calculate YoY change for all sectors
export function getYoYChanges() {
  const currentYear = fiscalYears[fiscalYears.length - 1];
  const previousYear = fiscalYears[fiscalYears.length - 2];

  const current = budgetData[currentYear];
  const previous = budgetData[previousYear];

  return current.sectors.map(sector => {
    const prevSector = previous.sectors.find(s => s.id === sector.id);
    const prevAllocation = prevSector ? prevSector.allocation : 0;
    const change = sector.allocation - prevAllocation;
    const changePercent = prevAllocation ? ((change / prevAllocation) * 100).toFixed(1) : 0;

    return {
      ...sector,
      previousAllocation: prevAllocation,
      change,
      changePercent: parseFloat(changePercent)
    };
  });
}

// Get top gainers and losers
export function getGainersLosers() {
  const changes = getYoYChanges();
  const sorted = [...changes].sort((a, b) => b.changePercent - a.changePercent);

  return {
    gainers: sorted.slice(0, 3),
    losers: sorted.slice(-3).reverse()
  };
}

// Calculate per capita spending
export function getPerCapita(amount) {
  return Math.round(amount * 10000000 / (INDIA_POPULATION * 100000));
}

// Get total budget trend
export function getTotalBudgetTrend() {
  return fiscalYears.map(year => ({
    year,
    total: budgetData[year].totalBudget,
    inLakhCrore: (budgetData[year].totalBudget / 100000).toFixed(2)
  }));
}

// Get composition for a specific year
export function getBudgetComposition(year) {
  const budget = budgetData[year];
  if (!budget) return [];

  const total = budget.sectors.reduce((sum, s) => sum + s.allocation, 0);

  return budget.sectors.map(sector => ({
    ...sector,
    percentage: ((sector.allocation / total) * 100).toFixed(1)
  }));
}

// Get budget documents for a year
export function getBudgetDocuments(year) {
  return budgetDocuments[year] || budgetDocuments["2025-26"];
}

// Get quick facts
export function getQuickFacts(year) {
  return budgetQuickFacts[year] || budgetQuickFacts["2025-26"];
}

// Get revenue sources
export function getRevenueSources() {
  return Object.values(revenueSources);
}

// Get economic indicators
export function getEconomicIndicators() {
  return economicIndicators;
}

export default budgetData;
