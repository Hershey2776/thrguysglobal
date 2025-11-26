"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navigation from "../../components/navigation";
import MarkdownClientWrapper from "../../blog/[slug]/MarkdownClientWrapper";

export default function JobDetailPage() {
  const { id } = useParams();        // id = jobId (e.g. J1234)
  const router = useRouter();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

  // Fetch job details by jobId
  const fetchJob = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/careers/jobs/jobId/${id}`);
      
      if (!res.ok) {
        console.error("❌ Backend error:", await res.text());
        setJob(null);
        setLoading(false);
        return;
      }

      const data = await res.json();
      setJob(data);
    } catch (error) {
      console.error("Error fetching job:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchJob();
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-400">
        Loading job details...
      </div>
    );

  if (!job)
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-400">
        Job not found.
      </div>
    );

  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      <section className="pb-16 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
        <Navigation />

        <div className="max-w-7xl mx-auto mt-24 md:mt-32">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent tracking-tight leading-tight">
            {job.title}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-12">

              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-semibold mb-3 gradient-text">
                  Introduction
                </h2>

                {job.introduction ? (
                  <div className="prose prose-invert max-w-none text-gray-300">
                    <MarkdownClientWrapper content={job.introduction} />
                  </div>
                ) : (
                  <p className="text-gray-400 leading-relaxed">
                    This role is an exciting opportunity to make an impact and drive innovation.
                  </p>
                )}
              </div>

              {/* Responsibilities - Markdown */}
              <div>
                <h2 className="text-2xl font-semibold mb-3 gradient-text">
                  Job Responsibilities
                </h2>

                {job.responsibilities ? (
                  <div className="prose prose-invert max-w-none text-gray-300">
                    <MarkdownClientWrapper content={job.responsibilities} />
                  </div>
                ) : (
                  <p className="text-gray-400">No specific responsibilities listed.</p>
                )}
              </div>

              {/* Requirements - Markdown */}
              <div>
                <h2 className="text-2xl font-semibold mb-3 gradient-text">
                  Job Requirements
                </h2>

                {job.requirements ? (
                  <div className="prose prose-invert max-w-none text-gray-300">
                    <MarkdownClientWrapper content={job.requirements} />
                  </div>
                ) : (
                  <p className="text-gray-400">No specific requirements listed.</p>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN — Overview */}
            <aside className="bg-[#18181a] rounded-xl border border-gray-800 p-8 space-y-6 h-fit shadow-lg">
              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Job Overview
              </h3>

              <div className="space-y-5 text-sm text-gray-300">
                <div>
                  <span className="font-semibold text-white block">Job Title</span>
                  <p>{job.title || "N/A"}</p>
                </div>

                <div>
                  <span className="font-semibold text-white block">Job ID</span>
                  <p>{job.jobId || "N/A"}</p>
                </div>

                <div>
                  <span className="font-semibold text-white block">Country</span>
                  <p>{job.country || "N/A"}</p>
                </div>

                <div>
                  <span className="font-semibold text-white block">Work Arrangement</span>
                  <p>{job.workArrangement || "N/A"}</p>
                </div>

                <div>
                  <span className="font-semibold text-white block">Area of Work</span>
                  <p>{job.areaOfWork || "N/A"}</p>
                </div>

                <div>
                  <span className="font-semibold text-white block">Employment Type</span>
                  <p>{job.employmentType || "N/A"}</p>
                </div>

                <div>
                  <span className="font-semibold text-white block">Experience</span>
                  <p>{job.experience || "N/A"}</p>
                </div>

                <div>
                  <span className="font-semibold text-white block">Posted On</span>
                  <p>{job.postedDate || "N/A"}</p>
                </div>
              </div>

              {/* APPLY BUTTON */}
              <button
                onClick={() => router.push(`/careers/apply/${job.jobId}`)}
                className="w-full py-3 mt-6 rounded-full text-lg font-semibold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:opacity-90 transition"
              >
                Apply Now
              </button>
            </aside>

          </div>
        </div>
      </section>
    </div>
  );
}
