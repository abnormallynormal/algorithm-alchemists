import type { RecommendationItem } from "../components/onboarding/RecommendationGrid";
import { COURSES_DB } from "../database/courses";
import type { Course } from "../types/course";
import type { OnboardingAnswers } from "../stores/onboardingAnswersStore";

function levelFromCourse(
  course: Course,
): "Beginner" | "Intermediate" | "Advanced" {
  const titles = course.tags?.map((t) => t.title) ?? [];
  if (titles.includes("Advanced")) return "Advanced";
  if (titles.includes("Intermediate")) return "Intermediate";
  return "Beginner";
}

function metaForCourse(course: Course): Pick<
  RecommendationItem,
  "badge" | "badgeColor" | "icon"
> {
  const level = levelFromCourse(course);
  if (level === "Advanced") {
    return {
      badge: "ADVANCED",
      badgeColor: "tertiary",
      icon: "rocket_launch",
    };
  }
  if (level === "Intermediate") {
    return {
      badge: "INTERMEDIATE",
      badgeColor: "secondary",
      icon: "psychology",
    };
  }
  return { badge: "BEGINNER", badgeColor: "primary", icon: "auto_awesome" };
}

function scoreCourses(answers: OnboardingAnswers): Map<string, number> {
  const scores = new Map<string, number>();
  const add = (courseId: string, points: number) => {
    scores.set(courseId, (scores.get(courseId) ?? 0) + points);
  };

  const role = answers.role_selection;

  if (role === "student") {
    const goal = answers.student_goal;
    const skill = answers.student_skill;

    if (goal === "learn_from_scratch") {
      add("coding-basics", 10);
      add("robotics-101", 3);
    }
    if (goal === "build_apps") {
      add("coding-basics", 9);
      add("advanced-robotics", 5);
    }
    if (goal === "school_help") {
      add("coding-basics", 8);
      add("ai-intro", 6);
    }
    if (goal === "web_dev") {
      add("coding-basics", 7);
      add("ai-intro", 5);
    }
    if (goal === "career") {
      add("ai-intro", 8);
      add("advanced-robotics", 8);
      add("coding-basics", 3);
    }

    if (skill === "none") {
      add("coding-basics", 6);
      add("robotics-101", 4);
    }
    if (skill === "basic") {
      add("coding-basics", 5);
      add("robotics-101", 4);
      add("ai-intro", 3);
    }
    if (skill === "some") {
      add("ai-intro", 7);
      add("advanced-robotics", 6);
      add("coding-basics", 3);
    }
    if (skill === "confident") {
      add("advanced-robotics", 9);
      add("ai-intro", 8);
    }
  }

  if (role === "parent") {
    const age = answers.parent_child_profile;
    const exp = answers.parent_experience;
    const interest = answers.parent_interests;
    const pgoal = answers.parent_goal;

    if (interest === "robotics") {
      add("robotics-101", 12);
      add("advanced-robotics", 6);
    }
    if (interest === "games") {
      add("coding-basics", 12);
    }
    if (interest === "apps") {
      add("coding-basics", 8);
      add("ai-intro", 7);
    }
    if (interest === "general") {
      add("coding-basics", 7);
      add("robotics-101", 5);
    }

    if (age === "6-8" || age === "9-11") {
      add("coding-basics", 8);
      add("robotics-101", 5);
    }
    if (age === "12-14") {
      add("robotics-101", 6);
      add("ai-intro", 6);
      add("coding-basics", 4);
    }
    if (age === "15+") {
      add("advanced-robotics", 8);
      add("ai-intro", 8);
    }

    if (exp === "none") {
      add("coding-basics", 6);
    }
    if (exp === "basic") {
      add("coding-basics", 5);
      add("robotics-101", 3);
    }
    if (exp === "some") {
      add("ai-intro", 6);
      add("advanced-robotics", 5);
    }

    if (pgoal === "start_from_zero") {
      add("coding-basics", 8);
    }
    if (pgoal === "school_help") {
      add("coding-basics", 6);
      add("ai-intro", 5);
    }
    if (pgoal === "confidence") {
      add("coding-basics", 7);
      add("robotics-101", 4);
    }
    if (pgoal === "advanced") {
      add("advanced-robotics", 10);
      add("ai-intro", 8);
    }
  }

  return scores;
}

function courseById(id: string): Course | undefined {
  return COURSES_DB.find((c) => c.id === id);
}

/**
 * Rank courses from onboarding answers and return up to three distinct pathways.
 */
export function buildRecommendationsFromAnswers(
  answers: OnboardingAnswers,
): RecommendationItem[] {
  const scores = scoreCourses(answers);
  const rankedIds = [...scores.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([id]) => id);

  const uniqueCourses: Course[] = [];
  const seen = new Set<string>();
  for (const id of rankedIds) {
    const course = courseById(id);
    if (course && !seen.has(course.id)) {
      seen.add(course.id);
      uniqueCourses.push(course);
    }
    if (uniqueCourses.length >= 3) break;
  }

  for (const course of COURSES_DB) {
    if (uniqueCourses.length >= 3) break;
    if (!seen.has(course.id)) {
      seen.add(course.id);
      uniqueCourses.push(course);
    }
  }

  return uniqueCourses.slice(0, 3).map((course) => ({
    course,
    ...metaForCourse(course),
  }));
}
