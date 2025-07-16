// components/Navbar.tsx

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Home, BookOpen, Route, Users, Megaphone } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/', icon: <Home size={16} /> },
    { label: 'Courses', href: '/courses', icon: <BookOpen size={16} /> },
   
    { label: 'Ambassador Program', href: '/ambassador', icon: <Megaphone size={16} /> },
    { label: 'About TechTalks', href: '/about', icon: <Users size={16} /> },
  ];

  const linkClasses = (href) =>
    `relative inline-flex items-center gap-1 transition-colors hover:text-[#00E5FF] ${
      pathname === href ? 'text-[#00E5FF]' : 'text-white'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-black/30 backdrop-blur-md text-white shadow-md transition duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="text-xl  flex items-center justify-center gap-1 font-bold text-white">
        <Image src={"/l.png"} width={50} height={50} alt='Techtalks-logo' />
        <h1 className='italic'>TechTalks</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClasses(link.href)}
            >
              {link.icon}
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-[-4px] left-0 h-[2px] w-full bg-[#00E5FF]" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          href="/courses"
          className="hidden rounded-md bg-[#2979FF] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#1c54b2] md:block"
        >
          Start Learning
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="flex flex-col space-y-4 bg-[#0D0D0D] px-6 pb-6 pt-4 text-sm font-medium md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClasses(link.href)}
              onClick={() => setIsOpen(false)}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
          <Link
            href="/courses"
            className="rounded-md bg-[#2979FF] px-4 py-2 text-center font-semibold text-white shadow-md transition hover:bg-[#1c54b2]"
            onClick={() => setIsOpen(false)}
          >
            Start Learning
          </Link>
        </div>
      )}
    </header>
  );
}
