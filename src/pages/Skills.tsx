import { useState } from "react";
import { motion } from "framer-motion";
import { usePortfolio } from "../context/PortfolioContext";
import Section from "../components/ui/Section";
import SkillBar from "../components/ui/SkillBar";
import {
  Code,
  Server,
  TerminalSquare,
  Palette,
  Wrench,
} from "lucide-react";

const Skills = () => {
  const { skills } = usePortfolio();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "DevOps", "Tools"];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const getIconForCategory = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Code size={20} />;
      case "Backend":
        return <Server size={20} />;
      case "DevOps":
        return <TerminalSquare size={20} />;
      case "Tools":
        return <Wrench size={20} />;
      default:
        return <Palette size={20} />;
    }
  };

  return (
    <div className="pt-20">
      <Section title="My Skills" subtitle="Technologies and tools I work with">
        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category
                  ? "bg-primary-600 text-white shadow-md"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category !== "All" && getIconForCategory(category)}
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <SkillBar name={skill.name} level={skill.level} />
            </motion.div>
          ))}
        </div>
      </Section>

      <Section
        title="My Toolbox"
        subtitle="The technologies and tools I use daily"
        className="bg-gray-50 dark:bg-gray-900/50"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Java",
              icon: "☕",
              color: "bg-red-100 dark:bg-red-900/30",
            },
            {
              name: "JavaScript",
              icon: "📜",
              color: "bg-yellow-100 dark:bg-yellow-900/30",
            },

            {
              name: "React",
              icon: "⚛️",
              color: "bg-blue-100 dark:bg-blue-900/30",
            },
            {
              name: "Node.js",
              icon: "🟢",
              color: "bg-green-100 dark:bg-green-900/30",
            },
            {
              name: "Redux Saga",
              icon: "🔁",
              color: "bg-purple-100 dark:bg-purple-900/30",
            },

            {
              name: "Tailwind CSS",
              icon: "🌊",
              color: "bg-teal-100 dark:bg-teal-900/30",
            },

            {
              name: "Postman",
              icon: "📬",
              color: "bg-orange-100 dark:bg-orange-900/30",
            },

            {
              name: "GitHub",
              icon: "🐙",
              color: "bg-gray-100 dark:bg-gray-800/30",
            },
            {
              name: "MySQL",
              icon: "📦",
              color: "bg-blue-100 dark:bg-blue-900/30",
            },
            {
              name: "MongoDB",
              icon: "🍃",
              color: "bg-green-100 dark:bg-green-900/30",
            },
          ].map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`${tool.color} p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center h-32`}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="text-4xl mb-2">{tool.icon}</div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {tool.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Skills;
