"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  Search,
  FileText,
  BarChart3,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  TrendingUp,
} from "lucide-react";
import Navigation from "../../../components/navigation";
import ServiceHero from "../../components/service-hero";
import ServiceProcess from "../../components/service-process";
import ServiceCTA from "../../components/service-cta";

const services = [
  {
    icon: Search,
    title: "Talent Sourcing",
    description:
      "Strategic talent sourcing that identifies and attracts top candidates through multiple channels and networks.",
    features: [
      "Market Research",
      "Sourcing Strategy",
      "Network Building",
      "Candidate Outreach",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    title: "Recruitment Process",
    description:
      "Streamlined recruitment processes that ensure efficient candidate evaluation and selection.",
    features: [
      "Process Design",
      "Screening Methods",
      "Interview Coordination",
      "Assessment Tools",
    ],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: Users,
    title: "Candidate Experience",
    description:
      "Exceptional candidate experience that enhances your employer brand and attracts top talent.",
    features: [
      "Communication Strategy",
      "Interview Experience",
      "Feedback Systems",
      "Onboarding Support",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Analytics & Optimization",
    description:
      "Data-driven recruitment analytics that optimize hiring processes and improve outcomes.",
    features: [
      "Performance Tracking",
      "ROI Analysis",
      "Process Optimization",
      "Predictive Analytics",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
];

const hiringMetrics = [
  {
    metric: "Time to Hire",
    description: "Average time from job posting to offer acceptance",
    target: "30-45 days",
    industry: "25-60 days",
    optimization: "Streamlined processes, automated screening",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    metric: "Cost per Hire",
    description: "Total recruitment cost divided by number of hires",
    target: "$3K-$8K",
    industry: "$4K-$12K",
    optimization: "Efficient sourcing, reduced agency fees",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    metric: "Quality of Hire",
    description: "Performance and retention of new hires",
    target: "85%+ retention",
    industry: "70-80% retention",
    optimization: "Better assessment, cultural fit focus",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    metric: "Source Effectiveness",
    description: "Success rate of different recruitment channels",
    target: "15-25% conversion",
    industry: "10-20% conversion",
    optimization: "Channel optimization, targeted sourcing",
    gradient: "from-pink-500 to-rose-500",
  },
];

const recruitmentChannels = [
  {
    name: "LinkedIn & Professional Networks",
    description: "Targeted outreach to passive candidates",
    effectiveness: "High for senior roles",
    cost: "Medium",
    timeline: "2-4 weeks",
    bestFor: "Executive, senior management, specialized roles",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Job Boards & Aggregators",
    description: "Traditional job posting and application process",
    effectiveness: "Medium for all levels",
    cost: "Low",
    timeline: "1-3 weeks",
    bestFor: "Entry to mid-level positions, high volume hiring",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    name: "Employee Referrals",
    description: "Internal network and employee recommendations",
    effectiveness: "Very high quality",
    cost: "Low",
    timeline: "1-2 weeks",
    bestFor: "All levels, cultural fit priority",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Recruitment Agencies",
    description: "Specialized recruitment services",
    effectiveness: "High for niche roles",
    cost: "High",
    timeline: "3-6 weeks",
    bestFor: "Executive search, specialized skills, urgent hiring",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "University & Campus",
    description: "Direct recruitment from educational institutions",
    effectiveness: "High for entry-level",
    cost: "Low",
    timeline: "2-4 weeks",
    bestFor: "Graduate programs, entry-level positions",
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Social Media & Content",
    description: "Employer branding and organic candidate attraction",
    effectiveness: "Medium, long-term",
    cost: "Low",
    timeline: "Ongoing",
    bestFor: "Brand building, passive candidate attraction",
    gradient: "from-yellow-500 to-orange-500",
  },
];

const processSteps = [
  {
    icon: Target,
    title: "Talent Strategy",
    description:
      "Comprehensive talent acquisition strategy aligned with your business objectives and growth plans.",
  },
  {
    icon: Search,
    title: "Sourcing & Outreach",
    description:
      "Strategic sourcing and targeted outreach to attract qualified candidates through multiple channels.",
  },
  {
    icon: Users,
    title: "Assessment & Selection",
    description:
      "Rigorous assessment and selection processes that identify the best candidates for your organization.",
  },
  {
    icon: BarChart3,
    title: "Optimization",
    description:
      "Continuous optimization of recruitment processes based on data and performance analytics.",
  },
];

export default function TalentAcquisitionPage() {
  const servicesRef = useRef(null);
  const metricsRef = useRef(null);
  const channelsRef = useRef(null);
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isMetricsInView = useInView(metricsRef, {
    once: true,
    margin: "-100px",
  });
  const isChannelsInView = useInView(channelsRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />

      <ServiceHero
        title="Talent Acquisition"
        subtitle="Build Teams That Drive Success"
        description="Strategic talent acquisition that identifies, attracts, and hires the right people to fuel your business growth."
        gradient="from-purple-600 to-pink-600"
        stats={[
          { label: "Candidates Placed", value: "500+" },
          { label: "Success Rate", value: "95%" },
          { label: "Time to Hire", value: "35 days" },
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
              Comprehensive talent acquisition services that ensure you hire the
              right people at the right time.
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

      {/* Hiring Metrics */}
      <section ref={metricsRef} className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isMetricsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Hiring Funnel Metrics
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key performance indicators that measure and optimize your
              recruitment effectiveness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hiringMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, y: 50 }}
                animate={isMetricsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${metric.gradient} flex items-center justify-center`}
                    >
                      <TrendingUp size={24} className="text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">Target</div>
                      <div className="text-sm font-semibold text-gray-300">
                        {metric.target}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">
                    {metric.metric}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {metric.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <BarChart3 size={16} className="mr-2" />
                      Industry Average: {metric.industry}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      Optimization:
                    </h4>
                    <p className="text-xs text-gray-400">
                      {metric.optimization}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Channels */}
      <section
        ref={channelsRef}
        className="py-32 px-6 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isChannelsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Recruitment Channels
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic recruitment channels with effectiveness metrics and
              optimization strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recruitmentChannels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isChannelsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-r ${channel.gradient} flex items-center justify-center`}
                    >
                      <Users size={20} className="text-white" />
                    </div>
                    <div className="text-xs text-gray-400">{channel.cost}</div>
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-white">
                    {channel.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {channel.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs text-gray-400">
                      <CheckCircle size={14} className="mr-2" />
                      Effectiveness: {channel.effectiveness}
                    </div>
                    <div className="flex items-center text-xs text-gray-400">
                      <Clock size={14} className="mr-2" />
                      Timeline: {channel.timeline}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      Best For:
                    </h4>
                    <p className="text-xs text-gray-400">{channel.bestFor}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceProcess
        title="Process"
        subtitle="How We Acquire Top Talent"
        steps={processSteps}
        gradient="from-purple-400 to-pink-400"
      />

      <ServiceCTA
        title="Ready to Build Your Dream Team?"
        subtitle="Let's find and hire the talent that will drive your business forward."
        gradient="from-purple-600 to-pink-600"
        primaryCTA="Get Started"
        secondaryCTA="Learn More"
      />
    </div>
  );
}
