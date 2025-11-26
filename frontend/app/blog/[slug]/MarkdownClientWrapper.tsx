"use client"

import MarkdownRenderer from "../components/markdown-renderer"

export default function MarkdownClientWrapper({ content }: { content: string }) {
  return <MarkdownRenderer content={content} />
}
