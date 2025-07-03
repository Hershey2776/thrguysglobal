// Intended metadata for this page:
// title: 'About The Guys – AI-Powered Agency for Growth, Legal, PR & Operations'
// description: 'The Guys is a modern, AI-powered full-stack agency helping startups & global businesses scale faster through digital, legal, operations & PR support.'

"use client";

import Navigation from "../components/navigation";
import { motion } from "framer-motion";
import {
  Users,
  Brain,
  Rocket,
  Scale,
  Megaphone,
  Settings,
  Star,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen text-white">
      <Navigation />
      {/* HERO/INTRO SECTION */}
      <section className="relative py-32 px-6 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl z-0" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            About The Guys
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold mb-8 text-white/90"
          >
            The World's First Full-Stack AI Agency For Growth, Compliance &
            Scale
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-8"
          >
            We're not your typical agency. The Guys was built by people who've
            actually run businesses not just consulted on them. We mix hands-on
            experience with smart use of AI to help companies grow faster, stay
            compliant & look sharp in public.
            <br />
            <br />
            From digital campaigns to legal structuring, from building teams to
            managing launches, we take care of everything you need to scale
            without the usual mess.
          </motion.p>
          {/* Mascot Placeholder - replaced with Rocket icon */}
          <div className="flex justify-center mb-4">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center shadow-lg border-4 border-white/20">
              <Rocket size={64} className="text-white/80" />
            </div>
          </div>
        </div>
      </section>
{/*  */}
      {/* VISION & DIFFERENTIATORS */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              🚀 Our Vision
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              To be the most effective agency in the world not the biggest by
              helping businesses grow without unnecessary friction.
            </p>
            <h3 className="text-2xl font-bold mb-2 text-white">
              🧠 What Sets Us Apart
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>AI at the core of our operations</li>
              <li>Full-stack offerings across departments</li>
              <li>Operator-level speed & clarity</li>
            </ul>
            <p className="text-gray-300">
              We don't just give advice. We execute like it's our own business.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            {/* Mascot Placeholder - replaced with inline SVG illustration */}
            <div className="w-56 h-56 rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-2xl border-4 border-white/10">
              {/* Inline SVG from undraw.co: undraw_team_spirit_re_yl1v.svg */}
              <svg width="120" height="120" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="400" cy="550" rx="300" ry="30" fill="#fff" fillOpacity="0.1"/>
                <rect x="320" y="400" width="160" height="100" rx="20" fill="#fff" fillOpacity="0.2"/>
                <circle cx="400" cy="370" r="40" fill="#fff" fillOpacity="0.3"/>
                <rect x="370" y="320" width="60" height="60" rx="15" fill="#fff" fillOpacity="0.2"/>
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="py-24 px-6 bg-black/80">
        <div className="max-w-5xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            🌍 Who We Work With
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-lg">
              <li>Fintech products</li>
              <li>SaaS platforms</li>
              <li>Web3 startups</li>
              <li>D2C brands</li>
              <li>Venture-backed ideas</li>
            </ul>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <p className="text-gray-300 text-lg mb-2">
                Our clients are from places like Dubai, Singapore, the US, UK, &
                India, they all have one thing in common: they move fast & want
                real outcomes.
              </p>
              {/* Mascot Placeholder - replaced with Users icon */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center shadow-lg border-4 border-white/20 mt-4 mx-auto">
                <Users size={48} className="text-white/80" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              👥 Who We Are
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              We're a lean team of builders ex-COOs, marketers, developers,
              compliance pros & operators. People who've been in the trenches,
              built things from scratch, raised funds, passed licensing audits,
              scaled companies & done it under pressure.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Built tech products that scaled to millions</li>
              <li>Closed licensing in 6+ countries</li>
              <li>Designed funnels that convert</li>
              <li>Launched brands with global reach</li>
            </ul>
            <p className="text-gray-300">
              No fluff. Just real work, done well.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            {/* Mascot Placeholder - replaced with Brain icon */}
            <div className="w-56 h-56 rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-2xl border-4 border-white/10">
              <Brain size={80} className="text-white/80" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-center"
          >
            🧩 Our Capabilities
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Marketing */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-gray-600/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-6">
                <Megaphone size={32} className="text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">
                Digital Marketing
              </h4>
              <ul className="text-gray-300 mb-6 leading-relaxed list-disc list-inside">
                <li>Social Media, Funnels, UGC, Influencers</li>
              </ul>
            </motion.div>
            {/* Legal & Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-gray-600/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-6">
                <Scale size={32} className="text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">
                Legal & Compliance
              </h4>
              <ul className="text-gray-300 mb-6 leading-relaxed list-disc list-inside">
                <li>Company Setup, Licensing, Docs</li>
              </ul>
            </motion.div>
            {/* Operations */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-gray-600/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-6">
                <Settings size={32} className="text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">Operations</h4>
              <ul className="text-gray-300 mb-6 leading-relaxed list-disc list-inside">
                <li>SOPs, Talent, Infrastructure</li>
              </ul>
            </motion.div>
            {/* Strategy & Consulting */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-gray-600/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                <Brain size={32} className="text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">
                Strategy & Consulting
              </h4>
              <ul className="text-gray-300 mb-6 leading-relaxed list-disc list-inside">
                <li>GTM, Biz Dev, Pricing</li>
              </ul>
            </motion.div>
            {/* PR & Communications */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-gray-600/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                <Megaphone size={32} className="text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">
                PR & Communications
              </h4>
              <ul className="text-gray-300 mb-6 leading-relaxed list-disc list-inside">
                <li>Media, Branding, Crisis Response</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          🤝 Let's Work Together
        </motion.h3>
        <p className="text-xl text-gray-300 mb-8">
          If you're looking for an agency that knows how to deliver instead of
          just making decks you've found your people.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
          <a
            href="/services"
            className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold text-white text-center hover:shadow-lg transition-all"
          >
            👉 Check Our Services
          </a>
          <a
            href="https://calendly.com/hershey-theguysglobal/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-white text-center hover:bg-white/10 transition-all"
          >
            👉 Book a Strategy Session
          </a>
        </div>
      </section>
    </div>
  );
}
