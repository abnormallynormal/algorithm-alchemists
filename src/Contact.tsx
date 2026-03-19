import LightRays from "./components/LightRays";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function Contact() {
  return (
    <div className="">
      <div className="z-50">
        <Navigation />
      </div>
      <div className="relative z-10 flex flex-col pt-24">
        <div className="px-8 lg:px-16 xl:px-24">
          <div className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-center">
            Contact Us
          </div>
          <div className="text-lg lg:text-xl xl:text-2xl font-semibold mb-8 lg:mb-16 text-center">
            Have a question? Want to collaborate? Get in touch.
          </div>
          <div className="max-w-3xl mx-auto text-sm lg:text-md leading-relaxed text-center">
            <p className="mb-6">
              For general inquiries, partnership opportunities, or questions about our programs, reach out via email.
            </p>
            <div className="flex justify-center mb-8">
              <a
                href="mailto:algorithm.alchemists@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-xl border border-white/20 transition-all duration-300"
              >
                <span className="font-semibold">Email us</span>
                <span className="text-sm opacity-80">algorithm.alchemists@gmail.com</span>
              </a>
            </div>
            <p className="text-sm lg:text-md">
              Want to support our mission? Check out our <a href="/sign-up" className="text-white underline">Sign Up</a> page for class info, or explore <a href="/our-team" className="text-white underline">our team</a>.
            </p>
          </div>
        </div>

        <Footer />
      </div>

      <div className="fixed inset-0 z-0">
        <LightRays
          raysOrigin="bottom-center"
          raysColor="#9466ff"
          raysSpeed={0.5}
          lightSpread={2}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          saturation={0.5}
          distortion={0.01}
        />
      </div>
    </div>
  );
}
