import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import Section from '../components/ui/Section';
import ProjectCard from '../components/ui/ProjectCard';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const { experiences } = usePortfolio();

  return (
    <div className="pt-20">
      <Section 
        title="Work Experience" 
        subtitle="My professional journey and contributions"
      >
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-px bg-gradient-to-b from-primary-300 to-primary-600 dark:from-primary-700 dark:to-primary-900"></div>

          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative grid md:grid-cols-2 gap-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white dark:bg-gray-900 rounded-full border-4 border-primary-500 transform -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="w-full h-full bg-primary-500 rounded-full"
                  />
                </div>

                {/* Content */}
                <div className={`md:text-right ${index % 2 === 0 ? 'md:pr-16' : 'md:order-2 md:pl-16'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {experience.position}
                      </h3>
                      <span className="px-3 ml-10 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium">
                        {experience.duration}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Briefcase size={18} className="mr-2" />
                        <span>{experience.company}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Calendar size={18} className="mr-2" />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <MapPin size={18} className="mr-2" />
                        <span>Salem, TamilNadu, India</span>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300">
                      {experience.description}
                    </p>
                  </motion.div>
                </div>

                {/* Projects */}
                <div className={index % 2 === 0 ? 'md:pl-16' : 'md:order-1 md:pr-16'}>
                  <div className="space-y-6">
                    {experience.projects.map((project, idx) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                      >
                        <ProjectCard project={project} index={idx} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Experience;