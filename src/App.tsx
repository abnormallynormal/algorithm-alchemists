import About from "./components/yichensStuff/About";
import Header from "./components/yichensStuff/Header";
import LightRays from "./components/yichensStuff/LightRays";
import Navigation from "./components/yichensStuff/Navigation";
import Classes from "./components/yichensStuff/Classes";
import Reviews from "./components/yichensStuff/Reviews";
import Register from "./components/yichensStuff/Register";

export default function App() {
  return (
    <div>
      <div className="z-50">
        <Navigation />
      </div>
      <div className="relative z-10">
        <div>
          <div className="h-screen px-8 md:px-12 lg:px-24">
            <Header />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="classes">
            <Classes />
          </div>
          <div id="reviews">
            <Reviews />
          </div>
          <div id="registration">
            <Register />
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
