"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Rocket,
  Star,
  Newspaper,
  Users,
  TrendingUp,
  Zap,
  Target,
  Megaphone,
} from "lucide-react";
import ServiceHero from "../../components/service-hero";
import ServiceProcess from "../../components/service-process";
import ServiceCTA from "../../components/service-cta";
import Navigation from "../../../components/navigation";

const services = [
  {
    icon: Target,
    title: "Launch Strategy",
    description:
      "Strategic launch planning that creates cultural moments and maximizes initial market impact.",
    features: [
      "Launch Planning",
      "Timeline Coordination",
      "Message Development",
      "Stakeholder Alignment",
    ],
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Megaphone,
    title: "Media Coordination",
    description:
      "Coordinated media outreach and relationship building to ensure maximum coverage and impact.",
    features: [
      "Media Relations",
      "Press Release Strategy",
      "Journalist Outreach",
      "Coverage Coordination",
    ],
    gradient: "from-red-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Influencer Activation",
    description:
      "Strategic influencer partnerships that amplify your launch message and reach target audiences.",
    features: [
      "Influencer Selection",
      "Partnership Strategy",
      "Content Coordination",
      "Amplification",
    ],
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: TrendingUp,
    title: "Momentum Building",
    description:
      "Sustained momentum building that extends launch impact and maintains market presence.",
    features: [
      "Follow-up Strategy",
      "Momentum Maintenance",
      "Secondary Coverage",
      "Community Building",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
];

const launchTypes = [
  {
    type: "Product Launch",
    focus: "New Product Introduction",
    strategies: [
      "Product Storytelling",
      "Feature Highlighting",
      "User Testimonials",
      "Demo Coordination",
    ],
    channels: [
      "Tech Media",
      "Industry Publications",
      "Influencer Networks",
      "Social Media",
    ],
    gradient: "from-orange-500 to-red-500",
  },
  {
    type: "Company Launch",
    focus: "Brand Introduction",
    strategies: [
      "Founder Story",
      "Vision Communication",
      "Team Introduction",
      "Market Opportunity",
    ],
    channels: [
      "Business Media",
      "Industry Publications",
      "Local Media",
      "Social Media",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    type: "Funding Announcement",
    focus: "Investment Story",
    strategies: [
      "Funding Narrative",
      "Growth Story",
      "Market Opportunity",
      "Team Credibility",
    ],
    channels: [
      "Financial Media",
      "Tech Media",
      "Business Publications",
      "Industry Media",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    type: "Partnership Launch",
    focus: "Strategic Partnership",
    strategies: [
      "Partnership Benefits",
      "Market Impact",
      "Customer Value",
      "Future Vision",
    ],
    channels: [
      "Industry Media",
      "Business Publications",
      "Partner Networks",
      "Social Media",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
];

const caseStudies = [
  {
    title: "CryptoLaunch",
    type: "Product Launch",
    results: {
      mediaCoverage: "50+",
      reach: "10M+",
      socialEngagement: "500K+",
      userAcquisition: "25K+",
    },
    description:
      "Launched a new DeFi protocol with coordinated PR strategy, achieving 50+ media placements and 10M+ reach.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "TechStartup",
    type: "Funding Announcement",
    results: {
      mediaCoverage: "30+",
      reach: "5M+",
      investorInterest: "100+",
      fundingRaised: "$20M",
    },
    description:
      "Announced Series A funding with strategic PR campaign, generating 30+ media placements and $20M in funding.",
    gradient: "from-purple-500 to-pink-500",
  },
];

const processSteps = [
  {
    icon: Target,
    title: "Launch Strategy",
    description:
      "Comprehensive launch strategy development including messaging, timeline, and stakeholder alignment.",
  },
  {
    icon: Megaphone,
    title: "Media Activation",
    description:
      "Strategic media outreach and relationship building to ensure maximum coverage and impact.",
  },
  {
    icon: Users,
    title: "Influencer Coordination",
    description:
      "Coordinated influencer partnerships and content creation to amplify launch message.",
  },
  {
    icon: TrendingUp,
    title: "Momentum Management",
    description:
      "Sustained momentum building and follow-up strategy to maintain launch impact.",
  },
];

export default function LaunchPRPage() {
  const servicesRef = useRef(null);
  const typesRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isTypesInView = useInView(typesRef, { once: true, margin: "-100px" });
  const isCaseStudiesInView = useInView(caseStudiesRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />

      <ServiceHero
        title="Launch PR"
        subtitle="Product Launches That Create Cultural Moments"
        description="We don't just announce—we orchestrate market disruption. Our launch PR campaigns create cultural moments that make your product impossible to ignore."
        gradient="from-orange-600 to-red-600"
        stats={[
          { label: "Launches Executed", value: "100+" },
          { label: "Average Reach", value: "10M+" },
          { label: "Media Placements", value: "500+" },
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
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Launch Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every aspect of launch PR, from strategic planning to media
              coordination to momentum building.
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

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 group-hover:bg-clip-text transition-all duration-300">
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

      {/* Launch Types */}
      <section ref={typesRef} className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTypesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Launch Types
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized launch strategies for different types of announcements
              and market entries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {launchTypes.map((launch, index) => (
              <motion.div
                key={launch.type}
                initial={{ opacity: 0, y: 50 }}
                animate={isTypesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${launch.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Rocket size={32} className="text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {launch.type}
                  </h3>
                  <p className="text-gray-400 mb-6">{launch.focus}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">
                        Strategies:
                      </h4>
                      <div className="space-y-1">
                        {launch.strategies.map((strategy, strategyIndex) => (
                          <div
                            key={strategyIndex}
                            className="text-xs text-gray-400"
                          >
                            • {strategy}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">
                        Channels:
                      </h4>
                      <div className="space-y-1">
                        {launch.channels.map((channel, channelIndex) => (
                          <div
                            key={channelIndex}
                            className="text-xs text-gray-400"
                          >
                            • {channel}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {/* <section
        ref={caseStudiesRef}
        className="py-32 px-6 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isCaseStudiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Launch Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real launches, real media coverage, real cultural moments that
              establish market presence.
            </p>
          </motion.div>

          <div className="space-y-32">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 100 }}
                animate={isCaseStudiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: index * 0.2 }}
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
                    <p className="text-xl text-gray-300 mb-6">{study.type}</p>
                    <p className="text-lg text-gray-400 leading-relaxed">
                      {study.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {Object.entries(study.results).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div
                          className={`text-3xl font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent mb-2`}
                        >
                          {value}
                        </div>
                        <div className="text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <div
                    className={`w-full h-80 rounded-3xl bg-gradient-to-r ${study.gradient} opacity-20`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <ServiceProcess
        title="Our Process"
        subtitle="How We Create Launch Moments That Matter"
        steps={processSteps}
        gradient="from-orange-400 to-red-400"
      />

      <ServiceCTA
        title="Ready to Launch with Impact?"
        subtitle="Let's create a launch campaign that makes your product impossible to ignore."
        gradient="from-orange-600 to-red-600"
      />
    </div>
  );
}
