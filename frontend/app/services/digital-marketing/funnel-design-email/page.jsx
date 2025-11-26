"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  TrendingUp,
  BarChart3,
  Target,
  Zap,
  Mail,
  Filter,
  Users,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import ServiceHero from "../../components/service-hero";
import ServiceProcess from "../../components/service-process";
import ServiceCTA from "../../components/service-cta";
import Navigation from "../../../components/navigation";

const services = [
  {
    icon: Target,
    title: "Funnel Mapping",
    description:
      "Design optimized conversion funnels that guide prospects through each stage of the buyer journey with precision.",
    features: [
      "Customer Journey Mapping",
      "Conversion Optimization",
      "A/B Testing Strategy",
      "Funnel Analytics",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Mail,
    title: "Email Automation",
    description:
      "Build sophisticated email sequences that nurture leads and convert prospects into loyal customers.",
    features: [
      "Drip Campaigns",
      "Behavioral Triggers",
      "Personalization",
      "Automation Workflows",
    ],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: BarChart3,
    title: "A/B Testing",
    description:
      "Systematic testing of every element to optimize conversion rates and maximize ROI.",
    features: [
      "Landing Page Testing",
      "Email Subject Lines",
      "Call-to-Action Testing",
      "Conversion Optimization",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization",
    description:
      "Data-driven optimization strategies that turn more visitors into customers at every touchpoint.",
    features: [
      "Conversion Rate Analysis",
      "User Experience Optimization",
      "Performance Tracking",
      "Continuous Improvement",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
];

const funnelStages = [
  {
    name: "Awareness",
    description: "Top of funnel - attracting and educating prospects",
    activities: ["Content Marketing", "SEO", "Social Media", "Paid Ads"],
    conversion: "5-10%",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Interest",
    description: "Engaging prospects with valuable content and offers",
    activities: ["Lead Magnets", "Webinars", "Case Studies", "Email Sequences"],
    conversion: "15-25%",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    name: "Consideration",
    description: "Helping prospects evaluate your solution",
    activities: [
      "Product Demos",
      "Free Trials",
      "Consultations",
      "Social Proof",
    ],
    conversion: "30-50%",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Decision",
    description: "Closing the sale and converting prospects to customers",
    activities: ["Sales Calls", "Proposals", "Discounts", "Urgency"],
    conversion: "60-80%",
    gradient: "from-pink-500 to-rose-500",
  },
];

const sampleEmails = [
  {
    type: "Welcome Series",
    subject: "Welcome to [Brand] - Here's Your Free Guide",
    preview:
      "Hi [Name], Welcome aboard! I'm excited to share your free guide that will help you...",
    openRate: "45%",
    clickRate: "12%",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    type: "Nurture Sequence",
    subject: "3 Proven Strategies That [Industry] Leaders Use",
    preview:
      "Hey [Name], I wanted to share these 3 strategies that have helped our clients achieve...",
    openRate: "38%",
    clickRate: "8%",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    type: "Sales Sequence",
    subject: "Limited Time: [Offer] - Don't Miss Out",
    preview:
      "Hi [Name], This is your final reminder about our exclusive offer that ends in 24 hours...",
    openRate: "42%",
    clickRate: "15%",
    gradient: "from-pink-500 to-rose-500",
  },
];

const processSteps = [
  {
    icon: Users,
    title: "Customer Journey Analysis",
    description:
      "Deep dive into your customer's path from awareness to purchase, identifying key touchpoints and opportunities.",
  },
  {
    icon: Target,
    title: "Funnel & Email Design",
    description:
      "Create optimized funnels and email sequences that guide prospects through each stage of the buyer journey.",
  },
  {
    icon: Zap,
    title: "Implementation",
    description:
      "Set up automation workflows, landing pages, and tracking systems to execute your funnel strategy.",
  },
  {
    icon: BarChart3,
    title: "Optimization & Reporting",
    description:
      "Continuous monitoring, testing, and optimization to improve conversion rates and maximize ROI.",
  },
];

export default function FunnelDesignEmailPage() {
  const servicesRef = useRef(null);
  const funnelRef = useRef(null);
  const emailsRef = useRef(null);
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isFunnelInView = useInView(funnelRef, {
    once: true,
    margin: "-100px",
  });
  const isEmailsInView = useInView(emailsRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />

      <ServiceHero
        title="Funnel Design & Email Automation"
        subtitle="Turn Traffic into Loyal Customers"
        description="We build optimized conversion funnels and automated email systems that nurture and close leads with precision."
        gradient="from-blue-600 to-cyan-600"
        stats={[
          { label: "Average Conversion", value: "25%" },
          { label: "Email Open Rate", value: "42%" },
          { label: "ROI", value: "8.5x" },
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
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end funnel and email automation that converts visitors into
              customers and customers into advocates.
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

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
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

      {/* Funnel Stages */}
      <section ref={funnelRef} className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isFunnelInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Funnel Stages
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each stage of the funnel is optimized to move prospects closer to
              becoming customers.
            </p>
          </motion.div>

          <div className="space-y-8">
            {funnelStages.map((stage, index) => (
              <motion.div
                key={stage.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isFunnelInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stage.gradient} flex items-center justify-center mr-4`}
                      >
                        <span className="text-white font-bold text-lg">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {stage.name}
                        </h3>
                        <p className="text-gray-400">{stage.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-2xl font-bold bg-gradient-to-r ${stage.gradient} bg-clip-text text-transparent`}
                      >
                        {stage.conversion}
                      </div>
                      <div className="text-sm text-gray-400">
                        Conversion Rate
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stage.activities.map((activity, activityIndex) => (
                      <div
                        key={activityIndex}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${stage.gradient} mr-3`}
                        />
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>

                {index < funnelStages.length - 1 && (
                  <div className="flex justify-center my-4">
                    <ChevronDown size={24} className="text-blue-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Email UI */}
      <section
        ref={emailsRef}
        className="py-32 px-6 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isEmailsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Sample Email Sequences
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven email templates and sequences that convert prospects into
              customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sampleEmails.map((email, index) => (
              <motion.div
                key={email.type}
                initial={{ opacity: 0, y: 50 }}
                animate={isEmailsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${email.gradient} flex items-center justify-center mb-4`}
                  >
                    <Mail size={24} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">
                    {email.type}
                  </h3>

                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-1">
                      Subject Line:
                    </div>
                    <div className="text-sm text-gray-300 font-medium">
                      {email.subject}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-1">Preview:</div>
                    <div className="text-sm text-gray-300 italic">
                      {email.preview}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div
                        className={`text-lg font-bold bg-gradient-to-r ${email.gradient} bg-clip-text text-transparent`}
                      >
                        {email.openRate}
                      </div>
                      <div className="text-xs text-gray-400">Open Rate</div>
                    </div>
                    <div>
                      <div
                        className={`text-lg font-bold bg-gradient-to-r ${email.gradient} bg-clip-text text-transparent`}
                      >
                        {email.clickRate}
                      </div>
                      <div className="text-xs text-gray-400">Click Rate</div>
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
        subtitle="How We Build Converting Funnels"
        steps={processSteps}
        gradient="from-blue-400 to-cyan-400"
      />

      <ServiceCTA
        title="Ready to Build Your Converting Funnel?"
        subtitle="Let's create a funnel that turns your traffic into loyal customers."
        gradient="from-blue-600 to-cyan-600"
        primaryCTA="Get Started"
        secondaryCTA="Learn More"
      />
    </div>
  );
}
