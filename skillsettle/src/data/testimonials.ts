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
    before: "Manual reporting in Excel",
    after: "Data Analyst at TCS — ₹8.5 LPA",
    quote: "I came in knowing basic Excel. After completing SQL and Power BI, I landed a Data Analyst role within 3 months of completing the program. The real-world projects made all the difference in interviews.",
    avatar: "/images/testimonials/priya.jpg",
    rating: 5,
  },
  {
    id: "2",
    name: "Rahul Mehra",
    role: "DevOps Engineer",
    company: "Infosys",
    course: "DevOps With AI",
    before: "Manual deployment, no cloud experience",
    after: "DevOps Engineer at Infosys — ₹12 LPA",
    quote: "The DevOps With AI course gave me practical experience I couldn't get anywhere else. The CI/CD project I built during the course became the centerpiece of my portfolio. Got placed within 6 weeks of finishing.",
    avatar: "/images/testimonials/rahul.jpg",
    rating: 5,
  },
  {
    id: "3",
    name: "Ananya Nair",
    role: "Business Analyst",
    company: "Wipro",
    course: "Business Analyst Program",
    before: "Operations executive with no BA credentials",
    after: "Business Analyst at Wipro — ₹9.2 LPA",
    quote: "I had 5 years of operations experience but no formal BA credentials. Nikhil's program transformed that experience into a compelling BA profile. The interview prep was intense and exactly what I needed.",
    avatar: "/images/testimonials/ananya.jpg",
    rating: 5,
  },
];

export const liveClasses = [
  {
    id: "1",
    course: "DevOps With AI",
    instructor: "Eswar",
    startDate: "September 15, 2026",
    time: "7:00 PM – 9:00 PM IST",
    duration: "12 Weeks",
    seatsLeft: 8,
    price: 46000,
    slug: "devops-with-ai",
  },
  {
    id: "2",
    course: "SQL & Data Analytics",
    instructor: "Raj",
    startDate: "September 10, 2026",
    time: "6:00 PM – 8:00 PM IST",
    duration: "8 Weeks",
    seatsLeft: 12,
    price: 11999,
    slug: "data-analytics-sql",
  },
  {
    id: "3",
    course: "Business Analyst Program",
    instructor: "Nikhil",
    startDate: "September 18, 2026",
    time: "7:00 PM – 9:00 PM IST",
    duration: "10 Weeks",
    seatsLeft: 10,
    price: 24999,
    slug: "business-analyst",
  },
  {
    id: "4",
    course: "IELTS Preparation",
    instructor: "Eswar",
    startDate: "September 8, 2026",
    time: "8:00 AM – 9:30 AM IST",
    duration: "6 Weeks",
    seatsLeft: 20,
    price: 8999,
    slug: "ielts-preparation",
  },
];
