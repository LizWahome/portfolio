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
    tools: ["MySQL", "SQL"],
    ctaLabel: "View Case Study",
    summary:
      "Cleaned and analysed a global layoffs dataset in MySQL, covering deduplication, standardisation and null-handling, followed by exploratory analysis across companies, industries, countries and time.",
  },
  {
    slug: "kenya-property-analytics",
    title: "Kenya Property & Rental Analytics",
    status: "In Development",
    businessQuestion:
      "What do payment behaviour, occupancy patterns and revenue trends reveal about property performance?",
    datasetSummary: "Synthetic Kenya-relevant property management dataset",
    kpis: [
      { value: "20", label: "Properties" },
      { value: "1,915", label: "Units" },
      { value: "74,798", label: "Payment Records" },
    ],
    dataNote:
      "This is a synthetic dataset built for portfolio purposes. Analysis is in progress, and findings are not yet available.",
    tools: ["SQL", "Excel", "Power BI"],
    ctaLabel: "View Project",
    summary:
      "A synthetic property management dataset spanning 20 properties across Nairobi, Mombasa, Kisumu and other Kenyan towns, with unit, tenant and payment-level detail, built to demonstrate KPI analysis and business intelligence on rental performance.",
  },
  {
    slug: "product-analytics-case-study",
    title: "Product Analytics Case Study",
    status: "Upcoming",
    businessQuestion:
      "How do users move through a product, and where do they drop off?",
    datasetSummary: "Synthetic digital-platform dataset",
    kpis: [],
    tools: ["SQL", "Python"],
    ctaLabel: "Coming Soon",
    summary:
      "A product analytics case study exploring user behaviour, conversion funnels, engagement and retention using a synthetic digital-platform dataset. Not yet started.",
  },
];

export const globalLayoffsCaseStudy = {
  cleaningSteps: [
    "Created a staging table to preserve the raw data",
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
