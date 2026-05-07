import { OnboardingStepWrapper } from "../../pages/onboarding/OnboardingStepWrapper";
import OptionCard from "./QuestionaireOption";
import { motion } from "framer-motion";

function ProgressBar({ pageNumber = 1, total = 3 }) {
  return (
    <div className="mb-12 flex justify-center items-center gap-3">
      {Array.from({ length: total }).map((_, i) => {
        const active = i < pageNumber;

        return (
          <div
            key={i}
            className="h-1 w-16 rounded-full bg-surface-container-highest overflow-hidden"
          >
            <motion.div
              className="h-full rounded-full bg-primary-container"
              initial={false}
              animate={{
                width: active ? "100%" : "0%",
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export default function OnboardingStep({
  pageNumber = 1,
  totalSteps = 3,
  title = "What is your primary goal for joining the Lab?",
  subtitle = "Select the path that best describes your intent. We’ll tailor your learning journey accordingly.",
  stepLabel = "Onboarding Step",
  options = [],
  onSelectOption,
  onPrevious,
  displayPrevious,
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-on-background px-6 py-12">
      <div className="max-w-3xl w-full">
        {/* Progress */}
        {pageNumber !== 0 && (
          <ProgressBar pageNumber={pageNumber} total={totalSteps} />
        )}

        {/* Card */}
        <OnboardingStepWrapper stepId={title}>
          <div className="glass-card rounded-2xl p-8 md:p-12 gradient-border-top shadow-2xl">
            {/* Header */}
            <div className="text-center mb-10">
              <span className="font-label-caps text-primary tracking-widest uppercase block mb-4">
                {stepLabel} {pageNumber}
              </span>

              <h1 className="font-h2 text-white mb-4">{title}</h1>

              <p className="text-on-surface-variant max-w-lg mx-auto">
                {subtitle}
              </p>
            </div>

            {/* Options */}
            <motion.div variants={container} initial="hidden" animate="show">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {options.map((opt) => (
                  <OptionCard
                    key={opt.title}
                    option={opt}
                    onSelect={onSelectOption}
                  />
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4 border-t border-white/5 pt-8">
              {displayPrevious && (
                <button
                  onClick={onPrevious}
                  className="w-full sm:w-auto px-8 py-3 rounded-xl border border-outline/30 text-on-surface-variant font-medium hover:bg-white/5 transition-all active:scale-95"
                >
                  Go Back
                </button>
              )}
            </div>
          </div>
        </OnboardingStepWrapper>
      </div>
    </main>
  );
}
