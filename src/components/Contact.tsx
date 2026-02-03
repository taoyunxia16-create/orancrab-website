import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

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

export function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Form validation state
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Handle form input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  // Validate form
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter the subject';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message content';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Store form data in localStorage
      const submissionData = {
        ...formData,
        timestamp: new Date().toISOString()
      };
      
      // Get existing submissions or create an empty array
      const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      
      // Add new submission
      existingSubmissions.push(submissionData);
      
      // Save back to localStorage
      localStorage.setItem('contactSubmissions', JSON.stringify(existingSubmissions));
      
      // Show success message
      toast.success('Message sent successfully! We will contact you as soon as possible.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  };
  
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-medium rounded-full mb-4">
          Contact Us
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D2129] mb-4">
          Welcome to Contact Us
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          If you have any questions or needs, please feel free to contact us at any time. The OranCrab team will wholeheartedly provide you with professional services
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Contact Information */}
        <motion.div 
          className="lg:col-span-2 bg-[#FFF8F1] rounded-2xl p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3 className="text-xl font-bold text-[#1D2129] mb-6">Contact Information</h3>
          
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.div className="flex items-start" variants={itemVariants}>
              <div className="p-3 bg-white rounded-lg shadow-sm mr-4">
                <Phone className="w-5 h-5 text-[#FF6B00]" />
              </div>
              <div>
                <h4 className="font-medium text-[#1D2129] mb-1">Phone</h4>
                <a href="tel:4007771147" className="text-[#FF6B00] hover:underline">400-777-1147</a>
              </div>
            </motion.div>
            
            <motion.div className="flex items-start" variants={itemVariants}>
              <div className="p-3 bg-white rounded-lg shadow-sm mr-4">
                <MapPin className="w-5 h-5 text-[#FF6B00]" />
              </div>
              <div>
                <h4 className="font-medium text-[#1D2129] mb-1">Headquarters Address</h4>
                <address className="not-italic text-gray-600">
                  Shenzhen Headquarters: B738, Building B, Huayuan Technology Innovation Park, Bao'an District, Shenzhen
                </address>
              </div>
            </motion.div>
            
            <motion.div className="flex items-start" variants={itemVariants}>
              <div className="p-3 bg-white rounded-lg shadow-sm mr-4">
                <MapPin className="w-5 h-5 text-[#FF6B00]" />
              </div>
              <div>
                <h4 className="font-medium text-[#1D2129] mb-1">Branch Addresses</h4>
                <address className="not-italic text-gray-600 text-sm">
                  Guangzhou Branch: Room 105, 65th Floor, Yuexiu Financial Building, Tianhe District, Guangzhou<br />
                  Wuhan Branch: AD36, 36th Floor, New World International Trade Building, Jianghan District, Wuhan<br />
                  Guangming Branch: 408, Building F, CIMC Low-orbit Satellite IoT Industrial Park, Keneng Road, Dongkeng Community, Fenghuang Street, Guangming District, Shenzhen<br />
                  Xiangyang Branch: 28-A2202-2205, Minfa World City Duhui Mountain, Hangkong Road, Xiangzhou District, Xiangyang, Hubei<br />
                  Chongqing Branch: Office Unit 3775, 37th Floor, 68 Zourong Road, Jiefangbei Street, Yuzhong District, Chongqing<br />
                  Shenzhen Branch: LOFTB4 Floor, South District, UpperHills Town, Futian District, Shenzhen<br />
                  Qianhai Branch: 4th Floor, Tower T2, Qianhai Building, No. 2 Financial Street, Qianhai Shenzhen-Hong Kong Cooperation Zone, Nanshan District, Shenzhen
                </address>
              </div>
            </motion.div>
            
            <motion.div className="flex items-start" variants={itemVariants}>
              <div className="p-3 bg-white rounded-lg shadow-sm mr-4">
                <Mail className="w-5 h-5 text-[#FF6B00]" />
              </div>
              <div>
                <h4 className="font-medium text-[#1D2129] mb-1">Official Website</h4>
                <a href="http://www.orancrab.com" className="text-[#FF6B00] hover:underline">www.orancrab.com</a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.div 
          className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3 className="text-xl font-bold text-[#1D2129] mb-6">Online Inquiry</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" variants={itemVariants}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#FF6B00] focus:border-[#FF6B00] outline-none transition-all ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Please enter your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#FF6B00] focus:border-[#FF6B00] outline-none transition-all ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Please enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#FF6B00] focus:border-[#FF6B00] outline-none transition-all ${
                  errors.subject ? 'border-red-500' : 'border-gray-300'
                }`}
                  placeholder="Please enter inquiry subject"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#FF6B00] focus:border-[#FF6B00] outline-none transition-all ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                  placeholder="Please describe your needs in detail..."
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <button
                type="submit"
                className="px-6 py-3 bg-[#FF6B00] hover:bg-[#E55A00] text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 w-full md:w-auto"
              >
                Submit Inquiry
                <Send className="w-5 h-5" />
              </button>
            </motion.div>
          </form>
          
          {/* Note about data storage */}
            <div className="mt-6 text-sm text-gray-500 italic">
              <i className="fa-solid fa-info-circle mr-2 text-[#FF6B00]"></i>
              Your inquiry content will be securely stored in your browser's local storage. You can view all submitted content on the
              <a 
                href="/submissions" 
                className="text-[#FF6B00] hover:underline mx-1"
              >
                My Inquiry Records
              </a>
              page (login required).
            </div>
        </motion.div>
      </div>
    </div>
  );
}