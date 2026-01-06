// Budget data for FY 2021-22 to 2025-26
// All amounts in ₹ Crore

export const INDIA_POPULATION = 142000; // in lakhs (1.42 billion)

// Revenue Sources (Where the money comes from) - FY 2025-26
export const revenueSources = {
  borrowings: { name: "Borrowings & Other Liabilities", amount: 1601876, percent: 31.8, icon: "🏦", color: "#ef4444" },
  gst: { name: "Goods & Services Tax", amount: 1076460, percent: 21.3, icon: "🧾", color: "#f59e0b" },
  incomeTax: { name: "Income Tax", amount: 1102000, percent: 21.9, icon: "💼", color: "#10b981" },
  corporateTax: { name: "Corporate Tax", amount: 949000, percent: 18.8, icon: "🏢", color: "#3b82f6" },
  customsDuty: { name: "Customs Duty", amount: 225000, percent: 4.5, icon: "🚢", color: "#8b5cf6" },
  exciseDuty: { name: "Excise Duty", amount: 318784, percent: 6.3, icon: "⛽", color: "#ec4899" },
  nonTaxRevenue: { name: "Non-Tax Revenue", amount: 269000, percent: 5.3, icon: "📄", color: "#14b8a6" }
};

// Budget PDFs and Documents
export const budgetDocuments = {
  "2025-26": [
    {
      name: "Budget at a Glance",
      description: "Summary of receipts and expenditure",
      url: "https://www.indiabudget.gov.in/doc/Budget_at_Glance/budget_at_a_glance.pdf",
      icon: "📊",
      size: "2.1 MB"
    },
    {
      name: "Budget Speech",
      description: "Finance Minister's speech in Parliament",
      url: "https://www.indiabudget.gov.in/doc/budget_speech.pdf",
      icon: "🎤",
      size: "1.8 MB"
    },
    {
      name: "Annual Financial Statement",
      description: "Detailed receipts and expenditure",
      url: "https://www.indiabudget.gov.in/doc/rec/allrec.pdf",
      icon: "📋",
      size: "4.2 MB"
    },
    {
      name: "Economic Survey 2024-25",
      description: "State of the economy report",
      url: "https://www.indiabudget.gov.in/economicsurvey/",
      icon: "📈",
      size: "15 MB"
    },
    {
      name: "Expenditure Budget Vol-I",
      description: "Ministry-wise expenditure details",
      url: "https://www.indiabudget.gov.in/doc/eb/vol1.pdf",
      icon: "📑",
      size: "8.5 MB"
    },
    {
      name: "Receipt Budget",
      description: "Detailed revenue estimates",
      url: "https://www.indiabudget.gov.in/doc/rec/allrec.pdf",
      icon: "💰",
      size: "3.2 MB"
    }
  ]
};

// Key Economic Indicators
export const economicIndicators = {
  gdpGrowth: { name: "GDP Growth Rate", value: "6.5%", trend: "up", icon: "📈" },
  inflation: { name: "Inflation (CPI)", value: "4.5%", trend: "down", icon: "📊" },
  fiscalDeficit: { name: "Fiscal Deficit", value: "4.5% of GDP", trend: "down", icon: "📉" },
  currentAccount: { name: "Current Account Deficit", value: "1.2% of GDP", trend: "stable", icon: "💹" },
  forexReserves: { name: "Forex Reserves", value: "$640 Bn", trend: "up", icon: "🏦" },
  debtToGdp: { name: "Debt-to-GDP", value: "56.8%", trend: "down", icon: "📊" }
};

// Quick Facts for each budget year
export const budgetQuickFacts = {
  "2025-26": [
    { fact: "First budget to cross ₹50 Lakh Crore", icon: "🎯" },
    { fact: "Capital expenditure at ₹11.5 Lakh Crore (record high)", icon: "🏗️" },
    { fact: "Fiscal deficit reduced to 4.5% of GDP", icon: "📉" },
    { fact: "New income tax regime: No tax up to ₹12 Lakh", icon: "💰" },
    { fact: "₹2.66 Lakh Crore for rural development", icon: "🏡" },
    { fact: "100% railway electrification achieved", icon: "⚡" },
    { fact: "PM Awas Yojana: 3 Cr more houses targeted", icon: "🏠" },
    { fact: "Semiconductor manufacturing push: ₹76,000 Cr", icon: "💻" }
  ]
};

// Key Government Schemes with descriptions and official links
export const keySchemeDetails = {
  // Health Schemes
  "Ayushman Bharat": {
    name: "Ayushman Bharat - PM Jan Arogya Yojana",
    shortName: "AB-PMJAY",
    description: "World's largest health insurance scheme providing ₹5 lakh health cover to 50 Cr beneficiaries for secondary and tertiary care hospitalization.",
    launched: "2018",
    url: "https://pmjay.gov.in/",
    category: "Health"
  },
  "PM Aatmanirbhar Swasth Bharat": {
    name: "PM Aatmanirbhar Swasth Bharat Yojana",
    shortName: "PMASBY",
    description: "Launched with ₹64,180 Cr outlay to develop health infrastructure, labs, and surveillance systems across the country.",
    launched: "2021",
    url: "https://www.pmnrf.gov.in/",
    category: "Health"
  },
  "NHM": {
    name: "National Health Mission",
    shortName: "NHM",
    description: "Umbrella program for rural and urban health covering maternal health, immunization, and disease control programs.",
    launched: "2013",
    url: "https://nhm.gov.in/",
    category: "Health"
  },

  // Education Schemes
  "NEP 2020": {
    name: "National Education Policy 2020",
    shortName: "NEP",
    description: "Comprehensive education reform focusing on foundational literacy, flexible curriculum, and multidisciplinary education from school to higher education.",
    launched: "2020",
    url: "https://www.education.gov.in/nep/",
    category: "Education"
  },
  "Samagra Shiksha": {
    name: "Samagra Shiksha Abhiyan",
    shortName: "SSA",
    description: "Integrated scheme for school education from pre-primary to class XII covering infrastructure, teachers, and quality improvement.",
    launched: "2018",
    url: "https://samagra.education.gov.in/",
    category: "Education"
  },
  "PM-USHA": {
    name: "PM Uchchatar Shiksha Abhiyan",
    shortName: "PM-USHA",
    description: "Scheme for higher education institutions to improve quality and access through infrastructure grants.",
    launched: "2022",
    url: "https://www.education.gov.in/",
    category: "Education"
  },

  // Agriculture Schemes
  "PM-KISAN": {
    name: "PM Kisan Samman Nidhi",
    shortName: "PM-KISAN",
    description: "Direct income support of ₹6,000 per year to 11 Cr+ farmer families in three equal installments via DBT.",
    launched: "2019",
    url: "https://pmkisan.gov.in/",
    category: "Agriculture"
  },
  "PM Fasal Bima": {
    name: "PM Fasal Bima Yojana",
    shortName: "PMFBY",
    description: "Crop insurance scheme with low premium (2% kharif, 1.5% rabi) protecting farmers against crop failure due to natural calamities.",
    launched: "2016",
    url: "https://pmfby.gov.in/",
    category: "Agriculture"
  },
  "Kisan Credit Card": {
    name: "Kisan Credit Card Scheme",
    shortName: "KCC",
    description: "Provides farmers with credit up to ₹3 lakh at subsidized 4% interest rate for agricultural and allied needs.",
    launched: "1998",
    url: "https://www.nabard.org/",
    category: "Agriculture"
  },

  // Rural Development
  "PM Awas Yojana": {
    name: "Pradhan Mantri Awas Yojana",
    shortName: "PMAY",
    description: "Housing for All scheme providing subsidy of ₹1.2-2.67 lakh for building pucca houses for rural and urban poor.",
    launched: "2015",
    url: "https://pmaymis.gov.in/",
    category: "Housing"
  },
  "MGNREGA": {
    name: "Mahatma Gandhi National Rural Employment Guarantee Act",
    shortName: "MGNREGA",
    description: "Guarantees 100 days of wage employment per year to rural households willing to do unskilled manual work.",
    launched: "2005",
    url: "https://nrega.nic.in/",
    category: "Employment"
  },
  "Jal Jeevan Mission": {
    name: "Jal Jeevan Mission",
    shortName: "JJM",
    description: "Aims to provide piped water supply (Har Ghar Jal) to all rural households by 2024. Over 14 Cr tap connections provided.",
    launched: "2019",
    url: "https://jaljeevanmission.gov.in/",
    category: "Water"
  },

  // Social Welfare
  "PM Ujjwala Yojana": {
    name: "Pradhan Mantri Ujjwala Yojana",
    shortName: "PMUY",
    description: "Free LPG connections to BPL families, over 9.5 Cr connections provided to women for clean cooking fuel.",
    launched: "2016",
    url: "https://www.pmuy.gov.in/",
    category: "Social Welfare"
  },
  "DBT": {
    name: "Direct Benefit Transfer",
    shortName: "DBT",
    description: "Transfers government subsidies and benefits directly to beneficiary bank accounts, saving ₹2.7 lakh Cr from leakages.",
    launched: "2013",
    url: "https://dbtbharat.gov.in/",
    category: "Governance"
  },
  "NFSA": {
    name: "National Food Security Act",
    shortName: "NFSA",
    description: "Provides subsidized food grains (rice at ₹3/kg, wheat at ₹2/kg) to 80 Cr beneficiaries through PDS.",
    launched: "2013",
    url: "https://nfsa.gov.in/",
    category: "Food Security"
  },

  // Infrastructure
  "PM GatiShakti": {
    name: "PM Gati Shakti National Master Plan",
    shortName: "PM GatiShakti",
    description: "₹100 lakh Cr integrated infrastructure plan for multimodal connectivity covering roads, railways, ports, and logistics.",
    launched: "2021",
    url: "https://pmgatishakti.gov.in/",
    category: "Infrastructure"
  },
  "Bharatmala": {
    name: "Bharatmala Pariyojana",
    shortName: "Bharatmala",
    description: "Mega highway development project to build 83,677 km of roads including economic corridors and border roads.",
    launched: "2017",
    url: "https://morth.nic.in/",
    category: "Roads"
  },
  "Vande Bharat": {
    name: "Vande Bharat Express",
    shortName: "Vande Bharat",
    description: "India's indigenous semi-high speed train with 180 km/h capability, 102 trains operational across the country.",
    launched: "2019",
    url: "https://indianrailways.gov.in/",
    category: "Railways"
  },

  // Women Empowerment
  "Lakhpati Didi": {
    name: "Lakhpati Didi Scheme",
    shortName: "Lakhpati Didi",
    description: "Aims to enable 3 Cr women in Self-Help Groups to earn sustainable income of ₹1 lakh or more annually.",
    launched: "2023",
    url: "https://nrlm.gov.in/",
    category: "Women Empowerment"
  }
};

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
    icon: "🛡️",
    color: "#f43f5e",
    subColor: "#fda4af",
    subAllocations: [
      { name: "Army", amount: 264300, description: "Personnel, equipment, maintenance", icon: "🎖️" },
      { name: "Air Force", amount: 173420, description: "Aircraft, missiles, air defense", icon: "✈️" },
      { name: "Navy", amount: 119200, description: "Ships, submarines, naval aviation", icon: "🚢" },
      { name: "Defense Research (DRDO)", amount: 23800, description: "Indigenous weapon development", icon: "🔬" },
      { name: "Ordnance Factories", amount: 45450, description: "Ammunition and equipment production", icon: "🏭" },
      { name: "Capital Acquisitions", amount: 56200, description: "New weapons and systems", icon: "🎯" }
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
    icon: "🏥",
    color: "#10b981",
    subColor: "#6ee7b7",
    subAllocations: [
      { name: "Ayushman Bharat PM-JAY", amount: 29500, description: "Free health insurance for poor families", icon: "💳" },
      { name: "AIIMS & Central Hospitals", amount: 18500, description: "Premier medical institutions", icon: "🏛️" },
      { name: "National Health Mission", amount: 24300, description: "Primary healthcare in rural areas", icon: "👨‍⚕️" },
      { name: "Medical Education", amount: 12500, description: "Medical colleges, training", icon: "📖" },
      { name: "Disease Control Programs", amount: 8707, description: "TB, Malaria, HIV prevention", icon: "🦠" },
      { name: "Family Welfare", amount: 6000, description: "Maternal & child health", icon: "👶" }
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
    icon: "📚",
    color: "#f59e0b",
    subColor: "#fcd34d",
    subAllocations: [
      { name: "Samagra Shiksha", amount: 37500, description: "School education from pre-primary to Class 12", icon: "🏫" },
      { name: "PM POSHAN (Mid-Day Meals)", amount: 12800, description: "Free meals for 12 Cr students", icon: "🍱" },
      { name: "Higher Education", amount: 47000, description: "Universities, IITs, IIMs, NITs", icon: "🎓" },
      { name: "National Education Mission", amount: 15500, description: "NEP implementation, digital learning", icon: "💻" },
      { name: "Teacher Training", amount: 8500, description: "NCERT, teacher education", icon: "👩‍🏫" },
      { name: "Research & Innovation", amount: 10435, description: "ANRF, research grants", icon: "🔬" }
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
    icon: "🛣️",
    color: "#06b6d4",
    subColor: "#67e8f9",
    subAllocations: [
      { name: "National Highways", amount: 145000, description: "NH construction and maintenance", icon: "🛤️" },
      { name: "Bharatmala Project", amount: 72000, description: "Economic corridors, coastal roads", icon: "🌉" },
      { name: "PM Gram Sadak Yojana", amount: 38000, description: "Rural road connectivity", icon: "🏘️" },
      { name: "Expressways", amount: 28000, description: "High-speed corridors", icon: "🚗" },
      { name: "Road Safety", amount: 8000, description: "Accident reduction, signage", icon: "⚠️" },
      { name: "Bridge Construction", amount: 5000, description: "River bridges, flyovers", icon: "🌁" }
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
    icon: "🚂",
    color: "#8b5cf6",
    subColor: "#c4b5fd",
    subAllocations: [
      { name: "New Lines & Electrification", amount: 92000, description: "Expanding rail network", icon: "⚡" },
      { name: "Track Renewal", amount: 48000, description: "Safety upgrades, maintenance", icon: "🛤️" },
      { name: "Rolling Stock", amount: 42000, description: "Coaches, wagons, locomotives", icon: "🚃" },
      { name: "Station Redevelopment", amount: 35000, description: "World-class stations", icon: "🏗️" },
      { name: "Vande Bharat Trains", amount: 28000, description: "Semi-high-speed trains", icon: "🚄" },
      { name: "Signaling & Safety", amount: 27000, description: "Modern signaling systems", icon: "🚦" }
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
    icon: "🌾",
    color: "#84cc16",
    subColor: "#bef264",
    subAllocations: [
      { name: "PM-KISAN", amount: 60000, description: "₹6,000/year to 10 Cr farmers", icon: "🧑‍🌾" },
      { name: "Fertilizer Subsidy", amount: 35000, description: "Affordable fertilizers", icon: "🧪" },
      { name: "Crop Insurance (PMFBY)", amount: 15500, description: "Protection against crop loss", icon: "🌧️" },
      { name: "Irrigation (PMKSY)", amount: 12500, description: "Per drop more crop", icon: "💧" },
      { name: "Agriculture Infrastructure", amount: 8700, description: "Cold storage, markets", icon: "🏪" },
      { name: "Agricultural Research", amount: 5500, description: "ICAR, crop development", icon: "🔬" }
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
    icon: "🏡",
    color: "#22c55e",
    subColor: "#86efac",
    subAllocations: [
      { name: "MGNREGA", amount: 86000, description: "100 days guaranteed employment", icon: "👷" },
      { name: "PM Awas Yojana (Rural)", amount: 54500, description: "Housing for all", icon: "🏠" },
      { name: "National Rural Livelihood", amount: 15200, description: "Self-help groups, skills", icon: "👩‍👩‍👧‍👦" },
      { name: "Rural Infrastructure", amount: 14000, description: "Roads, bridges, markets", icon: "🛤️" },
      { name: "Swachh Bharat (Rural)", amount: 8000, description: "Toilets, sanitation", icon: "🚽" },
      { name: "DAY-NRLM", amount: 4000, description: "Rural livelihood missions", icon: "💼" }
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
    icon: "🤝",
    color: "#a855f7",
    subColor: "#d8b4fe",
    subAllocations: [
      { name: "SC/ST Welfare", amount: 72000, description: "Scholarships, skill development", icon: "📜" },
      { name: "PM Ujjwala Yojana", amount: 35000, description: "Free LPG connections for poor", icon: "🔥" },
      { name: "Women & Child Development", amount: 45000, description: "Anganwadi, nutrition", icon: "👩‍👧" },
      { name: "Old Age Pension", amount: 32000, description: "Pension for seniors, widows", icon: "👴" },
      { name: "Disability Welfare", amount: 18500, description: "Support for differently-abled", icon: "♿" },
      { name: "Minority Welfare", amount: 23840, description: "Education, skill programs", icon: "🕌" }
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
    icon: "🏙️",
    color: "#14b8a6",
    subColor: "#5eead4",
    subAllocations: [
      { name: "PM Awas Yojana (Urban)", amount: 35000, description: "Affordable housing in cities", icon: "🏢" },
      { name: "Smart Cities Mission", amount: 18500, description: "100 smart cities development", icon: "🌆" },
      { name: "Metro Rail Projects", amount: 22000, description: "Urban mass transit", icon: "🚇" },
      { name: "AMRUT", amount: 8600, description: "Water, sewerage in 500 cities", icon: "🚰" },
      { name: "Swachh Bharat (Urban)", amount: 5000, description: "Urban sanitation, waste", icon: "♻️" },
      { name: "Urban Transport", amount: 3000, description: "Buses, infrastructure", icon: "🚌" }
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
    icon: "🔬",
    color: "#6366f1",
    subColor: "#a5b4fc",
    subAllocations: [
      { name: "ISRO (Space)", amount: 7800, description: "Satellites, launch vehicles", icon: "🚀" },
      { name: "Atomic Energy", amount: 4500, description: "Nuclear power, research", icon: "⚛️" },
      { name: "CSIR Labs", amount: 2500, description: "Scientific & industrial research", icon: "🧪" },
      { name: "DST Programs", amount: 1800, description: "Science promotion, grants", icon: "💡" },
      { name: "Biotechnology", amount: 1100, description: "Biotech research, vaccines", icon: "🧬" },
      { name: "Earth Sciences", amount: 500, description: "Weather, ocean, seismology", icon: "🌍" }
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
    icon: "💰",
    color: "#78716c",
    subColor: "#a8a29e",
    subAllocations: [
      { name: "Internal Debt Interest", amount: 1150000, description: "Interest on government securities", icon: "📊" },
      { name: "External Debt Interest", amount: 45000, description: "Interest on foreign loans", icon: "🌐" },
      { name: "State Government Loans", amount: 35000, description: "Interest on state advances", icon: "🏛️" },
      { name: "Small Savings Interest", amount: 30842, description: "PPF, NSC, postal savings", icon: "🏦" }
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
    icon: "🎁",
    color: "#ec4899",
    subColor: "#f9a8d4",
    subAllocations: [
      { name: "Food Subsidy", amount: 205000, description: "Free/subsidized ration to 80 Cr people", icon: "🍚" },
      { name: "Fertilizer Subsidy", amount: 164000, description: "Affordable fertilizers for farmers", icon: "🧪" },
      { name: "LPG Subsidy", amount: 22000, description: "Cooking gas for poor households", icon: "🔥" },
      { name: "Interest Subvention", amount: 12000, description: "Cheap loans for farmers, MSMEs", icon: "📉" },
      { name: "Other Subsidies", amount: 9126, description: "Railways, exports, etc.", icon: "📦" }
    ],
    insights: [
      "Food subsidy benefits 80 Cr people via NFSA",
      "Direct Benefit Transfer reduced leakages",
      "Fertilizer subsidy protects farmers from price shocks",
      "Targeted subsidies replacing universal ones"
    ],
    keySchemes: ["NFSA", "PM Garib Kalyan Anna Yojana", "DBT"],
    perCapita: 290
  }
};

export const budgetData = {
  "2021-22": {
    fiscalYear: "2021-22",
    presented: "February 1, 2021",
    totalBudget: 3483236,
    totalExpenditure: 3483236,
    revenueReceipts: 1788424,
    capitalExpenditure: 554236,
    fiscalDeficit: {
      amount: 1506812,
      percentGDP: 6.8
    },
    sectors: [
      { id: "defense", name: "Defense", allocation: 478195, color: "#f43f5e", icon: "🛡️" },
      { id: "healthcare", name: "Health & Family Welfare", allocation: 223846, color: "#10b981", icon: "🏥" },
      { id: "education", name: "Education", allocation: 93224, color: "#f59e0b", icon: "📚" },
      { id: "infrastructure", name: "Roads & Highways", allocation: 118101, color: "#06b6d4", icon: "🛣️" },
      { id: "railways", name: "Railways", allocation: 110055, color: "#8b5cf6", icon: "🚂" },
      { id: "agriculture", name: "Agriculture & Farmers Welfare", allocation: 148301, color: "#84cc16", icon: "🌾" },
      { id: "rural", name: "Rural Development", allocation: 133690, color: "#22c55e", icon: "🏡" },
      { id: "social", name: "Social Welfare", allocation: 164234, color: "#a855f7", icon: "🤝" },
      { id: "urban", name: "Urban Development", allocation: 54581, color: "#14b8a6", icon: "🏙️" },
      { id: "science", name: "Science & Technology", allocation: 14793, color: "#6366f1", icon: "🔬" },
      { id: "interest", name: "Interest Payments", allocation: 809701, color: "#78716c", icon: "💰" },
      { id: "subsidies", name: "Subsidies", allocation: 338918, color: "#ec4899", icon: "🎁" }
    ],
    highlights: [
      "COVID-19 vaccination program allocation of ₹35,000 Cr",
      "Healthcare budget increased by 137% over previous year",
      "PM Aatmanirbhar Swasth Bharat Yojana launched with ₹64,180 Cr",
      "Disinvestment target set at ₹1.75 Lakh Cr",
      "Vehicle scrappage policy announced",
      "7 textile parks to be established"
    ]
  },
  "2022-23": {
    fiscalYear: "2022-23",
    presented: "February 1, 2022",
    totalBudget: 3944909,
    totalExpenditure: 3944909,
    revenueReceipts: 2249224,
    capitalExpenditure: 755064,
    fiscalDeficit: {
      amount: 1659388,
      percentGDP: 6.4
    },
    sectors: [
      { id: "defense", name: "Defense", allocation: 525165, color: "#f43f5e", icon: "🛡️" },
      { id: "healthcare", name: "Health & Family Welfare", allocation: 86200, color: "#10b981", icon: "🏥" },
      { id: "education", name: "Education", allocation: 104278, color: "#f59e0b", icon: "📚" },
      { id: "infrastructure", name: "Roads & Highways", allocation: 199107, color: "#06b6d4", icon: "🛣️" },
      { id: "railways", name: "Railways", allocation: 140367, color: "#8b5cf6", icon: "🚂" },
      { id: "agriculture", name: "Agriculture & Farmers Welfare", allocation: 132513, color: "#84cc16", icon: "🌾" },
      { id: "rural", name: "Rural Development", allocation: 138204, color: "#22c55e", icon: "🏡" },
      { id: "social", name: "Social Welfare", allocation: 176049, color: "#a855f7", icon: "🤝" },
      { id: "urban", name: "Urban Development", allocation: 76549, color: "#14b8a6", icon: "🏙️" },
      { id: "science", name: "Science & Technology", allocation: 16361, color: "#6366f1", icon: "🔬" },
      { id: "interest", name: "Interest Payments", allocation: 940651, color: "#78716c", icon: "💰" },
      { id: "subsidies", name: "Subsidies", allocation: 359617, color: "#ec4899", icon: "🎁" }
    ],
    highlights: [
      "PM GatiShakti - ₹20,000 Cr for multimodal logistics",
      "Capital expenditure increased by 35.4%",
      "400 new Vande Bharat trains announced",
      "Digital Rupee by RBI announced",
      "75 digital banking units in 75 districts",
      "Transition to 5G services prioritized"
    ]
  },
  "2023-24": {
    fiscalYear: "2023-24",
    presented: "February 1, 2023",
    totalBudget: 4503097,
    totalExpenditure: 4503097,
    revenueReceipts: 2635724,
    capitalExpenditure: 1000961,
    fiscalDeficit: {
      amount: 1796693,
      percentGDP: 5.9
    },
    sectors: [
      { id: "defense", name: "Defense", allocation: 593537, color: "#f43f5e", icon: "🛡️" },
      { id: "healthcare", name: "Health & Family Welfare", allocation: 89155, color: "#10b981", icon: "🏥" },
      { id: "education", name: "Education", allocation: 112899, color: "#f59e0b", icon: "📚" },
      { id: "infrastructure", name: "Roads & Highways", allocation: 271000, color: "#06b6d4", icon: "🛣️" },
      { id: "railways", name: "Railways", allocation: 241487, color: "#8b5cf6", icon: "🚂" },
      { id: "agriculture", name: "Agriculture & Farmers Welfare", allocation: 125182, color: "#84cc16", icon: "🌾" },
      { id: "rural", name: "Rural Development", allocation: 157545, color: "#22c55e", icon: "🏡" },
      { id: "social", name: "Social Welfare", allocation: 196729, color: "#a855f7", icon: "🤝" },
      { id: "urban", name: "Urban Development", allocation: 76432, color: "#14b8a6", icon: "🏙️" },
      { id: "science", name: "Science & Technology", allocation: 16749, color: "#6366f1", icon: "🔬" },
      { id: "interest", name: "Interest Payments", allocation: 1079200, color: "#78716c", icon: "💰" },
      { id: "subsidies", name: "Subsidies", allocation: 388208, color: "#ec4899", icon: "🎁" }
    ],
    highlights: [
      "Highest ever capital expenditure at ₹10 lakh Cr",
      "Railways receives highest-ever budget",
      "New Income Tax regime announced as default",
      "PM Vishwakarma scheme for artisans launched",
      "50 new airports announced",
      "Agriculture Accelerator Fund set up"
    ]
  },
  "2024-25": {
    fiscalYear: "2024-25",
    presented: "February 1, 2024",
    totalBudget: 4786349,
    totalExpenditure: 4786349,
    revenueReceipts: 2829227,
    capitalExpenditure: 1111111,
    fiscalDeficit: {
      amount: 1794773,
      percentGDP: 5.1
    },
    sectors: [
      { id: "defense", name: "Defense", allocation: 621940, color: "#f43f5e", icon: "🛡️" },
      { id: "healthcare", name: "Health & Family Welfare", allocation: 90958, color: "#10b981", icon: "🏥" },
      { id: "education", name: "Education", allocation: 120628, color: "#f59e0b", icon: "📚" },
      { id: "infrastructure", name: "Roads & Highways", allocation: 278000, color: "#06b6d4", icon: "🛣️" },
      { id: "railways", name: "Railways", allocation: 255175, color: "#8b5cf6", icon: "🚂" },
      { id: "agriculture", name: "Agriculture & Farmers Welfare", allocation: 127470, color: "#84cc16", icon: "🌾" },
      { id: "rural", name: "Rural Development", allocation: 168526, color: "#22c55e", icon: "🏡" },
      { id: "social", name: "Social Welfare", allocation: 209521, color: "#a855f7", icon: "🤝" },
      { id: "urban", name: "Urban Development", allocation: 82577, color: "#14b8a6", icon: "🏙️" },
      { id: "science", name: "Science & Technology", allocation: 17185, color: "#6366f1", icon: "🔬" },
      { id: "interest", name: "Interest Payments", allocation: 1179900, color: "#78716c", icon: "💰" },
      { id: "subsidies", name: "Subsidies", allocation: 404219, color: "#ec4899", icon: "🎁" }
    ],
    highlights: [
      "Fiscal deficit target reduced to 5.1% of GDP",
      "₹1.11 lakh Cr for rural housing",
      "3 crore additional houses under PM Awas Yojana",
      "Rooftop solarization for 1 Cr households",
      "Lakhpati Didi scheme for 3 Cr women",
      "New medical colleges for AIIMS"
    ]
  },
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
      { id: "defense", name: "Defense", allocation: 682370, color: "#f43f5e", icon: "🛡️" },
      { id: "healthcare", name: "Health & Family Welfare", allocation: 99507, color: "#10b981", icon: "🏥" },
      { id: "education", name: "Education", allocation: 131735, color: "#f59e0b", icon: "📚" },
      { id: "infrastructure", name: "Roads & Highways", allocation: 296000, color: "#06b6d4", icon: "🛣️" },
      { id: "railways", name: "Railways", allocation: 272000, color: "#8b5cf6", icon: "🚂" },
      { id: "agriculture", name: "Agriculture & Farmers Welfare", allocation: 137200, color: "#84cc16", icon: "🌾" },
      { id: "rural", name: "Rural Development", allocation: 181700, color: "#22c55e", icon: "🏡" },
      { id: "social", name: "Social Welfare", allocation: 226340, color: "#a855f7", icon: "🤝" },
      { id: "urban", name: "Urban Development", allocation: 92100, color: "#14b8a6", icon: "🏙️" },
      { id: "science", name: "Science & Technology", allocation: 18200, color: "#6366f1", icon: "🔬" },
      { id: "interest", name: "Interest Payments", allocation: 1260842, color: "#78716c", icon: "💰" },
      { id: "subsidies", name: "Subsidies", allocation: 412126, color: "#ec4899", icon: "🎁" }
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
  return sectorDetails[sectorId] || null;
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
