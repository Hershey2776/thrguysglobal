"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  TrendingUp,
  Zap,
  Target,
  BarChart3,
  MessageSquare,
  Camera,
  Megaphone,
} from "lucide-react";
import ServiceHero from "../components/service-hero";
import ServiceProcess from "../components/service-process";
import ServiceCTA from "../components/service-cta";
import Navigation from "../../components/navigation";

const services = [
  {
    icon: MessageSquare,
    title: "Social Media Management",
    description:
      "Content that converts, communities that engage, campaigns that go viral. We don't just post - we dominate feeds.",
    features: [
      "Content Strategy",
      "Community Management",
      "Paid Social Campaigns",
      "Influencer Partnerships",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Camera,
    title: "UGC Content Creation",
    description:
      "Authentic content that builds trust and drives action. Real people, real results, real impact on your bottom line.",
    features: [
      "Creator Network",
      "Content Production",
      "Performance Tracking",
      "Brand Storytelling",
    ],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: Megaphone,
    title: "Influencer Campaigns",
    description:
      "Strategic partnerships that amplify your message. We connect you with voices that matter to your audience.",
    features: [
      "Influencer Matching",
      "Campaign Strategy",
      "Performance Analytics",
      "Relationship Management",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    title: "Funnel Design & Email",
    description:
      "Conversion machines that turn visitors into customers. Every touchpoint optimized for maximum impact.",
    features: [
      "Funnel Architecture",
      "Email Automation",
      "A/B Testing",
      "Conversion Optimization",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
];

const caseStudies = [
  {
    title: "Doge20",
    subtitle: "Viral Marketing Mastery",
    description:
      "Orchestrated a viral campaign that reached 50M+ people, built a 500K+ community, and achieved $100M market cap.",
    metrics: [
      { label: "Viral Reach", value: "50M+" },
      { label: "Community Size", value: "500K+" },
      { label: "Market Cap", value: "$100M" },
    ],
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "TechFlow",
    subtitle: "B2B Content Domination",
    description:
      "Transformed a fintech startup's content strategy, resulting in 300% increase in qualified leads and $15M Series A.",
    metrics: [
      { label: "Lead Increase", value: "300%" },
      { label: "Funding Raised", value: "$15M" },
      { label: "Engagement Rate", value: "12%" },
    ],
    gradient: "from-blue-500 to-purple-500",
  },
];

const processSteps = [
  {
    icon: BarChart3,
    title: "Audit & Strategy",
    description:
      "Deep dive into your current marketing, audience analysis, and competitive landscape assessment.",
  },
  {
    icon: Target,
    title: "Campaign Design",
    description:
      "Multi-channel campaign architecture with clear KPIs, timelines, and success metrics.",
  },
  {
    icon: Zap,
    title: "Content Production",
    description:
      "High-impact content creation across all channels with our network of creators and specialists.",
  },
  {
    icon: TrendingUp,
    title: "Optimize & Scale",
    description:
      "Continuous optimization based on performance data, scaling what works, killing what doesn't.",
  },
];

export default function DigitalMarketingPage() {
  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />

      <ServiceHero
        title="Digital Marketing"
        subtitle="That Actually Moves the Needle"
        description="Stop throwing money at ads that don't convert. We build marketing machines that turn attention into revenue, followers into customers, and campaigns into cultural moments."
        gradient="from-pink-600 to-purple-600"
        stats={[
          { label: "Average ROAS", value: "8.5x" },
          { label: "Viral Campaigns", value: "50+" },
          { label: "Community Growth", value: "2M+" },
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
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Our Arsenal
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every weapon in the digital marketing playbook, wielded by experts
              who've seen it all and done it better.
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

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
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

      {/* Case Studies */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Marketing That Breaks the Internet
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Not the bank. Real campaigns, real results, real impact on the
              bottom line.
            </p>
          </motion.div>

          <div className="space-y-32">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-16`}
              >
                <div className="flex-1 space-y-8">
                  <div>
                    <motion.h3
                      whileHover={{ scale: 1.02 }}
                      className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}
                    >
                      {study.title}
                    </motion.h3>
                    <h4 className="text-2xl text-gray-300 mb-6">
                      {study.subtitle}
                    </h4>
                    <p className="text-lg text-gray-400 leading-relaxed">
                      {study.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    {study.metrics.map((metric, metricIndex) => (
                      <motion.div
                        key={metric.label}
                        whileHover={{ scale: 1.05 }}
                        className="text-center"
                      >
                        <div className="text-2xl font-bold text-white mb-1">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-400">
                          {metric.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} className="flex-1">
                  <div
                    className={`relative rounded-2xl overflow-hidden bg-gradient-to-r ${study.gradient} p-1`}
                  >
                    <div className="bg-gray-900 rounded-xl p-8 h-80 flex items-center justify-center">
                      <div className="text-center">
                        <div
                          className={`text-6xl font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent mb-4`}
                        >
                          {study.title}
                        </div>
                        <div className="text-gray-400">
                          Campaign Visualization
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceProcess
        title="Our Marketing Process"
        subtitle="From Strategy to Viral Success"
        steps={processSteps}
        gradient="from-pink-500 to-purple-500"
      />

      <ServiceCTA
        title="Ready to Break the Internet?"
        subtitle="Let's build marketing that actually moves the needle."
        primaryCTA="Start Your Campaign"
        secondaryCTA="See More Case Studies"
      />
    </div>
  );
}
