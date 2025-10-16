"use client";

import Image from "next/image";
import ScrollVelocity from "./ScrollVelocity";
import ScrollVelocityContent from "./ScrollVelocityContent";
import Dock from "./Dock";
import ProfileCard from "./ProfileCard";
import BottomNavigation from "./BottomNavigation";

import { useState } from "react";
import { motion } from "motion/react";

export default function Home() {
  const [moreOpen, setMoreOpen] = useState(false);
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-indigo-100/40 to-purple-100/30 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100/20 via-blue-200/30 to-indigo-200/40 animate-gradient-y"></div>

        {/* Left Wave */}
        <div className="absolute left-0 top-0 bottom-0 w-40 md:w-56 lg:w-72 opacity-100 z-5">
          <Image
            src="/waves-DawnI9IY.png"
            alt="Left Wave"
            fill
            sizes="(min-width: 1024px) 18rem, (min-width: 768px) 14rem, 10rem"
            className="object-cover object-left"
            priority
          />
        </div>

        {/* Right Wave */}
        <div className="absolute right-0 top-0 bottom-0 w-40 md:w-56 lg:w-72 opacity-100 transform scale-x-[-1] z-5">
          <Image
            src="/waves-DawnI9IY.png"
            alt="Right Wave"
            fill
            sizes="(min-width: 1024px) 18rem, (min-width: 768px) 14rem, 10rem"
            className="object-cover object-right"
            priority
          />
        </div>
      </div>
      {/* Header (Sticky within Hero only) */}
      <div className="relative">
        <header className="sticky top-0 z-40 bg-transparent border-b border-white/20">
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

            {/* Navigation (simple, no gooey effect) */}
            <nav className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              <ul className="flex gap-6 text-blue-900">
                {[
                  { label: "Home", href: "#home" },
                  { label: "About", href: "#about" },
                  { label: "Venue", href: "#venue" },
                  { label: "Speakers", href: "#speakers" },
                  { label: "Sponsors", href: "#sponsors" },
                  { label: "Team", href: "/team" },

                ].map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="font-semibold hover:text-blue-600 transition-colors"
                      style={{ fontFamily: 'Michroma, sans-serif' }}
                    >
                      {item.label}
                    </a>
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
                      <li><a href="#community-partners" className="block px-4 py-2 hover:bg-transparent" role="menuitem" style={{ fontFamily: 'Michroma, sans-serif' }}>Community Partners</a></li>
                      <li><a href="#testimonials" className="block px-4 py-2 hover:bg-transparent" role="menuitem" style={{ fontFamily: 'Michroma, sans-serif' }}>Testimonials</a></li>
                      <li><a href="#faqs" className="block px-4 py-2 hover:bg-transparent" role="menuitem" style={{ fontFamily: 'Michroma, sans-serif' }}>FAQs</a></li>
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
      </div>

      {/* Hero Section */}
      <section id="home" className="relative z-20 min-h-screen flex items-center justify-center pt-0 -mt-12 md:-mt-20">
        <div className="container mx-auto px-4 text-center">
          {/* Bridge Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            <div className="relative w-[90vw] max-w-[1400px] aspect-[14/9] mx-auto">
              <Image
                src="/bridge-transparent-background-with-blue-line_545677-12672-removebg-preview.png"
                alt="Bridge Background"
                fill
                sizes="90vw"
                className="object-contain object-center bridge-enhanced-clear"
                priority
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="mb-2">
              <span className="inline-block px-8 py-4 bg-blue-100/80 text-blue-800 rounded-full text-2xl md:text-3xl lg:text-4xl font-bold" style={{ fontFamily: 'Michroma, sans-serif' }}>
                Welcome to
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-blue-900 mb-6 leading-tight" style={{ fontFamily: 'Michroma, sans-serif' }}>
              Cloud Native
              <span className="block text-blue-700 font-bold">Durgapur</span>
            </h1>
            <div className="flex justify-center">
              <motion.button
                className="px-8 py-4 bg-white/5 text-blue-700 rounded-xl transition-colors duration-300 flex items-center gap-3 font-bold backdrop-blur-sm ring-1 ring-blue-600/30 hover:ring-blue-600/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/60"
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", mass: 0.1, stiffness: 150, damping: 12 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                <span className="font-bold">Join Discord</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Socials - Right side in Hero */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-3 z-30">
          <div className="w-px h-10 bg-blue-300/60"></div>
          {(() => {
            const items = [
              {
                icon: (
                  <svg className="w-5 h-5 text-[#1DA1F2]" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23.954 4.569c-.885.392-1.83.656-2.825.775-1.049-1.124-2.523-1.706-4.117-1.706-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.166-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.631 1.953 2.445 3.376 4.6 3.415-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                ), label: 'Twitter', href: 'https://twitter.com/yourhandle'
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-[#0A66C2]" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.06C12.6 8.62 14.18 8 16.1 8 20.06 8 22 10.45 22 14.76V24h-4v-7.3c0-1.74-.03-3.98-2.42-3.98-2.42 0-2.79 1.88-2.79 3.84V24h-4V8z" /></svg>
                ), label: 'LinkedIn', href: 'https://www.linkedin.com/company/yourpage'
              },
              { icon: (<img src="https://cdn.simpleicons.org/instagram/E4405F" alt="Instagram" className="w-5 h-5" />), label: 'Instagram', href: 'https://www.instagram.com/yourhandle' },
              { icon: (<img src="https://cdn.simpleicons.org/discord/5865F2" alt="Discord" className="w-5 h-5" />), label: 'Discord', href: 'https://discord.gg/yourinvite' },
            ];
            return (
              <Dock
                items={items}
                panelHeight={220}
                baseItemSize={44}
                magnification={60}
                orientation="vertical"
              />
            );
          })()}
          <div className="w-px h-10 bg-blue-300/60"></div>
        </div>

      </section>

      {/* Marquee Section */}
      <section className="relative z-30 py-2 bg-blue-600 text-white overflow-hidden -mt-10 md:-mt-16">
        <ScrollVelocity
          texts={["SEE YOU SOON!!!!"]}
          velocity={80}
          className="text-xl font-bold"
        />
      </section>

      {/* About Section with Photo Slideshows */}
      <section id="about" className="relative z-20 py-12 overflow-hidden will-change-transform">
        <div className="container mx-auto px-4">
          {/* Section Header (About) */}
          <div className="relative text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4 tracking-tight" style={{ fontFamily: 'Michroma, sans-serif' }}>
              About
            </h2>
            <div className="w-16 h-1 bg-blue-600/80 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - About Content */}
            <div className="relative text-left">

              <div className="relative z-10">

                <p className="text-lg text-blue-800 mb-6 leading-relaxed">
                  Cloud Native Durgapur is a community-driven initiative focused on promoting cloud-native technologies,
                  DevOps practices, and modern software development methodologies in the Durgapur region.
                </p>
                <p className="text-lg text-blue-800 leading-relaxed">
                  We bring together developers, DevOps engineers, and technology enthusiasts to learn, share, and grow together
                  in the rapidly evolving world of cloud-native computing.
                </p>

                <p className="text-lg text-blue-800 mb-6 leading-relaxed">
                  Our mission is to make modern cloud-native engineering accessible in and around Durgapur by creating
                  an inclusive space for learning, mentorship, and open collaboration. Whether you are a beginner or a
                  seasoned professional, you’ll find peers, mentors, and opportunities to contribute.
                </p>

                <h4 className="text-lg font-bold text-blue-900 mb-2" style={{ fontFamily: 'Michroma, sans-serif' }}>
                  Focus areas
                </h4>
                <div className="flex flex-wrap gap-2 mb-2">
                  {['Kubernetes', 'Containers', 'DevOps', 'GitOps', 'Observability', 'Security', 'Serverless', 'Edge'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-blue-300/40 text-blue-900">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>

            {/* Right Side - Photo Slideshows */}
            <div className="space-y-6">
              {/* First Row - Smooth scroll (left) */}
              <div className="overflow-hidden py-4">
                <ScrollVelocityContent
                  velocity={40}
                  gap="gap-4"
                  items={[
                    <img key="1" src="/DSC_0343.JPG" alt="Community Event 1" className="h-36 w-52 object-cover rounded-lg shadow-md" />,
                    <img key="2" src="/DSC_0350.JPG" alt="Community Event 2" className="h-36 w-52 object-cover rounded-lg shadow-md" />,
                    <img key="3" src="/DSC_0361.JPG" alt="Community Event 3" className="h-36 w-52 object-cover rounded-lg shadow-md" />,
                    <img key="4" src="/DSC_0378.JPG" alt="Community Event 4" className="h-36 w-52 object-cover rounded-lg shadow-md" />,
                    <img key="5" src="/IMG_1023.JPG" alt="Community Event 5" className="h-36 w-52 object-cover rounded-lg shadow-md" />,
                    <img key="6" src="/IMG_0976.JPG" alt="Community Event 6" className="h-36 w-52 object-cover rounded-lg shadow-md" />,
                    <img key="7" src="/IMG_1028.JPG" alt="Community Event 7" className="h-36 w-52 object-cover rounded-lg shadow-md" />,
                    <img key="8" src="/IMG_1031.JPG" alt="Community Event 8" className="h-36 w-52 object-cover rounded-lg shadow-md" />,
                    <img key="9" src="/IMG_1034.JPG" alt="Community Event 9" className="h-36 w-52 object-cover rounded-lg shadow-md" />,
                    <img key="10" src="/IMG_1035.JPG" alt="Community Event 10" className="h-36 w-52 object-cover rounded-lg shadow-md" />,
                    <img key="11" src="/IMG_1036.JPG" alt="Community Event 11" className="h-36 w-52 object-cover rounded-lg shadow-md" />,
                    <img key="12" src="/IMG_1037.JPG" alt="Community Event 12" className="h-36 w-52 object-cover rounded-lg shadow-md" />,
                  ]}
                />
              </div>

              {/* Second Row - Smooth scroll (right) */}
              <div className="overflow-hidden py-4">
                <ScrollVelocityContent
                  velocity={-40}
                  gap="gap-4"
                  items={[
                    <img key="w1" src="/IMG_1008.JPG" alt="Workshop 1" className="h-36 w-52 object-cover rounded-lg shadow-md" loading="lazy" decoding="async" />,
                    <img key="w2" src="/IMG_1018.JPG" alt="Workshop 2" className="h-36 w-52 object-cover rounded-lg shadow-md" loading="lazy" decoding="async" />,
                    <img key="w3" src="/IMG_1022.JPG" alt="Workshop 3" className="h-36 w-52 object-cover rounded-lg shadow-md" loading="lazy" decoding="async" />,
                    <img key="w4" src="/IMG_E0970.JPG" alt="Workshop 4" className="h-36 w-52 object-cover rounded-lg shadow-md" loading="lazy" decoding="async" />,
                    <img key="w5" src="/IMG_1051.JPG" alt="Workshop 5" className="h-36 w-52 object-cover rounded-lg shadow-md" loading="lazy" decoding="async" />,
                    <img key="w6" src="/WhatsApp Image 2025-07-05 at 18.22.37_93b1af7b.jpg" alt="Workshop 6" className="h-36 w-52 object-cover rounded-lg shadow-md" loading="lazy" decoding="async" />,
                    <img key="w7" src="/IMG_1038.JPG" alt="Workshop 7" className="h-36 w-52 object-cover rounded-lg shadow-md" loading="lazy" decoding="async" />,
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section id="venue" className="relative z-20 py-20 will-change-transform">
        <div className="container mx-auto px-4 text-center">
          {/* Section Header (Venue) */}
          <div className="relative text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4 tracking-tight" style={{ fontFamily: 'Michroma, sans-serif' }}>
              Venue
            </h2>
            <div className="w-16 h-1 bg-blue-600/80 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto bg-black rounded-xl p-8 shadow-2xl border border-gray-700 mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.434999918623!2d87.3086523154503!3d23.51639998470258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f771ffc861a23d%3A0x69858a4697c3986!2sNational%20Institute%20of%20Technology%2C%20Durgapur!5e0!3m2!1sen!2sin!4v1678886333973!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
          <h3 className="text-2xl font-bold text-blue-900 mb-2" style={{ fontFamily: 'Michroma, sans-serif' }}>
            National Institute of Technology, Durgapur
          </h3>
          <p className="text-lg text-blue-800 mb-8">
            Mahatma Gandhi Avenue, A-Zone, Durgapur, West Bengal 713209
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>Get Directions</span>
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              <span>View Event Guide</span>
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7c0-1.1.9-2 2-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              <span>Explore Tracks</span>
            </button>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="relative z-20 py-16 will-change-transform">
        <div className="container mx-auto px-4">
          {/* Section Header (Speakers) */}
          <div className="relative text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4 tracking-tight" style={{ fontFamily: 'Michroma, sans-serif' }}>
              Speakers
            </h2>
            <div className="w-16 h-1 bg-blue-600/80 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {/* Speaker Card 1 */}
            <ProfileCard
              name="Coming Soon"
              title=""
              handle=""
              status=""
              avatarUrl=""
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
            />
            {/* Speaker Card 2 */}
            <ProfileCard
              name="Coming Soon"
              title=""
              handle=""
              status=""
              avatarUrl=""
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
            />
            {/* Speaker Card 3 */}
            <ProfileCard
              name="Coming Soon"
              title=""
              handle=""
              status=""
              avatarUrl=""
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
            />
          </div>
        </div>
      </section>

      {/* Organizers Section merged visually under Speakers */}
      <section id="organizers" className="relative z-20 py-8 -mt-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {/* Organizer 1 */}
            <ProfileCard
              name="Coming Soon"
              title=""
              handle=""
              status=""
              avatarUrl=""
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
            />
            {/* Organizer 2 */}
            <ProfileCard
              name="Coming Soon"
              title=""
              handle=""
              status=""
              avatarUrl=""
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
            />
            {/* Organizer 3 */}
            <ProfileCard
              name="Coming Soon"
              title=""
              handle=""
              status=""
              avatarUrl=""
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
            />
            {/* Organizer 4 */}
            <ProfileCard
              name="Coming Soon"
              title=""
              handle=""
              status=""
              avatarUrl=""
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
            />
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="relative z-20 py-20 will-change-transform">
        <div className="container mx-auto px-4">
          {/* Background Text */}
          <div className="relative text-center mb-16">

            <div className="relative z-10 pt-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4 tracking-tight" style={{ fontFamily: 'Michroma, sans-serif' }}>
                Sponsors & Partners
              </h2>
              <div className="w-16 h-1 bg-blue-600/80 mx-auto rounded-full"></div>
            </div>
          </div>

          {/* Sponsors Grid */}
          <div className="max-w-6xl mx-auto">
            {/* Row 1 - 5 sponsors */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
              {[
                { name: "GitHub", logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
                { name: "CORE", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=CORE" },
                { name: "ChainIDE", logo: "https://via.placeholder.com/120x60/4A90E2/FFFFFF?text=ChainIDE" },
                { name: "CIVIC", logo: "https://via.placeholder.com/120x60/6C5CE7/FFFFFF?text=CIVIC" },
                { name: "Devfolio", logo: "https://via.placeholder.com/120x60/3742FA/FFFFFF?text=Devfolio" },
              ].map((_, index) => (
                <div key={index} className="rounded-xl p-6 border border-blue-300/50 shadow-sm bg-white/10 backdrop-blur-md hover:bg-white/15 transition-colors duration-300 flex items-center justify-center min-h-[100px]">
                  <span className="text-blue-900 font-semibold uppercase tracking-wide" style={{ fontFamily: 'Michroma, sans-serif' }}>Coming Soon</span>
                </div>
              ))}
            </div>

            {/* Row 2 - 5 sponsors */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
              {[
                { name: "ETHIndia", logo: "https://via.placeholder.com/120x60/FF6B6B/FFFFFF?text=ETHIndia" },
                { name: "STARKNET", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=STARKNET" },
                { name: "PHAROS", logo: "https://via.placeholder.com/120x60/4A90E2/FFFFFF?text=PHAROS" },
                { name: "APTOS", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=APTOS" },
                { name: "Rise In", logo: "https://via.placeholder.com/120x60/A855F7/FFFFFF?text=Rise+In" },
              ].map((_, index) => (
                <div key={index} className="rounded-xl p-6 border border-blue-300/50 shadow-sm bg-white/10 backdrop-blur-md hover:bg-white/15 transition-colors duration-300 flex items-center justify-center min-h-[100px]">
                  <span className="text-blue-900 font-semibold uppercase tracking-wide" style={{ fontFamily: 'Michroma, sans-serif' }}>Coming Soon</span>
                </div>
              ))}
            </div>

            {/* Row 3 - 5 sponsors */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
              {[
                { name: "edugraph", logo: "https://via.placeholder.com/120x60/FF6B6B/FFFFFF?text=edugraph" },
                { name: "Filecoin", logo: "https://via.placeholder.com/120x60/0090FF/FFFFFF?text=Filecoin" },
                { name: "BUILDERS", logo: "https://via.placeholder.com/120x60/4A90E2/FFFFFF?text=BUILDERS" },
                { name: "Aethir", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=Aethir" },
                { name: "akomi", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=akomi" },
              ].map((_, index) => (
                <div key={index} className="rounded-xl p-6 border border-blue-300/50 shadow-sm bg-white/10 backdrop-blur-md hover:bg-white/15 transition-colors duration-300 flex items-center justify-center min-h-[100px]">
                  <span className="text-blue-900 font-semibold uppercase tracking-wide" style={{ fontFamily: 'Michroma, sans-serif' }}>Coming Soon</span>
                </div>
              ))}
            </div>

            {/* Row 4 - 4 sponsors (centered) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { name: "XYZ", logo: "https://via.placeholder.com/120x60/6C5CE7/FFFFFF?text=XYZ" },
                { name: "Merchanzi", logo: "https://via.placeholder.com/120x60/00D084/FFFFFF?text=Merchanzi" },
                { name: "SNU", logo: "https://via.placeholder.com/120x60/FF6B6B/FFFFFF?text=SNU" },
                { name: "MLH", logo: "https://via.placeholder.com/120x60/FF6B35/FFFFFF?text=MLH" },
              ].map((_, index) => (
                <div key={index} className="rounded-xl p-6 border border-blue-300/50 shadow-sm bg-white/10 backdrop-blur-md hover:bg-white/15 transition-colors duration-300 flex items-center justify-center min-h-[100px]">
                  <span className="text-blue-900 font-semibold uppercase tracking-wide" style={{ fontFamily: 'Michroma, sans-serif' }}>Coming Soon</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Partners Section */}
      <section id="community-partners" className="relative z-20 py-20">
        <div className="container mx-auto px-4">
          <div className="relative text-center mb-16">
            <div className="relative z-10 pt-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4 tracking-tight" style={{ fontFamily: 'Michroma, sans-serif' }}>
                Community Partners
              </h2>
              <div className="w-16 h-1 bg-blue-600/80 mx-auto rounded-full"></div>
            </div>
          </div>

          {/* Partners Grid (same structure as sponsors) */}
          <div className="max-w-6xl mx-auto">
            {/* Row 1 */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
              {new Array(5).fill(0).map((_, index) => (
                <div key={index} className="rounded-xl p-6 border border-blue-300/50 shadow-sm bg-white/10 backdrop-blur-md hover:bg-white/15 transition-colors duration-300 flex items-center justify-center min-h-[100px]">
                  <span className="text-blue-900 font-semibold uppercase tracking-wide" style={{ fontFamily: 'Michroma, sans-serif' }}>Coming Soon</span>
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
              {new Array(5).fill(0).map((_, index) => (
                <div key={index} className="rounded-xl p-6 border border-blue-300/50 shadow-sm bg-white/10 backdrop-blur-md hover:bg-white/15 transition-colors duration-300 flex items-center justify-center min-h-[100px]">
                  <span className="text-blue-900 font-semibold uppercase tracking-wide" style={{ fontFamily: 'Michroma, sans-serif' }}>Coming Soon</span>
                </div>
              ))}
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
              {new Array(5).fill(0).map((_, index) => (
                <div key={index} className="rounded-xl p-6 border border-blue-300/50 shadow-sm bg-white/10 backdrop-blur-md hover:bg-white/15 transition-colors duration-300 flex items-center justify-center min-h-[100px]">
                  <span className="text-blue-900 font-semibold uppercase tracking-wide" style={{ fontFamily: 'Michroma, sans-serif' }}>Coming Soon</span>
                </div>
              ))}
            </div>

            {/* Row 4 (centered, 4 cols) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {new Array(4).fill(0).map((_, index) => (
                <div key={index} className="rounded-xl p-6 border border-blue-300/50 shadow-sm bg-white/10 backdrop-blur-md hover:bg-white/15 transition-colors duration-300 flex items-center justify-center min-h-[100px]">
                  <span className="text-blue-900 font-semibold uppercase tracking-wide" style={{ fontFamily: 'Michroma, sans-serif' }}>Coming Soon</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-20 py-20">
        <div className="container mx-auto px-4">

          {/* Section header */}
          <div className="relative text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4 tracking-tight" style={{ fontFamily: 'Michroma, sans-serif' }}>
              Testimonials
            </h2>
            <div className="w-16 h-1 bg-blue-600/80 mx-auto rounded-full"></div>
          </div>

          {/* Testimonials rows (two moving rows) */}
          {(() => {
            const data = [
              {
                quote: "An amazing opportunity to connect with practitioners and learn by doing.",
                name: "Soumyadip Chowdhury",
                role: "Software Engineer, RedHat",
              },
              {
                quote: "Thank you Cloud Native Durgapur team for creating a welcoming community.",
                name: "Riddhi Dutta",
                role: "SWE-3, ex-Amazon",
              },
              {
                quote: "A well-organized event with high-quality sessions and great networking.",
                name: "Arsh Goyal",
                role: "Senior Software Engineer, Samsung",
              },
              {
                quote: "This event helped young engineers discover and build real cloud skills.",
                name: "Debashis Sen",
                role: "Chairman & MD, WBHIDCO",
              },
              {
                quote: "Great to see a community driving open-source and cloud-native adoption.",
                name: "Prof. Dr. Dhrubajyoti Chattopadhyay",
                role: "Vice-Chancellor, Sister Nivedita University",
              },
              {
                quote: "Kudos to the organizers for seamless execution and strong vision.",
                name: "Sanjay Kumar Das",
                role: "Managing Director, Webel",
              },
            ];

            const card = (t, key) => {
              const initials = t.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
              return (
                <div key={key} className="w-[320px] shrink-0 rounded-xl border border-blue-300/50 bg-white/10 backdrop-blur-md shadow-sm p-5 flex flex-col gap-4">
                  <p className="text-blue-900 leading-relaxed">“{t.quote}”</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600/10 ring-1 ring-blue-300/40 flex items-center justify-center text-blue-900 font-bold">
                      {initials}
                    </div>
                    <div className="text-sm">
                      <div className="font-semibold text-blue-900">{t.name}</div>
                      <div className="text-blue-700">{t.role}</div>
                    </div>
                  </div>
                </div>
              );
            };

            const row1 = data.slice(0, 4).map((t, i) => card(t, `r1-${i}`));
            // Use the same number of items as row1 to ensure identical segment widths
            const row2 = data.slice(2, 6).map((t, i) => card(t, `r2-${i}`));

            return (
              <div className="space-y-8 max-w-none">
                <ScrollVelocityContent items={row1} velocity={40} gap="gap-6" />
                <ScrollVelocityContent items={row2} velocity={-40} gap="gap-6" />
              </div>
            );
          })()}

        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="relative z-20 py-20">
        <div className="container mx-auto px-4">
          {/* Section header */}
          <div className="relative text-center mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4 tracking-tight" style={{ fontFamily: 'Michroma, sans-serif' }}>
              Questions
            </h2>
            <div className="w-16 h-1 bg-blue-600/80 mx-auto rounded-full"></div>
            <p className="mt-6 max-w-3xl mx-auto text-blue-800/90">
              It doesn&apos;t matter if you are a beginner or a seasoned hacker; we&apos;ve got you covered. Our FAQs will solve most of your doubts and queries.
            </p>
          </div>

          {/* Accordion */}
          {(() => {
            const faqs = [
              { q: "What is a Hackathon?", a: "A hackathon is an event where people collaborate intensively on software or hardware projects over a short period, typically 24–48 hours." },
              { q: "Who can participate?", a: "Students, professionals, and enthusiasts of all levels are welcome. Diversity of skills and backgrounds is encouraged." },
              { q: "How much does it cost to participate?", a: "Participation is generally free unless otherwise specified in the event details." },
              { q: "Can I submit a project I've already worked on?", a: "We encourage building something new during the event. Prior work can be used as building blocks, but the final submission should be created during the hackathon." },
              { q: "What is the maximum/minimum team size?", a: "Teams of 2–4 are ideal. Solo participation is allowed, and we will also help you form teams on-site." },
              { q: "Will hardware toolkits be available on-site?", a: "Limited hardware kits may be available depending on sponsors. You can also bring your own devices/kits." },
              { q: "What are the guidelines for the teams participating in the Hardware track?", a: "Follow safety rules, document your design, and ensure components are clearly listed. Judges may require a short demo of the prototype." },
              { q: "What will be provided for participants at the venue?", a: "Power, internet, basic refreshments, and seating will be arranged. Bring your laptops, chargers, and any special hardware you need." },
              { q: "Can I participate remotely?", a: "Remote participation depends on the specific event format. If enabled, we will share details ahead of time." },
            ];

            return (
              <div className="max-w-3xl mx-auto rounded-xl overflow-hidden">
                <ul className="divide-y divide-blue-300/30">
                  {faqs.map((item, idx) => {
                    const open = faqOpenIndex === idx;
                    return (
                      <li key={idx}>
                        <button
                          type="button"
                          className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-transparent transition-colors"
                          onClick={() => setFaqOpenIndex(open ? null : idx)}
                          aria-expanded={open}
                          aria-controls={`faq-panel-${idx}`}
                        >
                          <span className="text-blue-900 font-medium" style={{ fontFamily: 'Michroma, sans-serif' }}>{item.q}</span>
                          <span className="shrink-0 w-6 h-6 rounded-full border border-blue-300/60 flex items-center justify-center text-blue-900">
                            {open ? "−" : "+"}
                          </span>
                        </button>
                        {open && (
                          <div id={`faq-panel-${idx}`} className="px-5 pb-5 text-blue-800/90" style={{ fontFamily: 'Michroma, sans-serif' }}>
                            {item.a}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })()}
        </div>
      </section>



      {/* Footer */}
      <footer className="relative z-20 bg-blue-900 text-white py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 relative">
                <Image
                  src="/LOGO__1_-removebg-preview.png"
                  alt="Logo"
                  fill
                  sizes="2.5rem"
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: 'Michroma, sans-serif' }}>
                Cloud Native Durgapur
              </span>
            </div>
            <div className="text-blue-200">
              <p>&copy; 2024 Cloud Native Durgapur. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}
