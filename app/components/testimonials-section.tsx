"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    title: "CEO, TechFlow",
    company: "Series A Fintech",
    content:
      "The Guys turned our regulatory nightmare into a competitive advantage. VASP license secured, operations running, $15M raised. They don't just deliver - they dominate.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Marcus Rodriguez",
    title: "Founder, CryptoVault",
    company: "DeFi Platform",
    content:
      "From zero to hero in 6 weeks. Legal structure, marketing blitz, operational excellence. These guys are the real deal when shit hits the fan.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Elena Volkov",
    title: "CMO, NeoBank",
    company: "Digital Banking",
    content:
      "PR that actually moves the needle. Crisis turned into opportunity, brand reputation restored, customer acquisition through the roof. Absolute legends.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "David Kim",
    title: "CTO, BlockChain Inc",
    company: "Web3 Infrastructure",
    content:
      "Technical advisory that saved us millions. Product roadmap, pricing strategy, team scaling - they see around corners that others miss.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialsSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={containerRef} className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500 via-transparent to-pink-500" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              What Founders Say
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't take our word for it. Here's what happens when ambitious founders team up with The Guys.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12 text-center relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 text-purple-400/30">
                <Quote size={48} />
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-8">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={24} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-2xl md:text-3xl text-white mb-12 leading-relaxed font-light italic">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-6">
                <img
                  src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full border-2 border-purple-400"
                />
                <div className="text-left">
                  <div className="text-xl font-bold text-white">{testimonials[currentIndex].name}</div>
                  <div className="text-purple-400 font-medium">{testimonials[currentIndex].title}</div>
                  <div className="text-gray-400 text-sm">{testimonials[currentIndex].company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-purple-400 scale-125" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
