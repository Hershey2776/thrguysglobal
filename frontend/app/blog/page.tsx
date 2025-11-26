// --- SERVER COMPONENT WRAPPER ---
// This must be the server entry (NO "use client")
import type { Metadata } from "next"
import BlogPageClient from "./page.client"

// Metadata for blog listing page
export const metadata: Metadata = {
  title: "The Guys Blog — Articles, Tutorials, Insights",
  description:
    "Explore high-quality articles on software development, business, strategy, trading, and career growth from The Guys Global.",
  alternates: {
    canonical: "https://theguysglobal.com/blog",
  },
  openGraph: {
    title: "The Guys Blog — Latest Articles",
    description:
      "Explore tutorials, insights, and expert articles curated by The Guys Global.",
    url: "https://theguysglobal.com/blog",
    images: [
      {
        url: "https://theguysglobal.com/default-og-image.png",
        width: 1200,
        height: 630,
        alt: "The Guys Blog OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Guys Blog",
    description: "Insights, tutorials and articles curated by The Guys Global.",
    images: ["https://theguysglobal.com/default-og-image.png"],
  },
}

// Server-side container which renders the actual client UI
export default function BlogPage() {
  return <BlogPageClient />
}
