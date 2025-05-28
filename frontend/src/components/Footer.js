import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: "Web Development", href: "#services" },
      { name: "Mobile Apps", href: "#services" },
      { name: "Cloud Solutions", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "Consulting", href: "#contact" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "#team" },
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#projects" }
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Support Center", href: "#contact" },
      { name: "Community", href: "#" },
      { name: "Downloads", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
      { name: "Disclaimer", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: <FiGithub size={20} />, href: "https://github.com", name: "GitHub" },
    { icon: <FiLinkedin size={20} />, href: "https://linkedin.com", name: "LinkedIn" },
    { icon: <FiTwitter size={20} />, href: "https://twitter.com", name: "Twitter" },
    { icon: <FiInstagram size={20} />, href: "https://instagram.com", name: "Instagram" }
  ];

  const contactInfo = [
    { icon: <FiMail size={16} />, text: "hello@techforge.com", href: "mailto:hello@techforge.com" },
    { icon: <FiPhone size={16} />, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: <FiMapPin size={16} />, text: "123 Tech Street, San Francisco, CA", href: "#" }
  ];

  return (
    <footer className="bg-secondary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-grid-bg opacity-10"></div>
      
      {/* Pre-footer CTA */}
      <div className="relative z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's turn your vision into reality with our expert development team.
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
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">T</span>
                  </div>
                  <span className="text-2xl font-bold">TechForge Digital</span>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                  We craft innovative digital solutions that empower businesses to thrive 
                  in the modern world. From web applications to mobile apps, we build 
                  with passion and precision.
                </p>

                {/* Contact Info */}
                <div className="space-y-3 mb-8">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.href}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors duration-200"
                    >
                      <span className="text-primary">{contact.icon}</span>
                      <span className="text-sm">{contact.text}</span>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="bg-white/10 p-3 rounded-xl text-gray-300 hover:text-white hover:bg-primary transition-all duration-300"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-3 grid md:grid-cols-4 gap-8">
              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4 text-primary">Services</h3>
                <ul className="space-y-2">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Company */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4 text-primary">Company</h3>
                <ul className="space-y-2">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Resources */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4 text-primary">Resources</h3>
                <ul className="space-y-2">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Legal */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4 text-primary">Legal</h3>
                <ul className="space-y-2">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm mb-4 md:mb-0"
              >
                © {new Date().getFullYear()} TechForge Digital. All rights reserved.
              </motion.p>
              
              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary/20 hover:bg-primary p-3 rounded-xl text-primary hover:text-white transition-all duration-300 flex items-center space-x-2"
              >
                <FiArrowUp size={16} />
                <span className="text-sm font-medium">Back to Top</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;