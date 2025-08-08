import React from "react";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";

const TechTalksFooter = () => {
  const exploreLinks = [
    { label: "Courses", href: "/courses" },
    { label: "Ambassador Program", href: "/ambassador" },
    { label: "Champions", href: "/champions" },
    { label: "Internship", href: "/internship" },
  ];

  const companyLinks = [
    { label: "About TechTalks", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Terms & Conditions", href: "/terms" },
  ];

  const socialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/techtalks.lb/",
      icon: <Instagram className="w-5 h-5" />,
      bgGradient: "bg-gradient-to-br from-purple-500 to-pink-500",
      hoverGradient: "hover:from-purple-600 hover:to-pink-600",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/techtalkscourses/",
      icon: <Linkedin className="w-5 h-5" />,
      bgGradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      hoverGradient: "hover:from-blue-600 hover:to-blue-700",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@techtalks.lb",
      icon: <FaTiktok className="w-5 h-5" />,
      bgGradient: "bg-gradient-to-br from-gray-800 to-gray-900",
      hoverGradient: "hover:from-gray-900 hover:to-black",
    },
    {
      label: "Email",
      href: "mailto:contact@techtalkslb.com",
      icon: <CiMail className="w-5 h-5" />,
      bgGradient: "bg-gradient-to-br from-red-500 to-red-600",
      hoverGradient: "hover:from-red-600 hover:to-red-700",
    },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 relative">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & Tagline */}
        <div>
          <Link href="/" className="flex items-center gap-3 mb-4">
            <Image src="/l.png" width={80} height={80} alt="TechTalks Logo" />
            <span className="text-white font-bold text-lg">TechTalks</span>
          </Link>
          <p className="text-gray-100 text-sm leading-relaxed max-w-xs">
            We've been stuck too. That's why we built this.
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Explore</h3>
          <ul className="space-y-3">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-3">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>
          <p className="text-gray-400 text-sm mb-4">
            Follow us and stay connected with the TechTalks community.
          </p>
          <div className="flex gap-3 mb-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-1 ${social.bgGradient} ${social.hoverGradient} rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg text-white`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-8">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-gray-300 text-xs">
          <p>© {new Date().getFullYear()} TechTalks. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="/terms" className="text-gray-300">
              Terms & Privacy
            </Link>
            <Link href="/contact" className="text-gray-300">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Accent line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
    </footer>
  );
};

export default TechTalksFooter;