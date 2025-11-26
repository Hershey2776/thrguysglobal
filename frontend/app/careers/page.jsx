"use client";

import React, { useEffect, useState, useRef } from "react";
import Navigation from "../components/navigation";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import Footer from "../components/footer"
import YodaCardsCarousel from "../components/YodaCardsCarousel";

export default function CareersPage() {
  const router = useRouter();

  const [jobs, setJobs] = useState([]);
  const [areas, setAreas] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [loading, setLoading] = useState(true);

  // HIDE NAVBAR ON SCROLL
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > 40 && window.scrollY > lastScrollY) {
        setIsNavbarHidden(true);
      } else {
        setIsNavbarHidden(false);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SCROLL TO JOBS
  const jobsSectionRef = useRef(null);
  const scrollToJobs = () =>
    jobsSectionRef.current?.scrollIntoView({ behavior: "smooth" });

  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

  // FETCH JOBS
  const fetchJobs = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (search) params.append("search", search);
      if (selectedAreas.length) params.append("areas", selectedAreas.join(","));
      const res = await fetch(`${API_BASE}/api/careers/jobs?${params}`);
      const data = await res.json();
      setJobs(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  // FETCH AREAS
  const fetchAreas = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/careers/areas`);
      const data = await res.json();
      setAreas(data.map((label) => ({ label, count: 0 })));
    } catch (error) {
      console.error("Error fetching areas:", error);
    }
  };

  useEffect(() => {
    fetchAreas();
    fetchJobs();
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => fetchJobs(), 400);
    return () => clearTimeout(delay);
  }, [search, selectedAreas]);

  const clearFilters = () => {
    setSearch("");
    setSelectedAreas([]);
    fetchJobs();
  };

  // ⭐⭐⭐ THIS is where dynamic variables go ✔ INSIDE component, BEFORE return
  const departments = [
    "Engineering",
    "Marketing",
    "Content",
    "Sales",
    "Operations",
    "Analytics",
  ];

  const openPositions = jobs.length;
  const departmentCount = departments.length;

  // ⭐⭐⭐ SINGLE RETURN BELOW — everything merged properly
  return (
    <div className="bg-[#050505] min-h-screen text-white flex flex-col">

      {/* NAVBAR */}
      <div
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-500
          backdrop-blur-xl bg-black/30 border-b border-white/5
          ${isNavbarHidden ? "-translate-y-full opacity-0" : "opacity-100"}
        `}
      >
        <Navigation />
      </div>

      {/* HERO */}
      <section className="min-h-[85vh] flex flex-col justify-center pt-40 pb-20 px-6
        bg-gradient-to-b from-black via-[#0a0a0a] to-[#111]">

        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Discover your place at{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              The Guys
            </span>
          </h1>

          <button
            onClick={scrollToJobs}
            className="mt-6 px-6 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
          >
            Explore Open Roles
          </button>
        </div>

        <div className="max-w-6xl mx-auto mt-12">
          <YodaCardsCarousel />
        </div>
      </section>

      {/* CULTURE SECTION */}
      <section className="min-h-[85vh] flex flex-col justify-center
        bg-gradient-to-b from-[#111] via-[#161616] to-[#1c1c1c]
        py-20 md:py-28 px-6">

        <div className="max-w-7xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work at one of the most creative places on Earth
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            At The Guys, we empower creative minds and build meaningful work experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {[1, 2, 3].map((n, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] rounded-3xl overflow-hidden shadow-lg shadow-black/30"
            >
              <img src={`/careers-life-${n}.jpg`} className="w-full h-64 object-cover opacity-90" />
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-3">
                  {i === 0 && "Live and Work Anywhere"}
                  {i === 1 && "We welcome you"}
                  {i === 2 && "Make an impact"}
                </h3>

                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {i === 0 &&
                    "Office? Home? Beach? That café with suspiciously slow Wi-Fi? Wherever you do your best thinking, we’re good with it. At The Guys, flexibility isn’t a benefit it’s the baseline."}
                  {i === 1 &&
                    "You don’t need to “fit in” bring your personality, ideas, and that oddly specific hobby. We’re building a workplace where everyone belongs (and where nobody judges your 47 Chrome tabs)."}
                  {i === 2 &&
                    "Your work won’t disappear into the corporate void. Here, you’ll tackle meaningful challenges, shape real outcomes, and still have energy left for life after 6 PM. Yes, it is possible."}
                </p>

                <button
                  onClick={scrollToJobs}
                  className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
                >
                  Jobs at The Guys
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEXT ROLE SECTION */}
      <section className="min-h-[85vh] flex flex-col justify-center
        bg-gradient-to-b from-[#1c1c1c] to-[#111]
        py-20 md:py-28 px-6">

        <div className="max-w-7xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Open the door to your next role
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">

          {/* 1 — Live & Work Anywhere */}
          <div className="bg-[#161616] rounded-3xl p-8 flex flex-col justify-between 
            shadow-md shadow-black/40 h-64 border border-white/5">
            
            <h3 className="text-xl font-semibold text-white">
              Live and Work Anywhere
            </h3>

            <button
              onClick={scrollToJobs}
              className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 
                text-white text-xl flex items-center justify-center"
            >
              +
            </button>
          </div>

          {/* 2 — Dynamic Open Positions */}
          <div className="bg-black text-white rounded-3xl p-8 flex flex-col justify-between 
            shadow-md shadow-purple-500/20 h-64 border border-purple-900/40">
            
            <div>
              <h3 className="text-3xl font-bold">{openPositions}</h3>
              <p className="text-lg text-purple-300 font-medium">Open Positions</p>
            </div>

            <button
              onClick={scrollToJobs}
              className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 
                text-white text-xl flex items-center justify-center"
            >
              +
            </button>
          </div>

          {/* 3 — Image */}
          <div className="rounded-3xl overflow-hidden shadow-xl shadow-black/40 
            md:row-span-2 h-full">
            <img src="/careers-grid-3.jpg" 
              className="w-full h-full object-cover opacity-80" />
          </div>

          {/* 4 — Dynamic Departments */}
          <div className="bg-black text-white rounded-3xl p-8 flex flex-col justify-center 
            shadow-md shadow-purple-500/20 h-64 border border-purple-900/40">
            
            <div>
              <h3 className="text-3xl font-bold">{departmentCount}</h3>
              <p className="text-lg text-purple-300 font-medium">Departments</p>
            </div>
          </div>

          {/* 5 — Image */}
          <div className="rounded-3xl overflow-hidden shadow-lg shadow-black/40 h-64">
            <img src="/careers-grid-1.jpg" 
              className="w-full h-full object-cover opacity-80" />
          </div>

          {/* 6 — Illustration */}
          <div className="bg-[#181818] rounded-3xl p-8 shadow-lg shadow-black/40 
            relative overflow-hidden h-64 flex flex-col border border-white/5">
            
            <h3 className="text-xl font-semibold text-white max-w-[70%]">
              Do the most amazing work of your career
            </h3>

            <img src="/careers-illustration.png" 
              className="absolute bottom-4 right-4 w-32 opacity-80" />
          </div>

          {/* 7 — Department List */}
          <div className="bg-[#161616] rounded-3xl p-8 shadow-md shadow-black/40 
            h-64 flex flex-col justify-center border border-white/5">
            
            <ul className="space-y-3 text-gray-300 text-sm">
              {departments.map((dept, index) => (
                <li
                  key={dept}
                  className={`pb-2 ${
                    index !== departments.length - 1
                      ? "border-b border-white/5"
                      : ""
                  }`}
                >
                  {dept}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <button
            onClick={scrollToJobs}
            className="px-6 py-3 bg-purple-600 text-white rounded-full 
              font-semibold hover:bg-purple-700 transition"
          >
            Explore open roles
          </button>
        </div>
      </section>

      {/* SEARCH BAR */}
      <div className="w-full flex justify-center py-10 border-b border-white/5 bg-black">
        <div className="flex items-center gap-4 bg-[#18181a] rounded-lg px-4 py-3 w-[450px]">
          <Search className="w-6 h-6 text-purple-400" />
          <input
            type="text"
            className="bg-transparent w-full focus:outline-none text-lg placeholder-gray-500 text-white"
            placeholder="Find your next opportunity"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* JOB LISTING */}
      <div
        ref={jobsSectionRef}
        className="flex max-w-7xl mx-auto w-full flex-1 pt-20 pb-20 min-h-[85vh]"
      >
        {/* FILTERS */}
        <aside className="w-80 pr-8 border-r border-white/5">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-white">Filters</h2>
            <button
              onClick={clearFilters}
              className="text-gray-400 hover:text-purple-400 text-sm flex items-center gap-1"
            >
              Clear filters <span className="rotate-90">↻</span>
            </button>
          </div>

          <div>
            <div className="mb-2 font-medium text-gray-300">Area of Interest</div>
            {areas.length === 0 ? (
              <p className="text-gray-500 text-sm">No areas found</p>
            ) : (
              areas.map((area) => (
                <label key={area.label} className="flex items-center mb-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedAreas.includes(area.label)}
                    onChange={() => {
                      setSelectedAreas(
                        selectedAreas.includes(area.label)
                          ? selectedAreas.filter((l) => l !== area.label)
                          : [...selectedAreas, area.label]
                      );
                    }}
                    className="h-4 w-4 accent-purple-600 mr-3 bg-[#18181a] border-gray-700"
                  />
                  <span className="text-gray-300">{area.label}</span>
                </label>
              ))
            )}
          </div>
        </aside>

        {/* JOB RESULTS */}
        <main className="flex-1 pl-8">
          <div className="flex gap-6 items-baseline mb-8">
            <div className="text-lg text-gray-400 font-medium">
              {loading ? "Loading..." : `${jobs.length} Result${jobs.length !== 1 ? "s" : ""}`}
            </div>
            <div className="ml-auto text-gray-500 font-medium text-sm">
              Sort by Newest ▼
            </div>
          </div>

          {loading ? (
            <p className="text-gray-400">Loading jobs...</p>
          ) : jobs.length === 0 ? (
            <p className="text-gray-400">No jobs found.</p>
          ) : (
            jobs.map((job) => (
              <div
                key={job.id}
                className="bg-[#18181a] mb-6 rounded-lg px-8 py-6 border border-white/5 flex justify-between items-center
                hover:border-purple-500 hover:shadow-[0_0_10px_rgba(139,92,246,0.3)] transition"
              >
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 text-white">{job.title}</h3>

                  <div className="flex flex-wrap items-center gap-2 text-gray-400 text-sm mb-2">
                    <span>Employment: <span className="text-purple-300">{job.typeOfPosition || "N/A"}</span></span>
                    <span className="mx-1">|</span>
                    <span>Work: <span className="text-purple-300">{job.workArrangement || "N/A"}</span></span>
                    <span className="mx-1">|</span>
                    <span>Experience: <span className="text-purple-300">{job.experience || "Not specified"}</span></span>
                  </div>

                  <div className="text-gray-500 text-sm">
                    Posted On:{" "}
                    <span className="text-gray-300">
                      {job.postedDate
                        ? new Date(job.postedDate).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                        : "N/A"}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => router.push(`/careers/${job.jobId}`)}
                  className="min-w-[42px] min-h-[42px] rounded-full bg-purple-600 hover:bg-purple-700 text-white text-2xl flex items-center justify-center"
                >
                  +
                </button>
              </div>
            ))
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}
