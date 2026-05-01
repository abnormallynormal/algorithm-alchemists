import type { Course } from "../types/course";
import { TAGS_DB } from "./tags";

export const COURSES_DB: Course[] = [
  {
    id: "robotics-101",
    title: "Introduction to Robotics",
    description:
      "Learn the basics of robotics by building LEGO robots and understanding sensors, motors, and movement.",
    link: "https://example.com/robotics-101",
    image: "",

    tags: [TAGS_DB.Beginner, TAGS_DB.Robotics, TAGS_DB.STEM],

    totalSessions: 8,
    currentSession: 1,

    startDate: "Feb 3, 2026",
    endDate: "Mar 24, 2026",

    instructors: ["ethan-guan", "justin-wu"],

    courseWeekDay: "Monday",
    courseTimeStart: "4:00 PM",
    courseTimeEnd: "6:00 PM",
    reccursEvery: "Weekly",
  },

  {
    id: "coding-basics",
    title: "Coding Fundamentals with Scratch",
    description:
      "Learn programming logic by building games, animations, and interactive stories using Scratch.",
    link: "https://example.com/coding-basics",
    image: "",

    tags: [TAGS_DB.Beginner, TAGS_DB.Programming, TAGS_DB["Project-Based"]],

    totalSessions: 8,
    currentSession: 2,

    startDate: "Feb 4, 2026",
    endDate: "Mar 25, 2026",

    instructors: ["patrick-zhang"],

    courseWeekDay: "Tuesday",
    courseTimeStart: "5:00 PM",
    courseTimeEnd: "6:30 PM",
    reccursEvery: "Weekly",
  },

  {
    id: "ai-intro",
    title: "AI for Kids: Machine Learning Basics",
    description:
      "Explore artificial intelligence through interactive tools and simple machine learning models.",
    link: "https://example.com/ai-intro",
    image: "",

    tags: [TAGS_DB.Intermediate, TAGS_DB.AI, TAGS_DB.STEM],

    totalSessions: 8,
    currentSession: 3,

    startDate: "Feb 5, 2026",
    endDate: "Mar 26, 2026",

    instructors: ["eric-wang", "patrick-zhang"],

    courseWeekDay: "Wednesday",
    courseTimeStart: "4:30 PM",
    courseTimeEnd: "6:00 PM",
    reccursEvery: "Weekly",
  },

  {
    id: "advanced-robotics",
    title: "Advanced Robotics Challenge",
    description:
      "Design, build, and program advanced LEGO robots for competition-style challenges.",
    link: "https://example.com/advanced-robotics",
    image: "",

    tags: [
      TAGS_DB.Advanced,
      TAGS_DB.Robotics,
      TAGS_DB.Competition,
      TAGS_DB["Project-Based"],
    ],

    totalSessions: 8,
    currentSession: 5,

    startDate: "Feb 6, 2026",
    endDate: "Mar 27, 2026",

    instructors: ["brian-ge"],

    courseWeekDay: "Thursday",
    courseTimeStart: "6:00 PM",
    courseTimeEnd: "8:00 PM",
    reccursEvery: "Weekly",
  },
];
