import logo from "../../../public/favicon.png";

export function Nav() {
  return (
    <nav className="bg-[#0B081A]/70 backdrop-blur-lg font-['Space_Grotesk'] text-sm tracking-wide docked full-width top-0 z-50 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] w-full h-20 fixed">
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        <a href="/">
          <img
            src={logo}
            alt="Algorithm Alchemists"
            className="h-8 sm:h-12 w-auto"
          />
        </a>

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
            href="/events"
            className="text-white hover:text-gray-300 transition-colors text-sm lg:text-base"
          >
            Events
          </a>
          <a
            href="/contact"
            className="text-white hover:text-gray-300 transition-colors text-sm lg:text-base"
          >
            Contact
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
      </div>
    </nav>
  );
}
