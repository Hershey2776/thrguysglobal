"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  TrendingUp,
  BarChart3,
  Target,
  Star,
  MessageSquare,
  Calendar,
  DollarSign,
  CheckCircle,
} from "lucide-react";
import ServiceHero from "../../components/service-hero";
import ServiceProcess from "../../components/service-process";
import ServiceCTA from "../../components/service-cta";
import Navigation from "../../../components/navigation";

const services = [
  {
    icon: Users,
    title: "Influencer Sourcing",
    description:
      "We identify and vet the perfect influencers for your brand, ensuring authentic partnerships that drive results.",
    features: [
      "Audience Analysis",
      "Authenticity Verification",
      "Performance History",
      "Brand Alignment",
    ],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: Target,
    title: "Campaign Planning",
    description:
      "Strategic campaign design that maximizes reach and engagement while staying within budget constraints.",
    features: [
      "Goal Setting",
      "Content Strategy",
      "Timeline Planning",
      "Budget Allocation",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description:
      "Comprehensive analytics and reporting to measure ROI and optimize future campaigns.",
    features: [
      "Engagement Metrics",
      "ROI Analysis",
      "Audience Insights",
      "Campaign Optimization",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: MessageSquare,
    title: "Creator Relationship Management",
    description:
      "End-to-end relationship management to ensure smooth collaboration and long-term partnerships.",
    features: [
      "Communication Management",
      "Contract Negotiation",
      "Content Approval",
      "Relationship Building",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
];

const influencerTiers = [
  {
    name: "Nano",
    followers: "1K–10K",
    engagement: "8-12%",
    cost: "$50-$500",
    deliverables: ["Instagram Post", "Story", "TikTok Video"],
    bestFor: "Local businesses, niche products",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Micro",
    followers: "10K–100K",
    engagement: "5-8%",
    cost: "$500-$5K",
    deliverables: ["Multiple Posts", "Stories", "Video Content", "Lives"],
    bestFor: "Growing brands, targeted campaigns",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Macro",
    followers: "100K–1M",
    engagement: "3-5%",
    cost: "$5K-$50K",
    deliverables: ["Full Campaign", "Exclusive Content", "Brand Integration"],
    bestFor: "Established brands, product launches",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    name: "Mega",
    followers: "1M+",
    engagement: "1-3%",
    cost: "$50K+",
    deliverables: [
      "Celebrity Endorsement",
      "TV Appearances",
      "Major Campaigns",
    ],
    bestFor: "Global brands, major launches",
    gradient: "from-pink-500 to-rose-500",
  },
];

const processSteps = [
  {
    icon: Target,
    title: "Goal Alignment",
    description:
      "Define campaign objectives, target audience, and success metrics to ensure strategic alignment.",
  },
  {
    icon: Users,
    title: "Influencer Selection",
    description:
      "Identify and vet the perfect influencers based on audience match, authenticity, and performance history.",
  },
  {
    icon: Calendar,
    title: "Campaign Execution",
    description:
      "Manage the entire campaign from content creation to publishing, ensuring quality and compliance.",
  },
  {
    icon: BarChart3,
    title: "Performance Review",
    description:
      "Analyze results, measure ROI, and provide insights for future campaign optimization.",
  },
];

export default function InfluencerCampaignsPage() {
  const servicesRef = useRef(null);
  const tiersRef = useRef(null);
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isTiersInView = useInView(tiersRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />

      <ServiceHero
        title="Influencer Campaigns"
        subtitle="Strategic Influencer Marketing that Drives Results"
        description="Leverage trusted voices to amplify your message. We identify ideal influencers, craft impactful campaigns, and manage relationships end-to-end."
        gradient="from-purple-600 to-indigo-600"
        stats={[
          { label: "Average ROI", value: "5.2x" },
          { label: "Engagement Rate", value: "8.5%" },
          { label: "Reach", value: "10M+" },
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
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end influencer marketing that connects you with the right
              voices to amplify your message.
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

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-indigo-400 group-hover:bg-clip-text transition-all duration-300">
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

      {/* Influencer Tiers */}
      <section ref={tiersRef} className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTiersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Influencer Tiers
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the right tier for your campaign goals and budget. Each
              tier offers different reach, engagement, and deliverables.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {influencerTiers.map((tier, index) => (
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
                    <Star size={24} className="text-white" />
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

      <ServiceProcess
        title="Process"
        subtitle="How We Execute Influencer Campaigns"
        steps={processSteps}
        gradient="from-purple-400 to-indigo-400"
      />

      <ServiceCTA
        title="Ready to Launch Your Influencer Campaign?"
        subtitle="Let's connect you with the right voices to amplify your message and drive results."
        gradient="from-purple-600 to-indigo-600"
        primaryCTA="Get Started"
        secondaryCTA="Learn More"
      />
    </div>
  );
}
