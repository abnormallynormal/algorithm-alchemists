import LightRays from "./components/LightRays";
import Navigation from "./components/Navigation";
import { motion } from "motion/react";
import brandonLam from "./assets/pfps/brandon lam.avif";
import brianGe from "./assets/pfps/brian ge.avif";
import chloeChu from "./assets/pfps/chloe chu.avif";
import elinaKhan from "./assets/pfps/elina khan.avif";
import elizabethSoboleva from "./assets/pfps/elizabeth soboleva.avif";
import ericWangPfp from "./assets/pfps/eric wang new.avif";
import ethanGuan from "./assets/pfps/ethan guan.avif";
import ethanLeung from "./assets/pfps/ethan leung.avif";
import evelynDam from "./assets/pfps/evelyn dam.avif";
import jeffreyWang from "./assets/pfps/jeffrey wang.avif";
import justinChou from "./assets/pfps/justin chou.avif";
import justinWu from "./assets/pfps/justin wu.avif";
import kaleyWu from "./assets/pfps/kaley wu.avif";
import kyleZhou from "./assets/pfps/kyle zhou.avif";
import patrickZhang from "./assets/pfps/patrick zhang.avif";
import soroushPaidar from "./assets/pfps/soroush paidar new.avif";
import siddhMistry from "./assets/pfps/siddh mistry.avif";
import garyFu from "./assets/pfps/gary fu.avif";
import weizhongXia from "./assets/pfps/weizhong xia.avif";
import yichenXiao from "./assets/pfps/yichen xiao.avif";
import zongqiaoZhou from "./assets/pfps/zongqiao zhou.avif";
import EmblaCarousel from "./components/EmblaCarousel";
import SpotlightCard from "./components/SpotlightCard";

export default function OurTeam() {
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
            <div className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 text-center">
              Our Team
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-lg lg:text-xl xl:text-2xl font-semibold mb-4 text-center">
              Dedication. Expertise. Passion.
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 px-8 text-md lg:text-lg text-center">
              Founded and run by St. Theresa of Lisieux CHS students enrolled in
              the Advanced Placement (AP) program in Ontario, International
              Baccalaureate (IB) students at Collège Jean-de-Brébeuf in Québec,
              and others in British Columbia, Algorithm Alchemists embodies
              excellence and innovation.
            </div>
            <div className="mb-4 px-8 text-md lg:text-lg text-center">
              Since our founding, we have reached over 100,000 people through
              our programs, resources, and outreach initiatives. Our team of
              dedicated teachers has consistently excelled in prestigious
              competitions, such as the Canadian Computing Competition (CCC) and
              the United States Computing Olympiad (USACO).{" "}
              <b>
                {" "}
                In the 2025 CCC, we proudly guided over 30 students to earn
                certificates of distinction{" "}
              </b>{" "}
              —a recognition awarded to those ranking in the top 25% of
              participants in both the junior and senior divisions.
            </div>
            <div className="mb-8 lg:mb-16 px-8 text-md lg:text-lg text-center">
              At Algorithm Alchemists, we are driven to equip students with the
              skills necessary to become fluent coders. We believe that coding
              will emerge as an essential skill in the new century, much like
              reading is today. Our expertise ranges from the fundamentals of
              Python to high-level competitive programming, ensuring thorough
              preparation for a variety of programming contests. Get to know our
              talented team of professionals and discover how we make learning
              to code both fun and engaging!
            </div>
          </motion.div>
          <div className="mb-4 text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
            Ontario
          </div>
          <EmblaCarousel
            slides={[
              {
                name: "Eric Wang",
                title: "President & Founder",
                description:
                  "United States of America Computing Olympiad (USACO) Silver Division",
                image: ericWangPfp,
              },
              {
                name: "Jeffrey Wang",
                title:
                  "Vice-President & Founder / Junior Class Lead / Outreach Coordinator",
                description:
                  "Canadian Computing Competition (CCC) Junior Division Distinction",
                image: jeffreyWang,
              },
              {
                name: "Ethan Leung",
                title:
                  "Vice-President / Intermediate Class Teacher / Marketing",
                image: ethanLeung,
              },
              {
                name: "Brian Ge",
                title:
                  "Senior Class Lead Teacher / Intermediate Teacher / Outreach Coordinator",
                description:
                  "Canadian Computing Competition (CCC) Senior Division Distinction",
                image: brianGe,
              },
              {
                name: "Yichen Xiao",
                title: "Web Dev Lead Teacher / Website Developer",
                description:
                  "Canadian Computing Competition (CCC) Senior Division Distinction",
                image: yichenXiao,
              },
              {
                name: "Ethan Guan",
                title: "Senior Class Teacher",
                image: ethanGuan,
              },
              {
                name: "Justin Wen Hao Wu",
                title: "Senior Class Teacher",
                description:
                  "Canadian Computing Competition (CCC) Junior Division Honour Roll",
                image: justinWu,
              },
              {
                name: "Patrick Zhang",
                title: "Web Development Teacher",
                image: patrickZhang,
              },
              {
                name: "Elina Khan",
                title: "Head Public Relations Officer",
                image: elinaKhan,
              },
              {
                name: "Chloe Chu",
                title: "Public Relations Officer",
                image: chloeChu,
              },
              {
                name: "Kaley Wu",
                title: "Junior Class Teacher",
                image: kaleyWu,
              },
              {
                name: "Soroush Paidar",
                title: "Junior Class Teacher",
                image: soroushPaidar,
              },
              {
                name: "Siddh Mistry",
                title: "Intermediate Class Teacher",
                image: siddhMistry,
              },
              {
                name: "Gary Fu",
                title: "Intermediate Class Teacher",
                image: garyFu,
              },
              {
                name: "Brandon Lam",
                title: "Former Senior Class Teacher",
                description:
                  "Canadian Computing Competition (CCC) Senior Division Group 3 Honour Roll (top 3% of competitors)",
                image: brandonLam,
              },

              {
                name: "Kyle Zhou",
                title: "Former Senior Class Teacher",
                description:
                  "Perfect Score on Canadian Computing Competition (CCC) Junior Division",
                image: kyleZhou,
              },
              {
                name: "Justin Chou",
                title: "Former Junior Class Teacher",
                description:
                  "Canadian Computing Competition (CCC) Junior Division Distinction",
                image: justinChou,
              },
              {
                name: "Elizabeth Soboleva",
                title: "Former Junior Class Teacher",
                image: elizabethSoboleva,
              },
            ]}
          />
          <div className="mt-8 lg:mt-16 mb-4 text-3xl lg:text-4xl xl:text-5xl text-center font-bold">
            Québec
          </div>
          <div className="gap-4 py-4 mb-8 hidden sm:flex justify-center">
            <SpotlightCard className="flex flex-col mx-2 w-64 lg:w-72 items-center p-4 border-gray-400 shadow-gray-500 shadow-lg bg-slate-700/10 flex-shrink-0 h-full select-none">
              <div className="text-center text-2xl font-semibold mb-4">
                Zongqiao Zhou
              </div>
              <img
                src={zongqiaoZhou}
                alt="Zongqiao Zhou "
                className="rounded-lg w-40 lg:w-48"
              />
              <div className="text-center text-md lg:text-lg font-medium mt-2">
                Junior Teacher
              </div>
            </SpotlightCard>
            <SpotlightCard className="flex flex-col mx-2 w-64 lg:w-72 items-center p-4 border-gray-400 shadow-gray-500 shadow-lg bg-slate-700/10 flex-shrink-0 h-full select-none">
              <div className="text-center text-2xl font-semibold mb-4">
                Weizhong Xia
              </div>
              <img
                src={weizhongXia}
                alt="Weizhong Xia "
                className="rounded-lg w-40 lg:w-48"
              />
              <div className="text-center text-md lg:text-lg font-medium mt-2">
                Junior Teacher
              </div>
            </SpotlightCard>
          </div>{" "}
          <div className="sm:hidden">
            <EmblaCarousel
              slides={[
                {
                  name: "Zongqiao Zhou",
                  title: "Junior Class Teacher",
                  image: zongqiaoZhou,
                },
                {
                  name: "Weizhong Xia",
                  title: "Junior Class Teacher",
                  image: weizhongXia,
                },
              ]}
            />{" "}
          </div>
          <div className="mt-8 mb-4 text-3xl lg:text-4xl xl:text-5xl text-center font-bold">
            British Columbia
          </div>
          <div className="p-4 flex justify-center">
            <SpotlightCard className="flex flex-col mx-2 w-64 lg:w-72 items-center p-4 border-gray-400 shadow-gray-500 shadow-lg bg-slate-700/10 flex-shrink-0 h-full select-none">
              <div className="text-center text-2xl font-semibold mb-4">
                Evelyn Dam
              </div>
              <img
                src={evelynDam}
                alt="Evelyn Dam "
                className="rounded-lg w-40 lg:w-48"
              />
              <div className="text-center text-md lg:text-lg font-medium mt-2">
                Junior Teacher
              </div>
            </SpotlightCard>
          </div>
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
