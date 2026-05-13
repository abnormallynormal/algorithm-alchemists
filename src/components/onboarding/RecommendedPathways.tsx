// app/onboarding/recommendations/page.tsx
import { useMemo } from "react";
import { motion } from "framer-motion";
import { RecommendationGrid } from "./RecommendationGrid";
import { FinalActions } from "./FinalActions";
import { useOnboardingAnswersStore } from "../../stores/onboardingAnswersStore";
import { buildRecommendationsFromAnswers } from "../../lib/onboardingCourseRecommendations";

export default function RecommendationPathways() {
  const answers = useOnboardingAnswersStore((s) => s.answers);
  const recommendations = useMemo(
    () => buildRecommendationsFromAnswers(answers),
    [answers],
  );
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center pt-36 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 0.7,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mb-20 max-w-3xl text-center"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mb-4 text-5xl font-bold tracking-tight"
        >
          Your Learning Path is Ready
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.35,
          }}
          className="text-lg text-on-surface-variant"
        >
          Based on your goals, we&apos;ve curated these starter pathways to
          begin your coding journey.
        </motion.p>
      </motion.div>

      <RecommendationGrid items={recommendations} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.9,
        }}
      >
        <FinalActions />
      </motion.div>
    </div>
  );
}
