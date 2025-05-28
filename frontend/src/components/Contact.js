import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiClock, FiUsers } from "react-icons/fi";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '', email: '', phone: '', company: '', 
        projectType: '', budget: '', message: ''
      });
      
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email Us",
      details: "hello@techforge.com",
      subtitle: "We'll respond within 24 hours",
      action: "mailto:hello@techforge.com"
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subtitle: "Mon-Fri 9AM-6PM EST",
      action: "tel:+15551234567"
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "123 Tech Street, San Francisco, CA",
      subtitle: "Schedule a meeting",
      action: "#"
    }
  ];

  const projectTypes = [
    "Web Application", "Mobile App", "E-commerce", "SaaS Platform", 
    "Enterprise Software", "API Development", "Other"
  ];

  const budgetRanges = [
    "$10K - $25K", "$25K - $50K", "$50K - $100K", "$100K+", "Let's discuss"
  ];

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 tech-grid-bg opacity-5"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Start Your <span className="gradient-text">Project Today</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with our team 
            and let's discuss how we can help build your next digital solution.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  Get in Touch
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We'd love to hear about your project. Send us a message and 
                  we'll respond as soon as possible.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.action}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="block bg-gray-50 hover:bg-primary/5 p-6 rounded-2xl transition-all duration-300 border border-transparent hover:border-primary/20"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-primary bg-white p-3 rounded-xl shadow-md">
                        {contact.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary mb-1">
                          {contact.title}
                        </h4>
                        <p className="text-primary font-medium">
                          {contact.details}
                        </p>
                        <p className="text-sm text-gray-500">
                          {contact.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gradient-primary p-6 rounded-2xl text-white"
              >
                <h4 className="font-bold text-lg mb-4">Why Choose Us?</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <FiClock className="w-5 h-5" />
                    <span>24-hour response time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiUsers className="w-5 h-5" />
                    <span>Expert team of 25+ developers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiCheck className="w-5 h-5" />
                    <span>100% client satisfaction rate</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-50 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 tech-grid-bg opacity-10"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-secondary mb-6">
                  Request a Quote
                </h3>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl mb-6 flex items-center space-x-2"
                  >
                    <FiCheck className="w-5 h-5" />
                    <span>Thank you! We'll get back to you within 24 hours.</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                      placeholder="Tell us about your project, goals, and requirements..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-300 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-primary hover:shadow-glow'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;