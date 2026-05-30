import type { Course } from "../types/course";
import { TAGS_DB } from "./tags";

const formLink =
  import.meta.env.VITE_SIGNUP_FORM_URL ?? "https://forms.gle/z4gHCejRmEgFsJ3C8";

export const COURSES_DB: Course[] = [
  {
    id: "junior-python",
    title: "Junior Python Classes",
    description:
      "A fun and gentle introduction to text-based programming. Students will master variables, loops, and basic logic while building text games and simple graphics.",
    link: formLink,
    image: "",

    tags: [TAGS_DB.Beginner, TAGS_DB.Programming, TAGS_DB.STEM],

    totalSessions: 12,
    currentSession: 1,

    startDate: "Feb 6, 2026",
    endDate: "Mar 27, 2026",

    instructors: ["ethan-guan"],

    courseWeekDay: "Friday",
    courseTimeStart: "4:00 PM",
    courseTimeEnd: "5:30 PM",
    reccursEvery: "Weekly",
  },

  {
    id: "intermediate-contest-prep",
    title: "Intermediate Class – Basic Coding Contest Prep (Python/Java)",
    description:
      "Transition from casual coding to competitive problem-solving. Covers foundational algorithms, basic data structures, and strategies for junior-level coding competitions.",
    link: formLink,
    image: "",

    tags: [TAGS_DB.Intermediate, TAGS_DB.Programming, TAGS_DB.Competition],

    totalSessions: 12,
    currentSession: 1,

    startDate: "Feb 7, 2026",
    endDate: "Apr 11, 2026",

    instructors: ["eric-wang", "justin-wu"],

    courseWeekDay: "Saturday",
    courseTimeStart: "10:00 AM",
    courseTimeEnd: "12:00 PM",
    reccursEvery: "Weekly",
  },

  {
    id: "senior-contest-prep",
    title: "Senior Class – Advanced Coding Contest Prep (Python/Java/C++)",
    description:
      "Rigorous preparation for senior competitive programming contests. Focuses on advanced data structures, dynamic programming, graph theory, and optimization techniques.",
    link: formLink,
    image: "",

    tags: [TAGS_DB.Advanced, TAGS_DB.Programming, TAGS_DB.Competition],

    totalSessions: 12,
    currentSession: 1,

    startDate: "Feb 7, 2026",
    endDate: "Apr 25, 2026",

    instructors: ["ethan-guan", "justin-wu"],

    courseWeekDay: "Saturday",
    courseTimeStart: "1:00 PM",
    courseTimeEnd: "3:30 PM",
    reccursEvery: "Weekly",
  },

  {
    id: "intro-web-dev",
    title: "Web Dev Class – Intro to Web Development (HTML/CSS/JS)",
    description:
      "Build your own piece of the internet! Learn how to structure web pages with HTML, style them beautifully with CSS, and add interactive features using JavaScript.",
    link: formLink,
    image: "",

    tags: [TAGS_DB.Beginner, TAGS_DB.Programming, TAGS_DB["Project-Based"]],

    totalSessions: 12,
    currentSession: 1,

    startDate: "Feb 12, 2026",
    endDate: "Mar 29, 2026",

    instructors: ["patrick-zhang"],

    courseWeekDay: "Sunday",
    courseTimeStart: "2:00 PM",
    courseTimeEnd: "4:00 PM",
    reccursEvery: "Weekly",
  },
];
