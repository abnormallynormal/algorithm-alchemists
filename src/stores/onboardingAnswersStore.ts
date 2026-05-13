import { create } from "zustand";

export type OnboardingAnswers = Record<string, string>;

type OnboardingAnswersState = {
  answers: OnboardingAnswers;
  setAnswer: (stepId: string, optionId: string) => void;
  reset: () => void;
};

export const useOnboardingAnswersStore = create<OnboardingAnswersState>(
  (set) => ({
    answers: {},
    setAnswer: (stepId, optionId) =>
      set((s) => ({
        answers: { ...s.answers, [stepId]: optionId },
      })),
    reset: () => set({ answers: {} }),
  }),
);
