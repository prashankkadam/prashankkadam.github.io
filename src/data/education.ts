export interface EducationEntry {
  school: string;
  degree: string;
  detail?: string;
  notes?: string;
  date: string;
}

export const education: EducationEntry[] = [
  {
    school: "Northeastern University",
    degree: "Master of Science, Data Science (Thesis Track)",
    detail:
      "Thesis: Optimizations over Neural MCTS for Combinatorial Games (Advisor: Karl Lieberherr, Reader: Chris Amato). Coursework: Algorithms, Supervised/Unsupervised Machine Learning, Information Retrieval, Statistics.",
    notes: "GPA: 3.90",
    date: "Jan 2020 - Dec 2021",
  },
  {
    school: "Harvard University",
    degree: "Cross-Registration from NEU",
    detail: "Coursework: Deep Reinforcement Learning",
    notes: "GPA: 4.00",
    date: "Aug 2020",
  },
  {
    school: "University of Pune",
    degree: "Bachelor of Engineering, Electronics",
    detail: "Coursework: Object Oriented Programming, Data Structures, Digital Signal Processing",
    notes: "First Class with Distinction",
    date: "Aug 2012 - Jul 2016",
  },
];
