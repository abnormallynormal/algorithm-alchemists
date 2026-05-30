import type { Course } from "../../types/course";
import logo from "../../../public/favicon.png";
import MinimizedTutorProfile from "./MinimizedTutorProfile";

interface CourseCardProp {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProp) {
  return (
    <div className="relative group bg-[#16122B] rounded-xl border-t border-white/10 overflow-hidden transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
      {/* IMAGE */}
      <div className="h-48 w-full overflow-hidden relative z-0">
        {course.image ? (
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 absolute inset-0 z-0"
            src={course.image}
          />
        ) : (
          <img
            src={logo}
            alt="Algorithm Alchemists"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 absolute inset-0 z-0"
          />
        )}

        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all"></div>

        {/* TAGS */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {course.tags?.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-pink-500/15 text-pink-400 text-[10px] font-bold uppercase tracking-widest rounded-full backdrop-blur-md border border-pink-500/20"
              style={{
                color: tag.textColor,
                backgroundColor: tag.backgroundColor,
              }}
            >
              {tag.title}
            </span>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-white text-h3 font-h3 mb-2 line-clamp-2 min-h-[4rem]">
          {course.title}
        </h3>
        <div className="relative mb-3">
          <p className="text-[#9CA3AF] text-sm line-clamp-3">
            {course.description}
          </p>

          {/* <div className="pointer-events-none absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-[#16122B] to-transparent"></div> */}
        </div>

        {/* SCHEDULE INFO */}
        {/* <div className="text-xs text-slate-400 mb-4 space-y-2">
          DAY + TIME
          <div>
            <span className="text-slate-300 font-medium">Schedule:</span>{" "}
            {course.reccursEvery} {course.courseWeekDay},{" "}
            {course.courseTimeStart} – {course.courseTimeEnd}
          </div>

          DATES
          <div className="pt-2">
            <div>
              <span className="text-slate-300 font-medium">Start:</span>{" "}
              {course.startDate}
            </div>

            <div>
              <span className="text-slate-300 font-medium">End:</span>{" "}
              {course.endDate}
            </div>
          </div>
        </div> */}

        {/* INSTRUCTORS */}
        <div className="text-xs text-slate-400 pt-4 flex items-center gap-3 mb-6 flex-wrap">
          Instructors:{" "}
          {course.instructors.map((i, index) => (
            <div key={index} className="flex items-center">
              <MinimizedTutorProfile id={i} />
            </div>
          ))}
        </div>
      </div>
      {/* BUTTON */}
      <a
        href={course.link}
        target="_blank"
        className="absolute bottom-0 block bg-[#2563EB] text-white py-2.5 w-full text-center rounded-lg text-sm font-semibold transition-all hover:bg-blue-600"
      >
        Enroll
      </a>
    </div>
  );
}
