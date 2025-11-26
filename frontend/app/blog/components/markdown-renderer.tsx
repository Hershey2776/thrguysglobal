"use client"

import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import type { ComponentPropsWithoutRef } from "react"

//
// ---- TYPE FIX FOR REACT-MARKDOWN v10 ----
// (react-markdown/lib/ast-to-react no longer exists)
//
type CodeProps = ComponentPropsWithoutRef<"code"> & {
  inline?: boolean
  node?: any
}

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="blog-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]} // allows <u>, <br>, <table> etc.
        components={{
          //
          // ---------------------------
          // HEADINGS
          // ---------------------------
          //
          h1: ({ ...props }) => (
            <h1
              className="text-4xl font-bold mb-8 mt-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              {...props}
            />
          ),
          h2: ({ ...props }) => (
            <h2 className="text-3xl font-bold mb-6 mt-10 text-white" {...props} />
          ),
          h3: ({ ...props }) => (
            <h3 className="text-2xl font-bold mb-4 mt-8 text-white" {...props} />
          ),
          h4: ({ ...props }) => (
            <h4 className="text-xl font-semibold mb-3 mt-6 text-gray-200" {...props} />
          ),

          //
          // ---------------------------
          // TEXT ELEMENTS
          // ---------------------------
          //
          p: ({ ...props }) => (
            <p className="text-gray-300 mb-6 leading-relaxed text-lg" {...props} />
          ),

          strong: ({ ...props }) => (
            <strong className="text-white font-bold" {...props} />
          ),

          // Support underline from your editor (raw HTML <u>)
          u: ({ ...props }) => (
            <u className="underline decoration-purple-400" {...props} />
          ),

          //
          // ---------------------------
          // LISTS
          // ---------------------------
          //
          ul: ({ ...props }) => (
            <ul className="mb-6 ml-6 list-disc space-y-2" {...props} />
          ),

          ol: ({ ...props }) => (
            <ol className="mb-6 ml-6 list-decimal space-y-2" {...props} />
          ),

          li: ({ ...props }) => (
            <li className="text-gray-300 leading-relaxed" {...props} />
          ),

          //
          // ---------------------------
          // QUOTE
          // ---------------------------
          //
          blockquote: ({ ...props }) => (
            <blockquote
              className="border-l-4 border-purple-500 pl-6 py-4 mb-6 bg-gray-800/30 rounded-r-lg italic text-gray-300"
              {...props}
            />
          ),

          //
          // ---------------------------
          // CODE BLOCKS + INLINE CODE
          // ---------------------------
          //
          code: ({ inline, children, className, ...props }: CodeProps) =>
            inline ? (
              <code
                className="bg-gray-800 px-2 py-1 rounded text-purple-300 text-sm font-mono"
                {...props}
              >
                {children}
              </code>
            ) : (
              <pre className="bg-gray-800 p-4 rounded-lg mb-6 overflow-x-auto">
                <code className="text-gray-300 font-mono text-sm" {...props}>
                  {children}
                </code>
              </pre>
            ),

          pre: ({ ...props }) => (
            <pre className="bg-gray-800 p-4 rounded-lg mb-6 overflow-x-auto" {...props} />
          ),

          //
          // ---------------------------
          // LINKS (IMPORTANT)
          // opens in new tab + auto-fixes missing "https://"
          // ---------------------------
          //
          a: ({ href, ...props }) => {
            const safeHref =
              href && !href.startsWith("http") ? `https://${href}` : href

            return (
              <a
                href={safeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline transition-colors"
                {...props}
              />
            )
          },

          //
          // ---------------------------
          // IMAGES
          // ---------------------------
          //
          img: ({ ...props }) => (
            <img className="rounded-lg mb-6 w-full" {...props} />
          ),

          //
          // ---------------------------
          // TABLES
          // ---------------------------
          //
          table: ({ ...props }) => (
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse" {...props} />
            </div>
          ),

          thead: ({ ...props }) => (
            <thead className="bg-gray-800" {...props} />
          ),

          th: ({ ...props }) => (
            <th
              className="border border-gray-700 px-4 py-2 text-left font-semibold text-white"
              {...props}
            />
          ),

          td: ({ ...props }) => (
            <td
              className="border border-gray-700 px-4 py-2 text-left text-gray-300"
              {...props}
            />
          ),

          //
          // ---------------------------
          // HR
          // ---------------------------
          //
          hr: ({ ...props }) => (
            <hr className="my-8 border-gray-700" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
