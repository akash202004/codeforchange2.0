"use client";

import Image from "next/image";
import Link from "next/link";
import ProfileCard from "../ProfileCard";
import { useState } from "react";


export default function TeamPage() {
  const [moreOpen, setMoreOpen] = useState(false);

  const organizers = [
    {
      name: "Coming Soon",
      title: "",
      handle: "",
      status: "",
      avatarUrl: "",
    },
    {
      name: "Coming Soon",
      title: "",
      handle: "",
      status: "",
      avatarUrl: "",
    },
    {
      name: "Coming Soon",
      title: "",
      handle: "",
      status: "",
      avatarUrl: "",
    },
  ];

  const coreMembers = [
    {
      name: "Coming Soon",
      title: "",
      handle: "",
      status: "",
      avatarUrl: "",
    },
    {
      name: "Coming Soon",
      title: "",
      handle: "",
      status: "",
      avatarUrl: "",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <header className="fixed top-0 inset-x-0 w-full z-[9999] bg-white/70 supports-[backdrop-filter]:bg-white/50 md:backdrop-blur border-b border-white/20">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 md:w-16 md:h-16 relative">
              <Image
                src="/LOGO__1_-removebg-preview.png"
                alt="Cloud Native Durgapur Logo"
                fill
                sizes="(min-width: 768px) 4rem, 3rem"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Navigation (same as hero) */}
          <nav className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <ul className="flex gap-6 text-blue-900">
              {[
                { label: "Home", href: "/#home" },
                { label: "About", href: "/#about" },
                { label: "Venue", href: "/#venue" },
                { label: "Speakers", href: "/#speakers" },
                { label: "Sponsors", href: "/#sponsors" },
                { label: "Team", href: "/team" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-semibold hover:text-blue-600 transition-colors"
                    style={{ fontFamily: 'Michroma, sans-serif' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="relative">
                <button
                  className="font-semibold hover:text-blue-600 transition-colors"
                  style={{ fontFamily: 'Michroma, sans-serif' }}
                  onClick={() => setMoreOpen((v) => !v)}
                  aria-haspopup="true"
                  aria-expanded={moreOpen}
                >
                  More
                </button>
                <div
                  className={`absolute left-0 mt-2 w-56 rounded-xl border border-transparent bg-transparent backdrop-blur-0 shadow-none transition-all duration-200 ${moreOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                  role="menu"
                >
                  <ul className="py-2 text-blue-900" onClick={() => setMoreOpen(false)}>
                    <li><Link href="/#community-partners" className="block px-4 py-2 hover:bg-transparent" role="menuitem" style={{ fontFamily: 'Michroma, sans-serif' }}>Community Partners</Link></li>
                    <li><Link href="/#testimonials" className="block px-4 py-2 hover:bg-transparent" role="menuitem" style={{ fontFamily: 'Michroma, sans-serif' }}>Testimonials</Link></li>
                    <li><Link href="/#faqs" className="block px-4 py-2 hover:bg-transparent" role="menuitem" style={{ fontFamily: 'Michroma, sans-serif' }}>FAQs</Link></li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-blue-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main className="relative z-20 pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="relative text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4 tracking-tight" style={{ fontFamily: 'Michroma, sans-serif' }}>
              Our Team
            </h2>
            <div className="w-16 h-1 bg-blue-600/80 mx-auto rounded-full"></div>
          </div>

          {/* Organizers Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-blue-800 text-center mb-8" style={{ fontFamily: 'Michroma, sans-serif' }}>
              Organizers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {organizers.map((m, i) => (
                <ProfileCard
                  key={i}
                  name={m.name}
                  title={m.title}
                  handle={m.handle}
                  status={m.status}
                  avatarUrl={m.avatarUrl}
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                />
              ))}
            </div>
          </div>

          {/* Core Members Section */}
          <div>
            <h3 className="text-3xl font-bold text-blue-800 text-center mb-8" style={{ fontFamily: 'Michroma, sans-serif' }}>
              Core Team
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {coreMembers.map((m, i) => (
                <ProfileCard
                  key={i}
                  name={m.name}
                  title={m.title}
                  handle={m.handle}
                  status={m.status}
                  avatarUrl={m.avatarUrl}
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}