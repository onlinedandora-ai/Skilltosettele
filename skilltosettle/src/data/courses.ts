import { getUpcomingBatchDate } from "@/utils/dateUtils";

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  categorySlug: string;
  instructor: string;
  instructorTitle: string;
  rating: number;
  reviewCount: number;
  learners: number;
  duration: string;
  mode: string;
  price: number;
  originalPrice: number;
  nextBatch: string;
  seatsLeft: number;
  tags: string[];
  outcomes: string[];
  projects: string[];
  inclusions: string[];
  curriculum: { module: string; topics: string[] }[];
  image: string;
  badge?: string;
  popular?: boolean;
}

/**
 * OFFICIAL ACTIVE COURSES
 * 1. Cyber Security & Ethical Hacking Mastery — Suresh
 * 2. Data Analytics, Data Engineering & Data Science Masterclass — Nikhil
 * 3. DSA with Python & Java — Kiran
 * 4. DevOps with AI & Cloud Engineering — Eswar
 * 5. SQL & Modern Database Analytics — Narendra
 * 6. Machine Learning & Applied AI — Nikhil
 * 7. Business Analyst & Product Strategy — Shyam
 * 8. IELTS 7.5+ Masterclass — Gurpreet
 */
export const courses: Course[] = [
  {
    id: "1",
    slug: "cyber-security",
    title: "Cyber Security & Ethical Hacking Mastery",
    subtitle: "Master Network Defense, SOC Analysis, Ethical Hacking, SIEM, Penetration Testing & 100% Placement Assistance",
    category: "Cyber Security",
    categorySlug: "cyber-security",
    instructor: "Suresh",
    instructorTitle: "Lead Cyber Security & Ethical Hacking Architect",
    rating: 4.95,
    reviewCount: 430,
    learners: 1850,
    duration: "12 Weeks",
    mode: "Live Interactive Classes",
    price: 34999,
    originalPrice: 44999,
    nextBatch: getUpcomingBatchDate(3, true),
    seatsLeft: 6,
    badge: "High In-Demand 🛡️",
    popular: true,
    tags: [
      "Cyber Security",
      "Ethical Hacking",
      "SOC Analyst",
      "Network Security",
      "Splunk SIEM",
      "Metasploit",
      "Wireshark",
      "Kali Linux",
    ],
    outcomes: [
      "Conduct enterprise penetration tests and vulnerability assessments",
      "Operate SIEM solutions (Splunk) for threat detection and active incident response",
      "Analyze network packets, isolate malware vectors, and harden infrastructure",
      "Implement industry-standard NIST, OWASP Top 10, and ISO 27001 security protocols",
      "Crack top tier SOC Analyst, Security Engineer, and Ethical Hacker interviews",
      "100% Placement Assistance across hiring networks in India & USA",
    ],
    projects: [
      "Enterprise SOC Defense & Live Threat Detection with Splunk",
      "Full-Scope Web Application Penetration Test (OWASP Top 10)",
      "Zero-Trust Network Hardening & Incident Response Simulation",
    ],
    inclusions: [
      "48 hours of live interactive instructor-led classes with Suresh",
      "Hands-on virtual cyber lab environments with pre-configured attack VMs",
      "100% Placement Assistance with dedicated India & USA hiring partner drives",
      "Authorized Course Completion Certificate with verifiable credential ID",
      "1-on-1 resume optimization & placement referral network for India & USA",
      "Lifetime access to session recordings, lab notes, and exploit walkthroughs",
    ],
    curriculum: [
      { module: "Module 1: Cyber Security Fundamentals & Networking", topics: ["TCP/IP, OSI Model & Packet Structure", "DNS, DHCP, Subnetting & Routing", "Wireshark Packet Analysis", "Port Scanning & Nmap"] },
      { module: "Module 2: Linux & Scripting for Hackers", topics: ["Kali Linux Architecture", "Bash Scripting Essentials", "Python for Security Tools", "Privilege Escalation"] },
      { module: "Module 3: Ethical Hacking & Penetration Testing", topics: ["Reconnaissance & OSINT", "Vulnerability Scanning with Nessus", "Exploitation with Metasploit", "OWASP Top 10 Web Exploits"] },
      { module: "Module 4: SOC Operations & SIEM (Splunk)", topics: ["SOC Architecture (Tier 1/2/3)", "Splunk Log Ingestion & Querying (SPL)", "Creating Threat Dashboards", "Alert Triaging & Mitigation"] },
      { module: "Module 5: Incident Response & Digital Forensics", topics: ["Incident Response Lifecycle (NIST)", "Memory & Disk Forensics", "Root Cause Analysis", "Malware Analysis Basics"] },
      { module: "Module 6: Cloud Security & Capstone Defense", topics: ["AWS/Azure Cloud Security Baselines", "Identity & Access Management (IAM)", "Capstone SOC Defense Project", "Technical Interview Prep"] },
    ],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    slug: "data-analytics-engineering-science",
    title: "Data Analytics, Data Engineering & Data Science Masterclass",
    subtitle: "Complete end-to-end career track: Advanced SQL, Python, Big Data Engineering, Spark, Lakehouses & Machine Learning",
    category: "Data & AI",
    categorySlug: "data-ai",
    instructor: "Nikhil",
    instructorTitle: "Principal Data Scientist & Big Data Architect",
    rating: 4.96,
    reviewCount: 512,
    learners: 2350,
    duration: "16 Weeks",
    mode: "Live Interactive Classes",
    price: 42000,
    originalPrice: 54000,
    nextBatch: getUpcomingBatchDate(5, true),
    seatsLeft: 8,
    badge: "Flagship Track ⭐",
    popular: true,
    tags: [
      "Data Analytics",
      "Data Engineering",
      "Data Science",
      "SQL",
      "Python",
      "Apache Spark",
      "Airflow",
      "Machine Learning",
      "Power BI",
    ],
    outcomes: [
      "Master complex SQL analytics, window functions, and database query optimization",
      "Build petabyte-scale distributed data pipelines with PySpark and Databricks",
      "Architect modern cloud data lakehouses using Delta Lake, Snowflake, and BigQuery",
      "Deploy production Machine Learning models and predictive analytics pipelines",
      "Create executive business intelligence dashboards with Power BI and Tableau",
      "100% Placement Assistance with resume reviews and mock technical interviews",
    ],
    projects: [
      "Real-Time Petabyte Streaming Pipeline with Kafka & Apache Spark",
      "Enterprise Cloud Lakehouse Architecture with Databricks & Delta Lake",
      "End-to-End Customer Churn Prediction & ML Deployment Pipeline",
    ],
    inclusions: [
      "64 hours of live mentor-led classes with Nikhil",
      "Production-grade dataset access (E-commerce, Healthcare, Financial)",
      "100% Placement Assistance across tier-1 companies in India & USA",
      "Verified Course Completion Certificate with QR code validation",
      "Direct code reviews and 1-on-1 architecture feedback",
      "Lifetime access to recordings, source code repositories, and LMS resources",
    ],
    curriculum: [
      { module: "Module 1: Advanced SQL & Database Analytics", topics: ["Complex Queries & Window Functions", "CTEs, Subqueries & Joins", "Indexing & Query Plan Tuning", "Analytics Schema Design"] },
      { module: "Module 2: Python for Data Science & Engineering", topics: ["NumPy, Pandas & Polars", "Data Cleaning & Wrangling", "Exploratory Data Analysis (EDA)", "Automated Pipeline Scripting"] },
      { module: "Module 3: Big Data Engineering & Apache Spark", topics: ["Spark Core & DataFrames", "PySpark Distributed Processing", "Databricks Cloud Platform", "Partitioning & Optimization"] },
      { module: "Module 4: Orchestration & Data Warehousing", topics: ["Workflow Automation with Airflow", "Snowflake & BigQuery Warehouses", "dbt Transformations", "Data Quality & Testing"] },
      { module: "Module 5: Applied Machine Learning & AI", topics: ["Scikit-Learn Algorithms", "Regression, Classification & Clustering", "Feature Engineering", "Model Evaluation & Metrics"] },
      { module: "Module 6: Business Intelligence & Capstone", topics: ["Power BI Advanced DAX", "Executive Dashboard Design", "End-to-End Capstone Project", "Placement Mock Interviews"] },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "3",
    slug: "dsa-python-java",
    title: "Data Structures & Algorithms (DSA) with Python & Java",
    subtitle: "From Fundamentals to LeetCode Hard: Big-O Mastery, Recursion, Dynamic Programming & High-Scale System Design",
    category: "Software Engineering",
    categorySlug: "software-engineering",
    instructor: "Kiran",
    instructorTitle: "Senior Algorithms & Software Engineering Architect",
    rating: 4.94,
    reviewCount: 395,
    learners: 1720,
    duration: "14 Weeks",
    mode: "Live Interactive Classes",
    price: 29999,
    originalPrice: 39999,
    nextBatch: getUpcomingBatchDate(4, false),
    seatsLeft: 7,
    badge: "Interview Ready 🚀",
    popular: true,
    tags: [
      "DSA",
      "Python",
      "Java",
      "Data Structures",
      "Algorithms",
      "Dynamic Programming",
      "LeetCode",
      "System Design",
    ],
    outcomes: [
      "Master core and advanced data structures in both Python and Java 21",
      "Solve 250+ LeetCode Medium and Hard interview problems with optimized time complexity",
      "Master Dynamic Programming, Recursion, Graph Theory, and Tree Traversals",
      "Understand Big-O space and time complexity trade-offs in depth",
      "Learn fundamental Low-Level Design (LLD) and High-Level Design (HLD) concepts",
      "100% Placement Assistance for FAANG and top product MNC tech interviews",
    ],
    projects: [
      "High-Concurrency In-Memory Key-Value Store with LRU Cache",
      "Shortest-Path Navigation & Graph Routing Engine",
      "Distributed Rate Limiter & Task Scheduler System",
    ],
    inclusions: [
      "56 hours of intensive live coding classes with Kiran",
      "Curated problem sheets with curated LeetCode top-interview questions",
      "Dual language implementations (Python 3 & Java 21 side-by-side)",
      "100% Placement Assistance with mock technical coding rounds",
      "Verified Course Completion Certificate with QR code credential",
      "Lifetime access to problem solutions, recordings, and code templates",
    ],
    curriculum: [
      { module: "Module 1: Complexity Analysis & Arrays/Strings", topics: ["Big-O Space & Time Complexity", "Two Pointers Technique", "Sliding Window Patterns", "Prefix Sum & Kadane's Algorithm"] },
      { module: "Module 2: Hashing, Stacks & Queues", topics: ["Hash Tables & Collision Resolution", "Monotonic Stacks", "Queue & Deque Implementations", "Parentheses & Expression Parsing"] },
      { module: "Module 3: Linked Lists & Pointers", topics: ["Singly & Doubly Linked Lists", "Fast & Slow Pointers (Floyd's Cycle)", "In-Place Reversal & Merge Sort"] },
      { module: "Module 4: Recursion, Backtracking & Divide-and-Conquer", topics: ["Recursive Call Stack", "Subsets & Permutations", "N-Queens & Sudoku Solver", "Binary Search Patterns"] },
      { module: "Module 5: Trees & Binary Search Trees", topics: ["Tree Traversals (BFS & DFS)", "Lowest Common Ancestor (LCA)", "Trie (Prefix Trees)", "Heap & Priority Queues"] },
      { module: "Module 6: Graphs & Advanced Traversal", topics: ["Breadth-First & Depth-First Search", "Dijkstra's Algorithm", "Topological Sort & Cycle Detection", "Union Find"] },
      { module: "Module 7: Dynamic Programming & System Design", topics: ["1D & 2D Dynamic Programming", "Knapsack & Longest Common Subsequence", "System Design Essentials"] },
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "4",
    slug: "devops-with-ai",
    title: "DevOps with AI & Cloud Engineering",
    subtitle: "Master Kubernetes, Docker, Terraform, CI/CD, Observability & AI-Driven Cloud Infrastructure with Eswar",
    category: "Cloud & DevOps",
    categorySlug: "cloud-devops",
    instructor: "Eswar",
    instructorTitle: "Staff DevOps & Cloud Platform Architect",
    rating: 4.92,
    reviewCount: 420,
    learners: 1950,
    duration: "12 Weeks",
    mode: "Live Interactive Classes",
    price: 36000,
    originalPrice: 48000,
    nextBatch: getUpcomingBatchDate(6, true),
    seatsLeft: 6,
    badge: "Trending ☁️",
    popular: true,
    tags: [
      "DevOps",
      "Kubernetes",
      "Docker",
      "Terraform",
      "AWS",
      "CI/CD",
      "GitHub Actions",
      "ArgoCD",
    ],
    outcomes: [
      "Architect and maintain high-availability Kubernetes clusters across AWS and GCP",
      "Automate multi-stage continuous integration and deployment with GitHub Actions & ArgoCD",
      "Write clean, modular Infrastructure-as-Code (IaC) using Terraform and Ansible",
      "Integrate AI tools for automated log anomaly detection, incident response, and cost optimization",
      "Implement comprehensive observability with Prometheus, Grafana, and OpenTelemetry",
      "100% Placement Assistance with cloud architect interview preparation",
    ],
    projects: [
      "Zero-Downtime GitOps Deployment with Kubernetes, ArgoCD & Helm",
      "Multi-Region AWS Infrastructure Automation with Terraform & Terragrunt",
      "AI-Powered Cloud Cost Optimization & Log Anomaly Alerting Engine",
    ],
    inclusions: [
      "48 live interactive sessions led by Eswar",
      "Dedicated sandbox cloud accounts on AWS & GCP",
      "100% Placement Assistance across India & USA cloud firms",
      "Accredited Course Completion Certificate with QR verification",
      "1-on-1 resume optimization & mock technical interviews",
      "Lifetime access to session recordings, Terraform modules, and Helm charts",
    ],
    curriculum: [
      { module: "Module 1: Linux & Cloud Foundations", topics: ["Linux Administration & Shell Scripting", "AWS Core Services (VPC, EC2, S3, IAM)", "Networking & Security Groups"] },
      { module: "Module 2: Containerization with Docker", topics: ["Docker Architecture & Dockerfiles", "Multi-stage Builds & Optimization", "Docker Compose for Microservices", "Container Security"] },
      { module: "Module 3: Kubernetes Orchestration", topics: ["K8s Architecture, Pods, Deployments & Services", "ConfigMaps, Secrets & Ingress Controllers", "Helm Charts & Package Management", "StatefulSets & Persistent Volumes"] },
      { module: "Module 4: Infrastructure as Code (Terraform)", topics: ["Terraform HCL Syntax & State Management", "Reusable Modules & Workspaces", "CI/CD for Infrastructure", "Security Best Practices"] },
      { module: "Module 5: GitOps & CI/CD Pipelines", topics: ["GitHub Actions Workflows", "ArgoCD Declarative GitOps", "Canary & Blue-Green Deployments", "Secret Management with Vault"] },
      { module: "Module 6: Observability & AI Cloud Ops", topics: ["Prometheus Metrics & Grafana Dashboards", "Log Aggregation with ELK/Loki", "AI Log Diagnostics", "Placement Mock Interviews"] },
    ],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "5",
    slug: "sql-database-analytics",
    title: "SQL & Modern Database Analytics",
    subtitle: "From Foundation to Advanced Window Functions, Query Optimization, Database Modeling & Power BI Integration with Narendra",
    category: "Data & AI",
    categorySlug: "data-ai",
    instructor: "Narendra",
    instructorTitle: "Senior Database Architect & Data Analytics Specialist",
    rating: 4.88,
    reviewCount: 310,
    learners: 1650,
    duration: "8 Weeks",
    mode: "Live Interactive Classes",
    price: 18999,
    originalPrice: 26000,
    nextBatch: getUpcomingBatchDate(7, false),
    seatsLeft: 9,
    badge: "Core Essential 📊",
    popular: true,
    tags: [
      "SQL",
      "PostgreSQL",
      "MySQL",
      "Database Modeling",
      "Query Tuning",
      "Window Functions",
      "Power BI",
    ],
    outcomes: [
      "Write fast, scalable SQL queries using CTEs, complex subqueries, and advanced joins",
      "Master analytical window functions (RANK, DENSE_RANK, LEAD, LAG, NTILE)",
      "Design normalized and dimensional database schemas (Star and Snowflake schemas)",
      "Diagnose execution plans, optimize indexing, and eliminate slow queries",
      "Connect databases directly to Power BI and create live interactive executive reports",
      "100% Placement Assistance with data analyst SQL technical tests",
    ],
    projects: [
      "E-Commerce Transactional Database Optimization & Query Audit",
      "Customer Retention & Cohort Analysis Using Advanced Window Functions",
      "Live SQL Database to Power BI Interactive Executive Dashboard",
    ],
    inclusions: [
      "32 live interactive sessions with Narendra",
      "Hands-on access to production database instances with millions of records",
      "100% Placement Assistance across corporate analytics teams",
      "Course Completion Certificate with credential ID",
      "1-on-1 resume optimization & SQL interview problem sets",
      "Lifetime access to recordings, SQL cheatsheets, and query libraries",
    ],
    curriculum: [
      { module: "Module 1: Relational Database Fundamentals", topics: ["Relational Algebra & ACID Properties", "DDL, DML & Constraints", "CRUD Operations & Best Practices", "Data Types & Constraints"] },
      { module: "Module 2: Advanced Queries & Filtering", topics: ["Complex Joins (Inner, Left, Right, Full, Cross)", "Aggregations & GROUP BY / HAVING", "Subqueries & Correlated Queries", "Common Table Expressions (CTEs)"] },
      { module: "Module 3: Window Functions & Analytics", topics: ["ROW_NUMBER, RANK & DENSE_RANK", "LEAD & LAG Time Series Analysis", "Rolling Averages & Cumulative Sums", "NTILE & Quantile Segmentation"] },
      { module: "Module 4: Database Architecture & Indexing", topics: ["B-Tree & Hash Indexes", "EXPLAIN & Execution Plan Analysis", "Query Optimization Strategies", "Partitioning & Sharding Concepts"] },
      { module: "Module 5: Stored Procedures & Triggers", topics: ["PL/pgSQL Functions", "Triggers & Automated Auditing", "Transactions & Concurrency Control", "Error Handling"] },
      { module: "Module 6: Power BI Reporting & Capstone", topics: ["Connecting Power BI to SQL", "DirectQuery vs Import Mode", "End-to-End Capstone Dashboard", "Placement SQL Interview Drills"] },
    ],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "6",
    slug: "machine-learning-ai",
    title: "Machine Learning & Applied AI",
    subtitle: "Build, Train & Deploy Real-World Predictive Models, Deep Learning & Generative AI Solutions with Nikhil",
    category: "Data & AI",
    categorySlug: "data-ai",
    instructor: "Nikhil",
    instructorTitle: "Principal Data Scientist & Big Data Architect",
    rating: 4.93,
    reviewCount: 380,
    learners: 1450,
    duration: "14 Weeks",
    mode: "Live Interactive Classes",
    price: 38000,
    originalPrice: 48000,
    nextBatch: getUpcomingBatchDate(8, true),
    seatsLeft: 5,
    badge: "AI Powered 🤖",
    popular: true,
    tags: [
      "Machine Learning",
      "Python",
      "Artificial Intelligence",
      "Deep Learning",
      "Scikit-Learn",
      "TensorFlow",
      "MLOps",
    ],
    outcomes: [
      "Implement supervised and unsupervised learning algorithms from scratch and with Scikit-Learn",
      "Build deep neural network architectures using PyTorch and TensorFlow",
      "Deploy ML models into production using FastAPI and Docker containers",
      "Set up automated MLOps pipelines with MLflow for tracking and registry",
      "Solve real-world industry problems in fraud detection, recommendation systems, and churn prediction",
      "100% Placement Assistance with ML technical rounds and take-home assignments",
    ],
    projects: [
      "Real-Time Financial Fraud Detection Engine with Scikit-Learn & XGBoost",
      "E-Commerce Recommendation System using Collaborative Filtering & Neural Embeddings",
      "End-to-End MLOps Pipeline on Cloud with FastAPI, Docker & MLflow",
    ],
    inclusions: [
      "56 live mentor sessions led by Nikhil",
      "Cloud GPU notebook environments (Jupyter / Colab Pro access)",
      "100% Placement Assistance with data science hiring partners",
      "Course Completion Certificate with online verification",
      "1-on-1 portfolio project review & code walk-throughs",
      "Lifetime access to recordings, datasets, and pre-trained models",
    ],
    curriculum: [
      { module: "Module 1: Python for Machine Learning", topics: ["Advanced NumPy & Pandas", "Vectorized Operations", "Feature Engineering & Imputation", "Data Visualization with Seaborn"] },
      { module: "Module 2: Supervised Learning", topics: ["Linear & Logistic Regression", "Decision Trees & Random Forests", "Gradient Boosting (XGBoost & LightGBM)", "Hyperparameter Tuning & Cross-Validation"] },
      { module: "Module 3: Unsupervised Learning", topics: ["K-Means & Hierarchical Clustering", "Principal Component Analysis (PCA)", "Anomaly Detection Techniques", "Association Rule Mining"] },
      { module: "Module 4: Deep Learning Foundations", topics: ["Feedforward Neural Networks", "Backpropagation & Optimizers", "PyTorch / TensorFlow Baselines", "Convolutional Neural Networks (CNNs)"] },
      { module: "Module 5: Natural Language Processing (NLP)", topics: ["Text Tokenization & TF-IDF", "Word2Vec & Embeddings", "Transformers & HuggingFace", "Fine-Tuning Open Source LLMs"] },
      { module: "Module 6: MLOps & Production Deployment", topics: ["Model Serialization & Versioning", "FastAPI REST API Development", "Dockerizing ML Applications", "MLflow & Placement Preparation"] },
    ],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "7",
    slug: "business-analyst",
    title: "Business Analyst & Product Strategy",
    subtitle: "Bridge the Gap Between Tech and Business: Master Agile, BRD, FRD, JIRA, SQL & Stakeholder Management with Shyam",
    category: "Business & Management",
    categorySlug: "business",
    instructor: "Shyam",
    instructorTitle: "Lead Business Analyst & Product Consultant",
    rating: 4.89,
    reviewCount: 290,
    learners: 1300,
    duration: "10 Weeks",
    mode: "Live Interactive Classes",
    price: 24999,
    originalPrice: 32000,
    nextBatch: getUpcomingBatchDate(9, true),
    seatsLeft: 8,
    badge: "Career Switch 💼",
    popular: true,
    tags: [
      "Business Analyst",
      "Agile",
      "Scrum",
      "BRD",
      "FRD",
      "JIRA",
      "SQL",
      "User Stories",
    ],
    outcomes: [
      "Elicit, analyze, and document comprehensive Business Requirement Documents (BRDs) and FRDs",
      "Lead Scrum ceremonies, sprint planning, and backlog refinement using JIRA and Confluence",
      "Model end-to-end business workflows using BPMN 2.0, UML activity diagrams, and use cases",
      "Conduct data-driven business analysis using SQL and interactive Tableau dashboards",
      "Manage senior executive stakeholders and communicate complex technical concepts with clarity",
      "100% Placement Assistance with mock business case interviews and portfolio preparation",
    ],
    projects: [
      "End-to-End Fintech Banking App BRD, FRD & User Story Specification",
      "E-Commerce Checkout Revamp: Agile Sprint Backlog & JIRA Management",
      "Executive Data-Driven Business Case & ROI Analysis Dashboard",
    ],
    inclusions: [
      "40 live interactive sessions led by Shyam",
      "Real-world enterprise case studies and template libraries",
      "100% Placement Assistance across banking, tech, and consulting firms",
      "Course Completion Certificate with credential verification",
      "1-on-1 resume optimization & scenario-based mock interviews",
      "Lifetime access to session recordings, templates, and frameworks",
    ],
    curriculum: [
      { module: "Module 1: Role of a Modern Business Analyst", topics: ["SDLC vs STLC Methodologies", "Business Analyst vs Product Manager", "Business Case Development", "Stakeholder Identification & Mapping"] },
      { module: "Module 2: Requirement Engineering & Elicitation", topics: ["Interviewing & Workshop Techniques", "Drafting BRD (Business Requirements Document)", "Drafting FRD & Functional Specs", "Traceability Matrix (RTM)"] },
      { module: "Module 3: Agile, Scrum & JIRA in Practice", topics: ["Scrum Framework & Sprint Ceremonies", "Writing High-Quality User Stories", "Acceptance Criteria (INVEST & Gherkin)", "Hands-on JIRA & Confluence Workflows"] },
      { module: "Module 4: Process Modeling & Wireframing", topics: ["BPMN 2.0 Business Process Notation", "UML Use Case & Activity Diagrams", "Figma / Miro Wireframing Basics", "Gap Analysis & Root Cause Analysis"] },
      { module: "Module 5: Data Analysis for Business Analysts", topics: ["Essential SQL Queries for BA", "Excel Advanced Functions & VLOOKUP", "Tableau Interactive Reporting", "A/B Testing & KPI Definition"] },
      { module: "Module 6: Capstone Project & Placement Prep", topics: ["Comprehensive Capstone Case Study", "Product Walk-Through Presentation", "Behavioral & Scenario Mock Interviews", "Placement Network Referrals"] },
    ],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "8",
    slug: "ielts-preparation",
    title: "IELTS 7.5+ Masterclass",
    subtitle: "Score Band 7.5+ in Academic or General IELTS: Master Speaking Fluency, Writing Task 1 & 2, Listening & Reading with Gurpreet",
    category: "Global Careers",
    categorySlug: "global",
    instructor: "Gurpreet",
    instructorTitle: "Master IELTS Coach & International Language Specialist",
    rating: 4.96,
    reviewCount: 450,
    learners: 2800,
    duration: "6 Weeks",
    mode: "Live Interactive Classes",
    price: 11999,
    originalPrice: 16999,
    nextBatch: getUpcomingBatchDate(4, false),
    seatsLeft: 12,
    badge: "Global Visa 🌍",
    popular: true,
    tags: [
      "IELTS",
      "Speaking Fluency",
      "Writing Task 1 & 2",
      "Reading Comprehension",
      "Band 7.5+",
      "Global Study",
    ],
    outcomes: [
      "Target and achieve Band 7.5+ or Band 8.0+ in Academic or General IELTS",
      "Master structured essay templates for Writing Task 1 (Reports/Letters) and Task 2 (Essays)",
      "Build natural English speaking fluency, eliminate hesitation, and master accent clarity",
      "Learn skimming and scanning speed strategies for complex Reading passages",
      "Develop active listening techniques for UK, US, and Australian accents in Section 1–4",
      "Complete 10+ proctored mock tests with detailed personal scoring and feedback",
    ],
    projects: [
      "Personalized Writing Portfolio with 20+ Evaluated Task 1 & 2 Essays",
      "1-on-1 Recorded Speaking Mock Interviews with Fluency Scoring",
      "Comprehensive Proctored 4-Module IELTS Simulation Exam",
    ],
    inclusions: [
      "24 live interactive training sessions with Gurpreet",
      "Individual 1-on-1 essay grading and detailed diagnostic feedback",
      "Curated Cambridge IELTS official test preparation materials",
      "Course Completion Certificate recognized by global study partners",
      "Weekly live speaking practice rooms with peer groups",
      "Lifetime access to audio drills, vocabulary banks, and recorded sessions",
    ],
    curriculum: [
      { module: "Module 1: IELTS Test Architecture & Scoring Strategy", topics: ["Academic vs General Training Overview", "Band Descriptors (Fluency, Cohesion, Grammar, Vocab)", "Diagnostic Baseline Assessment"] },
      { module: "Module 2: Listening Module Mastery", topics: ["Section 1 to 4 Strategy", "Accents & Distractor Identification", "Form Completion & Multiple Choice", "Practice Drills & Error Analysis"] },
      { module: "Module 3: Reading Speed & Accuracy", topics: ["Skimming, Scanning & Intensive Reading", "True/False/Not Given Mastery", "Matching Headings & Information", "Time Management Tactics"] },
      { module: "Module 4: Writing Task 1 (Charts, Graphs & Letters)", topics: ["Data Reporting & Overview Paragraphs", "Formal & Semi-Formal Letter Writing", "Grammatical Range & Cohesion", "Sample Band 9 Responses"] },
      { module: "Module 5: Writing Task 2 (Opinion & Argumentative Essays)", topics: ["Idea Generation & Essay Structuring", "Thesis Statements & Cohesive Devices", "Lexical Resource & Advanced Vocabulary", "1-on-1 Essay Corrections"] },
      { module: "Module 6: Speaking Fluency & Final Simulation", topics: ["Part 1 Familiar Topics & Part 2 Cue Cards", "Part 3 Abstract Discussions", "Pronunciation & Idiomatic Language", "Full Proctored Mock Exam"] },
    ],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80",
  },
];

export const getCourseBySlug = (slug: string): Course | undefined => {
  // Direct match
  const match = courses.find((c) => c.slug === slug);
  if (match) return match;

  // Backward-compatible alias mappings
  if (slug === "data-analytics-sql") {
    return courses.find((c) => c.slug === "sql-database-analytics") || courses.find((c) => c.slug === "data-analytics-engineering-science");
  }
  if (slug === "power-bi") {
    return courses.find((c) => c.slug === "sql-database-analytics");
  }

  return undefined;
};

export const getPopularCourses = (): Course[] => courses.filter((c) => c.popular);

export const getCoursesByCategory = (categorySlug: string): Course[] =>
  courses.filter((c) => c.categorySlug === categorySlug);
