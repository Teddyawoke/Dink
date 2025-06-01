import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web Apps", "Mobile Apps", "Construction", "Interior Design"];

  const projects = [
    {
      id: 1,
      title: "EcoCommerce Platform",
      description: "Full-stack e-commerce platform with AI-powered recommendations and sustainable product focus.",
      image: "https://images.pexels.com/photos/9784250/pexels-photo-9784250.jpeg",
      category: "E-commerce",
      technologies: ["React", "Node.js", "MongoDB", "AI/ML"],
      metrics: { users: "50K+", conversion: "+35%", performance: "98%" },
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "FinTech Dashboard",
      description: "Real-time financial analytics dashboard with advanced charting and portfolio management.",
      image: "https://images.pexels.com/photos/9784247/pexels-photo-9784247.jpeg",
      category: "SaaS",
      technologies: ["React", "TypeScript", "D3.js", "WebSocket"],
      metrics: { users: "25K+", performance: "99.9%", retention: "+60%" },
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Healthcare Mobile App",
      description: "Cross-platform mobile app for telemedicine with video calls and health tracking.",
      image: "https://images.unsplash.com/photo-1654648662275-dfb19ec8d4a0",
      category: "Mobile Apps",
      technologies: ["React Native", "Firebase", "WebRTC", "ML Kit"],
      metrics: { downloads: "100K+", rating: "4.8★", engagement: "+80%" },
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Smart City Platform",
      description: "IoT-enabled city management system with real-time monitoring and analytics.",
      image: "https://images.pexels.com/photos/9784235/pexels-photo-9784235.jpeg",
      category: "Web Apps",
      technologies: ["Next.js", "IoT", "AWS", "GraphQL"],
      metrics: { cities: "15+", efficiency: "+40%", cost: "-30%" },
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "AI Learning Platform",
      description: "Educational platform with AI-powered personalized learning paths and progress tracking.",
      image: "https://images.pexels.com/photos/9784242/pexels-photo-9784242.jpeg",
      category: "SaaS",
      technologies: ["Vue.js", "Python", "TensorFlow", "PostgreSQL"],
      metrics: { students: "75K+", completion: "+55%", satisfaction: "95%" },
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Restaurant Chain App",
      description: "Multi-location restaurant management app with ordering, inventory, and analytics.",
      image: "https://images.pexels.com/photos/9783832/pexels-photo-9783832.jpeg",
      category: "Mobile Apps",
      technologies: ["Flutter", "Firebase", "Stripe", "Analytics"],
      metrics: { locations: "200+", orders: "1M+", revenue: "+45%" },
      link: "#",
      github: "#"
    },
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our latest work and the results we've achieved for our clients 
            across various industries and technologies.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-8"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-primary text-white shadow-lg"
                  : "bg-white text-gray-600 hover:text-primary hover:shadow-md"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.1 }}
                      className="bg-white/90 p-2 rounded-full text-primary hover:bg-white transition-colors"
                    >
                      <FiExternalLink size={16} />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      className="bg-white/90 p-2 rounded-full text-primary hover:bg-white transition-colors"
                    >
                      <FiGithub size={16} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-sm font-bold text-primary">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Learn More */}
                  <motion.div
                    className="flex items-center space-x-2 text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300"
                  >
                    <span>View Details</span>
                    <FiArrowRight />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-glow transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;