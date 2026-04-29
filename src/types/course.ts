import type { ReactNode } from "react";

export interface Tag {
  title: string;
  textColor: string;

  backgroundColor: string;
}

export interface TutorProfile {
  firstName: string;
  lastName: string;

  preferredName?: string;

  avatar?: string;
}

export interface Course {
  id: string;

  title: string;
  description: string;
  link: string;
  image: string;

  tags?: Tag[];

  instructors: TutorProfile[] | string[];
}
