import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiUsers, FiTrendingUp, FiAward } from "react-icons/fi";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: <FiUsers className="w-8 h-8" />,
      number: "25+",
      label: "Expert Developers",
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      number: "200%",
      label: "Average ROI for Clients",
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      number: "15+",
      label: "Industry Awards",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-grid-bg opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Crafting Digital Excellence
            <span className="block gradient-text">Since 2019</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-secondary mb-6">
              Innovative Solutions for Modern Businesses
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              At Dink Integrated, we transform ideas into powerful digital experiences. 
              Our team of expert developers and designers work collaboratively to create 
              scalable, secure, and innovative software solutions that drive business growth.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              From startups to enterprise-level corporations, we've helped companies 
              across various industries leverage technology to achieve their goals. 
              Our agile approach ensures rapid delivery without compromising on quality.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-primary mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-secondary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1629363447922-1f421b470828"
                alt="Modern development workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-primary"
            >
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-gray-600 text-sm">Uptime Guarantee</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;