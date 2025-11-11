import LightRays from "./components/LightRays";
import Navigation from "./components/Navigation";
import { motion } from "motion/react";
import img1 from "./assets/event-pics/img1.jpg";
import img2 from "./assets/event-pics/img2.jpg";
import img3 from "./assets/event-pics/img3.jpg";
import img4 from "./assets/event-pics/img4.jpg";
export default function Events() {
  return (
    <div className="">
      <div className="z-50">
        <Navigation />
      </div>
      <div className="relative z-10 flex flex-col pt-24">
        <div className="px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-center">
              Events
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-lg lg:text-xl xl:text-2xl font-semibold mb-8 lg:mb-16 text-center">
              Check out the events we've been to!
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid xl:grid-cols-[1fr_auto] gap-12 mb-12 sm:mb-24 items-center">
              <div>
                <div className="text-md lg:text-xl xl:text-2xl font-bold mb-4">
                  Minds on Climate Symposium hosted by Human Nature Projects
                  Canada
                </div>
                <div className="text-sm lg:text-md">
                  On September 27, 2025, Algorithm Alchemists attended the Minds
                  on Climate Symposium hosted by Human Nature Projects Canada in
                  Etobicoke, Ontario. The event focused on turning eco-anxiety
                  into meaningful action. As a nonprofit teaching kids to code,
                  we led an interactive session showing how technology and
                  education can empower youth to address climate change. Through
                  hands-on activities, students learned to use coding to track
                  environmental data, raise awareness, and promote
                  sustainability—transforming climate anxiety into creativity
                  and action.
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                <img
                  src={img1}
                  alt="Event 1"
                  className="w-64 h-48 md:w-72 md:h-64 lg:w-80 lg:h-72 xl:w-96 xl:h-80 rounded-md object-cover"
                />
                <img
                  src={img2}
                  alt="Event 2"
                  className="w-64 h-48 md:w-72 md:h-64 lg:w-80 lg:h-72 xl:w-96 xl:h-80 rounded-md object-cover"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-12 xl:hidden">
              <div className="text-md lg:text-xl xl:text-2xl font-bold mb-4">
                YRES x Ignite Volunteer Fair 2025
              </div>
              <div className="text-sm lg:text-md">
                On October 25, 2025, Algorithm Alchemists participated in the
                2025 YRES Volunteer Fair hosted by York Region Educational
                Services, connecting with volunteers and community partners to
                share our mission of empowering youth through coding education.
                At the event, we showcased our programs that teach kids how to
                build tech-for-good projects and recruited new mentors and
                supporters eager to help inspire the next generation of young
                innovators.
              </div>
            </div>
            <div className="grid xl:grid-cols-[auto_1fr] gap-12 mb-12 items-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <img
                  src={img3}
                  alt="Event 3"
                  className="w-64 h-48 md:w-72 md:h-64 lg:w-80 lg:h-72 xl:w-96 xl:h-80 rounded-md object-cover"
                />
                <img
                  src={img4}
                  alt="Event 4"
                  className="w-64 h-48 md:w-72 md:h-64 lg:w-80 lg:h-72 xl:w-96 xl:h-80 rounded-md object-cover"
                />
              </div>
              <div className="hidden xl:block">
                <div className="text-md lg:text-xl xl:text-2xl font-bold mb-4">
                  YRES x Ignite Volunteer Fair 2025
                </div>
                <div className="text-sm lg:text-md">
                  On October 25, 2025, Algorithm Alchemists participated in the
                  2025 YRES Volunteer Fair hosted by York Region Educational
                  Services, connecting with volunteers and community partners to
                  share our mission of empowering youth through coding
                  education. At the event, we showcased our programs that teach
                  kids how to build tech-for-good projects and recruited new
                  mentors and supporters eager to help inspire the next
                  generation of young innovators.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="px-8 lg:px-16 py-4 z-50">
          <div className=" text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">
            Contact Us!
          </div>
          <div className="pb-4 flex flex-row justify-between items-end text-sm lg:text-md">
            <div>
              <div className="flex gap-2 mb-3">
                <a
                  href="mailto:algorithm.alchemists@gmail.com"
                  className="text-white hover:text-gray-300 transition-all duration-300 transform hover:scale-110 bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-white/20"
                  aria-label="Email us"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
                <a
                  href="https://discord.gg/csb7pFSBKf"
                  className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110 bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-blue-500/20"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join our Discord"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/algorithm.alchemists"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-300 transition-all duration-300 transform hover:scale-110 bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-pink-500/20"
                  aria-label="Follow us on Instagram"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>{" "}
              <p className="text-sm lg:text-md">
                Sponsored by{" "}
                <a
                  href="https://hackclub.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hack Club Link"
                >
                  Hack Club
                </a>
              </p>
            </div>
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
