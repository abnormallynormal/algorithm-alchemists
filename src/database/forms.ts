import type { Form } from "../types/form/form";

export const FORMS: Form[] = [
  {
    id: "form_feedback_001",
    title: "Course Feedback",
    description: "Tell us what you think about the course.",
    courseId: "course_101",

    slug: "feedback_001",

    pages: [
      {
        page_number: 1,
        header: "Your Experience",
        questions: [
          {
            type: "select",
            question: "Which resources did you use during the course?",
            placeholder: "",
            lines: 1,
            choices: [
              "Interactive Notebooks",
              "Video Tutorials",
              "API Documentation",
              "Sandbox Environment",
            ],
            other: true,
          },
          {
            type: "long-answer",
            question: "What did you enjoy most about the course?",
            placeholder: "Write your thoughts...",
            lines: 5,
            characterLimit: 500,
          },
        ],
      },

      {
        page_number: 2,
        header: "Improvement",
        questions: [
          {
            type: "long-answer",
            question: "What could be improved?",
            placeholder: "Be honest — we appreciate it!",
            lines: 5,
            wordLimit: 120,
          },
        ],
      },
    ],
  },
];
