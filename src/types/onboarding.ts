export type Role = "student" | "parent";

export type StepType =
  | "options"
  | "recommendation"
  | "preview"
  | "signup"
  | "form"
  | "paths";

export type StepNext = string | Record<string, string>;

export interface Option {
  id: string;
  title: string;
  description?: string;
  icon: string;
}

export interface Course {
  title: string;
  duration: string;
  description: string;
}

export interface Path {
  title: string;
  duration: string;
  outcome: string;
}

export interface OnboardingStep {
  pageNumber: number;
  totalSteps: number;

  role?: Role;
  type?: StepType;

  title: string;
  subtitle?: string;

  // content variants
  options?: Option[];
  courses?: Course[];
  paths?: Path[];
  fields?: string[];

  // navigation
  next?: StepNext;
  previous?: string; // 👈 added

  // optional CTA for preview steps
  cta?: string;
}

export type OnboardingSteps = Record<string, OnboardingStep>;
