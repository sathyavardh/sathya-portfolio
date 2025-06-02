import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import Typed from 'typed.js';
import Work from '../images/lottie-1.gif';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Full-Stack Developer', 'Frontend Developer', 'Backend Developer'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Section fullHeight className="flex items-center justify-center pt-28">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span 
              className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 text-sm font-medium mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Welcome! Explore my work and journey as a full-stack developer.
            </motion.span>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Hi, I'm <span className="text-primary-600 dark:text-primary-400">Sathyavardhan K</span>
              <div>
                <span ref={typedRef} className="text-primary-600 dark:text-primary-400" />
              </div>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              I build exceptional and accessible digital experiences for the web.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link to="/projects">
                <Button size="lg" rightIcon={<ArrowRight />}>
                  View My Work
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Contact Me
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative w-full h-80 md:h-96"
          >
            <img 
              src={Work} 
              alt="Professional portrait" 
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <a href="#featured-projects" className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
              <span className="mb-2 text-sm">Scroll Down</span>
              <ArrowDown size={20} />
            </a>
          </motion.div>
        </div>
      </Section>

      {/* Featured Projects Section */}
      <Section 
        id="featured-projects" 
        title="Featured Projects" 
        subtitle="Some of my recent work that I'm proud of"
        className="bg-gray-50 dark:bg-gray-900/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Cards */}
          {/* Add your project cards here as needed */}
        </div>

        <div className="mt-12 text-center">
          <Link to="/projects">
            <Button variant="outline" rightIcon={<ArrowRight />}>
              View All Projects
            </Button>
          </Link>
        </div>
      </Section>

      {/* Call to Action */}
      <Section>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Build Something Amazing Together</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            I'm currently available for freelance work and new opportunities.
            If you have a project that needs some creative touch, let's talk!
          </p>
          <Link to="/contact">
            <Button size="lg">Get in Touch</Button>
          </Link>
        </motion.div>
      </Section>
    </>
  );
};

export default Home;
