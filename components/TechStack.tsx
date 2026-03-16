"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type TechItem = { name: string; icon: string; color: string; customUrl?: string };
type TechCategory = { title: string; items: TechItem[] };

const categories: TechCategory[] = [
  {
    title: "LANGUAGES",
    items: [
      { name: "Python", icon: "python", color: "3776AB" },
      { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
      { name: "TypeScript", icon: "typescript", color: "3178C6" },
      { name: "Java", icon: "java", color: "007396", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "C++", icon: "cplusplus", color: "00599C" },
      { name: "C", icon: "c", color: "A8B9CC" },
      { name: "R", icon: "r", color: "276DC3" },
      { name: "PHP", icon: "php", color: "777BB4" },
      { name: "SQL", icon: "sqlite", color: "336791" }, 
    ]
  },
  {
    title: "DATABASES",
    items: [
      { name: "PostgreSQL", icon: "postgresql", color: "336791" },
      { name: "MySQL", icon: "mysql", color: "4479A1" },
      { name: "MongoDB", icon: "mongodb", color: "47A248" },
      { name: "MS SQL Server", icon: "microsoftsqlserver", color: "CC2927", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
      { name: "SQLite", icon: "sqlite", color: "003B57" },
      { name: "Oracle DB", icon: "oracle", color: "F80000", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" },
      { name: "MariaDB", icon: "mariadb", color: "003545" },
      { name: "NoSQL", icon: "mongodb", color: "ffffff" }, 
    ]
  },
  {
    title: "BIG DATA & ANALYTICS",
    items: [
      { name: "PySpark", icon: "apachespark", color: "E25A1C" },
      { name: "Hadoop", icon: "apachehadoop", color: "FFDF00" },
      { name: "Databricks", icon: "databricks", color: "FF3621" },
      { name: "Airflow", icon: "apacheairflow", color: "017CEE" },
      { name: "Snowflake", icon: "snowflake", color: "29B5E8" },
      { name: "DBT", icon: "dbt", color: "FF694B", customUrl: "https://unpkg.com/simple-icons@v13/icons/dbt.svg" },
      { name: "Delta Live Tables", icon: "databricks", color: "00ADD4" },
      { name: "Delta Lake", icon: "databricks", color: "00ADD4" },
      { name: "Kafka", icon: "apachekafka", color: "231F20" },
      { name: "Pandas", icon: "pandas", color: "150458" },
      { name: "NumPy", icon: "numpy", color: "013243" },
      { name: "Matplotlib", icon: "python", color: "11557C" }, 
      { name: "Seaborn", icon: "python", color: "4C72B0" },
      { name: "Power BI", icon: "powerbi", color: "F2C811", customUrl: "https://raw.githubusercontent.com/microsoft/PowerBI-Icons/main/SVG/Power-BI.svg" },
      { name: "Tableau", icon: "tableau", color: "E97627", customUrl: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" },
    ]
  },
  {
    title: "CLOUD",
    items: [
      { name: "AWS", icon: "amazonwebservices", color: "FF9900", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "Azure", icon: "microsoftazure", color: "0078D4", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
      { name: "GCP", icon: "googlecloud", color: "4285F4" },
    ]
  },
  {
    title: "WEB TECHNOLOGIES",
    items: [
      { name: "React.js", icon: "react", color: "61DAFB" },
      { name: "Node.js", icon: "nodedotjs", color: "68A063" },
      { name: "Express.js", icon: "express", color: "ffffff" },
      { name: "REST APIs", icon: "postman", color: "ffffff" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
      { name: "Bootstrap", icon: "bootstrap", color: "7952B3" },
      { name: "GraphQL", icon: "graphql", color: "E10098" },
      { name: "jQuery", icon: "jquery", color: "0769AD" },
      { name: "Redux", icon: "redux", color: "764ABC" },
      { name: "HTML", icon: "html5", color: "E34F26" },
      { name: "CSS", icon: "css3", color: "1572B6", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "XML", icon: "html5", color: "ffffff" },
    ]
  },
  {
    title: "AI & MACHINE LEARNING",
    items: [
      { name: "Machine Learning", icon: "keras", color: "ffffff", customUrl: "https://unpkg.com/lucide-static@0.428.0/icons/brain-circuit.svg" },
      { name: "Deep Learning", icon: "pytorch", color: "ffffff" },
      { name: "TensorFlow", icon: "tensorflow", color: "FF6F00" },
      { name: "Keras", icon: "keras", color: "D00000" },
      { name: "LangChain", icon: "langchain", color: "1C3C3C", customUrl: "https://unpkg.com/simple-icons@v13/icons/langchain.svg" },
      { name: "RAG", icon: "chroma", color: "00ffcc", customUrl: "https://unpkg.com/simple-icons@v13/icons/langchain.svg" },
      { name: "GenAI", icon: "openai", color: "7b61ff", customUrl: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
      { name: "CNN", icon: "pytorch", color: "ffffff" },
      { name: "OpenCV", icon: "opencv", color: "5C3EE8" },
      { name: "Streamlit", icon: "streamlit", color: "FF4B4B" },
    ]
  },
  {
    title: "TOOLS & OTHERS",
    items: [
      { name: "Git", icon: "git", color: "F05032" },
      { name: "GitHub", icon: "github", color: "ffffff" },
      { name: "JIRA", icon: "jira", color: "0052CC" },
      { name: "DBeaver", icon: "dbeaver", color: "4A90D9" },
      { name: "OS", icon: "linux", color: "FCC624" },
      { name: "Kubernetes", icon: "kubernetes", color: "326CE5" },
      { name: "Docker", icon: "docker", color: "2496ED" },
      { name: "CI/CD", icon: "githubactions", color: "ffffff" },
      { name: "MS Excel", icon: "microsoftexcel", color: "217346", customUrl: "https://raw.githubusercontent.com/WalkxCode/dashboard-icons/main/svg/microsoft-excel.svg" },
    ]
  }
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 px-6 md:px-0 bg-brand-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto mb-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-brand-teal"></span>
          Tools & <span className="relative inline-block">
            Technologies
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-[0.1em] bg-brand-teal shadow-[0_0_10px_rgba(0,255,204,0.8)]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              style={{ originX: 0 }}
            />
          </span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-4xl font-light text-lg">
          The technologies I've worked with across data engineering, cloud infrastructure, machine learning, and web development — each one earned through hands-on, production experience.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-20 flex flex-col gap-12">
        {categories.map((category, idx) => (
          <motion.div 
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col"
          >
            {/* Category Label */}
            <h3 className="text-xs tracking-[0.3em] text-teal-400 font-semibold mb-6 uppercase">
              {/* Add dashes to emulate the user's design */}
              <span className="opacity-50 mr-2">──</span>
              {category.title}
              <span className="opacity-50 ml-2">──</span>
            </h3>
            
            {/* Static Grid of Tech Pills */}
            <div className="flex flex-wrap gap-4">
              {category.items.map((tech, i) => (
                <div
                  key={`${tech.name}-${i}`}
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 backdrop-blur-sm flex flex-col items-center gap-2 group/item relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
                  style={{ 
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" 
                  }}
                >
                  {/* Dynamic hover glow based on the specific tech brand color */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover/item:opacity-20 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `radial-gradient(circle at center, #${tech.color} 0%, transparent 70%)` }}
                  />
                  
                  <img
                    src={tech.customUrl || `https://cdn.simpleicons.org/${tech.icon}/${tech.color}`}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 z-10 object-contain"
                  />
                  <span 
                    className="text-xs font-semibold text-gray-300 transition-colors duration-300 z-10 whitespace-nowrap"
                    style={{ color: "var(--hover-color, #d1d5db)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = `#${tech.color}`)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#d1d5db")}
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
