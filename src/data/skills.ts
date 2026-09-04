export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Data & BI",
    skills: [
      "SQL",
      "Power BI",
      "Excel",
      "Data Cleaning",
      "Data Visualization",
      "Data Modelling",
      "Statistics",
      "Business Intelligence",
    ],
  },
  {
    title: "Programming",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Flutter", "Dart"],
  },
  {
    title: "Databases & systems",
    skills: [
      "MySQL",
      "SQLite",
      "Firebase",
      "REST APIs",
      "Git",
      "Linux",
      "Docker",
    ],
  },
];
