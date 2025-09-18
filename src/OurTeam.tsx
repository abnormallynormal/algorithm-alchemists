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
      <div className="px-8 py-4 flex flex-col items-end relative z-20">
        <div>
          <div className="flex justify-end gap-4 mt-4 mb-2">
            <a
              href="mailto:algorithm.alchemists@gmail.com"
              className="text-white hover:text-blue-300 transition-colors duration-300 cursor-pointer"
              aria-label="Email us"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/algorithm.alchemists"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-300 transition-all duration-300 cursor-pointer"
              aria-label="Follow us on Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="text-right">© 2025 Algorithm Alchemists</div>
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
