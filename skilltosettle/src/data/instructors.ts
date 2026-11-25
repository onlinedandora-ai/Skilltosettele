export interface Instructor {
  id: string;
  slug: string;
  name: string;
  title: string;
  specialization: string;
  experience: string;
  bio: string;
  skills: string[];
  courses: string[];
  studentsCount: number;
  avatar: string;
  badge?: string;
  linkedin?: string;
}

/**
 * OFFICIAL ACTIVE INSTRUCTORS
 * 1. Suresh — Cyber Security & Ethical Hacking
 * 2. Nikhil — Data Analytics, Data Engineering, Data Science & ML
 * 3. Kiran — DSA with Python & Java
 * 4. Eswar — DevOps with AI & Cloud Engineering
 * 5. Narendra — SQL & Modern Database Architecture
 * 6. Shyam — Business Analyst & Agile Product Management
 * 7. Gurpreet — IELTS 7.5+ Band Master Coaching
 */
export const instructors: Instructor[] = [
  {
    id: "1",
    slug: "suresh",
    name: "Suresh",
    title: "Lead Cyber Security & Ethical Hacking Architect",
    specialization: "Cyber Security, SOC Operations & Ethical Hacking",
    experience: "11+ Years Industry Experience",
    bio: "Suresh is a seasoned Cyber Security Architect with over a decade of hands-on experience in enterprise defense, penetration testing, SOC operations (Splunk), threat hunting, and network security across Fortune 500 tech environments.",
    skills: [
      "Cyber Security",
      "Ethical Hacking",
      "SOC Analyst",
      "Splunk SIEM",
      "Wireshark",
      "Metasploit",
      "Network Defense",
      "Cloud Security",
    ],
    courses: ["Cyber Security & Ethical Hacking Mastery"],
    studentsCount: 2900,
    avatar: "",
    badge: "Cyber Security Lead",
  },
  {
    id: "2",
    slug: "nikhil",
    name: "Nikhil",
    title: "Principal Data Scientist & Big Data Architect",
    specialization: "Data Analytics, Data Engineering & Applied Machine Learning",
    experience: "9+ Years Industry Experience",
    bio: "Nikhil has architected enterprise data lakehouses, high-throughput ETL/ELT pipelines, and deployed production predictive AI models. He mentors students across the entire spectrum: Advanced SQL, Python, Spark, Airflow, and Power BI.",
    skills: [
      "Data Analytics",
      "Data Engineering",
      "Data Science",
      "Python",
      "SQL",
      "Apache Spark",
      "Airflow",
      "Machine Learning",
      "Power BI",
    ],
    courses: [
      "Data Analytics, Data Engineering & Data Science Masterclass",
      "Machine Learning & Applied AI",
    ],
    studentsCount: 3400,
    avatar: "",
    badge: "Principal Data Scientist",
  },
  {
    id: "3",
    slug: "kiran",
    name: "Kiran",
    title: "Senior Algorithms & Software Engineering Architect",
    specialization: "Data Structures, Algorithms (DSA) with Python & Java & System Design",
    experience: "10+ Years Industry Experience",
    bio: "Kiran has cracked top tier-1 product tech interviews and mentored thousands of software engineers in mastering complex algorithmic patterns, Big-O optimization, and competitive programming in both Python and Java.",
    skills: [
      "Data Structures",
      "Algorithms (DSA)",
      "Python",
      "Java",
      "Dynamic Programming",
      "LeetCode Patterns",
      "System Design",
      "Backend Architecture",
    ],
    courses: ["Data Structures & Algorithms (DSA) with Python & Java"],
    studentsCount: 2700,
    avatar: "",
    badge: "Lead Algorithms Mentor",
  },
  {
    id: "4",
    slug: "eswar",
    name: "Eswar",
    title: "Staff DevOps & Cloud Platform Architect",
    specialization: "Cloud Architecture, Kubernetes, Docker & AI-Infused CI/CD",
    experience: "10+ Years Industry Experience",
    bio: "Eswar is an enterprise Cloud & DevOps Architect who has designed multi-region Kubernetes clusters, automated zero-downtime CI/CD pipelines, and led enterprise cloud migrations across AWS, Azure, and GCP.",
    skills: [
      "DevOps with AI",
      "Kubernetes",
      "Docker",
      "Terraform",
      "AWS & GCP",
      "GitHub Actions",
      "ArgoCD",
      "Observability",
    ],
    courses: ["DevOps with AI & Cloud Engineering"],
    studentsCount: 3100,
    avatar: "",
    badge: "DevOps & Cloud Lead",
  },
  {
    id: "5",
    slug: "narendra",
    name: "Narendra",
    title: "Senior Database Architect & Data Analytics Specialist",
    specialization: "Advanced SQL, Database Optimization, Indexing & Data Modeling",
    experience: "9+ Years Industry Experience",
    bio: "Narendra has designed and fine-tuned mission-critical enterprise database architectures handling millions of daily queries. His focus is on practical query optimization, complex window functions, and analytics ETL pipelines.",
    skills: [
      "Advanced SQL",
      "PostgreSQL",
      "MySQL",
      "Query Tuning",
      "Database Indexing",
      "ETL Pipelines",
      "Power BI Integration",
    ],
    courses: ["SQL & Modern Database Analytics"],
    studentsCount: 2500,
    avatar: "",
    badge: "Database Architect",
  },
  {
    id: "6",
    slug: "shyam",
    name: "Shyam",
    title: "Lead Business Analyst & Product Consultant",
    specialization: "Business Analysis, Product Strategy, JIRA & Azure DevOps",
    experience: "10+ Years Consulting Experience",
    bio: "Lead Business Analyst & Product Consultant with 10+ years consulting for global banking, fintech and retail enterprises — learn from real practice, not just theory.",
    skills: [
      "Business Analysis",
      "BRD / FRD Drafting",
      "Agile & Scrum",
      "JIRA",
      "Azure DevOps",
      "Visio",
      "Excel & PowerPoint",
    ],
    courses: ["Business Analyst & Product Strategy"],
    studentsCount: 1300,
    avatar: "",
    badge: "Lead Business Analyst",
  },
  {
    id: "7",
    slug: "gurpreet",
    name: "Gurpreet",
    title: "Master IELTS Coach & International Language Specialist",
    specialization: "Spoken English Fluency & IELTS Academic/General Coaching",
    experience: "8+ Years Coaching Experience",
    bio: "Gurpreet has coached over 3,000 students in Spoken English fluency and Band 7.5+ / 8.0+ IELTS scores. Her live mentor sessions focus on real-time pronunciation correction, conversational confidence, and interview fluency.",
    skills: [
      "Spoken English",
      "IELTS Academic & General",
      "Speaking Fluency",
      "Accent Coaching",
      "Essay Task 2 Mastery",
      "Mock Evaluations",
    ],
    courses: ["IELTS 7.5+ Masterclass", "Spoken English"],
    studentsCount: 3200,
    avatar: "",
    badge: "Master IELTS & English Coach",
  },
];

export const getInstructorBySlug = (slug: string) =>
  instructors.find((i) => i.slug === slug);

export const getInstructorByName = (name: string) =>
  instructors.find((i) => i.name.toLowerCase() === name.toLowerCase());
