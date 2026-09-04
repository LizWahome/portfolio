export type Capability = {
  title: string;
  description: string;
};

export const capabilities: Capability[] = [
  {
    title: "Data analysis",
    description:
      "SQL, data cleaning, exploratory analysis and statistical thinking to extract reliable insights from complex datasets.",
  },
  {
    title: "Business intelligence",
    description:
      "Power BI dashboards, KPI tracking and communicating findings in ways that support real business decisions.",
  },
  {
    title: "Technical analytics",
    description:
      "Python, databases and REST APIs, combined with an understanding of how real-world systems generate and structure data.",
  },
];

export type PipelineStep = {
  label: string;
  question: string;
};

export const pipeline: PipelineStep[] = [
  { label: "Business question", question: "What problem are we solving?" },
  {
    label: "Data collection",
    question: "What data exists, and where does it come from?",
  },
  {
    label: "Data quality",
    question: "Is the data complete, consistent and trustworthy?",
  },
  {
    label: "Cleaning",
    question: "Remove duplicates, standardise fields, handle missing values.",
  },
  {
    label: "Exploratory analysis",
    question: "Identify patterns, distributions and relationships.",
  },
  { label: "Visualisation", question: "Communicate findings clearly." },
  { label: "Insights", question: "What does the data actually tell us?" },
  {
    label: "Recommendations",
    question: "What should the business do next?",
  },
];
