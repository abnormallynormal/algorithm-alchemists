import Footer from "../components/Footer";
import BackgroundEffects from "../forms/BackgroundEffects";
import SignupForm from "../forms/Form";
import Navbar from "../forms/formNavBar";

export default function SignupPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="relative flex-grow flex items-center justify-center pt-24 pb-12 px-6">
        <BackgroundEffects />

        <div className="relative z-10 w-full max-w-xl">
          <SignupForm form={null} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
