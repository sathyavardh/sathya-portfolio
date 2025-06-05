import { motion } from 'framer-motion';
import { Download, Github, Mail } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import MyProfile from '../images/profilePic.jpg';
import MyResume from '../assets/Sathyavardhank_FullStack_Resume.pdf'; // Ensure this path is correct

const About = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = MyResume;
    link.setAttribute('download', 'Sathyavardhan_K_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className="pt-20">
      <Section
        title="About Me"
        subtitle="Get to know more about me and my background"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <img
                src={MyProfile}
                alt="About Me"
                className="rounded-2xl shadow-lg w-full h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Hi, I'm Sathyavardhan K
            </h3>
            <div className="mb-6 space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I'm a dedicated frontend developer with 1 year of experience in building responsive and user-friendly web applications using React, TypeScript, and modern web technologies.
              </p>
              <p>
                My journey in web development began during college, where I started experimenting with HTML and CSS. This curiosity evolved into a strong passion, leading me into the professional world of frontend development.
              </p>
              <p>
                I focus on crafting clean, accessible, and high-performance user interfaces, and I enjoy learning and applying new tools and frameworks to improve both user experience and code quality.
              </p>
              <p>
                Outside of coding, I enjoy exploring new tech trends, reading dev blogs, and working on side projects to expand my skills.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button onClick={handleDownload} rightIcon={<Download size={16} />}>
                Download Resume
              </Button>
              <Button
                variant="outline"
                rightIcon={<Github size={16} />}
                onClick={() => window.open('https://github.com/sathyavardh', '_blank')}
              >
                Github Profile
              </Button>
              <Button
                variant="outline"
                rightIcon={<Mail size={16} />}
                onClick={() => (window.location.href = 'mailto:ksathyavardhanec@gmail.com')}
              >
                Contact Me
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section
        title="My Journey"
        subtitle="A timeline of my professional experience and education"
        className="bg-gray-50 dark:bg-gray-900/50"
      >
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 h-full w-1 bg-primary-500 transform -translate-x-1/2"></div>
            <div className="space-y-16">
              {/* Work Experience */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative grid md:grid-cols-2 gap-6"
              >
                <div className="md:text-right md:pr-10">
                  <div className="hidden md:block absolute right-0 top-1 w-4 h-4 rounded-full bg-primary-500 translate-x-2"></div>
                  <h3 className="text-xl font-bold">Associate Full-Stack Developer</h3>
                  <p className="text-primary-600 dark:text-primary-400">July 2024 – May 2025</p>
                  <p className="text-gray-600 dark:text-gray-400">GWC Data.ai</p>
                </div>
                <div className="md:pl-10">
                  <div className="md:hidden absolute left-0 top-1 w-4 h-4 rounded-full bg-primary-500 -translate-x-2"></div>
                  <ul className="text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-2">
                    <li>Developed a Learning Management System (LMS) with React.js and Sequelize for scheduling and role-based access.</li>
                    <li>Implemented multi-role (admin/trainee) authentication and a trainee dashboard with React Big Calendar.</li>
                    <li>Built hierarchical tree visualizations in D3.js integrated with Snowflake datasets for governance workflows.</li>
                    <li>Created a template-based data processor with DOMO enabling dynamic CRUD operations.</li>
                    <li>Integrated DOMO APIs and Agentic Domo AI for Snowflake-compatible stored procedure migration.</li>
                  </ul>
                </div>
              </motion.div>

              {/* Education - Kongu Engineering College */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative grid md:grid-cols-2 gap-4 md:gap-8"
              >
                <div className="md:text-right md:pr-8">
                  <div className="hidden md:block absolute right-0 top-0 w-3 h-3 rounded-full bg-primary-500 transform translate-x-1.5"></div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">B.E. in Electronics and Communication Engineering</h3>
                  <p className="text-primary-600 dark:text-primary-400">2020 - 2024</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">Kongu Engineering College, Perundurai, Erode</p>
                </div>
                <div className="md:pl-8">
                  <div className="md:hidden absolute left-0 top-0 w-3 h-3 rounded-full bg-primary-500 transform -translate-x-1.5"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Graduated with a CGPA of 8.48. Developed strong foundations in software development and embedded systems, contributing to both academic and self-initiated projects in web development.
                  </p>
                </div>
              </motion.div>

              {/* Education - HSC */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative grid md:grid-cols-2 gap-4 md:gap-8"
              >
                <div className="md:text-right md:pr-8">
                  <div className="hidden md:block absolute right-0 top-0 w-3 h-3 rounded-full bg-primary-500 transform translate-x-1.5"></div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Higher Secondary Education (Class 12)</h3>
                  <p className="text-primary-600 dark:text-primary-400">Completed: March 2020</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">Erode Hindu Kalvi Nilayam MHSS</p>
                </div>
                <div className="md:pl-8">
                  <div className="md:hidden absolute left-0 top-0 w-3 h-3 rounded-full bg-primary-500 transform -translate-x-1.5"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Completed Class 12 under the TamilNadu State Board with a 66.17% score in science stream.
                  </p>
                </div>
              </motion.div>

              {/* Education - SSLC */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative grid md:grid-cols-2 gap-4 md:gap-8"
              >
                <div className="md:text-right md:pr-8">
                  <div className="hidden md:block absolute right-0 top-0 w-3 h-3 rounded-full bg-primary-500 transform translate-x-1.5"></div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Secondary School Education (Class 10)</h3>
                  <p className="text-primary-600 dark:text-primary-400">Completed: March 2018</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">Erode Hindu Kalvi Nilayam MHSS</p>
                </div>
                <div className="md:pl-8">
                  <div className="md:hidden absolute left-0 top-0 w-3 h-3 rounded-full bg-primary-500 transform -translate-x-1.5"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Completed SSLC under the TamilNadu State Board with an overall percentage of 87.0%.
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;