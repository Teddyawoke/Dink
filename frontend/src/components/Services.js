import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCode, FiSmartphone, FiCloud, FiPalette, FiDatabase, FiShield } from "react-icons/fi";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <FiCode className="w-12 h-12" />,
      title: "Web Development",
      description: "Full-stack web applications using React, Node.js, and modern frameworks. Responsive, fast, and scalable solutions.",
      technologies: ["React", "Node.js", "Next.js", "TypeScript"],
    },
    {
      icon: <FiSmartphone className="w-12 h-12" />,
      title: "Mobile Development", 
      description: "Native iOS and Android apps, plus cross-platform solutions with React Native. Optimized for performance and user experience.",
      technologies: ["React Native", "Swift", "Kotlin", "Flutter"],
    },
    {
      icon: <FiCloud className="w-12 h-12" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure, DevOps automation, and microservices architecture for enterprise-grade applications.",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      icon: <FiPalette className="w-12 h-12" />,
      title: "UI/UX Design",
      description: "User-centered design that converts. Beautiful interfaces backed by research and testing for optimal user experience.",
      technologies: ["Figma", "Adobe XD", "Prototyping", "User Testing"],
    },
    {
      icon: <FiDatabase className="w-12 h-12" />,
      title: "Database Solutions",
      description: "Optimized database design and management. From SQL to NoSQL, we ensure your data is secure, fast, and scalable.",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "GraphQL"],
    },
    {
      icon: <FiShield className="w-12 h-12" />,
      title: "Security & Testing",
      description: "Comprehensive security audits, penetration testing, and automated testing solutions to keep your applications secure.",
      technologies: ["Jest", "Cypress", "Security Audits", "QA"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive software development services to help your business 
            thrive in the digital landscape.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-8"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <motion.div
                className="mt-6 text-primary font-semibold flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ x: 5 }}
              >
                <span>Learn more</span>
                <span>→</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-primary p-8 rounded-2xl text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Let's discuss how we can help bring your ideas to life with our expert development services.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-3 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Get Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;