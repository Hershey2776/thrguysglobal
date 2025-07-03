"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain,
  DollarSign,
  Target,
  Lightbulb,
  BarChart3,
  Rocket,
  Zap,
} from "lucide-react";
import ServiceHero from "../components/service-hero";
import ServiceProcess from "../components/service-process";
import ServiceCTA from "../components/service-cta";
import Navigation from "../../components/navigation";

const services = [
  {
    icon: Lightbulb,
    title: "Product Development",
    description:
      "Strategic product guidance that turns ideas into market-dominating solutions. We've seen what works and what doesn't.",
    features: [
      "Product Strategy",
      "Feature Prioritization",
      "Technical Architecture",
      "User Experience Design",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Rocket,
    title: "Go-to-Market Strategy",
    description:
      "Launch strategies that create market disruption. From positioning to pricing, we orchestrate market entry that matters.",
    features: [
      "Market Analysis",
      "Positioning Strategy",
      "Launch Planning",
      "Channel Strategy",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: DollarSign,
    title: "Pricing Optimization",
    description:
      "Pricing strategies that maximize revenue while accelerating growth. Psychology meets mathematics meets market reality.",
    features: [
      "Pricing Models",
      "Revenue Optimization",
      "Competitive Analysis",
      "Value-Based Pricing",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Target,
    title: "Business Development",
    description:
      "Strategic partnerships and procurement that accelerate growth. We connect you with the deals that change everything.",
    features: [
      "Partnership Strategy",
      "Deal Structuring",
      "Procurement Support",
      "Strategic Alliances",
    ],
    gradient: "from-orange-500 to-red-500",
  },
];

const expertise = [
  {
    area: "Fintech & Payments",
    projects: "50+",
    description:
      "From neobanks to payment processors, we've navigated every regulatory challenge and market opportunity.",
    highlights: [
      "VASP Licensing",
      "Payment Rails",
      "Regulatory Strategy",
      "Market Entry",
    ],
  },
  {
    area: "Web3 & Blockchain",
    projects: "75+",
    description:
      "DeFi protocols, NFT platforms, DAOs - we've built the infrastructure that powers the decentralized future.",
    highlights: [
      "Tokenomics",
      "Protocol Design",
      "Community Building",
      "Regulatory Navigation",
    ],
  },
  {
    area: "AI & Machine Learning",
    projects: "30+",
    description:
      "From computer vision to NLP, we help AI companies navigate the path from research to revenue.",
    highlights: [
      "Model Deployment",
      "Data Strategy",
      "Ethics Framework",
      "Scaling Infrastructure",
    ],
  },
  {
    area: "SaaS & Enterprise",
    projects: "100+",
    description:
      "B2B software that enterprises actually adopt. We understand the sales cycles, the decision makers, the real pain points.",
    highlights: [
      "Enterprise Sales",
      "Product-Market Fit",
      "Scaling Strategy",
      "Customer Success",
    ],
  },
];

const processSteps = [
  {
    icon: Brain,
    title: "Strategic Assessment",
    description:
      "Deep dive into your business model, market position, and growth opportunities. We see what others miss.",
  },
  {
    icon: BarChart3,
    title: "Market Analysis",
    description:
      "Comprehensive competitive landscape analysis and market opportunity assessment.",
  },
  {
    icon: Target,
    title: "Strategy Development",
    description:
      "Custom strategic roadmap with clear milestones, metrics, and execution plans.",
  },
  {
    icon: Zap,
    title: "Execution Support",
    description:
      "Hands-on implementation support to ensure your strategy translates into results.",
  },
];

export default function ConsultingPage() {
  const servicesRef = useRef(null);
  const expertiseRef = useRef(null);
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isExpertiseInView = useInView(expertiseRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />

      <ServiceHero
        title="Strategy & Consulting"
        subtitle="Vision Meets Execution"
        description="Strategic guidance that turns ambitious ideas into market reality. We've been in the trenches, scaled the mountains, and know exactly what it takes to win."
        gradient="from-purple-600 to-pink-600"
        stats={[
          { label: "Companies Advised", value: "200+" },
          { label: "Total Funding Raised", value: "$2B+" },
          { label: "Market Entries", value: "50+" },
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
                Strategic Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The strategic insights that separate market leaders from the rest.
              Experience that money can't buy, wisdom that only comes from
              doing.
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

      {/* Industry Expertise */}
      <section ref={expertiseRef} className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isExpertiseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Industry Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deep domain knowledge across the industries that matter. We don't
              just consult—we've built, scaled, and exited.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((area, index) => (
              <motion.div
                key={area.area}
                initial={{ opacity: 0, y: 50 }}
                animate={isExpertiseInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{area.area}</h3>
                  <div className="text-sm text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                    {area.projects} Projects
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {area.description}
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {area.highlights.map((highlight, highlightIndex) => (
                    <div
                      key={highlightIndex}
                      className="flex items-center text-sm text-gray-400"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceProcess
        title="Our Consulting Process"
        subtitle="From Strategic Vision to Market Victory"
        steps={processSteps}
        gradient="from-purple-500 to-pink-500"
      />

      <ServiceCTA
        title="Ready to Dominate Your Market?"
        subtitle="Let's turn your ambitious vision into unstoppable market reality."
        primaryCTA="Book Strategy Session"
        secondaryCTA="Download Case Studies"
      />
    </div>
  );
}
