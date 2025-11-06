import Navigation from "../components/navigation"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

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
  // Group posts by category for static rendering
  const postsByCategory = categories.reduce((acc, category) => {
    if (category === "All") return acc;
    acc[category] = staticBlogPosts.filter((post) => post.category === category);
    return acc;
  }, {});

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
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
        </div>
      </section>
      {/* Render all posts statically, grouped by category */}
      {categories.filter((c) => c !== "All").map((category) => (
        <section key={category} className="py-10 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {category}
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {postsByCategory[category].map((post) => (
                <article key={post.id} className="group">
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
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
