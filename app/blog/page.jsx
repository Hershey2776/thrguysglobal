"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, User, ArrowRight, Search, Filter } from "lucide-react"
import Navigation from "../components/navigation"
import Link from "next/link"

const categories = [
  "All",
  "Legal & Compliance",
  "Digital Marketing",
  "Operations",
  "Consulting",
  "PR & Communications",
  "Industry Insights",
]

const staticBlogPosts = [
  {
    id: "vasp-licensing-2024-guide",
    title: "VASP Licensing in 2024: The Complete Founder's Guide to Not Getting Rekt",
    excerpt:
      "Regulatory landscape is shifting fast. Here's how to navigate VASP licensing across major jurisdictions without losing your shirt or your sanity.",
    category: "Legal & Compliance",
    author: "Marcus Chen",
    date: "2024-01-15",
    readTime: "12 min read",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
    tags: ["VASP", "Licensing", "Regulation", "Compliance"],
  },
  {
    id: "ugc-content-strategy-2024",
    title: "UGC Content That Actually Converts: Stop Paying for Fake Testimonials",
    excerpt:
      "Real creators, real content, real results. How to build a UGC strategy that drives 300% higher conversion rates than traditional advertising.",
    category: "Digital Marketing",
    author: "Sarah Rodriguez",
    date: "2024-01-12",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
    tags: ["UGC", "Content Marketing", "Conversion", "Social Media"],
  },
  {
    id: "hiring-elite-talent-startup",
    title: "How to Hire Elite Talent When You're Not Google (Yet)",
    excerpt:
      "Competing with tech giants for top talent? Here's how scrappy startups win the war for A-players without breaking the bank.",
    category: "Operations",
    author: "David Kim",
    date: "2024-01-10",
    readTime: "10 min read",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    tags: ["Hiring", "Talent", "Startups", "HR"],
  },
  {
    id: "product-market-fit-myths",
    title: "Product-Market Fit is Bullshit (And What Actually Matters)",
    excerpt:
      "Everyone talks about PMF, but most founders are chasing the wrong metrics. Here's what actually determines product success.",
    category: "Consulting",
    author: "Elena Volkov",
    date: "2024-01-08",
    readTime: "7 min read",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    tags: ["Product Development", "Strategy", "Metrics", "Growth"],
  },
  {
    id: "crisis-management-playbook",
    title: "Crisis Management Playbook: When Shit Hits the Fan",
    excerpt:
      "Your startup just got hit with a crisis. Here's the exact playbook we use to turn disasters into competitive advantages.",
    category: "PR & Communications",
    author: "Marcus Chen",
    date: "2024-01-05",
    readTime: "15 min read",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    tags: ["Crisis Management", "PR", "Communications", "Reputation"],
  },
  {
    id: "fintech-regulatory-trends-2024",
    title: "Fintech Regulatory Trends 2024: What Every Founder Needs to Know",
    excerpt:
      "Regulatory landscape is evolving rapidly. Here are the key trends that will impact fintech startups in 2024 and beyond.",
    category: "Industry Insights",
    author: "Sarah Rodriguez",
    date: "2024-01-03",
    readTime: "9 min read",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    tags: ["Fintech", "Regulation", "Trends", "2024"],
  },
  {
    id: "scaling-operations-zero-to-unicorn",
    title: "Scaling Operations from Zero to Unicorn: The Infrastructure Playbook",
    excerpt:
      "Operational excellence that scales. How to build the systems, processes, and team that take you from startup to market leader.",
    category: "Operations",
    author: "David Kim",
    date: "2024-01-01",
    readTime: "11 min read",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    tags: ["Operations", "Scaling", "Infrastructure", "Systems"],
  },
  {
    id: "viral-marketing-psychology",
    title: "The Psychology of Viral Marketing: Why Most Campaigns Fail",
    excerpt:
      "Viral marketing isn't luck—it's psychology. Here's the science behind content that spreads and campaigns that stick.",
    category: "Digital Marketing",
    author: "Elena Volkov",
    date: "2023-12-28",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    tags: ["Viral Marketing", "Psychology", "Content", "Social Media"],
  },
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [blogPosts, setBlogPosts] = useState(staticBlogPosts)
  const [loading, setLoading] = useState(true)

  const heroRef = useRef(null)
  const postsRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const isPostsInView = useInView(postsRef, { once: true, margin: "-100px" })

  useEffect(() => {
    fetch("/api/blog-posts")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setBlogPosts(data)
        }
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (post.tags && post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                The Guys
              </span>
              <br />
              <span className="text-white">Blog</span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Unfiltered insights from the trenches. Real strategies, real results, zero bullshit.
            </p>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-12 pr-8 py-3 bg-gray-800/50 border border-gray-700 rounded-full text-white focus:outline-none focus:border-purple-500 transition-colors appearance-none cursor-pointer"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category} className="bg-gray-800">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                        : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-12 text-center"
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Featured Articles
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Link href={`/blog/${post.id}`}>
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:border-gray-600/50 transition-all duration-300 cursor-pointer">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-full text-sm font-bold">
                            Featured
                          </span>
                        </div>
                      </div>

                      <div className="p-8">
                        <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                          <span className="bg-gray-700/50 px-3 py-1 rounded-full">{post.category}</span>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <User size={14} />
                            {post.author}
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                          {post.title}
                        </h3>

                        <p className="text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="text-xs bg-gray-700/30 px-2 py-1 rounded-full text-gray-400">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center text-purple-400 font-semibold">
                            Read More
                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section ref={postsRef} className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          {regularPosts.length > 0 && (
            <>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isPostsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-12 text-center"
              >
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Latest Articles
                </span>
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isPostsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group"
                  >
                    <Link href={`/blog/${post.id}`}>
                      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-gray-600/50 transition-all duration-300 cursor-pointer h-full">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>

                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
                            <span className="bg-gray-700/50 px-2 py-1 rounded-full">{post.category}</span>
                            <span>{post.readTime}</span>
                          </div>

                          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
                            {post.title}
                          </h3>

                          <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">{post.excerpt}</p>

                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2 text-gray-400">
                              <User size={12} />
                              {post.author}
                            </div>
                            <div className="flex items-center text-purple-400 font-semibold">
                              Read More
                              <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </>
          )}

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isPostsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center py-20"
            >
              <h3 className="text-2xl font-bold text-gray-400 mb-4">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Stay Ahead of the Game
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest insights, strategies, and industry updates delivered to your inbox. No spam, just value.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
