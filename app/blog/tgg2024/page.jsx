import dynamic from "next/dynamic";

const BlogAdminPanel = dynamic(() => import("../admin-panel"), { ssr: false });

export default function SecretAdminPage() {
  return <BlogAdminPanel />;
} 