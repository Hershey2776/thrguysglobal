"use client";

import { useState, useEffect, useMemo } from "react";
import Navigation from "../components/navigation";
import Footer from "../components/footer"
import BlogPostCard from "./components/blog-post-card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, X, Filter } from "lucide-react";
import { getBlogPosts, getCategories, getAllTags } from "@/lib/api/apiClient"; 
import type { BlogPost } from "@/lib/api/blog"; 
import { motion } from "framer-motion";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const [postsData, categoriesData, tagsData] = await Promise.all([
          getBlogPosts(),
          getCategories(),
          getAllTags(),
        ]);
        setPosts(postsData);
        setFilteredPosts(postsData);
        setCategories(categoriesData);
        setTags(tagsData);
      } catch (error) {
        console.error("Error loading blog data:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    async function filterPosts() {
      setLoading(true);
      try {
        const filters: any = {};
        if (selectedCategory !== "All") {
          filters.category = selectedCategory;
        }
        if (selectedTags.length > 0) {
          filters.tags = selectedTags;
        }
        if (searchQuery.trim()) {
          filters.search = searchQuery.trim();
        }
        const filtered = await getBlogPosts(filters);
        setFilteredPosts(filtered);
      } catch (error) {
        console.error("Error filtering posts:", error);
      } finally {
        setLoading(false);
      }
    }

    filterPosts();
  }, [searchQuery, selectedCategory, selectedTags]);

  const featuredPosts = useMemo(
    () => filteredPosts.filter((post) => post.featured),
    [filteredPosts]
  );

  const regularPosts = useMemo(
    () => filteredPosts.filter((post) => !post.featured),
    [filteredPosts]
  );

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedTags([]);
  };

  const hasActiveFilters =
    searchQuery.trim() !== "" || selectedCategory !== "All" || selectedTags.length > 0;

  return (
    <div className="bg-black text-white overflow-x-hidden min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                The Guys
              </span>&nbsp;<span className="text-white">Blog</span>
            </h1>
            <p className="text-l md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Unfiltered insights from the trenches. Real strategies, real results, zero bullshit.
            </p>
          </motion.div>
          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles, topics, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 h-14 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500 rounded-xl text-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            {/* Filter Toggle */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-purple-500 transition-colors"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
                {hasActiveFilters && (
                  <Badge variant="secondary" className="ml-2 bg-purple-500/20 text-purple-300">
                    {selectedTags.length + (selectedCategory !== "All" ? 1 : 0)}
                  </Badge>
                )}
              </button>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <X className="w-4 h-4" />
                  Clear filters
                </button>
              )}
            </div>
            {/* Filters Panel */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 mb-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-300">
                      Category
                    </label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        {categories.map((category) => (
                          <SelectItem
                            key={category}
                            value={category}
                            className="text-white focus:bg-gray-700"
                          >
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  {/* Tags Filter */}
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-300">
                      Tags
                    </label>
                    <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                      {tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant={selectedTags.includes(tag) ? "default" : "outline"}
                          onClick={() => toggleTag(tag)}
                          className={`cursor-pointer transition-all ${
                            selectedTags.includes(tag)
                              ? "bg-purple-500 text-white border-purple-500"
                              : "bg-gray-800 text-gray-300 border-gray-700 hover:border-purple-500"
                          }`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            {/* Active Filters Display */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-3">
                {selectedCategory !== "All" && (
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/50">
                    {selectedCategory}
                    <button
                      onClick={() => setSelectedCategory("All")}
                      className="ml-2 hover:text-white"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {selectedTags.map((tag) => (
                  <Badge
                    key={tag}
                    className="bg-purple-500/20 text-purple-300 border-purple-500/50"
                  >
                    {tag}
                    <button
                      onClick={() => toggleTag(tag)}
                      className="ml-2 hover:text-white"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
            {/* Results Count */}
            <div className="text-sm text-gray-400 mb-8">
              {loading ? (
                "Loading..."
              ) : (
                <>
                  Found <span className="text-white font-semibold">{filteredPosts.length}</span>{" "}
                  {filteredPosts.length === 1 ? "article" : "articles"}
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-6 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Featured Articles
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <BlogPostCard key={post.id} post={post} index={index} featured />
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Regular Posts */}
      {regularPosts.length > 0 && (
        <section className="py-12 px-6 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            {featuredPosts.length > 0 && (
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  All Articles
                </span>
              </h2>
            )}
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="bg-gray-800/50 rounded-2xl h-96 animate-pulse"
                  />
                ))}
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-gray-400 mb-4">No articles found</p>
                <p className="text-gray-500 mb-6">
                  Try adjusting your search or filters
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <BlogPostCard key={post.id} post={post} index={index} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
}