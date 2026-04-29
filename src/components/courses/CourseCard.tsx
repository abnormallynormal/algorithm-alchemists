import type { Course } from "../../types/course";
import MinimizedTutorProfile from "./MinimizedTutorProfile";

interface CourseCardProp {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProp) {
  return (
    <div className="group bg-[#16122B] rounded-xl border-t border-white/10 overflow-hidden transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
      <div className="h-48 w-full overflow-hidden relative z-0">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 absolute inset-0 z-0"
          data-alt="Digital code abstraction with magenta and purple gradients highlighting web architecture lines"
          src={course.image}
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all"></div>
        <div className="absolute top-4 left-4 flex gap-2">
          {/* {course.tags.map((t) => t)} */}
          {/* <span className="px-3 py-1 bg-pink-500/15 text-pink-400 text-[10px] font-bold uppercase tracking-widest rounded-full backdrop-blur-md border border-pink-500/20">
            {course.title}
          </span> */}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-white text-h3 font-h3 mb-2">{course.title}</h3>
        <p className="text-[#9CA3AF] text-sm mb-4 line-clamp-2">
          {course.description}
        </p>
        <div className="flex items-center gap-3 mb-6">
          {course.instructors.map((i, index) => (
            <>
              <MinimizedTutorProfile profile={i} />{" "}
            </>
          ))}
        </div>
        <a
          href={course.link}
          className="block bg-[#2563EB] text-white py-2.5 w-full text-center rounded-lg text-sm font-semibold transition-all"
        >
          Start Course
        </a>
      </div>
    </div>
  );
}
