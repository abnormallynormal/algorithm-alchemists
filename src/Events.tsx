import LightRays from "./components/LightRays";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { motion } from "motion/react";
import img1 from "./assets/event-pics/img1.jpg";
import img2 from "./assets/event-pics/img2.jpg";
import img3 from "./assets/event-pics/img3.jpg";
import img4 from "./assets/event-pics/img4.jpg";
import img5 from "./assets/event-pics/img5.jpg";
import img6 from "./assets/event-pics/img6.jpg";
import img7 from "./assets/event-pics/img7.png";
import img8 from "./assets/event-pics/img8.jpg";
import img9 from "./assets/event-pics/img9.webp";
import img10 from "./assets/event-pics/img10.webp";

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
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid xl:grid-cols-[1fr_auto] gap-12 mb-12 sm:mb-24 items-center">
              <div>
                <div className="text-md lg:text-xl xl:text-2xl font-bold mb-4">
                  CUTC x Caffeine.ai Promptathon
                </div>
                <div className="text-sm lg:text-md">
                  On November 22, 2025, Algorithm Alchemists attended the CUTC x
                  Caffeine.ai Promptathon showcased on Luma. As a nonprofit that
                  teaches younger students how to code, we led an introductory
                  session showing participants how AI-assisted coding can make
                  building apps more accessible. We taught students how to
                  structure effective prompts, turn ideas into functional
                  prototypes, and understand the logic behind the code generated
                  for them. By bringing guidance, mentorship, and easy-to-use
                  tools, we helped students gain confidence in using modern
                  coding workflows—transforming curiosity into real, hands-on
                  creation.
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                <img
                  src={img5}
                  alt="Event 5"
                  className="w-64 h-48 md:w-72 md:h-64 lg:w-80 lg:h-72 xl:w-96 xl:h-80 rounded-md object-cover"
                />
                <img
                  src={img6}
                  alt="Event 6"
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
                Learning For Our Future Podcast
              </div>
              <div className="text-sm lg:text-md">
                On November 24, 2025, Algorithm Alchemists were featured on the
                Leaders For Our Future podcast, supported by Ocean Wise. The
                podcast highlights stories of conservation, innovation, and
                leadership across Canada, raising awareness of ocean and water
                issues. During the episode, we discussed how technology can be
                used to protect ecosystems, the environmental impact of AI, and
                how youth can leverage coding skills for positive change. Our
                conversation covered topics including sustainable AI practices,
                the hidden water and energy costs of data centers, and practical
                ways students can use technology to address environmental
                challenges. By sharing insights from our work teaching coding to
                youth, we emphasized how technology can empower the next
                generation to turn curiosity into meaningful action for the
                planet.
              </div>
            </div>
            <div className="grid xl:grid-cols-[auto_1fr] gap-12 mb-12 items-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <img
                  src={img7}
                  alt="Event 7"
                  className="w-64 h-48 md:w-72 md:h-64 lg:w-80 lg:h-72 xl:w-96 xl:h-80 rounded-md object-cover"
                  style={{objectPosition: "center 90%"}}
                />
                <div className="w-64 h-48 md:w-72 md:h-64 lg:w-80 lg:h-72 xl:w-96 xl:h-80 rounded-md overflow-hidden">
                  <img
                    src={img8}
                    alt="Event 8"
                    className="w-full h-full object-cover"
                    style={{objectPosition: "center 40%", transform: "scale(1.075)"}}
                  />
                </div>
              </div>
              <div className="hidden xl:block">
                <div className="text-md lg:text-xl xl:text-2xl font-bold mb-4">
                  Learning For Our Future Podcast
                </div>
                <div className="text-sm lg:text-md">
                  On November 24, 2025, Algorithm Alchemists were featured on
                  the Leaders For Our Future podcast, supported by Ocean Wise.
                  The podcast highlights stories of conservation, innovation,
                  and leadership across Canada, raising awareness of ocean and
                  water issues. During the episode, we discussed how technology
                  can be used to protect ecosystems, the environmental impact of
                  AI, and how youth can leverage coding skills for positive
                  change. Our conversation covered topics including sustainable
                  AI practices, the hidden water and energy costs of data
                  centers, and practical ways students can use technology to
                  address environmental challenges. By sharing insights from our
                  work teaching coding to youth, we emphasized how technology
                  can empower the next generation to turn curiosity into
                  meaningful action for the planet.
                </div>
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
                Facilitating on Purpose Podcast
              </div>
              <div className="text-sm lg:text-md">
                On March 4, 2026, Algorithm Alchemists founder Eric Wang joined the Facilitating on Purpose podcast hosted by learning designer Beth Cougler Blom. He shared the story behind Algorithm Alchemists and how it delivers engaging, peer-led coding workshops for elementary and high school students. The conversation highlighted how purposeful facilitation (through hands-on activities and active participation) makes programming more accessible and motivating. Eric also emphasized the organization's mentorship culture, where former students return as volunteer instructors, fostering a supportive and sustainable learning community.
              </div>
            </div>
            <div className="grid xl:grid-cols-[1fr_auto] gap-12 mb-12 sm:mb-24 items-center">
              <div className="hidden xl:block">
                <div className="text-md lg:text-xl xl:text-2xl font-bold mb-4">
                  Facilitating on Purpose Podcast
                </div>
                <div className="text-sm lg:text-md">
                  On March 4, 2026, Algorithm Alchemists founder Eric Wang joined the Facilitating on Purpose podcast hosted by learning designer Beth Cougler Blom. He shared the story behind Algorithm Alchemists and how it delivers engaging, peer-led coding workshops for elementary and high school students. The conversation highlighted how purposeful facilitation (through hands-on activities and active participation) makes programming more accessible and motivating. Eric also emphasized the organization's mentorship culture, where former students return as volunteer instructors, fostering a supportive and sustainable learning community.
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center order-2 lg:order-1">
                <img
                  src={img9}
                  alt="Event 9"
                  className="w-64 h-48 md:w-72 md:h-64 lg:w-80 lg:h-72 xl:w-96 xl:h-80 rounded-md object-cover"
                />
                <img
                  src={img10}
                  alt="Event 10"
                  className="w-64 h-48 md:w-72 md:h-64 lg:w-80 lg:h-72 xl:w-96 xl:h-80 rounded-md object-cover"
                />
              </div>
            </div>
          </motion.div>
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
