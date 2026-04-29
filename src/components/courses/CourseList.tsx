import type { Course } from "../../types/course";
import CourseCard from "./CourseCard";
import { Nav } from "./CoursesTopNav";

interface CourseListProp {
  courses: Course[];
}

export default function CourseList({ courses }: CourseListProp) {
  return (
    <>
      <Nav />
      <main className="pt-32 px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <header className="mb-12">
            <h1 className="font-h1 text-h1 text-on-surface mb-4">
              Explore Courses
            </h1>
            <p className="font-body-lg text-body-lg text-slate-400 max-w-2xl">
              Unlock your{" "}
              <span className="text-[#E577A8] font-semibold">creativity</span>{" "}
              with hands-on learning through our specialized alchemical
              laboratories.
            </p>
          </header>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/5">
            <div className="flex gap-2 p-1 bg-surface-container-low rounded-xl">
              <button className="px-5 py-2 rounded-lg bg-secondary text-on-secondary text-sm font-medium">
                All
              </button>
              <button className="px-5 py-2 rounded-lg text-slate-400 hover:text-white text-sm font-medium transition-colors">
                AI
              </button>
              <button className="px-5 py-2 rounded-lg text-slate-400 hover:text-white text-sm font-medium transition-colors">
                Web
              </button>
              <button className="px-5 py-2 rounded-lg text-slate-400 hover:text-white text-sm font-medium transition-colors">
                Data
              </button>
            </div>
            <div className="flex items-center gap-3 text-slate-400 text-sm">
              <span className="material-symbols-outlined" data-icon="sort">
                sort
              </span>
              <span>
                Sort by: <span className="text-white">Newest First</span>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
            {courses.map((course) => (
              <CourseCard course={course} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
