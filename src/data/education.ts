export interface EducationEntry {
  school: string;
  degree: string;
  detail?: string;
  notes?: string;
}

export const education: EducationEntry[] = [
  {
    school: "University of Chicago Booth School of Business",
    degree: "Master of Business Administration",
    detail: "Concentration: Economics and Strategy",
  },
  {
    school: "Northeastern University",
    degree: "Master of Science, Data Science (Thesis Track)",
    detail:
      "Thesis: Optimizations over Neural MCTS for Combinatorial Games (Advisor: Karl Lieberherr, Reader: Chris Amato). Coursework: Algorithms, Supervised/Unsupervised Machine Learning, Information Retrieval, Statistics.",
    notes: "GPA: 3.90",
  },
  {
    school: "Harvard University",
    degree: "Cross-Registration from NEU",
    detail: "Coursework: Deep Reinforcement Learning",
    notes: "GPA: 4.00",
  },
  {
    school: "University of Pune",
    degree: "Bachelor of Engineering, Electronics",
    detail: "Coursework: Object Oriented Programming, Data Structures, Digital Signal Processing",
    notes: "First Class with Distinction",
  },
];
