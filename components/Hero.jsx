"use client"
import React, { useEffect, useRef } from 'react';
import { ChevronRight, Play, Users, Code, BookOpen } from 'lucide-react';
import { GiCoffeeCup } from "react-icons/gi";
const TechTalksHero = () => {
  const heroRef = useRef(null);
  const particlesRef = useRef([]);
  const headlineRef = useRef(null);
  const sublineRef = useRef(null);
  const ctaRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    // Simulate GSAP animations with CSS transitions and JavaScript
    const animateElements = () => {
      // Animate headline
      if (headlineRef.current) {
        headlineRef.current.style.opacity = '0';
        headlineRef.current.style.transform = 'translateY(30px)';
        setTimeout(() => {
          headlineRef.current.style.transition = 'all 0.8s ease-out';
          headlineRef.current.style.opacity = '1';
          headlineRef.current.style.transform = 'translateY(0)';
        }, 200);
      }

      // Animate subline
      if (sublineRef.current) {
        sublineRef.current.style.opacity = '0';
        sublineRef.current.style.transform = 'translateY(20px)';
        setTimeout(() => {
          sublineRef.current.style.transition = 'all 0.8s ease-out';
          sublineRef.current.style.opacity = '1';
          sublineRef.current.style.transform = 'translateY(0)';
        }, 400);
      }

      // Animate CTAs
      if (ctaRef.current) {
        ctaRef.current.style.opacity = '0';
        ctaRef.current.style.transform = 'translateY(20px)';
        setTimeout(() => {
          ctaRef.current.style.transition = 'all 0.8s ease-out';
          ctaRef.current.style.opacity = '1';
          ctaRef.current.style.transform = 'translateY(0)';
        }, 600);
      }

      // Animate visual
      if (visualRef.current) {
        visualRef.current.style.opacity = '0';
        visualRef.current.style.transform = 'translateX(30px)';
        setTimeout(() => {
          visualRef.current.style.transition = 'all 1s ease-out';
          visualRef.current.style.opacity = '1';
          visualRef.current.style.transform = 'translateX(0)';
        }, 800);
      }
    };

    animateElements();

   
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Aura */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"></div>
        
       
        {/* Glowing Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
          <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto py-4 px-6 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Pre-headline */}
            <div className="text-cyan-400 text-sm font-medium tracking-widest uppercase">
              A community built by devs, for devs
            </div>

            {/* Main Headline */}
            <h1 
              ref={headlineRef}
              className="text-5xl lg:text-7xl font-bold text-white leading-tight"
            >
              Learn Programming with the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                People Who Live It
              </span>
            </h1>

            {/* Subheadline */}
            <p 
              ref={sublineRef}
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
            Code smarter, not harder &rarr; with the right path and the right people.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Primary CTA */}
              <a href='/courses' className="group relative bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                <span className="flex items-center gap-2">
                  <BookOpen size={20} />
                  Explore Courses
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              {/* Secondary CTA */}
              <a href='https://chat.whatsapp.com/Lgi0Eubj6Jw9682LTKl1KA' className="group border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  <Users size={20} />
                  Join Community
                </span>
              </a>
            </div>

            {/* Trust Layer */}
            <div className="pt-8 border-t border-gray-800">
              <p className="text-gray-400 text-sm mb-4">Trusted by 5,000+ developers in Lebanon</p>
              <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                    <GiCoffeeCup size={16} className="text-white" />
                  </div>
                  <span className="text-gray-300 text-sm">Coffee</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <Code size={16} className="text-white" />
                  </div>
                  <span className="text-gray-300 text-sm">Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Play size={16} className="text-white" />
                  </div>
                  <span className="text-gray-300 text-sm">Enjoy</span> 
                </div>
               
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div ref={visualRef} className="relative">
            {/* 3D Laptop Mockup */}
            <div className="relative transform rotate-3d hover:rotate-3d-hover transition-transform duration-500">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 shadow-2xl border border-gray-700">
                {/* Screen */}
                <div className="bg-black rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  
                  {/* Code Editor UI */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400">function</span>
                      <span className="text-cyan-400">learnProgramming</span>
                      <span className="text-gray-300">() {"{"}</span>
                    </div>
                    <div className="pl-4 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400">const</span>
                        <span className="text-cyan-400">skills</span>
                        <span className="text-gray-300">=</span>
                        <span className="text-green-400">['React', 'Node.js', 'Python']</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-400">return</span>
                        <span className="text-cyan-400">buildYourFuture</span>
                        <span className="text-gray-300">(skills)</span>
                      </div>
                    </div>
                    <div className="text-gray-300">{"}"}</div>
                  </div>
                </div>

                {/* Dashboard Preview */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                      <div>
                        <div className="text-white text-sm font-medium">React Fundamentals</div>
                        <div className="text-gray-400 text-xs">85% Complete</div>
                      </div>
                    </div>
                    <div className="w-12 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-10 h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <div>
                        <div className="text-white text-sm font-medium">Node.js Mastery</div>
                        <div className="text-gray-400 text-xs">Next Course</div>
                      </div>
                    </div>
                    <div className="text-cyan-400 text-sm">Start</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center animate-bounce">
                <Code size={20} className="text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
                <Play size={24} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        .rotate-3d {
          transform: perspective(1000px) rotateY(-15deg) rotateX(5deg);
        }
        
        .rotate-3d-hover {
          transform: perspective(1000px) rotateY(-10deg) rotateX(2deg);
        }
      `}</style>
    </div>
  );
};

export default TechTalksHero;