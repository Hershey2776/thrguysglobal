"use client"

import { useRef } from "react"
import { motion, useScroll, useInView } from "framer-motion"
import { Search, FileText, Users, Rocket, TrendingUp, ArrowRight } from "lucide-react"

const processSteps = [
  {
    icon: Search,
    title: "Discovery",
    description: "Deep dive into your vision, challenges, and market opportunity. We uncover what others miss.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    title: "Blueprint",
    description: "Strategic roadmap with clear milestones, timelines, and success metrics. No fluff, just results.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Hand-picked specialists assigned to your project. Your success becomes our obsession.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Rocket,
    title: "Execution",
    description: "Rapid deployment across all fronts. Legal, marketing, ops, PR - everything moves in sync.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: TrendingUp,
    title: "Growth Loops",
    description: "Sustainable systems that compound your success. We build for the long game.",
    color: "from-indigo-500 to-purple-500",
  },
];

export default function ProcessSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="py-32 px-6 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Process
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From chaos to clarity in record time. Our battle-tested process turns ambitious visions into market reality.
          </p>
        </motion.div>

        {/* Desktop Process Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 2, delay: 0.5 }}
              className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform -translate-y-1/2 origin-left"
            />

            <div className="flex justify-between items-center">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative z-10"
                >
                  <div className="flex flex-col items-center text-center max-w-xs">
                    <motion.div
                      whileHover={{ scale: 1.1, rotateY: 180 }}
                      className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <step.icon size={32} className="text-white" />
                    </motion.div>

                    <h3 className="text-lg font-bold mb-3 mt-8 text-white">{step.title}</h3>

                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </div>

                  {index < processSteps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                      className="absolute top-10 -right-8 text-purple-400"
                    >
                      <ArrowRight size={24} />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Process Flow */}
        <div className="lg:hidden space-y-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex items-center gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center flex-shrink-0`}
              >
                <step.icon size={24} className="text-white" />
              </motion.div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
