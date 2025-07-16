'use client'
import React, { useState } from 'react';
import { Shield, FileText, MessageCircle, ChevronDown, ExternalLink } from 'lucide-react';

const TechTalksLegalPages = () => {
  const [activeTab, setActiveTab] = useState('terms');
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/96176667359', '_blank');
  };

  const termsContent = [
    {
      id: 'introduction',
      title: '1. Introduction',
      content: 'TechTalks is an educational platform designed for developers and students who want to learn programming. By accessing our site and using our content, you agree to these terms.'
    },
    {
      id: 'eligibility',
      title: '2. Eligibility',
      content: 'Anyone interested in programming can use TechTalks. No account creation is required.'
    },
    {
      id: 'ownership',
      title: '3. Ownership of Content',
      content: 'All course content and materials on TechTalks are the property of TechTalks. Users are granted access for personal learning only. Sharing, redistributing, or downloading content is strictly prohibited.'
    },
    {
      id: 'payment',
      title: '4. Payment & Access',
      content: 'Payments are handled manually via WhatsApp (+96176667359) using OMT or WishMoney. No refunds will be issued after payment is made.',
      highlight: true
    },
    {
      id: 'acceptable-use',
      title: '5. Acceptable Use',
      content: 'You agree to use TechTalks content only for personal educational purposes and not to:',
      list: [
        'Distribute or resell any material',
        'Attempt to download or scrape course content',
        'Interfere with or disrupt the platform'
      ]
    },
    {
      id: 'modifications',
      title: '6. Modifications',
      content: 'TechTalks reserves the right to update, modify, or remove any content, pricing, features, or access policies at any time.'
    },
    {
      id: 'disclaimer',
      title: '7. Disclaimer',
      content: 'Content is provided "as is" without warranties. TechTalks makes no guarantees of uninterrupted access.'
    },
    {
      id: 'contact',
      title: '8. Contact',
      content: 'For questions, reach out via WhatsApp at +96176667359.',
      isContact: true
    }
  ];

  const privacyContent = [
    {
      id: 'privacy-intro',
      title: '1. Introduction',
      content: 'Your privacy is important to us. This policy outlines what data we collect and how we use it.'
    },
    {
      id: 'data-collection',
      title: '2. Data We May Collect',
      list: [
        'Email addresses (if submitted via forms)',
        'Usage data (via analytics tools)',
        'Cookies (for improving experience)'
      ]
    },
    {
      id: 'data-usage',
      title: '3. How We Use Your Data',
      list: [
        'To improve site performance',
        'To personalize your experience',
        'To contact you if you\'ve opted in'
      ]
    },
    {
      id: 'cookies',
      title: '4. Cookies & Tracking',
      content: 'We may use cookies and similar technologies to understand user behavior and enhance functionality.'
    },
    {
      id: 'data-sharing',
      title: '5. Data Sharing',
      content: 'We do not sell or share your data with third parties. Data is used solely for platform improvement and communication.',
      highlight: true
    },
    {
      id: 'security',
      title: '6. Data Security',
      content: 'Reasonable steps are taken to protect your information, though no system is completely secure.'
    },
    {
      id: 'policy-updates',
      title: '7. Policy Updates',
      content: 'This policy may change from time to time. Continued use of TechTalks constitutes acceptance of these changes.'
    },
    {
      id: 'privacy-contact',
      title: '8. Contact',
      content: 'For privacy-related concerns, message us via WhatsApp at +96176667359.',
      isContact: true
    }
  ];

  const renderContent = (sections) => (
    <div className="space-y-6">
      {sections.map((section) => (
        <div key={section.id} className="group">
          <div 
            className={`border rounded-xl transition-all duration-300 ${
              section.highlight 
                ? 'border-orange-500/30 bg-orange-900/10' 
                : 'border-gray-800 hover:border-cyan-500/30'
            }`}
          >
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors duration-300 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                {section.title}
              </h3>
              <ChevronDown 
                className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                  expandedSections[section.id] ? 'rotate-180' : ''
                }`} 
              />
            </button>
            
            {expandedSections[section.id] && (
              <div className="px-6 pb-6">
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {section.content}
                  </p>
                  
                  {section.list && (
                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                      {section.list.map((item, index) => (
                        <li key={index} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  )}
                  
                  {section.isContact && (
                    <div className="mt-4 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                      <button
                        onClick={handleWhatsAppContact}
                        className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-300 group"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span className="group-hover:underline">Contact us on WhatsApp</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Legal <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Information</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our terms of service and privacy policy, designed to be clear and straightforward.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-2">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('terms')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'terms'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <FileText className="w-4 h-4" />
                Terms & Conditions
              </button>
              <button
                onClick={() => setActiveTab('privacy')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'privacy'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <Shield className="w-4 h-4" />
                Privacy Policy
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {/* Last Updated */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2">
              <span className="text-gray-400 text-sm">Last Updated:</span>
              <span className="text-cyan-400 font-medium">July 2025</span>
            </div>
          </div>

          {/* Expand All Button */}
          <div className="text-center mb-8">
            <button
              onClick={() => {
                const allSections = activeTab === 'terms' ? termsContent : privacyContent;
                const allExpanded = allSections.every(section => expandedSections[section.id]);
                const newState = {};
                allSections.forEach(section => {
                  newState[section.id] = !allExpanded;
                });
                setExpandedSections(newState);
              }}
              className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-300 hover:underline"
            >
              {Object.keys(expandedSections).length === 0 ? 'Expand All Sections' : 'Collapse All Sections'}
            </button>
          </div>

          {/* Terms Content */}
          {activeTab === 'terms' && (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Terms & Conditions</h2>
                <p className="text-gray-300">
                  Please read these terms carefully before using TechTalks services.
                </p>
              </div>
              {renderContent(termsContent)}
            </div>
          )}

          {/* Privacy Content */}
          {activeTab === 'privacy' && (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Privacy Policy</h2>
                <p className="text-gray-300">
                  Learn how we protect and handle your personal information.
                </p>
              </div>
              {renderContent(privacyContent)}
            </div>
          )}
        </div>

        {/* Bottom Contact Card */}
        <div className="max-w-2xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border border-purple-500/30 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Questions or Concerns?</h3>
            <p className="text-gray-300 mb-6">
              We're here to help! Contact us directly for any legal or privacy-related questions.
            </p>
            <button
              onClick={handleWhatsAppContact}
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Contact via WhatsApp
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechTalksLegalPages;