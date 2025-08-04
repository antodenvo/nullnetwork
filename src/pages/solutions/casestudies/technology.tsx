import { motion } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import CtaSection from "@/components/sections/CtaSection";
import { 
  FiShield, FiZap, FiClock, FiCheckCircle, FiAlertTriangle,
  FiActivity, FiUsers, FiDatabase, FiTarget, FiAward, FiGlobe, FiTrendingUp, FiServer
} from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function TechCompanyCaseStudy() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Tech Company Success Story"
        subtitle="CASE STUDY"
        description="How a rapidly growing SaaS provider achieved 99.9% service uptime and secured their global infrastructure while scaling from 10K to 1M+ users."
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
                <FiActivity className="text-green-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">99.9%</h3>
              </div>
              <p className="text-green-300 font-medium">Service Uptime</p>
              <p className="text-gray-400 text-sm mt-2">From 97.2% to 99.9% reliability</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 p-6 rounded-lg border border-blue-700/30"
            >
              <div className="flex items-center mb-4">
                <FiZap className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">85%</h3>
              </div>
              <p className="text-blue-300 font-medium">Faster Incident Response</p>
              <p className="text-gray-400 text-sm mt-2">From 30 to 4.5 minutes MTTR</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-900/30 to-teal-800/20 p-6 rounded-lg border border-teal-700/30"
            >
              <div className="flex items-center mb-4">
                <FiGlobe className="text-teal-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">10x</h3>
              </div>
              <p className="text-teal-300 font-medium">User Base Growth</p>
              <p className="text-gray-400 text-sm mt-2">Scaled from 10K to 1M+ users</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Scaling Security with Growth</h2>
            <p className="text-gray-300 text-lg text-center">
              Tech Company partnered with nullnetwork to transform their security operations, achieve enterprise-grade 
              reliability, and maintain robust protection while rapidly scaling their SaaS platform across global markets.
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
              <h2 className="text-3xl font-bold text-white mb-6">About Tech Company</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Tech Company is a fast-growing SaaS provider offering collaborative project management 
                  solutions to teams worldwide. Their platform serves over 1 million active users across 
                  150+ countries, processing millions of transactions daily.
                </p>
                <p>
                  Founded in 2019, the company experienced explosive growth during the remote work boom, 
                  scaling from 10,000 to over 1 million users in just 18 months. This rapid expansion 
                  created significant security and reliability challenges that threatened their market position.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                  <div className="flex items-center mb-2">
                    <FiUsers className="text-teal-400 mr-2" size={20} />
                    <span className="text-white font-medium">1M+</span>
                  </div>
                  <p className="text-gray-400 text-sm">Active Users</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                  <div className="flex items-center mb-2">
                    <FiGlobe className="text-teal-400 mr-2" size={20} />
                    <span className="text-white font-medium">150+</span>
                  </div>
                  <p className="text-gray-400 text-sm">Countries Served</p>
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
                  src="../../assets/images/technology.jpg" 
                  alt="Technology" 
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Scaling Pains and Security Gaps</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Rapid user growth exposed critical infrastructure vulnerabilities and operational limitations that threatened service reliability and customer trust.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <FiTrendingUp size={24} />,
                title: "Rapid Scale Challenges",
                description: "10x user growth in 18 months overwhelmed existing security infrastructure, causing frequent service disruptions and performance issues.",
                impact: "97.2% uptime falling short of enterprise SLA requirements"
              },
              {
                icon: <FiAlertTriangle size={24} />,
                title: "Slow Incident Response",
                description: "Manual monitoring and response processes took 30+ minutes to detect and resolve critical issues, leading to extended downtime.",
                impact: "Customer churn due to reliability concerns and missed SLA commitments"
              },
              {
                icon: <FiDatabase size={24} />,
                title: "Multi-Region Security Gaps",
                description: "Global expansion created inconsistent security policies across regions, with limited visibility into distributed infrastructure.",
                impact: "Compliance risks and potential regulatory violations in international markets"
              },
              {
                icon: <FiTarget size={24} />,
                title: "Limited Security Resources",
                description: "Small security team couldn't scale with business growth, lacking 24/7 coverage for global operations across time zones.",
                impact: "Unmonitored attack windows and delayed threat response capabilities"
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">nullnetwork Scale-Ready Security Platform</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              A cloud-native security operations platform designed for high-growth SaaS companies with global scalability and enterprise-grade reliability.
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                title: "Auto-Scaling Threat Detection",
                description: "Cloud-native security infrastructure that automatically scales with user growth, maintaining consistent protection levels across all regions and traffic volumes.",
                features: [
                  "Dynamic resource allocation based on traffic patterns",
                  "Global threat intelligence with regional customization",
                  "Real-time performance monitoring and optimization",
                  "Predictive scaling for traffic surge management"
                ],
                icon: <FiZap size={36} />
              },
              {
                title: "24/7 Global SOC Operations",
                description: "Round-the-clock security monitoring by experts across multiple time zones, ensuring continuous protection and rapid incident response for global operations.",
                features: [
                  "Follow-the-sun security operations model",
                  "4.5-minute average incident response time",
                  "Automated escalation and notification systems",
                  "Multi-language support for global compliance"
                ],
                icon: <FiGlobe size={36} />
              },
              {
                title: "High-Availability Architecture",
                description: "Redundant, fault-tolerant security infrastructure designed to maintain 99.9%+ uptime with automatic failover and disaster recovery capabilities.",
                features: [
                  "Multi-region deployment with active-active failover",
                  "Zero-downtime security updates and maintenance",
                  "Automated backup and recovery systems",
                  "Performance SLA monitoring and reporting"
                ],
                icon: <FiShield size={36} />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Enterprise-Grade Reliability at Scale</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Within 90 days of implementation, Tech Company achieved enterprise SLA standards while continuing their rapid growth trajectory.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                metric: "99.9%",
                title: "Service Uptime",
                description: "Improved from 97.2% to 99.9% uptime, meeting enterprise SLA requirements",
                color: "green"
              },
              {
                metric: "85%",
                title: "Faster Response",
                description: "Mean time to resolution reduced from 30 minutes to 4.5 minutes",
                color: "blue"
              },
              {
                metric: "10x",
                title: "Scale Capacity",
                description: "Successfully supported 10x user growth without service degradation",
                color: "teal"
              },
              {
                metric: "$2.3M",
                title: "Revenue Protected",
                description: "Annual revenue protected through improved uptime and customer retention",
                color: "green"
              },
              {
                metric: "92%",
                title: "Cost Efficiency",
                description: "Reduced security operations costs compared to in-house scaling",
                color: "blue"
              },
              {
                metric: "24/7",
                title: "Global Coverage",
                description: "Round-the-clock security monitoring across all time zones and regions",
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
              "nullnetwork enabled us to scale from 10K to 1M+ users while actually improving our security posture. 
              The 99.9% uptime achievement was crucial for landing enterprise clients, and their auto-scaling 
              architecture means we never have to worry about security keeping pace with our growth."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <p className="text-lg font-semibold text-white">Sarah Martinez</p>
                <p className="text-teal-400">Chief Technology Officer</p>
                <p className="text-gray-400">Tech Company</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">90-Day Scale-Ready Deployment</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our agile deployment methodology ensured continuous service availability while building enterprise-grade security capabilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Timeline connector */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
            
            {[
              {
                phase: "Phase 1",
                duration: "Days 1-30",
                title: "Infrastructure Assessment",
                tasks: [
                  "Current architecture evaluation",
                  "Performance bottleneck identification",
                  "Security gap analysis",
                  "Scalability requirements planning"
                ]
              },
              {
                phase: "Phase 2",
                duration: "Days 31-60",
                title: "Platform Integration",
                tasks: [
                  "Cloud-native security deployment",
                  "Multi-region configuration setup",
                  "Automated scaling implementation",
                  "Team training and knowledge transfer"
                ]
              },
              {
                phase: "Phase 3",
                duration: "Days 61-90",
                title: "Full Operations",
                tasks: [
                  "24/7 global SOC activation",
                  "Enterprise SLA monitoring",
                  "Automated response optimization",
                  "Performance validation and reporting"
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
        title="Ready to scale your security operations?"
        description="Discover how nullnetwork can help your growing tech company achieve enterprise-grade reliability, maintain 99.9% uptime, and scale security operations globally."
        primaryButtonText="Schedule a Demo"
        primaryButtonLink="/contact"
      />
    </>
  );
}