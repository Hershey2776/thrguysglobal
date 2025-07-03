"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Camera,
  Video,
  Users,
  Star,
  TrendingUp,
  BarChart3,
  DollarSign,
  CheckCircle,
  Play,
} from "lucide-react";
import Navigation from "../../../components/navigation";
import ServiceHero from "../../components/service-hero";
import ServiceProcess from "../../components/service-process";
import ServiceCTA from "../../components/service-cta";

const contentTypes = [
  {
    icon: Star,
    title: "Product Reviews",
    description:
      "Authentic reviews from real users that build trust and drive purchasing decisions.",
    features: [
      "Unboxing Videos",
      "Feature Demonstrations",
      "Honest Opinions",
      "Before/After Results",
    ],
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Video,
    title: "Tutorials",
    description:
      "Educational content that shows how to use your products and services effectively.",
    features: [
      "Step-by-Step Guides",
      "Tips & Tricks",
      "Best Practices",
      "Troubleshooting",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Camera,
    title: "Unboxing Videos",
    description:
      "Exciting unboxing experiences that create anticipation and showcase product quality.",
    features: [
      "First Impressions",
      "Product Reveals",
      "Quality Showcase",
      "Emotional Reactions",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Lifestyle Content",
    description:
      "Authentic lifestyle integration that shows your products in real-world scenarios.",
    features: [
      "Daily Use Cases",
      "Social Situations",
      "Travel Content",
      "Lifestyle Integration",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
];

const creatorTiers = [
  {
    name: "Nano",
    followers: "1K–10K",
    engagement: "8-12%",
    cost: "$50–200",
    deliverables: ["Instagram Post", "Story", "TikTok Video"],
    bestFor: "Local businesses, niche products",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Micro",
    followers: "10K–100K",
    engagement: "5-8%",
    cost: "$200–1K",
    deliverables: ["Multiple Posts", "Stories", "Video Content", "Lives"],
    bestFor: "Growing brands, targeted campaigns",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Macro",
    followers: "100K–1M",
    engagement: "3-5%",
    cost: "$1K–10K",
    deliverables: ["Full Campaign", "Exclusive Content", "Brand Integration"],
    bestFor: "Established brands, product launches",
    gradient: "from-purple-500 to-indigo-500",
  },
];

const ugcFormats = [
  {
    type: "Instagram Reel",
    duration: "15-60s",
    format: "Vertical Video",
    bestFor: "Product demos, tutorials, lifestyle",
    engagement: "High",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    type: "TikTok Video",
    duration: "15-60s",
    format: "Vertical Video",
    bestFor: "Trending content, challenges, viral potential",
    engagement: "Very High",
    gradient: "from-black to-gray-800",
  },
  {
    type: "YouTube Short",
    duration: "15-60s",
    format: "Vertical Video",
    bestFor: "Educational content, reviews, tutorials",
    engagement: "High",
    gradient: "from-red-500 to-red-600",
  },
  {
    type: "Instagram Post",
    duration: "Static",
    format: "Square/Portrait",
    bestFor: "Product showcases, testimonials, lifestyle",
    engagement: "Medium",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    type: "Instagram Story",
    duration: "15s",
    format: "Vertical",
    bestFor: "Behind-the-scenes, quick tips, announcements",
    engagement: "Medium",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    type: "Blog Post",
    duration: "500-1500 words",
    format: "Article + Images",
    bestFor: "Detailed reviews, tutorials, SEO content",
    engagement: "Long-term",
    gradient: "from-blue-500 to-cyan-500",
  },
];

const processSteps = [
  {
    icon: Users,
    title: "Creator Matching",
    description:
      "Identify and vet the perfect creators who align with your brand values and target audience.",
  },
  {
    icon: Camera,
    title: "Briefing & Planning",
    description:
      "Create detailed briefs and content plans that ensure creators deliver exactly what you need.",
  },
  {
    icon: Video,
    title: "Content Delivery",
    description:
      "Manage the content creation process, ensuring quality, authenticity, and brand compliance.",
  },
  {
    icon: TrendingUp,
    title: "Content Distribution",
    description:
      "Strategically distribute UGC across platforms to maximize reach and engagement.",
  },
];

export default function UGCContentPage() {
  const contentRef = useRef(null);
  const tiersRef = useRef(null);
  const formatsRef = useRef(null);
  const isContentInView = useInView(contentRef, {
    once: true,
    margin: "-100px",
  });
  const isTiersInView = useInView(tiersRef, {
    once: true,
    margin: "-100px",
  });
  const isFormatsInView = useInView(formatsRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />

      <ServiceHero
        title="User-Generated Content"
        subtitle="Real Content, Real People, Real Impact"
        description="UGC drives trust and conversions. We produce and source authentic content that connects and sells."
        gradient="from-orange-600 to-red-600"
        stats={[
          { label: "Trust Factor", value: "85%" },
          { label: "Conversion Rate", value: "29%" },
          { label: "Engagement", value: "6.9x" },
        ]}
      />

      {/* Content Types Grid */}
      <section
        ref={contentRef}
        className="py-32 px-6 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Content Types
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Diverse UGC formats that showcase your products authentically and
              drive real results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contentTypes.map((content, index) => (
              <motion.div
                key={content.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${content.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <content.icon size={32} className="text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 group-hover:bg-clip-text transition-all duration-300">
                    {content.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {content.description}
                  </p>

                  <div className="space-y-2">
                    {content.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${content.gradient} mr-3`}
                        />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Tiers */}
      <section ref={tiersRef} className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTiersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Creator Tiers
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the right creator tier for your budget and campaign goals.
              Each tier offers different reach and engagement levels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {creatorTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isTiersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tier.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Users size={24} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">
                    {tier.name}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-400">
                      <Users size={16} className="mr-2" />
                      {tier.followers}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <TrendingUp size={16} className="mr-2" />
                      {tier.engagement} engagement
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <DollarSign size={16} className="mr-2" />
                      {tier.cost}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      Deliverables:
                    </h4>
                    <div className="space-y-1">
                      {tier.deliverables.map(
                        (deliverable, deliverableIndex) => (
                          <div
                            key={deliverableIndex}
                            className="flex items-center text-xs text-gray-400"
                          >
                            <CheckCircle
                              size={12}
                              className="mr-2 text-green-400"
                            />
                            {deliverable}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="text-xs text-gray-500 italic">
                    Best for: {tier.bestFor}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UGC Formats Gallery */}
      <section
        ref={formatsRef}
        className="py-32 px-6 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isFormatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                UGC Formats
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple content formats to showcase your products across all
              platforms and reach your audience where they are.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ugcFormats.map((format, index) => (
              <motion.div
                key={format.type}
                initial={{ opacity: 0, y: 50 }}
                animate={isFormatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-r ${format.gradient} flex items-center justify-center`}
                    >
                      <Play size={20} className="text-white" />
                    </div>
                    <div className="text-xs text-gray-400">
                      {format.duration}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-white">
                    {format.type}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="text-xs text-gray-400">
                      <span className="font-semibold">Format:</span>{" "}
                      {format.format}
                    </div>
                    <div className="text-xs text-gray-400">
                      <span className="font-semibold">Best for:</span>{" "}
                      {format.bestFor}
                    </div>
                    <div className="text-xs text-gray-400">
                      <span className="font-semibold">Engagement:</span>{" "}
                      {format.engagement}
                    </div>
                  </div>

                  {/* <div
                    className={`w-full h-24 rounded-lg bg-gradient-to-r ${format.gradient} opacity-20 flex items-center justify-center`}
                  >
                    <Play size={24} className="text-white opacity-60" />
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceProcess
        title="Process"
        subtitle="How We Create Authentic UGC"
        steps={processSteps}
        gradient="from-orange-400 to-red-400"
      />

      <ServiceCTA
        title="Ready to Harness the Power of UGC?"
        subtitle="Let's create authentic content that builds trust and drives conversions."
        gradient="from-orange-600 to-red-600"
        primaryCTA="Get Started"
        secondaryCTA="Learn More"
      />
    </div>
  );
}
