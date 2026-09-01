export interface CareerPath {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  gradient: string;
  description: string;
  courses: string[];
  outcomes: string[];
  duration: string;
  roles: string[];
}

export const careerPaths: CareerPath[] = [
  {
    id: "ai-data",
    slug: "ai-data",
    title: "AI & Data",
    subtitle: "Build the future with data and intelligence",
    icon: "🧠",
    color: "#6c63ff",
    gradient: "linear-gradient(135deg, #6c63ff22, #00d4aa22)",
    description: "Master the skills powering the AI economy — from SQL fundamentals to machine learning and AI engineering.",
    courses: ["SQL", "Python", "Power BI", "Machine Learning", "AI Engineering", "Data Analytics"],
    outcomes: ["Data Analyst", "ML Engineer", "AI Engineer", "Business Intelligence Analyst"],
    duration: "4–6 months",
    roles: ["Data Analyst", "ML Engineer", "AI Engineer", "BI Analyst", "Data Scientist"],
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    subtitle: "Power modern infrastructure and delivery",
    icon: "☁️",
    color: "#00d4aa",
    gradient: "linear-gradient(135deg, #00d4aa22, #0090ff22)",
    description: "Build the skills to design, deploy and manage modern cloud infrastructure and DevOps pipelines.",
    courses: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "DevOps With AI", "Terraform"],
    outcomes: ["DevOps Engineer", "Cloud Architect", "Site Reliability Engineer", "Platform Engineer"],
    duration: "4–5 months",
    roles: ["DevOps Engineer", "Cloud Engineer", "SRE", "Platform Engineer"],
  },
  {
    id: "software-development",
    slug: "software-development",
    title: "Software Development",
    subtitle: "Build products from idea to production",
    icon: "💻",
    color: "#ff6b6b",
    gradient: "linear-gradient(135deg, #ff6b6b22, #ffd93d22)",
    description: "Develop practical skills across modern programming languages and web technologies to build real software.",
    courses: ["Python", "Java", ".NET", "Web Development", "React", "Node.js"],
    outcomes: ["Software Developer", "Backend Developer", "Full Stack Developer", "Web Developer"],
    duration: "4–6 months",
    roles: ["Software Developer", "Backend Developer", "Full Stack Developer"],
  },
  {
    id: "business",
    slug: "business",
    title: "Business & Management",
    subtitle: "Drive decisions and lead projects",
    icon: "📊",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b22, #ef444422)",
    description: "Develop practical business analysis, project management and leadership skills for today's workplace.",
    courses: ["Business Analyst", "Project Management", "PMO", "Agile & Scrum", "Power BI"],
    outcomes: ["Business Analyst", "Project Manager", "PMO Analyst", "Product Owner"],
    duration: "3–5 months",
    roles: ["Business Analyst", "Project Manager", "PMO Analyst", "Product Owner"],
  },
  {
    id: "microsoft",
    slug: "microsoft",
    title: "Microsoft",
    subtitle: "Master the Microsoft technology ecosystem",
    icon: "⚡",
    color: "#0078d4",
    gradient: "linear-gradient(135deg, #0078d422, #00bcd422)",
    description: "Build expertise across the Microsoft technology stack — from Power Platform to Azure and beyond.",
    courses: ["Power BI", "Power Apps", "Power Platform", "Azure", "Office 365", ".NET"],
    outcomes: ["Power Platform Developer", "Azure Solutions Architect", "Microsoft BI Developer"],
    duration: "3–5 months",
    roles: ["Power Platform Developer", "Azure Architect", "Microsoft BI Developer"],
  },
  {
    id: "global",
    slug: "global",
    title: "Global Careers",
    subtitle: "Prepare for international opportunities",
    icon: "🌍",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b98122, #06b6d422)",
    description: "Get ready for international career opportunities with IELTS, TOEFL and professional English mastery.",
    courses: ["IELTS", "TOEFL", "Professional English", "Business Communication"],
    outcomes: ["International Career", "Global Study", "Immigration-Ready", "Corporate English"],
    duration: "2–3 months",
    roles: ["International Professional", "Global Mobility Ready"],
  },
];
