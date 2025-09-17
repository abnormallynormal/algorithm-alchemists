import { useEffect, useState } from "react";
import logo from "../assets/Ontario Circle Algorithm Alchemists Logo.png";

export default function Navigation(){
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMouseNearTop, setIsMouseNearTop] = useState(false);
  const [lastTrigger, setLastTrigger] = useState('scroll');
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      
      // Check if scrolled from top
      setIsScrolled(scrollTop > 50);
      
      // Check scroll direction
      if (scrollTop > lastScrollY && scrollTop > 100) {
        // Scrolling down & past threshold - hide navbar (unless mouse is near top)
        if (!isMouseNearTop && lastTrigger === 'scroll') {
          setIsVisible(false);
        }
      } else if (scrollTop < lastScrollY || scrollTop <= 100) {
        // Scrolling up or near top - show navbar
        setIsVisible(true);
        setLastTrigger('scroll');
      }
      
      setLastScrollY(scrollTop);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const mouseY = e.clientY;
      const isNearTop = mouseY <= 80; // Show when mouse is within 80px of top
      
      setIsMouseNearTop(isNearTop);
      
      // Show navbar when mouse is near top, even if scrolled down
      if (isNearTop) {
        setIsVisible(true);
        setLastTrigger('mouse')
      } else if (!isNearTop && lastTrigger === 'mouse') {
        // Hide again if mouse moves away and we're scrolling down
        setIsVisible(false);
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
  }, [lastScrollY, isMouseNearTop]);

  return(
    <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center py-4 px-8 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-black/30 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    } ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <img src={logo} alt="Algorithm Alchemists" className="h-10 w-auto"/>
      <div className="flex space-x-6">
        <a href="#about" className="text-white hover:text-gray-300 transition-colors">About</a>
        <a href="#classes" className="text-white hover:text-gray-300 transition-colors">Classes</a>
        <a href="#reviews" className="text-white hover:text-gray-300 transition-colors">Reviews</a>
        <a href="#registration" className="text-white hover:text-gray-300 transition-colors">Registration</a>
      </div>
    </nav>
  )
}