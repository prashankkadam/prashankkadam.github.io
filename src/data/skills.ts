export interface SkillGroup {
  heading: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    heading: "Languages",
    items: ["Python", "R", "SQL", "PostgreSQL"],
  },
  {
    heading: "ML Methods",
    items: [
      "Bayesian methods",
      "Tree-based learners (XGBoost, RF)",
      "GNN, CNN, RNN, LSTM, GAN, BERT",
      "DRQN, Neural-MCTS",
    ],
  },
  {
    heading: "Frameworks & Libraries",
    items: [
      "PyTorch",
      "Keras",
      "Scikit-learn",
      "Statsmodels",
      "DGL / PyG",
      "Spark MLlib",
      "Pandas / NumPy",
    ],
  },
  {
    heading: "Cloud & Infrastructure",
    items: [
      "AWS (SageMaker, EC2, S3, ElasticSearch, Lambda, Redshift)",
      "Azure (ML Studio, Cosmos, AKS)",
      "Neo4j, Redis, PostgreSQL",
    ],
  },
  {
    heading: "Distributed & HPC",
    items: [
      "PyTorch Distributed",
      "Horovod, Ray, DeepSpeed",
      "Dask, PySpark",
      "Docker, Kubernetes, Slurm, MPI",
      "MLFlow, Weights & Biases",
    ],
  },
];
