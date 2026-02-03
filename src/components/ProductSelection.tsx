import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8
    }
  }
};

export function ProductSelection() {
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
            className="text-3xl md:text-4xl font-bold text-[#1D2129] mb-6"
          >
            Which Product is Right for Your Business? What Stage Are You In? How to Choose?
          </motion.h2>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-[#FFF8F1] rounded-2xl p-8 relative overflow-hidden">
            {/* Company Size Axis */}
            <div className="flex items-center mb-12">
              <div className="w-1/6 text-right pr-4">
                <div className="text-lg font-semibold text-[#1D2129]">Company Size (Number of Employees)</div>
              </div>
              <div className="w-5/6 relative">
                <div className="h-1 bg-gradient-to-r from-[#FF9E53] to-[#FF6B00] rounded-full"></div>
                
                {/* Size Nodes */}
                <div className="absolute top-0 left-0 transform -translate-y-1/2">
                  <div className="w-5 h-5 bg-[#FF6B00] rounded-full border-2 border-white"></div>
                  <div className="text-center mt-2 font-medium text-[#1D2129]">0~10</div>
                </div>
                
                <div className="absolute top-0 left-[25%] transform -translate-y-1/2 -translate-x-1/2">
                  <div className="w-5 h-5 bg-[#FF6B00] rounded-full border-2 border-white"></div>
                  <div className="text-center mt-2 font-medium text-[#1D2129]">10~30</div>
                </div>
                
                <div className="absolute top-0 left-[50%] transform -translate-y-1/2 -translate-x-1/2">
                  <div className="w-5 h-5 bg-[#FF6B00] rounded-full border-2 border-white"></div>
                  <div className="text-center mt-2 font-medium text-[#1D2129]">30~80</div>
                </div>
                
                <div className="absolute top-0 right-0 transform -translate-y-1/2">
                  <div className="w-5 h-5 bg-[#FF6B00] rounded-full border-2 border-white"></div>
                  <div className="text-center mt-2 font-medium text-[#1D2129]">80+</div>
                </div>
              </div>
            </div>
            
            {/* Product Selection Area */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-[#1D2129] mb-6">Cycle-based Services</h3>
              
              <div className="grid grid-cols-5 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                  <div className="font-semibold text-[#1D2129] mb-2">Financial Outsourcing</div>
                  <div className="text-sm text-gray-600">For 0~10 employees</div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                  <div className="font-semibold text-[#1D2129] mb-2">Financial Home Service</div>
                  <div className="text-sm text-gray-600">For 10~30 employees</div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                  <div className="font-semibold text-[#1D2129] mb-2">Part-time Financial Manager</div>
                  <div className="text-sm text-gray-600">For 30~80 employees</div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                  <div className="font-semibold text-[#1D2129] mb-2">Part-time CFO</div>
                  <div className="text-sm text-gray-600">For 80+ employees</div>
                </div>
                
                <div className="bg-[#FF6B00] p-4 rounded-xl shadow-sm text-center">
                  <div className="font-semibold text-white mb-2">Product</div>
                </div>
              </div>
            </div>
            
            {/* Project-based Services */}
            <div>
              <h3 className="text-xl font-bold text-[#1D2129] mb-6">Project-based Services</h3>
              
              <div className="grid grid-cols-5 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="font-semibold text-[#1D2129] mb-2">Accounting</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>External Compliance</li>
                    <li>Internal Control</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="font-semibold text-[#1D2129] mb-2">Tax</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Plan Design</li>
                    <li>Tax Planning</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="font-semibold text-[#1D2129] mb-2">Budget</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Budget Control</li>
                    <li>Profit Forecast</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="font-semibold text-[#1D2129] mb-2">Incentive</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Equity Design</li>
                    <li>Performance Evaluation</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="font-semibold text-[#1D2129] mb-2">Funding</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Equity Financing</li>
                    <li>Loan Financing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}