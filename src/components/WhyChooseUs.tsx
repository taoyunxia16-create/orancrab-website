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

export function WhyChooseUs() {
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
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-[#1D2129] mb-6"
          >
            Why Choose Us?
          </motion.h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="order-2 lg:order-1"
          >
            <motion.div 
              className="relative bg-[#FFF8F1] p-10 rounded-2xl"
              variants={itemVariants}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#FF6B00]/10 rounded-full z-0"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col items-center">
                  <h3 className="text-2xl font-bold text-[#FF6B00] mb-8 text-center">OranCrab Advisor Team</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                        <i className="fa-solid fa-users text-[#FF6B00] text-2xl"></i>
                      </div>
                      <h4 className="font-semibold text-[#1D2129] mb-2">Abundant Advisor Resources</h4>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                        <i className="fa-solid fa-briefcase text-[#FF6B00] text-2xl"></i>
                      </div>
                      <h4 className="font-semibold text-[#1D2129] mb-2">Strong Practical Experience</h4>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                        <i className="fa-solid fa-link text-[#FF6B00] text-2xl"></i>
                      </div>
                      <h4 className="font-semibold text-[#1D2129] mb-2">Wide Industry Connections</h4>
                    </div>
                  </div>
                </div>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-center text-gray-600 mt-8"
                >
                  Unique insights into various financial needs during the growth of small, medium, and micro enterprises<br />
                  Can effectively solve problems at all stages of the growth of small, medium, and micro enterprises
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-2xl font-bold text-[#1D2129] mb-8">Small, Medium and Micro Enterprises</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#FFF8F1] rounded-lg flex items-center justify-center mb-4">
                  <i className="fa-solid fa-file-invoice-dollar text-[#FF6B00] text-xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-[#1D2129] mb-2">Irregular Finance</h4>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#FFF8F1] rounded-lg flex items-center justify-center mb-4">
                  <i className="fa-solid fa-coins text-[#FF6B00] text-xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-[#1D2129] mb-2">High Operating Costs</h4>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#FFF8F1] rounded-lg flex items-center justify-center mb-4">
                  <i className="fa-solid fa-hand-holding-usd text-[#FF6B00] text-xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-[#1D2129] mb-2">Difficult and Expensive Financing</h4>
              </div>
            </div>
            
            <motion.p 
              className="text-gray-600 mt-8 text-center text-lg font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Have become the pain points and difficulties for enterprise development
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}