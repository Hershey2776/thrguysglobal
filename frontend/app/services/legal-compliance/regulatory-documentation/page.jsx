"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FileText,
  Shield,
  Users,
  BarChart3,
  Download,
  CheckCircle,
  AlertTriangle,
  Clock,
} from "lucide-react";
import ServiceHero from "../../components/service-hero";
import ServiceProcess from "../../components/service-process";
import ServiceCTA from "../../components/service-cta";
import Navigation from "../../../components/navigation";

const services = [
  {
    icon: FileText,
    title: "AML/KYC Policies",
    description:
      "Comprehensive anti-money laundering and know-your-customer policies that meet regulatory standards.",
    features: [
      "Risk Assessment",
      "Customer Due Diligence",
      "Transaction Monitoring",
      "Reporting Procedures",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Risk Frameworks",
    description:
      "Robust risk management frameworks that identify, assess, and mitigate operational and compliance risks.",
    features: [
      "Risk Identification",
      "Assessment Methodology",
      "Mitigation Strategies",
      "Monitoring Systems",
    ],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: Users,
    title: "Compliance Manuals",
    description:
      "Detailed compliance manuals that guide your team through regulatory requirements and procedures.",
    features: [
      "Policy Documentation",
      "Procedural Guidelines",
      "Training Materials",
      "Compliance Checklists",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Regulatory Filings",
    description:
      "Complete preparation and submission of all required regulatory reports and filings.",
    features: [
      "Report Preparation",
      "Data Compilation",
      "Submission Management",
      "Follow-up Support",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
];

const documents = [
  {
    name: "AML/KYC Policy",
    description: "Anti-money laundering and customer identification procedures",
    complexity: "High",
    timeline: "2-4 weeks",
    includes: [
      "Risk assessment",
      "CDD procedures",
      "Transaction monitoring",
      "Reporting",
    ],
    sample: "Download Sample",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Risk Management Framework",
    description: "Comprehensive risk identification and mitigation strategies",
    complexity: "Medium",
    timeline: "3-5 weeks",
    includes: [
      "Risk categories",
      "Assessment methodology",
      "Mitigation plans",
      "Monitoring",
    ],
    sample: "Download Sample",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    name: "Compliance Manual",
    description: "Complete compliance procedures and guidelines",
    complexity: "High",
    timeline: "4-6 weeks",
    includes: [
      "Policy framework",
      "Procedural guidelines",
      "Training materials",
      "Checklists",
    ],
    sample: "Download Sample",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Governance Framework",
    description: "Corporate governance and board oversight procedures",
    complexity: "Medium",
    timeline: "2-3 weeks",
    includes: [
      "Board structure",
      "Committee charters",
      "Decision processes",
      "Oversight",
    ],
    sample: "Download Sample",
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Data Protection Policy",
    description: "GDPR and data privacy compliance framework",
    complexity: "Medium",
    timeline: "2-4 weeks",
    includes: [
      "Data mapping",
      "Privacy notices",
      "Consent management",
      "Breach procedures",
    ],
    sample: "Download Sample",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "Business Continuity Plan",
    description: "Operational resilience and disaster recovery procedures",
    complexity: "Medium",
    timeline: "3-4 weeks",
    includes: [
      "Risk scenarios",
      "Response procedures",
      "Recovery plans",
      "Testing",
    ],
    sample: "Download Sample",
    gradient: "from-yellow-500 to-orange-500",
  },
];

const processSteps = [
  {
    icon: FileText,
    title: "Requirements Mapping",
    description:
      "Comprehensive analysis of regulatory requirements to identify all necessary documentation.",
  },
  {
    icon: Shield,
    title: "Document Creation",
    description:
      "Professional drafting of all required documents with industry best practices and compliance standards.",
  },
  {
    icon: Users,
    title: "Implementation",
    description:
      "Guidance on implementing and integrating compliance documents into your business operations.",
  },
  {
    icon: BarChart3,
    title: "Compliance Review",
    description:
      "Regular review and updates to ensure documents remain current with regulatory changes.",
  },
];

export default function RegulatoryDocumentationPage() {
  const servicesRef = useRef(null);
  const documentsRef = useRef(null);
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isDocumentsInView = useInView(documentsRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />

      <ServiceHero
        title="Regulatory Documentation"
        subtitle="Compliance Documents That Safeguard You"
        description="We help you draft and maintain all key documents required by regulators across industries."
        gradient="from-blue-600 to-green-600"
        stats={[
          { label: "Documents Created", value: "500+" },
          { label: "Success Rate", value: "100%" },
          { label: "Industries", value: "20+" },
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
                Documents Covered
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive documentation services that ensure your business
              meets all regulatory requirements.
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

      {/* Document Samples */}
      <section ref={documentsRef} className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isDocumentsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Sample Document Outlines
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Download sample document outlines to understand our approach and
              quality standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((document, index) => (
              <motion.div
                key={document.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isDocumentsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-r ${document.gradient} flex items-center justify-center`}
                    >
                      <FileText size={20} className="text-white" />
                    </div>
                    <div className="text-xs text-gray-400">
                      {document.complexity}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-white">
                    {document.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {document.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs text-gray-400">
                      <Clock size={14} className="mr-2" />
                      Timeline: {document.timeline}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      Includes:
                    </h4>
                    <div className="space-y-1">
                      {document.includes.map((item, itemIndex) => (
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
                    className={`w-full bg-gradient-to-r ${document.gradient} px-4 py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300`}
                  >
                    <Download size={16} />
                    {document.sample}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceProcess
        title="Process"
        subtitle="How We Create Your Compliance Documents"
        steps={processSteps}
        gradient="from-blue-400 to-green-400"
      />

      <ServiceCTA
        title="Ready to Get Compliant?"
        subtitle="Let's create the regulatory documentation you need to operate with confidence."
        gradient="from-blue-600 to-green-600"
        primaryCTA="Get Started"
        secondaryCTA="Learn More"
      />
    </div>
  );
}
