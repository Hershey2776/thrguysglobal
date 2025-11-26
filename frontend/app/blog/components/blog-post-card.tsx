"use client"

import { motion } from "framer-motion"
import { Calendar, User, ArrowRight, Clock, Eye } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import type { BlogPost } from "@/lib/api/blog"

interface BlogPostCardProps {
  post: BlogPost
  index: number
  featured?: boolean
}

export default function BlogPostCard({ post, index, featured = false }: BlogPostCardProps) {
  const imageUrl = post.image || "/placeholder.svg"

  return (
    <motion.article
      itemScope
      itemType="https://schema.org/BlogPosting"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group h-full"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="block h-full"
        title={`Read blog: ${post.title}`}
        itemProp="url"
      >
        <div
          className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 cursor-pointer h-full flex flex-col ${
            featured ? "shadow-lg shadow-purple-500/10" : ""
          }`}
        >
          {/* Image */}
          <div className={`relative ${featured ? "h-64" : "h-48"} overflow-hidden`}>
            <img
              src={imageUrl}
              alt={post.title}
              itemProp="image"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Featured Badge */}
            {post.featured && (
              <div className="absolute top-4 left-4">
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-lg">
                  Featured
                </Badge>
              </div>
            )}

            {/* Category Badge */}
            <div className="absolute bottom-4 left-4" itemProp="articleSection">
              <Badge className="bg-gray-900/80 backdrop-blur-sm text-white border-gray-700">
                {post.category}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className={`p-6 flex-1 flex flex-col ${featured ? "p-8" : ""}`}>
            {/* Meta */}
            <div
              className={`flex items-center gap-3 mb-4 text-xs text-gray-400 flex-wrap ${
                featured ? "text-sm" : ""
              }`}
            >
              <span className="flex items-center gap-1" itemProp="datePublished">
                <Calendar className="w-3 h-3" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>

              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{post.readTime}</span>
              </div>

              {post.views && (
                <div className="flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  <span>{post.views}</span>
                </div>
              )}
            </div>

            {/* Title */}
            <h2
              itemProp="headline"
              className={`font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 ${
                featured ? "text-2xl line-clamp-2" : "text-xl line-clamp-2"
              }`}
            >
              {post.title}
            </h2>

            {/* Excerpt */}
            <p
              itemProp="description"
              className={`text-gray-300 mb-4 leading-relaxed flex-1 ${
                featured ? "text-base line-clamp-3" : "text-sm line-clamp-3"
              }`}
            >
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-xs bg-gray-800/50 text-gray-400 border-gray-700"
                >
                  {tag}
                </Badge>
              ))}
              {post.tags.length > 3 && (
                <Badge
                  variant="outline"
                  className="text-xs bg-gray-800/50 text-gray-400 border-gray-700"
                >
                  +{post.tags.length - 3}
                </Badge>
              )}
            </div>

            {/* Footer */}
            <div
              className={`flex items-center justify-between pt-4 border-t border-gray-800 ${
                featured ? "text-sm" : "text-xs"
              }`}
            >
              <div className="flex items-center gap-2 text-gray-400" itemProp="author">
                <User className="w-4 h-4" />
                <span itemProp="name">{post.author}</span>
              </div>

              <div className="flex items-center text-purple-400 font-semibold group-hover:text-pink-400 transition-colors">
                Read More
                <ArrowRight
                  className={`ml-2 group-hover:translate-x-1 transition-transform ${
                    featured ? "w-4 h-4" : "w-3 h-3"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
