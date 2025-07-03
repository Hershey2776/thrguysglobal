"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Building,
  Users,
  Shield,
  BarChart3,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
} from "lucide-react";
import ServiceHero from "../../components/service-hero";
import ServiceProcess from "../../components/service-process";
import ServiceCTA from "../../components/service-cta";
import Navigation from "../../../components/navigation";

const services = [
  {
    icon: Building,
    title: "Legal Entity Setup",
    description:
      "Complete legal entity establishment including registration, governance, and compliance framework.",
    features: [
      "Entity Registration",
      "Governance Structure",
      "Compliance Framework",
      "Regulatory Filings",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Team Structure & Hiring",
    description:
      "Strategic team building and organizational design that scales with your business growth.",
    features: [
      "Organizational Design",
      "Recruitment Strategy",
      "Employment Contracts",
      "Performance Management",
    ],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: Shield,
    title: "Compliance & Risk Management",
    description:
      "Comprehensive compliance frameworks and risk management systems to protect your business.",
    features: [
      "Compliance Programs",
      "Risk Assessment",
      "Policy Development",
      "Monitoring Systems",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Operational Systems",
    description:
      "Implementation of operational systems and processes that drive efficiency and growth.",
    features: [
      "Process Design",
      "System Implementation",
      "Performance Metrics",
      "Continuous Improvement",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
];

const infrastructureComponents = [
  {
    name: "Legal Foundation",
    description: "Establish solid legal and governance foundations",
    checklist: [
      "Entity registration and licensing",
      "Board structure and governance",
      "Shareholder agreements",
      "Regulatory compliance framework",
    ],
    timeline: "2-4 weeks",
    cost: "$5K-$20K",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Team Infrastructure",
    description: "Build scalable team structures and processes",
    checklist: [
      "Organizational design and structure",
      "Recruitment and hiring processes",
      "Employment contracts and policies",
      "Performance management systems",
    ],
    timeline: "4-8 weeks",
    cost: "$10K-$50K",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    name: "Compliance Framework",
    description: "Implement comprehensive compliance and risk management",
    checklist: [
      "Compliance policies and procedures",
      "Risk assessment and mitigation",
      "Internal controls and monitoring",
      "Training and awareness programs",
    ],
    timeline: "3-6 weeks",
    cost: "$8K-$30K",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Operational Systems",
    description: "Deploy efficient operational processes and tools",
    checklist: [
      "Process design and documentation",
      "Technology stack implementation",
      "Performance metrics and KPIs",
      "Continuous improvement framework",
    ],
    timeline: "6-12 weeks",
    cost: "$15K-$100K",
    gradient: "from-pink-500 to-rose-500",
  },
];

const setupStages = [
  {
    stage: "Foundation",
    duration: "2-4 weeks",
    focus: "Legal entity, governance, basic compliance",
    deliverables: ["Entity registration", "Board setup", "Basic policies"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    stage: "Team Building",
    duration: "4-8 weeks",
    focus: "Organizational structure, hiring, HR systems",
    deliverables: ["Org design", "Hiring processes", "HR policies"],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    stage: "Systems & Processes",
    duration: "6-12 weeks",
    focus: "Operational systems, technology, processes",
    deliverables: [
      "Process design",
      "Tech implementation",
      "Performance metrics",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    stage: "Optimization",
    duration: "Ongoing",
    focus: "Continuous improvement, scaling, optimization",
    deliverables: [
      "Performance reviews",
      "Process optimization",
      "Scale planning",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
];

const processSteps = [
  {
    icon: Target,
    title: "Infrastructure Assessment",
    description:
      "Comprehensive analysis of your current infrastructure and identification of gaps and opportunities.",
  },
  {
    icon: Building,
    title: "Strategic Planning",
    description:
      "Development of a strategic infrastructure roadmap aligned with your business objectives and growth plans.",
  },
  {
    icon: Users,
    title: "Implementation",
    description:
      "Systematic implementation of infrastructure components with change management and stakeholder alignment.",
  },
  {
    icon: BarChart3,
    title: "Optimization",
    description:
      "Continuous monitoring and optimization of infrastructure to ensure efficiency and scalability.",
  },
];

export default function CompanyInfrastructurePage() {
  const servicesRef = useRef(null);
  const componentsRef = useRef(null);
  const stagesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isComponentsInView = useInView(componentsRef, {
    once: true,
    margin: "-100px",
  });
  const isStagesInView = useInView(stagesRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />

      <ServiceHero
        title="Company Infrastructure"
        subtitle="Build to Scale, Operate with Confidence"
        description="From legal foundations to operational excellence—we build the infrastructure that powers your growth."
        gradient="from-blue-600 to-green-600"
        stats={[
          { label: "Companies Built", value: "200+" },
          { label: "Success Rate", value: "100%" },
          { label: "Time to Launch", value: "8 weeks" },
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
                Infrastructure Components
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive infrastructure services that establish solid
              foundations for sustainable business growth.
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

      {/* Infrastructure Components */}
      <section ref={componentsRef} className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isComponentsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Setup Checklists
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive checklists for each infrastructure component with
              timelines and cost estimates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {infrastructureComponents.map((component, index) => (
              <motion.div
                key={component.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isComponentsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${component.gradient} flex items-center justify-center`}
                    >
                      <Building size={24} className="text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">Timeline</div>
                      <div className="text-sm font-semibold text-gray-300">
                        {component.timeline}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">
                    {component.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {component.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock size={16} className="mr-2" />
                      Timeline: {component.timeline}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <DollarSign size={16} className="mr-2" />
                      Cost: {component.cost}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      Checklist:
                    </h4>
                    <div className="space-y-1">
                      {component.checklist.map((item, itemIndex) => (
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Stages */}
      <section
        ref={stagesRef}
        className="py-32 px-6 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isStagesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Setup Stages
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Systematic approach to building company infrastructure with clear
              stages and deliverables.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {setupStages.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 50 }}
                animate={isStagesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-r ${stage.gradient} flex items-center justify-center`}
                    >
                      <span className="text-lg font-bold text-white">
                        {index + 1}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">
                      {stage.duration}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-white">
                    {stage.stage}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">{stage.focus}</p>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      Deliverables:
                    </h4>
                    <div className="space-y-1">
                      {stage.deliverables.map(
                        (deliverable, deliverableIndex) => (
                          <div
                            key={deliverableIndex}
                            className="flex items-center text-xs text-gray-400"
                          >
                            <CheckCircle
                              size={12}
                              className="mr-2 text-green-400"
                            />
                            {deliverable}
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
        subtitle="How We Build Your Infrastructure"
        steps={processSteps}
        gradient="from-blue-400 to-green-400"
      />

      <ServiceCTA
        title="Ready to Build Your Infrastructure?"
        subtitle="Let's create the solid foundation your business needs to scale and succeed."
        gradient="from-blue-600 to-green-600"
        primaryCTA="Get Started"
        secondaryCTA="Learn More"
      />
    </div>
  );
}
