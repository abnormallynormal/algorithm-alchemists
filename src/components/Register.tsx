export default function Register() {
  return (
    <div className=" pt-20 pb-4 text-white relative bg-gradient-to-b from-transparent via-purple-900/20 to-purple-900/40">
      <div className="px-24 max-w-4xl mx-auto relative z-10">
        <h2 className="text-5xl font-bold mb-6 text-center">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl mb-8 text-gray-200 text-center">
          Join Algorithm Alchemists and transform your coding skills with expert
          instruction and personalized learning.
        </p>
        <div className="flex justify-center mb-12">
          <button className="bg-white text-purple-900 px-8 py-4 text-xl font-bold rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105">
            Sign Up Now!
          </button>
        </div>
      </div>
      <div className="px-8 flex flex-col items-end">
        <div>
          <div className="flex justify-end gap-4 mb-2">
            <a
              href="mailto:algorithm.alchemists@gmail.com"
              className="text-white hover:text-blue-300 transition-colors duration-300"
              aria-label="Email us"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/algorithm.alchemists"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-300 transition-all duration-300"
              aria-label="Follow us on Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="text-right">© 2025 Algorithm Alchemists</div>
      </div>
    </div>
  );
}
