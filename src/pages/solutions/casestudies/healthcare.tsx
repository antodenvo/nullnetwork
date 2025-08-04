import { motion } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import CtaSection from "@/components/sections/CtaSection";
import { 
  FiShield, FiZap, FiClock, FiCheckCircle, FiAlertTriangle,
  FiActivity, FiUsers, FiDatabase, FiTarget, FiAward, FiHeart
} from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HealthcareCaseStudy() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Healthcare Provider Success Story"
        subtitle="CASE STUDY"
        description="How a major hospital network achieved 60% faster threat detection while strengthening patient data security and HIPAA compliance."
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
                <FiZap className="text-green-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">60%</h3>
              </div>
              <p className="text-green-300 font-medium">Faster Threat Detection</p>
              <p className="text-gray-400 text-sm mt-2">From 45 minutes to 18 minutes</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 p-6 rounded-lg border border-blue-700/30"
            >
              <div className="flex items-center mb-4">
                <FiShield className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">100%</h3>
              </div>
              <p className="text-blue-300 font-medium">HIPAA Compliance</p>
              <p className="text-gray-400 text-sm mt-2">Full regulatory adherence</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-900/30 to-teal-800/20 p-6 rounded-lg border border-teal-700/30"
            >
              <div className="flex items-center mb-4">
                <FiActivity className="text-teal-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">99.9%</h3>
              </div>
              <p className="text-teal-300 font-medium">System Uptime</p>
              <p className="text-gray-400 text-sm mt-2">Zero patient care disruption</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Protecting Patient Data at Scale</h2>
            <p className="text-gray-300 text-lg text-center">
              Healthcare Provider partnered with nullnetwork to enhance their cybersecurity posture, 
              accelerate threat detection, and maintain strict HIPAA compliance while ensuring uninterrupted 
              patient care across their multi-facility healthcare system.
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
              <h2 className="text-3xl font-bold text-white mb-6">About Healthcare Provider</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Healthcare Provider is a comprehensive healthcare system serving over 500,000 patients 
                  annually across 12 hospitals and 85 outpatient clinics in the metropolitan area.
                </p>
                <p>
                  With over 15,000 employees and handling millions of sensitive patient records, the network 
                  required robust cybersecurity infrastructure to protect PHI while maintaining operational 
                  efficiency and meeting stringent HIPAA requirements.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                  <div className="flex items-center mb-2">
                    <FiUsers className="text-teal-400 mr-2" size={20} />
                    <span className="text-white font-medium">500K+</span>
                  </div>
                  <p className="text-gray-400 text-sm">Annual Patients</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                  <div className="flex items-center mb-2">
                    <FiHeart className="text-teal-400 mr-2" size={20} />
                    <span className="text-white font-medium">12</span>
                  </div>
                  <p className="text-gray-400 text-sm">Hospital Facilities</p>
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
                  src="../../assets/images/healthcare.jpg" 
                  alt="Healthcare Provider medical center" 
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Healthcare Security at Scale</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              The hospital network faced increasing cyber threats targeting patient data while maintaining 24/7 operations and strict regulatory compliance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <FiClock size={24} />,
                title: "Slow Threat Detection",
                description: "Legacy security systems took 45+ minutes to detect and analyze potential threats, creating extended exposure windows.",
                impact: "High risk of data breaches and patient privacy violations"
              },
              {
                icon: <FiAlertTriangle size={24} />,
                title: "Complex Compliance Requirements",
                description: "Meeting HIPAA, HITECH, and state healthcare regulations required extensive manual processes and documentation.",
                impact: "Resource-intensive compliance management and audit preparation"
              },
              {
                icon: <FiDatabase size={24} />,
                title: "Fragmented Security Infrastructure",
                description: "Multiple disconnected security tools across facilities created visibility gaps and inconsistent protection levels.",
                impact: "Incomplete threat visibility and inconsistent security posture"
              },
              {
                icon: <FiTarget size={24} />,
                title: "24/7 Operational Requirements",
                description: "Critical patient care systems required continuous availability while maintaining security updates and monitoring.",
                impact: "Potential disruption to patient care during security incidents"
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">nullnetwork Healthcare Security Platform</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              A specialized, HIPAA-compliant security operations platform designed for healthcare environments with zero-downtime deployment.
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                title: "Real-Time Threat Detection",
                description: "Advanced AI-powered threat detection specifically tuned for healthcare environments, identifying malicious activity in under 18 minutes with minimal false positives.",
                features: [
                  "Healthcare-specific threat intelligence",
                  "Medical IoT device monitoring",
                  "Patient data access anomaly detection",
                  "Ransomware prevention algorithms"
                ],
                icon: <FiZap size={36} />
              },
              {
                title: "HIPAA-Compliant Operations",
                description: "Built-in compliance monitoring and automated documentation that ensures continuous adherence to healthcare regulations without impacting patient care.",
                features: [
                  "Automated HIPAA audit trail generation",
                  "PHI access monitoring and alerting",
                  "Breach notification automation",
                  "Risk assessment dashboards"
                ],
                icon: <FiShield size={36} />
              },
              {
                title: "Zero-Downtime Security",
                description: "Continuous protection with automated response capabilities that maintain system availability while neutralizing threats to ensure uninterrupted patient care.",
                features: [
                  "Non-intrusive monitoring deployment",
                  "Automated incident isolation",
                  "24/7 expert healthcare SOC support",
                  "Failover and redundancy systems"
                ],
                icon: <FiActivity size={36} />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Transformative Healthcare Security</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Within 60 days of implementation, Healthcare Provider achieved remarkable improvements in security effectiveness and operational efficiency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                metric: "60%",
                title: "Faster Threat Detection",
                description: "Average threat detection time reduced from 45 minutes to 18 minutes",
                color: "green"
              },
              {
                metric: "100%",
                title: "HIPAA Compliance",
                description: "Full compliance with HIPAA, HITECH, and healthcare regulations maintained",
                color: "blue"
              },
              {
                metric: "99.9%",
                title: "System Uptime",
                description: "Zero disruption to patient care systems during security operations",
                color: "teal"
              },
              {
                metric: "$1.8M",
                title: "Annual Risk Reduction",
                description: "Estimated annual savings from prevented security incidents and breaches",
                color: "green"
              },
              {
                metric: "95%",
                title: "False Positive Reduction",
                description: "Significant reduction in security alert noise through AI-powered analysis",
                color: "blue"
              },
              {
                metric: "24/7",
                title: "Healthcare SOC Support",
                description: "Round-the-clock monitoring by healthcare security specialists",
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
              "nullnetwork's healthcare-focused approach gave us the confidence that patient data is protected around the clock. 
              The 60% improvement in threat detection speed means we can respond to incidents before they impact patient care, 
              and the automated HIPAA compliance reporting has streamlined our audit processes significantly."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <p className="text-lg font-semibold text-white">Dr. Michael Chen</p>
                <p className="text-teal-400">Chief Information Security Officer</p>
                <p className="text-gray-400">Healthcare Provider</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">60-Day Zero-Downtime Deployment</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our healthcare-specific deployment methodology ensured continuous patient care throughout the implementation process.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Timeline connector */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
            
            {[
              {
                phase: "Phase 1",
                duration: "Days 1-20",
                title: "Assessment & Planning",
                tasks: [
                  "Healthcare environment assessment",
                  "HIPAA compliance gap analysis",
                  "Non-intrusive sensor deployment",
                  "Baseline security posture establishment"
                ]
              },
              {
                phase: "Phase 2",
                duration: "Days 21-40",
                title: "Platform Integration",
                tasks: [
                  "Medical system integration setup",
                  "Healthcare-specific rule configuration",
                  "Staff training and certification",
                  "Compliance workflow automation"
                ]
              },
              {
                phase: "Phase 3",
                duration: "Days 41-60",
                title: "Full Operations",
                tasks: [
                  "24/7 healthcare SOC activation",
                  "Real-time threat detection enablement",
                  "Automated response implementation",
                  "Performance optimization and validation"
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
        title="Ready to secure your healthcare environment?"
        description="Discover how nullnetwork can help your healthcare organization accelerate threat detection, maintain HIPAA compliance, and protect patient data without disrupting care."
        primaryButtonText="Schedule a Demo"
        primaryButtonLink="/contact"
      />
    </>
  );
}