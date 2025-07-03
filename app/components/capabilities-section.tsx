"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Brain, Megaphone, TrendingUp, Scale, Settings, ArrowRight } from "lucide-react"
import Link from "next/link"
const capabilities = [
  {
    icon: Brain,
    title: "Strategy & Consulting",
    description: "Product development guidance, GTM strategy, pricing optimization, and biz dev support.",
    gradient: "from-blue-500 to-cyan-500",
    link: "/services/consulting",
  },
  {
    icon: Megaphone,
    title: "Public Relations",
    description: "Press coverage strategy, influencer branding, crisis comms, and launch PR that breaks the internet.",
    gradient: "from-purple-500 to-pink-500",
    link: "/services/pr",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Social media management, UGC content, influencer campaigns, and funnel design that converts.",
    gradient: "from-green-500 to-emerald-500",
    link: "/services/digital-marketing",
  },
  {
    icon: Scale,
    title: "Legal & Compliance",
    description: "Company formations, VASP licensing, VARA, EMI, MSB, FCA - we handle the legal mess.",
    gradient: "from-orange-500 to-red-500",
    link: "/services/legal-compliance",
  },
  {
    icon: Settings,
    title: "Operations & Infra",
    description: "Talent hiring, company setup, governance, SOPs, and event management.",
    gradient: "from-indigo-500 to-purple-500",
    link: "/services/operations",
  },
]

export default function CapabilitiesSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Capabilities
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From legal mess to launch-ready in 4 weeks. We're the full-stack solution for ambitious founders who refuse
            to settle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-gray-600/50 transition-all duration-300">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${capability.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <capability.icon size={32} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {capability.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">{capability.description}</p>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center text-purple-400 font-semibold cursor-pointer"
                >
                  <Link href={capability.link}>Learn More</Link>
                  <ArrowRight size={16} className="ml-2" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
