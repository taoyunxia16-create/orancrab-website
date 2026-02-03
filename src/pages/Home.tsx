import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Contact } from '../components/Contact';
import { About } from '../components/About';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { WhatWeDo } from '../components/WhatWeDo';
import { ProductSelection } from '../components/ProductSelection';
import { ServiceAdvantages } from '../components/ServiceAdvantages';
import { RDTeam } from '../components/RDTeam';
import { PartnerWall } from '../components/PartnerWall';
import { FinanceAdvisor } from '../components/FinanceAdvisor';

export default function Home() {
  // Animation variants for section transitions
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <motion.section 
        id="about"
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <About />
      </motion.section>
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
      {/* What We Do Section */}
      <WhatWeDo />
      
      {/* Product Selection Section */}
      <ProductSelection />
      
      {/* Services Section */}
      <motion.section 
        id="services"
        className="py-20 bg-[#F2F3F5]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Services />
      </motion.section>
      
      {/* Service Advantages Section */}
      <ServiceAdvantages />
      
      {/* RD Team Section */}
      <RDTeam />
      
       {/* Stats Section */}
       <section className="py-16 bg-gradient-to-r from-[#FF6B00] to-[#FF9E53] text-white">
         <div className="container mx-auto px-4">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
             <div className="p-6">
               <div className="text-4xl font-bold mb-2">10+</div>
               <div className="text-white/80">Years of Experience</div>
             </div>
             <div className="p-6">
               <div className="text-4xl font-bold mb-2">5000+</div>
               <div className="text-white/80">Financial Advisors</div>
             </div>
             <div className="p-6">
               <div className="text-4xl font-bold mb-2">2000+</div>
               <div className="text-white/80">Clients Served</div>
             </div>
             <div className="p-6">
               <div className="text-4xl font-bold mb-2">10+</div>
               <div className="text-white/80">Branch Offices</div>
             </div>
           </div>
         </div>
       </section>
      
      {/* Partner Wall Section */}
      <PartnerWall />
      
      {/* Finance Advisor Section */}
      <FinanceAdvisor />
      
      {/* Contact Section */}
      <motion.section 
        id="contact"
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Contact />
      </motion.section>
    </div>
  );
}