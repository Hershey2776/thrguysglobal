"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Building,
  Globe,
  FileText,
  Users,
  MapPin,
  CheckCircle,
  XCircle,
  TrendingUp,
  Shield,
} from "lucide-react";
import ServiceHero from "../../components/service-hero";
import ServiceProcess from "../../components/service-process";
import ServiceCTA from "../../components/service-cta";
import Navigation from "../../../components/navigation";

const services = [
  {
    icon: Globe,
    title: "Jurisdiction Advisory",
    description:
      "Expert guidance on choosing the optimal jurisdiction for your business structure and goals.",
    features: [
      "Tax Analysis",
      "Regulatory Review",
      "Business Requirements",
      "Cost Comparison",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Building,
    title: "Company Structuring",
    description:
      "Design optimal corporate structures that maximize benefits and minimize liabilities.",
    features: [
      "Entity Selection",
      "Shareholder Structure",
      "Directorship Setup",
      "Asset Protection",
    ],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: FileText,
    title: "Documentation & Filing",
    description:
      "Complete handling of all legal documents and government filings for company formation.",
    features: [
      "Articles of Incorporation",
      "Bylaws & Agreements",
      "Government Filings",
      "Compliance Documents",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "Post-Setup Support",
    description:
      "Ongoing support for compliance, banking, and operational requirements after formation.",
    features: [
      "Compliance Monitoring",
      "Banking Setup",
      "Annual Filings",
      "Ongoing Advisory",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
];

const jurisdictions = [
  {
    name: "USA (Delaware)",
    flag: "🇺🇸",
    pros: [
      "Strong legal framework",
      "Tax advantages",
      "Investor friendly",
      "Privacy protection",
    ],
    cons: ["Annual franchise tax", "Complex compliance", "Higher costs"],
    bestFor: "Tech startups, VC-backed companies",
    gradient: "from-blue-500 to-red-500",
  },
  {
    name: "Singapore",
    flag: "🇸🇬",
    pros: [
      "Low corporate tax",
      "Strong banking",
      "Regional hub",
      "Political stability",
    ],
    cons: [
      "Residency requirements",
      "Higher setup costs",
      "Complex regulations",
    ],
    bestFor: "Asian expansion, fintech companies",
    gradient: "from-red-500 to-white",
  },
  {
    name: "Dubai",
    flag: "🇦🇪",
    pros: [
      "Zero corporate tax",
      "Free zones",
      "Strategic location",
      "Fast setup",
    ],
    cons: [
      "Local partner requirements",
      "Limited banking options",
      "Cultural considerations",
    ],
    bestFor: "Middle East expansion, trading companies",
    gradient: "from-green-500 to-red-500",
  },
  {
    name: "Estonia",
    flag: "🇪🇪",
    pros: ["Digital-first", "Low costs", "EU access", "E-residency"],
    cons: ["Limited banking", "Small market", "Language barriers"],
    bestFor: "Digital businesses, EU expansion",
    gradient: "from-blue-500 to-black",
  },
  {
    name: "UK",
    flag: "🇬🇧",
    pros: [
      "Strong reputation",
      "Access to EU",
      "Financial services",
      "Legal certainty",
    ],
    cons: ["Higher taxes", "Brexit uncertainty", "Complex regulations"],
    bestFor: "European expansion, financial services",
    gradient: "from-blue-500 to-red-500",
  },
  {
    name: "Cayman Islands",
    flag: "🇰🇾",
    pros: ["Zero taxes", "Privacy", "Asset protection", "Flexible structure"],
    cons: ["Reputation concerns", "Limited banking", "Higher scrutiny"],
    bestFor: "Asset protection, investment funds",
    gradient: "from-blue-500 to-yellow-500",
  },
];

const processSteps = [
  {
    icon: Building,
    title: "Business Review",
    description:
      "Comprehensive analysis of your business model, goals, and requirements to determine optimal jurisdiction.",
  },
  {
    icon: Globe,
    title: "Jurisdiction Strategy",
    description:
      "Strategic selection of jurisdiction and corporate structure based on tax, regulatory, and business needs.",
  },
  {
    icon: FileText,
    title: "Registration & Documentation",
    description:
      "Complete handling of all legal documents, government filings, and compliance requirements.",
  },
  {
    icon: Users,
    title: "Post-Incorporation Setup",
    description:
      "Ongoing support for banking, compliance, and operational requirements after company formation.",
  },
];

export default function CompanyFormationPage() {
  const servicesRef = useRef(null);
  const jurisdictionsRef = useRef(null);
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isJurisdictionsInView = useInView(jurisdictionsRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />

      <ServiceHero
        title="Company Formation"
        subtitle="Launch Smart. Scale Global."
        description="Get your business incorporated in strategic jurisdictions with compliant, scalable structures."
        gradient="from-blue-600 to-green-600"
        stats={[
          { label: "Jurisdictions", value: "20+" },
          { label: "Success Rate", value: "99%" },
          { label: "Setup Time", value: "2-4 weeks" },
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
              End-to-end company formation services that get your business
              legally established and ready to scale.
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

      {/* Jurisdictions Map */}
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
                Top Jurisdictions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic jurisdictions that offer the best combination of
              benefits, compliance, and growth opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <MapPin size={20} className="text-gray-400" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-white">
                    {jurisdiction.name}
                  </h3>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center">
                      <CheckCircle size={14} className="mr-1" />
                      Pros
                    </h4>
                    <div className="space-y-1">
                      {jurisdiction.pros.map((pro, proIndex) => (
                        <div
                          key={proIndex}
                          className="flex items-center text-xs text-gray-300"
                        >
                          <div className="w-1 h-1 rounded-full bg-green-400 mr-2" />
                          {pro}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-red-400 mb-2 flex items-center">
                      <XCircle size={14} className="mr-1" />
                      Cons
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

      <ServiceProcess
        title="Process"
        subtitle="How We Form Your Company"
        steps={processSteps}
        gradient="from-blue-400 to-green-400"
      />

      <ServiceCTA
        title="Ready to Launch Your Company?"
        subtitle="Let's get your business legally established in the optimal jurisdiction for growth."
        gradient="from-blue-600 to-green-600"
        primaryCTA="Get Started"
        secondaryCTA="Learn More"
      />
    </div>
  );
}
