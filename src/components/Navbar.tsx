import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Navigation links for financial consulting
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'About Us', href: '/#about' },
    { name: 'Contact', href: '/#contact' }
  ];
  
  // Handle link click for anchor links when not on home page
  const handleAnchorLinkClick = (e: React.MouseEvent, href: string) => {
    if (location.pathname !== '/' && href.startsWith('/#')) {
      e.preventDefault();
      // First navigate to home page, then scroll to the anchor
      const anchorId = href.substring(2);
      window.location.href = `/#${anchorId}`;
    }
  };
  
  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md backdrop-blur-sm py-3' 
          : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
           {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-[#FF6B00] flex items-center">
            <i className="fa-solid fa-chart-line mr-2"></i>
            <span>OranCrab</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/#') ? (
                    <a 
                      href={link.href} 
                      className="text-gray-700 hover:text-[#165DFF] font-medium transition-colors"
                      onClick={(e) => handleAnchorLinkClick(e, link.href)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link 
                      to={link.href} 
                      className="text-gray-700 hover:text-[#165DFF] font-medium transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Contact Button (Desktop) */}
          <a 
            href="/#contact" 
            className="hidden md:inline-block px-5 py-2 bg-[#FF6B00] text-white font-medium rounded-lg hover:bg-[#E55A00] transition-colors"
            onClick={(e) => handleAnchorLinkClick(e, '/#contact')}
          >
            Contact Now
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "关闭菜单" : "打开菜单"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/#') ? (
                      <a 
                        href={link.href} 
                        className="block text-gray-700 font-medium hover:text-[#165DFF] transition-colors py-2"
                        onClick={(e) => {
                          handleAnchorLinkClick(e, link.href);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        to={link.href} 
                        className="block text-gray-700 font-medium hover:text-[#165DFF] transition-colors py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
                <li className="mt-4">
                  <a 
                    href="/#contact" 
                    className="block w-full text-center px-5 py-3 bg-[#FF6B00] text-white font-medium rounded-lg hover:bg-[#E55A00] transition-colors"
                    onClick={(e) => {
                      handleAnchorLinkClick(e, '/#contact');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Contact Now
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}