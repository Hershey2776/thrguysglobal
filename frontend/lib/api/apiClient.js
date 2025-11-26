// Base API URL (for both Blog & Careers)
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

// ----------------------
// BLOG API FUNCTIONS
// ----------------------
export async function getBlogPosts(filters = {}) {
  const params = new URLSearchParams();
  if (filters.category) params.append("category", filters.category);
  if (filters.tags) params.append("tags", filters.tags.join(","));
  if (filters.search) params.append("search", filters.search);
  if (filters.featured !== undefined) params.append("featured", filters.featured);

  const url = `${API_URL}/api/blog/posts?${params.toString()}`;
  console.log("🔍 Fetching blog posts from:", url);

  const response = await fetch(url, { cache: "no-store" });
  console.log("📡 Blog API Response Status:", response.status);

  if (!response.ok) throw new Error("Failed to fetch blog posts");
  return response.json();
}

export async function getBlogPost(slug) {
  const url = `${API_URL}/api/blog/posts/${slug}`;
  console.log("🔍 Fetching single blog post from:", url);

  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) return null;
  return response.json();
}

export async function getCategories() {
  const url = `${API_URL}/api/blog/categories`;
  console.log("🔍 Fetching categories from:", url);

  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) return [];
  return response.json();
}

export async function getAllTags() {
  const url = `${API_URL}/api/blog/tags`;
  console.log("🔍 Fetching tags from:", url);

  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) return [];
  return response.json();
}

export async function getRelatedPosts(slug, limit = 3) {
  const url = `${API_URL}/api/blog/posts/${slug}/related?limit=${limit}`;
  console.log("🔍 Fetching related posts from:", url);

  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) return [];
  return response.json();
}

// =====================================================
// CAREERS API FUNCTIONS
// =====================================================

export async function getJobs({ search = "", areas = [] } = {}) {
  const params = new URLSearchParams();
  if (search) params.append("search", search);
  if (areas.length) params.append("areas", areas.join(","));

  const url = `${API_URL}/api/careers/jobs?${params.toString()}`;
  console.log("💼 Fetching jobs from:", url);

  const response = await fetch(url, { cache: "no-store" });
  console.log("📡 Careers API Response Status:", response.status);

  if (!response.ok) throw new Error("Failed to fetch jobs");
  return response.json();
}

export async function getAreas() {
  const url = `${API_URL}/api/careers/areas`;
  console.log("💼 Fetching areas from:", url);

  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) throw new Error("Failed to fetch areas");
  return response.json();
}

export async function getJobById(id) {
  const url = `${API_URL}/api/careers/jobs/${id}`;
  console.log("💼 Fetching job details from:", url);

  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) return null;
  return response.json();
}