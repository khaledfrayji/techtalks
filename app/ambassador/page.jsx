'use client'
import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, 
  Star, 
  Globe, 
  Award, 
  MessageCircle, 
  Book, 
  Brain, 
  Briefcase,
  ChevronRight,
  ArrowRight,
  CheckCircle,
  Play,
  Share2,
  Target,
  Heart,
  Lightbulb,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const TechTalksAmbassador = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const heroRef = useRef(null);
  const sectionsRef = useRef([]);

  const benefits = [
    {
      icon: <Book className="w-8 h-8" />,
      title: "Free Access to Specific Courses",
      description: "Get unlimited access to all TechTalks courses and premium content.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Early Access to New Content",
      description: "Be the first to try new courses and features before public release.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Recognition Across Platforms",
      description: "Get featured on our website, social media, and community channels.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Resume-Boosting Experience",
      description: "Add valuable community leadership experience to your professional profile.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Direct Influence on Product Direction",
      description: "Shape the future of TechTalks with your feedback and suggestions. You, one of us.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Exclusive Community Access",
      description: "Join a private Discord channel with other ambassadors and core team members.",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const responsibilities = [
    {
      icon: <Share2 className="w-6 h-6 text-cyan-400" />,
      text: "Share TechTalks content with your audience and development communities"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-purple-400" />,
      text: "Give early feedback on course material and new features"
    },
    {
      icon: <Users className="w-6 h-6 text-green-400" />,
      text: "Represent TechTalks in your local or online developer spaces"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-orange-400" />,
      text: "Suggest ideas, report bugs, and help test new features"
    },
    {
      icon: <Heart className="w-6 h-6 text-pink-400" />,
      text: "Foster a welcoming and inclusive learning environment"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Abdallah",
      role: "Full-Stack Developer",
      avatar: "SA",
      quote: "Being a TechTalks Ambassador has connected me with an amazing community of developers. The early access to courses has accelerated my learning journey tremendously.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Khalil El-Sayed",
      role: "DevOps Engineer",
      avatar: "KS",
      quote: "I love having a direct impact on course content. It feels great to contribute to the learning experience of thousands of developers.",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Mustafa Hamdan",
      role: "Frontend Developer",
      avatar: "MH",
      quote: "The ambassador program has boosted my professional profile significantly. Being recognized as a community leader has opened up new opportunities and connections.",
      color: "from-green-500 to-teal-500"
    }
  ];

  const faqs = [
    {
      question: "Do I need a large following?",
      answer: "Not at all! We value passion and engagement over follower count. Whether you have 50 followers or 5,000, what matters is your enthusiasm for helping others learn and grow in tech."
    },
    {
      question: "Is this a paid position?",
      answer: "The ambassador program is volunteer-based, but we provide significant value through free courses, exclusive access, recognition, and networking opportunities that can advance your career."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, absolutely! We understand that circumstances change. You can step down from the program at any time with no obligations or hard feelings."
    },
    {
      question: "How long is the commitment?",
      answer: "We ask for a minimum 6-month commitment to allow you to truly make an impact and get the most out of the program. After that, you can continue as long as you'd like."
    },
    {
      question: "What are the time requirements?",
      answer: "We're flexible! Most ambassadors spend 6-8 hours per month on ambassador activities. We work around your schedule and understand that your day job comes first."
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

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

 

  return (
    <div className="min-h-screen bg-black overflow-clip">
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
        <div ref={heroRef} className="text-center mb-20">
          <div className="relative">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Become a TechTalks
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 block">
                Ambassador
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Help shape the future of developer learning. Inspire, connect, and grow with us while making a real impact on the tech community.
            </p>
            
            {/* Hero CTA */}
            <button

              className="group bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <a href={"https://kdpsg5nkr8j.typeform.com/to/Yo8wnvKf"} className="flex items-center gap-3">
                <Image width={50} height={50}  src="/logo.png" alt="Apply Now" />
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </button>

            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-8 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-bounce"></div>
          </div>
        </div>

        {/* What is the Ambassador Program */}
        <div ref={el => sectionsRef.current[0] = el} className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-bold text-white mb-6">What is the Ambassador Program?</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            TechTalks Ambassadors are passionate developers who help grow our learning community by sharing insights, 
            giving feedback, and being a bridge between learners and content creators. You'll play a vital role in 
            shaping how developers around the world learn and advance their careers.
          </p>
        </div>

        {/* Why Join - Benefits */}
        <div ref={el => sectionsRef.current[1] = el} className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Join Our Ambassador Program?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 group-hover:border-cyan-500/50 rounded-xl p-6 transition-all duration-300 transform group-hover:scale-105">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-4`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What Ambassadors Do */}
        <div ref={el => sectionsRef.current[2] = el} className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Ambassadors Do</h2>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <p className="text-gray-300 text-center mb-8">
              We keep the responsibilities light and inspiring. Here's how you can make an impact:
            </p>
            <div className="space-y-4">
              {responsibilities.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-800/50 transition-colors duration-300">
                  <div className="flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <p className="text-gray-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Voices from the Community */}
        <div ref={el => sectionsRef.current[3] = el} className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Voices from Our Community
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.color} rounded-xl opacity-10 group-hover:opacity-15 transition-opacity duration-300`}></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center text-white font-bold`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic leading-relaxed">"{testimonial.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Apply */}
        <div ref={el => sectionsRef.current[4] = el} className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-bold text-white mb-6">How to Apply</h2>
          <p className="text-lg text-gray-300 mb-8">
            Ready to join our mission? We're looking for passionate developers who love sharing knowledge 
            and building community. Click below to start your application.
          </p>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <h3 className="text-lg font-semibold text-white mb-4">Selection Criteria:</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-300 text-sm">Active in tech community</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-300 text-sm">Passionate about education</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-300 text-sm">Collaborative mindset</span>
              </div>
            </div>
            
            <button

              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              <a href={"https://kdpsg5nkr8j.typeform.com/to/Yo8wnvKf"} className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Start Application
              </a>
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div ref={el => sectionsRef.current[5] = el} className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div ref={el => sectionsRef.current[6] = el} className="text-center">
          <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join a community of passionate developers who are shaping the future of tech education. 
              Your voice matters, and together we can build something amazing.
            </p>
            
            <button 
            
              className="group bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-12 py-4 rounded-lg font-semibold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
            >
              <a href={"https://kdpsg5nkr8j.typeform.com/to/Yo8wnvKf"} className="flex items-center gap-3">
                <Users className="w-6 h-6" />
                Become an Ambassador
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </button>
            
            <p className="text-gray-400 text-sm mt-6">
              Application takes less than 5 minutes to complete
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechTalksAmbassador;