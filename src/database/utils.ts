import { FORMS } from "./forms";
import type { Form } from "../types/form/form";
import type { TutorProfile } from "../types/tutorProfile";
import { TUTORS_DB } from "./tutorProfiles";

/**
 * Returns a tutor by ID
 * Throws an error if not found (safer for debugging)
 */
export function getTutorById(id: string): TutorProfile {
  const tutor = TUTORS_DB.find((t) => t.id === id);

  if (!tutor) {
    throw new Error(`Tutor with id "${id}" not found`);
  }

  return tutor;
}

export function getFormById(id: string): Form {
  const form = FORMS.find((t) => t.id === id);

  if (!form) {
    throw new Error(`Form with id "${id}" not found`);
  }

  return form;
}

export function getFormBySlug(slug: string): Form {
  const form = FORMS.find((t) => t.slug === slug);

  if (!form) {
    throw new Error(`Form with slug "${slug}" not found`);
  }

  return form;
}
