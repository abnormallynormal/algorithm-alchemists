import type { Tag } from "../types/course";

export const TAGS_DB: Record<string, Tag> = {
  Beginner: {
    title: "Beginner",
    textColor: "#F472B6",
    backgroundColor: "rgba(244, 114, 182, 0.15)",
  },

  Intermediate: {
    title: "Intermediate",
    textColor: "#60A5FA",
    backgroundColor: "rgba(96, 165, 250, 0.15)",
  },

  Advanced: {
    title: "Advanced",
    textColor: "#A78BFA",
    backgroundColor: "rgba(167, 139, 250, 0.15)",
  },

  Robotics: {
    title: "Robotics",
    textColor: "#34D399",
    backgroundColor: "rgba(52, 211, 153, 0.15)",
  },

  Programming: {
    title: "Programming",
    textColor: "#FBBF24",
    backgroundColor: "rgba(251, 191, 36, 0.15)",
  },

  AI: {
    title: "AI",
    textColor: "#22D3EE",
    backgroundColor: "rgba(34, 211, 238, 0.15)",
  },

  STEM: {
    title: "STEM",
    textColor: "#FB7185",
    backgroundColor: "rgba(251, 113, 133, 0.15)",
  },

  "Project-Based": {
    title: "Project-Based",
    textColor: "#F97316",
    backgroundColor: "rgba(249, 115, 22, 0.15)",
  },

  Competition: {
    title: "Competition",
    textColor: "#F43F5E",
    backgroundColor: "rgba(244, 63, 94, 0.15)",
  },

  HandsOn: {
    title: "Hands-On",
    textColor: "#10B981",
    backgroundColor: "rgba(16, 185, 129, 0.15)",
  },
};
