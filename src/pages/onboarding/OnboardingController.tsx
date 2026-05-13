import { useEffect, useState } from "react";
import { onboardingSteps } from "./onboardingSteps";
import OnboardingStep from "../../components/onboarding/SimpleQuestionaire";
import BetterFooter from "../../components/Footer";
import { Nav } from "../../components/courses/CoursesTopNav";
import RecommendationPathways from "../../components/onboarding/RecommendedPathways";
import { useOnboardingAnswersStore } from "../../stores/onboardingAnswersStore";

export default function OnboardingController() {
  const [stepId, setStepId] = useState("role_selection");
  const resetAnswers = useOnboardingAnswersStore((s) => s.reset);

  useEffect(() => {
    resetAnswers();
  }, [resetAnswers]);

  const step = onboardingSteps[stepId];
  return (
    <>
      <Nav />

      {step.pageNumber !== step.totalSteps || step.totalSteps === 0 ? (
        <OnboardingStep
          pageNumber={step.pageNumber}
          totalSteps={step.totalSteps}
          title={step.title}
          subtitle={step.subtitle}
          options={step.options}
          onSelectOption={(opt) => {
            if (typeof opt.id === "string") {
              useOnboardingAnswersStore.getState().setAnswer(stepId, opt.id);
            }
            const next =
              typeof step.next === "object" && step.next !== null
                ? step.next[opt.id]
                : step.next;
            if (typeof next === "string") setStepId(next);
          }}
          onPrevious={() => setStepId(step.previous)}
          displayPrevious={step.previous}
        />
      ) : (
        <RecommendationPathways />
      )}

      <BetterFooter />
    </>
  );
}
