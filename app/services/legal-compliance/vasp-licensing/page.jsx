"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  FileText,
  Users,
  BarChart3,
  Globe,
  Clock,
  DollarSign,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import Navigation from "../../../components/navigation";
import ServiceHero from "../../components/service-hero";
import ServiceProcess from "../../components/service-process";
import ServiceCTA from "../../components/service-cta";

const services = [
  {
    icon: Shield,
    title: "Pre-Application Advisory",
    description:
      "Strategic guidance on VASP licensing requirements, jurisdiction selection, and preparation strategies.",
    features: [
      "Jurisdiction Analysis",
      "Requirements Assessment",
      "Business Model Review",
      "Strategy Development",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: FileText,
    title: "Documentation & Financials",
    description:
      "Complete preparation of all required documentation, financial statements, and compliance materials.",
    features: [
      "Business Plan",
      "Financial Projections",
      "Compliance Policies",
      "Technical Documentation",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Government Submission",
    description:
      "Direct submission to regulatory authorities with ongoing liaison and progress tracking.",
    features: [
      "Application Submission",
      "Regulator Liaison",
      "Query Management",
      "Progress Updates",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Licensing & Launch",
    description:
      "Final approval coordination and post-licensing support for successful market entry.",
    features: [
      "Approval Coordination",
      "Launch Support",
      "Compliance Setup",
      "Ongoing Advisory",
    ],
    gradient: "from-orange-500 to-red-500",
  },
];

const jurisdictions = [
  {
    name: "Dubai (VARA)",
    flag: "🇦🇪",
    timeline: "4-8 months",
    cost: "$100K-$500K",
    capital: "$500K-$2M",
    requirements: [
      "Local Presence",
      "Capital Requirements",
      "Compliance Framework",
    ],
    pros: [
      "Zero corporate tax",
      "Strategic location",
      "Comprehensive regulation",
    ],
    cons: [
      "High capital requirements",
      "Local presence needed",
      "Complex compliance",
    ],
    bestFor: "Established crypto businesses, regional expansion",
    gradient: "from-green-500 to-red-500",
  },
  {
    name: "Singapore (MAS)",
    flag: "🇸🇬",
    timeline: "3-6 months",
    cost: "$50K-$200K",
    capital: "$100K-$500K",
    requirements: ["AML/KYC", "Capital Requirements", "Technical Standards"],
    pros: ["Strong reputation", "Low corporate tax", "Regional hub"],
    cons: ["Residency requirements", "Competitive market", "Strict compliance"],
    bestFor: "Asian expansion, fintech companies",
    gradient: "from-red-500 to-white",
  },
  {
    name: "Estonia",
    flag: "🇪🇪",
    timeline: "2-4 months",
    cost: "$20K-$100K",
    capital: "$50K-$250K",
    requirements: ["AML/KYC", "Technical Standards", "Compliance Program"],
    pros: ["Fast approval", "Low costs", "EU access", "Digital-first"],
    cons: ["Limited banking", "Small market", "Language barriers"],
    bestFor: "Digital businesses, EU expansion",
    gradient: "from-blue-500 to-black",
  },
];

const coveredServices = [
  {
    name: "Crypto Exchange",
    description:
      "Trading platforms for buying, selling, and exchanging cryptocurrencies",
    requirements: ["Order matching", "Custody solutions", "Risk management"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Wallets & Custody",
    description:
      "Digital wallet services and secure custody solutions for crypto assets",
    requirements: [
      "Security protocols",
      "Key management",
      "Insurance coverage",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Payment Processing",
    description: "Crypto payment processing and merchant services",
    requirements: [
      "Payment rails",
      "Settlement systems",
      "Compliance monitoring",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "NFT & DeFi Services",
    description:
      "Non-fungible token platforms and decentralized finance services",
    requirements: ["Smart contracts", "Liquidity pools", "Governance systems"],
    gradient: "from-orange-500 to-red-500",
  },
];

const processSteps = [
  {
    icon: Shield,
    title: "Pre-Application Advisory",
    description:
      "Comprehensive analysis of your business model and strategic guidance on jurisdiction selection.",
  },
  {
    icon: FileText,
    title: "Documentation & Financials",
    description:
      "Complete preparation of all required documentation, financial statements, and compliance materials.",
  },
  {
    icon: Users,
    title: "Government Submission",
    description:
      "Direct submission to regulatory authorities with ongoing liaison and progress tracking.",
  },
  {
    icon: BarChart3,
    title: "Licensing & Launch",
    description:
      "Final approval coordination and post-licensing support for successful market entry.",
  },
];

export default function VASPLicensingPage() {
  const servicesRef = useRef(null);
  const jurisdictionsRef = useRef(null);
  const coveredServicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isJurisdictionsInView = useInView(jurisdictionsRef, {
    once: true,
    margin: "-100px",
  });
  const isCoveredServicesInView = useInView(coveredServicesRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />

      <ServiceHero
        title="VASP Licensing"
        subtitle="Crypto Regulation, Simplified"
        description="Get licensed to operate crypto services globally, from exchanges to DeFi platforms."
        gradient="from-purple-600 to-pink-600"
        stats={[
          { label: "Success Rate", value: "95%" },
          { label: "Average Timeline", value: "4 months" },
          { label: "Jurisdictions", value: "15+" },
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
              End-to-end VASP licensing services that get your crypto business
              legally established and ready to operate.
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

      {/* Jurisdiction Comparison */}
      <section ref={jurisdictionsRef} className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isJurisdictionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Popular Jurisdictions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic jurisdictions that offer the best combination of
              regulatory clarity, market access, and business benefits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {jurisdictions.map((jurisdiction, index) => (
              <motion.div
                key={jurisdiction.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isJurisdictionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${jurisdiction.gradient} flex items-center justify-center`}
                    >
                      <span className="text-2xl">{jurisdiction.flag}</span>
                    </div>
                    <Globe size={20} className="text-gray-400" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">
                    {jurisdiction.name}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock size={16} className="mr-2" />
                      Timeline: {jurisdiction.timeline}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <DollarSign size={16} className="mr-2" />
                      Cost: {jurisdiction.cost}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <TrendingUp size={16} className="mr-2" />
                      Capital: {jurisdiction.capital}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">
                      Pros:
                    </h4>
                    <div className="space-y-1">
                      {jurisdiction.pros.map((pro, proIndex) => (
                        <div
                          key={proIndex}
                          className="flex items-center text-xs text-gray-300"
                        >
                          <CheckCircle
                            size={12}
                            className="mr-2 text-green-400"
                          />
                          {pro}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-red-400 mb-2">
                      Cons:
                    </h4>
                    <div className="space-y-1">
                      {jurisdiction.cons.map((con, conIndex) => (
                        <div
                          key={conIndex}
                          className="flex items-center text-xs text-gray-300"
                        >
                          <div className="w-1 h-1 rounded-full bg-red-400 mr-2" />
                          {con}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs text-gray-500 italic">
                    Best for: {jurisdiction.bestFor}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Covered Services */}
      <section
        ref={coveredServicesRef}
        className="py-32 px-6 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isCoveredServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Covered Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive coverage of all major crypto and virtual asset
              services across regulated jurisdictions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coveredServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isCoveredServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4`}
                  >
                    <Shield size={24} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {service.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      Key Requirements:
                    </h4>
                    <div className="space-y-1">
                      {service.requirements.map(
                        (requirement, requirementIndex) => (
                          <div
                            key={requirementIndex}
                            className="flex items-center text-xs text-gray-400"
                          >
                            <div
                              className={`w-1 h-1 rounded-full bg-gradient-to-r ${service.gradient} mr-2`}
                            />
                            {requirement}
                          </div>
                        )
                      )}
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
        subtitle="How We Secure Your VASP License"
        steps={processSteps}
        gradient="from-purple-400 to-pink-400"
      />

      <ServiceCTA
        title="Ready to Get Your VASP License?"
        subtitle="Let's secure the regulatory approval you need to operate your crypto business legally."
        gradient="from-purple-600 to-pink-600"
        primaryCTA="Get Started"
        secondaryCTA="Learn More"
      />
    </div>
  );
}
