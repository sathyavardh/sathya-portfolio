import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../context/PortfolioContext';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span 
              key={i} 
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          {project.demoLink && (
            <Button 
              variant="primary" 
              size="sm"
              as="a" 
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              rightIcon={<ExternalLink size={16} />}
            >
              Live Demo
            </Button>
          )}
          
          {project.repoLink && (
            <Button 
              variant="outline" 
              size="sm"
              as="a" 
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              rightIcon={<Github size={16} />}
            >
              Source Code
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;