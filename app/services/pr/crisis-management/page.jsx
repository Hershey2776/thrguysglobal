"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  AlertTriangle,
  MessageSquare,
  BarChart3,
  CheckCircle,
  Clock,
  Users,
  FileText,
} from "lucide-react";
import Navigation from "../../../components/navigation";
import ServiceHero from "../../components/service-hero";
import ServiceProcess from "../../components/service-process";
import ServiceCTA from "../../components/service-cta";

const services = [
  {
    icon: Shield,
    title: "Crisis Prevention",
    description:
      "Proactive crisis prevention strategies that identify and mitigate potential risks before they escalate.",
    features: [
      "Risk Assessment",
      "Prevention Planning",
      "Monitoring Systems",
      "Training Programs",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: AlertTriangle,
    title: "Crisis Response",
    description:
      "Immediate crisis response and management to minimize damage and protect reputation.",
    features: [
      "Rapid Response",
      "Communication Strategy",
      "Stakeholder Management",
      "Damage Control",
    ],
    gradient: "from-red-500 to-orange-500",
  },
  {
    icon: MessageSquare,
    title: "Communication Strategy",
    description:
      "Strategic communication strategies that maintain trust and transparency during crises.",
    features: [
      "Message Development",
      "Channel Strategy",
      "Stakeholder Communication",
      "Media Relations",
    ],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: BarChart3,
    title: "Recovery & Reputation",
    description:
      "Post-crisis recovery and reputation management to rebuild trust and restore brand value.",
    features: [
      "Recovery Planning",
      "Reputation Repair",
      "Trust Building",
      "Long-term Strategy",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
];

const crisisResponseTemplates = [
  {
    type: "Data Breach Response",
    description: "Comprehensive response plan for data security incidents",
    timeline: "Immediate - 48 hours",
    priority: "Critical",
    includes: [
      "Incident assessment",
      "Legal notification",
      "Customer communication",
      "Regulatory compliance",
    ],
    template: "Download Template",
    gradient: "from-red-500 to-orange-500",
  },
  {
    type: "Product Recall Response",
    description: "Strategic response plan for product safety issues",
    timeline: "24-72 hours",
    priority: "High",
    includes: [
      "Safety assessment",
      "Customer notification",
      "Media management",
      "Regulatory coordination",
    ],
    template: "Download Template",
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    type: "Executive Scandal Response",
    description: "Crisis management plan for executive misconduct",
    timeline: "Immediate - 24 hours",
    priority: "Critical",
    includes: [
      "Fact gathering",
      "Board communication",
      "Media strategy",
      "Leadership transition",
    ],
    template: "Download Template",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    type: "Financial Crisis Response",
    description: "Response strategy for financial and liquidity crises",
    timeline: "Immediate - 72 hours",
    priority: "Critical",
    includes: [
      "Financial assessment",
      "Investor communication",
      "Regulatory reporting",
      "Stakeholder management",
    ],
    template: "Download Template",
    gradient: "from-blue-500 to-cyan-500",
  },
];

const crisisTypes = [
  {
    type: "Operational Crises",
    description: "Crises related to business operations and processes",
    examples: [
      "Supply chain disruptions",
      "Technology failures",
      "Workplace accidents",
      "Quality control issues",
    ],
    impact: [
      "Operational disruption",
      "Financial losses",
      "Customer dissatisfaction",
      "Regulatory scrutiny",
    ],
    response: "Immediate operational response with stakeholder communication",
    timeline: "24-72 hours",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    type: "Reputational Crises",
    description: "Crises that damage brand reputation and public trust",
    examples: [
      "Negative media coverage",
      "Social media backlash",
      "Customer complaints",
      "Competitor attacks",
    ],
    impact: [
      "Brand damage",
      "Customer trust loss",
      "Market share decline",
      "Employee morale",
    ],
    response: "Transparent communication with reputation repair strategy",
    timeline: "Immediate - 48 hours",
    gradient: "from-red-500 to-orange-500",
  },
  {
    type: "Legal Crises",
    description: "Crises involving legal and regulatory issues",
    examples: [
      "Lawsuits and litigation",
      "Regulatory violations",
      "Compliance failures",
      "Intellectual property disputes",
    ],
    impact: [
      "Legal costs",
      "Regulatory penalties",
      "Business restrictions",
      "Management distraction",
    ],
    response: "Legal counsel coordination with public communication strategy",
    timeline: "Immediate - 24 hours",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    type: "Financial Crises",
    description: "Crises affecting financial stability and performance",
    examples: [
      "Cash flow problems",
      "Credit rating downgrades",
      "Investment losses",
      "Market volatility",
    ],
    impact: [
      "Financial instability",
      "Investor confidence",
      "Credit access",
      "Business continuity",
    ],
    response: "Financial assessment with stakeholder communication",
    timeline: "Immediate - 72 hours",
    gradient: "from-green-500 to-emerald-500",
  },
];

const processSteps = [
  {
    icon: Shield,
    title: "Crisis Assessment",
    description:
      "Immediate assessment of crisis situation and potential impact on business and stakeholders.",
  },
  {
    icon: AlertTriangle,
    title: "Response Activation",
    description:
      "Rapid activation of crisis response team and implementation of response strategies.",
  },
  {
    icon: MessageSquare,
    title: "Communication Management",
    description:
      "Strategic communication management to maintain transparency and trust with stakeholders.",
  },
  {
    icon: BarChart3,
    title: "Recovery & Learning",
    description:
      "Post-crisis recovery planning and lessons learned to prevent future crises.",
  },
];

export default function CrisisManagementPage() {
  const servicesRef = useRef(null);
  const templatesRef = useRef(null);
  const typesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isTemplatesInView = useInView(templatesRef, {
    once: true,
    margin: "-100px",
  });
  const isTypesInView = useInView(typesRef, { once: true, margin: "-100px" });

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />

      <ServiceHero
        title="Crisis Management"
        subtitle="Protect Your Reputation, Preserve Your Business"
        description="Comprehensive crisis management that protects your reputation, maintains stakeholder trust, and ensures business continuity during challenging times."
        gradient="from-red-600 to-orange-600"
        stats={[
          { label: "Crises Managed", value: "50+" },
          { label: "Response Time", value: "<2 hours" },
          { label: "Success Rate", value: "95%" },
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
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive crisis management services that protect your
              business and reputation.
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

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-300">
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

      {/* Crisis Response Templates */}
      <section ref={templatesRef} className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTemplatesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Crisis Response Templates
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Download crisis response templates to ensure rapid and effective
              crisis management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {crisisResponseTemplates.map((template, index) => (
              <motion.div
                key={template.type}
                initial={{ opacity: 0, y: 50 }}
                animate={isTemplatesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${template.gradient} flex items-center justify-center`}
                    >
                      <AlertTriangle size={24} className="text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">Priority</div>
                      <div className="text-sm font-semibold text-gray-300">
                        {template.priority}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">
                    {template.type}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {template.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock size={16} className="mr-2" />
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
                    <FileText size={16} />
                    {template.template}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Crisis Types */}
      <section
        ref={typesRef}
        className="py-32 px-6 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTypesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Crisis Types & Response
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive analysis of different crisis types with tailored
              response strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {crisisTypes.map((crisis, index) => (
              <motion.div
                key={crisis.type}
                initial={{ opacity: 0, y: 50 }}
                animate={isTypesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${crisis.gradient} flex items-center justify-center`}
                    >
                      <Shield size={24} className="text-white" />
                    </div>
                    <div className="text-xs text-gray-400">
                      {crisis.timeline}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">
                    {crisis.type}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {crisis.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">
                        Examples:
                      </h4>
                      <div className="space-y-1">
                        {crisis.examples.map((example, exampleIndex) => (
                          <div
                            key={exampleIndex}
                            className="flex items-center text-xs text-gray-400"
                          >
                            <div className="w-1 h-1 rounded-full bg-blue-400 mr-2" />
                            {example}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-red-400 mb-2">
                        Impact:
                      </h4>
                      <div className="space-y-1">
                        {crisis.impact.map((impact, impactIndex) => (
                          <div
                            key={impactIndex}
                            className="flex items-center text-xs text-gray-400"
                          >
                            <div className="w-1 h-1 rounded-full bg-red-400 mr-2" />
                            {impact}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-green-400 mb-2">
                        Response:
                      </h4>
                      <p className="text-xs text-gray-400">{crisis.response}</p>
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
        subtitle="How We Manage Crises"
        steps={processSteps}
        gradient="from-red-400 to-orange-400"
      />

      <ServiceCTA
        title="Ready to Protect Your Business?"
        subtitle="Let's develop a crisis management strategy that protects your reputation and ensures business continuity."
        gradient="from-red-600 to-orange-600"
        primaryCTA="Get Started"
        secondaryCTA="Learn More"
      />
    </div>
  );
}
