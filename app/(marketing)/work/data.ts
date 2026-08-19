export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  imagePlaceholder: string;
  challenge: string;
  objective: string;
  approach: string;
  solution: string;
  technologies: string[];
  results: { metric: string; description: string }[];
}

export const projects: Project[] = [
  {
    id: 'fintech-data-pipeline',
    slug: 'fintech-data-pipeline',
    title: 'Enterprise Data Pipeline (VETTA Demonstration Project)',
    tagline: 'Real-time financial analytics architecture for a high-volume trading platform.',
    category: 'Data & Analytics',
    imagePlaceholder: 'Data Pipeline Visualization',
    challenge: 'A growing fintech firm was experiencing severe latency in their reporting dashboards. Their legacy SQL infrastructure was unable to handle the ingestion of 5 million+ daily transaction records, resulting in 24-hour delays for critical business intelligence.',
    objective: 'Engineer a scalable, real-time data pipeline capable of ingesting, transforming, and visualizing transaction data with sub-minute latency to support intra-day decision making.',
    approach: 'VETTA conducted a thorough architecture audit and recommended transitioning from batch processing to a real-time streaming architecture. We designed a system prioritizing data integrity, high availability, and horizontal scalability.',
    solution: 'We implemented a modern ELT (Extract, Load, Transform) pipeline using Apache Kafka for event streaming and Snowflake as the cloud data warehouse. Custom Python microservices were deployed on AWS EKS to handle complex transformations. Finally, we built a bespoke React dashboard for the executive team.',
    technologies: ['Apache Kafka', 'Snowflake', 'Python / FastAPI', 'AWS EKS', 'React', 'dbt'],
    results: [
      { metric: '99.9%', description: 'Reduction in reporting latency (from 24h to < 1 min)' },
      { metric: '5M+', description: 'Events processed daily without degradation' },
      { metric: '40%', description: 'Reduction in cloud infrastructure costs' }
    ]
  },
  {
    id: 'ai-customer-support',
    slug: 'ai-customer-support',
    title: 'Autonomous Support Agent (VETTA Demonstration Project)',
    tagline: 'LLM-powered workflow automation reducing Tier 1 support tickets.',
    category: 'AI & Automation',
    imagePlaceholder: 'AI Agent Interface',
    challenge: 'A SaaS company was overwhelmed by a 300% increase in customer support tickets following a successful product launch. Support staff were burning out answering repetitive queries, and response times had slipped from 2 hours to 48 hours.',
    objective: 'Deploy an intelligent automation system capable of resolving standard queries autonomously, escalating complex issues seamlessly, and restoring response times to SLA targets.',
    approach: 'Rather than a rigid decision-tree chatbot, VETTA architected an autonomous AI agent utilizing Retrieval-Augmented Generation (RAG). We vectorized the client\'s extensive documentation and past ticket history to provide the agent with deep contextual knowledge.',
    solution: 'We built a custom middleware integrating OpenAI\'s GPT-4 with the client\'s Zendesk instance. The system intercepts incoming tickets, retrieves relevant internal documentation via a vector database, and drafts highly accurate responses. For complex issues, it summarizes the context and routes it to the appropriate human agent.',
    technologies: ['OpenAI API (GPT-4)', 'Pinecone (Vector DB)', 'LangChain', 'Node.js', 'Zendesk API'],
    results: [
      { metric: '65%', description: 'Of Tier 1 tickets resolved autonomously' },
      { metric: '< 2 mins', description: 'Average response time for automated queries' },
      { metric: '0', description: 'New support headcount required despite growth' }
    ]
  },
  {
    id: 'logistics-management-portal',
    slug: 'logistics-management-portal',
    title: 'Global Logistics Portal (VETTA Demonstration Project)',
    tagline: 'Custom SaaS platform for international supply chain tracking.',
    category: 'Software Development',
    imagePlaceholder: 'Dashboard UI Interface',
    challenge: 'An international shipping broker relied on a fragmented system of spreadsheets, emails, and legacy desktop software to track global shipments. This resulted in data silos, frequent miscommunications with partners, and an inability to provide clients with real-time updates.',
    objective: 'Design and develop a centralized, cloud-based platform to manage the entire shipment lifecycle, providing secure access for internal staff, external partners, and end clients.',
    approach: 'VETTA led a 4-week discovery phase, mapping out complex operational workflows and role-based permissions. We prioritized a clean, intuitive UX to ensure high adoption rates among non-technical warehouse staff.',
    solution: 'We delivered a comprehensive web application built on Next.js and Node.js. The system features real-time shipment tracking, automated document generation (customs forms, BOLs), and a secure client portal. The backend utilizes PostgreSQL with strict row-level security to ensure data isolation between clients.',
    technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'AWS S3'],
    results: [
      { metric: '100%', description: 'Elimination of manual spreadsheet tracking' },
      { metric: '30 hrs/wk', description: 'Saved in administrative document generation' },
      { metric: 'CSAT', description: 'Significant increase in client satisfaction scores' }
    ]
  }
];
