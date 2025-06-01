import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Partners = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Technology partners and platforms we work with
  const partners = [
    {
      name: "Company 1",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      category: "Cloud Platform"
    },
    {
      name: "Company 2",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
      category: "Cloud Platform"
    },
    {
      name: "Company 3",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      category: "Frontend Framework"
    },
    {
      name: "Company 4",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      category: "Backend Runtime"
    },
    {
      name: "Company 5",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
      category: "Database"
    },
    {
      name: "Company 6",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
      category: "Containerization"
    },
    {
      name: "Company 7",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
      category: "Orchestration"
    },
    {
      name: "Company 8",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
      category: "Database"
    }
  ];

  // Client companies (using generic company representation)
  const clients = [
    "TechStart Inc", "Global Solutions", "InnovateCorp", 
    "FutureScale", "DataDriven Co", "CloudFirst"
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 tech-grid-bg opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Technology <span className="gradient-text">Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with industry-leading technologies and platforms to deliver 
            cutting-edge solutions that scale with your business needs.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-8"></div>
        </motion.div>

        {/* Technology Partners Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
            >
              <div className="text-center">
                <div className="h-16 flex items-center justify-center mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="font-semibold text-secondary group-hover:text-primary transition-colors duration-300">
                  {partner.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {partner.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-8">
            Trusted by Growing Companies
          </h3>
          
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  {/* Placeholder logo using company initials */}
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-2">
                    {client.split(' ').map(word => word[0]).join('')}
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    {client}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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
                Partnership Success
              </h3>
              <p className="text-xl opacity-90">
                Building strong relationships through reliable technology solutions
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "25+", label: "Technology Partners" },
                { number: "100+", label: "Integrations Built" },
                { number: "99.9%", label: "Platform Uptime" },
                { number: "50+", label: "Happy Clients" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="group"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
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
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
            Ready to Leverage These Technologies?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can use our technology partnerships to build 
            the perfect solution for your business needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-glow transition-all duration-300"
          >
            Discuss Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;