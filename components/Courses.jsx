"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Clock,
  Users,
  Star,
  ChevronRight,
  ArrowRight,
  Play,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { courses } from "@/lib/courses";
const TechTalksCourses = () => {
  const [visibleCourses, setVisibleCourses] = useState(4);
  const [hoveredCard, setHoveredCard] = useState(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const animateElements = () => {
      if (headerRef.current) {
        headerRef.current.style.opacity = "0";
        headerRef.current.style.transform = "translateY(-20px)";
        setTimeout(() => {
          headerRef.current.style.transition = "all 0.8s ease-out";
          headerRef.current.style.opacity = "1";
          headerRef.current.style.transform = "translateY(0)";
        }, 100);
      }

      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll(".course-card");
        cards.forEach((card, index) => {
          card.style.opacity = "0";
          card.style.transform = "translateY(30px)";
          setTimeout(() => {
            card.style.transition = "all 0.6s ease-out";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 200 + index * 100);
        });
      }
    };

    animateElements();
  }, []);

  const handleLoadMore = () => {
    setVisibleCourses((prev) => Math.min(prev + 4, courses.length));
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div ref={headerRef} className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            All TechTalks{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Courses
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Curated courses for developers and tech enthusiasts , learn at your
            pace.
          </p>
          <div className="text-cyan-400 font-medium">
            {courses.length} course{courses.length > 1 ? "s" : ""} available
          </div>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {courses.slice(0, visibleCourses).map((course) => (
            <div
              key={course.id}
              className="course-card group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredCard(course.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative">
                <Image
                  src={course.thumbnailImage}
                  alt={course.title}
                  width={500}
                  height={320}
                  className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-2xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {course.description}
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                  <span className="flex items-center justify-center gap-2">
                    <Play size={16} />
                    <Link href={`/courses/${course.id}`}>View Details</Link>

                    <ChevronRight
                      size={16}
                      className={`transition-transform ${
                        hoveredCard === course.id ? "translate-x-1" : ""
                      }`}
                    />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {visibleCourses < courses.length && (
          <div className="text-center mb-16">
            <button
              onClick={handleLoadMore}
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 border border-gray-700 hover:border-gray-600"
            >
              Load More Courses
              <span className="ml-2 text-gray-400">
                (Showing {visibleCourses} of {courses.length})
              </span>
            </button>
          </div>
        )}

        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Level Up Your Skills?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join TechTalks Pro for unlimited access to all courses, exclusive
            content, and direct mentorship from industry experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ambassador"
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Become TechTalks Ambassador
                <ArrowRight size={16} />
              </span>
            </Link>
            <Link
              href="https://wa.me/96176667359"
              className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
            >
           Get Career Advice
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechTalksCourses;
