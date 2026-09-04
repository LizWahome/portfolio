export type Experience = {
  role: string;
  company: string;
  dates?: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Mobile Engineer",
    company: "Liana Technologies",
    dates: "February 2024 to November 2025",
    points: [
      "Contributed to OneKitty, a production fintech application supporting over 5,000 active users.",
      "Worked with REST APIs and structured JSON data.",
      "Collaborated with backend engineers, product managers and designers.",
      "Participated in troubleshooting, release validation and performance optimisation.",
      "Applied analytical thinking to solve technical and business problems.",
    ],
  },
  {
    role: "Mobile Engineer",
    company: "Solutech Limited",
    dates: "April 2024 to June 2024",
    points: [
      "Developed and enhanced mobile application functionality using Flutter.",
      "Diagnosed and resolved production issues.",
      "Collaborated with development and QA teams.",
      "Supported deployment and feature validation.",
    ],
  },
  {
    role: "Software Engineering Attaché",
    company: "Techbiz Limited",
    points: [
      "Participated in software development, testing, deployment and documentation.",
      "Assisted with quality assurance and issue tracking.",
      "Gained practical experience across the software development life cycle.",
    ],
  },
];
