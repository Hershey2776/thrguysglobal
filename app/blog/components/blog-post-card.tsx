"use client"

import { motion } from "framer-motion"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

interface BlogPostCardProps {
  post: {
    id: string
    title: string
    excerpt: string
    category: string
    author: string
    date: string
    readTime: string
    image: string
    featured?: boolean
    tags: string[]
  }
  index: number
  featured?: boolean
}

export default function BlogPostCard({ post, index, featured = false }: BlogPostCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group"
    >
      <Link href={`/blog/${post.id}`}>
        <div
          className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-${featured ? "3xl" : "2xl"} overflow-hidden hover:border-gray-600/50 transition-all duration-300 cursor-pointer ${featured ? "h-full" : ""}`}
        >
          <div className={`relative ${featured ? "h-64" : "h-48"} overflow-hidden`}>
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {post.featured && (
              <div className="absolute top-4 left-4">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-full text-sm font-bold">
                  Featured
                </span>
              </div>
            )}
          </div>

          <div className={`p-${featured ? "8" : "6"}`}>
            <div
              className={`flex items-center gap-${featured ? "4" : "3"} mb-${featured ? "4" : "3"} text-${featured ? "sm" : "xs"} text-gray-400`}
            >
              <span className="bg-gray-700/50 px-3 py-1 rounded-full">{post.category}</span>
              {!featured && <span>{post.readTime}</span>}
              {featured && (
                <>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {post.author}
                  </div>
                </>
              )}
            </div>

            <h3
              className={`text-${featured ? "2xl" : "xl"} font-bold mb-${featured ? "4" : "3"} text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 ${!featured ? "line-clamp-2" : ""}`}
            >
              {post.title}
            </h3>

            <p
              className={`text-gray-300 mb-${featured ? "6" : "4"} leading-relaxed text-${featured ? "base" : "sm"} ${!featured ? "line-clamp-3" : ""}`}
            >
              {post.excerpt}
            </p>

            <div className={`flex items-center justify-between text-${featured ? "sm" : "xs"}`}>
              {featured ? (
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs bg-gray-700/30 px-2 py-1 rounded-full text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="flex items-center gap-2 text-gray-400">
                  <User size={12} />
                  {post.author}
                </div>
              )}
              <div className="flex items-center text-purple-400 font-semibold">
                Read More
                <ArrowRight
                  size={featured ? 16 : 12}
                  className={`ml-${featured ? 2 : 1} group-hover:translate-x-1 transition-transform`}
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
