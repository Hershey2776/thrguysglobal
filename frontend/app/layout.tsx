import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./blog/blog.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://theguysglobal.com"),
  
  title: "The Guys - Full-Stack AI Agency | When Shit Gets Real",
  description:
    "The world's first full-stack AI agency. We turn ambitious ideas into market-dominating realities across every industry. Strategy, PR, Marketing, Legal & Compliance, Operations.",
  
  keywords:
    "AI agency, full-stack agency, startup consulting, legal compliance, VASP licensing, digital marketing, public relations, operations, strategy consulting",

  openGraph: {
    title: "The Guys - Full-Stack AI Agency",
    description:
      "The guys you call when shit gets real. Full-stack AI agency turning ambitious ideas into market reality.",
    url: "https://theguysglobal.com",
    siteName: "The Guys",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Guys - Full-Stack AI Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Guys - Full-Stack AI Agency",
    description: "The guys you call when shit gets real.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* ❌ Removed global canonical (was harmful) */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Global Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "The Guys",
              description:
                "Full-stack AI agency specializing in strategy, PR, marketing, legal compliance, and operations",
              url: "https://theguysglobal.com",
              logo: "https://theguysglobal.com/logo.png",
              sameAs: [
                "https://twitter.com/theguysglobal",
                "https://linkedin.com/company/theguysglobal",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "English",
              },
              areaServed: "Worldwide",
              serviceType: [
                "Strategy Consulting",
                "Public Relations",
                "Digital Marketing",
                "Legal Compliance",
                "Operations Management",
              ],
            }),
          }}
        />
      </head>

      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
