import { useEffect, useState } from "react";
import logo from "../assets/Ontario Circle Algorithm Alchemists Logo.png";

export default function Navigation(){
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMouseNearTop, setIsMouseNearTop] = useState(false);
  const [lastTrigger, setLastTrigger] = useState('scroll');
  const [lastScrollDirection, setLastScrollDirection] = useState<'up' | 'down' | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const isMobile = window.innerWidth < 768; // md breakpoint
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      
      // Check if scrolled from top
      setIsScrolled(scrollTop > 50);
      
      // On mobile, always keep navbar visible
      if (isMobile) {
        setIsVisible(true);
        setLastScrollY(scrollTop);
        return;
      }
      
      // Desktop scroll behavior (existing logic)
      // Track scroll direction
      let scrollDirection: 'up' | 'down' | null = null;
      if (scrollTop > lastScrollY) {
        scrollDirection = 'down';
      } else if (scrollTop < lastScrollY) {
        scrollDirection = 'up';
      }
      
      if (scrollDirection) {
        setLastScrollDirection(scrollDirection);
      }
      
      // If at the very top, always show navbar regardless of mouse position
      if (scrollTop <= 100) {
        setIsVisible(true);
        setLastTrigger('scroll');
      } else {
        // Check scroll direction only when not at top
        if (scrollDirection === 'down') {
          // Scrolling down & past threshold - hide navbar (unless mouse is near top)
          // Always hide on downward scroll regardless of trigger, unless mouse is actively near top
          if (!isMouseNearTop) {
            setIsVisible(false);
            setLastTrigger('scroll');
          }
        } else if (scrollDirection === 'up') {
          // Scrolling up - show navbar
          setIsVisible(true);
          setLastTrigger('scroll');
        }
      }
      
      setLastScrollY(scrollTop);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Skip mouse logic on mobile
      if (isMobile) return;
      
      const scrollTop = window.scrollY;
      const mouseY = e.clientY;
      const isNearTop = mouseY <= 80; // Show when mouse is within 80px of top
      
      setIsMouseNearTop(isNearTop);
      
      // Only handle mouse logic if we're not at the very top of the page
      if (scrollTop > 100) {
        // Show navbar when mouse is near top, even if scrolled down
        if (isNearTop) {
          setIsVisible(true);
          setLastTrigger('mouse')
        } else if (!isNearTop && lastTrigger === 'mouse') {
          // Only hide if the last scroll direction was down
          // If last scroll was up, keep the navbar visible
          if (lastScrollDirection === 'down') {
            setIsVisible(false);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollY, isMouseNearTop, lastScrollDirection]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-black/30 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        <img src={logo} alt="Algorithm Alchemists" className="h-8 sm:h-10 w-auto" />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 lg:space-x-6 items-center">
          <a
            href="/#about"
            className="text-white hover:text-gray-300 transition-colors text-sm lg:text-base"
          >
            About
          </a>
          <a
            href="/#classes"
            className="text-white hover:text-gray-300 transition-colors text-sm lg:text-base"
          >
            Classes
          </a>
          <a
            href="/#reviews"
            className="text-white hover:text-gray-300 transition-colors text-sm lg:text-base"
          >
            Reviews
          </a>
          <a
            href="/our-team"
            className="text-white hover:text-gray-300 transition-colors text-sm lg:text-base"
          >
            Our Team
          </a>
          <a
            href="/sign-up"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <button className="bg-white text-purple-900 px-3 lg:px-4 py-1.5 lg:py-2 text-sm lg:text-lg font-bold rounded-3xl transition-all duration-300 shadow-lg transform hover:scale-105">
              Sign Up
            </button>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col space-y-1 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col space-y-4 p-6">
          <a
            href="/#about"
            className="text-white hover:text-gray-300 transition-colors text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="/#classes"
            className="text-white hover:text-gray-300 transition-colors text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Classes
          </a>
          <a
            href="/#reviews"
            className="text-white hover:text-gray-300 transition-colors text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Reviews
          </a>
          <a
            href="/our-team"
            className="text-white hover:text-gray-300 transition-colors text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Team
          </a>
          <a
            href="/sign-up"
            className="text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <button className="bg-white text-purple-900 px-6 py-3 text-lg font-bold rounded-3xl transition-all duration-300 shadow-lg transform hover:scale-105 w-full">
              Sign Up
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}