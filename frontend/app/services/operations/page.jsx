"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  Settings,
  Calendar,
  Building2,
  Cog,
  UserPlus,
  FileCheck,
  Zap,
  ArrowRight,
} from "lucide-react";
import ServiceHero from "../components/service-hero";
import ServiceProcess from "../components/service-process";
import ServiceCTA from "../components/service-cta";
import Navigation from "../../components/navigation";
import Link from "next/link";
const services = [
  {
    icon: UserPlus,
    title: "Talent Acquisition",
    description:
      "Elite talent that scales with your ambition. We find the A-players who turn your vision into reality.",
    features: [
      "Executive Search",
      "Technical Hiring",
      "Cultural Fit Assessment",
      "Global Talent Pool",
    ],
    gradient: "from-blue-500 to-purple-500",
    link: "/services/operations/talent-acquisition",
  },
  {
    icon: Building2,
    title: "Company Infrastructure",
    description:
      "Bulletproof operational foundation that scales from startup to unicorn. Systems that work when you're sleeping.",
    features: [
      "Organizational Design",
      "Process Documentation",
      "System Integration",
      "Scalability Planning",
    ],
    gradient: "from-green-500 to-blue-500",
    link: "/services/operations/company-infrastructure",
  },
  {
    icon: FileCheck,
    title: "Governance & SOPs",
    description:
      "Crystal-clear processes that eliminate chaos and maximize efficiency. Every team member knows exactly what to do.",
    features: [
      "Standard Operating Procedures",
      "Governance Framework",
      "Quality Assurance",
      "Performance Metrics",
    ],
    gradient: "from-purple-500 to-pink-500",
    link: "/services/operations/governance-sops",
  },
  {
    icon: Calendar,
    title: "Events & Community",
    description:
      "Memorable experiences that build lasting relationships. From intimate dinners to industry-defining conferences.",
    features: [
      "Event Strategy",
      "Community Building",
      "Stakeholder Engagement",
      "Brand Experiences",
    ],
    gradient: "from-orange-500 to-red-500",
    link: "/services/operations/events-community",
  },
];

const hiringProcess = [
  {
    role: "C-Level Executives",
    timeframe: "4-6 weeks",
    success: "95%",
    description: "Visionary leaders who've scaled companies from zero to exit",
  },
  {
    role: "Technical Leaders",
    timeframe: "2-4 weeks",
    success: "92%",
    description: "Engineering talent that builds products users love",
  },
  {
    role: "Marketing Specialists",
    timeframe: "1-3 weeks",
    success: "88%",
    description: "Growth hackers who understand your market inside out",
  },
  {
    role: "Operations Managers",
    timeframe: "2-3 weeks",
    success: "90%",
    description: "Process masters who turn chaos into clockwork",
  },
];

const processSteps = [
  {
    icon: Settings,
    title: "Operations Audit",
    description:
      "Deep dive into your current operations, identifying bottlenecks, inefficiencies, and growth blockers.",
  },
  {
    icon: Cog,
    title: "System Design",
    description:
      "Custom operational architecture that scales with your growth, integrating people, processes, and technology.",
  },
  {
    icon: Users,
    title: "Team Building",
    description:
      "Strategic hiring and team development that creates a culture of excellence and accountability.",
  },
  {
    icon: Zap,
    title: "Optimization",
    description:
      "Continuous improvement cycles that keep your operations lean, efficient, and ahead of the competition.",
  },
];

export default function OperationsPage() {
  const servicesRef = useRef(null);
  const hiringRef = useRef(null);
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isHiringInView = useInView(hiringRef, { once: true, margin: "-100px" });

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />

      <ServiceHero
        title="Operations & Infrastructure"
        subtitle="From Chaos to Clockwork"
        description="Build operational excellence that scales. We create the systems, hire the talent, and establish the processes that turn ambitious startups into unstoppable market leaders."
        gradient="from-blue-600 to-purple-600"
        stats={[
          { label: "Teams Built", value: "150+" },
          { label: "Hiring Success", value: "92%" },
          { label: "Process Efficiency", value: "300%" },
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
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Operational Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The infrastructure that separates market leaders from the rest.
              Systems that scale, teams that deliver, processes that work.
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

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
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
                  <div className="flex items-center justify-center text-purple-400 font-semibold cursor-pointer mt-6">
                    <Link href={service.link}>Learn More</Link>
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Expertise */}
      {/* <section ref={hiringRef} className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHiringInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Elite Talent Acquisition
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A-players who don't just fill roles—they transform your company. Our network spans every industry, every
              skill level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hiringProcess.map((role, index) => (
              <motion.div
                key={role.role}
                initial={{ opacity: 0, y: 50 }}
                animate={isHiringInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{role.role}</h3>
                  <div className="text-sm text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                    {role.success} Success
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{role.description}</p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Timeline: {role.timeframe}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-full font-semibold"
                  >
                    Start Hiring
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <ServiceProcess
        title="Our Operations Process"
        subtitle="From Startup Chaos to Enterprise Excellence"
        steps={processSteps}
        gradient="from-blue-500 to-purple-500"
      />

      <ServiceCTA
        title="Ready to Scale Your Operations?"
        subtitle="Let's build the infrastructure that turns your vision into reality."
        primaryCTA="Start Operations Audit"
        secondaryCTA="Discuss Hiring Needs"
      />
    </div>
  );
}
