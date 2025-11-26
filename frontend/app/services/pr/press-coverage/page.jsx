"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Newspaper,
  Users,
  TrendingUp,
  Zap,
  Target,
  BarChart3,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import ServiceHero from "../../components/service-hero";
import ServiceProcess from "../../components/service-process";
import ServiceCTA from "../../components/service-cta";
import Navigation from "../../../components/navigation";

const services = [
  {
    icon: Newspaper,
    title: "Media Relations",
    description:
      "Build relationships with journalists who matter. Earned media that money can't buy and coverage that converts.",
    features: [
      "Journalist Outreach",
      "Relationship Building",
      "Story Pitching",
      "Media Monitoring",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: MessageSquare,
    title: "Press Release Strategy",
    description:
      "Strategic press releases that capture attention and drive media coverage for your announcements.",
    features: [
      "Release Writing",
      "Distribution Strategy",
      "Timing Optimization",
      "Follow-up",
    ],
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Journalist Outreach",
    description:
      "Targeted outreach to journalists and media outlets that cover your industry and audience.",
    features: [
      "Media List Building",
      "Personalized Outreach",
      "Story Development",
      "Relationship Management",
    ],
    gradient: "from-teal-500 to-green-500",
  },
  {
    icon: TrendingUp,
    title: "Story Development",
    description:
      "Compelling story development that makes your news newsworthy and captures media attention.",
    features: [
      "Story Angles",
      "Narrative Development",
      "Visual Elements",
      "Distribution",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
];

const mediaOutlets = [
  {
    outlet: "TechCrunch",
    category: "Technology",
    reach: "50M+",
    focus: ["Startups", "Tech News", "Funding", "Product Launches"],
    bestFor: "Tech Companies, Startups, Product Launches",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    outlet: "Forbes",
    category: "Business",
    reach: "120M+",
    focus: ["Business News", "Entrepreneurs", "Leadership", "Innovation"],
    bestFor: "Business News, Leadership, Innovation Stories",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    outlet: "Wall Street Journal",
    category: "Finance",
    reach: "100M+",
    focus: ["Financial News", "Markets", "Business", "Technology"],
    bestFor: "Financial News, Market Stories, Business Updates",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    outlet: "Bloomberg",
    category: "Finance",
    reach: "80M+",
    focus: ["Financial Markets", "Business", "Technology", "Politics"],
    bestFor: "Financial Markets, Business News, Market Analysis",
    gradient: "from-orange-500 to-red-500",
  },
];

const caseStudies = [
  {
    title: "FintechLaunch",
    industry: "Fintech",
    results: {
      mediaPlacements: "25+",
      reach: "10M+",
      investorInterest: "High",
      customerAcquisition: "5K+",
    },
    description:
      "Secured 25+ media placements for fintech launch, achieving 10M+ reach and high investor interest.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "CryptoPlatform",
    industry: "Cryptocurrency",
    results: {
      mediaPlacements: "50+",
      reach: "20M+",
      userAcquisition: "100K+",
      marketPosition: "Leader",
    },
    description:
      "Achieved 50+ media placements for crypto platform, reaching 20M+ people and acquiring 100K+ users.",
    gradient: "from-purple-500 to-pink-500",
  },
];

const processSteps = [
  {
    icon: Target,
    title: "Media Strategy",
    description:
      "Comprehensive media strategy development including target outlets and story angles.",
  },
  {
    icon: MessageSquare,
    title: "Content Creation",
    description:
      "Creation of compelling press releases and story materials for media outreach.",
  },
  {
    icon: Users,
    title: "Media Outreach",
    description:
      "Strategic outreach to journalists and media outlets with personalized pitches.",
  },
  {
    icon: TrendingUp,
    title: "Amplification",
    description:
      "Amplification of media coverage and ongoing relationship building with journalists.",
  },
];

export default function PressCoveragePage() {
  const servicesRef = useRef(null);
  const outletsRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isOutletsInView = useInView(outletsRef, {
    once: true,
    margin: "-100px",
  });
  const isCaseStudiesInView = useInView(caseStudiesRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />

      <ServiceHero
        title="Press Coverage"
        subtitle="Earned Media That Money Can't Buy"
        description="Build relationships with journalists who matter, stories that stick, and coverage that converts. We secure earned media that builds credibility and drives business outcomes."
        gradient="from-blue-600 to-cyan-600"
        stats={[
          { label: "Media Placements", value: "1000+" },
          { label: "Total Reach", value: "100M+" },
          { label: "Journalist Relationships", value: "500+" },
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
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Press Coverage Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every aspect of press coverage, from media relations to story
              development to coverage amplification.
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

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
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

      {/* Media Outlets */}
      <section ref={outletsRef} className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isOutletsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Media Network
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Relationships with leading media outlets that cover your industry
              and reach your target audience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaOutlets.map((outlet, index) => (
              <motion.div
                key={outlet.outlet}
                initial={{ opacity: 0, y: 50 }}
                animate={isOutletsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${outlet.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Newspaper size={32} className="text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {outlet.outlet}
                  </h3>
                  <p className="text-gray-400 mb-2">{outlet.category}</p>
                  <p className="text-gray-400 mb-4">{outlet.reach} reach</p>
                  <p className="text-gray-300 mb-6">{outlet.bestFor}</p>

                  <div className="space-y-2">
                    {outlet.focus.map((topic, topicIndex) => (
                      <div
                        key={topicIndex}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${outlet.gradient} mr-3`}
                        />
                        {topic}
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
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Press Coverage Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real media placements, real reach, real business impact that
              drives growth and credibility.
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
                    <p className="text-xl text-gray-300 mb-6">
                      {study.industry}
                    </p>
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
        subtitle="How We Secure Press Coverage"
        steps={processSteps}
        gradient="from-blue-400 to-cyan-400"
      />

      <ServiceCTA
        title="Ready to Secure Press Coverage?"
        subtitle="Let's build relationships with journalists and secure earned media that drives business growth."
        gradient="from-blue-600 to-cyan-600"
      />
    </div>
  );
}
