import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiLinkedin, FiTwitter, FiGithub, FiMail } from "react-icons/fi";

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      id: 1,
      name: "Alex Thompson",
      position: "CEO & Full-Stack Developer",
      bio: "10+ years of experience in software architecture and team leadership. Passionate about building scalable solutions.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      skills: ["React", "Node.js", "AWS", "Leadership"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "alex@techforge.com"
      }
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      position: "Lead UI/UX Designer",
      bio: "Creative designer with expertise in user research and interface design. Focused on creating intuitive user experiences.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "sarah@techforge.com"
      }
    },
    {
      id: 3,
      name: "Marcus Johnson",
      position: "DevOps Engineer",
      bio: "Infrastructure specialist with deep knowledge of cloud platforms and automation. Ensures reliable and scalable deployments.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "marcus@techforge.com"
      }
    },
    {
      id: 4,
      name: "Lisa Chen",
      position: "Mobile App Developer",
      bio: "Expert in native and cross-platform mobile development. Creates high-performance apps for iOS and Android.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      skills: ["React Native", "Swift", "Kotlin", "Flutter"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "lisa@techforge.com"
      }
    },
    {
      id: 5,
      name: "David Rodriguez",
      position: "Backend Developer",
      bio: "Specialized in building robust APIs and database systems. Focused on performance optimization and security.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      skills: ["Python", "PostgreSQL", "GraphQL", "Microservices"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "david@techforge.com"
      }
    }
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
    <section id="team" className="py-20 bg-white relative overflow-hidden">
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
            Meet Our <span className="gradient-text">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of passionate developers, designers, and engineers work 
            together to bring your vision to life with cutting-edge technology.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-8"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20 text-center"
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              {/* Info */}
              <h3 className="text-2xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors duration-300">
                {member.name}
              </h3>
              
              <p className="text-primary font-semibold mb-4">
                {member.position}
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {member.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <motion.a
                  href={member.social.linkedin}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  <FiLinkedin size={20} />
                </motion.a>
                <motion.a
                  href={member.social.twitter}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  <FiTwitter size={20} />
                </motion.a>
                <motion.a
                  href={member.social.github}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  <FiGithub size={20} />
                </motion.a>
                <motion.a
                  href={`mailto:${member.social.email}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  <FiMail size={20} />
                </motion.a>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-secondary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 tech-grid-bg opacity-10"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Want to Join Our Team?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                We're always looking for talented developers, designers, and innovators 
                who share our passion for creating amazing digital experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-secondary px-8 py-3 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
                >
                  View Open Positions
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-white hover:text-secondary transition-all duration-300"
                >
                  Send Your Resume
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;