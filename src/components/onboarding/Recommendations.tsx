// components/onboarding/recommendation-card.tsx
import { motion } from "framer-motion";
import type { Course } from "../../types/course";

interface Props {
  index: number;
  course: Course;
  badge: string;
  badgeColor: "primary" | "secondary" | "tertiary";
  icon: string;
}

const colorClasses = {
  primary: {
    text: "text-primary",
    border: "border-primary/20",
    hover: "hover:bg-primary hover:text-on-primary",
    glow: "hover:shadow-[0_0_40px_rgba(255,176,207,0.12)]",
  },
  secondary: {
    text: "text-secondary",
    border: "border-secondary/20",
    hover: "hover:bg-secondary hover:text-on-secondary",
    glow: "hover:shadow-[0_0_40px_rgba(180,197,255,0.12)]",
  },
  tertiary: {
    text: "text-tertiary",
    border: "border-tertiary/20",
    hover: "hover:bg-tertiary hover:text-on-tertiary",
    glow: "hover:shadow-[0_0_40px_rgba(201,195,221,0.12)]",
  },
};

// 1. Destructure the 'index' prop here
export function RecommendationCard({
  index,
  course,
  badge,
  badgeColor,
  icon,
}: Props) {
  const colors = colorClasses[badgeColor];

  return (
    <motion.div
      // 2. Add initial and animate (or whileInView) triggers
      initial="hidden"
      animate="show"
      // If you only want it to animate when scrolled into view, replace `animate="show"` with:
      // whileInView="show"
      // viewport={{ once: true, margin: "0px 0px -50px 0px" }}

      variants={{
        hidden: {
          opacity: 0,
          y: 120,
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.77,
            delay: index * 0.25, // 3. Use the index to stagger the animation
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      whileHover={{
        y: -8,
        transition: {
          duration: 0.25,
        },
      }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[rgba(22,18,43,0.72)] p-6 backdrop-blur-xl transition-shadow duration-300 ${colors.glow}`}
    >
      {/* Animated glow orb */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
        className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl"
      />

      {/* Image */}
      <div className="relative mb-6 h-40 overflow-hidden rounded-xl bg-surface-container-low">
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6 }}
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover opacity-80"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      </div>

      {/* Badge */}
      <div className="mb-4 flex items-center gap-2">
        <motion.span
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.4,
          }}
          className={`material-symbols-outlined text-[20px] ${colors.text}`}
          style={{
            fontVariationSettings: "'FILL' 1",
          }}
        >
          {icon}
        </motion.span>

        <span
          className={`text-xs font-semibold uppercase tracking-[0.12em] ${colors.text}`}
        >
          {badge}
        </span>
      </div>

      {/* Title */}
      <h3 className="mb-2 text-2xl font-semibold text-on-surface">
        {course.title}
      </h3>

      {/* Description */}
      <p className="mb-6 text-on-surface-variant">{course.description}</p>

      {/* Meta */}
      <div className="mb-8 space-y-1 text-sm text-on-surface-variant">
        <p>
          Session {course.currentSession} / {course.totalSessions}
        </p>

        <p>
          {course.courseWeekDay} • {course.courseTimeStart} —{" "}
          {course.courseTimeEnd}
        </p>

        <p>
          {course.startDate} → {course.endDate}
        </p>
      </div>

      {/* CTA */}
      <motion.button
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.02 }}
        className={`w-full rounded-xl border bg-surface-container-highest py-3 font-semibold transition-all duration-300 ${colors.text} ${colors.border} ${colors.hover}`}
      >
        <a href={course.link} target="_blank" className="text-slate-300">
          Start Learning
        </a>
      </motion.button>
    </motion.div>
  );
}
