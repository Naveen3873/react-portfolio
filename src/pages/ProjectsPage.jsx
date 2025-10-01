import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

// 🔹 Project Data
const projects = [
  {
    title: "Thangamayil DigiGold",
    tech: [<SiReact key="react" />, <SiNodedotjs key="node" />, <SiMongodb key="mongo" />],
    description: [
      "Developed 19+ dashboards and reporting modules for scheme tracking and analytics.",
      "Optimized high-volume Excel exports (1M+ records) using batch processing for performance.",
      "Implemented JWT + MFA authentication for secure internal user access.",
    ],
  },
  {
    title: "Telecaller Platform",
    tech: [<SiNodedotjs key="node" />, <SiReact key="react" />, <SiPostgresql key="pg" />, <SiMongodb key="mongo" />],
    description: [
      "Built a WhatsApp bulk messaging and campaign scheduling system with real-time lead follow-ups.",
      "Designed scalable REST APIs for campaign management, tracking, and reporting.",
      "Integrated webhooks and event-driven workflows for real-time notifications.",
    ],
  },
  {
    title: "Other Projects (Examsdaily, Crack-Ed, One-to-One Learning)",
    tech: [<SiNodedotjs key="node" />, <SiPostgresql key="pg" />, <SiMysql key="mysql" />],
    description: [
      "Developed course management, exam & timetable modules, and video streaming.",
      "Implemented personalized teaching features with secure REST APIs.",
      "Worked on schema-based multi-tenant SaaS course management system.",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
      <Header />

      <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-10">Featured Projects</h1>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="p-6 rounded-2xl border bg-white dark:bg-slate-900 shadow hover:shadow-xl transition"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

              {/* Tech Icons */}
              <div className="flex gap-3 text-2xl text-blue-600 dark:text-blue-400 mb-4">
                {project.tech.map((icon, i) => (
                  <span key={i}>{icon}</span>
                ))}
              </div>

              {/* Description */}
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}