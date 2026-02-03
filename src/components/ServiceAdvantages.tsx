import { motion } from 'framer-motion';

// Animation variants
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

export function ServiceAdvantages() {
  const advantages = [
    {
      title: "Simplified Management",
      icon: "fa-cubes-stacked"
    },
    {
      title: "Reduced Costs",
      icon: "fa-chart-pie-simple"
    },
    {
      title: "Improved Efficiency",
      icon: "fa-chart-line"
    },
    {
      title: "Talent Motivation",
      icon: "fa-award"
    },
    {
      title: "Digital Enterprise Building",
      icon: "fa-globe"
    }
  ];

  const comparisonItems = [
    { traditional: "Chaotic Operation", smart: "Digital Operation" },
    { traditional: "On-site Management", smart: "Anytime Anywhere Management" },
    { traditional: "Passive Management", smart: "Active Execution" },
    { traditional: "Formal Performance", smart: "Smart Performance" },
    { traditional: "Complex Reports", smart: "Intelligent Reports" }
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
            Our Service Advantages
          </motion.h2>
        </motion.div>
        
        {/* Advantages Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md text-center"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-[#FFF8F1] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`fa-solid ${advantage.icon} text-[#FF6B00] text-2xl`}></i>
              </div>
              <h3 className="text-lg font-semibold text-[#1D2129]">
                {advantage.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Comparison Section */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Traditional Management */}
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-bold text-[#1D2129] mb-8 text-center md:text-right">Traditional Enterprise Management</h3>
              
              <div className="space-y-4">
                {comparisonItems.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-md text-right"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <p className="font-semibold text-[#1D2129]">{item.traditional}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* VS */}
            <div className="hidden md:block">
              <div className="text-4xl font-bold text-[#FF6B00]">VS</div>
            </div>
            
            {/* Smart Management */}
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-bold text-[#FF6B00] mb-8 text-center md:text-left">OranCrab Smart Management</h3>
              
              <div className="space-y-4">
                {comparisonItems.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-[#FFF8F1] p-4 rounded-xl shadow-md text-left"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <p className="font-semibold text-[#1D2129]">{item.smart}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}