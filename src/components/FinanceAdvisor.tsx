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

export function FinanceAdvisor() {
  const painPoints = [
    {
      title: "Low Entry Barrier",
      description: "Anyone can work in finance"
    },
    {
      title: "Intense Competition",
      description: "Finance market has more supply than demand"
    },
    {
      title: "Limited Development",
      description: "Practitioners have weak quality, focus on specialization but not breadth, internal but not external focus"
    },
    {
      title: "Can Do But Not Explain",
      description: "Finance professionals often only focus on reports when communicating with bosses"
    }
  ];

  const benefits = [
    {
      title: "Knowledge Q&A",
      items: ["Life & Career", "Industry Discussion", "Policy Interpretation"],
      icon: "fa-question-circle"
    },
    {
      title: "Special Events",
      items: ["Online Analysis", "Industry Salons", "Online-Offline Linkage", "Advisor Training Series", "Personal IP Building"],
      icon: "fa-calendar-check"
    },
    {
      title: "Financial Professionals Training Ground",
      items: ["Joint Learning", "Multi-terminal Courses", "Apply to Be a Lecturer", "Professional Series Courses"],
      icon: "fa-graduation-cap"
    },
    {
      title: "Professional Value Monetization",
      items: ["Sales-oriented Financial Advisor", "Cycle-based Financial Services", "Project-based Financial Services", "Job Recruitment"],
      icon: "fa-hand-holding-dollar"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-[#F2F3F5]">
      {/* 橙蟹赋能介绍 */}
      <section className="py-20">
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
                Financial Advisor Empowerment
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-[#1D2129] mb-4"
            >
              OranCrab Empowerment
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600"
            >
              Internet-based Financial Advisor Incubation Base
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* 财务人痛点 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-[#1D2129] mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
          Financial Professionals - Pain Points
          </motion.h2>
          
          <motion.div 
            className="max-w-4xl mx-auto relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#FFF8F1] rounded-full z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-32 h-32 bg-[#FF6B00]/10 rounded-full flex items-center justify-center mb-10">
                <i className="fa-solid fa-user-tie text-[#FF6B00] text-4xl"></i>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {painPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="text-xl font-semibold text-[#FF6B00] mb-2">{point.title}</h3>
                    <p className="text-gray-600">{point.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* 成为橙蟹财务顾问 */}
      <section className="py-20 bg-gradient-to-r from-[#FF6B00] to-[#FF9E53] text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Become an OranCrab Financial Advisor</h2>
            
            <div className="relative h-64 mb-8">
              {/* 隧道效果 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#FF6B00]/30 animate-pulse"></div>
                <div className="absolute w-4/5 h-4/5 rounded-full bg-[#FF6B00]/40 animate-pulse delay-75"></div>
                <div className="absolute w-2/3 h-2/3 rounded-full bg-[#FF6B00]/50 animate-pulse delay-100"></div>
                <div className="absolute w-1/2 h-1/2 rounded-full bg-[#FF6B00]/60 animate-pulse delay-150"></div>
              </div>
              
              {/* 奔跑的人 */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-8 h-16"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <i className="fa-solid fa-person-running text-2xl"></i>
                  </motion.div>
                ))}
              </div>
              
              {/* 文字标签 */}
              <motion.div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 font-medium"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Career Promotion
              </motion.div>
              
              <motion.div className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2 font-medium"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
              Lifelong Learning
              </motion.div>
              
              <motion.div className="absolute bottom-1/4 left-0 transform -translate-x-1/2 translate-y-1/2 font-medium"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
              Sales Skills
              </motion.div>
              
              <motion.div className="absolute bottom-0 right-1/4 transform translate-x-1/2 translate-y-1/2 font-medium"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
              Self-Improvement
              </motion.div>
            </div>
            
            <motion.h3 
              className="text-2xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
          Break Through Career Barriers
            </motion.h3>
          </motion.div>
        </div>
      </section>
      
      {/* 橙蟹可以为财务人做什么 */}
      <section className="py-20 bg-[#F2F3F5]">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#1D2129] mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
          What Can OranCrab Do for Financial Professionals
          </motion.h2>
          
          <motion.div 
            className="max-w-5xl mx-auto relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FF6B00]/10 rounded-full z-0"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col items-center mb-16">
                <div className="w-32 h-32 bg-[#FF6B00] rounded-full flex items-center justify-center mb-4">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold">OranCrab</div>
                    <div className="text-sm">Empowerment</div>
                  </div>
                </div>
                <div className="text-xl font-semibold text-[#1D2129]">Comprehensive Improvement</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-[#FFF8F1] rounded-lg flex items-center justify-center mb-4">
                      <i className={`fa-solid ${benefit.icon} text-[#FF6B00] text-xl`}></i>
                    </div>
                    <h3 className="text-lg font-semibold text-[#1D2129] mb-4">
                      {benefit.title}
                    </h3>
                    <ul className="space-y-2">
                      {benefit.items.map((item, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start">
                          <i className="fa-solid fa-check text-[#FF6B00] mt-1 mr-2"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}