// @ts-nocheck

// Blog API service layer
// This will be replaced with actual API calls later

declare module 'mongodb'

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  authorImage?: string
  date: string
  readTime: string
  image: string
  featured: boolean
  tags: string[]
  seoTitle?: string
  seoDescription?: string
  published: boolean
  views?: number
  likes?: number
}

export interface BlogFilters {
  category?: string
  tags?: string[]
  search?: string
  featured?: boolean
}

// Use dynamic import for mongodb so editor/typechecker won't require the package during dev tooling
let MongoClientLib: any = null
let ObjectIdLib: any = null

// MongoDB connection singleton for Next.js serverless environment
const uri = process.env.MONGODB_URI || ""
if (!uri) {
  console.warn("MONGODB_URI not set - blog API will not connect to database")
}
const dbName = process.env.MONGODB_DB || "theguys"
const collectionName = process.env.MONGODB_COLLECTION || "posts"

// @ts-ignore - extend globalThis for dev hot-reload caching
let cached: { client?: any; promise?: Promise<any> } = (globalThis as any)._mongoCache || {}
if (!cached.client) {
  // initialize connection asynchronously and cache the promise
  ;(async () => {
    if (!uri) return
    const mongodb = await import("mongodb")
    MongoClientLib = mongodb.MongoClient
    ObjectIdLib = mongodb.ObjectId
    const client = new MongoClientLib(uri)
    cached.promise = client.connect().then(() => client)
    cached.client = client
    ;(globalThis as any)._mongoCache = cached
  })()
}

async function ensureMongoLibs() {
  if (!MongoClientLib || !ObjectIdLib) {
    const mongodb = await import("mongodb")
    MongoClientLib = mongodb.MongoClient
    ObjectIdLib = mongodb.ObjectId
  }
}

async function getDb() {
  if (!cached.promise) {
    if (!uri) throw new Error("MongoDB client not initialized. Set MONGODB_URI environment variable.")
    // Ensure libs and initialize client if missing
    await ensureMongoLibs()
    const client = new MongoClientLib(uri)
    cached.promise = client.connect().then(() => client)
    cached.client = client
    ;(globalThis as any)._mongoCache = cached
  }

  const client = await cached.promise
  return client.db(dbName)
}

function computeReadTime(htmlContent: string | undefined) {
  if (!htmlContent) return "1 min read"
  const text = htmlContent.replace(/<[^>]*>/g, " ")
  const words = text.trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.ceil(words / 200))
  return `${minutes} min read`
}

async function mapDocToBlogPost(doc: any): Promise<BlogPost> {
  const title = doc.title || doc.metaTitle || "Untitled"
  const excerpt = doc.excerpt || ""
  const content = doc.content || ""
  const categories = Array.isArray(doc.categories) ? doc.categories : doc.categories ? [doc.categories] : []
  const category = categories.length > 0 ? categories[0] : doc.category || "Uncategorized"

  // Try to resolve author name if author is stored as ObjectId and there's a users collection
  let author = "Unknown"
  try {
    if (doc.author) {
      if (typeof doc.author === "string") {
        author = doc.author
      } else if (doc.author._id) {
        author = doc.author.name || String(doc.author._id)
      } else {
        // Attempt to fetch from users collection
        const db = await getDb()
        try {
          const lookupId = typeof doc.author === "string" && ObjectIdLib ? new ObjectIdLib(doc.author) : doc.author
          const user = await db.collection("users").findOne({ _id: lookupId })
          author = (user && (user.name || user.fullName || user.username)) || String(doc.author)
        } catch (e) {
          author = String(doc.author)
        }
      }
    }
  } catch (e) {
    author = String(doc.author || "Unknown")
  }

  const createdAt = doc.createdAt ? new Date(doc.createdAt) : doc.date ? new Date(doc.date) : doc.publishedAt ? new Date(doc.publishedAt) : new Date()

  const blogPost: BlogPost = {
    id: doc._id ? String(doc._id) : (doc.id ? String(doc.id) : ""),
    slug: doc.metaUrl || doc.slug || (doc._id ? String(doc._id) : ""),
    title,
    excerpt,
    content,
    category,
    author,
    authorImage: doc.authorImage || doc.authorAvatar || undefined,
    date: createdAt.toISOString().split("T")[0],
    readTime: computeReadTime(content),
    image: doc.imageUrl || doc.image || "/placeholder.svg",
    featured: Boolean(doc.featured),
    tags: Array.isArray(doc.tags) ? doc.tags : [],
    seoTitle: doc.metaTitle || title,
    seoDescription: doc.metaDescription || excerpt,
    published: doc.status ? doc.status === "published" : doc.published !== false,
    views: doc.views !== undefined ? Number(doc.views) : undefined,
    likes: doc.likes !== undefined ? Number(doc.likes) : undefined,
  }

  return blogPost
}

export async function getBlogPosts(filters?: BlogFilters): Promise<BlogPost[]> {
  // If no DB configured, fallback to empty
  if (!uri) return []

  const db = await getDb()
  const col = db.collection(collectionName)

  const query: any = { status: "published" }

  if (filters) {
    if (filters.category && filters.category !== "All") {
      query.categories = filters.category
    }

    if (filters.tags && filters.tags.length > 0) {
      query.tags = { $in: filters.tags }
    }

    if (filters.search) {
      const search = filters.search
      // Use text search if index exists, otherwise regex fallback
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { excerpt: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } },
        { tags: { $elemMatch: { $regex: search, $options: "i" } } },
      ]
    }

    if (filters.featured !== undefined) {
      query.featured = filters.featured
    }
  }

  const docs: any[] = await col.find(query).sort({ createdAt: -1 }).toArray()
  const posts = await Promise.all(docs.map((d) => mapDocToBlogPost(d)))
  return posts
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  if (!uri) return null
  const db = await getDb()
  const col = db.collection(collectionName)

  // Try to find by metaUrl/slug or _id
  let doc = await col.findOne({ metaUrl: slug, status: "published" })
  if (!doc) doc = await col.findOne({ slug, status: "published" })
  if (!doc) {
    // if slug looks like an ObjectId, try lookup
    try {
      if (/^[0-9a-fA-F]{24}$/.test(slug) && ObjectIdLib) {
        doc = await col.findOne({ _id: new ObjectIdLib(slug), status: "published" })
      }
    } catch (e) {
      // ignore
    }
  }

  if (!doc) return null
  return await mapDocToBlogPost(doc)
}

export async function getRelatedPosts(currentPost: BlogPost, limit: number = 3): Promise<BlogPost[]> {
  if (!uri) return []
  const db = await getDb()
  const col = db.collection(collectionName)

  const neId = ObjectIdLib ? new ObjectIdLib(currentPost.id) : currentPost.id
  const query: any = {
    _id: { $ne: neId },
    status: "published",
    $or: [
      { categories: currentPost.category },
      { tags: { $in: currentPost.tags } },
    ],
  }

  const docs: any[] = await col.find(query).limit(20).toArray()

  // Prioritize by category match then tag matches
  const sorted = (docs || [])
    .filter(Boolean)
    .map((d) => ({ doc: d }))
    .sort((a: any, b: any) => {
      const aCat = Array.isArray(a.doc.categories) && a.doc.categories.includes(currentPost.category) ? 1 : 0
      const bCat = Array.isArray(b.doc.categories) && b.doc.categories.includes(currentPost.category) ? 1 : 0
      if (aCat !== bCat) return bCat - aCat

      const aTagMatches = (a.doc.tags || []).filter((t: string) => currentPost.tags.includes(t)).length
      const bTagMatches = (b.doc.tags || []).filter((t: string) => currentPost.tags.includes(t)).length
      return bTagMatches - aTagMatches
    })
    .slice(0, limit)

  const posts = await Promise.all(sorted.map((s: any) => mapDocToBlogPost(s.doc)))
  return posts
}

export async function getCategories(): Promise<string[]> {
  if (!uri) return ["All"]
  const db = await getDb()
  const col = db.collection(collectionName)
  const categories = (await col.distinct("categories")) as unknown as string[]
  const cleaned = Array.from(new Set((categories || []).flat().filter(Boolean))) as string[]
  return ["All", ...cleaned.sort()]
}

export async function getAllTags(): Promise<string[]> {
  if (!uri) return []
  const db = await getDb()
  const col = db.collection(collectionName)
  const tags = (await col.distinct("tags")) as unknown as string[]
  const cleaned = Array.from(new Set((tags || []).flat().filter(Boolean))) as string[]
  return cleaned.sort()
}

/* 
 * PRODUCTION API INTEGRATION GUIDE
 * 
 * To switch from mock data to production API:
 * 
 * 1. Set up your API endpoint in environment variables:
 *    NEXT_PUBLIC_API_URL=https://your-api-domain.com/api
 * 
 * 2. Replace the mock functions above with actual API calls:
 * 
 * export async function getBlogPosts(filters?: BlogFilters): Promise<BlogPost[]> {
 *   const params = new URLSearchParams()
 *   if (filters?.category) params.append('category', filters.category)
 *   if (filters?.tags) params.append('tags', filters.tags.join(','))
 *   if (filters?.search) params.append('search', filters.search)
 *   if (filters?.featured !== undefined) params.append('featured', String(filters.featured))
 *   
 *   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/posts?${params}`, {
 *     next: { revalidate: 3600 } // Revalidate every hour for ISR
 *   })
 *   if (!response.ok) throw new Error('Failed to fetch blog posts')
 *   return response.json()
 * }
 * 
 * export async function getBlogPost(slug: string): Promise<BlogPost | null> {
 *   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/posts/${slug}`, {
 *     next: { revalidate: 3600 }
 *   })
 *   if (!response.ok) return null
 *   return response.json()
 * }
 * 
 * export async function getRelatedPosts(currentPost: BlogPost, limit: number = 3): Promise<BlogPost[]> {
 *   const response = await fetch(
 *     `${process.env.NEXT_PUBLIC_API_URL}/blog/posts/${currentPost.slug}/related?limit=${limit}`,
 *     { next: { revalidate: 3600 } }
 *   )
 *   if (!response.ok) return []
 *   return response.json()
 * }
 * 
 * export async function getCategories(): Promise<string[]> {
 *   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/categories`, {
 *     next: { revalidate: 86400 } // Revalidate daily
 *   })
 *   if (!response.ok) return []
 *   return response.json()
 * }
 * 
 * export async function getAllTags(): Promise<string[]> {
 *   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/tags`, {
 *     next: { revalidate: 86400 } // Revalidate daily
 *   })
 *   if (!response.ok) return []
 *   return response.json()
 * }
 * 
 * 3. Ensure your API returns data in the BlogPost interface format
 * 4. Handle errors appropriately (the components already have error handling)
 * 5. Consider adding caching strategies based on your needs
 */

