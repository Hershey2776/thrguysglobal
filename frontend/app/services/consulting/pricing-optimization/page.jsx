"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Target,
  DollarSign,
  BarChart3,
  TrendingUp,
  CheckCircle,
  Clock,
  Users,
  Calculator,
} from "lucide-react";
import ServiceHero from "../../components/service-hero";
import ServiceProcess from "../../components/service-process";
import ServiceCTA from "../../components/service-cta";
import Navigation from "../../../components/navigation";

const services = [
  {
    icon: Target,
    title: "Pricing Strategy",
    description:
      "Comprehensive pricing strategy development that maximizes revenue and market positioning.",
    features: [
      "Value-Based Pricing",
      "Competitive Analysis",
      "Market Positioning",
      "Pricing Models",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: DollarSign,
    title: "Revenue Optimization",
    description:
      "Revenue optimization strategies that identify and capture additional value from existing customers.",
    features: [
      "Revenue Analysis",
      "Optimization Strategy",
      "Implementation Support",
      "Performance Tracking",
    ],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: BarChart3,
    title: "Pricing Analytics",
    description:
      "Data-driven pricing analytics that provide insights for optimal pricing decisions.",
    features: [
      "Price Elasticity",
      "Customer Segmentation",
      "Demand Analysis",
      "ROI Measurement",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: TrendingUp,
    title: "Dynamic Pricing",
    description:
      "Dynamic pricing strategies that adapt to market conditions and maximize revenue opportunities.",
    features: [
      "Real-time Pricing",
      "Market Monitoring",
      "Automated Adjustments",
      "Performance Optimization",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
];

const pricingModels = [
  {
    model: "Value-Based Pricing",
    description: "Pricing based on perceived customer value",
    advantages: [
      "Higher profit margins",
      "Customer value alignment",
      "Differentiation potential",
      "Flexible pricing",
    ],
    challenges: [
      "Complex value assessment",
      "Customer education needed",
      "Market research required",
      "Implementation complexity",
    ],
    bestFor: "High-value products, differentiated offerings, B2B services",
    implementation: "3-6 months",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    model: "Competitive Pricing",
    description: "Pricing based on competitor analysis",
    advantages: [
      "Market alignment",
      "Easier implementation",
      "Reduced risk",
      "Clear benchmarks",
    ],
    challenges: [
      "Lower profit margins",
      "Price wars risk",
      "Limited differentiation",
      "Dependency on competitors",
    ],
    bestFor: "Commodity products, price-sensitive markets, new entrants",
    implementation: "1-3 months",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    model: "Cost-Plus Pricing",
    description: "Pricing based on costs plus markup",
    advantages: [
      "Simple calculation",
      "Guaranteed margins",
      "Easy to understand",
      "Predictable profits",
    ],
    challenges: [
      "May miss market value",
      "Cost focus over value",
      "Limited flexibility",
      "Market disconnect",
    ],
    bestFor: "Manufacturing, retail, service businesses",
    implementation: "1-2 months",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    model: "Dynamic Pricing",
    description: "Real-time pricing based on demand and supply",
    advantages: [
      "Revenue maximization",
      "Market responsiveness",
      "Inventory optimization",
      "Competitive advantage",
    ],
    challenges: [
      "Complex implementation",
      "Technology requirements",
      "Customer perception",
      "Regulatory considerations",
    ],
    bestFor: "E-commerce, travel, hospitality, seasonal products",
    implementation: "4-8 months",
    gradient: "from-pink-500 to-rose-500",
  },
];

const optimizationStrategies = [
  {
    strategy: "Price Elasticity Analysis",
    description: "Understanding how price changes affect demand",
    metrics: [
      "Demand sensitivity",
      "Revenue impact",
      "Profit optimization",
      "Market response",
    ],
    tools: [
      "Statistical analysis",
      "A/B testing",
      "Customer surveys",
      "Historical data",
    ],
    timeline: "2-4 weeks",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    strategy: "Customer Segmentation",
    description: "Differentiated pricing for different customer segments",
    metrics: [
      "Segment profitability",
      "Price sensitivity",
      "Customer lifetime value",
      "Conversion rates",
    ],
    tools: [
      "Data analytics",
      "Behavioral analysis",
      "Survey research",
      "Purchase patterns",
    ],
    timeline: "3-6 weeks",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    strategy: "Bundle Optimization",
    description: "Optimizing product bundles and package pricing",
    metrics: [
      "Bundle performance",
      "Cross-sell rates",
      "Average order value",
      "Customer satisfaction",
    ],
    tools: [
      "Bundle analysis",
      "Customer feedback",
      "Sales data",
      "Market research",
    ],
    timeline: "4-8 weeks",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    strategy: "Promotional Pricing",
    description: "Strategic use of discounts and promotions",
    metrics: [
      "Promotion effectiveness",
      "Revenue lift",
      "Customer acquisition",
      "Retention impact",
    ],
    tools: [
      "Promotion tracking",
      "Customer analytics",
      "A/B testing",
      "ROI measurement",
    ],
    timeline: "2-6 weeks",
    gradient: "from-pink-500 to-rose-500",
  },
];

const processSteps = [
  {
    icon: Target,
    title: "Pricing Assessment",
    description:
      "Comprehensive assessment of current pricing strategy and market positioning.",
  },
  {
    icon: DollarSign,
    title: "Strategy Development",
    description:
      "Development of optimized pricing strategy based on value, competition, and market dynamics.",
  },
  {
    icon: BarChart3,
    title: "Implementation Planning",
    description:
      "Detailed implementation planning with clear timelines, resources, and success metrics.",
  },
  {
    icon: TrendingUp,
    title: "Optimization & Monitoring",
    description:
      "Continuous optimization and monitoring of pricing performance with data-driven insights.",
  },
];

export default function PricingOptimizationPage() {
  const servicesRef = useRef(null);
  const modelsRef = useRef(null);
  const strategiesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isModelsInView = useInView(modelsRef, {
    once: true,
    margin: "-100px",
  });
  const isStrategiesInView = useInView(strategiesRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />

      <ServiceHero
        title="Pricing Optimization"
        subtitle="Maximize Revenue Through Strategic Pricing"
        description="Data-driven pricing optimization that maximizes revenue, improves profitability, and enhances market positioning."
        gradient="from-green-600 to-blue-600"
        stats={[
          { label: "Revenue Increase", value: "25-40%" },
          { label: "Profit Margin", value: "15-30%" },
          { label: "Customer Retention", value: "95%" },
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
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive pricing optimization services that maximize revenue
              and profitability.
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

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
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

      {/* Pricing Models */}
      <section ref={modelsRef} className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isModelsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Pricing Model Comparison
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic pricing models with detailed analysis of advantages,
              challenges, and implementation requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pricingModels.map((model, index) => (
              <motion.div
                key={model.model}
                initial={{ opacity: 0, y: 50 }}
                animate={isModelsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${model.gradient} flex items-center justify-center`}
                    >
                      <Calculator size={24} className="text-white" />
                    </div>
                    <div className="text-xs text-gray-400">
                      {model.implementation}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">
                    {model.model}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {model.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-green-400 mb-2">
                        Advantages:
                      </h4>
                      <div className="space-y-1">
                        {model.advantages.map((advantage, advantageIndex) => (
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
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-red-400 mb-2">
                        Challenges:
                      </h4>
                      <div className="space-y-1">
                        {model.challenges.map((challenge, challengeIndex) => (
                          <div
                            key={challengeIndex}
                            className="flex items-center text-xs text-gray-400"
                          >
                            <div className="w-1 h-1 rounded-full bg-red-400 mr-2" />
                            {challenge}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">
                        Best For:
                      </h4>
                      <p className="text-xs text-gray-400">{model.bestFor}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Strategies */}
      <section
        ref={strategiesRef}
        className="py-32 px-6 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isStrategiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Optimization Strategies
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Data-driven pricing optimization strategies with detailed metrics
              and implementation tools.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {optimizationStrategies.map((strategy, index) => (
              <motion.div
                key={strategy.strategy}
                initial={{ opacity: 0, y: 50 }}
                animate={isStrategiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${strategy.gradient} flex items-center justify-center`}
                    >
                      <BarChart3 size={24} className="text-white" />
                    </div>
                    <div className="text-xs text-gray-400">
                      {strategy.timeline}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">
                    {strategy.strategy}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {strategy.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-green-400 mb-2">
                        Key Metrics:
                      </h4>
                      <div className="space-y-1">
                        {strategy.metrics.map((metric, metricIndex) => (
                          <div
                            key={metricIndex}
                            className="flex items-center text-xs text-gray-400"
                          >
                            <CheckCircle
                              size={12}
                              className="mr-2 text-green-400"
                            />
                            {metric}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">
                        Tools & Methods:
                      </h4>
                      <div className="space-y-1">
                        {strategy.tools.map((tool, toolIndex) => (
                          <div
                            key={toolIndex}
                            className="flex items-center text-xs text-gray-400"
                          >
                            <div className="w-1 h-1 rounded-full bg-blue-400 mr-2" />
                            {tool}
                          </div>
                        ))}
                      </div>
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
        subtitle="How We Optimize Your Pricing"
        steps={processSteps}
        gradient="from-green-400 to-blue-400"
      />

      <ServiceCTA
        title="Ready to Optimize Your Pricing?"
        subtitle="Let's develop a pricing strategy that maximizes your revenue and market positioning."
        gradient="from-green-600 to-blue-600"
        primaryCTA="Get Started"
        secondaryCTA="Learn More"
      />
    </div>
  );
}
