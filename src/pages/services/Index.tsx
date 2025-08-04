import { motion } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import FeatureSection from "@/components/sections/FeatureSection";
import CtaSection from "@/components/sections/CtaSection";
import { 
  FiShield, FiEye, FiActivity, FiServer, FiFlag, FiAlertCircle, 
  FiBarChart, FiCheckCircle, FiFileText, FiCloud, FiDatabase, FiTarget, FiSettings, FiBell, FiSearch
} from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="SOC as a Service"
        subtitle="OUR SERVICES"
        description="Comprehensive security monitoring and management for your entire IT infrastructure, powered by advanced AI and machine learning."
        buttonText="Get Started"
        buttonLink="/contact"
        height="70vh"
        align="left"
      />

      {/* Core Services */}
      <FeatureSection
        title="Core SOC Capabilities"
        subtitle="WHAT WE OFFER"
        description="Our platform provides comprehensive visibility across your entire digital ecosystem with advanced security monitoring and response capabilities."
        features={[
          {
                    icon: <FiEye size={24} />,
                    title: "Threat Detection & Monitoring",
                    description:
                      "Continuous threat detection and monitoring that proactively identifies anomalies, malicious behavior, and potential breaches across your IT environment."
                  },
                  {
                    icon: <FiActivity size={24} />,
                    title: "Security Orchestration, Automation & Response",
                    description:
                      "Automated security orchestration and response that streamlines threat detection, investigation, and remediation across your security tools and workflows."
                  },
                  {
                    icon: <FiShield size={24} />,
                    title: "Incident Management & Service Desk",
                    description:
                      "Centralized incident management and service desk support to quickly track, resolve, and document security issues and IT service requests."
                  },
                  {
                    icon: <FiServer size={24} />,
                    title: "Threat Intelligence Sharing & Analysis",
                    description:
                      "Collaborative threat intelligence sharing and analysis that enhances situational awareness and enables proactive defense against emerging threats."
                  },
                  {
                    icon: <FiFlag size={24} />,
                    title: "Reporting & Analytics",
                    description:
                      "Comprehensive reporting and analytics that deliver actionable insights into security posture, incident trends, and compliance status."
                  },
                  {
                    icon: <FiAlertCircle size={24} />,
                    title: "24/7 Monitoring & Support",
                    description:
                      "Round-the-clock monitoring and expert support to ensure rapid detection, response, and resolution of security incidents at any time."
                  },
                    {
                              icon: <FiTarget size={24} />,
                              title: "Vulnerability Detection and Assessment",
                              description:
                                "Proactive identification and evaluation of system weaknesses through continuous scanning, helping reduce exposure to known and emerging threats."
                            },
                                       {
                              icon: <FiSettings size={24} />,
                              title: "Security Configuration Assessment",
                              description:
                                "Evaluate system and application settings against industry best practices to identify misconfigurations that could lead to security vulnerabilities."
                            },
                                    {
                              icon: <FiCheckCircle size={24} />,
                              title: "Compliance Monitoring",
                              description:
                                "Track and assess security controls continuously to ensure adherence to regulatory standards such as PCI DSS, GDPR, HIPAA, and more."
                            },
                              {
                              icon: <FiBell size={24} />,
                              title: "Real-time Alerts",
                              description:
                                "Instant notifications via WhatsApp, Email, and Microsoft Teams to ensure rapid awareness and response to critical security events as they occur."
                            },
                             {
                              icon: <FiSearch size={24} />,
                              title: "AI Enhanced Analysis",
                              description:
                                "Leverage artificial intelligence to detect anomalies, predict threats, and uncover hidden patterns that traditional tools might miss."
                            },
                             {
                              icon: <FiCloud  size={24} />,
                              title: "Multi-Cloud Monitoring Support",
                              description:
                                "Unified visibility and security monitoring across AWS, Azure, GCP, and hybrid environments to detect threats and maintain compliance seamlessly."
                            }
        ]}
      />

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-teal-400 font-medium mb-2">HOW IT WORKS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple Implementation, Powerful Protection</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our cloud-native platform integrates seamlessly with your existing infrastructure in four simple steps.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent transform -translate-y-1/2 z-0"></div>
            
            {[
              {
                number: "01",
                title: "Connect",
                description: "Deploy lightweight collectors to gather logs and data from your systems and cloud environments."
              },
              {
                number: "02",
                title: "Analyze",
                description: "Our platform automatically analyzes your data using AI and machine learning to identify threats."
              },
              {
                number: "03",
                title: "Alert",
                description: "Receive real-time alerts for suspicious activities and potential security incidents."
              },
              {
                number: "04",
                title: "Respond",
                description: "Follow guided response procedures or leverage automated actions to contain threats quickly."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center text-white font-bold text-xl mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-center">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-teal-400 font-medium mb-2">ADVANCED CAPABILITIES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Beyond Traditional SOC</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our platform extends beyond traditional SOC with cutting-edge features that provide deeper security insights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiCloud size={24} />,
                title: "Cloud Security Monitoring",
                description: "Native integration with major cloud providers (AWS, Azure, GCP) for comprehensive cloud security monitoring."
              },
              {
                icon: <FiDatabase size={24} />,
                title: "Threat Intelligence",
                description: "Integration with global threat feeds to identify known bad actors and emerging threats targeting your industry."
              },
              {
                icon: <FiCheckCircle size={24} />,
                title: "Security Posture Assessment",
                description: "Continuous evaluation of your security controls and configurations against best practices and compliance requirements."
              },
              {
                icon: <FiFileText size={24} />,
                title: "User Behavior Analytics",
                description: "Advanced analysis of user activities to identify insider threats and compromised accounts."
              },
              {
                icon: <FiShield size={24} />,
                title: "Automated Response",
                description: "Configurable automated responses to common security events to contain threats without manual intervention."
              },
              {
                icon: <FiBarChart size={24} />,
                title: "Predictive Analysis",
                description: "AI-driven predictive security analytics to anticipate potential vulnerabilities before they're exploited."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg"
              >
                <div className="p-3 rounded-full inline-flex items-center justify-center mb-4 bg-blue-500/20 text-teal-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Callout */}
      <section className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12 rounded-lg border border-slate-700">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-teal-400 font-medium mb-2">FLEXIBLE PRICING</p>
                <h2 className="text-3xl font-bold text-white mb-4">Plans for Organizations of All Sizes</h2>
                <p className="text-gray-300 mb-6">
                  From startups to enterprises, our pricing scales with your needs. Pay only for what you use with
                  transparent pricing and no hidden fees.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:opacity-90">
                    Get Custom Quote
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {[
                  "No upfront costs or capital expenditure",
                  "Transparent per-device or per-user pricing",
                  "Volume discounts for larger deployments",
                  "All features included in every plan",
                  "Customizable add-ons for specific needs"
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <span className="text-teal-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Ready to enhance your security posture?"
        description="Contact us today to schedule a demo and see how our SOC as a Service can transform your security operations."
        primaryButtonText="Schedule a Demo"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Solutions"
        secondaryButtonLink="/solutions"
      />
    </>
  );
}