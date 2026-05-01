import type { Question } from "./question";

export interface Page {
  page_number: number;
  header?: string;

  questions: Question[];
}
