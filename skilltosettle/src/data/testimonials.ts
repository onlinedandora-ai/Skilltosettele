import { getUpcomingBatchDate } from "@/utils/dateUtils";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  course: string;
  before: string;
  after: string;
  quote: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Data Analyst",
    company: "TCS",
    course: "SQL & Data Analytics",
    before: "Basic Excel reporting, no SQL background",
    after: "Data Analyst at TCS — ₹8.5 LPA",
    quote: "Narendra's SQL sessions were a complete game-changer. The hands-on query labs and window function breakdowns gave me the exact problem-solving skills needed to clear the TCS technical round on my first attempt.",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "2",
    name: "Rahul Mehra",
    role: "DevOps & Cloud Engineer",
    company: "Infosys",
    course: "DevOps with AI",
    before: "Manual deployments, zero Kubernetes exposure",
    after: "DevOps Engineer at Infosys — ₹13.2 LPA (+85% hike)",
    quote: "Eswar explains complex Kubernetes and Terraform concepts with real enterprise infrastructure diagrams. The live CI/CD capstone project was the main discussion point in my Infosys interviews.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "3",
    name: "Ananya Nair",
    role: "Business Analyst",
    company: "Wipro",
    course: "Business Analyst Program",
    before: "Non-IT operations associate",
    after: "Business Analyst at Wipro — ₹9.8 LPA",
    quote: "Shyam's program helped me transition seamlessly from operations into tech BA. Writing real BRDs and running mock Agile sprints in JIRA gave me total confidence in every interview.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "4",
    name: "Venkatesh Rao",
    role: "AI / ML Engineer",
    company: "Cognizant",
    course: "Machine Learning & AI",
    before: "Traditional Java developer",
    after: "ML Engineer at Cognizant — ₹15.5 LPA",
    quote: "Nikhil breaks down complex mathematical models and deep learning architectures into intuitive code. The MLOps deployment module helped me stand out from typical candidates.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "5",
    name: "Simran Kaur",
    role: "Cloud Consultant (UK Visa)",
    company: "Deloitte UK",
    course: "IELTS Preparation",
    before: "Band 6.0 in writing and speaking",
    after: "Band 8.0 Overall (Speaking 8.5, Writing 7.5)",
    quote: "Gurpreet's essay structures and speaking fluency sessions are second to none. Her direct 1-on-1 feedback pushed my score from 6.0 straight to Band 8.0, securing my UK work visa.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    rating: 5,
  },
];

export const liveClasses = [
  {
    id: "1",
    course: "Cyber Security & Ethical Hacking Mastery",
    instructor: "Suresh",
    startDate: getUpcomingBatchDate(3, true),
    time: "7:00 PM – 9:00 PM IST (9:30 AM EST)",
    duration: "12 Weeks",
    seatsLeft: 6,
    price: 34999,
    slug: "cyber-security",
  },
  {
    id: "2",
    course: "Data Analytics, Data Engineering & Data Science Masterclass",
    instructor: "Nikhil",
    startDate: getUpcomingBatchDate(5, true),
    time: "8:00 PM – 10:00 PM IST (10:30 AM EST)",
    duration: "16 Weeks",
    seatsLeft: 5,
    price: 42000,
    slug: "data-analytics-engineering-science",
  },
  {
    id: "3",
    course: "Data Structures & Algorithms (DSA) with Python & Java",
    instructor: "Kiran",
    startDate: getUpcomingBatchDate(4, false),
    time: "6:30 PM – 8:30 PM IST (9:00 AM EST)",
    duration: "14 Weeks",
    seatsLeft: 7,
    price: 29999,
    slug: "dsa-python-java",
  },
  {
    id: "4",
    course: "DevOps with AI & Cloud Engineering",
    instructor: "Eswar",
    startDate: getUpcomingBatchDate(6, true),
    time: "7:00 PM – 9:00 PM IST (9:30 AM EST)",
    duration: "12 Weeks",
    seatsLeft: 6,
    price: 36000,
    slug: "devops-with-ai",
  },
  {
    id: "5",
    course: "SQL & Modern Database Analytics",
    instructor: "Narendra",
    startDate: getUpcomingBatchDate(7, false),
    time: "7:30 PM – 9:00 PM IST (10:00 AM EST)",
    duration: "8 Weeks",
    seatsLeft: 9,
    price: 18999,
    slug: "sql-database-analytics",
  },
  {
    id: "6",
    course: "Machine Learning & Applied AI",
    instructor: "Nikhil",
    startDate: getUpcomingBatchDate(8, true),
    time: "8:30 PM – 10:30 PM IST (11:00 AM EST)",
    duration: "14 Weeks",
    seatsLeft: 5,
    price: 38000,
    slug: "machine-learning-ai",
  },
  {
    id: "7",
    course: "Business Analyst & Product Strategy",
    instructor: "Shyam",
    startDate: getUpcomingBatchDate(9, true),
    time: "7:00 PM – 8:30 PM IST (9:30 AM EST)",
    duration: "10 Weeks",
    seatsLeft: 8,
    price: 24999,
    slug: "business-analyst",
  },
  {
    id: "8",
    course: "IELTS 7.5+ Masterclass",
    instructor: "Gurpreet",
    startDate: getUpcomingBatchDate(4, false),
    time: "6:00 PM – 7:30 PM IST (8:30 AM EST)",
    duration: "6 Weeks",
    seatsLeft: 12,
    price: 11999,
    slug: "ielts-preparation",
  },
];
