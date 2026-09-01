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
  linkedin?: string;
}

export const instructors: Instructor[] = [
  {
    id: "1",
    slug: "eswar",
    name: "Eswar",
    title: "DevOps & Cloud Expert",
    specialization: "Cloud Infrastructure & DevOps Automation",
    experience: "10+ Years Industry Experience",
    bio: "Eswar brings over a decade of hands-on experience in cloud infrastructure, DevOps automation and platform engineering. He has worked with enterprises across multiple industries building and scaling production systems.",
    skills: ["AWS", "Azure", "DevOps", "Kubernetes", "Docker", "Terraform", "CI/CD"],
    courses: ["DevOps With AI", "AWS Solutions Architect", "Kubernetes Mastery", "IELTS Preparation"],
    studentsCount: 2400,
    avatar: "/images/instructors/eswar.jpg",
  },
  {
    id: "2",
    slug: "raj",
    name: "Raj",
    title: "Data & ML Expert",
    specialization: "Data Engineering & Machine Learning",
    experience: "8+ Years Industry Experience",
    bio: "Raj specializes in data engineering and machine learning with experience across fintech, healthcare and e-commerce domains. He's passionate about making complex data concepts practical and applicable.",
    skills: ["Python", "SQL", "Machine Learning", "TensorFlow", "Spark", "Power BI", "Data Analytics"],
    courses: ["SQL & Data Analytics", "Machine Learning & AI", "Python for Data Science"],
    studentsCount: 3200,
    avatar: "/images/instructors/raj.jpg",
  },
  {
    id: "3",
    slug: "gurmeet",
    name: "Gurmeet K",
    title: "Microsoft BI Specialist",
    specialization: "Business Intelligence & Microsoft Power Platform",
    experience: "7+ Years Industry Experience",
    bio: "Gurmeet is a Microsoft-certified BI specialist with deep expertise in Power BI, Power Platform and enterprise reporting. He combines technical depth with a gift for clear, practical instruction.",
    skills: ["Power BI", "DAX", "Power Apps", "Power Automate", "Excel", "Azure"],
    courses: ["Power BI Mastery", "Power Platform", "Microsoft Excel Advanced"],
    studentsCount: 1800,
    avatar: "/images/instructors/gurmeet.jpg",
  },
  {
    id: "4",
    slug: "nikhil",
    name: "Nikhil",
    title: "Business Analysis Expert",
    specialization: "Business Analysis & Project Management",
    experience: "9+ Years Industry Experience",
    bio: "Nikhil has helped hundreds of professionals transition into Business Analyst roles through a combination of domain expertise, practical frameworks and interview coaching tailored to current hiring standards.",
    skills: ["Business Analysis", "Agile", "Scrum", "JIRA", "SQL", "Power BI", "Requirements Engineering"],
    courses: ["Business Analyst Program", "Project Management", "Agile & Scrum"],
    studentsCount: 1400,
    avatar: "/images/instructors/nikhil.jpg",
  },
];
