import { useState } from "react";
import { onboardingSteps } from "./onboardingSteps";
import OnboardingStep from "../../components/onboarding/SimpleQuestionaire";
import BetterFooter from "../../components/Footer";
import { Nav } from "../../components/courses/CoursesTopNav";
import RecommendationsPage from "../../components/onboarding/RecommendedPathways";
import type { RecommendationItem } from "../../components/onboarding/RecommendationGrid";
import { COURSES_DB } from "../../database/courses";

const recommendations: RecommendationItem[] = [
  {
    course: COURSES_DB[0],
    badge: "BEGINNER",
    badgeColor: "primary" as const,
    icon: "auto_awesome",
  },
  {
    course: COURSES_DB[0],
    badge: "BEGINNER",
    badgeColor: "primary" as const,
    icon: "auto_awesome",
  },
  {
    course: COURSES_DB[0],
    badge: "BEGINNER",
    badgeColor: "primary" as const,
    icon: "auto_awesome",
  },
];

export default function OnboardingController() {
  const [stepId, setStepId] = useState("role_selection");

  const step = onboardingSteps[stepId];
  return (
    <>
      <Nav />

      <div className="pt-24" />
      {step.pageNumber !== step.totalSteps || step.totalSteps === 0 ? (
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
      ) : (
        <RecommendationsPage recommendations={recommendations} />
      )}

      <BetterFooter />
    </>
  );
}
