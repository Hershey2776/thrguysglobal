"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  Users,
  MessageSquare,
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
    icon: Calendar,
    title: "Event Planning & Execution",
    description:
      "End-to-end event management from concept to execution, ensuring memorable experiences that drive engagement.",
    features: [
      "Event Strategy",
      "Venue Selection",
      "Logistics Management",
      "On-site Coordination",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Community Building",
    description:
      "Strategic community development that fosters meaningful connections and drives brand loyalty.",
    features: [
      "Community Strategy",
      "Member Engagement",
      "Content Creation",
      "Growth Management",
    ],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: MessageSquare,
    title: "Content & Communication",
    description:
      "Compelling content creation and communication strategies that amplify your events and community initiatives.",
    features: [
      "Content Strategy",
      "Social Media",
      "Email Marketing",
      "PR & Media",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Analytics & Optimization",
    description:
      "Data-driven insights and optimization strategies to maximize event success and community engagement.",
    features: [
      "Performance Tracking",
      "ROI Analysis",
      "Optimization Strategies",
      "Reporting",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
];

const eventTypes = [
  {
    name: "Conferences & Summits",
    description:
      "Large-scale industry events and thought leadership conferences",
    timeline: "3-6 months",
    cost: "$50K-$500K",
    attendees: "200-2000+",
    deliverables: [
      "Event strategy and planning",
      "Speaker management",
      "Sponsorship coordination",
      "On-site execution",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Workshops & Training",
    description: "Educational workshops and skill-building sessions",
    timeline: "1-3 months",
    cost: "$10K-$100K",
    attendees: "20-200",
    deliverables: [
      "Curriculum development",
      "Facilitator coordination",
      "Materials preparation",
      "Participant management",
    ],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    name: "Networking Events",
    description: "Professional networking and relationship-building events",
    timeline: "2-4 weeks",
    cost: "$5K-$50K",
    attendees: "50-500",
    deliverables: [
      "Venue selection",
      "Guest list management",
      "Program coordination",
      "Follow-up support",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Product Launches",
    description: "Strategic product launch events and announcements",
    timeline: "2-4 months",
    cost: "$20K-$200K",
    attendees: "100-1000",
    deliverables: [
      "Launch strategy",
      "Media coordination",
      "Demo preparation",
      "Press coverage",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
];

const communityInitiatives = [
  {
    name: "Online Communities",
    description: "Digital community platforms and engagement strategies",
    platforms: ["Discord", "Slack", "Facebook Groups", "Custom platforms"],
    engagement: "Daily content, weekly events, monthly challenges",
    growth: "Organic growth, referral programs, content marketing",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Local Meetups",
    description: "In-person community gatherings and local networking",
    platforms: ["Eventbrite", "Meetup", "Local venues"],
    engagement: "Monthly meetups, quarterly events, annual conferences",
    growth: "Local partnerships, word-of-mouth, social media",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    name: "Industry Associations",
    description: "Professional associations and industry groups",
    platforms: ["LinkedIn Groups", "Professional networks", "Industry events"],
    engagement: "Industry insights, professional development, networking",
    growth: "Industry partnerships, thought leadership, referrals",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Customer Communities",
    description: "Customer-focused communities and user groups",
    platforms: ["Customer portals", "User forums", "Social media"],
    engagement: "Product support, user feedback, feature requests",
    growth: "Customer onboarding, product integration, referrals",
    gradient: "from-pink-500 to-rose-500",
  },
];

const processSteps = [
  {
    icon: Target,
    title: "Strategy Development",
    description:
      "Comprehensive strategy development aligned with your business objectives and target audience.",
  },
  {
    icon: Calendar,
    title: "Planning & Coordination",
    description:
      "Detailed planning and coordination of all event and community initiatives with clear timelines and deliverables.",
  },
  {
    icon: Users,
    title: "Execution & Management",
    description:
      "Seamless execution and ongoing management of events and community initiatives with real-time optimization.",
  },
  {
    icon: BarChart3,
    title: "Analysis & Optimization",
    description:
      "Data-driven analysis and optimization to maximize impact and drive continuous improvement.",
  },
];

export default function EventsCommunityPage() {
  const servicesRef = useRef(null);
  const eventsRef = useRef(null);
  const communityRef = useRef(null);
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isEventsInView = useInView(eventsRef, {
    once: true,
    margin: "-100px",
  });
  const isCommunityInView = useInView(communityRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />

      <ServiceHero
        title="Events & Community"
        subtitle="Build Connections That Drive Growth"
        description="From memorable events to thriving communities—we create experiences that connect, engage, and inspire."
        gradient="from-purple-600 to-pink-600"
        stats={[
          { label: "Events Executed", value: "500+" },
          { label: "Community Members", value: "50K+" },
          { label: "Engagement Rate", value: "85%" },
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
              Comprehensive events and community services that create meaningful
              connections and drive business growth.
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

      {/* Event Types */}
      <section ref={eventsRef} className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isEventsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Event Types
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive event management services with detailed timelines
              and cost estimates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((event, index) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isEventsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${event.gradient} flex items-center justify-center`}
                    >
                      <Calendar size={24} className="text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">Timeline</div>
                      <div className="text-sm font-semibold text-gray-300">
                        {event.timeline}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">
                    {event.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {event.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock size={16} className="mr-2" />
                      Timeline: {event.timeline}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <DollarSign size={16} className="mr-2" />
                      Cost: {event.cost}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Users size={16} className="mr-2" />
                      Attendees: {event.attendees}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      Deliverables:
                    </h4>
                    <div className="space-y-1">
                      {event.deliverables.map(
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

      {/* Community Initiatives */}
      <section
        ref={communityRef}
        className="py-32 px-6 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isCommunityInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Community Initiatives
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic community building approaches that foster meaningful
              connections and drive engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityInitiatives.map((initiative, index) => (
              <motion.div
                key={initiative.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isCommunityInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${initiative.gradient} flex items-center justify-center mb-4`}
                  >
                    <Users size={24} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">
                    {initiative.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {initiative.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">
                        Platforms:
                      </h4>
                      <div className="space-y-1">
                        {initiative.platforms.map((platform, platformIndex) => (
                          <div
                            key={platformIndex}
                            className="flex items-center text-xs text-gray-400"
                          >
                            <CheckCircle
                              size={12}
                              className="mr-2 text-green-400"
                            />
                            {platform}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">
                        Engagement:
                      </h4>
                      <p className="text-xs text-gray-400">
                        {initiative.engagement}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">
                        Growth:
                      </h4>
                      <p className="text-xs text-gray-400">
                        {initiative.growth}
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
        subtitle="How We Create Events & Communities"
        steps={processSteps}
        gradient="from-purple-400 to-pink-400"
      />

      <ServiceCTA
        title="Ready to Build Your Community?"
        subtitle="Let's create events and communities that connect, engage, and drive your business forward."
        gradient="from-purple-600 to-pink-600"
        primaryCTA="Get Started"
        secondaryCTA="Learn More"
      />
    </div>
  );
}
