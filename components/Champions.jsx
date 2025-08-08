'use client'
import React, { useEffect, useRef } from 'react';
import { 
  ExternalLink, 
  Code, 
  Users, 
  Star, 
  Award,
  Linkedin,
  ArrowRight,
  Trophy,
  Target,
  Sparkles
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Champions = () => {
  const heroRef = useRef(null);
  const gridRef = useRef(null);

  // Sample champions data - replace with your actual data
  const champions = [
    {
      id: 1,
      name: "Sarah Abdallah",
      title: "Frontend Development Intern",
      description: "Passionate about React and modern web technologies. Built 5+ projects during internship including a full-stack e-commerce platform.",
      image: "/api/placeholder/300/300", // Replace with actual image path
      linkedinUrl: "https://linkedin.com/in/sarah-abdallah",
      specialties: ["React", "JavaScript", "CSS"],
      project: "E-commerce Dashboard"
    },
    {
      id: 2,
      name: "Khalil El-Sayed",
      title: "Backend Development Intern",
      description: "Expert in Node.js and database optimization. Created efficient APIs serving 10,000+ users with 99.9% uptime.",
      image: "/api/placeholder/300/300", // Replace with actual image path
      linkedinUrl: "https://linkedin.com/in/khalil-elsayed",
      specialties: ["Node.js", "MongoDB", "AWS"],
      project: "Real-time Chat API"
    },
    {
      id: 3,
      name: "Mustafa Hamdan",
      title: "Full-Stack Development Intern",
      description: "Versatile developer with expertise in both frontend and backend. Led team project that won internal hackathon.",
      image: "/api/placeholder/300/300", // Replace with actual image path
      linkedinUrl: "https://linkedin.com/in/mustafa-hamdan",
      specialties: ["React", "Python", "PostgreSQL"],
      project: "Team Management App"
    },
    {
      id: 4,
      name: "Lara Kassem",
      title: "Mobile Development Intern",
      description: "React Native specialist who built cross-platform apps with 50K+ downloads. Focused on user experience and performance.",
      image: "/api/placeholder/300/300", // Replace with actual image path
      linkedinUrl: "https://linkedin.com/in/lara-kassem",
      specialties: ["React Native", "TypeScript", "Firebase"],
      project: "Fitness Tracking App"
    },
    {
      id: 5,
      name: "Omar Khoury",
      title: "DevOps Intern",
      description: "Cloud infrastructure enthusiast. Automated deployment processes reducing deployment time by 80% using CI/CD pipelines.",
      image: "/api/placeholder/300/300", // Replace with actual image path
      linkedinUrl: "https://linkedin.com/in/omar-khoury",
      specialties: ["Docker", "Kubernetes", "Azure"],
      project: "Automated CI/CD Pipeline"
    },
    {
      id: 6,
      name: "Nour Sakr",
      title: "UI/UX Design Intern",
      description: "Creative designer with a technical background. Designed user interfaces that increased user engagement by 40%.",
      image: "/api/placeholder/300/300", // Replace with actual image path
      linkedinUrl: "https://linkedin.com/in/nour-sakr",
      specialties: ["Figma", "User Research", "Prototyping"],
      project: "Mobile App Redesign"
    },
    {
      id: 7,
      name: "Ali Moussawi",
      title: "Data Science Intern",
      description: "Machine learning enthusiast who developed predictive models with 95% accuracy. Strong background in Python and data visualization.",
      image: "/api/placeholder/300/300", // Replace with actual image path
      linkedinUrl: "https://linkedin.com/in/ali-moussawi",
      specialties: ["Python", "TensorFlow", "Data Analysis"],
      project: "Sales Prediction Model"
    },
    {
      id: 8,
      name: "Maya Tabbara",
      title: "Cybersecurity Intern",
      description: "Security-focused developer who implemented zero-trust architecture. Identified and fixed 15+ security vulnerabilities.",
      image: "/api/placeholder/300/300", // Replace with actual image path
      linkedinUrl: "https://linkedin.com/in/maya-tabbara",
      specialties: ["Penetration Testing", "Network Security", "Ethical Hacking"],
      project: "Security Audit System"
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

      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.champion-card');
        cards.forEach((card, index) => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(30px)';
          setTimeout(() => {
            card.style.transition = 'all 0.8s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 200 + index * 150);
        });
      }
    };

    animateElements();
  }, []);

  const handleLinkedInClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
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
          <div className="flex items-center justify-center gap-3 mb-6">
            <Trophy className="w-8 h-8 text-yellow-400" />
            <h1 className="text-5xl lg:text-6xl font-bold text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Champions</span>
            </h1>
            <Trophy className="w-8 h-8 text-yellow-400" />
          </div>
          <p className="text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed">
            Meet the exceptional interns who are building the future of technology with TechTalks
          </p>
          
        
        </div>

        {/* Champions Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {champions.map((champion, index) => (
            <div
              key={champion.id}
              className="champion-card group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => handleLinkedInClick(champion.linkedinUrl)}
            >
              {/* Image */}
              <div className="relative">
                <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {champion.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                </div>
                <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1">
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-yellow-400" />
                    <span className="text-xs text-white font-medium">{champion.project}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {champion.name}
                </h3>
                <p className="text-purple-400 text-sm font-medium mb-3">
                  {champion.title}
                </p>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                  {champion.description}
                </p>
                
                {/* Specialties */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {champion.specialties.slice(0, 3).map((specialty, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-md"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* LinkedIn CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-blue-400 text-sm">
                    <Linkedin className="w-4 h-4" />
                    <span>View Profile</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-purple-500/30 rounded-xl p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Want to Join Our Champions?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your journey with TechTalks and become part of our success stories. 
            Learn from industry experts and build real-world projects that matter.
          </p>
          
          <div className="flex flex-col items-center sm:flex-row gap-4 justify-center">
            
            <Link href={"/internship"} className="border-2 border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              <span className="flex items-center sm:text-md md:text-lg  text-[15px] gap-2">
                <Award className="w-5 h-5" />
                Internship Program
              </span>
            </Link>
          </div>

         </div>
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Champions;