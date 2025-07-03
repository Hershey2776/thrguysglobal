"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  FileText,
  Users,
  BarChart3,
  Gavel,
  AlertTriangle,
  CheckCircle,
  Target,
} from "lucide-react";
import ServiceHero from "../../components/service-hero";
import ServiceProcess from "../../components/service-process";
import ServiceCTA from "../../components/service-cta";
import Navigation from "../../../components/navigation";

const services = [
  {
    icon: Shield,
    title: "Regulatory Advisory",
    description:
      "Expert guidance on navigating complex regulatory landscapes and ensuring compliance across jurisdictions.",
    features: [
      "Regulatory Analysis",
      "Compliance Strategy",
      "Risk Assessment",
      "Implementation Support",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    title: "Compliance Planning",
    description:
      "Strategic compliance planning that aligns with your business goals while meeting regulatory requirements.",
    features: [
      "Compliance Roadmap",
      "Policy Development",
      "Training Programs",
      "Monitoring Systems",
    ],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: BarChart3,
    title: "Legal Risk Audits",
    description:
      "Comprehensive legal risk assessments that identify potential issues before they become problems.",
    features: [
      "Risk Identification",
      "Impact Analysis",
      "Mitigation Strategies",
      "Ongoing Monitoring",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "Ongoing Legal Counsel",
    description:
      "Continuous legal support and advisory services to keep your business compliant and protected.",
    features: [
      "Regular Reviews",
      "Policy Updates",
      "Issue Resolution",
      "Strategic Guidance",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
];

const focusAreas = [
  {
    name: "Regulatory Advisory",
    description: "Navigate complex regulatory landscapes with expert guidance",
    scenarios: [
      "New market entry compliance",
      "Regulatory change management",
      "Cross-border operations",
      "Industry-specific regulations",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Compliance Planning",
    description:
      "Strategic compliance frameworks that scale with your business",
    scenarios: [
      "Compliance program design",
      "Policy and procedure development",
      "Training and awareness programs",
      "Compliance monitoring systems",
    ],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    name: "Legal Risk Audits",
    description: "Identify and mitigate legal risks before they become issues",
    scenarios: [
      "Contract risk assessment",
      "Regulatory compliance audits",
      "Intellectual property reviews",
      "Employment law compliance",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Ongoing Legal Counsel",
    description: "Continuous legal support for day-to-day operations",
    scenarios: [
      "Contract negotiations",
      "Regulatory filings",
      "Dispute resolution",
      "Strategic legal advice",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
];

const legalScenarios = [
  {
    title: "Market Expansion",
    scenario: "A fintech company wants to expand into the EU market",
    challenge: "Navigating GDPR, PSD2, and local financial regulations",
    solution: "Comprehensive regulatory analysis and compliance roadmap",
    outcome: "Successful market entry with full regulatory compliance",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Regulatory Investigation",
    scenario: "A crypto exchange receives a regulatory inquiry",
    challenge: "Responding to regulatory concerns while maintaining operations",
    solution: "Strategic response planning and regulatory liaison",
    outcome: "Resolved investigation with minimal business disruption",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    title: "Compliance Overhaul",
    scenario: "A growing company needs to upgrade its compliance framework",
    challenge:
      "Implementing enterprise-level compliance without disrupting operations",
    solution: "Phased compliance implementation with change management",
    outcome: "Enhanced compliance posture with improved operational efficiency",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Contract Dispute",
    scenario: "A strategic partnership agreement is under dispute",
    challenge:
      "Resolving complex contractual issues while preserving relationships",
    solution: "Mediation and negotiation with legal strategy support",
    outcome: "Amicable resolution with strengthened partnership terms",
    gradient: "from-pink-500 to-rose-500",
  },
];

const processSteps = [
  {
    icon: Target,
    title: "Legal Risk Mapping",
    description:
      "Comprehensive analysis of your business to identify legal risks and compliance gaps.",
  },
  {
    icon: FileText,
    title: "Strategy Roadmap",
    description:
      "Development of a strategic legal and compliance roadmap aligned with your business objectives.",
  },
  {
    icon: Users,
    title: "Implementation Support",
    description:
      "Hands-on support implementing legal strategies and compliance frameworks.",
  },
  {
    icon: BarChart3,
    title: "Ongoing Advisory",
    description:
      "Continuous legal counsel and support to maintain compliance and address new challenges.",
  },
];

export default function LegalAdvisoryPage() {
  const servicesRef = useRef(null);
  const focusAreasRef = useRef(null);
  const scenariosRef = useRef(null);
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isFocusAreasInView = useInView(focusAreasRef, {
    once: true,
    margin: "-100px",
  });
  const isScenariosInView = useInView(scenariosRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />

      <ServiceHero
        title="Strategic Legal Advisory"
        subtitle="Practical Legal Guidance for Modern Businesses"
        description="Navigate complex legal landscapes with clarity—from regulatory hurdles to strategic decisions."
        gradient="from-blue-600 to-green-600"
        stats={[
          { label: "Cases Handled", value: "500+" },
          { label: "Success Rate", value: "98%" },
          { label: "Industries", value: "25+" },
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
                Focus Areas
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive legal advisory services that address the most
              critical challenges facing modern businesses.
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

      {/* Focus Areas */}
      <section ref={focusAreasRef} className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isFocusAreasInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Focus Areas
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized legal expertise in the areas that matter most to your
              business success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isFocusAreasInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${area.gradient} flex items-center justify-center mb-4`}
                  >
                    <Gavel size={24} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">
                    {area.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {area.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      Common Scenarios:
                    </h4>
                    <div className="space-y-1">
                      {area.scenarios.map((scenario, scenarioIndex) => (
                        <div
                          key={scenarioIndex}
                          className="flex items-center text-xs text-gray-400"
                        >
                          <CheckCircle
                            size={12}
                            className="mr-2 text-green-400"
                          />
                          {scenario}
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

      {/* Legal Scenarios */}
      <section
        ref={scenariosRef}
        className="py-32 px-6 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isScenariosInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Legal Scenarios
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world legal challenges and how we help businesses navigate
              them successfully.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {legalScenarios.map((scenario, index) => (
              <motion.div
                key={scenario.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isScenariosInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${scenario.gradient} flex items-center justify-center`}
                    >
                      <AlertTriangle size={24} className="text-white" />
                    </div>
                    <div className="text-xs text-gray-400">Case Study</div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">
                    {scenario.title}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-1">
                        Scenario:
                      </h4>
                      <p className="text-sm text-gray-400">
                        {scenario.scenario}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-red-400 mb-1">
                        Challenge:
                      </h4>
                      <p className="text-sm text-gray-400">
                        {scenario.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-1">
                        Solution:
                      </h4>
                      <p className="text-sm text-gray-400">
                        {scenario.solution}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-green-400 mb-1">
                        Outcome:
                      </h4>
                      <p className="text-sm text-gray-400">
                        {scenario.outcome}
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
        subtitle="How We Provide Legal Advisory"
        steps={processSteps}
        gradient="from-blue-400 to-green-400"
      />

      <ServiceCTA
        title="Ready for Strategic Legal Guidance?"
        subtitle="Let's navigate the legal landscape together and protect your business interests."
        gradient="from-blue-600 to-green-600"
        primaryCTA="Get Started"
        secondaryCTA="Learn More"
      />
    </div>
  );
}
