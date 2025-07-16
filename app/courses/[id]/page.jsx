'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { courses } from '@/lib/courses';
import { FaWhatsapp } from 'react-icons/fa6';
import {
  Clock,
  Users,
  Star,
  MessageCircle,
  ArrowLeft,

  BookOpen,

  AlertTriangle,
  
  Share2
} from 'lucide-react';

const CourseDetailPage = () => {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [expandedSections, setExpandedSections] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [courseData, setCourseData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (id) {
      const course = courses.find(c => c.id === parseInt(id));

      if (course) {
        setCourseData(course);
        setIsLoading(false);
        setTimeout(() => {
          animateEntrance();
        }, 100);
      } else {
        setNotFound(true);
        setIsLoading(false);
      }
    }
  }, [id]);

  const animateEntrance = () => {
    if (heroRef.current) {
      heroRef.current.style.opacity = '0';
      heroRef.current.style.transform = 'translateY(30px)';
      setTimeout(() => {
        heroRef.current.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        heroRef.current.style.opacity = '1';
        heroRef.current.style.transform = 'translateY(0)';
      }, 100);
    }

    if (contentRef.current) {
      contentRef.current.style.opacity = '0';
      contentRef.current.style.transform = 'translateY(30px)';
      setTimeout(() => {
        contentRef.current.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        contentRef.current.style.opacity = '1';
        contentRef.current.style.transform = 'translateY(0)';
      }, 200);
    }
  };

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleWhatsAppEnroll = () => {
    const message = encodeURIComponent(`Hi! I'm interested in enrolling in the "${courseData.title}" course. Can you help me with the enrollment process?`);
    window.open(`https://wa.me/96176667359?text=${message}`, '_blank');
  };

  const handleBrowseCourses = () => {
    router.push('/courses');
  };

  const handleBack = () => {
    router.back();
  };

  const handleShare = () => {
    navigator.share({
      title: courseData.title,
      text: courseData.description,
      url: window.location.href
    }).catch(() => {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href);
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg">Loading course details...</p>
        </div>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center max-w-md">
          <AlertTriangle className="w-16 h-16 text-amber-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Course Not Found</h1>
          <p className="text-slate-300 mb-6">The course you're looking for doesn't exist or has been removed.</p>
          <button 
            onClick={handleBrowseCourses}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Browse All Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className=" bg-slate-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="hidden sm:inline">Back to Courses</span>
            </button>
            <div className="flex items-center gap-4">
              <button
                onClick={handleShare}
                className="p-2 text-slate-400 hover:text-white transition-colors"
              >
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div ref={heroRef} className="relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {courseData.level}
                  </div>
                  <div className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium">
                    {courseData.cost}
                  </div>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                  {courseData.title}
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  {courseData.description}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 text-center">
                  <Clock className="w-6 h-6 text-cyan-500 mx-auto mb-2" />
                  <div className="text-white font-semibold">{courseData.duration}</div>
                  <div className="text-slate-400 text-sm">Duration</div>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 text-center">
                  <Users className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                  <div className="text-white font-semibold">{courseData.students}</div>
                  <div className="text-slate-400 text-sm">Students</div>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 text-center">
                  <Star className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{courseData.rating}</div>
                  <div className="text-slate-400 text-sm">Rating</div>
                </div>
              
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsAppEnroll}
                  className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp size={20} />
                  Enroll via WhatsApp
                </button>
                <button
                  onClick={handleBrowseCourses}
                  className="bg-slate-800/30 hover:bg-slate-800/50 text-white px-8 py-4 rounded-xl font-semibold text-lg border border-slate-700/50 hover:border-slate-600 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <BookOpen size={20} />
                  Browse More Courses
                </button>
              </div>
            </div>

            {/* Right Column - Thumbnail */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl transform rotate-3"></div>
              <div className="relative bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
                <img
                  src={courseData.thumbnailImage}
                  alt={courseData.title}
                  className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-2xl"
                />
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;