"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageSquare,
  TrendingUp,
  Users,
  BarChart3,
  Zap,
  Target,
  Camera,
  Share2,
  Instagram,
  Twitter,
  Linkedin,
  Video,
  Calendar,
} from "lucide-react";
import ServiceHero from "../../components/service-hero";
import ServiceProcess from "../../components/service-process";
import ServiceCTA from "../../components/service-cta";
import Navigation from "../../../components/navigation";

const services = [
  {
    icon: Camera,
    title: "Content Planning & Strategy",
    description:
      "Data-driven content planning that resonates with your audience and drives engagement. Every post has a purpose.",
    features: [
      "Audience Analysis",
      "Content Calendar",
      "Trend Integration",
      "Performance Optimization",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Users,
    title: "Community Management",
    description:
      "Build engaged communities that become your biggest advocates. We turn followers into brand ambassadors.",
    features: [
      "Engagement Strategy",
      "Community Guidelines",
      "Moderation",
      "Growth Tactics",
    ],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: Target,
    title: "Paid Social Campaigns",
    description:
      "ROAS-focused advertising that converts. We optimize every pixel and penny for maximum return.",
    features: [
      "Campaign Strategy",
      "Creative Development",
      "Audience Targeting",
      "Performance Tracking",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Share2,
    title: "Influencer Collaborations",
    description:
      "Strategic collaborations that amplify your reach. We connect you with voices that matter to your audience.",
    features: [
      "Influencer Discovery",
      "Partnership Strategy",
      "Campaign Management",
      "ROI Tracking",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
];

const platforms = [
  {
    name: "Instagram",
    icon: Instagram,
    audience: "2B+",
    bestFor: "Visual Content, Brand Building",
    features: ["Stories", "Reels", "IGTV", "Shopping"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "TikTok",
    icon: Video,
    audience: "1B+",
    bestFor: "Viral Content, Gen Z",
    features: [
      "Short-form Video",
      "Trending Sounds",
      "Hashtag Challenges",
      "Live Streaming",
    ],
    gradient: "from-black to-gray-800",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    audience: "900M+",
    bestFor: "B2B, Professional Networking",
    features: [
      "Thought Leadership",
      "Company Pages",
      "LinkedIn Ads",
      "Networking",
    ],
    gradient: "from-blue-500 to-blue-600",
  },
  {
    name: "X (Twitter)",
    icon: Twitter,
    audience: "400M+",
    bestFor: "Real-time Updates, News",
    features: ["Threads", "Spaces", "Trending Topics", "Direct Messaging"],
    gradient: "from-blue-400 to-blue-500",
  },
];

const processSteps = [
  {
    icon: BarChart3,
    title: "Audit & Platform Research",
    description:
      "Comprehensive review of current social presence, competitor analysis, and audience insights.",
  },
  {
    icon: Target,
    title: "Strategy Development",
    description:
      "Custom social media strategy aligned with business goals, target audience, and brand voice.",
  },
  {
    icon: Camera,
    title: "Content Production",
    description:
      "High-quality, engaging content that tells your story and drives audience action.",
  },
  {
    icon: TrendingUp,
    title: "Publishing & Community Growth",
    description:
      "Continuous performance monitoring, optimization, and scaling of successful strategies.",
  },
];

const sampleCalendar = [
  { day: "Mon", type: "Story", content: "Behind the scenes" },
  { day: "Tue", type: "Post", content: "Product showcase" },
  { day: "Wed", type: "Reel", content: "Tutorial video" },
  { day: "Thu", type: "Story", content: "Customer testimonial" },
  { day: "Fri", type: "Post", content: "Industry insights" },
  { day: "Sat", type: "Reel", content: "Weekend vibes" },
  { day: "Sun", type: "Story", content: "Community highlight" },
];

export default function SocialMediaManagementPage() {
  const servicesRef = useRef(null);
  const platformsRef = useRef(null);
  const calendarRef = useRef(null);
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isPlatformsInView = useInView(platformsRef, {
    once: true,
    margin: "-100px",
  });
  const isCalendarInView = useInView(calendarRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />

      <ServiceHero
        title="Social Media Management"
        subtitle="Build Communities, Craft Content, Convert Followers"
        description="Unlock the power of platforms like Instagram, TikTok, LinkedIn, and X. We help brands grow by creating content that resonates, engages, and converts."
        gradient="from-pink-600 to-rose-600"
        stats={[
          { label: "Average Engagement", value: "8.5%" },
          { label: "Community Growth", value: "500K+" },
          { label: "ROAS", value: "12x" },
        ]}
      />

      {/* Services Grid */}
      <section
        ref={servicesRef}
        className="py-32 px-6 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                What We Offer
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every weapon in the social media playbook, wielded by experts who
              understand what makes content go viral.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon size={32} className="text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-rose-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}
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

      {/* Platform Expertise */}
      <section ref={platformsRef} className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isPlatformsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Key Platforms
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We don't just use social platforms—we understand their algorithms,
              audiences, and opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isPlatformsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${platform.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <platform.icon size={32} className="text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {platform.name}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {platform.audience} users
                  </p>
                  <p className="text-gray-300 mb-6">{platform.bestFor}</p>

                  <div className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${platform.gradient} mr-3`}
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

      {/* Sample Calendar Layout */}
      <section
        ref={calendarRef}
        className="py-32 px-6 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isCalendarInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Sample Content Calendar
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic content planning that keeps your audience engaged and
              coming back for more.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isCalendarInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8"
          >
            <div className="grid grid-cols-7 gap-4">
              {sampleCalendar.map((day, index) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isCalendarInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-700/30 rounded-xl p-4 text-center"
                >
                  <div className="text-sm text-gray-400 mb-2">{day.day}</div>
                  <div className="text-xs text-pink-400 mb-2 font-semibold">
                    {day.type}
                  </div>
                  <div className="text-xs text-gray-300">{day.content}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <ServiceProcess
        title="Process"
        subtitle="How We Build Social Media Dominance"
        steps={processSteps}
        gradient="from-pink-400 to-rose-400"
      />

      <ServiceCTA
        title="Ready to Dominate Social Media?"
        subtitle="Let's build a social presence that converts followers into customers."
        gradient="from-pink-600 to-rose-600"
        primaryCTA="Get Started"
        secondaryCTA="Learn More"
      />
    </div>
  );
}
