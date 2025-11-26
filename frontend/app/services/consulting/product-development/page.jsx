"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Target,
  Code,
  BarChart3,
  Users,
  CheckCircle,
  Clock,
  DollarSign,
  Map,
} from "lucide-react";
import Navigation from "../../../components/navigation";
import ServiceHero from "../../components/service-hero";
import ServiceProcess from "../../components/service-process";
import ServiceCTA from "../../components/service-cta";

const services = [
  {
    icon: Target,
    title: "Product Strategy",
    description:
      "Comprehensive product strategy development that aligns with business objectives and market opportunities.",
    features: [
      "Market Research",
      "Product Vision",
      "Roadmap Planning",
      "Success Metrics",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code,
    title: "Technical Development",
    description:
      "End-to-end technical development from concept to deployment with scalable architecture.",
    features: [
      "Architecture Design",
      "Development Planning",
      "Quality Assurance",
      "Deployment Strategy",
    ],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: Users,
    title: "User Experience",
    description:
      "User-centered design and experience optimization that drives adoption and satisfaction.",
    features: [
      "User Research",
      "UX Design",
      "Usability Testing",
      "Experience Optimization",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Product Analytics",
    description:
      "Data-driven product analytics that provide insights for optimization and growth.",
    features: [
      "Analytics Setup",
      "Performance Tracking",
      "User Behavior Analysis",
      "Optimization Insights",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
];

const productRoadmaps = [
  {
    type: "MVP Development",
    description: "Minimum viable product development roadmap",
    timeline: "3-6 months",
    investment: "$50K-$200K",
    phases: [
      "Market validation",
      "Core feature development",
      "User testing",
      "Initial launch",
    ],
    deliverables: [
      "Product specification",
      "Technical architecture",
      "MVP prototype",
      "Launch strategy",
    ],
    template: "Download Template",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    type: "Feature Expansion",
    description: "Product feature expansion and enhancement roadmap",
    timeline: "6-12 months",
    investment: "$100K-$500K",
    phases: [
      "Feature prioritization",
      "Development planning",
      "Iterative development",
      "Market rollout",
    ],
    deliverables: [
      "Feature roadmap",
      "Development timeline",
      "Resource allocation",
      "Success metrics",
    ],
    template: "Download Template",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    type: "Platform Evolution",
    description: "Platform evolution and scaling roadmap",
    timeline: "12-24 months",
    investment: "$500K-$2M",
    phases: [
      "Platform architecture",
      "Scalability planning",
      "Advanced features",
      "Market expansion",
    ],
    deliverables: [
      "Platform strategy",
      "Technical roadmap",
      "Scaling plan",
      "Growth strategy",
    ],
    template: "Download Template",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    type: "Product Pivot",
    description: "Product pivot and transformation roadmap",
    timeline: "4-8 months",
    investment: "$200K-$800K",
    phases: [
      "Market analysis",
      "Pivot strategy",
      "Rapid development",
      "Market validation",
    ],
    deliverables: [
      "Pivot strategy",
      "Development plan",
      "Market approach",
      "Success criteria",
    ],
    template: "Download Template",
    gradient: "from-pink-500 to-rose-500",
  },
];

const developmentMethodologies = [
  {
    methodology: "Agile Development",
    description:
      "Iterative development with continuous feedback and adaptation",
    advantages: [
      "Rapid iteration",
      "Continuous feedback",
      "Flexible planning",
      "Early delivery",
    ],
    challenges: [
      "Requires discipline",
      "Scope creep risk",
      "Team coordination",
      "Documentation needs",
    ],
    bestFor: "Dynamic markets, evolving requirements, rapid development",
    timeline: "2-4 weeks sprints",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    methodology: "Lean Development",
    description:
      "Minimize waste and maximize value through efficient processes",
    advantages: [
      "Reduced waste",
      "Faster delivery",
      "Cost efficiency",
      "Value focus",
    ],
    challenges: [
      "Cultural change",
      "Process optimization",
      "Measurement complexity",
      "Team training",
    ],
    bestFor: "Startups, resource constraints, value optimization",
    timeline: "Continuous flow",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    methodology: "Design Thinking",
    description: "Human-centered approach to innovation and problem-solving",
    advantages: [
      "User focus",
      "Innovation driven",
      "Problem solving",
      "Creative solutions",
    ],
    challenges: [
      "Time intensive",
      "Subjective outcomes",
      "Skill requirements",
      "Process complexity",
    ],
    bestFor: "Innovation projects, user experience, complex problems",
    timeline: "6-12 weeks cycles",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    methodology: "DevOps Integration",
    description:
      "Continuous integration and deployment with automated processes",
    advantages: [
      "Faster deployment",
      "Quality improvement",
      "Automation benefits",
      "Team collaboration",
    ],
    challenges: [
      "Tool complexity",
      "Cultural shift",
      "Security considerations",
      "Infrastructure needs",
    ],
    bestFor: "Technical products, continuous delivery, team efficiency",
    timeline: "Ongoing optimization",
    gradient: "from-pink-500 to-rose-500",
  },
];

const processSteps = [
  {
    icon: Target,
    title: "Product Discovery",
    description:
      "Comprehensive product discovery to validate market opportunity and define product vision.",
  },
  {
    icon: Code,
    title: "Strategy & Planning",
    description:
      "Development of product strategy and detailed planning for successful execution.",
  },
  {
    icon: Users,
    title: "Development & Testing",
    description:
      "Iterative development and testing with continuous user feedback and optimization.",
  },
  {
    icon: BarChart3,
    title: "Launch & Optimization",
    description:
      "Strategic product launch with ongoing optimization based on data and user feedback.",
  },
];

export default function ProductDevelopmentPage() {
  const servicesRef = useRef(null);
  const roadmapsRef = useRef(null);
  const methodologiesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isRoadmapsInView = useInView(roadmapsRef, {
    once: true,
    margin: "-100px",
  });
  const isMethodologiesInView = useInView(methodologiesRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />

      <ServiceHero
        title="Product Development"
        subtitle="Build Products That Win Markets"
        description="End-to-end product development from concept to launch, ensuring market fit, technical excellence, and user satisfaction."
        gradient="from-orange-600 to-red-600"
        stats={[
          { label: "Products Launched", value: "100+" },
          { label: "Success Rate", value: "90%" },
          { label: "Time to Market", value: "6 months" },
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
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive product development services that ensure successful
              product launches and market success.
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

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 group-hover:bg-clip-text transition-all duration-300">
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

      {/* Product Roadmaps */}
      <section ref={roadmapsRef} className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isRoadmapsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Product Roadmap Templates
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Download product roadmap templates to accelerate your product
              development planning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productRoadmaps.map((roadmap, index) => (
              <motion.div
                key={roadmap.type}
                initial={{ opacity: 0, y: 50 }}
                animate={isRoadmapsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${roadmap.gradient} flex items-center justify-center`}
                    >
                      <Map size={24} className="text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">Timeline</div>
                      <div className="text-sm font-semibold text-gray-300">
                        {roadmap.timeline}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">
                    {roadmap.type}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {roadmap.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock size={16} className="mr-2" />
                      Timeline: {roadmap.timeline}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <DollarSign size={16} className="mr-2" />
                      Investment: {roadmap.investment}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      Phases:
                    </h4>
                    <div className="space-y-1">
                      {roadmap.phases.map((phase, phaseIndex) => (
                        <div
                          key={phaseIndex}
                          className="flex items-center text-xs text-gray-400"
                        >
                          <CheckCircle
                            size={12}
                            className="mr-2 text-green-400"
                          />
                          {phase}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      Deliverables:
                    </h4>
                    <div className="space-y-1">
                      {roadmap.deliverables.map(
                        (deliverable, deliverableIndex) => (
                          <div
                            key={deliverableIndex}
                            className="flex items-center text-xs text-gray-400"
                          >
                            <div className="w-1 h-1 rounded-full bg-blue-400 mr-2" />
                            {deliverable}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${roadmap.gradient} px-4 py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300`}
                  >
                    <Map size={16} />
                    {roadmap.template}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Methodologies */}
      <section
        ref={methodologiesRef}
        className="py-32 px-6 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isMethodologiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Development Methodologies
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic development methodologies with detailed analysis of
              advantages, challenges, and implementation requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {developmentMethodologies.map((methodology, index) => (
              <motion.div
                key={methodology.methodology}
                initial={{ opacity: 0, y: 50 }}
                animate={isMethodologiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${methodology.gradient} flex items-center justify-center`}
                    >
                      <Code size={24} className="text-white" />
                    </div>
                    <div className="text-xs text-gray-400">
                      {methodology.timeline}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">
                    {methodology.methodology}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {methodology.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-green-400 mb-2">
                        Advantages:
                      </h4>
                      <div className="space-y-1">
                        {methodology.advantages.map(
                          (advantage, advantageIndex) => (
                            <div
                              key={advantageIndex}
                              className="flex items-center text-xs text-gray-400"
                            >
                              <CheckCircle
                                size={12}
                                className="mr-2 text-green-400"
                              />
                              {advantage}
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-red-400 mb-2">
                        Challenges:
                      </h4>
                      <div className="space-y-1">
                        {methodology.challenges.map(
                          (challenge, challengeIndex) => (
                            <div
                              key={challengeIndex}
                              className="flex items-center text-xs text-gray-400"
                            >
                              <div className="w-1 h-1 rounded-full bg-red-400 mr-2" />
                              {challenge}
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">
                        Best For:
                      </h4>
                      <p className="text-xs text-gray-400">
                        {methodology.bestFor}
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
        subtitle="How We Develop Your Product"
        steps={processSteps}
        gradient="from-orange-400 to-red-400"
      />

      <ServiceCTA
        title="Ready to Build Your Product?"
        subtitle="Let's develop a product that wins in the market and delights your users."
        gradient="from-orange-600 to-red-600"
        primaryCTA="Get Started"
        secondaryCTA="Learn More"
      />
    </div>
  );
}
