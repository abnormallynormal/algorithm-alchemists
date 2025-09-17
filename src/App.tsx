
import About from "./components/About";
import Header from "./components/Header";
import LightRays from "./components/LightRays";
import Navigation from "./components/Navigation";
import Classes from "./components/Classes";
export default function App(){
  return (
    <div className="min-h-screen relative">
      {/* Background Light Rays */}

      {/* Navigation - Overlayed */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navigation />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="px-4">
          <div className="h-screen">
            <Header />
          </div>
          <div id="about" >
            <About />
          </div>
          <div id="classes" className="">
            <Classes/>
          </div>
          <div id="reviews" className="py-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Reviews
            </h2>
            <p className="text-gray-600">Student reviews</p>
          </div>
          <div id="registration" className="py-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Registration
            </h2>
            <p className="text-gray-600">Registration information</p>
          </div>
        </div>
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