import type { Tag } from "./tag";

export type WEEKDAYS =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export interface Course {
  id: string;

  title: string;
  description: string;
  link: string;
  image: string;

  tags?: Tag[];

  instructors: string[]; // tutor ids

  currentSession: number;
  totalSessions: number;

  startDate: string;
  endDate: string;

  courseWeekDay: WEEKDAYS;
  courseTimeStart: string;
  courseTimeEnd: string;
  reccursEvery: string;
}
