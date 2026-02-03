import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-[#FFF8F1] to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FF6B00] opacity-5 rounded-l-full" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF9E53] opacity-5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="inline-block mb-6">
          <span className="px-4 py-2 bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-medium rounded-full">
            Professional Financial Services Since 2014
          </span>
          </motion.div>
          
           {/* Logo section removed as per user request */}
          
          <motion.h1 
            variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D2129] mb-6 leading-tight"
          >
            Finance Professionals <span className="text-[#FF6B00]">Sharing & Collaboration Platform</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
          >
            A passionate, professional financial advisory team<br/>
            Focused on financial data, standardizing financial practices, and delivering professional value
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-[#FF6B00] text-white font-medium rounded-lg hover:bg-[#E55A00] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="px-8 py-3 bg-white border border-gray-300 hover:border-[#FF6B00] text-gray-700 hover:text-[#FF6B00] font-medium rounded-lg transition-all flex items-center justify-center gap-2"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}