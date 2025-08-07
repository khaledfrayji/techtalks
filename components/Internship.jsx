'use client'
import React, { useEffect, useRef } from 'react';
import { 
  Users, 
  Code, 
  GitBranch, 
  Award, 
  Clock, 
  CheckCircle, 
  Star,
  MessageCircle,
  ArrowRight,
  Shield,
  Target,
  Briefcase,
  Trophy,
  Zap,
  FileText,
  DollarSign,
  Heart
} from 'lucide-react';

const Internship = () => {
  const heroRef = useRef(null);
  const sectionsRef = useRef([]);

  const freeInternshipFeatures = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Team-Based Learning",
      description: "Work in teams of 4-5 members with diverse skill sets"
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Real Projects",
      description: "Build actual projects that solve real-world problems"
    },
    {
      icon: <GitBranch className="w-5 h-5" />,
      title: "Industry Tools",
      description: "Master Git/GitHub, Jira, and professional workflows"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Mentorship",
      description: "Guidance from experienced developers throughout"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "1 Month Duration",
      description: "Intensive 30-day program with structured milestones"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Certificate",
      description: "Official completion certificate from TechTalks"
    }
  ];

  const paidInternshipFeatures = [
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Senior Developer Mentorship",
      description: "Work directly with experienced senior developers"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Advanced Concepts",
      description: "Learn cutting-edge technologies and best practices"
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Production-Level Projects",
      description: "Contribute to real applications used by thousands"
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Letter of Recommendation",
      description: "Official recommendation letter from TechTalks"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "1-on-1 Code Reviews",
      description: "Personal feedback sessions with senior developers"
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      title: "Portfolio Enhancement",
      description: "Build impressive projects for your professional portfolio"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Abdallah",
      role: "Free Internship Graduate",
      quote: "Working in a team environment taught me collaboration skills I never knew I needed. The real projects made all the difference.",
      rating: 5
    },
    {
      name: "Khalil Moussawi", 
      role: "Paid Internship Graduate",
      quote: "The letter of recommendation helped me land my dream job. Learning from senior developers accelerated my growth by years.",
      rating: 5
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

  const handleWhatsAppClick = (type) => {
    const messages = {
      free: "Hi TechTalks! I'm interested in joining the FREE Team-Based Internship program. Can you provide more details about the application process and upcoming cohorts?",
      paid: "Hi TechTalks! I'm interested in the PAID Premium Internship program ($150). I'd like to learn more about working with senior developers and the application requirements."
    };
    
    const encodedMessage = encodeURIComponent(messages[type]);
    window.open(`https://wa.me/96176667359?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
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
          <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-red-500/20">
            <Zap className="w-4 h-4" />
            Only for Serious Developers
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            TechTalks <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Internship</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed px-4">
            Real projects. Real experience. Real results. Choose your path to professional excellence.
          </p>
        </div>

        {/* Free Internship Section */}
        <div ref={el => sectionsRef.current[0] = el} className="mb-16 sm:mb-20">
          <div className="bg-gradient-to-r from-gray-900/50 to-slate-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 sm:p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Content */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">Team-Based Internship</h2>
                    <p className="text-green-400 font-semibold">100% FREE</p>
                  </div>
                </div>
                
                <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
                  Experience real teamwork in a professional development environment. 
                  Work alongside 4-5 talented peers on actual projects while learning 
                  industry-standard tools and methodologies.
                </p>

                {/* Key Highlights */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-300">30-day intensive program</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-300">Work in cross-functional teams</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-300">Learn Git, GitHub, Jira workflows</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-300">Build portfolio-worthy projects</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => handleWhatsAppClick('free')}
                  className="group bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-500 hover:to-teal-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 w-full sm:w-auto"
                >
                  <span className="flex items-center justify-center gap-2 sm:gap-3">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">Apply for Free Internship</span>
                    <span className="sm:hidden">Apply for Free Program</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {freeInternshipFeatures.map((feature, index) => (
                  <div key={index} className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-3 sm:p-4 hover:border-green-500/50 transition-colors duration-300">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                      {React.cloneElement(feature.icon, { className: "w-4 h-4 sm:w-5 sm:h-5" })}
                    </div>
                    <h3 className="text-white font-semibold text-xs sm:text-sm mb-1 sm:mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Paid Internship Section */}
        <div ref={el => sectionsRef.current[1] = el} className="mb-16 sm:mb-20">
          <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 sm:p-8 lg:p-12 relative overflow-hidden">
            
            {/* Popular Badge */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
              Most Popular
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Content */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">Premium Internship</h2>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                      <p className="text-purple-400 font-semibold text-sm sm:text-base">$150 Investment</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
                  Work remotly with senior developers on production-level projects. 
                  Learn advanced concepts, receive personalized mentorship, and earn 
                  an official recommendation letter to boost your career.
                </p>

                {/* Key Highlights */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-300">1-month intensive with senior devs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-300">Official recommendation letter</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-300">Advanced tools & methodologies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-300">Production-ready portfolio projects</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => handleWhatsAppClick('paid')}
                  className="group bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 w-full sm:w-auto"
                >
                  <span className="flex items-center justify-center gap-2 sm:gap-3">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">Apply for Premium Internship</span>
                    <span className="sm:hidden">Apply for Premium Program</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {paidInternshipFeatures.map((feature, index) => (
                  <div key={index} className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-3 sm:p-4 hover:border-purple-500/50 transition-colors duration-300">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                      {React.cloneElement(feature.icon, { className: "w-4 h-4 sm:w-5 sm:h-5" })}
                    </div>
                    <h3 className="text-white font-semibold text-xs sm:text-sm mb-1 sm:mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div ref={el => sectionsRef.current[2] = el}>
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">Success Stories</h2>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 sm:p-6 hover:border-cyan-500/50 transition-colors duration-300">
                <div className="flex items-center gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">"{testimonial.quote}"</p>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internship;