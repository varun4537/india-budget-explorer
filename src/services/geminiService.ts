// Gemini API Service for Budget Buddy
// Uses Gemini 2.0 Flash with full budget context

import { budgetData, sectorDetails, keySchemeDetails, revenueSources, economicIndicators } from '../data';

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

// Build comprehensive budget context for the AI
function buildBudgetContext() {
    const years = Object.keys(budgetData).sort();

    // Budget overview by year
    let budgetOverview = "## BUDGET DATA BY FISCAL YEAR\n\n";
    years.forEach(year => {
        const data = budgetData[year];
        budgetOverview += `### FY ${year}\n`;
        budgetOverview += `- Total Budget: ₹${(data.totalBudget / 100000).toFixed(2)} Lakh Crore\n`;
        budgetOverview += `- Fiscal Deficit: ${data.fiscalDeficit.percentGDP}% of GDP\n`;
        budgetOverview += `- Sectors:\n`;
        data.sectors.forEach(s => {
            const percent = ((s.allocation / data.totalBudget) * 100).toFixed(1);
            budgetOverview += `  - ${s.name}: ₹${(s.allocation / 1000).toFixed(1)}K Cr (${percent}%)\n`;
        });
        budgetOverview += `- Key Highlights: ${data.highlights.slice(0, 3).join('; ')}\n\n`;
    });

    // Sector trends
    let sectorTrends = "## SECTOR TRENDS (2021-2026)\n\n";
    const sectorIds = ['defense', 'healthcare', 'education', 'infrastructure', 'railways', 'agriculture', 'rural', 'social'];
    sectorIds.forEach(id => {
        const details = sectorDetails[id];
        if (!details) return;

        const trend = years.map(year => {
            const sector = budgetData[year]?.sectors?.find(s => s.id === id);
            return sector ? `${year}: ₹${(sector.allocation / 1000).toFixed(1)}K Cr` : null;
        }).filter(Boolean).join(' → ');

        const first = budgetData[years[0]]?.sectors?.find(s => s.id === id)?.allocation || 0;
        const last = budgetData[years[years.length - 1]]?.sectors?.find(s => s.id === id)?.allocation || 0;
        const growth = first ? (((last / first) - 1) * 100).toFixed(1) : 'N/A';

        sectorTrends += `### ${details.name}\n`;
        sectorTrends += `- Growth: ${growth}%\n`;
        sectorTrends += `- Trend: ${trend}\n`;
        sectorTrends += `- Description: ${details.description}\n`;
        sectorTrends += `- Key Schemes: ${details.keySchemes?.join(', ') || 'N/A'}\n\n`;
    });

    // Key schemes
    let schemesInfo = "## KEY GOVERNMENT SCHEMES\n\n";
    Object.entries(keySchemeDetails).forEach(([name, scheme]) => {
        schemesInfo += `- **${scheme.name}** (${scheme.shortName}): ${scheme.description} [Launched: ${scheme.launched}]\n`;
    });

    // Revenue sources
    let revenueInfo = "\n## REVENUE SOURCES (FY 2025-26)\n\n";
    Object.values(revenueSources).forEach(src => {
        revenueInfo += `- ${src.name}: ₹${(src.amount / 1000).toFixed(0)}K Cr (${src.percent}%)\n`;
    });

    // Economic indicators
    let economicInfo = "\n## ECONOMIC INDICATORS\n\n";
    Object.values(economicIndicators).forEach(ind => {
        economicInfo += `- ${ind.name}: ${ind.value} (${ind.trend})\n`;
    });

    // Special context notes
    const contextNotes = `
## IMPORTANT CONTEXT

1. **COVID Impact (2021-22)**: Healthcare budget spiked to ₹2.24 Lakh Cr due to:
   - COVID-19 vaccination program: ₹35,000 Cr
   - PM Aatmanirbhar Swasth Bharat Yojana: ₹64,180 Cr
   - This explains the apparent "drop" in healthcare after 2021-22

2. **Currency**: All amounts are in Indian Rupees (₹). 
   - "K Cr" = Thousand Crore = ₹10 billion
   - "Lakh Cr" = Lakh Crore = ₹1 trillion

3. **Fiscal Year Naming**: FY 2025-26 means April 2025 to March 2026

4. **India's Population**: ~1.43 billion (2025 estimate)
`;

    return budgetOverview + sectorTrends + schemesInfo + revenueInfo + economicInfo + contextNotes;
}

// System prompt for Budget Buddy
const SYSTEM_PROMPT = `You are **Budget Buddy**, an expert AI assistant on India's Union Budget (2021-2026).

## YOUR PERSONALITY
- Friendly, helpful, and educational
- Use Indian context and terminology
- Address users respectfully

## YOUR CAPABILITIES
1. Answer questions about budget allocations, trends, and policies
2. Compare sectors and years with specific numbers
3. Explain government schemes and their impact
4. Provide data-backed reasoning for policy analysis
5. Generate charts when asked (return as JSON)

## RESPONSE GUIDELINES
1. **Always cite specific numbers** - Don't make vague statements
2. **Show percentages and growth rates** - Make comparisons meaningful
3. **Explain context** - Why did something change?
4. **Use markdown formatting** - Headers, bold, lists for clarity
5. **Keep responses concise but informative** - 2-4 paragraphs typically

## CHART GENERATION
When the user asks for a chart or visualization, include a JSON block:
\`\`\`chart
{
  "type": "bar|line|pie",
  "title": "Chart Title",
  "data": [
    { "name": "Label", "value": 123 }
  ]
}
\`\`\`

## BUDGET DATA
${buildBudgetContext()}

Remember: You are helping Indian citizens understand where their tax money goes. Be accurate and transparent!`;

// Parse AI response to extract text and chart configs
function parseResponse(text) {
    const parts = [];
    const chartRegex = /```chart\n([\s\S]*?)```/g;
    let lastIndex = 0;
    let match;

    while ((match = chartRegex.exec(text)) !== null) {
        // Add text before chart
        if (match.index > lastIndex) {
            parts.push({
                type: 'text',
                content: text.slice(lastIndex, match.index).trim()
            });
        }

        // Parse chart config
        try {
            const chartConfig = JSON.parse(match[1]);
            parts.push({
                type: 'chart',
                config: chartConfig
            });
        } catch (e) {
            // If JSON fails, treat as text
            parts.push({
                type: 'text',
                content: match[0]
            });
        }

        lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
        parts.push({
            type: 'text',
            content: text.slice(lastIndex).trim()
        });
    }

    return parts.filter(p => p.content || p.config);
}

// Main chat function
export async function chatWithBudgetBuddy(message, history = []) {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
        throw new Error('Gemini API key not configured. Please add VITE_GEMINI_API_KEY to your .env file.');
    }

    // Build conversation with history
    const contents = [
        {
            role: 'user',
            parts: [{ text: SYSTEM_PROMPT }]
        },
        {
            role: 'model',
            parts: [{ text: 'I understand! I am Budget Buddy, ready to help you explore India\'s Union Budget. I have access to comprehensive data from FY 2021-22 to 2025-26. Ask me anything about budget allocations, sector trends, government schemes, or policy analysis!' }]
        },
        ...history.map(msg => ({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.content }]
        })),
        {
            role: 'user',
            parts: [{ text: message }]
        }
    ];

    try {
        const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents,
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 2048,
                }
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error?.message || 'Failed to get response from Gemini');
        }

        const data = await response.json();
        const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'I apologize, but I couldn\'t generate a response. Please try again.';

        return {
            text: responseText,
            parts: parseResponse(responseText)
        };
    } catch (error) {
        console.error('Gemini API Error:', error);
        throw error;
    }
}

// Quick info helpers
export function getQuickStats() {
    const latest = budgetData['2025-26'];
    return {
        totalBudget: `₹${(latest.totalBudget / 100000).toFixed(2)} Lakh Cr`,
        fiscalDeficit: `${latest.fiscalDeficit.percentGDP}%`,
        sectorCount: latest.sectors.length,
        topSector: latest.sectors.sort((a, b) => b.allocation - a.allocation)[0].name
    };
}

export function getSuggestedQuestions() {
    return [
        "How has education spending changed over the years?",
        "Why did healthcare budget drop after 2021?",
        "Compare Defense vs Infrastructure spending",
        "What are the key schemes for farmers?",
        "Show me a chart of top 5 sectors by allocation",
        "How has the fiscal deficit improved?",
        "What is PM-KISAN and how many farmers benefit?",
        "Explain the government's approach to rural development"
    ];
}
