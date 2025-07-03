import { useState, useRef, useEffect } from "react";

const ADMIN_PASSWORD = "theguys2024"; // Change this to your desired password

export default function BlogAdminPanel() {
  const [showPanel, setShowPanel] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [success, setSuccess] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef();

  // Fetch posts from API
  useEffect(() => {
    if (showPanel) {
      fetchPosts();
    }
  }, [showPanel]);

  const fetchPosts = async () => {
    setLoading(true);
    const res = await fetch("/api/blog-posts");
    const data = await res.json();
    setPosts(data);
    setLoading(false);
  };

  // Password check
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setShowPanel(true);
      setShowLogin(false);
      setAuthError("");
    } else {
      setAuthError("Incorrect password");
    }
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    setImagePreviews(files.map((file) => URL.createObjectURL(file)));
  };

  // Save blog post to API
  const handleSave = async (e) => {
    e.preventDefault();
    let imageUrls = [];
    if (images.length > 0) {
      // For mock: just use preview URLs
      imageUrls = imagePreviews;
    }
    const newPost = {
      title,
      content,
      images: imageUrls,
    };
    await fetch("/api/blog-posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });
    setTitle("");
    setContent("");
    setImages([]);
    setImagePreviews([]);
    setSuccess(true);
    fetchPosts();
    setTimeout(() => setSuccess(false), 2000);
  };

  // Floating button to open login
  if (!showPanel) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition"
          onClick={() => setShowLogin(true)}
        >
          Admin Login
        </button>
        {showLogin && (
          <form
            onSubmit={handlePasswordSubmit}
            className="mt-2 bg-gray-900 p-4 rounded-xl shadow-xl border border-gray-700 flex flex-col gap-2"
          >
            <input
              type="password"
              placeholder="Enter admin password"
              className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {authError && <span className="text-red-400 text-sm">{authError}</span>}
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full mt-2"
            >
              Enter
            </button>
          </form>
        )}
      </div>
    );
  }

  // Admin panel UI
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center overflow-y-auto">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-gray-700 relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
          onClick={() => setShowPanel(false)}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Add Blog Post
        </h2>
        <form onSubmit={handleSave} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Title"
            className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Content"
            className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none min-h-[120px]"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <input
            type="file"
            accept="image/*"
            multiple
            ref={fileInputRef}
            onChange={handleImageChange}
            className="text-white"
          />
          {imagePreviews.length > 0 && (
            <div className="flex gap-2 flex-wrap mt-2">
              {imagePreviews.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Preview ${idx + 1}`}
                  className="w-20 h-20 object-cover rounded border border-gray-700"
                />
              ))}
            </div>
          )}
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full mt-4 hover:scale-105 transition"
          >
            Save Post
          </button>
          {success && <span className="text-green-400 text-sm">Blog post saved!</span>}
        </form>
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-2 text-white">Existing Posts</h3>
          {loading ? (
            <div className="text-gray-400">Loading...</div>
          ) : posts.length === 0 ? (
            <div className="text-gray-400">No posts yet.</div>
          ) : (
            <ul className="space-y-4 max-h-64 overflow-y-auto">
              {posts.map((post) => (
                <li key={post.id} className="bg-gray-800 rounded p-3 flex gap-3 items-center">
                  {post.images && post.images[0] && (
                    <img src={post.images[0]} alt="" className="w-12 h-12 object-cover rounded" />
                  )}
                  <div>
                    <div className="font-semibold text-white">{post.title}</div>
                    <div className="text-xs text-gray-400">{new Date(post.date).toLocaleString()}</div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
} 