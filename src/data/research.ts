export interface Paper {
  title: string;
  venue: string;
  year: string;
  authors?: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
  highlight?: boolean;
  // On the PDF resume, list this paper under this employer (matches experience `org`).
  resumeOrg?: string;
}

export const papers: Paper[] = [
  {
    title: "Financial Fraud Detection using Jump-Attentive Graph-based Learning",
    venue: "ICMLA 2024",
    year: "2024",
    description:
      "Graph machine learning paper using Graph Neural Networks with attention-based residual connections to detect fraud in financial transactions. Outperforms state-of-the-art algorithms on benchmark datasets.",
    tags: ["GNN", "Attention", "Fraud Detection"],
    links: [{ label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/abstract/document/10903430" }],
    highlight: true,
    resumeOrg: "Vesta Corporation",
  },
  {
    title:
      "Enhancing Financial Fraud Detection with Human-in-the-Loop Feedback and Feedback Propagation",
    venue: "ICMLA 2024",
    year: "2024",
    description:
      "Analyzes the impact of human-in-the-loop feedback on financial transactions and proposes a novel algorithm that propagates feedback signal further into the graph.",
    tags: ["GNN", "Human-in-the-Loop", "Fraud Detection"],
    links: [{ label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/abstract/document/10903260" }],
    resumeOrg: "Vesta Corporation",
  },
  {
    title: "GPT-Guided Monte Carlo Tree Search for Symbolic Regression in Financial Fraud Detection",
    venue: "CIKM 2024 RAGEnt Workshop",
    year: "2024",
    description:
      "Foundation model trained on Symbolic Regression to generate rule sets for financial fraud detection. Rule sets run 60x faster than other state-of-the-art methods.",
    tags: ["LLM", "MCTS", "Symbolic Regression"],
    links: [{ label: "Workshop", href: "https://sites.google.com/view/cikm2024-rag/papers" }],
    highlight: true,
    resumeOrg: "Vesta Corporation",
  },
  {
    title: "Accelerating Neural MCTS Algorithms using Neural Sub-Net Structures",
    venue: "AAMAS 2023",
    year: "2023",
    authors: "with Prof. Karl Lieberherr, Ruiyang Xu",
    description:
      "Step-MCTS: subnet structures within the complete network, each simulating a tree that provides lookahead for exploration. Optimizes training times of state-of-the-art AlphaZero MPV-MCTS.",
    tags: ["RL", "Neural MCTS", "AlphaZero"],
    links: [
      { label: "Extended Abstract", href: "https://dl.acm.org/doi/abs/10.5555/3545946.3599027" },
      { label: "Full Paper", href: "https://alaworkshop2023.github.io/papers/ALA2023_paper_55.pdf" },
    ],
    resumeOrg: "Waters Corporation",
  },
  {
    title: "Optimizations over Neural MCTS for Combinatorial Games",
    venue: "Master's Thesis, Northeastern University",
    year: "2021",
    authors: "Advisor: Prof. Karl Lieberherr | Reader: Prof. Christopher Amato",
    description:
      "Meta MPV-MCTS and Dual MCTS AlphaZero: outperform vanilla AlphaZero on combinatorial games using limited training budgets. Implemented efficient training strategies for asymmetric games.",
    tags: ["RL", "Neural MCTS", "Game Theory"],
    links: [
      {
        label: "Thesis",
        href: "https://www.proquest.com/openview/e8b3b4748967b6ff2c54ddbf11cbcde5/1?pq-origsite=gscholar&cbl=18750&diss=y",
      },
    ],
  },
  {
    title: "Dual MCTS",
    venue: "arXiv",
    year: "2021",
    authors: "with Prof. Karl Lieberherr, Ruiyang Xu",
    description:
      "Novel algorithm using a substructure within the neural network to achieve balanced accelerated learning. An intermediate policy is used to optimize the final policy that determines agent behavior.",
    tags: ["RL", "Neural MCTS"],
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2103.11517" }],
  },
  {
    title: "First-Order Problem Solving through Neural MCTS based Reinforcement Learning",
    venue: "arXiv",
    year: "2021",
    authors: "with Prof. Karl Lieberherr, Ruiyang Xu",
    description:
      "Evaluates first-order logic using game-theoretic semantics by dynamically mapping to a two-player game (logic game).",
    tags: ["RL", "Logic", "Game Theory"],
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2101.04167" }],
  },
];
