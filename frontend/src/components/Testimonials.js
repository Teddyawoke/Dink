import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiStar, FiChevronLeft, FiChevronRight, FiMessageCircle } from "react-icons/fi";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, EcoTech Solutions",
      company: "EcoTech Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote: "TechForge Digital transformed our vision into a powerful e-commerce platform that exceeded all expectations. Their attention to detail and technical expertise is unmatched.",
      project: "E-commerce Platform",
      results: "300% increase in online sales"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO, FinanceFlow",
      company: "FinanceFlow",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote: "The team delivered a complex financial dashboard ahead of schedule. Their agile approach and constant communication made the entire process seamless.",
      project: "Financial Dashboard",
      results: "50% faster data processing"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Founder, HealthTech Pro",
      company: "HealthTech Pro",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote: "Our telemedicine app has revolutionized patient care thanks to TechForge's innovative solutions. The user experience is incredibly smooth and intuitive.",
      project: "Mobile Healthcare App",
      results: "40% improvement in patient satisfaction"
    },
    {
      id: 4,
      name: "David Kim",
      position: "Product Manager, SmartCity",
      company: "SmartCity Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote: "The IoT platform they built handles millions of data points flawlessly. Their scalable architecture has been crucial for our city-wide deployment.",
      project: "IoT City Platform",
      results: "99.9% uptime across 15 cities"
    },
    {
      id: 5,
      name: "Jennifer Walsh",
      position: "VP of Technology, EduLearn",
      company: "EduLearn",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote: "Their AI-powered learning platform has transformed how our students engage with content. The personalized learning paths are incredibly effective.",
      project: "AI Learning Platform",
      results: "55% increase in course completion"
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FiStar
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 tech-grid-bg opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Client <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about 
            working with TechForge Digital and the results we've achieved together.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-8"></div>
        </motion.div>

        {/* Main Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-primary/20">
                <FiQuote size={40} />
              </div>

              {/* Content */}
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Client Info */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-primary/20"
                  />
                  <div className="text-center md:text-left">
                    <div className="font-bold text-xl text-secondary">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-primary font-medium">
                      {testimonials[currentIndex].position}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>

                {/* Project Results */}
                <div className="mt-8 p-4 bg-primary/5 rounded-xl">
                  <div className="grid md:grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-sm text-gray-600 font-medium">Project</div>
                      <div className="text-primary font-bold">
                        {testimonials[currentIndex].project}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 font-medium">Results</div>
                      <div className="text-primary font-bold">
                        {testimonials[currentIndex].results}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-primary hover:bg-primary hover:text-white z-10"
          >
            <FiChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-primary hover:bg-primary hover:text-white z-10"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-primary w-8" 
                  : "bg-gray-300 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>

        {/* Small Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="font-semibold text-secondary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.company}
                  </div>
                </div>
              </div>
              <div className="flex mb-3">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                "{testimonial.quote.slice(0, 120)}..."
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;