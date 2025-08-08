"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Clock,
  Users,
  Star,
  ChevronRight,
  ArrowRight,
  Play,
  Search,
  Filter,
  X,
  SlidersHorizontal
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { courses } from "@/lib/courses";

const TechTalksCourses = () => {
  const [visibleCourses, setVisibleCourses] = useState(6);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState(courses);
  
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const searchRef = useRef(null);

  // Filter and search logic
  useEffect(() => {
    let filtered = [...courses];

    // Search by title and description
    if (searchQuery.trim()) {
      filtered = filtered.filter(course =>
        course.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor?.name?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by level
    if (selectedLevel !== "all") {
      filtered = filtered.filter(course => 
        course.level?.toLowerCase() === selectedLevel.toLowerCase()
      );
    }

    // Filter by language
    if (selectedLanguage !== "all") {
      filtered = filtered.filter(course => 
        course.language?.toLowerCase() === selectedLanguage.toLowerCase()
      );
    }

    // Sort courses
    switch (sortBy) {
      case "newest":
        filtered.sort((a, b) => new Date(b.lastUpdated || 0) - new Date(a.lastUpdated || 0));
        break;
      case "rating":
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "duration":
        filtered.sort((a, b) => {
          const aDuration = parseInt(a.duration?.replace(/[^\d]/g, '') || 0);
          const bDuration = parseInt(b.duration?.replace(/[^\d]/g, '') || 0);
          return aDuration - bDuration;
        });
        break;
      case "students":
        filtered.sort((a, b) => {
          const aStudents = parseInt(a.students?.replace(/[^\d]/g, '') || 0);
          const bStudents = parseInt(b.students?.replace(/[^\d]/g, '') || 0);
          return bStudents - aStudents;
        });
        break;
      default:
        break;
    }

    setFilteredCourses(filtered);
    setVisibleCourses(6); // Reset visible courses when filters change
  }, [searchQuery, selectedLevel, selectedLanguage, sortBy]);

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
    setVisibleCourses((prev) => Math.min(prev + 6, filteredCourses.length));
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSelectedLevel("all");
    setSelectedLanguage("all");
    setSortBy("newest");
    setShowFilters(false);
  };

  const hasActiveFilters = searchQuery || selectedLevel !== "all" || selectedLanguage !== "all" || sortBy !== "newest";

  // Get unique values for filter options
  const levels = [...new Set(courses.map(course => course.level).filter(Boolean))];
  const languages = [...new Set(courses.map(course => course.language).filter(Boolean))];

  return (
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            All TechTalks{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Courses
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-2xl mx-auto px-4">
            Curated courses for developers and tech enthusiasts, learn at your pace.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 sm:mb-12">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                ref={searchRef}
                type="text"
                placeholder="Search courses, instructors, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Filters Toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-gray-600 transition-all duration-200"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span className="hidden sm:inline">Filters</span>
                {hasActiveFilters && (
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                )}
              </button>
              
              {hasActiveFilters && (
                <button
                  onClick={clearSearch}
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                >
                  Clear all
                </button>
              )}
            </div>

            <div className="text-cyan-400 font-medium text-sm sm:text-base">
              {filteredCourses.length} course{filteredCourses.length !== 1 ? "s" : ""} found
            </div>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="bg-gray-900/30 border border-gray-700/50 rounded-xl p-6 mb-6 backdrop-blur-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Level Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Level</label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    <option value="all">All Levels</option>
                    {levels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>

                {/* Language Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Language</label>
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    <option value="all">All Languages</option>
                    {languages.map(language => (
                      <option key={language} value={language}>{language}</option>
                    ))}
                  </select>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    <option value="newest">Newest First</option>
                    <option value="rating">Highest Rated</option>
                    <option value="students">Most Popular</option>
                    <option value="duration">Shortest First</option>
                  </select>
                </div>

                {/* Quick Actions */}
                <div className="flex items-end">
                  <button
                    onClick={() => setShowFilters(false)}
                    className="w-full p-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-medium transition-colors"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No courses found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={clearSearch}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Show All Courses
            </button>
          </div>
        ) : (
          <>
            {/* Course Grid */}
            <div
              ref={gridRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12"
            >
              {filteredCourses.slice(0, visibleCourses).map((course) => (
                <div
                  key={course.id}
                  className="course-card group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredCard(course.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative">
                    {course.thumbnailImage ? (
                      <Image
                        src={course.thumbnailImage}
                        alt={course.title}
                        width={500}
                        height={320}
                        className="w-full h-48 sm:h-64 object-cover"
                      />
                    ) : (
                      <div className="w-full h-48 sm:h-64 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                        <div className="text-center">
                          <Play className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                          <span className="text-gray-300 text-sm">Course Preview</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Course Level Badge */}
                    {course.level && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                          {course.level}
                        </span>
                      </div>
                    )}

                    {/* Language Badge */}
                    {course.language && (
                      <div className="absolute top-3 right-3">
                        <span className="bg-cyan-500/80 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
                          🇱🇧 {course.language}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-2">
                      {course.description}
                    </p>
                    
                    {/* Instructor */}
                    {course.instructor?.name && (
                      <div className="text-xs text-purple-400 font-medium mb-3">
                        by {course.instructor.name}
                      </div>
                    )}

                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-400">
                      {course.duration && (
                        <div className="flex items-center gap-1">
                          <Clock size={12} className="sm:w-4 sm:h-4" />
                          <span>{course.duration}</span>
                        </div>
                      )}
                      {course.students && (
                        <div className="flex items-center gap-1">
                          <Users size={12} className="sm:w-4 sm:h-4" />
                          <span>{course.students}</span>
                        </div>
                      )}
                      {course.rating && (
                        <div className="flex items-center gap-1">
                          <Star size={12} className="sm:w-4 sm:h-4 text-yellow-400" />
                          <span>{course.rating}</span>
                        </div>
                      )}
                    </div>

                    <Link href={`/courses/${course.id}`} className="block">
                      <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                        <span className="flex items-center justify-center gap-2">
                          <Play size={16} />
                          <span>View Details</span>
                          <ChevronRight
                            size={16}
                            className={`transition-transform ${
                              hoveredCard === course.id ? "translate-x-1" : ""
                            }`}
                          />
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visibleCourses < filteredCourses.length && (
              <div className="text-center mb-12 sm:mb-16">
                <button
                  onClick={handleLoadMore}
                  className="bg-gray-800 hover:bg-gray-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-all duration-300 border border-gray-700 hover:border-gray-600"
                >
                  Load More Courses
                  <span className="ml-2 text-gray-400 text-sm">
                    (Showing {visibleCourses} of {filteredCourses.length})
                  </span>
                </button>
              </div>
            )}
          </>
        )}

       
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default TechTalksCourses;