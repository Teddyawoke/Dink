import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiZap, FiClock, FiShield, FiHeadphones, FiTrendingUp, FiUsers } from "react-icons/fi";

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <FiZap className="w-8 h-8" />,
      title: "Modern Tech Stack",
      description: "We use cutting-edge technologies and frameworks to ensure your application is future-proof and scalable.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: "Agile Development",
      description: "Fast, iterative development cycles with regular updates and feedback loops to ensure quality delivery.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Security First",
      description: "Built-in security measures, regular audits, and compliance with industry standards to protect your data.",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <FiHeadphones className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance to ensure your applications run smoothly.",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Scalable Solutions",
      description: "Architecture designed to grow with your business, handling increased traffic and functionality.",
      color: "from-red-400 to-red-600"
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Expert Team",
      description: "Seasoned developers, designers, and project managers with proven track records in diverse industries.",
      color: "from-indigo-400 to-indigo-600"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 tech-grid-bg opacity-5"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Why Choose <span className="gradient-text">TechForge</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions 
            that not only work perfectly but also drive real business results.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-8"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Background Card */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20 h-full">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-secondary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 tech-grid-bg opacity-10"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Proven Track Record
              </h3>
              <p className="text-xl opacity-90">
                Numbers that speak for our commitment to excellence
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "50+", label: "Projects Completed", suffix: "" },
                { number: "98", label: "Client Satisfaction", suffix: "%" },
                { number: "5", label: "Years Experience", suffix: "+" },
                { number: "24", label: "Response Time", suffix: "h" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="group"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and how we can help you achieve your goals 
            with our expert development services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-glow transition-all duration-300"
            >
              Start Your Project
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300"
            >
              Schedule Call
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;