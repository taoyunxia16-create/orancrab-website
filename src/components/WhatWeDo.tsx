import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export function WhatWeDo() {
  const services = [
    {
      title: "We Go to the Front Line",
      description: "Solve bottleneck problems with enterprise employees until the issues are resolved",
      icon: "fa-people-arrows"
    },
    {
      title: "We Think About Development Issues with Business Owners",
      description: "",
      icon: "fa-brainstorm"
    },
    {
      title: "We Also Provide Professional Financial Staff Configuration for Enterprises",
      description: "",
      icon: "fa-user-tie"
    },
    {
      title: "We Are Advisors",
      description: "Provide strategic guidance for company development planning",
      icon: "fa-chess"
    },
    {
      title: "We Are Translators",
      description: "Connect various departments to provide optimal configuration solutions",
      icon: "fa-language"
    },
    {
      title: "Switch Different Roles in Different Scenarios to Solve Different Problems",
      description: "",
      icon: "fa-masks-theater"
    }
  ];

  return (
    <section className="py-20 bg-[#F2F3F5]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-[#1D2129] mb-6"
          >
            What Do We Do for Enterprises?
          </motion.h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 flex flex-col"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-[#FFF8F1] rounded-lg flex items-center justify-center mb-4">
                <i className={`fa-solid ${service.icon} text-[#FF6B00] text-2xl`}></i>
              </div>
              <h3 className="text-lg font-semibold text-[#1D2129] mb-2 flex-grow">
                {service.title}
              </h3>
              {service.description && (
                <p className="text-gray-600">
                  {service.description}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}