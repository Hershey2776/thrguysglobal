"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  FileText,
  Users,
  BarChart3,
  Clock,
  DollarSign,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import ServiceHero from "../../components/service-hero";
import ServiceProcess from "../../components/service-process";
import ServiceCTA from "../../components/service-cta";
import Navigation from "../../../components/navigation";

const services = [
  {
    icon: Shield,
    title: "License Feasibility & Matching",
    description:
      "Comprehensive analysis to determine the right licenses for your business model and target markets.",
    features: [
      "Regulatory Analysis",
      "License Requirements",
      "Market Assessment",
      "Cost-Benefit Analysis",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    title: "Dossier & Application Preparation",
    description:
      "Complete preparation of all required documentation and applications for regulatory approval.",
    features: [
      "Document Compilation",
      "Application Forms",
      "Supporting Materials",
      "Quality Assurance",
    ],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: Users,
    title: "Regulatory Communication",
    description:
      "Direct liaison with regulatory bodies to ensure smooth application processing and approval.",
    features: [
      "Regulator Liaison",
      "Query Management",
      "Progress Tracking",
      "Stakeholder Updates",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Compliance Monitoring",
    description:
      "Ongoing monitoring and support to ensure continued compliance with regulatory requirements.",
    features: [
      "Compliance Audits",
      "Reporting Requirements",
      "Policy Updates",
      "Risk Management",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
];

const licenses = [
  {
    name: "VASP",
    fullName: "Virtual Asset Service Provider",
    description: "License for crypto exchanges, wallets, and payment services",
    jurisdictions: ["Dubai (VARA)", "Singapore (MAS)", "Estonia"],
    timeline: "3-6 months",
    cost: "$50K-$200K",
    requirements: ["AML/KYC", "Capital Requirements", "Technical Standards"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "VARA",
    fullName: "Virtual Asset Regulatory Authority",
    description: "Dubai's comprehensive crypto and virtual asset regulation",
    jurisdictions: ["Dubai"],
    timeline: "4-8 months",
    cost: "$100K-$500K",
    requirements: [
      "Local Presence",
      "Capital Requirements",
      "Compliance Framework",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "EMI",
    fullName: "Electronic Money Institution",
    description: "License for electronic money and payment services",
    jurisdictions: ["UK (FCA)", "EU", "Singapore"],
    timeline: "6-12 months",
    cost: "$200K-$1M",
    requirements: ["Capital Requirements", "AML/KYC", "Operational Standards"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "MSB",
    fullName: "Money Services Business",
    description: "US license for money transmission and payment services",
    jurisdictions: ["USA (State Level)"],
    timeline: "3-9 months",
    cost: "$50K-$300K",
    requirements: [
      "State Registration",
      "Bond Requirements",
      "Compliance Program",
    ],
    gradient: "from-red-500 to-orange-500",
  },
  {
    name: "FCA",
    fullName: "Financial Conduct Authority",
    description: "UK financial services regulation and authorization",
    jurisdictions: ["UK"],
    timeline: "6-18 months",
    cost: "$500K-$2M",
    requirements: [
      "Fit & Proper Test",
      "Capital Requirements",
      "Compliance Framework",
    ],
    gradient: "from-blue-500 to-red-500",
  },
];

const processSteps = [
  {
    icon: Shield,
    title: "Regulatory Needs Assessment",
    description:
      "Comprehensive analysis of your business model to identify required licenses and regulatory obligations.",
  },
  {
    icon: FileText,
    title: "Application Roadmap",
    description:
      "Strategic planning and preparation of all required documentation and application materials.",
  },
  {
    icon: Users,
    title: "Submission & Liaison",
    description:
      "Direct submission to regulatory bodies and ongoing communication throughout the approval process.",
  },
  {
    icon: BarChart3,
    title: "Monitoring & Updates",
    description:
      "Continuous monitoring of compliance requirements and regulatory updates to maintain authorization.",
  },
];

export default function LicensingCompliancePage() {
  const servicesRef = useRef(null);
  const licensesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, {
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
        title="Global Licensing & Regulatory Compliance"
        subtitle="Stay Compliant, Operate with Confidence"
        description="End-to-end support for fintech, crypto, and regulated entities looking to stay compliant across borders."
        gradient="from-blue-600 to-green-600"
        stats={[
          { label: "Licenses Secured", value: "150+" },
          { label: "Success Rate", value: "95%" },
          { label: "Jurisdictions", value: "25+" },
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
              Comprehensive licensing and compliance services that ensure your
              business operates legally and confidently.
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

      {/* License Cards */}
      <section ref={licensesRef} className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isLicensesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Licenses Covered
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive coverage of major regulatory licenses across key
              jurisdictions worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {licenses.map((license, index) => (
              <motion.div
                key={license.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isLicensesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${license.gradient} flex items-center justify-center`}
                    >
                      <Shield size={24} className="text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">License</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-1 text-white">
                    {license.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">
                    {license.fullName}
                  </p>
                  <p className="text-sm text-gray-300 mb-4">
                    {license.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock size={16} className="mr-2" />
                      Timeline: {license.timeline}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <DollarSign size={16} className="mr-2" />
                      Cost: {license.cost}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      Jurisdictions:
                    </h4>
                    <div className="space-y-1">
                      {license.jurisdictions.map(
                        (jurisdiction, jurisdictionIndex) => (
                          <div
                            key={jurisdictionIndex}
                            className="flex items-center text-xs text-gray-400"
                          >
                            <CheckCircle
                              size={12}
                              className="mr-2 text-green-400"
                            />
                            {jurisdiction}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      Key Requirements:
                    </h4>
                    <div className="space-y-1">
                      {license.requirements.map(
                        (requirement, requirementIndex) => (
                          <div
                            key={requirementIndex}
                            className="flex items-center text-xs text-gray-400"
                          >
                            <AlertTriangle
                              size={12}
                              className="mr-2 text-yellow-400"
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
        subtitle="How We Secure Your Licenses"
        steps={processSteps}
        gradient="from-blue-400 to-green-400"
      />

      <ServiceCTA
        title="Ready to Get Licensed?"
        subtitle="Let's secure the regulatory approvals you need to operate with confidence."
        gradient="from-blue-600 to-green-600"
        primaryCTA="Get Started"
        secondaryCTA="Learn More"
      />
    </div>
  );
}
