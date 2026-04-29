export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-transparent">
      <div className="font-h3 text-h3 font-black tracking-tighter text-white">
        Algorithm Alchemists
      </div>

      <div className="hidden md:block">
        <span className="text-on-surface-variant font-body-md mr-4">
          Existing member?
        </span>
        <button className="text-white font-medium hover:text-primary-container transition-colors font-body-md">
          Log in
        </button>
      </div>
    </header>
  );
}
