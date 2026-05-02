export interface ExperienceEntry {
  role: string;
  org: string;
  start: string;
  end: string;
  description: string;
}

export const experiences: ExperienceEntry[] = [
  {
    role: "Principal Machine Learning Engineer",
    org: "Cerby",
    start: "Sep 2025",
    end: "Present",
    description:
      "Led the design of AI-driven workflow code generation using transformer-based language models and graph machine learning, modeling user interactions, DOM structure, and execution flows as graphs to generate, validate, and evolve CHAOS automations. Architected multimodal ML systems leveraging Scout and Replayer data (DOM, rrweb events, screenshots, videos, and failure traces) to power error classification, failure clustering, and drift detection in production workflows. Built and owned scalable end-to-end ML infrastructure on AWS, including data pipelines, SageMaker training pipelines, model deployment, and monitoring, enabling reliable iteration toward self-healing automations.",
  },
  {
    role: "Principal Machine Learning Engineer",
    org: "Vesta Corporation",
    start: "Jan 2025",
    end: "Sep 2025",
    description:
      "Led design and deployment of graph-based fraud detection systems using GNNs and custom graph algorithms, including JA-GNN which outperformed state-of-the-art methods on proprietary and public datasets, improving risk attribution by over 20% across multi-block transaction networks. Built distributed graph pipelines with PySpark, DGL, Neo4j, and Redis, including a custom in-memory graph library enabling real-time subgraph extraction, similarity scoring, and risk propagation.",
  },
  {
    role: "Senior Machine Learning Engineer",
    org: "Vesta Corporation",
    start: "Jan 2022",
    end: "Jan 2025",
    description:
      "Engineered scalable data pipelines for temporal and graph-based feature generation over billions of transactions, enabling efficient training and inference for large-scale fraud models. Delivered end-to-end ML solutions on Azure, containerized with Kubernetes (AKS), integrating graph outputs into downstream risk models and real-time scoring workflows. Collaborated with investigators and cross-functional teams to convert user stories into graph-native features and deployed models using open-source ML frameworks like PyTorch and DGL.",
  },
  {
    role: "Machine Learning and Optimization Engineer (Intern)",
    org: "Waters Corporation",
    start: "Jan 2021",
    end: "Jul 2021",
    description:
      "Built and optimized end-to-end ML pipelines to reduce liquid chromatograph equilibration time by 30%, employing advanced signal decomposition on time-series sensor data. Integrated AWS Redshift with PySpark-based ETL pipelines and deployed a Streamlit application on EC2, streamlining real-time data ingestion and SME collaboration for model lifecycle management.",
  },
  {
    role: "Teaching Assistant",
    org: "Northeastern University",
    start: "Aug 2020",
    end: "Jun 2021",
    description:
      "Teaching Assistant for CS4100: Artificial Intelligence (Prof. Christopher Amato) and CS5100: Artificial Intelligence (Prof. Stacy Marcella).",
  },
  {
    role: "Data Scientist",
    org: "Maersk Tankers",
    start: "Mar 2019",
    end: "Dec 2019",
    description:
      "Developed HPC-ready genetic optimization models for vessel routing, integrating climatic and onboard sensor data to achieve a 14% improvement in fuel efficiency. Implemented a Flask-based web app transitioning vessels from HSFO to VLSFO, containerized and deployed on Kubernetes for real-time, high-performance fuel management. Partnered with operations and technology teams to develop distributed, data-driven solutions using PySpark pipelines, optimizing maritime logistics and reducing operational costs.",
  },
  {
    role: "Data Analyst",
    org: "Accenture Solutions Private Limited",
    start: "Nov 2016",
    end: "Mar 2019",
    description:
      "Built and deployed predictive pricing models using Spark MLlib on high-volume utility data, enabling real-time rate adjustments for electric and gas clients. Collaborated with data engineers and domain experts to streamline data pipelines and integrate open-source ML frameworks for more efficient model experimentation.",
  },
];
