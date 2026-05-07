// components/onboarding/recommendation-grid.tsx
import type { Course } from "../../types/course";
import { RecommendationCard } from "./Recommendations";

export interface RecommendationItem {
  course: Course;
  badge: string;
  badgeColor: "primary" | "secondary" | "tertiary";
  icon: string;
}

interface Props {
  items: RecommendationItem[];
}

export function RecommendationGrid({ items }: Props) {
  return (
    <div className="mb-20 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
      {items.map((item, i) => (
        <RecommendationCard
          index={i}
          key={item.course.id}
          course={item.course}
          badge={item.badge}
          badgeColor={item.badgeColor}
          icon={item.icon}
        />
      ))}
    </div>
  );
}
