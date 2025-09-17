import { useEffect, useRef, useState } from "react";

export default function Classes() {
  const [activeCourse, setActiveCourse] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const courses = [
    {
      title: "Junior Course",
      level: "Beginner",
      duration: "12 weeks",
      schedule: "Saturdays, 4:00 PM to 5:30 PM EST",
      startDate: "July 19, 2025",
      details: {
        description: "Covers the basics of programming in Python.",
        whatYouLearn: [
          "Print & comments & planning",
          "Input & variables ",
          "Data types & type casting & operators",
          "Conditionals & if/else",
          "Flow charts & IPO & while loops",
          "Lists",
          "For loops",
          "Functions & try…except",
          "Dictionaries",
          "Final Assignment",
          "Intro to comp programming (DMOJ, etc)",
        ],
      },
    },
    {
      title: "Intermediate Course",
      level: "Intermediate",
      duration: "Runs until February 2026",
      schedule: "Sundays, 8:00 PM to 9:30 PM EST",
      startDate: "July 13, 2025",
      details: {
        description:
          "Covers the basics of competitive programming in Python and Java​ in preparation for the CCC Junior Division.",
        whatYouLearn: [
          "Introduction to DMOJ",
          "Fast input",
          "Loops",
          "1D Arrays",
          "2D Arrays",
          "String Manipulation",
          "Maps/Dictionaries",
          "Brute Force",
          "Greedy Algorithms",
          "Ad Hoc",
          "Handling subtasks",
        ],
      },
    },
    {
      title: "Senior Course",
      level: "Advanced",
      duration: "Runs until February 2026",
      schedule: "Wednesdays, 8:00 PM to 9:30 PM EST",
      startDate: "July 16, 2025",
      details: {
        description:
          "Covers more advanced competitive programming concepts in Python, Java, C++ in preparation for the CCC Senior Division.",
        whatYouLearn: [
          "Binary search",
          "Backtracking",
          "BFS (breadth-first search)",
          "DFS (depth-first search)",
          "Prefix Sum Array and Difference Sum Array",
          "Dijkstra's",
          "Minimum Spanning Tree (Prim's and Kruskal's)",
          "Disjoint Set Union",
          "Dynamic Programming",
        ],
      },
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              (entry.target as HTMLElement).dataset.courseIndex || "0"
            );
            setActiveCourse(index);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="px-24 py-16">
      <div className="text-6xl font-bold mb-8 text-center">Classes</div>
      <div className="text-lg mb-24 text-center max-w-3xl mx-auto">
        All our classes take place online through Google Meet. Assignments and
        course materials will be distributed using Google Classroom.
      </div>

      <div className="grid grid-cols-12 gap-12">
        {/* Sticky Left Side - Changes based on active course */}
        <div className="col-span-4 sticky top-20 self-start h-fit">
          <div className=" p-8 rounded-xl shadow-lg transition-all duration-500">
            <h2 className="text-4xl font-bold mb-4 ">
              {courses[activeCourse].title}
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <span className="font-semibold  w-20">Level:</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {courses[activeCourse].level}
                </span>
              </div>

              <div className="flex items-center">
                <span className="font-semibold  w-20">Duration:</span>
                <span className="">{courses[activeCourse].duration}</span>
              </div>

              <div>
                <span className="font-semibold ">Schedule:</span>
                <p className=" mt-1">{courses[activeCourse].schedule}</p>
              </div>

              <div>
                <span className="font-semibold ">Start Date:</span>
                <p className=" mt-1">{courses[activeCourse].startDate}</p>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Enroll Now
            </button>
          </div>
        </div>

        {/* Scrollable Right Side - Course Details */}
        <div className="col-span-8 space-y-24">
          {courses.map((course, courseIndex) => (
            <div
              key={courseIndex}
              ref={(el) => {
                sectionRefs.current[courseIndex] = el;
              }}
              data-course-index={courseIndex}
              className="space-y-8 min-h-screen"
            >
              <section>
                <h4 className="text-2xl font-bold mb-4 ">Course Description</h4>
                <p className=" text-lg leading-relaxed">
                  {course.details.description}
                </p>
              </section>

              <section>
                <h4 className="text-2xl font-bold mb-4 ">What You'll Learn</h4>
                <ul className="space-y-2">
                  {course.details.whatYouLearn.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
