"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  User,
  MessageSquare,
  TrendingUp,
  BarChart3,
  CheckCircle,
  Clock,
  Users,
  Star,
} from "lucide-react";
import ServiceHero from "../../components/service-hero";
import ServiceProcess from "../../components/service-process";
import ServiceCTA from "../../components/service-cta";
import Navigation from "../../../components/navigation";

const services = [
  {
    icon: User,
    title: "Personal Brand Strategy",
    description:
      "Comprehensive personal brand strategy development that positions you as a thought leader in your industry.",
    features: [
      "Brand Positioning",
      "Value Proposition",
      "Target Audience",
      "Brand Voice",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: MessageSquare,
    title: "Content Strategy",
    description:
      "Strategic content creation and distribution that builds your personal brand and engages your audience.",
    features: [
      "Content Planning",
      "Platform Strategy",
      "Engagement Tactics",
      "Thought Leadership",
    ],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: TrendingUp,
    title: "Media Relations",
    description:
      "Strategic media relations that increase your visibility and establish you as an industry expert.",
    features: [
      "Media Outreach",
      "Interview Preparation",
      "Press Opportunities",
      "Reputation Building",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Brand Analytics",
    description:
      "Data-driven brand analytics that measure your personal brand impact and optimize your strategy.",
    features: [
      "Brand Monitoring",
      "Performance Tracking",
      "Audience Insights",
      "Strategy Optimization",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
];

const personalBrandFrameworks = [
  {
    type: "Thought Leadership Framework",
    description: "Establish yourself as an industry expert and thought leader",
    timeline: "6-12 months",
    investment: "$20K-$100K",
    includes: [
      "Expert positioning",
      "Content strategy",
      "Speaking opportunities",
      "Media presence",
    ],
    template: "Download Template",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    type: "Influencer Brand Framework",
    description:
      "Build a personal brand with significant social media influence",
    timeline: "3-6 months",
    investment: "$15K-$75K",
    includes: [
      "Social media strategy",
      "Content creation",
      "Community building",
      "Partnership development",
    ],
    template: "Download Template",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    type: "Executive Brand Framework",
    description: "Develop a strong executive brand for business leadership",
    timeline: "4-8 months",
    investment: "$25K-$150K",
    includes: [
      "Leadership positioning",
      "Industry recognition",
      "Board opportunities",
      "Strategic networking",
    ],
    template: "Download Template",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    type: "Startup Founder Framework",
    description: "Build a founder brand that supports company growth",
    timeline: "3-6 months",
    investment: "$10K-$50K",
    includes: [
      "Founder story",
      "Company narrative",
      "Investor relations",
      "Talent attraction",
    ],
    template: "Download Template",
    gradient: "from-pink-500 to-rose-500",
  },
];

const brandBuildingChannels = [
  {
    channel: "LinkedIn",
    description: "Professional networking and thought leadership platform",
    audience: "Business professionals, executives, industry leaders",
    content: [
      "Industry insights",
      "Professional achievements",
      "Thought leadership articles",
      "Company updates",
    ],
    engagement: "High for B2B, professional networking",
    timeline: "3-6 months",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    channel: "Twitter/X",
    description: "Real-time conversations and industry discussions",
    audience: "Tech professionals, journalists, industry experts",
    content: [
      "Industry commentary",
      "Real-time insights",
      "Engagement with peers",
      "Trending topics",
    ],
    engagement: "High for real-time engagement, industry conversations",
    timeline: "2-4 months",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    channel: "Podcasts",
    description: "Audio content for thought leadership and expertise sharing",
    audience: "Industry professionals, decision makers, enthusiasts",
    content: [
      "Expert interviews",
      "Industry discussions",
      "Knowledge sharing",
      "Storytelling",
    ],
    engagement: "High for deep engagement, credibility building",
    timeline: "4-8 months",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    channel: "Speaking Engagements",
    description: "Live presentations and industry conferences",
    audience: "Industry professionals, decision makers, potential clients",
    content: [
      "Keynote presentations",
      "Panel discussions",
      "Workshop facilitation",
      "Industry insights",
    ],
    engagement: "Very high for credibility, direct audience connection",
    timeline: "6-12 months",
    gradient: "from-pink-500 to-rose-500",
  },
];

const processSteps = [
  {
    icon: User,
    title: "Brand Assessment",
    description:
      "Comprehensive assessment of your current personal brand and positioning opportunities.",
  },
  {
    icon: MessageSquare,
    title: "Strategy Development",
    description:
      "Development of comprehensive personal brand strategy aligned with your goals and target audience.",
  },
  {
    icon: TrendingUp,
    title: "Content & Engagement",
    description:
      "Strategic content creation and engagement tactics to build your personal brand presence.",
  },
  {
    icon: BarChart3,
    title: "Optimization & Growth",
    description:
      "Continuous optimization and growth of your personal brand based on performance data and feedback.",
  },
];

export default function FounderBrandingPage() {
  const servicesRef = useRef(null);
  const frameworksRef = useRef(null);
  const channelsRef = useRef(null);
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isFrameworksInView = useInView(frameworksRef, {
    once: true,
    margin: "-100px",
  });
  const isChannelsInView = useInView(channelsRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />

      <ServiceHero
        title="Founder Branding"
        subtitle="Build Your Personal Brand, Amplify Your Impact"
        description="Strategic personal branding that positions you as a thought leader, builds credibility, and drives business growth."
        gradient="from-purple-600 to-pink-600"
        stats={[
          { label: "Brands Built", value: "100+" },
          { label: "Media Mentions", value: "500+" },
          { label: "Speaking Events", value: "200+" },
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
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive personal branding services that build your
              reputation and amplify your influence.
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

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
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

      {/* Personal Brand Frameworks */}
      <section ref={frameworksRef} className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isFrameworksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Personal Brand Frameworks
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Download personal brand frameworks to accelerate your personal
              branding strategy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalBrandFrameworks.map((framework, index) => (
              <motion.div
                key={framework.type}
                initial={{ opacity: 0, y: 50 }}
                animate={isFrameworksInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${framework.gradient} flex items-center justify-center`}
                    >
                      <Star size={24} className="text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">Timeline</div>
                      <div className="text-sm font-semibold text-gray-300">
                        {framework.timeline}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">
                    {framework.type}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {framework.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock size={16} className="mr-2" />
                      Timeline: {framework.timeline}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Users size={16} className="mr-2" />
                      Investment: {framework.investment}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      Includes:
                    </h4>
                    <div className="space-y-1">
                      {framework.includes.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center text-xs text-gray-400"
                        >
                          <CheckCircle
                            size={12}
                            className="mr-2 text-green-400"
                          />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${framework.gradient} px-4 py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300`}
                  >
                    <Star size={16} />
                    {framework.template}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Building Channels */}
      <section
        ref={channelsRef}
        className="py-32 px-6 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isChannelsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Brand Building Channels
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic channels for building your personal brand with detailed
              content strategies and engagement tactics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brandBuildingChannels.map((channel, index) => (
              <motion.div
                key={channel.channel}
                initial={{ opacity: 0, y: 50 }}
                animate={isChannelsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${channel.gradient} flex items-center justify-center`}
                    >
                      <MessageSquare size={24} className="text-white" />
                    </div>
                    <div className="text-xs text-gray-400">
                      {channel.timeline}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">
                    {channel.channel}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {channel.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">
                        Target Audience:
                      </h4>
                      <p className="text-xs text-gray-400">
                        {channel.audience}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-green-400 mb-2">
                        Content Types:
                      </h4>
                      <div className="space-y-1">
                        {channel.content.map((content, contentIndex) => (
                          <div
                            key={contentIndex}
                            className="flex items-center text-xs text-gray-400"
                          >
                            <CheckCircle
                              size={12}
                              className="mr-2 text-green-400"
                            />
                            {content}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">
                        Engagement:
                      </h4>
                      <p className="text-xs text-gray-400">
                        {channel.engagement}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceProcess
        title="Process"
        subtitle="How We Build Your Personal Brand"
        steps={processSteps}
        gradient="from-purple-400 to-pink-400"
      />

      <ServiceCTA
        title="Ready to Build Your Personal Brand?"
        subtitle="Let's develop a personal brand strategy that positions you as a thought leader and drives business growth."
        gradient="from-purple-600 to-pink-600"
        primaryCTA="Get Started"
        secondaryCTA="Learn More"
      />
    </div>
  );
}
