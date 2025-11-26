"use client"

import { Instagram, Youtube, Mail, Linkedin } from "lucide-react"
import Link from "next/link"

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B001A] text-white py-12 px-6">
      {/* Top Row Navigation + Icons */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/10 pb-8">

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-10 text-sm tracking-[0.15em] font-semibold uppercase">
        <Link
            href="/"
            className="hover:text-purple-300 transition-colors flex items-center gap-1"
        >
            HOME
            <span className="text-purple-400">
            <ArrowIcon />
            </span>
        </Link>

        <Link
            href="/services"
            className="hover:text-purple-300 transition-colors flex items-center gap-1"
        >
            SERVICES
            <span className="text-purple-400">
            <ArrowIcon />
            </span>
        </Link>

        <Link
            href="/careers"
            className="hover:text-purple-300 transition-colors flex items-center gap-1"
        >
            CAREERS
            <span className="text-purple-400">
            <ArrowIcon />
            </span>
        </Link>

        <Link
            href="https://calendly.com/hershey-theguysglobal/30min"
            className="hover:text-purple-300 transition-colors flex items-center gap-1"
        >
            CONTACT
            <span className="text-purple-400">
            <ArrowIcon />
            </span>
        </Link>
        </div>


        {/* Social Icons — ORDER UPDATED */}
        <div className="flex items-center gap-6 text-xl">
          {/* LinkedIn */}
          <Link href="https://linkedin.com/company/theguysglobal" target="_blank" className="hover:text-purple-300">
            <Linkedin size={22} />
          </Link>

          {/* Instagram */}
          <Link href="https://instagram.com/theguysglobal" target="_blank" className="hover:text-purple-300">
            <Instagram size={22} />
          </Link>

          {/* YouTube */}
          <Link href="https://youtube.com/@theguysglobal" target="_blank" className="hover:text-purple-300">
            <Youtube size={22} />
          </Link>

          {/* Gmail */}
          <Link href="mailto:contact@theguysglobal.com" target="_blank" className="hover:text-purple-300">
            <Mail size={22} />
          </Link>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto flex items-center justify-between pt-6 text-sm text-gray-400">
        <p>2025 © TheGuys — All rights reserved</p>

        <div className="flex items-center gap-2">
          <span className="text-gray-300">Crafted with love</span>
          <img
            src="/heart.png"
            alt="Heart icon"
            className="w-5 h-5"
          />
        </div>
      </div>
    </footer>
  )
}
