import { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import Section from '../components/ui/Section';
import ProjectCard from '../components/ui/ProjectCard';

const Projects = () => {
  const { projects, experiences } = usePortfolio();
  const [filter, setFilter] = useState<'all' | 'personal' | 'professional'>('all');
  
  // Combine all projects (both professional and personal)
  const allProjects = [
    ...projects,
    ...experiences.flatMap(exp => exp.projects)
  ];
  
  // Filter projects based on the selected filter
  const filteredProjects = filter === 'all' 
    ? allProjects
    : filter === 'personal'
      ? allProjects.filter(project => project.isPersonal)
      : allProjects.filter(project => !project.isPersonal);

  return (
    <div className="pt-20">
      <Section 
        title="My Projects" 
        subtitle="A showcase of my technical skills and creativity"
      >
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-1 inline-flex">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('personal')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'personal'
                  ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Personal
            </button>
            <button
              onClick={() => setFilter('professional')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'professional'
                  ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Professional
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Projects;