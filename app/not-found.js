'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { 
  Home, 
  Search, 
  BookOpen, 
  ArrowLeft, 
  Compass,
  AlertTriangle,
  Coffee,
  Zap,
  Globe
} from 'lucide-react';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const quickLinks = [
    {
      icon: <Home className="w-5 h-5" />,
      label: "Home",
      href: "/",
      description: "Back to homepage",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      label: "All Courses",
      href: "/courses",
      description: "Browse our courses",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: "Ambassador Program",
      href: "/ambassador",
      description: "Join our community",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `
                   linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
                 `,
                 backgroundSize: '50px 50px',
                 transform: mounted ? 'translate(10px, 10px)' : 'translate(0, 0)',
                 transition: 'transform 20s linear infinite'
               }}>
          </div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* 404 Visual */}
        <div className="relative mb-8 sm:mb-12">
          {/* Large 404 Text */}
          <div className="relative">
            <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 leading-none select-none">
              404
            </h1>
            
            {/* Glitch Effect Overlay */}
            <div className="absolute inset-0 text-8xl sm:text-9xl lg:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 leading-none select-none opacity-30 animate-pulse">
              404
            </div>
          </div>

          {/* Warning Icon */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
              <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            The page you're looking for seems to have wandered off into the digital void. 
            Don't worry though – even the best developers encounter 404s!
          </p>
          
          {/* Fun Message */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 sm:p-6 mb-8 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Coffee className="w-5 h-5 text-amber-400" />
              <span className="text-slate-300 font-medium">Pro Tip</span>
            </div>
            <p className="text-slate-400 text-sm sm:text-base">
              While you're here, why not grab a coffee and check out our amazing courses? 
              Learning never goes out of style! 
            </p>
          </div>
        </div>

        {/* Quick Navigation Links */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-6">Where would you like to go?</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {quickLinks.map((link, index) => (
              <Link key={index} href={link.href} className="group">
                <div className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-xl`}></div>
                  <div className="relative bg-slate-800/30 border border-slate-700/50 group-hover:border-slate-600 rounded-xl p-4 sm:p-6 transition-all duration-300 transform group-hover:scale-105 backdrop-blur-sm">
                    <div className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      {link.icon}
                    </div>
                    <h4 className="text-white font-semibold mb-2">{link.label}</h4>
                    <p className="text-slate-400 text-sm">{link.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      

        {/* Error Code Details */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2 text-slate-400 text-sm backdrop-blur-sm">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Error Code: 404 | Resource Not Found</span>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <button 
            onClick={() => window.history.back()} 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Go back to previous page
          </button>
        </div>
      </div>

     

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-500"></div>
      <div className="absolute bottom-32 left-20 w-2 h-2 bg-emerald-400 rounded-full animate-ping delay-1000"></div>
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-1500"></div>
    </div>
  );
}