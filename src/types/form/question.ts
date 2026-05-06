export type QuestionType = "select" | "long-answer";

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  placeholder: string;

  optional: boolean;

  wordLimit?: number;
  characterLimit?: number;

  lines: number;

  choices?: string[];
  other?: boolean;
}
