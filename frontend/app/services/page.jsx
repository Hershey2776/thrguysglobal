"use client"

import { motion } from "framer-motion"
import { TrendingUp, Scale, Settings, Brain, Megaphone, ArrowRight } from "lucide-react"
import Navigation from "../components/navigation"
import Link from "next/link"

const services = [
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    subtitle: "That Actually Moves the Needle",
    description:
      "Stop throwing money at ads that don't convert. We build marketing machines that turn attention into revenue.",
    href: "/services/digital-marketing",
    gradient: "from-pink-500 to-purple-500",
    features: ["Social Media Management", "UGC Content Creation", "Influencer Campaigns", "Funnel Design"],
  },
  {
    icon: Scale,
    title: "Legal & Compliance",
    subtitle: "From Legal Mess to Launch-Ready",
    description:
      "Navigate the regulatory maze with confidence. We turn compliance requirements into competitive advantages.",
    href: "/services/legal-compliance",
    gradient: "from-blue-500 to-green-500",
    features: ["Company Formation", "VASP Licensing", "Regulatory Documentation", "Legal Advisory"],
  },
  {
    icon: Settings,
    title: "Operations & Infrastructure",
    subtitle: "From Chaos to Clockwork",
    description:
      "Build operational excellence that scales. Systems, talent, and processes that turn startups into market leaders.",
    href: "/services/operations",
    gradient: "from-blue-500 to-purple-500",
    features: ["Talent Acquisition", "Company Infrastructure", "Governance & SOPs", "Events & Community"],
  },
  {
    icon: Brain,
    title: "Strategy & Consulting",
    subtitle: "Vision Meets Execution",
    description: "Strategic guidance that turns ambitious ideas into market reality. Experience that money can't buy.",
    href: "/services/consulting",
    gradient: "from-purple-500 to-pink-500",
    features: ["Product Development", "Go-to-Market Strategy", "Pricing Optimization", "Business Development"],
  },
  {
    icon: Megaphone,
    title: "Public Relations",
    subtitle: "PR That Breaks the Internet",
    description: "Strategic communications that build brands and create cultural moments. Coverage that converts.",
    href: "/services/pr",
    gradient: "from-orange-500 to-pink-500",
    features: ["Launch PR", "Crisis Communications", "Founder Branding", "Press Coverage"],
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Full-Stack
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Every service you need to dominate your market. From legal structure to viral marketing, we're the
              complete solution for ambitious founders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <Link href={service.href}>
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-10 h-full hover:border-gray-600/50 transition-all duration-300 cursor-pointer">
                    <div
                      className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon size={40} className="text-white" />
                    </div>

                    <h3 className="text-3xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>

                    <h4 className="text-xl text-gray-300 mb-6 font-light">{service.subtitle}</h4>

                    <p className="text-gray-400 mb-8 leading-relaxed text-lg">{service.description}</p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-4`} />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className={`flex items-center font-semibold cursor-pointer bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                    >
                      Learn More
                      <ArrowRight size={20} className="ml-2 text-purple-400" />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">Ready to </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Dominate?
              </span>
            </h2>

            <p className="text-2xl text-gray-300 mb-12">Let's build something that changes everything.</p>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(139, 92, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-6 rounded-full text-2xl font-bold hover:shadow-2xl transition-all duration-300"
            >
              Book Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
