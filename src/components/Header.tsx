import TextType from "./TextType";

export default function Header(){
  const handleSignUpClick = () => {
    const registrationSection = document.getElementById('registration');
    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: 'smooth' });
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
            textColors={["#3B82F6", "#10B981", "#F59E0B", "#8B5CF6"]}
            className="text-white"
          />
        </div>
        <div className="text-4xl font-bold mb-8">at Algorithm Alchemists</div>
        <div className="text-xl text-gray-600 max-w-2xl mb-4">
          Transform your programming skills with expert-led courses, hands-on
          projects, and a supportive community of fellow developers.
        </div>
        <div className="flex gap-4 mt-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors" onClick={handleSignUpClick}>
            Sign Up Now
          </button>
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}