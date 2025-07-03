"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Megaphone,
  Star,
  Shield,
  Rocket,
  Newspaper,
  Users,
  TrendingUp,
  Zap,
} from "lucide-react";
import ServiceHero from "../components/service-hero";
import ServiceProcess from "../components/service-process";
import ServiceCTA from "../components/service-cta";
import Navigation from "../../components/navigation";

const services = [
  {
    icon: Rocket,
    title: "Launch PR",
    description:
      "Product launches that create cultural moments. We don't just announce—we orchestrate market disruption.",
    features: [
      "Launch Strategy",
      "Media Coordination",
      "Influencer Activation",
      "Momentum Building",
    ],
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Shield,
    title: "Crisis Communications",
    description:
      "Turn reputation threats into competitive advantages. When shit hits the fan, we're the cleanup crew that makes you stronger.",
    features: [
      "Crisis Strategy",
      "Reputation Management",
      "Stakeholder Communication",
      "Recovery Planning",
    ],
    gradient: "from-red-500 to-pink-500",
  },
  {
    icon: Star,
    title: "Founder Branding",
    description:
      "Transform founders into industry thought leaders. Personal brands that open doors, close deals, and attract talent.",
    features: [
      "Personal Brand Strategy",
      "Content Development",
      "Speaking Opportunities",
      "Media Training",
    ],
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: Newspaper,
    title: "Press Coverage",
    description:
      "Earned media that money can't buy. Relationships with journalists who matter, stories that stick, coverage that converts.",
    features: [
      "Media Relations",
      "Press Release Strategy",
      "Journalist Outreach",
      "Story Development",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
];

const mediaPartners = [
  { name: "TechCrunch", category: "Tech", reach: "50M+" },
  { name: "Forbes", category: "Business", reach: "120M+" },
  { name: "Wall Street Journal", category: "Finance", reach: "100M+" },
  { name: "Bloomberg", category: "Finance", reach: "80M+" },
  { name: "Wired", category: "Tech", reach: "30M+" },
  { name: "Fast Company", category: "Business", reach: "25M+" },
  { name: "The Verge", category: "Tech", reach: "40M+" },
  { name: "Business Insider", category: "Business", reach: "60M+" },
];

const crisisTypes = [
  {
    type: "Regulatory Issues",
    description:
      "Navigate regulatory challenges while maintaining market confidence and stakeholder trust.",
    approach:
      "Proactive compliance narrative, stakeholder education, regulatory relationship management",
  },
  {
    type: "Product Issues",
    description:
      "Turn product setbacks into opportunities for transparency, improvement, and customer loyalty.",
    approach:
      "Rapid response, transparent communication, solution-focused messaging, customer-first approach",
  },
  {
    type: "Leadership Changes",
    description:
      "Manage leadership transitions while maintaining business continuity and market confidence.",
    approach:
      "Succession narrative, continuity messaging, stakeholder reassurance, future vision communication",
  },
  {
    type: "Market Volatility",
    description:
      "Maintain brand strength and stakeholder confidence during market downturns and uncertainty.",
    approach:
      "Resilience messaging, long-term vision communication, stakeholder education, opportunity positioning",
  },
];

const processSteps = [
  {
    icon: TrendingUp,
    title: "Brand Audit",
    description:
      "Comprehensive analysis of your current brand perception, media presence, and reputation landscape.",
  },
  {
    icon: Megaphone,
    title: "Narrative Development",
    description:
      "Craft compelling brand stories that resonate with your audience and differentiate from competitors.",
  },
  {
    icon: Users,
    title: "Media Activation",
    description:
      "Strategic media outreach and relationship building with journalists, influencers, and thought leaders.",
  },
  {
    icon: Zap,
    title: "Amplification",
    description:
      "Multi-channel amplification strategy that maximizes reach, engagement, and brand impact.",
  },
];

export default function PRPage() {
  const servicesRef = useRef(null);
  const mediaRef = useRef(null);
  const crisisRef = useRef(null);
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isMediaInView = useInView(mediaRef, { once: true, margin: "-100px" });
  const isCrisisInView = useInView(crisisRef, { once: true, margin: "-100px" });

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />

      <ServiceHero
        title="Public Relations"
        subtitle="PR That Breaks the Internet, Not the Bank"
        description="Strategic communications that build brands, shape narratives, and create cultural moments. We don't just get you coverage—we make you impossible to ignore."
        gradient="from-orange-600 to-pink-600"
        stats={[
          { label: "Media Placements", value: "1000+" },
          { label: "Crisis Resolved", value: "50+" },
          { label: "Thought Leaders Built", value: "100+" },
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
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                PR Arsenal
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every PR weapon you need to dominate the narrative, from launch
              buzz to crisis management to thought leadership.
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

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
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

      {/* Media Partners */}
      <section ref={mediaRef} className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isMediaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Media Network
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Direct relationships with the journalists and publications that
              matter. Coverage that reaches the right people at the right time.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mediaPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isMediaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-gray-600/50 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-2">
                  {partner.name}
                </h3>
                <div className="text-sm text-gray-400 mb-2">
                  {partner.category}
                </div>
                <div className="text-xs text-orange-400 bg-orange-400/10 px-2 py-1 rounded-full">
                  {partner.reach} Reach
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Crisis Management */}
      {/* <section ref={crisisRef} className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isCrisisInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Crisis Management
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              When shit hits the fan, we're the cleanup crew that makes you stronger. Crisis turned into opportunity,
              every time.
            </p>
          </motion.div>

          <div className="space-y-8">
            {crisisTypes.map((crisis, index) => (
              <motion.div
                key={crisis.type}
                initial={{ opacity: 0, x: -50 }}
                animate={isCrisisInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">{crisis.type}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{crisis.description}</p>
                    <div className="text-sm text-gray-400">
                      <span className="font-semibold text-orange-400">Our Approach:</span> {crisis.approach}
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-orange-600 to-red-600 px-6 py-3 rounded-full font-semibold whitespace-nowrap"
                  >
                    Crisis Consultation
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <ServiceProcess
        title="Our PR Process"
        subtitle="From Brand Unknown to Industry Icon"
        steps={processSteps}
        gradient="from-orange-500 to-pink-500"
      />

      <ServiceCTA
        title="Ready to Own the Narrative?"
        subtitle="Let's build a brand that's impossible to ignore."
        primaryCTA="Start PR Campaign"
        secondaryCTA="Crisis Consultation"
      />
    </div>
  );
}
