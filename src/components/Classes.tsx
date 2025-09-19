import advanced from "../assets/advanced.jpg";
import webdev from "../assets/webdev.jpg";
import intermediate from "../assets/intermediate.jpg";
import beginner from "../assets/beginner.jpg";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function Classes() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const courses = [
    {
      title: "Junior Course",
      img: beginner,
      color: "#3B82F6",
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
      img: intermediate,
      color: "#10B981",
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
      img: advanced,
      color: "#F59E0B",
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
    {
      title: "Web Development Course",
      img: webdev,
      color: "#8B5CF6",
      level: "All",
      duration: "Runs until February 2026",
      schedule: "Saturdays, 8:00 PM to 9:30 PM EST",
      startDate: "July 12, 2025",
      details: {
        description:
          "Covers all you need to create polished, functional websites, which are perfect for hackathons and personal projects!",
        whatYouLearn: ["HTML", "CSS", "Git/GitHub", "APIs"],
      },
    },
  ];

  useEffect(() => {
    let lastScrollTime = 0;
    
    const handleWheel = (e: any) => {
      const container = document.getElementById('classes-container');
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const isInClassesSection = rect.top <= 0 && rect.bottom >= window.innerHeight;
      
      if (isInClassesSection) {
        e.preventDefault();
        
        const now = Date.now();
        if (now - lastScrollTime < 50) return; // Throttle scroll events
        lastScrollTime = now;
        
        // Dampen the scroll by reducing the scroll amount
        const dampedScroll = e.deltaY * 0.9; // Reduce scroll speed by 70%
        window.scrollBy(0, dampedScroll);
      }
    };

    const handleScroll = () => {
      const container = document.getElementById('classes-container');
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate which section should be visible based on scroll position
      const scrollProgress = Math.max(0, -rect.top) / (containerHeight - windowHeight);
      const sectionIndex = Math.min(
        Math.floor(scrollProgress * courses.length),
        courses.length - 1
      );
      
      setCurrentIndex(Math.max(0, sectionIndex));
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [courses.length]);

  return (
    <div className="px-24 pt-24">
      <div className="text-6xl font-bold mb-8 text-center">
        Classes
      </div>
      <div className="text-lg text-center max-w-3xl mx-auto">
        All our classes take place online through Google Meet. Assignments and
        course materials will be distributed using Google Classroom.
      </div>
      
      <div id="classes-container" className="relative" style={{ height: `${courses.length * 100}vh` }}>
        <div className="sticky top-0 h-screen flex items-center">
          <div className="w-full relative">
          {courses.map((course, courseIndex) => {
            // Simple opacity calculation
            const opacity = currentIndex === courseIndex ? 1 : 0;
            
            return (
              <motion.div
                key={courseIndex}
                className="absolute inset-0 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: opacity,
                }}
                transition={{ 
                  duration: 0.6,
                  ease: "easeInOut"
                }}
              >
              <div className="w-full">
                <div className="grid grid-cols-[1fr_2fr] gap-16">
                  <motion.div 
                    className="h-fit"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ 
                      opacity: currentIndex === courseIndex ? 1 : 0,
                      x: currentIndex === courseIndex ? 0 : -50 
                    }}
                    transition={{ duration: 0.8, delay: currentIndex === courseIndex ? 0.2 : 0 }}
                  >
                    <div
                      className="p-8 rounded-xl border-2 bg-gray-600/10"
                      style={{
                        borderColor: course.color,
                        boxShadow: `0 20px 40px -10px ${course.color}80, 0 10px 20px -5px ${course.color}60, 0 4px 6px -1px ${course.color}90`,
                      }}
                    >
                      <h2 className="text-4xl font-bold mb-4">{course.title}</h2>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-center">
                          <div>
                            <b className="font-semibold">Level</b>: {course.level}
                          </div>
                        </div>

                        <div className="flex items-center">
                          <span>
                            <b className="font-semibold">Duration</b>:{" "}
                            {course.duration}
                          </span>
                        </div>

                        <div>
                          <span className="font-semibold">Schedule:</span>
                          <p className="mt-1">{course.schedule}</p>
                        </div>

                        <div>
                          <span className="font-semibold">Start Date:</span>
                          <p className="mt-1">{course.startDate}</p>
                        </div>
                      </div>

                      <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Enroll Now
                      </button>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ 
                      opacity: currentIndex === courseIndex ? 1 : 0,
                      x: currentIndex === courseIndex ? 0 : 50 
                    }}
                    transition={{ duration: 0.8, delay: currentIndex === courseIndex ? 0.4 : 0 }}
                  >
                    <section>
                      <h4 className="text-2xl font-bold mb-4">
                        Course Description
                      </h4>
                      <p className="text-lg mb-8">
                        {course.details.description}
                      </p>
                    </section>

                    <section>
                      <div className="grid grid-cols-[auto_1fr] gap-24 h-fit">
                        <div>
                          <h4 className="text-2xl font-bold mb-4">
                            What You'll Learn
                          </h4>
                          <ul className="space-y-2">
                            {course.details.whatYouLearn.map((item, idx) => (
                              <motion.li 
                                key={idx} 
                                className="flex items-start"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ 
                                  opacity: currentIndex === courseIndex ? 1 : 0,
                                  x: currentIndex === courseIndex ? 0 : -20 
                                }}
                                transition={{ 
                                  duration: 0.3, 
                                  delay: currentIndex === courseIndex ? 0.6 + idx * 0.05 : 0 
                                }}
                              >
                                <span className="text-green-500 mr-3 mt-1">
                                  ✓
                                </span>
                                <span>{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        <motion.img
                          className="rounded-xl shadow-md shadow-gray-500 border self-center"
                          src={course.img}
                          alt={course.title}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ 
                            opacity: currentIndex === courseIndex ? 1 : 0,
                            scale: currentIndex === courseIndex ? 1 : 0.9 
                          }}
                          transition={{ duration: 0.8, delay: currentIndex === courseIndex ? 0.8 : 0 }}
                        />
                      </div>
                    </section>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </div>
    </div>
  );
}