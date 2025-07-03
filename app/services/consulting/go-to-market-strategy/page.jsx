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
  Map,
} from "lucide-react";
import ServiceHero from "../../components/service-hero";
import ServiceProcess from "../../components/service-process";
import ServiceCTA from "../../components/service-cta";
import Navigation from "../../../components/navigation";

const services = [
  {
    icon: Target,
    title: "Market Research & Analysis",
    description:
      "Comprehensive market research and competitive analysis to identify opportunities and position your product effectively.",
    features: [
      "Market Sizing",
      "Competitive Analysis",
      "Customer Research",
      "Opportunity Assessment",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Customer Segmentation",
    description:
      "Strategic customer segmentation and persona development to target the right customers with the right message.",
    features: [
      "Customer Profiling",
      "Segmentation Strategy",
      "Persona Development",
      "Value Proposition",
    ],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: TrendingUp,
    title: "Channel Strategy",
    description:
      "Multi-channel go-to-market strategies that maximize reach and optimize customer acquisition costs.",
    features: [
      "Channel Selection",
      "Distribution Strategy",
      "Partnership Development",
      "Performance Optimization",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Launch Planning",
    description:
      "Comprehensive launch planning and execution strategies that ensure successful market entry and adoption.",
    features: [
      "Launch Strategy",
      "Timeline Planning",
      "Resource Allocation",
      "Success Metrics",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
];

const gtmFrameworks = [
  {
    name: "B2B SaaS Framework",
    description: "Go-to-market strategy for B2B SaaS companies",
    timeline: "3-6 months",
    investment: "$50K-$200K",
    includes: [
      "Enterprise sales strategy",
      "Product-led growth",
      "Channel partnerships",
      "Customer success framework",
    ],
    template: "Download Template",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "B2C E-commerce Framework",
    description: "Go-to-market strategy for B2C e-commerce businesses",
    timeline: "2-4 months",
    investment: "$30K-$150K",
    includes: [
      "Digital marketing strategy",
      "Marketplace optimization",
      "Social commerce",
      "Customer acquisition",
    ],
    template: "Download Template",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    name: "Fintech Framework",
    description: "Go-to-market strategy for fintech companies",
    timeline: "4-8 months",
    investment: "$100K-$500K",
    includes: [
      "Regulatory compliance",
      "Partnership strategy",
      "Trust building",
      "Market education",
    ],
    template: "Download Template",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Marketplace Framework",
    description: "Go-to-market strategy for marketplace platforms",
    timeline: "3-6 months",
    investment: "$50K-$300K",
    includes: [
      "Supply-demand strategy",
      "Network effects",
      "Trust and safety",
      "Growth hacking",
    ],
    template: "Download Template",
    gradient: "from-pink-500 to-rose-500",
  },
];

const marketEntryStrategies = [
  {
    strategy: "Direct Entry",
    description: "Direct market entry with full control over operations",
    advantages: [
      "Full control over brand",
      "Higher profit margins",
      "Direct customer relationships",
      "Faster decision making",
    ],
    challenges: [
      "Higher upfront costs",
      "Slower market penetration",
      "Resource intensive",
      "Risk of failure",
    ],
    bestFor: "Established companies, unique products, high margins",
    timeline: "6-12 months",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    strategy: "Partnership Entry",
    description: "Market entry through strategic partnerships",
    advantages: [
      "Lower upfront costs",
      "Faster market access",
      "Local expertise",
      "Risk sharing",
    ],
    challenges: [
      "Shared control",
      "Complex negotiations",
      "Dependency on partners",
      "Revenue sharing",
    ],
    bestFor: "New markets, limited resources, local expertise needed",
    timeline: "3-6 months",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    strategy: "Acquisition Entry",
    description: "Market entry through strategic acquisitions",
    advantages: [
      "Instant market presence",
      "Established customer base",
      "Local team and infrastructure",
      "Immediate revenue",
    ],
    challenges: [
      "High upfront costs",
      "Integration complexity",
      "Cultural challenges",
      "Regulatory approvals",
    ],
    bestFor: "Large companies, mature markets, strategic positioning",
    timeline: "6-18 months",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    strategy: "Franchise Entry",
    description: "Market entry through franchising model",
    advantages: [
      "Rapid expansion",
      "Lower capital requirements",
      "Local entrepreneur motivation",
      "Proven model replication",
    ],
    challenges: [
      "Quality control",
      "Brand consistency",
      "Franchisee management",
      "Limited control",
    ],
    bestFor: "Service businesses, standardized operations, rapid scaling",
    timeline: "4-8 months",
    gradient: "from-pink-500 to-rose-500",
  },
];

const processSteps = [
  {
    icon: Target,
    title: "Market Assessment",
    description:
      "Comprehensive market assessment and opportunity identification to validate go-to-market potential.",
  },
  {
    icon: Users,
    title: "Strategy Development",
    description:
      "Development of comprehensive go-to-market strategy tailored to your product and target market.",
  },
  {
    icon: TrendingUp,
    title: "Implementation Planning",
    description:
      "Detailed implementation planning with clear timelines, resources, and success metrics.",
  },
  {
    icon: BarChart3,
    title: "Execution & Optimization",
    description:
      "Systematic execution of go-to-market strategy with ongoing optimization and performance tracking.",
  },
];

export default function GoToMarketStrategyPage() {
  const servicesRef = useRef(null);
  const frameworksRef = useRef(null);
  const strategiesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isFrameworksInView = useInView(frameworksRef, {
    once: true,
    margin: "-100px",
  });
  const isStrategiesInView = useInView(strategiesRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />

      <ServiceHero
        title="Go-to-Market Strategy"
        subtitle="Launch with Confidence, Scale with Purpose"
        description="Comprehensive go-to-market strategies that ensure successful product launches and sustainable market growth."
        gradient="from-purple-600 to-pink-600"
        stats={[
          { label: "GTM Strategies", value: "150+" },
          { label: "Success Rate", value: "95%" },
          { label: "Markets Entered", value: "50+" },
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
              Comprehensive go-to-market services that ensure successful product
              launches and market penetration.
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

      {/* GTM Frameworks */}
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
                GTM Framework Templates
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Download industry-specific go-to-market framework templates to
              accelerate your strategy development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gtmFrameworks.map((framework, index) => (
              <motion.div
                key={framework.name}
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
                      <Map size={24} className="text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">Timeline</div>
                      <div className="text-sm font-semibold text-gray-300">
                        {framework.timeline}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">
                    {framework.name}
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
                      <DollarSign size={16} className="mr-2" />
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
                    <Map size={16} />
                    {framework.template}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Entry Strategies */}
      <section
        ref={strategiesRef}
        className="py-32 px-6 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isStrategiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Market Entry Strategies
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic market entry approaches with detailed analysis of
              advantages, challenges, and implementation timelines.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketEntryStrategies.map((strategy, index) => (
              <motion.div
                key={strategy.strategy}
                initial={{ opacity: 0, y: 50 }}
                animate={isStrategiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${strategy.gradient} flex items-center justify-center`}
                    >
                      <Target size={24} className="text-white" />
                    </div>
                    <div className="text-xs text-gray-400">
                      {strategy.timeline}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">
                    {strategy.strategy}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {strategy.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-green-400 mb-2">
                        Advantages:
                      </h4>
                      <div className="space-y-1">
                        {strategy.advantages.map(
                          (advantage, advantageIndex) => (
                            <div
                              key={advantageIndex}
                              className="flex items-center text-xs text-gray-400"
                            >
                              <CheckCircle
                                size={12}
                                className="mr-2 text-green-400"
                              />
                              {advantage}
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
                        {strategy.challenges.map(
                          (challenge, challengeIndex) => (
                            <div
                              key={challengeIndex}
                              className="flex items-center text-xs text-gray-400"
                            >
                              <div className="w-1 h-1 rounded-full bg-red-400 mr-2" />
                              {challenge}
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">
                        Best For:
                      </h4>
                      <p className="text-xs text-gray-400">
                        {strategy.bestFor}
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
        subtitle="How We Build Your GTM Strategy"
        steps={processSteps}
        gradient="from-purple-400 to-pink-400"
      />

      <ServiceCTA
        title="Ready to Launch Your Product?"
        subtitle="Let's create a go-to-market strategy that ensures successful product launch and sustainable growth."
        gradient="from-purple-600 to-pink-600"
        primaryCTA="Get Started"
        secondaryCTA="Learn More"
      />
    </div>
  );
}
