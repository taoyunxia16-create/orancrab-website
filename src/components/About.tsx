import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

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

export function About() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-medium rounded-full mb-4">
              OranCrab Journey
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-[#1D2129] mb-6"
          >
            Recording Every Step of Our Growth
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 mb-6"
          >
            Founded in 2014, OranCrab is a professional financial advisory team dedicated to providing specialized financial services for small and medium-sized enterprises. Our goal is to be a financial partner throughout a company's development, helping businesses achieve sustainable growth through standardized financial practices and digital service models.
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 mb-8"
          >
            Over the past decade, we have grown alongside many enterprises, evolving from basic financial services to today's digital financial sharing and collaboration platform. OranCrab has always maintained an innovative spirit, continuously enhancing our service capabilities to create greater value for our clients.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            variants={containerVariants}
          >
            <motion.div className="flex items-start" variants={itemVariants}>
              <CheckCircle className="w-5 h-5 text-[#FF6B00] mt-1 mr-2 flex-shrink-0" />
              <p className="text-gray-700">5000+ Contracted Advisors</p>
            </motion.div>
            
            <motion.div className="flex items-start" variants={itemVariants}>
              <CheckCircle className="w-5 h-5 text-[#FF6B00] mt-1 mr-2 flex-shrink-0" />
              <p className="text-gray-700">2000+ Clients Served</p>
            </motion.div>
            
            <motion.div className="flex items-start" variants={itemVariants}>
              <CheckCircle className="w-5 h-5 text-[#FF6B00] mt-1 mr-2 flex-shrink-0" />
              <p className="text-gray-700">Multi-City Presence</p>
            </motion.div>
            
            <motion.div className="flex items-start" variants={itemVariants}>
              <CheckCircle className="w-5 h-5 text-[#FF6B00] mt-1 mr-2 flex-shrink-0" />
              <p className="text-gray-700">Digital Service Platform</p>
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <a 
              href="#services" 
              className="inline-block px-6 py-3 bg-[#FF6B00] hover:bg-[#E55A00] text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg"
            >
                  Learn Our Story
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://lf-code-agent.coze.cn/obj/x-ai-cn/293846907906/attachment/image_20260203113109.png" 
              alt="OranCrab Brand Image" 
              className="w-full h-auto"
            />
          </div>
          
          {/* Stats card */}
          <motion.div 
            className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex items-center gap-4">
              <div className="bg-[#FF6B00]/10 p-3 rounded-lg">
                <i className="fa-solid fa-calendar-check text-[#FF6B00] text-xl"></i>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#1D2129]">10+</h4>
                <p className="text-gray-600">Years of Professional Experience</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Development Timeline */}
      <motion.div 
        className="mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
          <h3 className="text-2xl font-bold text-center text-[#1D2129] mb-12">Growing Together</h3>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#FFD1A7]"></div>
          
          {/* Timeline items */}
          <div className="space-y-16">
            {[
              { year: '2014', title: 'OranCrab Founded', description: 'Laying the foundation, developing 5 financial service products' },
              { year: '2015-2017', title: 'Strategic Deployment', description: 'Building OranCrab Financial Advisor Partnership Platform' },
              { year: '2018', title: 'Ecosystem Layout', description: 'Launching "OranCrab Plus" mini-program' },
              { year: '2019', title: 'Continuous Empowerment', description: 'Over 300 contracted advisors, comprehensive advisor transformation' },
              { year: '2020', title: 'Expanding to Multiple Markets', description: 'Over 1,500 contracted advisors, serving over 2,000 clients' },
              { year: '2021', title: 'Digital Transformation', description: 'Integration of three major platform systems, continuous service model innovation' },
              { year: '2022', title: 'Deepening and Empowering', description: 'Establishing Xiangyang, Chongqing subsidiaries and vertical asset management subsidiary' },
              { year: '2023', title: 'Steady Development', description: 'Over 3,800 contracted advisors, "OranCrab AI" mini-program launched' },
              { year: '2024', title: 'Self-Revolution and Organizational Adjustment', description: 'Establishing OranCrab Audit and Cycle System subsidiaries, over 5,000 contracted advisors' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <h4 className="text-xl font-bold text-[#FF6B00] mb-2">{item.year}</h4>
                  <h5 className="text-lg font-semibold text-[#1D2129] mb-2">{item.title}</h5>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#FF6B00] border-4 border-white"></div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}