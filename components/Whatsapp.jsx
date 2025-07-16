'use client';
import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

const WhatsAppStickyButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/96176667359', '_blank', 'noopener,noreferrer');
  };

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <div className="relative">
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg whitespace-nowrap border border-gray-700 animate-in fade-in duration-200">
              <div className="relative">
                Need help? Chat with us!
                <div className="absolute top-full right-3 transform -translate-x-1/2">
                  <div className="border-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            </div>
          )}

          {/* Main Button */}
          <button
            onClick={handleWhatsAppClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            aria-label="Contact us on WhatsApp"
          >
            <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to-green-600/20 group-hover:from-green-300/30 group-hover:to-green-500/30 transition-all duration-300"></div>
          </button>

          {/* Online Indicator */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-in {
          0% { transform: scale(0) rotate(180deg); opacity: 0; }
          50% { transform: scale(1.1) rotate(90deg); opacity: 0.8; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-in {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </>
  );
};

export default WhatsAppStickyButton;
