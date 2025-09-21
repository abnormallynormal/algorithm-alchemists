"use client";
import { motion, easeOut } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import fivestars from "../assets/5_stars.svg.png";

export default function Reviews() {
  const reviews = [
    {
      name: "Kenneth Lock",
      role: "Student",
      review:
        "I took the junior class for learning Python. The teachers were very smart, helpful, and kind, and I learned a lot even without prior coding experience. I liked the quick homework feedback since I could fix mistakes ASAP. The program made me interested in programming, and I plan to continue with competitive programming classes 😛",
    },
    {
      name: "Emily Ng",
      role: "Parent",
      review:
        "I'm very happy with the quality of education here. The teachers are great at helping my grade 2 child when they're confused. They explain things with simple comparisons. Well-spoken and very patient. Thank you for your hard work.",
    },
    {
      name: "Jonathan Chen",
      role: "Student",
      review:
        "I took the competitive programming class and got distinction for the 2024 junior and 2025 senior CCC. I always asked for extra help for homework, and the teachers were super helpful in answering questions. Even my parents are encouraging me to take more classes to prepare for the next CCC. Thanks a lot.",
    },
  ];

  // Framer Motion variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2, // delay between each review
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <div className="px-8 lg:px-16 xl:px-24 pt-12 lg:pt-18">
      <motion.div 
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
      >
        <div className="font-bold text-4xl lg:text-5xl xl:text-6xl text-center mb-8">Reviews</div>
      </motion.div>

      <motion.div
        className="grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-2 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {reviews.map((review, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <SpotlightCard className="justify-center border-white shadow-gray-500 shadow-lg bg-slate-700/10">
              <div className="text-lg lg:text-xl xl:text-2xl mb-4 text-center font-bold">
                {review.name}
              </div>
              <div className="text-center text-sm lg:text-md xl:text-lg font-semibold mb-2">
                {review.role}
              </div>
              <div className="flex justify-center ">
                <img src={fivestars} alt="5 stars" className="h-6 mb-4" />
              </div>
              <div className="text-center text-sm lg:text-md xl:text-lg font-light">
                "{review.review}"
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
