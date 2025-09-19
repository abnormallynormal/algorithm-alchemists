import TextType from "./TextType";
import { motion } from "motion/react";
export default function Header() {
  

  const handleLearnMoreClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full text-center mb-8">
        <div className="text-8xl font-extrabold mb-8">
          <TextType
            constText="Unlock your "
            text={["coding skills", "creativity", "potential", "future"]}
            typingSpeed={75}
            pauseDuration={2000}
            deletingSpeed={50}
            showCursor={true}
            cursorCharacter="|"
            loop={true}
            textColors={["#3B82F6", "#E66A9B", "#F59E0B", "#8B5CF6"]}
            className="text-white"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.25 }}
        >
          <div className="text-4xl font-bold mb-8">at Algorithm Alchemists</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
        >
          <div className="text-xl text-gray-600 max-w-2xl mb-4">
            Improve your programming skills by building real projects, tackling
            interesting problems, and connecting with a thriving community.
          </div>
          <div className="flex gap-4 mt-4 justify-center">
            <a href="/sign-up">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200">
                Sign Up Now
              </button>
            </a>
            <button
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200"
              onClick={handleLearnMoreClick}
            >
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
