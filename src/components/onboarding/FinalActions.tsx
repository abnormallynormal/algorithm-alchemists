// components/onboarding/final-actions.tsx

import { Link } from "react-router";

export function FinalActions() {
  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-6">
      <Link
        to="/courses"
        className="w-full px-6 rounded-2xl bg-primary py-4 text-xl text-center font-bold text-on-primary shadow-[0_0_20px_rgba(255,176,207,0.3)] transition-all hover:shadow-[0_0_30px_rgba(255,176,207,0.5)] active:scale-95"
      >
        View all courses
      </Link>

      <Link
        to="/discover"
        className="border-b border-transparent text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
      >
        Review Selections
      </Link>
    </div>
  );
}
