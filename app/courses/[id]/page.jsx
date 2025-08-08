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
  Share2,
  Send,
  ThumbsUp,
  ThumbsDown,
  X,
  CheckCircle
} from 'lucide-react';

const CourseDetailPage = () => {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [isLoading, setIsLoading] = useState(true);
  const [courseData, setCourseData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  
  // Rating & Feedback states
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [userFeedback, setUserFeedback] = useState('');
  const [hoverRating, setHoverRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  // Cookie utility functions
  const setCookie = (name, value, days = 365) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${encodeURIComponent(JSON.stringify(value))};expires=${expires.toUTCString()};path=/`;
  };

  const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) {
        try {
          return JSON.parse(decodeURIComponent(c.substring(nameEQ.length, c.length)));
        } catch (e) {
          return null;
        }
      }
    }
    return null;
  };

  const getAllRatings = () => {
    const ratings = getCookie('techtalks_course_ratings');
    return ratings || {};
  };

  const getUserRatingForCourse = (courseId) => {
    const ratings = getAllRatings();
    return ratings[courseId] || null;
  };

  const saveUserRating = (courseId, rating, feedback) => {
    const ratings = getAllRatings();
    ratings[courseId] = {
      rating,
      feedback,
      timestamp: new Date().toISOString(),
      courseTitle: courseData?.title
    };
    setCookie('techtalks_course_ratings', ratings);
  };

  useEffect(() => {
    if (id) {
      const course = courses.find(c => c.id === parseInt(id));

      if (course) {
        setCourseData(course);
        
        // Check if user has already rated this course
        const existingRating = getUserRatingForCourse(parseInt(id));
        if (existingRating) {
          setHasRated(true);
          setUserRating(existingRating.rating);
          setUserFeedback(existingRating.feedback || '');
        }
        
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
    if (navigator.share) {
      navigator.share({
        title: courseData.title,
        text: courseData.description,
        url: window.location.href
      }).catch(() => {
        navigator.clipboard.writeText(window.location.href);
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleRatingClick = (rating) => {
    setUserRating(rating);
    setHoverRating(0);
  };

  const handleRatingHover = (rating) => {
    setHoverRating(rating);
  };

  const handleSubmitRating = async () => {
    if (userRating === 0) return;
    
    setIsSubmitting(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Save to cookies
    saveUserRating(parseInt(id), userRating, userFeedback);
    
    setHasRated(true);
    setIsSubmitting(false);
    setShowRatingModal(false);
    setShowThankYou(true);
    
    // Hide thank you message after 3 seconds
    setTimeout(() => {
      setShowThankYou(false);
    }, 3000);
  };

  const handleEditRating = () => {
    setShowRatingModal(true);
  };

  const getRatingText = (rating) => {
    const texts = {
      1: 'Poor',
      2: 'Fair', 
      3: 'Good',
      4: 'Very Good',
      5: 'Excellent'
    };
    return texts[rating] || '';
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
          <p className="text-slate-300 mb-6">The course you're looking for doesn't exist yet.</p>
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
    <div className="bg-slate-950 min-h-screen">
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

      {/* Thank You Message */}
      {showThankYou && (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-in fade-in slide-in-from-right duration-300">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>Thank you for your feedback!</span>
          </div>
        </div>
      )}

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
                {courseData.thumbnailImage ? (
                  <img
                    src={courseData.thumbnailImage}
                    alt={courseData.title}
                    className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-2xl"
                  />
                ) : (
                  <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <BookOpen className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                      <h3 className="text-white font-semibold text-lg">Course Content</h3>
                      <p className="text-slate-400 text-sm">Premium Learning Experience</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User Rating Section - Moved to bottom */}
      <div ref={contentRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl lg:text-2xl text-center mx-auto font-semibold text-white">Your Opinion Matters</h3>
            {hasRated && (
              <button
                onClick={handleEditRating}
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
              >
                Edit Rating
              </button>
            )}
          </div>
          
          {hasRated ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-slate-300 text-lg">Your Rating:</span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-6 h-6 ${
                        star <= userRating ? 'text-yellow-400 fill-current' : 'text-slate-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-cyan-400 font-medium text-lg">
                  {getRatingText(userRating)}
                </span>
              </div>
              {userFeedback && (
                <div className="bg-slate-700/30 rounded-lg p-4">
                  <p className="text-slate-300 italic">"{userFeedback}"</p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-slate-300 text-lg mb-6">Help future students by sharing your experience with this course</p>
              <button
                onClick={() => setShowRatingModal(true)}
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Rate This Course
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Rating Modal */}
      {showRatingModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
            {/* Header */}
            <div className="relative p-6 pb-0">
              <button
                onClick={() => setShowRatingModal(false)}
                className="absolute right-4 top-4 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Rate This Course
                </h2>
                <p className="text-slate-300 text-sm">
                  Share your experience with {courseData.title}
                </p>
              </div>
            </div>

            {/* Rating Stars */}
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => handleRatingClick(star)}
                      onMouseEnter={() => handleRatingHover(star)}
                      onMouseLeave={() => handleRatingHover(0)}
                      className="transition-transform duration-200 hover:scale-110"
                    >
                      <Star
                        className={`w-10 h-10 transition-colors duration-200 ${
                          star <= (hoverRating || userRating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-slate-600 hover:text-slate-500'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                {(hoverRating || userRating) > 0 && (
                  <p className="text-cyan-400 font-medium">
                    {getRatingText(hoverRating || userRating)}
                  </p>
                )}
              </div>

              {/* Feedback Text */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Share your thoughts (optional)
                </label>
                <textarea
                  value={userFeedback}
                  onChange={(e) => setUserFeedback(e.target.value)}
                  placeholder="What did you like about this course? Any suggestions for improvement?"
                  rows={4}
                  className="w-full p-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setShowRatingModal(false)}
                  className="flex-1 px-4 py-3 text-slate-400 border border-slate-600 rounded-lg hover:bg-slate-800 hover:text-white transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmitRating}
                  disabled={userRating === 0 || isSubmitting}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Submit Rating
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetailPage;