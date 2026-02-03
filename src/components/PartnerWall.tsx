import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function PartnerWall() {
  const partners = [
    'Roadmaster', 'Guoying', 'Quanchengshi', 'Growth Tech', 'Jingsheng Bio', 'Yidong Tech', 
    'Youruike', 'Wealth Crown', 'Ellipse Equation', 'Sulai Logistics', 'Vita Vino', 'Cool Drive', 
    'Kuanxin Tech', 'Jianke Medical', 'Zhongjiaoan', 'Mars Tech', 'Xunfeng', 'Juwei Imaging',
    'Gleim Solar', 'Yizhidao', 'Baiqingzhang', 'Zhongda Anchi', 'Arui Medical'
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
            Partner Wall
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-full w-32 h-32 flex items-center justify-center mx-auto shadow-lg"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FF6B00]">2000+</div>
              <div className="text-gray-600">Total Partner Companies</div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md flex items-center justify-center h-24"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="text-center">
                <div className="text-lg font-semibold text-[#1D2129]">{partner}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-600">
            We have established long-term and stable cooperative relationships with outstanding enterprises in various industries,<br />
            working together to create a better future
          </p>
        </motion.div>
      </div>
    </section>
  );
}