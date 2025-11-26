"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";

export default function ApplyNowPage() {
  const { jobid } = useParams();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    portfolio: "",
    linkedin: "",
    resume: null,
  });

  const [uploading, setUploading] = useState(false);

  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // Submit form handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!form.resume) {
        alert("Please upload your resume before submitting.");
        return;
      }

      setUploading(true);

      // 1️⃣ Request pre-signed URL from backend
      const presignRes = await fetch(`${API_BASE}/api/applications/presign`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileName: form.resume.name }),
      });

      if (!presignRes.ok) throw new Error("Failed to get S3 upload URL");

      const { uploadUrl, fileUrl } = await presignRes.json();

      // 2️⃣ Upload file directly to S3
      await fetch(uploadUrl, {
        method: "PUT",
        body: form.resume,
        headers: {
          "Content-Type": form.resume.type || "application/pdf",
        },
      });

      // 3️⃣ Save application info in DB
      const appData = {
        jobId: jobid,
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        portfolio: form.portfolio || "",
        linkedin: form.linkedin || "",
        resumeUrl: fileUrl,
      };

      const saveRes = await fetch(`${API_BASE}/api/applications`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appData),
      });

      if (!saveRes.ok) throw new Error("Failed to submit application");

      alert("✅ Application submitted successfully!");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        portfolio: "",
        linkedin: "",
        resume: null,
      });
    } catch (err) {
      console.error("❌ Error submitting application:", err);
      alert("❌ Error submitting application. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-6">
      <div className="max-w-2xl w-full bg-[#18181a] rounded-2xl p-10 border border-gray-800 shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
          Apply for this Position
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
                className="w-full bg-[#101010] border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
                className="w-full bg-[#101010] border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Email ID <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-[#101010] border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full bg-[#101010] border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Resume */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Resume Upload <span className="text-red-500">*</span>
            </label>
            <input
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
              className="w-full bg-[#101010] border border-gray-700 rounded-lg p-3 text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Portfolio */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Portfolio Link (Optional)
            </label>
            <input
              name="portfolio"
              value={form.portfolio}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full bg-[#101010] border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* LinkedIn */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">
              LinkedIn Profile (Optional)
            </label>
            <input
              name="linkedin"
              value={form.linkedin}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/..."
              className="w-full bg-[#101010] border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={uploading}
            className="w-full py-3 rounded-full font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-all duration-200 disabled:opacity-50"
          >
            {uploading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
}
