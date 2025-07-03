"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, TrendingUp, Users, DollarSign } from "lucide-react"

const caseStudies = [
  {
    title: "BitBucks",
    subtitle: "From Concept to $50M Valuation",
    description:
      "Complete ecosystem build: legal structure, VASP licensing, marketing launch, and operational setup. Achieved product-market fit in 8 weeks.",
    metrics: [
      { icon: DollarSign, label: "Valuation", value: "$50M" },
      { icon: Users, label: "Users", value: "100K+" },
      { icon: TrendingUp, label: "Growth", value: "300%" },
    ],
    image: "/bitbucks.jpg?height=400&width=600",
    gradient: "from-blue-600 to-purple-600",
  },
  {
    title: "Epayme",
    subtitle: "Fintech Compliance & Launch",
    description:
      "Navigated complex regulatory landscape, secured EMI license, built operational infrastructure, and executed go-to-market strategy.",
    metrics: [
      { icon: DollarSign, label: "Funding", value: "$25M" },
      { icon: Users, label: "Transactions", value: "1M+" },
      { icon: TrendingUp, label: "Countries", value: "15" },
    ],
    image: "/epayme.jpg?height=300&width=600",
    gradient: "from-green-600 to-emerald-600",
  },
  {
    title: "Doge20",
    subtitle: "Viral Marketing & Community",
    description:
      "Orchestrated viral marketing campaign, built engaged community, managed crisis communications, and delivered explosive growth.",
    metrics: [
      { icon: DollarSign, label: "Market Cap", value: "$100M" },
      { icon: Users, label: "Community", value: "500K+" },
      { icon: TrendingUp, label: "Viral Reach", value: "50M" },
    ],
    image: "/doge20.jpg?height=400&width=600",
    gradient: "from-orange-600 to-red-600",
  },
]

export default function CaseStudiesSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results for real companies. See how we turn ambitious ideas into market-dominating realities.
          </p>
        </motion.div>

        <div className="space-y-32">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-16`}
            >
              {/* Content */}
              <div className="flex-1 space-y-8">
                <div>
                  <motion.h3
                    whileHover={{ scale: 1.02 }}
                    className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}
                  >
                    {study.title}
                  </motion.h3>
                  <h4 className="text-2xl text-gray-300 mb-6">{study.subtitle}</h4>
                  <p className="text-lg text-gray-400 leading-relaxed">{study.description}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-6">
                  {study.metrics.map((metric, metricIndex) => (
                    <motion.div key={metric.label} whileHover={{ scale: 1.05 }} className="text-center">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${study.gradient} flex items-center justify-center mx-auto mb-3`}
                      >
                        <metric.icon size={24} className="text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                      <div className="text-sm text-gray-400">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gradient-to-r ${study.gradient} px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-all`}
                >
                  See How We Did It
                  <ExternalLink size={16} />
                </motion.button>
              </div>

              {/* Image */}
              <motion.div whileHover={{ scale: 1.02, rotateY: 5 }} className="flex-1">
                <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-r ${study.gradient} p-1`}>
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
