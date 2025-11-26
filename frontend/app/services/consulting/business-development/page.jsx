"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Target,
  Users,
  TrendingUp,
  BarChart3,
  CheckCircle,
  Clock,
  DollarSign,
  Handshake,
} from "lucide-react";
import ServiceHero from "../../components/service-hero";
import ServiceProcess from "../../components/service-process";
import ServiceCTA from "../../components/service-cta";
import Navigation from "../../../components/navigation";

const services = [
  {
    icon: Target,
    title: "Market Expansion",
    description:
      "Strategic market expansion strategies that identify and capture new opportunities for growth.",
    features: [
      "Market Analysis",
      "Entry Strategy",
      "Competitive Positioning",
      "Growth Planning",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Partnership Development",
    description:
      "Strategic partnership development that creates mutually beneficial relationships and accelerates growth.",
    features: [
      "Partner Identification",
      "Relationship Building",
      "Deal Structuring",
      "Partnership Management",
    ],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: TrendingUp,
    title: "Revenue Optimization",
    description:
      "Revenue optimization strategies that maximize existing opportunities and identify new revenue streams.",
    features: [
      "Revenue Analysis",
      "Optimization Strategy",
      "Implementation Support",
      "Performance Tracking",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Strategic Planning",
    description:
      "Comprehensive strategic planning that aligns business development with overall company objectives.",
    features: [
      "Strategic Assessment",
      "Goal Setting",
      "Action Planning",
      "Execution Support",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
];

const partnershipOpportunities = [
  {
    type: "Strategic Alliances",
    description: "Long-term partnerships with complementary businesses",
    value: "High",
    timeline: "3-6 months",
    investment: "$50K-$200K",
    examples: [
      "Technology integrations",
      "Co-marketing campaigns",
      "Joint product development",
      "Shared distribution channels",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    type: "Channel Partnerships",
    description: "Distribution and sales channel partnerships",
    value: "Medium-High",
    timeline: "2-4 months",
    investment: "$20K-$100K",
    examples: [
      "Reseller agreements",
      "Agency partnerships",
      "Platform integrations",
      "White-label solutions",
    ],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    type: "Technology Partnerships",
    description: "Technical integrations and API partnerships",
    value: "Medium",
    timeline: "1-3 months",
    investment: "$10K-$50K",
    examples: [
      "API integrations",
      "Data sharing agreements",
      "Infrastructure partnerships",
      "Development collaborations",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    type: "Marketing Partnerships",
    description: "Co-marketing and brand collaboration opportunities",
    value: "Medium",
    timeline: "1-2 months",
    investment: "$5K-$30K",
    examples: [
      "Co-branded campaigns",
      "Event sponsorships",
      "Content collaborations",
      "Influencer partnerships",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
];

const marketExpansionAreas = [
  {
    market: "Geographic Expansion",
    description: "Expanding into new geographic markets and regions",
    opportunities: [
      "International markets",
      "Regional expansion",
      "Local market entry",
      "Global partnerships",
    ],
    challenges: [
      "Regulatory compliance",
      "Cultural adaptation",
      "Local competition",
      "Infrastructure setup",
    ],
    timeline: "6-12 months",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    market: "Product Expansion",
    description: "Expanding product offerings and service lines",
    opportunities: [
      "New product development",
      "Service diversification",
      "Feature expansion",
      "Platform extensions",
    ],
    challenges: [
      "Development resources",
      "Market validation",
      "Competitive differentiation",
      "Customer adoption",
    ],
    timeline: "3-9 months",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    market: "Customer Segment Expansion",
    description: "Targeting new customer segments and demographics",
    opportunities: [
      "New customer segments",
      "Demographic expansion",
      "Industry verticals",
      "Use case expansion",
    ],
    challenges: [
      "Market research",
      "Messaging adaptation",
      "Sales process changes",
      "Support requirements",
    ],
    timeline: "2-6 months",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    market: "Channel Expansion",
    description: "Expanding distribution and sales channels",
    opportunities: [
      "New sales channels",
      "Distribution partnerships",
      "Platform marketplaces",
      "Direct-to-consumer",
    ],
    challenges: [
      "Channel conflict",
      "Partner management",
      "Revenue sharing",
      "Brand consistency",
    ],
    timeline: "1-4 months",
    gradient: "from-pink-500 to-rose-500",
  },
];

const processSteps = [
  {
    icon: Target,
    title: "Strategic Assessment",
    description:
      "Comprehensive assessment of current business development opportunities and market positioning.",
  },
  {
    icon: Users,
    title: "Opportunity Identification",
    description:
      "Identification and prioritization of high-value business development opportunities.",
  },
  {
    icon: TrendingUp,
    title: "Strategy Development",
    description:
      "Development of comprehensive business development strategies and action plans.",
  },
  {
    icon: BarChart3,
    title: "Execution & Optimization",
    description:
      "Systematic execution of business development initiatives with ongoing optimization.",
  },
];

export default function BusinessDevelopmentPage() {
  const servicesRef = useRef(null);
  const partnershipsRef = useRef(null);
  const marketsRef = useRef(null);
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isPartnershipsInView = useInView(partnershipsRef, {
    once: true,
    margin: "-100px",
  });
  const isMarketsInView = useInView(marketsRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />

      <ServiceHero
        title="Business Development"
        subtitle="Strategic Growth Through Partnerships"
        description="Identify, develop, and execute strategic business opportunities that drive sustainable growth and market expansion."
        gradient="from-blue-600 to-green-600"
        stats={[
          { label: "Partnerships Formed", value: "200+" },
          { label: "Revenue Growth", value: "300%" },
          { label: "Markets Entered", value: "25+" },
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
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive business development services that identify and
              capture strategic growth opportunities.
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

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-green-400 group-hover:bg-clip-text transition-all duration-300">
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

      {/* Partnership Opportunities */}
      <section ref={partnershipsRef} className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isPartnershipsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Partnership Opportunity Matrix
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic partnership opportunities with value assessment and
              implementation timelines.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.type}
                initial={{ opacity: 0, y: 50 }}
                animate={isPartnershipsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${opportunity.gradient} flex items-center justify-center`}
                    >
                      <Handshake size={24} className="text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">Value</div>
                      <div className="text-sm font-semibold text-gray-300">
                        {opportunity.value}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">
                    {opportunity.type}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {opportunity.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock size={16} className="mr-2" />
                      Timeline: {opportunity.timeline}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <DollarSign size={16} className="mr-2" />
                      Investment: {opportunity.investment}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      Examples:
                    </h4>
                    <div className="space-y-1">
                      {opportunity.examples.map((example, exampleIndex) => (
                        <div
                          key={exampleIndex}
                          className="flex items-center text-xs text-gray-400"
                        >
                          <CheckCircle
                            size={12}
                            className="mr-2 text-green-400"
                          />
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Expansion Areas */}
      <section
        ref={marketsRef}
        className="py-32 px-6 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isMarketsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Market Expansion Areas
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic market expansion opportunities with detailed analysis of
              opportunities and challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketExpansionAreas.map((market, index) => (
              <motion.div
                key={market.market}
                initial={{ opacity: 0, y: 50 }}
                animate={isMarketsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${market.gradient} flex items-center justify-center`}
                    >
                      <Target size={24} className="text-white" />
                    </div>
                    <div className="text-xs text-gray-400">
                      {market.timeline}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">
                    {market.market}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {market.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-green-400 mb-2">
                        Opportunities:
                      </h4>
                      <div className="space-y-1">
                        {market.opportunities.map(
                          (opportunity, opportunityIndex) => (
                            <div
                              key={opportunityIndex}
                              className="flex items-center text-xs text-gray-400"
                            >
                              <CheckCircle
                                size={12}
                                className="mr-2 text-green-400"
                              />
                              {opportunity}
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-red-400 mb-2">
                        Challenges:
                      </h4>
                      <div className="space-y-1">
                        {market.challenges.map((challenge, challengeIndex) => (
                          <div
                            key={challengeIndex}
                            className="flex items-center text-xs text-gray-400"
                          >
                            <div className="w-1 h-1 rounded-full bg-red-400 mr-2" />
                            {challenge}
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

      <ServiceProcess
        title="Process"
        subtitle="How We Drive Business Development"
        steps={processSteps}
        gradient="from-blue-400 to-green-400"
      />

      <ServiceCTA
        title="Ready to Accelerate Your Growth?"
        subtitle="Let's identify and execute the strategic opportunities that will drive your business forward."
        gradient="from-blue-600 to-green-600"
        primaryCTA="Get Started"
        secondaryCTA="Learn More"
      />
    </div>
  );
}
