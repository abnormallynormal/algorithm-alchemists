import { useState } from "react";
import { onboardingSteps } from "./onboardingSteps";
import OnboardingStep from "../../components/onboarding/SimpleQuestionaire";
import BetterFooter from "../../components/Footer";
import { Nav } from "../../components/courses/CoursesTopNav";

export default function OnboardingController() {
  const [stepId, setStepId] = useState("role_selection");

  const step = onboardingSteps[stepId];

  console.log(stepId);
  console.log(step);

  return (
    <>
      <Nav />

      <div className="pt-24" />
      <OnboardingStep
        pageNumber={step.pageNumber}
        totalSteps={step.totalSteps}
        title={step.title}
        subtitle={step.subtitle}
        options={step.options}
        onSelectOption={(opt) => {
          const next = step.next?.[opt.id] || step.next;
          setStepId(next);
        }}
        onPrevious={() => setStepId(step.previous)}
        displayPrevious={step.previous}
      />
      <BetterFooter />
    </>
  );
}
