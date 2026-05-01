import { useEffect, useMemo, useState } from "react";
import CourseCard from "../components/courses/CourseCard";
import { Nav } from "../components/courses/CoursesTopNav";
import { COURSES_DB } from "../database/courses";
import TagDropdown from "../components/courses/TagDropdown";

export default function CourseListPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [sortBy, setSortBy] = useState<"newest" | "oldest">("oldest");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300); // adjust delay if needed

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  const courses = COURSES_DB;

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesTag =
        selectedFilter === "All" ||
        course.tags?.some((tag) => tag.title === selectedFilter);

      const matchesSearch =
        course.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        course.description
          ?.toLowerCase()
          .includes(debouncedQuery.toLowerCase());

      return matchesTag && matchesSearch;
    });
  }, [selectedFilter, debouncedQuery, courses]);

  const sortedCourses = useMemo(() => {
    return [...filteredCourses].sort((a, b) => {
      const dateA = new Date(a.startDate).getTime();
      const dateB = new Date(b.startDate).getTime();

      return sortBy === "newest" ? dateB - dateA : dateA - dateB;
    });
  }, [filteredCourses, sortBy]);

  return (
    <>
      <Nav />
      <main className="pt-32 px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <header className="mb-12">
            <h1 className="font-h1 text-h1 text-on-surface mb-4">
              Explore Courses
            </h1>
          </header>

          {/* FILTER + SORT BAR */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/5">
            {/* LEFT SIDE: TAG + SEARCH */}
            <div className="flex items-center gap-4 flex-wrap">
              <TagDropdown
                selected={selectedFilter}
                setSelected={setSelectedFilter}
              />

              {/* SEARCH BAR */}
              <div className="relative w-64">
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2.5 pl-10 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-white/20"
                />
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-base">
                  search
                </span>
              </div>
            </div>

            {/* RIGHT SIDE: SORT */}
            <div
              onClick={() =>
                setSortBy((prev) => (prev === "newest" ? "oldest" : "newest"))
              }
              className="flex items-center gap-3 text-slate-400 text-sm cursor-pointer select-none"
            >
              <span className="material-symbols-outlined">sort</span>

              <span>
                Sort by:{" "}
                <span className="text-white">
                  {sortBy === "newest" ? "Newest First" : "Oldest First"}
                </span>
              </span>
            </div>
          </div>

          {/* COURSE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
            {sortedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
