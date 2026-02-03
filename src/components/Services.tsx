import { motion } from 'framer-motion';
import { BarChart2, DollarSign, Users, Zap } from 'lucide-react';

// Services data
const services = [
  {
    id: 1,
    title: "OranCrab Journey",
    description: "Recording every step of our growth",
    icon: <BarChart2 className="w-12 h-12 text-[#FF6B00]" />,
    features: [
      "OranCrab founded in 2014",
      "'OranCrab Plus' launched in 2018",
      "Over 1,500 contracted advisors in 2020",
      "Established multiple subsidiaries in 2022",
      "Over 5,000 contracted advisors in 2024"
    ]
  },
  {
    id: 2,
    title: "OranCrab Enterprise Services",
    description: "Financial partner for SMEs throughout their development",
    icon: <Users className="w-12 h-12 text-[#FF6B00]" />,
    features: [
      "Basic Financial Services",
      "Financial Consulting",
      "Tax Planning",
      "Financial Compliance Audit",
      "Corporate Strategic Planning"
    ]
  },
  {
    id: 3,
    title: "OranCrab Empowerment",
    description: "Internet-based financial advisor incubation platform",
    icon: <Zap className="w-12 h-12 text-[#FF6B00]" />,
    features: [
      "Financial Advisor Training",
      "Professional Skills Enhancement",
      "Industry Resource Sharing",
      "Advisor Partnership Model",
      "Career Development Planning"
    ]
  }
];

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

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    y: -5,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3
    }
  }
};

export function Services() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-medium rounded-full mb-4">
          Our Services
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D2129] mb-4">
          Comprehensive Financial Solutions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          OranCrab is dedicated to providing professional, efficient, and innovative financial services and development platforms for businesses and financial advisors
        </p>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-100"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="mb-6 p-4 bg-[#FFF8F1] inline-block rounded-xl">
              {service.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#1D2129] mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-6">
              {service.description}
            </p>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <i className="fa-solid fa-check text-[#FF6B00] mt-1 mr-2"></i>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-[#FF6B00] font-medium hover:text-[#E55A00] transition-colors"
                >
                  Learn More
                <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}