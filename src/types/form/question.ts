export type QuestionType = "select" | "long-answer";

export interface Question {
  type: QuestionType;
  question: string;
  placeholder: string;

  wordLimit?: number;
  characterLimit?: number;

  lines: number;

  choices?: string[];
  other?: boolean;
}
