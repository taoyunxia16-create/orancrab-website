import { ChevronUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Handle link click for anchor links when not on home page
  const handleAnchorLinkClick = (e: React.MouseEvent, href: string) => {
    if (location.pathname !== '/' && href.startsWith('#')) {
      e.preventDefault();
      // First navigate to home page, then scroll to the anchor
      const anchorId = href.substring(1);
      window.location.href = `/#${anchorId}`;
    }
  };
  
   // Footer links data
  const footerLinks = {
    services: [
      { name: 'Enterprise Services', href: '#services' },
      { name: 'Professional Empowerment', href: '#services' },
      { name: 'Cycle Services', href: '#services' },
      { name: 'Project Services', href: '#services' },
      { name: 'Consulting Services', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'OranCrab Journey', href: '#about' },
      { name: 'Financial Advisors', href: '#about' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Business Support', href: '#contact' }
    ],
    legal: [
      { name: 'Terms of Service', href: '#legal' },
      { name: 'Privacy Policy', href: '#legal' },
      { name: 'Cookie Policy', href: '#legal' },
      { name: 'Sitemap', href: '#legal' }
    ]
  };
  
  return (
    <footer className="bg-[#0E2F56] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company info */}
          <div>
            <div className="flex items-center mb-6">
              <Link to="/" className="text-2xl font-bold flex items-center">
                <i className="fa-solid fa-chart-line mr-2 text-[#FF6B00]"></i>
                <span>OranCrab</span>
              </Link>
            </div>
            <p className="mb-6 text-gray-300 max-w-md">
              OranCrab is a professional financial advisory team with passion, attitude, and expertise, focusing on financial data, standardizing financial practices, and delivering professional value.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#165DFF] text-white transition-colors">
                <i className="fa-brands fa-weixin"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#165DFF] text-white transition-colors">
                <i className="fa-brands fa-weibo"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#165DFF] text-white transition-colors">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#165DFF] text-white transition-colors">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
          
          {/* Services links */}
          <div>
          <h4 className="text-white font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-[#36CFC9] transition-colors"
                    onClick={(e) => handleAnchorLinkClick(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company links */}
          <div>
          <h4 className="text-white font-semibold text-lg mb-4">About OranCrab</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-[#36CFC9] transition-colors"
                    onClick={(e) => handleAnchorLinkClick(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
             <h4 className="text-white font-semibold text-lg mt-8 mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-[#36CFC9] transition-colors"
                      onClick={(e) => handleAnchorLinkClick(e, link.href)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
             {/* 咨询记录链接 */}
             <div>
               <h4 className="text-white font-semibold text-lg mb-4">Customer Service</h4>
               <ul className="space-y-3">
                 <li>
                   <Link 
                     to="/submissions" 
                     className="text-gray-300 hover:text-[#36CFC9] transition-colors flex items-center"
                   >
                     <i className="fa-solid fa-file-lines mr-2"></i>
                     View Inquiry Records
                   </Link>
                   <p className="text-xs text-gray-400 mt-1 pl-6">(Login required)</p>
                 </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-gray-300 hover:text-[#36CFC9] transition-colors flex items-center"
                    onClick={(e) => handleAnchorLinkClick(e, '#contact')}
                  >
                    <i className="fa-solid fa-headset mr-2"></i>
                    Online Support
                  </a>
                </li>
              </ul>
            </div>
        </div>
        
        {/* Bottom footer */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-300">
                &copy; {new Date().getFullYear()} OranCrab. All rights reserved.
              </p>
            </div>
            
            {/* Contact info */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-gray-300">
              <div className="flex items-center">
                 <i className="fa-solid fa-envelope mr-2 text-[#36CFC9]"></i>
                 <a href="mailto:info@orancrab.com" className="hover:text-white">商务支持</a>
               </div>
               <div className="flex items-center">
                 <i className="fa-solid fa-phone mr-2 text-[#36CFC9]"></i>
                 <a href="tel:4007771147" className="hover:text-white">400-777-1147</a>
               </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-map-marker-alt mr-2 text-[#36CFC9]"></i>
                  <span>Consulting Services</span>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#FF6B00] text-white shadow-lg hover:bg-[#0E2F56] transition-all flex items-center justify-center z-50"
        aria-label="返回顶部"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </footer>
  );
}