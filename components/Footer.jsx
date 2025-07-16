import React from 'react';
import Link from 'next/link';
import { Code, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { CiMail } from "react-icons/ci";
const TechTalksFooter = () => {
  const exploreLinks = [
    { label: 'Courses', href: '/courses' },
    { label: 'Learning Paths', href: '/paths' },
    { label: 'Ambassador Program', href: '/ambassador' },
    { label: 'Community', href: '/community' }
  ];

  const companyLinks = [
    { label: 'About TechTalks', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Terms & Conditions', href: '/terms' },
   
  ];

  const socialLinks = [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/techtalks.lb/',
      icon: <Instagram className="w-5 h-5" />,
      hoverColor: 'hover:text-pink-400'
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/company/techtalks-official',
      icon: <Linkedin className="w-5 h-5" />,
      hoverColor: 'hover:text-blue-400'
    },
    {
      label: 'WhatsApp',
      href: 'mailto:techtalks',
      icon: <CiMail className="w-5 h-5 font-bold" />,
      hoverColor: 'hover:text-red-400'
    }
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Logo & Tagline */}
          <div className="lg:col-span-1 text-center sm:space-y-6">
            <Link href="/" className=" flex justify-center items-center gap-3 group mb-4">
            
              <Image src={"/l.png"} width={100} height={100} alt='Techtalks-logo' />

             
            </Link>
            <p className="text-gray-400 text-center  leading-relaxed">
            We’ve been stuck too. That’s why we built this.
            </p>
           
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6">Explore</h3>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6">Connect</h3>
            <div className="flex flex-col space-y-4">
              <p className="text-gray-400 text-sm mb-2">
                Follow us on social media and stay connected with the TechTalks community.
              </p>
              
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 transform hover:scale-110 text-gray-400 ${social.hoverColor}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* WhatsApp Contact Info */}
              <div className="mt-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <p className="text-gray-400 text-sm mb-2">Need help? Contact us:</p>
                <a
                  href="https://wa.me/96176667359"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-300 group"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm group-hover:underline">
                    WhatsApp Support
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © TechTalks 2025. All rights reserved.
            </div>

            {/* Additional Links (Mobile) */}
            <div className="flex items-center gap-6 text-sm">
              <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Terms & Privacy
              </Link>
             
              <Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
    </footer>
  );
};

export default TechTalksFooter;