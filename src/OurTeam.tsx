import LightRays from "./components/LightRays";
import Navigation from "./components/Navigation";

export default function OurTeam() {
  return (
    <div>
      <div className="z-50">
        <Navigation />
      </div>
      <div className="relative z-10 flex flex-col px-24 py-24 items-center">
        <div className="text-6xl font-bold mb-8">Our Team</div>
        <div className="text-2xl font-semibold mb-4">
          Dedication. Expertise. Passion.
        </div>
        <div className="mb-4 px-8">
          Founded and run by St. Theresa of Lisieux CHS students enrolled in the
          Advanced Placement (AP) program in Ontario, International
          Baccalaureate (IB) students at Collège Jean-de-Brébeuf in Québec, and
          others in British Columbia, Algorithm Alchemists embodies excellence
          and innovation.
        </div>
        <div className="mb-4 px-8">
          Our team of dedicated teachers has consistently excelled in
          prestigious competitions, such as the Canadian Computing Competition
          (CCC) and the United States Computing Olympiad (USACO).{" "}
          <b>
            {" "}
            In the 2025 CCC, we proudly guided over 30 students to earn
            certificates of distinction{" "}
          </b>{" "}
          —a recognition awarded to those ranking in the top 25% of participants
          in both the junior and senior divisions.
        </div>
        <div className="mb-16 px-8">
          At Algorithm Alchemists, we are driven to equip students with the
          skills necessary to become fluent coders. We believe that coding will
          emerge as an essential skill in the new century, much like reading is
          today. Our expertise ranges from the fundamentals of Python to
          high-level competitive programming, ensuring thorough preparation for
          a variety of programming contests. Get to know our talented team of
          professionals and discover how we make learning to code both fun and
          engaging!
        </div>
        <div className="mb-4 text-4xl font-bold">Ontario</div>
        <div className="mb-4 text-4xl font-bold">Québec</div>
        <div className="mb-4 text-4xl font-bold">British Columbia</div>
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
