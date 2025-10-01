import { FaReact, FaNodeJs, FaDocker, FaAws, FaJava } from "react-icons/fa";
import { 
  SiExpress, 
  SiMongodb, 
  SiTailwindcss, 
  SiMysql, 
  SiPostgresql, 
  SiRedis, 
  SiApachekafka, 
  SiTypescript, 
  SiGraphql, 
  SiSpringboot,
  SiReact, 
  // SiVuedotjs   // ✅ correct name
} from "react-icons/si";

const skills = [
  { name: "Node.js", logo: <FaNodeJs className="text-green-600 text-3xl" /> },
  { name: "Express.js", logo: <SiExpress className="text-gray-700 dark:text-gray-300 text-3xl" /> },
  { name: "MongoDB", logo: <SiMongodb className="text-green-500 text-3xl" /> },
  { name: "React", logo: <SiReact className="text-sky-400 text-3xl" /> },
  { name: "Tailwind", logo: <SiTailwindcss className="text-sky-400 text-3xl" /> },
  { name: "MySQL", logo: <SiMysql className="text-blue-600 text-3xl" /> },
  { name: "PostgreSQL", logo: <SiPostgresql className="text-blue-800 text-3xl" /> },
  { name: "Redis", logo: <SiRedis className="text-red-600 text-3xl" /> },
  { name: "Kafka", logo: <SiApachekafka className="text-black text-3xl" /> },
  { name: "TypeScript", logo: <SiTypescript className="text-blue-500 text-3xl" /> },
  // { name: "GraphQL", logo: <SiGraphql className="text-pink-500 text-3xl" /> },
  { name: "Docker", logo: <FaDocker className="text-sky-600 text-3xl" /> },
  { name: "AWS", logo: <FaAws className="text-orange-500 text-3xl" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((s) => (
          <div
            key={s.name}
            className="flex flex-col items-center p-4 border rounded-lg hover:shadow-lg transition-shadow"
          >
            {s.logo}
            <span className="mt-2 text-sm">{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}