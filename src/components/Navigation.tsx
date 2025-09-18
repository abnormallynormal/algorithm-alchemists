import { useEffect, useState } from "react";
import logo from "../assets/Ontario Circle Algorithm Alchemists Logo.png";

export default function Navigation(){
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMouseNearTop, setIsMouseNearTop] = useState(false);
  const [lastTrigger, setLastTrigger] = useState('scroll');
  const [lastScrollDirection, setLastScrollDirection] = useState<'up' | 'down' | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      
      // Check if scrolled from top
      setIsScrolled(scrollTop > 50);
      
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
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center py-4 px-8 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-black/30 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <img src={logo} alt="Algorithm Alchemists" className="h-10 w-auto" />
      <div className="flex space-x-6">
        <a
          href="/#about"
          className="text-white hover:text-gray-300 transition-colors"
        >
          About
        </a>
        <a
          href="/#classes"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Classes
        </a>

        <a
          href="/#reviews"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Reviews
        </a>
        <a
          href="/our-team"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Our Team
        </a>
        <a
          href="/#registration"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Registration
        </a>
      </div>
    </nav>
  );
}