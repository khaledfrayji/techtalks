'use client'
import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageCircle, 
  Mail, 
  Instagram, 
  Linkedin, 
  Send, 
  User, 
  CheckCircle,
  ExternalLink,
  HelpCircle,
  Clock,
  Globe,
  Phone
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
const TechTalksContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  useEffect(() => {
    if (submitError) {
      const timeout = setTimeout(() => setSubmitError(''), 8000);
      return () => clearTimeout(timeout);
    }
  }, [submitError]);
  
  const heroRef = useRef(null);
  const sectionsRef = useRef([]);

  const contactMethods = [
    {
      icon: <FaWhatsapp className="w-8 h-8 text-white" />,
      title: "WhatsApp",
      description: "Fastest support, payment handling",
      action: "Chat on WhatsApp",
      link: "https://wa.me/96176667359",
      color: "from-green-500 to-green-600",
      badge: "Fastest Response"
    },
    {
      icon: <Mail className="w-8 h-8 text-white" />,
      title: "Email",
      description: "For formal inquiries, suggestions",
      action: "hello@techtalks.dev",
      link: "mailto:hello@techtalks.dev",
      color: "from-blue-500 to-blue-600",
      badge: "Business Inquiries"
    },
    {
      icon: <Instagram className="w-8 h-8 text-white" />,
      title: "Instagram",
      description: "DM for casual messages or feedback",
      action: "@techtalks",
      link: "https://instagram.com/techtalks",
      color: "from-pink-500 to-rose-600",
      badge: "Social"
    },
    {
      icon: <FaLinkedin className="w-8 h-8 text-white" />,
      title: "LinkedIn",
      description: "Collaboration or partnership messages",
      action: "TechTalks Company",
      link: "https://linkedin.com/company/techtalks",
      color: "from-blue-600 to-indigo-600",
      badge: "Partnerships"
    }
  ];

  useEffect(() => {
    const animateElements = () => {
      if (heroRef.current) {
        heroRef.current.style.opacity = '0';
        heroRef.current.style.transform = 'translateY(-30px)';
        setTimeout(() => {
          heroRef.current.style.transition = 'all 1s ease-out';
          heroRef.current.style.opacity = '1';
          heroRef.current.style.transform = 'translateY(0)';
        }, 100);
      }

      sectionsRef.current.forEach((section, index) => {
        if (section) {
          section.style.opacity = '0';
          section.style.transform = 'translateY(30px)';
          setTimeout(() => {
            section.style.transition = 'all 0.8s ease-out';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
          }, 300 + index * 200);
        }
      });
    };

    animateElements();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
   

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
  
      const data = await response.json();
      if (response.ok) {
        setIsSubmitted(true);
        setSubmitError('');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Email send failed:', data.message);
        setSubmitError(data.message || 'Failed to send email. Please try again.');
      }
      
    } catch (error) {
        console.error('Error sending email:', error);
        setSubmitError('Network error. Please check your connection and try again.');
      }
       finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };
  const handleContactClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const handleFAQClick = () => {
    console.log('Navigate to FAQ');
    // In real app: navigate to FAQ page
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        
        {/* Page Header */}
        <div ref={heroRef} className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Talk</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Whether you've got a question, feedback, or partnership idea , we'd love to hear from you.
          </p>
        </div>

        {/* Primary Contact Methods */}
        <div ref={el => sectionsRef.current[0] = el} className="mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-12">Choose Your Preferred Channel</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${method.color} rounded-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 group-hover:border-cyan-500/50 rounded-xl p-6 text-center transition-all duration-300 transform group-hover:scale-105">
                  
                  {/* Badge */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className={`bg-gradient-to-r ${method.color} text-white text-xs px-3 py-1 rounded-full font-medium`}>
                      {method.badge}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{method.description}</p>
                  
                  {/* Action Button */}
                  <button
                    onClick={() => handleContactClick(method.link)}
                    className={`w-full bg-gradient-to-r ${method.color} hover:opacity-90 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm flex items-center justify-center gap-2`}
                  >
                    <span>{method.action}</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {submitError && (
  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6 flex items-center gap-3">
    <HelpCircle className="w-5 h-5 text-red-400" />
    <span className="text-red-400">{submitError}</span>
  </div>
)}

        {/* Contact Form */}
        <div ref={el => sectionsRef.current[1] = el} className="max-w-2xl mx-auto mb-16">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Send Us a Message</h2>
            
            {isSubmitted && (
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mb-6 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full bg-gray-800 border rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 ${
                      errors.name ? 'border-red-500' : 'border-gray-700'
                    }`}
                    placeholder="Your name"
                  />
                </div>
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-gray-800 border rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 ${
                      errors.email ? 'border-red-500' : 'border-gray-700'
                    }`}
                    placeholder="your@email.com"
                  />
                </div>
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-700'
                  }`}
                  placeholder="Tell us what's on your mind..."
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

     

        {/* Response Times */}
        <div ref={el => sectionsRef.current[3] = el} className="mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Response Times</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">WhatsApp</h3>
              <p className="text-green-400 font-medium">Usually within 1 hour</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-blue-400 font-medium">Within 24 hours</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <Globe className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Social Media</h3>
              <p className="text-purple-400 font-medium">Within 2-3 hours</p>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div ref={el => sectionsRef.current[4] = el} className="text-center max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-purple-500/30 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              We're here to help! no bots, no delays.
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Just real devs who care about your learning journey. Every message gets a personal response from our team.
            </p>
            <div className="flex items-center justify-center gap-2 text-cyan-400">
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Ready to chat? We're online!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechTalksContactPage;