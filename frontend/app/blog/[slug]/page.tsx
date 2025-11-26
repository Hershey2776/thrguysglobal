import Link from "next/link"
import { Calendar, User, Clock, ArrowLeft, Eye, Heart } from "lucide-react"
import Navigation from "../../components/navigation"
import MarkdownClientWrapper from "./MarkdownClientWrapper"
import BlogPostCard from "../components/blog-post-card"
import { Badge } from "@/components/ui/badge"
import { getBlogPost, getRelatedPosts } from "@/lib/api/apiClient"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

// =============================
//   DYNAMIC SEO METADATA
// =============================
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return {
      title: "Article Not Found | The Guys Blog",
      description: "This article does not exist.",
    }
  }

  const ogImage =
    post.image && post.image.length > 5
      ? post.image
      : "https://theguysglobal.com/default-og-image.png"

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    keywords: post.metaKeywords || [],
    authors: [{ name: post.author }],
    alternates: {
      canonical: `https://theguysglobal.com/blog/${post.metaUrl || slug}`,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url: `https://theguysglobal.com/blog/${post.metaUrl || slug}`,
      type: "article",
      siteName: "The Guys Global",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.metaKeywords,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: [ogImage],
    },
  }
}

// =============================
//      BLOG PAGE COMPONENT
// =============================
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-gray-400 mb-6">The article you're looking for doesn't exist.</p>
          <Link
            href="/blog"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const relatedPosts = await getRelatedPosts(slug, 3)

  // =============================
  //     STRUCTURED DATA (JSON-LD)
  // =============================
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "The Guys",
      logo: {
        "@type": "ImageObject",
        url: "https://theguysglobal.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://theguysglobal.com/blog/${post.metaUrl || slug}`,
    },
    keywords: post.metaKeywords?.join(", "),
    articleSection: post.category,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="bg-black text-white overflow-x-hidden">
        <Navigation />

        {/* HERO SECTION */}
        <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors group"
            >
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            {post.category && (
              <div className="mb-6">
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 text-sm px-4 py-2">
                  {post.category}
                </Badge>
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8 pb-8 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span className="text-white font-medium">{post.author}</span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{post.readingTime || "5 min read"}</span>
              </div>

              {typeof post.views === "number" && (
                <div className="flex items-center gap-2">
                  <Eye size={18} />
                  <span>{post.views.toLocaleString()} views</span>
                </div>
              )}

              {typeof post.likes === "number" && (
                <div className="flex items-center gap-2">
                  <Heart size={18} />
                  <span>{post.likes} likes</span>
                </div>
              )}
            </div>

            <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden mb-8">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-20 px-6 bg-black">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">
              <MarkdownClientWrapper content={post.content} />
            </div>

            {post.metaKeywords && post.metaKeywords.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-800">
                <h3 className="text-lg font-semibold mb-4 text-white">Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {post.metaKeywords.map((tag: string) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="bg-gray-800/50 px-4 py-2 rounded-full text-sm text-gray-300 border-gray-700 hover:border-purple-500 transition-colors cursor-pointer"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* RELATED */}
        {relatedPosts && relatedPosts.length > 0 && (
          <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Related Articles
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost: any, index: number) => (
                  <BlogPostCard key={relatedPost.slug} post={relatedPost} index={index} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 px-6 bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              <ArrowLeft size={20} />
              Back to All Articles
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

// =============================
//  STATIC PARAMS FOR BUILD
// =============================
export async function generateStaticParams() {
  const { getBlogPosts } = await import("@/lib/api/apiClient")
  const posts = await getBlogPosts()

  return posts.map((post: any) => ({
    slug: post.slug,
  }))
}