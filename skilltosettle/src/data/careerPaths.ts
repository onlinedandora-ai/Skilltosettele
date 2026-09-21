export interface CareerPath {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  color: string;
  gradient: string;
  image: string;
  description: string;
  courses: string[];
  outcomes: string[];
  duration: string;
  roles: string[];
}

/**
 * FINAL OFFICIAL CAREER TRACKS (Matching the 3 official course offerings)
 * 1. Cyber Security & Ethical Hacking — Suresh
 * 2. Data Analytics, Data Engineering & Data Science — Nikhil
 * 3. Software Engineering & DSA with Python/Java — Kiran
 */
export const careerPaths: CareerPath[] = [
  {
    id: "cyber-security",
    slug: "cyber-security",
    title: "Cyber Security & Ethical Hacking Architecture",
    subtitle: "Lead enterprise defense, SOC log analysis, ethical hacking, SIEM & zero-trust cloud security",
    color: "#00d4aa",
    gradient: "linear-gradient(135deg, #00d4aa22, #0090ff22)",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80",
    description: "Taught by Suresh (Lead Cyber Security Architect). Learn hands-on vulnerability assessments, penetration testing with Metasploit, Wireshark packet analysis, and Splunk SOC monitoring with 100% Placement Assistance across India & USA.",
    courses: ["Cyber Security Fundamentals", "Network Security & Wireshark", "Ethical Hacking & PenTesting", "SOC Operations & Splunk SIEM", "Cloud Security"],
    outcomes: ["Cyber Security Analyst", "SOC Level 1 & 2 Analyst", "Penetration Tester", "Information Security Engineer"],
    duration: "12 Weeks (Live Cohort)",
    roles: ["Cyber Security Analyst (₹10–22 LPA)", "SOC Analyst (₹9–18 LPA)", "Penetration Tester", "Security Consultant"],
  },
  {
    id: "data-ai",
    slug: "data-ai",
    title: "Data Analytics, Data Engineering & Data Science",
    subtitle: "Complete end-to-end data pathway: SQL, Python, Big Data Pipelines (Spark/Airflow), Machine Learning & Power BI",
    color: "#6c63ff",
    gradient: "linear-gradient(135deg, #6c63ff22, #00d4aa22)",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    description: "Taught by Nikhil (Principal Data Scientist & Big Data Architect). Master deep SQL analytics, automated ETL data engineering with Spark and Airflow, predictive machine learning models, and executive Power BI dashboards with 100% Placement Assistance.",
    courses: ["Enterprise SQL Mastery", "Python for Data Science", "Big Data with Apache Spark", "Airflow Orchestration", "Applied Machine Learning", "Executive Power BI"],
    outcomes: ["Data Analyst", "Data Engineer", "Data Scientist", "Business Intelligence Specialist"],
    duration: "16 Weeks (Live Cohort)",
    roles: ["Data Scientist (₹14–28 LPA)", "Data Engineer (₹12–24 LPA)", "Data Analyst (₹8–16 LPA)", "BI Lead"],
  },
  {
    id: "software-engineering",
    slug: "software-engineering",
    title: "Software Engineering & DSA with Python & Java",
    subtitle: "Master 350+ LeetCode patterns, complexity analysis, dynamic programming & technical coding interviews",
    color: "#ff6b6b",
    gradient: "linear-gradient(135deg, #ff6b6b22, #ffd93d22)",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    description: "Taught by Kiran (Principal Algorithms Architect). Build unshakeable coding fundamentals in Python and Java, conquer LeetCode Medium/Hard algorithmic challenges, dynamic programming, and low-level system design with 100% Placement Assistance.",
    courses: ["Big-O Complexity & Memory Internals", "Arrays, Strings & Sliding Window", "Trees, Graphs & Heaps", "Dynamic Programming Mastery", "Low-Level & High-Level System Design"],
    outcomes: ["Software Development Engineer (SDE-1 / SDE-2)", "Backend Engineer", "Algorithms Engineer", "Full Stack Engineer"],
    duration: "12 Weeks (Live Cohort)",
    roles: ["SDE-1 / SDE-2 (₹12–26 LPA)", "Backend Developer", "Software Engineer", "Systems Developer"],
  },
];
