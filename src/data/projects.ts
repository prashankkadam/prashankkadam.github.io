export interface Project {
  title: string;
  context: string;
  description: string;
  date?: string;
}

export const projects: Project[] = [
  {
    title: "Health Care Entities and Relationship Extraction",
    context: "Deep Learning, NLP",
    description:
      "BioBERT-based models for extracting NERs from EHR data and a market-basket model for Relationship Extraction (RE) between extracted NERs to produce knowledge graphs.",
    date: "Jan 2021 - Apr 2021",
  },
  {
    title: "Meta Learning based Training for Deep Reinforcement Learning Agent",
    context: "Advisor: Prof. Karl Lieberherr",
    description:
      "Implemented ideas from Discovering Reinforcement Learning Algorithms (Oh et al.) using the backward LSTM approach. Tested on Nim, Othello, Connect4.",
  },
  {
    title: "Data Processing and Modeling Tool",
    context: "Python, Dash, Heroku, Statsmodels, Plotly",
    description:
      "Web application that lets the user upload a dataset and perform analysis or modeling using various machine learning algorithms.",
    date: "Jan 2020 - Apr 2020",
  },
  {
    title: "StarGAN for Multi-domain Image Translation",
    context: "Computer Vision, TensorFlow",
    description:
      "Translates human faces across domains (expressions, color, gender, age) using the GAN configuration from StarGAN (Choi et al.).",
    date: "Jan 2020 - Feb 2020",
  },
  {
    title: "Integrating MPV-MCTS and Metacontroller with Persephone",
    context: "Advisor: Prof. Karl Lieberherr",
    description:
      "Multiple policy-value networks combined with the metacontroller from Deepmind's Agent 57 to achieve balanced learning in AlphaZero for combinatorial gaming problems.",
  },
];
