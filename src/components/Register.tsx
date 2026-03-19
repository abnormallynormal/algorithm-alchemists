import Footer from "./Footer";

export default function Register() {
  return (
    <div className=" pt-12 lg:pt-20 pb-4 text-white relative bg-gradient-to-b from-transparent via-purple-900/20 to-purple-900/40">
      <div className="px-24 max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-center">
          Ready to Start Your Journey?
        </h2>
        <p className="text-md lg:text-lg xl:text-xl mb-8 text-gray-200 text-center">
          Join Algorithm Alchemists and transform your coding skills with expert
          instruction and personalized learning.
        </p>
        <div className="flex justify-center mb-12">
          <a href="/sign-up">
            <button className="bg-white text-purple-900 px-8 py-4 lg:text-lg xl:text-xl font-bold rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105">
              Sign Up Now!
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
