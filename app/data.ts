export const profile = {
  name: "Lakshay Garg",
  role: "Full-Stack Developer · DevOps",
  tagline: "I build fast, fault-tolerant systems end to end — backend APIs, LLM/RAG pipelines, and the AWS infra that scales them.",
  location: "Delhi, India",
  email: "lakshaygargd@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/lakshay-garg-93995627a/",
    github: "https://github.com/",
    leetcode: "https://leetcode.com/",
  },
};

export const about = [
  "Software Engineering from DTU and a full-stack developer who likes the hard parts — caching, queues, real-time pipelines, LLM/RAG systems, and making AI responses snappy.",
  "Solid across the stack: backend APIs and RAG on one end, and the DevOps that ships them on the other — AWS scaling, load balancing, firewalls, EC2/S3, Terraform, and GitHub Actions CI/CD.",
  "I've shipped real-time scoring engines, AI-powered WhatsApp products, and infra that scales under load without dropping a beat. Off the keyboard you'll find me trading markets, behind a camera, or on a volleyball / pickleball court.",
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "Wavelength",
    role: "Backend Developer",
    period: "Apr 2026 – May 2026",
    points: [
      "Built Instant Matchmaking features and optimized matching workflows.",
      "Automated the end-to-end weekly matchmaking workflow, cutting manual effort and operational overhead.",
      "Improved AI response latency using regional Amazon Bedrock Haiku deployments to reduce inference round-trip times.",
      "Implemented Temporal workflows for scheduled jobs, background processing, and fault-tolerant task execution.",
    ],
  },
  {
    company: "Futures First",
    role: "Market Analyst Intern",
    period: "Jan 2026 – Apr 2026",
    points: [
      "Tracked the Brazilian fixed income market, focusing on interest rates and bond movements.",
      "Practiced trading strategies and analyzed market trends to deepen understanding of futures and FI markets.",
    ],
  },
  {
    company: "Circlepe",
    role: "Backend Developer",
    period: "Nov 2025 – Jan 2026",
    points: [
      "Developed features for an AI-powered WhatsApp-based property discovery platform — search and explore real estate via natural language.",
      "Built backend services for seamless property search, listing retrieval, and user engagement inside WhatsApp.",
      "Implemented vector search and semantic retrieval to push relevance beyond keyword-based matching.",
    ],
  },
  {
    company: "Sportaye",
    role: "Backend Developer",
    period: "May 2025 – Jun 2025",
    points: [
      "Built a real-time sports live-scoring backend with Redis, MongoDB, and Socket.io for instant updates.",
      "Optimized data pipelines for low-latency, accurate score processing.",
      "Deployed and maintained on AWS EC2 with high availability and scalability.",
    ],
  },
  {
    company: "Chatwise",
    role: "Backend Developer",
    period: "Aug 2024 – May 2025",
    points: [
      "Worked with Redis for caching, session management, and real-time data processing.",
      "Explored Elasticsearch for full-text search, indexing, and analytics.",
      "Hands-on with AWS (EC2, S3, Load Balancing); ran a RIOT migration for millions of keys.",
      "Built and maintained backend APIs with Node.js and MongoDB; job scheduling via Redis BullQueue for notifications, events, and feeds.",
    ],
  },
];

export type Project = {
  name: string;
  blurb: string;
  points: string[];
  link?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "Finance Education Platform",
    blurb: "tradingtiers.com — a platform to learn trading and markets.",
    points: [
      "Built a robust backend with the team, reducing response time by 20% using WebSockets.",
      "Designed a responsive, interactive frontend with HTML5, CSS3, and JavaScript.",
    ],
    link: "https://tradingtiers.com",
    tags: ["WebSockets", "Node.js", "HTML5/CSS3"],
  },
  {
    name: "File Cloud",
    blurb: "Efficient file transfer across devices over Wi-Fi.",
    points: [
      "React.js app with a real-time backend for seamless file sharing.",
      "Deployed on AWS EC2 with scalable cloud storage.",
      "Cross-platform sharing over Wi-Fi using WebSockets and a custom mini-repo system.",
    ],
    tags: ["React", "WebSockets", "AWS", "S3"],
  },
  {
    name: "WhatsApp Bot",
    blurb: "A conversational AI assistant living inside WhatsApp.",
    points: [
      "Node.js backend handling user requests, routes, and data filtering.",
      "Integrated OpenAI's ChatGPT for conversational AI.",
      "Enabled YouTube downloads, news search, and weather forecasting via the bot.",
    ],
    tags: ["Node.js", "OpenAI", "WhatsApp API"],
  },
];

export const skills: Record<string, string[]> = {
  Languages: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"],
  Frontend: ["React", "Next.js", "HTML5/CSS3"],
  Backend: ["Node", "Express", "Django", "Flask", "FastAPI", "MERN"],
  "AI / LLM": ["RAG", "Vector Search", "Semantic Retrieval", "Amazon Bedrock", "Claude", "Claude Code", "OpenAI"],
  "Data & Infra": ["MongoDB", "Redis", "Elasticsearch", "VectorDB", "Temporal", "Docker"],
  DevOps: ["AWS EC2/S3", "Load Balancing", "Auto-Scaling", "Firewall", "Terraform", "GitHub Actions", "GCP"],
  Tools: ["Git", "GitLab", "Redis Insight", "Google Colab", "Raspberry Pi"],
};

export const education = [
  {
    school: "Delhi Technological University (DTU)",
    detail: "B.Tech, Software Engineering",
    period: "2022 – 2026",
  },
  {
    school: "Bal Bhavan International School",
    detail: "CBSE Class XII — 93% (2021) · Class X — 95% (2019)",
    period: "",
  },
];

export const achievements = [
  "600+ problems solved on LeetCode",
  "Top 10 teams at Vihaan Hackathon 6.0",
];

export const interests = [
  "Photography",
  "Trading",
  "Chess",
  "Volleyball",
  "Pickleball",
];
