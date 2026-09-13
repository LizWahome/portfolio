export type ProjectStatus = "Completed" | "In Development" | "Upcoming";

export type Kpi = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  status: ProjectStatus;
  businessQuestion: string;
  datasetSummary: string;
  kpis: Kpi[];
  dataNote?: string;
  tools: string[];
  ctaLabel: string;
  githubUrl?: string;
  summary: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "global-layoffs",
    title: "Global Layoffs SQL Analysis",
    status: "Completed",
    featured: true,
    githubUrl: "https://github.com/LizWahome/sql-data-cleaning-layoffs-project",
    businessQuestion:
      "How did layoffs change across companies, industries, countries and time?",
    datasetSummary: "Dataset covers March 2020 to March 2023",
    kpis: [
      { value: "383,159", label: "Total layoffs recorded" },
      { value: "2022", label: "Peak year in dataset" },
      { value: "160,661", label: "Layoffs recorded in 2022" },
    ],
    dataNote:
      "The dataset covers March 2020 through March 2023. 2023 contains only partial-year data through March, and is not presented as a complete annual figure.",
    tools: ["MySQL", "SQL", "Excel"],
    ctaLabel: "View Case Study",
    summary:
      "Cleaned and analysed a global layoffs dataset in MySQL, covering deduplication, standardisation and null-handling, followed by exploratory analysis across companies, industries, countries and time.",
  },
  {
    slug: "property-management-analytics",
    title: "Property Management Analytics",
    status: "Completed",
    githubUrl: "https://github.com/LizWahome/property_management_analytics",
    businessQuestion:
      "What do revenue, collections, occupancy and maintenance patterns reveal about property performance?",
    datasetSummary: "Kenyan residential property management scenario, synthetic dataset",
    kpis: [
      { value: "KSh 652.74M", label: "Total invoiced" },
      { value: "87.56%", label: "Collection rate" },
      { value: "87.17%", label: "Occupancy rate" },
    ],
    dataNote:
      "This project is based on a synthetic dataset representing a Kenyan property management business. It does not reflect data from a real property management company.",
    tools: ["MySQL", "SQL", "Power BI", "DAX"],
    ctaLabel: "View Case Study",
    summary:
      "An end-to-end property management analytics project built around a Kenyan residential property management scenario, covering SQL data cleaning and validation, exploratory and business-focused analysis, and an interactive four-page Power BI dashboard.",
  },
  {
    slug: "financial-fraud-detection",
    title: "Financial Datasets for Fraud Detection",
    status: "Upcoming",
    businessQuestion:
      "Can transaction patterns be used to identify likely fraudulent financial activity?",
    datasetSummary: "Synthetic financial transactions dataset",
    kpis: [],
    tools: ["SQL", "Python"],
    ctaLabel: "Coming Soon",
    summary:
      "A fraud-detection case study exploring financial transaction data to identify patterns associated with fraudulent activity. Not yet started.",
  },
];

export const propertyManagementCaseStudy = {
  overview:
    "An end-to-end property management analytics project built around a Kenyan residential property management scenario, covering SQL data cleaning and validation, exploratory and business-focused analysis, and an interactive four-page Power BI dashboard.",
  businessProblem:
    "Property managers need visibility into whether properties are generating expected revenue, whether tenants are paying on time, where outstanding balances are concentrated, how occupancy is performing, and where operational costs such as maintenance and other expenses are occurring.",
  objective:
    "Analyse property management data using SQL and Power BI to identify financial, occupancy, tenant, payment, maintenance and expense patterns that can support better management decisions.",
  datasetCounts: [
    { value: "20", label: "Properties" },
    { value: "1,915", label: "Units" },
    { value: "1,695", label: "Tenants" },
    { value: "84,683", label: "Invoices" },
    { value: "74,798", label: "Payments" },
    { value: "1,483", label: "Expense records" },
    { value: "1,311", label: "Maintenance records" },
  ],
  dataCleaningSteps: [
    "Duplicate checks",
    "NULL checks",
    "Numeric validation",
    "Date standardisation",
    "Text standardisation",
    "Referential integrity checks",
    "Validation of relationships between major tables",
  ],
  sqlAnalysisAreas: [
    "Invoice and collection performance",
    "Outstanding balances",
    "Property-level collection rates",
    "Occupancy",
    "Revenue per unit",
    "Tenant payment behaviour",
    "Payment methods",
    "Maintenance",
    "Expenses",
    "Property performance",
  ],
  dashboardPages: [
    "Executive Overview",
    "Property Performance",
    "Tenant & Collections",
    "Maintenance & Expenses",
  ],
  dashboardScreenshots: [
    {
      src: "/projects/property-management-analytics/executive-overview.png",
      alt: "Executive Overview dashboard page showing KPI cards for total collected, total invoiced, outstanding amount, occupancy rate, collection rate and total expenses, alongside a collections-by-city bar chart, a monthly collections trend line and an occupancy rate trend line.",
      caption: "Executive Overview",
      width: 1229,
      height: 692,
    },
    {
      src: "/projects/property-management-analytics/property-performance.png",
      alt: "Property Performance dashboard page showing KPI cards for occupancy rate, total properties, total collected and estimated operating surplus, with bar charts for collections by property and outstanding balance by property, a bubble chart comparing occupancy rate and collection rate by property, a scatter chart of revenue versus operating expenses, and a collection rate by property bar chart.",
      caption: "Property Performance",
      width: 1233,
      height: 692,
    },
    {
      src: "/projects/property-management-analytics/tenant-collections.png",
      alt: "Tenant & Collections dashboard page showing KPI cards for collection rate, outstanding amount, average payment and total tenants, a donut chart of collections by payment method, a table of highest outstanding invoices, a chart of collection channels over time, and bar charts of outstanding amount and collection rate by tenant occupation.",
      caption: "Tenant & Collections",
      width: 1230,
      height: 695,
    },
    {
      src: "/projects/property-management-analytics/maintenance-expenses.png",
      alt: "Maintenance & Expenses dashboard page showing KPI cards for total expenses, maintenance estimated cost, maintenance requests and pending maintenance, a bar chart of expenses by category, a donut chart of maintenance status, a line chart of maintenance requests over time, and bar charts of maintenance requests by type, expenses by property and estimated maintenance cost by property.",
      caption: "Maintenance & Expenses",
      width: 1229,
      height: 693,
    },
  ],
  keyMetrics: [
    { value: "KSh 652.74M", label: "Total invoiced" },
    { value: "KSh 571.55M", label: "Total collected" },
    { value: "87.56%", label: "Collection rate" },
    { value: "KSh 81.19M", label: "Outstanding amount" },
    { value: "87.17%", label: "Occupancy rate" },
    { value: "~88%", label: "M-Pesa share of collections" },
    { value: "1,311", label: "Maintenance requests" },
    { value: "1,208", label: "Resolved maintenance requests" },
  ],
  limitations: [
    "The dataset is synthetic.",
    "Payment records were successful, so payment failure-rate analysis was not possible.",
    "Maintenance estimated cost and recorded expenses are separate concepts and were not treated as direct row-level financial matches.",
    "Estimated operating surplus is not formal accounting profit and may exclude costs not represented in the dataset.",
    "Occupancy snapshots may not perfectly reconcile with tenant or payment history.",
  ],
  recommendations: [
    "With a collection rate of 87.56% and KSh 81.19M outstanding, more consistent follow-up on overdue balances could meaningfully improve cash flow.",
    "M-Pesa accounts for approximately 88% of collections, so keeping this channel reliable and well supported is likely to have an outsized effect on on-time payment.",
    "Occupancy at 87.17% suggests some room to reduce vacancy; tracking vacancy duration at the property level could help prioritise where to focus leasing efforts.",
    "With 1,208 of 1,311 maintenance requests resolved (about 92%), reviewing the remaining backlog could help maintain tenant satisfaction and property condition.",
  ],
};

export const globalLayoffsCaseStudy = {
  dashboardScreenshots: [
    {
      src: "/projects/global-layoffs/dashboard-overview.png",
      alt: "Excel dashboard titled Layoffs Dashboard Analysis with slicers for location, funding stage and date, showing a yearly company layoffs bar chart for 2020 to 2023, total layoffs by industry, total layoffs by country, and total layoffs by company.",
      caption: "Dashboard overview",
      width: 1280,
      height: 821,
    },
    {
      src: "/projects/global-layoffs/monthly-layoffs-trend.png",
      alt: "Line chart of monthly total layoffs from March 2020 through March 2023, showing a rise in mid-2020, a low period through 2021, and a sharp increase from late 2022 into early 2023.",
      caption: "Monthly layoffs trend",
      width: 1152,
      height: 423,
    },
  ],
  cleaningSteps: [    "Created a staging table to preserve the raw data",
    "Removed duplicate records using a CTE with ROW_NUMBER()",
    "Standardised company, industry and location fields",
    "Trimmed whitespace from text fields",
    "Converted date values from text to DATE",
    "Handled NULL values, including using a self-join to populate related missing values",
    "Removed columns that weren't needed for analysis",
  ],
  findings: [
    { value: "383,159", label: "Total layoffs recorded" },
    { value: "12,000", label: "Largest single-record layoff" },
    { value: "18,150", label: "Amazon, aggregated across records" },
    { value: "12,000", label: "Google" },
    { value: "11,000", label: "Meta" },
    { value: "256,559", label: "United States" },
    { value: "35,993", label: "India" },
    { value: "45,182", label: "Consumer industry" },
    { value: "43,613", label: "Retail industry" },
  ],
  yearTotals: [
    { year: "2020", value: 80998 },
    { year: "2021", value: 15823 },
    { year: "2022", value: 160661 },
    { year: "2023*", value: 125677 },
  ],
  insights: [
    "2022 recorded the highest layoffs of any full year in the dataset, more than 10x the 2021 total.",
    "The United States accounts for the largest share of recorded layoffs by country, well ahead of India.",
    "Consumer and Retail are the two largest industries by recorded layoffs.",
    "Amazon's total is an aggregate across multiple records in the dataset, not a single event.",
  ],
  dataIntegrityNote:
    "2023 figures cover January to March only and are not a complete annual total. They should not be compared directly against full-year 2020 to 2022 figures without accounting for this.",
};
