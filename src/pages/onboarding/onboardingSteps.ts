import type { OnboardingSteps } from "../../types/onboarding";

export const onboardingSteps: OnboardingSteps = {
  // ======================
  // 1. ROLE SELECTION
  // ======================
  role_selection: {
    pageNumber: 1,
    totalSteps: 6,
    title: "Who is learning to code?",
    subtitle: "Choose the path that fits your journey.",
    options: [
      {
        id: "student",
        title: "Student",
        description: "I want to take coding classes",
        icon: "school",
      },
      {
        id: "parent",
        title: "Parent",
        description: "I’m enrolling my child",
        icon: "family_restroom",
      },
    ],
    next: {
      student: "student_goal",
      parent: "parent_child_profile",
    },
    previous: undefined,
  },

  // ======================
  // STUDENT FLOW
  // ======================

  student_goal: {
    pageNumber: 2,
    totalSteps: 6,
    role: "student",
    title: "What do you want to build or achieve?",
    subtitle: "We’ll recommend the best learning path based on your goal.",
    options: [
      {
        id: "learn_from_scratch",
        title: "Learn programming from scratch",
        icon: "auto_awesome",
      },
      {
        id: "build_apps",
        title: "Build games or apps",
        icon: "sports_esports",
      },
      { id: "school_help", title: "Improve school CS grades", icon: "school" },
      { id: "web_dev", title: "Learn web development", icon: "language" },
      { id: "career", title: "Future CS career prep", icon: "work" },
    ],
    next: "student_skill",
    previous: "role_selection",
  },

  student_skill: {
    pageNumber: 3,
    totalSteps: 6,
    role: "student",
    title: "How much coding experience do you have?",
    subtitle: "This helps us adjust difficulty.",
    options: [
      { id: "none", title: "No experience", icon: "block" },
      { id: "basic", title: "Basic (tutorials / school)", icon: "school" },
      { id: "some", title: "Some projects", icon: "build" },
      { id: "confident", title: "Confident programmer", icon: "terminal" },
    ],
    next: "student_recommendation",
    previous: "student_goal",
  },

  student_recommendation: {
    pageNumber: 4,
    totalSteps: 6,
    role: "student",
    type: "recommendation",
    title: "Recommended for you",
    subtitle: "Based on your goals and experience",
    courses: [
      {
        title: "Python Foundations",
        duration: "4–6 weeks",
        description: "Build small games + scripts",
      },
      {
        title: "Intro to Game Development",
        duration: "5 weeks",
        description: "Fun project-based learning",
      },
      {
        title: "Web Development Basics",
        duration: "6 weeks",
        description: "HTML, CSS, JavaScript",
      },
    ],
    next: "student_preview",
    previous: "student_skill",
  },

  student_preview: {
    pageNumber: 5,
    totalSteps: 6,
    role: "student",
    title: "Try your first lesson",
    subtitle: "Write your first program in under 5 minutes.",
    cta: "Start free lesson",
    next: "student_signup",
    previous: "student_recommendation",
  },

  student_signup: {
    pageNumber: 6,
    totalSteps: 6,
    role: "student",
    title: "Create your account",
    subtitle: "Save progress and track your learning journey.",
    previous: "student_preview",
  },

  // ======================
  // PARENT FLOW
  // ======================

  parent_child_profile: {
    pageNumber: 2,
    totalSteps: 6,
    role: "parent",
    title: "How old is your child?",
    subtitle: "This helps us match the right difficulty level.",

    options: [
      { id: "6-8", title: "6–8 years", icon: "child_care" },
      { id: "9-11", title: "9–11 years", icon: "school" },
      { id: "12-14", title: "12–14 years", icon: "psychology" },
      { id: "15+", title: "15+ years", icon: "terminal" },
    ],

    next: "parent_experience",
    previous: "role_selection",
  },

  parent_experience: {
    pageNumber: 3,
    totalSteps: 6,
    role: "parent",
    title: "Does your child have any coding experience?",
    subtitle: "No problem if they’re just starting out.",

    options: [
      { id: "none", title: "No experience", icon: "block" },
      {
        id: "basic",
        title: "Basic exposure (school or tutorials)",
        icon: "school",
      },
      { id: "some", title: "Has built small projects", icon: "build" },
    ],

    next: "parent_interests",
    previous: "parent_age",
  },

  parent_interests: {
    pageNumber: 4,
    totalSteps: 6,
    role: "parent",
    title: "What is your child interested in?",
    subtitle: "We’ll tailor lessons around what excites them most.",

    options: [
      { id: "games", title: "Games", icon: "sports_esports" },
      { id: "apps", title: "Apps", icon: "apps" },
      { id: "robotics", title: "Robotics", icon: "precision_manufacturing" },
      { id: "general", title: "General Tech", icon: "psychology" },
    ],

    next: "parent_goal",
    previous: "parent_experience",
  },

  parent_goal: {
    pageNumber: 5,
    totalSteps: 6,
    role: "parent",
    title: "What’s your goal?",
    subtitle: "What do you want your child to achieve?",
    options: [
      {
        id: "start_from_zero",
        title: "Start coding from zero",
        icon: "auto_awesome",
      },
      {
        id: "school_help",
        title: "Improve school performance",
        icon: "school",
      },
      {
        id: "confidence",
        title: "Build confidence with tech",
        icon: "psychology",
      },
      { id: "advanced", title: "Advanced CS learning", icon: "rocket_launch" },
    ],
    next: "parent_paths",
    previous: "parent_child_profile",
  },

  parent_paths: {
    pageNumber: 6,
    totalSteps: 6,
    role: "parent",
    title: "Structured learning paths",
    subtitle: "Choose a guided curriculum",
    paths: [
      {
        title: "Beginner Coding Path",
        duration: "8 weeks",
        outcome: "Build 3 games",
      },
      {
        title: "Creative Coding & Games",
        duration: "10 weeks",
        outcome: "Interactive projects",
      },
      {
        title: "Advanced Programming Track",
        duration: "12 weeks",
        outcome: "Real-world apps",
      },
    ],
    next: "parent_preview",
    previous: "parent_goal",
  },
};
