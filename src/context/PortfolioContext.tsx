import React, { createContext, useContext, ReactNode } from 'react';

export type Skill = {
  name: string;
  icon: string;
  level: number;
  category: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoLink?: string;
  repoLink?: string;
  isPersonal: boolean;
};

export type Experience = {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  projects: Project[];
};

type PortfolioContextType = {
  skills: Skill[];
  experiences: Experience[];
  projects: Project[];
};

const portfolioData: PortfolioContextType = {
  skills: [
    { name: 'Java', icon: 'Code', level: 80, category: 'Backend' },
    { name: 'Python', icon: 'Code', level: 75, category: 'Backend' },
    { name: 'JavaScript', icon: 'Code', level: 90, category: 'Frontend' },
    { name: 'HTML/CSS', icon: 'Palette', level: 85, category: 'Frontend' },
    { name: 'React/Redux Saga', icon: 'Code2', level: 90, category: 'Frontend' },
    { name: 'Next.js', icon: 'Code2', level: 70, category: 'Frontend' },
    { name: 'Node.js/Express.js', icon: 'Server', level: 85, category: 'Backend' },
    { name: 'REST APIs/FastAPI', icon: 'Server', level: 85, category: 'Backend' },
    { name: 'Tailwind CSS/Shadcn/UI', icon: 'Palette', level: 80, category: 'Frontend' },
    { name: 'Material UI', icon: 'Palette', level: 75, category: 'Frontend' },
    { name: 'Sequelize ORM/Mongoose', icon: 'Database', level: 80, category: 'Backend' },
    { name: 'MySQL/MongoDB/Firebase', icon: 'Database', level: 80, category: 'Backend' },
    { name: 'Docker', icon: 'Wrench', level: 70, category: 'DevOps' },
    { name: 'GCP/BigQuery', icon: 'Cloud', level: 75, category: 'DevOps' },
    { name: 'WebSocket', icon: 'TerminalSquare', level: 70, category: 'Backend' },
    { name: 'GitHub/Postman/Swagger/Insomnia', icon: 'Wrench', level: 80, category: 'Tools' },
    { name: 'Jira/Figma', icon: 'Wrench', level: 75, category: 'Tools' },
  ],
  experiences: [
    {
      id: 1,
      company: 'GWC Data.ai',
      position: 'Associate Full-Stack Developer',
      duration: 'July 2024 – May 2025',
      description:
        'Worked on full-stack development involving complex data governance and learning management systems using modern web technologies and cloud platforms.',
      projects: [
        {
          id: 1,
          title: 'Learning Management System (LMS)',
          description:
            'Built with React.js and Sequelize, it included batch scheduling, multi-role login, and trainee dashboards using React Big Calendar.',
          technologies: ['React.ts', 'Sequelize', 'React Big Calendar', 'Node.ts', 'Express.js', 'Cron Jobs', 'ShadCN', 'Ag-Grid', 'Tailwind CSS', 'OTP Auth', 'Redux Saga'],
          image: 'https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg',
          isPersonal: false,
        },
        {
          id: 2,
          title: 'Snowflake Governance Tree View',
          description:
            'Visualized Snowflake datasets as hierarchical trees using D3.js to streamline governance workflows.',
          technologies: ['D3.js', 'Snowflake', 'React.js', 'Domo', 'Tailwind CSS'],
          image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg',
          isPersonal: false,
        },
        {
          id: 3,
          title: 'Take2Eton',
          description:
            'Built a template-driven data processing system using Domo integrations with full CRUD operations.',
          technologies: ['Domo', 'React.js', 'Global Context', 'REST API', 'DOMO Api', 'ShadCN', 'Tailwind CSS', 'Ag-Grid', 'React Stripe'],
          image: 'https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg',
          isPersonal: false,
        },
        {
          id: 4,
          title: 'Domo ETL-to-Snowflake Migration Tool',
          description:
            'Fetched ETL metadata from Domo APIs and generated Snowflake stored procedures using a structured schema. Integrated Agentic AI for query generation.',
          technologies: ['Domo Api', 'Snowflake', 'Node.js', 'Agentic AI', 'React.js', 'ShadCN', 'Tailwind CSS', 'Ag-Grid', 'React Stripe'],
          image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
          isPersonal: false,
        },
      ],
    },
  ],
projects: [
  {
    id: 5,
    title: 'Ticketing Tool Management System',
    description:
      'A team-based ticketing platform for task assignment and issue resolution with seamless team collaboration.',
    technologies: ['React.js', 'App DB', 'Tailwind CSS'],
    image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg', // Team dashboard / ticketing
    demoLink: '',
    repoLink: 'https://github.com/sathyavardh/ticketingtool-frontend/tree/main',
    isPersonal: true,
  },
  {
    id: 6,
    title: 'E-Commerce Web App',
    description:
      'Full-featured shopping platform with product filtering, order tracking, user authentication, and an admin panel.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'ShadCN', 'Mongoose', 'Tailwind CSS', 'ShadCN'],
    image: 'https://www.salesforce.com/in/blog/wp-content/uploads/sites/9/2024/01/ecommerce-trends.jpg?w=768&h=432', // E-commerce feel
    demoLink: '',
    repoLink: 'https://github.com/sathyavardh/ecommerce-frontend',
    isPersonal: true,
  },
  {
    id: 7,
    title: 'Smart Car Parking System',
    description:
      'Automated parking system with license plate recognition and billing using Raspberry Pi, EasyOCR, and dweet.io.',
    technologies: ['Raspberry Pi', 'Python', 'MySQL', 'EasyOCR', 'dweet.io'],
    image: 'https://b2bblogassets.airtel.in/wp-content/uploads/2022/05/iot-based-smart-parking-scaled.jpg', // Parking & car automation
    
    isPersonal: true,
  },
  {
    id: 8,
    title: 'Open Weather Map App',
    description:
      'A responsive weather forecasting app that fetches real-time weather data using the OpenWeatherMap API. Displays temperature, humidity, wind speed, and weather conditions for any searched city with a sleek UI built using React.js and Tailwind CSS.',
    technologies: ['React.js', 'Tailwind CSS'],
    image: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*BUWY8auGO0PNTj6eIgXvPA.png', // Weather theme
    demoLink: 'https://open-weather-map-app.vercel.app/',
    repoLink: 'https://github.com/sathyavardh/open-weather-map-app',
    isPersonal: true,
  }
],

};


const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
  return (
    <PortfolioContext.Provider value={portfolioData}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = (): PortfolioContextType => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};