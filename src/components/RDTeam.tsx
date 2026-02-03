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

export function RDTeam() {
  const systems = [
    {
      title: "Client Growth System",
      subtitle: "client increasing system (CIS)",
      description: "Helps businesses maintain deep customer relationships, achieve zero customer churn accumulation, complete potential customer mining, sales tracking, and after-sales service to make customer acquisition more precise.",
      icon: "fa-line-chart"
    },
    {
      title: "Delivery Empowerment System",
      subtitle: "fulfillment empowering system (FES)",
      description: "Six management modules on the management side; three core functions on the client side. Real-time grasp of service progress, access historical financial data and financial statements anytime, anywhere.",
      icon: "fa-server"
    },
    {
      title: "Advisor Development System",
      subtitle: "advisor developing system (ADS)",
      description: "Connects financial professionals nationwide, collaborates with brokers and leaders to develop empowered advisors together; through IP building and project practice, promotes the layout of national partners.",
      icon: "fa-users"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-medium rounded-full mb-4">
              Technological Innovation
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-[#1D2129] mb-4"
          >
            Independent R&D Capabilities
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 mb-6"
          >
            Creating Visual Management Cockpit
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {systems.map((system, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all border border-gray-100"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-[#FFF8F1] rounded-full flex items-center justify-center mb-6">
                <i className={`fa-solid ${system.icon} text-[#FF6B00] text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-[#1D2129] mb-2">
                {system.title}
              </h3>
              <h4 className="text-sm text-[#FF6B00] mb-4">
                {system.subtitle}
              </h4>
              <p className="text-gray-600">
                {system.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="bg-[#FFF8F1] rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-[#1D2129] mb-6">Technology-Driven, Smart Finance</h3>
            <p className="text-gray-600 mb-8">
              Relying on strong R&D capabilities, OranCrab creates a series of digital tools and platforms to help enterprises achieve financial intelligence and management visualization, providing solid technical support for enterprise development.
            </p>
            <motion.a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-[#FF6B00] hover:bg-[#E55A00] text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn About Technical Solutions
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}