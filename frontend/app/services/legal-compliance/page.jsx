"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  FileText,
  Globe,
  Building,
  CheckCircle,
  AlertTriangle,
  Gavel,
} from "lucide-react";
import ServiceHero from "../components/service-hero";
import ServiceProcess from "../components/service-process";
import ServiceCTA from "../components/service-cta";
import Navigation from "../../components/navigation";

const services = [
  {
    icon: Building,
    title: "Company Formation",
    description:
      "Strategic entity structuring across global jurisdictions. We set up your company where it makes the most sense for your business.",
    features: [
      "USA (Delaware, Wyoming)",
      "Singapore",
      "Dubai (ADGM, DIFC)",
      "Estonia",
      "UK",
      "Cayman Islands",
    ],
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Shield,
    title: "Licensing & Compliance",
    description:
      "Navigate complex regulatory landscapes with confidence. We secure the licenses that unlock your market potential.",
    features: [
      "VASP (Virtual Asset Service Provider)",
      "VARA (Dubai)",
      "EMI (Electronic Money Institution)",
      "MSB (Money Service Business)",
      "FCA (Financial Conduct Authority)",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: FileText,
    title: "Regulatory Documentation",
    description:
      "Bulletproof documentation that satisfies regulators and protects your business. Every T crossed, every I dotted.",
    features: [
      "AML/KYC Policies",
      "Risk Assessments",
      "Compliance Manuals",
      "Regulatory Filings",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Gavel,
    title: "Legal Advisory",
    description:
      "Strategic legal counsel that keeps you ahead of regulatory changes and competitive threats.",
    features: [
      "Regulatory Strategy",
      "Compliance Monitoring",
      "Legal Risk Assessment",
      "Ongoing Advisory",
    ],
    gradient: "from-orange-500 to-red-500",
  },
];

const jurisdictions = [
  {
    country: "USA",
    entities: ["Delaware C-Corp", "Wyoming LLC", "Nevada Corp"],
    timeframe: "1-2 weeks",
    popular: true,
  },
  {
    country: "Singapore",
    entities: ["Private Limited", "Branch Office"],
    timeframe: "2-3 weeks",
    popular: true,
  },
  {
    country: "Dubai",
    entities: ["ADGM", "DIFC", "Mainland"],
    timeframe: "3-4 weeks",
    popular: true,
  },
  {
    country: "Estonia",
    entities: ["OÜ (Private Limited)", "European Company"],
    timeframe: "1-2 weeks",
    popular: false,
  },
  {
    country: "UK",
    entities: ["Private Limited", "LLP"],
    timeframe: "1-2 weeks",
    popular: false,
  },
  {
    country: "Cayman",
    entities: ["Exempted Company", "LLC"],
    timeframe: "2-3 weeks",
    popular: false,
  },
];

const licenses = [
  {
    name: "VASP License",
    jurisdiction: "Multiple",
    description:
      "Virtual Asset Service Provider licensing for crypto businesses",
    complexity: "High",
  },
  {
    name: "VARA License",
    jurisdiction: "Dubai",
    description: "Virtual Asset Regulatory Authority approval",
    complexity: "High",
  },
  {
    name: "EMI License",
    jurisdiction: "EU",
    description: "Electronic Money Institution for payment services",
    complexity: "Very High",
  },
  {
    name: "MSB License",
    jurisdiction: "USA",
    description: "Money Service Business registration",
    complexity: "Medium",
  },
  {
    name: "FCA Authorization",
    jurisdiction: "UK",
    description: "Financial Conduct Authority permissions",
    complexity: "Very High",
  },
];

const processSteps = [
  {
    icon: AlertTriangle,
    title: "Legal Audit",
    description:
      "Comprehensive review of your business model, regulatory requirements, and compliance gaps.",
  },
  {
    icon: Globe,
    title: "Jurisdiction Strategy",
    description:
      "Optimal jurisdiction selection based on your business needs, tax efficiency, and regulatory environment.",
  },
  {
    icon: FileText,
    title: "Documentation & Filing",
    description:
      "Complete preparation and submission of all required documentation and regulatory filings.",
  },
  {
    icon: CheckCircle,
    title: "Compliance Setup",
    description:
      "Ongoing compliance monitoring, policy updates, and regulatory relationship management.",
  },
];

export default function LegalCompliancePage() {
  const servicesRef = useRef(null);
  const jurisdictionsRef = useRef(null);
  const licensesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isJurisdictionsInView = useInView(jurisdictionsRef, {
    once: true,
    margin: "-100px",
  });
  const isLicensesInView = useInView(licensesRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />

      <ServiceHero
        title="Legal & Compliance"
        subtitle="From Legal Mess to Launch-Ready"
        description="Navigate the regulatory maze with confidence. We turn complex compliance requirements into competitive advantages, securing the licenses and structures that unlock your market potential."
        gradient="from-blue-600 to-green-600"
        stats={[
          { label: "Licenses Secured", value: "200+" },
          { label: "Jurisdictions", value: "25+" },
          { label: "Success Rate", value: "98%" },
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
                Legal Arsenal
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every legal weapon you need to dominate your market, wielded by
              experts who've navigated every regulatory battlefield.
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

      {/* Jurisdictions */}
      <section ref={jurisdictionsRef} className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isJurisdictionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Global Jurisdictions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic entity formation across the world's most
              business-friendly jurisdictions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jurisdictions.map((jurisdiction, index) => (
              <motion.div
                key={jurisdiction.country}
                initial={{ opacity: 0, y: 50 }}
                animate={isJurisdictionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 ${
                  jurisdiction.popular
                    ? "border-blue-500/50 bg-blue-500/5"
                    : "border-gray-700/50"
                }`}
              >
                {jurisdiction.popular && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-500 to-green-500 px-3 py-1 rounded-full text-xs font-bold">
                    POPULAR
                  </div>
                )}

                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {jurisdiction.country}
                  </h3>
                  <div className="text-sm text-gray-400">
                    {jurisdiction.timeframe}
                  </div>
                </div>

                <div className="space-y-2">
                  {jurisdiction.entities.map((entity, entityIndex) => (
                    <div
                      key={entityIndex}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-green-500 mr-3" />
                      {entity}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Licenses */}
      {/* <section ref={licensesRef} className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isLicensesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Licensing Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The licenses that unlock markets, secured by experts who've done it hundreds of times.
            </p>
          </motion.div>

          <div className="space-y-6">
            {licenses.map((license, index) => (
              <motion.div
                key={license.name}
                initial={{ opacity: 0, x: -50 }}
                animate={isLicensesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-bold text-white">{license.name}</h3>
                      <span className="text-sm text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
                        {license.jurisdiction}
                      </span>
                    </div>
                    <p className="text-gray-300">{license.description}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        license.complexity === "Very High"
                          ? "bg-red-500/20 text-red-400"
                          : license.complexity === "High"
                            ? "bg-orange-500/20 text-orange-400"
                            : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {license.complexity}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-600 to-green-600 px-4 py-2 rounded-full text-sm font-semibold"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <ServiceProcess
        title="Our Legal Process"
        subtitle="From Compliance Chaos to Regulatory Clarity"
        steps={processSteps}
        gradient="from-blue-500 to-green-500"
      />

      <ServiceCTA
        title="Ready to Navigate the Legal Maze?"
        subtitle="Let's turn regulatory requirements into competitive advantages."
        primaryCTA="Start Legal Setup"
        secondaryCTA="Schedule Legal Consultation"
      />
    </div>
  );
}
