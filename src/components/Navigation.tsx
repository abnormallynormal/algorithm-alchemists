import logo from "../assets/Ontario Circle Algorithm Alchemists Logo.png";

export default function Navigation(){
  return(
    <nav className="sticky top-0 z-50 flex justify-between items-center py-4 px-8">
      <img src={logo} alt="Algorithm Alchemists" className="h-10 w-auto"/>
      <div className="flex space-x-6">
        <a href="#about" className="text-white hover:text-gray-300">About</a>
        <a href="#classes" className="text-white hover:text-gray-300">Classes</a>
        <a href="#reviews" className="text-white hover:text-gray-300">Reviews</a>
        <a href="#registration" className="text-white hover:text-gray-300">Registration</a>
      </div>
    </nav>
  )
}