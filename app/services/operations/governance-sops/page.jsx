"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  FileText,
  Users,
  BarChart3,
  CheckCircle,
  Clock,
  Target,
  BookOpen,
} from "lucide-react";
import ServiceHero from "../../components/service-hero";
import ServiceProcess from "../../components/service-process";
import ServiceCTA from "../../components/service-cta";
import Navigation from "../../../components/navigation";

const services = [
  {
    icon: Shield,
    title: "Governance Framework",
    description:
      "Comprehensive governance structures that ensure accountability, transparency, and effective decision-making.",
    features: [
      "Board Structure",
      "Decision Processes",
      "Accountability Systems",
      "Compliance Oversight",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    title: "SOP Development",
    description:
      "Detailed standard operating procedures that ensure consistency, efficiency, and quality across all operations.",
    features: [
      "Process Documentation",
      "Workflow Design",
      "Quality Standards",
      "Training Materials",
    ],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: Users,
    title: "Policy Management",
    description:
      "Comprehensive policy frameworks that guide behavior and ensure regulatory compliance across the organization.",
    features: [
      "Policy Development",
      "Implementation Strategy",
      "Training Programs",
      "Monitoring Systems",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Compliance Monitoring",
    description:
      "Ongoing monitoring and auditing systems to ensure adherence to governance frameworks and SOPs.",
    features: [
      "Audit Programs",
      "Performance Tracking",
      "Risk Assessment",
      "Continuous Improvement",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
];

const sopTemplates = [
  {
    name: "Employee Onboarding",
    description:
      "Standardized process for welcoming and integrating new team members",
    complexity: "Medium",
    timeline: "1-2 weeks",
    includes: [
      "Welcome checklist",
      "Documentation requirements",
      "Training schedule",
      "Integration activities",
    ],
    template: "Download Template",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Customer Service",
    description:
      "Consistent customer interaction and issue resolution procedures",
    complexity: "High",
    timeline: "2-3 weeks",
    includes: [
      "Communication protocols",
      "Issue escalation",
      "Resolution timelines",
      "Quality standards",
    ],
    template: "Download Template",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    name: "Financial Controls",
    description:
      "Financial management and control procedures for business operations",
    complexity: "High",
    timeline: "3-4 weeks",
    includes: [
      "Approval processes",
      "Budget management",
      "Reporting requirements",
      "Audit procedures",
    ],
    template: "Download Template",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Data Security",
    description: "Information security and data protection protocols",
    complexity: "High",
    timeline: "2-4 weeks",
    includes: [
      "Access controls",
      "Data handling",
      "Breach procedures",
      "Compliance requirements",
    ],
    template: "Download Template",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "Project Management",
    description:
      "Standardized project planning, execution, and delivery processes",
    complexity: "Medium",
    timeline: "2-3 weeks",
    includes: [
      "Project initiation",
      "Planning methodology",
      "Execution tracking",
      "Delivery standards",
    ],
    template: "Download Template",
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Quality Assurance",
    description:
      "Quality control and assurance procedures for products and services",
    complexity: "Medium",
    timeline: "2-3 weeks",
    includes: [
      "Quality standards",
      "Inspection procedures",
      "Testing protocols",
      "Improvement processes",
    ],
    template: "Download Template",
    gradient: "from-yellow-500 to-orange-500",
  },
];

const governanceComponents = [
  {
    name: "Board Governance",
    description: "Effective board structure and decision-making processes",
    elements: [
      "Board composition and structure",
      "Meeting protocols and frequency",
      "Decision-making frameworks",
      "Committee charters and responsibilities",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Executive Management",
    description: "Executive leadership and management oversight",
    elements: [
      "Executive roles and responsibilities",
      "Performance management",
      "Succession planning",
      "Strategic oversight",
    ],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    name: "Risk Management",
    description: "Comprehensive risk identification and mitigation",
    elements: [
      "Risk assessment methodology",
      "Risk mitigation strategies",
      "Monitoring and reporting",
      "Crisis management procedures",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Compliance Oversight",
    description: "Regulatory compliance and audit management",
    elements: [
      "Compliance monitoring",
      "Audit coordination",
      "Regulatory reporting",
      "Policy enforcement",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
];

const processSteps = [
  {
    icon: Target,
    title: "Assessment & Planning",
    description:
      "Comprehensive assessment of current governance and operational processes to identify gaps and opportunities.",
  },
  {
    icon: FileText,
    title: "Framework Development",
    description:
      "Development of governance frameworks and SOPs tailored to your business needs and regulatory requirements.",
  },
  {
    icon: Users,
    title: "Implementation",
    description:
      "Systematic implementation of governance frameworks and SOPs with training and change management support.",
  },
  {
    icon: BarChart3,
    title: "Monitoring & Optimization",
    description:
      "Ongoing monitoring and optimization of governance frameworks and SOPs to ensure effectiveness and compliance.",
  },
];

export default function GovernanceSOPsPage() {
  const servicesRef = useRef(null);
  const templatesRef = useRef(null);
  const governanceRef = useRef(null);
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isTemplatesInView = useInView(templatesRef, {
    once: true,
    margin: "-100px",
  });
  const isGovernanceInView = useInView(governanceRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />

      <ServiceHero
        title="Governance & SOPs"
        subtitle="Operational Excellence Through Structure"
        description="Build robust governance frameworks and standard operating procedures that ensure consistency, compliance, and operational excellence."
        gradient="from-blue-600 to-green-600"
        stats={[
          { label: "SOPs Created", value: "300+" },
          { label: "Compliance Rate", value: "100%" },
          { label: "Companies Served", value: "150+" },
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
              Comprehensive governance and SOP services that establish
              operational excellence and regulatory compliance.
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

      {/* SOP Templates */}
      <section ref={templatesRef} className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTemplatesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                SOP Template Examples
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Download sample SOP templates to understand our approach and
              quality standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sopTemplates.map((template, index) => (
              <motion.div
                key={template.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isTemplatesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-r ${template.gradient} flex items-center justify-center`}
                    >
                      <FileText size={20} className="text-white" />
                    </div>
                    <div className="text-xs text-gray-400">
                      {template.complexity}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-white">
                    {template.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {template.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs text-gray-400">
                      <Clock size={14} className="mr-2" />
                      Timeline: {template.timeline}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      Includes:
                    </h4>
                    <div className="space-y-1">
                      {template.includes.map((item, itemIndex) => (
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
                    className={`w-full bg-gradient-to-r ${template.gradient} px-4 py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300`}
                  >
                    <BookOpen size={16} />
                    {template.template}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Components */}
      <section
        ref={governanceRef}
        className="py-32 px-6 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isGovernanceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Governance Components
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive governance frameworks that ensure accountability,
              transparency, and effective decision-making.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {governanceComponents.map((component, index) => (
              <motion.div
                key={component.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isGovernanceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${component.gradient} flex items-center justify-center mb-4`}
                  >
                    <Shield size={24} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">
                    {component.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {component.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      Key Elements:
                    </h4>
                    <div className="space-y-1">
                      {component.elements.map((element, elementIndex) => (
                        <div
                          key={elementIndex}
                          className="flex items-center text-xs text-gray-400"
                        >
                          <CheckCircle
                            size={12}
                            className="mr-2 text-green-400"
                          />
                          {element}
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

      <ServiceProcess
        title="Process"
        subtitle="How We Build Your Governance & SOPs"
        steps={processSteps}
        gradient="from-blue-400 to-green-400"
      />

      <ServiceCTA
        title="Ready to Build Your Governance Framework?"
        subtitle="Let's create robust governance structures and SOPs that drive operational excellence."
        gradient="from-blue-600 to-green-600"
        primaryCTA="Get Started"
        secondaryCTA="Learn More"
      />
    </div>
  );
}
