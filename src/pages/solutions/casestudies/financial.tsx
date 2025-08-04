import { motion } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import CtaSection from "@/components/sections/CtaSection";
import { 
  FiShield, FiTrendingDown, FiClock, FiCheckCircle, FiAlertTriangle,
  FiBarChart, FiUsers, FiDatabase, FiTarget, FiAward, FiDollarSign
} from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function FinancialCaseStudy() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Financial Institution Success Story"
        subtitle="CASE STUDY"
        description="How a regional bank achieved 85% reduction in alert fatigue while strengthening compliance and security posture."
        buttonText="Schedule a Demo"
        buttonLink="/contact"
        height="70vh"
        showScene={false}
      />

      {/* Executive Summary */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-900/30 to-green-800/20 p-6 rounded-lg border border-green-700/30"
            >
              <div className="flex items-center mb-4">
                <FiTrendingDown className="text-green-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">85%</h3>
              </div>
              <p className="text-green-300 font-medium">Reduction in Alert Fatigue</p>
              <p className="text-gray-400 text-sm mt-2">From 1,200 to 180 daily alerts</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 p-6 rounded-lg border border-blue-700/30"
            >
              <div className="flex items-center mb-4">
                <FiClock className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">60%</h3>
              </div>
              <p className="text-blue-300 font-medium">Faster Incident Response</p>
              <p className="text-gray-400 text-sm mt-2">Average response time reduced</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-900/30 to-teal-800/20 p-6 rounded-lg border border-teal-700/30"
            >
              <div className="flex items-center mb-4">
                <FiShield className="text-teal-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">100%</h3>
              </div>
              <p className="text-teal-300 font-medium">Compliance Achievement</p>
              <p className="text-gray-400 text-sm mt-2">PCI DSS & SOX requirements</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-teal-400 font-medium mb-2 text-center">EXECUTIVE SUMMARY</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Challenge Met, Results Delivered</h2>
            <p className="text-gray-300 text-lg text-center">
              Regional Bank partnered with nullnetwork to modernize their security operations center, 
              reduce operational overhead, and meet stringent regulatory requirements while maintaining the highest 
              levels of customer data protection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-teal-400 font-medium mb-2">CLIENT OVERVIEW</p>
              <h2 className="text-3xl font-bold text-white mb-6">About Regional Bank</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Regional Bank is a mid-sized financial institution serving over 250,000 customers 
                  across multiple states with $8.5 billion in assets under management.
                </p>
                <p>
                  With 45 branch locations and a growing digital banking platform, the bank needed to ensure 
                  robust cybersecurity while meeting strict regulatory compliance requirements including PCI DSS, 
                  SOX, and state banking regulations.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                  <div className="flex items-center mb-2">
                    <FiUsers className="text-teal-400 mr-2" size={20} />
                    <span className="text-white font-medium">250K+</span>
                  </div>
                  <p className="text-gray-400 text-sm">Active Customers</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                  <div className="flex items-center mb-2">
                    <FiDollarSign className="text-teal-400 mr-2" size={20} />
                    <span className="text-white font-medium">$8.5B</span>
                  </div>
                  <p className="text-gray-400 text-sm">Assets Under Management</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-teal-500/20 rounded-lg border border-slate-700 overflow-hidden">
                <img 
                  src="../../assets/images/bank.jpg" 
                  alt="First National Regional Bank headquarters" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-teal-400 font-medium mb-2">THE CHALLENGE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Security Complexity at Scale</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              The bank faced increasing cybersecurity threats while managing multiple compliance requirements and operational constraints.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <FiAlertTriangle size={24} />,
                title: "Alert Overload",
                description: "Security analysts were overwhelmed with 1,200+ daily alerts, leading to alert fatigue and potential missed threats.",
                impact: "High risk of missing critical security incidents"
              },
              {
                icon: <FiClock size={24} />,
                title: "Slow Response Times",
                description: "Manual processes resulted in average incident response times of 4-6 hours, exceeding regulatory requirements.",
                impact: "Potential compliance violations and extended exposure"
              },
              {
                icon: <FiDatabase size={24} />,
                title: "Siloed Security Tools",
                description: "Multiple disconnected security solutions created visibility gaps and inefficient workflows.",
                impact: "Incomplete threat detection and analysis capabilities"
              },
              {
                icon: <FiTarget size={24} />,
                title: "Compliance Complexity",
                description: "Meeting PCI DSS, SOX, and banking regulations required extensive manual documentation and reporting.",
                impact: "Resource-intensive compliance management processes"
              }
            ].map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg"
              >
                <div className="p-3 rounded-full inline-flex items-center justify-center mb-4 bg-red-500/20 text-red-400">
                  {challenge.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{challenge.title}</h3>
                <p className="text-gray-400 mb-3">{challenge.description}</p>
                <div className="bg-red-900/20 border border-red-800/30 p-3 rounded">
                  <p className="text-red-300 text-sm font-medium">Impact: {challenge.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-teal-400 font-medium mb-2">THE SOLUTION</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">nullnetwork SOC as a Service</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              A comprehensive, cloud-native security operations platform designed specifically for financial institutions.
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                title: "Intelligent Alert Correlation",
                description: "Our AI-powered platform automatically correlates and prioritizes security alerts, reducing noise by 85% while ensuring critical threats are never missed.",
                features: [
                  "Machine learning-based threat prioritization",
                  "False positive reduction algorithms",
                  "Context-aware alert correlation",
                  "Customizable severity scoring"
                ],
                icon: <FiShield size={36} />
              },
              {
                title: "Automated Incident Response",
                description: "Streamlined incident response workflows with automated containment actions and guided remediation procedures specifically designed for banking environments.",
                features: [
                  "Pre-configured banking industry playbooks",
                  "Automated threat containment actions",
                  "Integration with existing security tools",
                  "Real-time escalation procedures"
                ],
                icon: <FiTarget size={36} />
              },
              {
                title: "Comprehensive Compliance Management",
                description: "Built-in compliance monitoring and reporting capabilities that automatically track and document adherence to financial regulations.",
                features: [
                  "PCI DSS continuous monitoring",
                  "SOX compliance reporting",
                  "Automated audit trail generation",
                  "Risk assessment dashboards"
                ],
                icon: <FiAward size={36} />
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Glassmorphism Container */}
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-teal-500/10 pointer-events-none"></div>
                  
                  {/* Content Grid */}
                  <div className="relative z-10 grid md:grid-cols-3 gap-8 items-stretch">
                    <div className={`w-full md:col-span-1 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                      <div className="h-64 md:h-full md:min-h-[300px] p-6 bg-gradient-to-br from-blue-900/40 to-teal-900/30 rounded-xl border border-blue-400/20 flex items-center justify-center backdrop-blur-sm">
                        <div className="text-teal-400">{solution.icon}</div>
                      </div>
                    </div>
                    
                    <div className="w-full md:col-span-2 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                      <p className="text-gray-200 mb-4">{solution.description}</p>
                      
                      <ul className="space-y-2">
                        {solution.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-teal-400 mr-3 mt-1">
                              <FiCheckCircle />
                            </span>
                            <span className="text-gray-200">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Benefits */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-teal-400 font-medium mb-2">RESULTS & BENEFITS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Measurable Impact</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Within 90 days of implementation, Regional Bank achieved significant improvements across all key metrics.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                metric: "85%",
                title: "Alert Fatigue Reduction",
                description: "Daily security alerts reduced from 1,200 to 180 through intelligent correlation",
                color: "green"
              },
              {
                metric: "60%",
                title: "Faster Response Times",
                description: "Average incident response time decreased from 4-6 hours to 1.5-2 hours",
                color: "blue"
              },
              {
                metric: "100%",
                title: "Compliance Achievement",
                description: "Full compliance with PCI DSS and SOX requirements maintained continuously",
                color: "teal"
              },
              {
                metric: "$2.1M",
                title: "Annual Cost Savings",
                description: "Reduced operational costs through automation and improved efficiency",
                color: "green"
              },
              {
                metric: "99.8%",
                title: "Threat Detection Rate",
                description: "Enhanced threat detection accuracy with minimal false positives",
                color: "blue"
              },
              {
                metric: "24/7",
                title: "Continuous Monitoring",
                description: "Round-the-clock security monitoring with expert analyst support",
                color: "teal"
              }
            ].map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg text-center"
              >
                <div className={`text-4xl font-bold mb-2 ${
                  result.color === 'green' ? 'text-green-400' :
                  result.color === 'blue' ? 'text-blue-400' : 'text-teal-400'
                }`}>
                  {result.metric}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{result.title}</h3>
                <p className="text-gray-400 text-sm">{result.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-teal-400 font-medium mb-2">CLIENT TESTIMONIAL</p>
            <blockquote className="text-2xl md:text-3xl font-light text-white mb-8 leading-relaxed">
              "nullnetwork transformed our security operations from reactive to proactive. The reduction in alert fatigue 
              allowed our team to focus on real threats, while automated compliance reporting saved us countless hours 
              during audit season."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <p className="text-lg font-semibold text-white">Sarah Mitchell</p>
                <p className="text-teal-400">Chief Information Security Officer</p>
                <p className="text-gray-400">Regional Bank</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-teal-400 font-medium mb-2">IMPLEMENTATION</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">90-Day Deployment Timeline</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our phased approach ensured minimal disruption while delivering immediate value.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Timeline connector */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
            
            {[
              {
                phase: "Phase 1",
                duration: "Days 1-30",
                title: "Infrastructure Setup",
                tasks: [
                  "Platform deployment and configuration",
                  "Integration with existing security tools",
                  "Initial data source connections",
                  "Basic monitoring rules implementation"
                ]
              },
              {
                phase: "Phase 2",
                duration: "Days 31-60",
                title: "Customization & Training",
                tasks: [
                  "Banking-specific playbook configuration",
                  "Compliance rule customization",
                  "Staff training and knowledge transfer",
                  "Alert tuning and optimization"
                ]
              },
              {
                phase: "Phase 3",
                duration: "Days 61-90",
                title: "Full Operations",
                tasks: [
                  "24/7 monitoring activation",
                  "Advanced analytics enablement",
                  "Automated response implementation",
                  "Performance optimization and fine-tuning"
                ]
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative z-10 bg-slate-900/50 border border-slate-800 p-6 rounded-lg"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center text-white font-bold text-sm mb-4 mx-auto">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1 text-center">{phase.phase}</h3>
                <p className="text-teal-400 text-sm mb-4 text-center">{phase.duration}</p>
                <h4 className="text-xl font-bold text-white mb-3 text-center">{phase.title}</h4>
                <ul className="space-y-2">
                  {phase.tasks.map((task, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="text-teal-400 mr-2 mt-0.5">•</span>
                      <span className="text-gray-400">{task}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Ready to achieve similar results?"
        description="See how nullnetwork can help your financial institution reduce alert fatigue, improve compliance, and strengthen security posture."
        primaryButtonText="Schedule a Demo"
        primaryButtonLink="/contact"
      />
    </>
  );
}