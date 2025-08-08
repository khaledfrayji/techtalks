'use client'
import React, { useEffect, useRef } from 'react';
import { 
  Search, 
  Code, 
  Rocket, 
  Users, 
  Target, 
  Heart, 
  BookOpen, 
  MessageCircle,
  ArrowRight,
  Star,
  Calendar,
  CheckCircle,
  Lightbulb,
  Shield,
  Globe
} from 'lucide-react';
import Link from 'next/link';

const About = () => {
  const heroRef = useRef(null);
  const sectionsRef = useRef([]);

  const differentiators = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Clarity Over Quantity",
      description: "No content overload. Only what truly matters.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Built by Developers",
      description: "We've been stuck before too. So we fixed it.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Learning That Sticks",
      description: "Practical, challenge-based, and purpose-driven.",
      color: "from-green-500 to-teal-500"
    }
  ];

  const visionPoints = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Accessible Education",
      description: "Quality learning shouldn't break the bank or require prerequisites."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Honest Guidance",
      description: "No BS, no false promises. Just real paths to real skills."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Empowering Every Learner",
      description: "From complete beginners to seasoned developers looking to level up."
    }
  ];

  const journeyMilestones = [
    {
      year: "2024",
      title: "The Spark",
      description: "Frustrated with scattered tutorials and outdated courses, we decided to build something better.",
      icon: <Lightbulb className="w-5 h-5" />
    },
    {
      year: "Early 2025",
      title: "Community Formation",
      description: "Started with a small group of passionate developers sharing knowledge and feedback.",
      icon: <Users className="w-5 h-5" />
    },
    {
      year: "Mid 2025",
      title: "Platform Launch",
      description: "Launched TechTalks with our first set of curated learning paths and courses.",
      icon: <Rocket className="w-5 h-5" />
    },
    {
      year: "Today",
      title: "Growing Community",
      description: "Thousands of developers learning, growing, and helping each other succeed.",
      icon: <Star className="w-5 h-5" />
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

  const handleExploreClick = () => {
    console.log('Navigate to courses');
    // In real app: navigate to /courses
  };

  const handleJoinCommunity = () => {
    console.log('Navigate to community');
    // In real app: navigate to /community
  };

  const handleAmbassadorClick = () => {
    console.log('Navigate to ambassador program');
    // In real app: navigate to /ambassadors
  };

  const handleLearningPathsClick = () => {
    console.log('Navigate to learning paths');
    // In real app: navigate to /learning-paths
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
          <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        
        {/* Hero Section */}
        <div ref={heroRef} className="text-center mb-20 max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            From <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Devs</span> to Devs
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed">
            TechTalks is here to cut through the noise and guide developers with clarity, not clutter.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleExploreClick}
              className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Explore Courses
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button 
              onClick={handleJoinCommunity}
              className="group border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Join Community
              </span>
            </button>
          </div>
        </div>

        {/* Our Mission */}
        <div ref={el => sectionsRef.current[0] = el} className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            We believe every developer deserves a clear path, not just endless tutorials. TechTalks is about real learning, with purpose. 
            We're here to bridge the gap between confusion and confidence, turning scattered knowledge into structured growth that actually sticks.
          </p>
        </div>

        {/* What Makes TechTalks Different */}
        <div ref={el => sectionsRef.current[1] = el} className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What Makes TechTalks Different
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {differentiators.map((item, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 group-hover:border-cyan-500/50 rounded-xl p-8 text-center transition-all duration-300 transform group-hover:scale-105">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Vision for Developers */}
        <div ref={el => sectionsRef.current[2] = el} className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Vision for Developers</h2>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {visionPoints.map((point, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    {point.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{point.title}</h3>
                  <p className="text-gray-300 text-sm">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Journey So Far */}
        <div ref={el => sectionsRef.current[3] = el} className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">The Journey So Far</h2>
          
          <div className="space-y-8">
            {journeyMilestones.map((milestone, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < journeyMilestones.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-16 bg-gradient-to-b from-cyan-500 to-purple-500 opacity-30"></div>
                )}
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-cyan-400 font-bold">{milestone.year}</span>
                      <h3 className="text-lg font-semibold text-white">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

       
       

        {/* Final CTA */}
        <div ref={el => sectionsRef.current[6] = el} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Whether you're just starting out or sharpening your edge — you're in the right place.
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of developers who are already building their future, one skill at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
            <Link href={"https://chat.whatsapp.com/Ige7sFb3m1LFqGgQwi3FV7"}
              onClick={handleJoinCommunity}
              className="group border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Join the Community
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;