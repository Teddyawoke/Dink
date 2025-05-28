import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCode, FiZap } from "react-icons/fi";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/30535624/pexels-photo-30535624.jpeg"
          alt="Modern coding workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent"></div>
        <div className="absolute inset-0 tech-grid-bg opacity-30"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-primary opacity-30">
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiCode size={40} />
        </motion.div>
      </div>
      
      <div className="absolute top-40 right-20 text-primary opacity-30">
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiZap size={35} />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
          >
            Build Tomorrow's
            <span className="block gradient-text">Software Today</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            We create scalable, innovative digital solutions that drive business growth 
            with cutting-edge technology and expert craftsmanship.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(113, 158, 63, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-2 shadow-2xl hover:shadow-glow transition-all duration-300"
            >
              <span>Start Your Project</span>
              <FiArrowRight />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-morphism text-white px-8 py-4 rounded-xl font-semibold text-lg border border-white/30 hover:border-primary/50 transition-all duration-300"
            >
              View Our Work
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center space-x-8 text-white/80 pt-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm">Projects Delivered</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;