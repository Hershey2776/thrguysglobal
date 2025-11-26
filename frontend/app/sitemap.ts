import { MetadataRoute } from "next"
import { getBlogPosts } from "@/lib/api/apiClient"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://theguysglobal.com"

  let blogPosts: any[] = []
  try {
    blogPosts = await getBlogPosts()
  } catch (e) {
    console.error("Error fetching posts for sitemap:", e)
  }

  // Generate dynamic blog URLs
  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.metaUrl || post.slug}`,
    lastModified: post.updatedAt || post.date || new Date().toISOString(),
    changeFrequency: "weekly",
    priority: post.featured ? 0.9 : 0.6,
  }))

  // Static URLs (add/change anytime)
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]

  return [...staticUrls, ...blogUrls]
}
