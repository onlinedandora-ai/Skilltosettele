import type { Metadata } from "next";
import "./globals.css";
import "./animations.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/layout/WhatsAppButton";
export const metadata: Metadata = {
  title: "SkilltoSettle — Learn the Skill. Build the Career.",
  description:
    "Master in-demand skills with expert-led training, real-world projects and career-focused support. 100+ courses. 1,000+ learners. AI, DevOps, Data, Business Analysis, IELTS and more.",
  keywords:
    "online training, DevOps course, data analytics, SQL, machine learning, Power BI, IELTS, business analyst, career training India",
  openGraph: {
    title: "SkilltoSettle — Learn the Skill. Build the Career.",
    description:
      "Industry-focused training with real projects and career guidance. Become career-ready.",
    type: "website",
    url: "https://skilltosettle.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
