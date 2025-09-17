import About from "./components/About";
import Header from "./components/Header";
import LightRays from "./components/LightRays";
import Navigation from "./components/Navigation";
import Classes from "./components/Classes";
import Reviews from "./components/Reviews";
import Register from "./components/Register";
export default function App() {
  return (
    <div>
      <div className="z-50">
        <Navigation />
      </div>
      <div className="relative z-10">
        <div>
          <div className="h-screen">
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
            <Register/>
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
