'use client'
import React, { useState, useEffect } from 'react';
import { X, Users, Share2, Video, Briefcase, Calendar, Globe, MessageSquare } from 'lucide-react';

const ReferralModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const referralOptions = [
    { value: 'social_media', label: 'Social Media', icon: <Share2 className="w-4 h-4" /> },
    { value: 'friends', label: 'Friends & Family', icon: <Users className="w-4 h-4" /> },
    { value: 'tiktok', label: 'TikTok', icon: <Video className="w-4 h-4" /> },
    { value: 'linkedin', label: 'LinkedIn', icon: <Briefcase className="w-4 h-4" /> },
    { value: 'instagram', label: 'Instagram', icon: <MessageSquare className="w-4 h-4" /> },
    { value: 'events', label: 'Tech Events', icon: <Calendar className="w-4 h-4" /> },
    { value: 'workshops', label: 'Workshops', icon: <Globe className="w-4 h-4" /> },
    { value: 'google_search', label: 'Google Search', icon: <Globe className="w-4 h-4" /> },
    { value: 'other', label: 'Other', icon: <MessageSquare className="w-4 h-4" /> }
  ];

  // Cookie utilities
  const setCookie = (name, value, days = 365) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  };

  const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  useEffect(() => {
    // Check if user has already provided referral info
    const hasSeenReferralModal = getCookie('techtalks_referral_seen');
    const referralSource = getCookie('techtalks_referral_source');
    
    if (!hasSeenReferralModal && !referralSource) {
      // Show modal after 3 seconds for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async () => {
    if (!selectedOption) return;

    setIsSubmitting(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Save to cookies
    setCookie('techtalks_referral_source', selectedOption, 365);
    setCookie('techtalks_referral_seen', 'true', 365);
    
    // Optional: Send to analytics or backend
    console.log('Referral source submitted:', selectedOption);
    
    setIsSubmitting(false);
    setIsVisible(false);
  };

  const handleSkip = () => {
    setCookie('techtalks_referral_seen', 'true', 30); // Show again in 30 days if skipped
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
        {/* Modal */}
        <div className="bg-slate-900 border border-slate-700 rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full mx-2 sm:mx-4 transform transition-all duration-300 scale-100 max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="relative p-4 sm:p-6 pb-0">
            <button
              onClick={handleSkip}
              className="absolute right-3 top-3 sm:right-4 sm:top-4 text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Welcome to TechTalks!
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm px-2">
                Help us improve by letting us know how you discovered us
              </p>
            </div>
          </div>

          {/* Options */}
          <div className="p-4 sm:p-6">
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              {referralOptions.map((option) => (
                <div
                  key={option.value}
                  className={`flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg border transition-all duration-200 cursor-pointer hover:bg-slate-800/50 ${
                    selectedOption === option.value
                      ? 'border-cyan-500 bg-cyan-500/10'
                      : 'border-slate-600 hover:border-slate-500'
                  }`}
                  onClick={() => setSelectedOption(option.value)}
                >
                  <div className={`flex items-center gap-2 sm:gap-3 flex-1 ${
                    selectedOption === option.value ? 'text-cyan-400' : 'text-gray-300'
                  }`}>
                    <div className="flex-shrink-0">
                      {React.cloneElement(option.icon, { className: "w-3 h-3 sm:w-4 sm:h-4" })}
                    </div>
                    <span className="text-xs sm:text-sm font-medium truncate">{option.label}</span>
                  </div>
                  {selectedOption === option.value && (
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-500 rounded-full flex-shrink-0"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={handleSkip}
                className="w-full sm:flex-1 px-3 sm:px-4 py-2.5 sm:py-3 text-gray-400 border border-slate-600 rounded-lg hover:bg-slate-800 hover:text-white transition-colors duration-200 text-xs sm:text-sm font-medium order-2 sm:order-1"
              >
                Skip for now
              </button>
              <button
                onClick={handleSubmit}
                disabled={!selectedOption || isSubmitting}
                className="w-full sm:flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white rounded-lg font-medium text-xs sm:text-sm transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 order-1 sm:order-2"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Saving...</span>
                  </div>
                ) : (
                  'Continue'
                )}
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-3 sm:mt-4 text-center px-2">
              This helps us understand our community better and improve our services
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferralModal;