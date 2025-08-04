import { motion } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import FeatureSection from "@/components/sections/FeatureSection";
import CtaSection from "@/components/sections/CtaSection";
import { 
  FiLock, FiServer, FiCpu, FiFile, FiPackage, FiGlobe, FiCloud, FiShield, FiZap,
  FiCreditCard, FiActivity, FiGrid, FiTrendingUp, FiDatabase, FiCheck
} from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Solutions() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Industry-Specific Security Solutions"
        subtitle="OUR SOLUTIONS"
        description="Tailored security monitoring and threat detection solutions designed for the unique challenges of your industry."
        buttonText="Get a Free Quote"
        buttonLink = '/contact'
        height="70vh"
      />

      {/* Industry Solutions */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-teal-400 font-medium mb-2">INDUSTRY SOLUTIONS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Security Solutions for Your Industry</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our SOC platform adapts to the unique security challenges and compliance requirements of your specific industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FiCreditCard size={24} />,
                title: "Financial Services",
                description: "Protect sensitive financial data and meet strict regulatory requirements with real-time threat detection and compliance reporting.",
                link: "/solutions/financial"
              },
              {
                icon: <FiActivity size={24} />,
                title: "Healthcare",
                description: "Safeguard patient data and ensure HIPAA compliance with specialized monitoring for healthcare environments and medical devices.",
                link: "/solutions/healthcare"
              },
              {
                icon: <FiGlobe size={24} />,
                title: "Government",
                description: "Secure critical infrastructure and citizen data with advanced threat intelligence and FedRAMP-compliant security monitoring.",
                link: "/solutions/government"
              },
              {
                icon: <FiServer size={24} />,
                title: "Technology",
                description: "Protect your intellectual property and customer data with security monitoring optimized for fast-moving tech companies.",
                link: "/solutions/technology"
              },
              {
                icon: <FiGrid size={24} />,
                title: "Manufacturing",
                description: "Secure operational technology (OT) and IT environments with specialized monitoring for industrial control systems.",
                link: "/solutions/manufacturing"
              },
              {
                icon: <FiTrendingUp size={24} />,
                title: "Retail & E-commerce",
                description: "Protect customer data and payment information while ensuring PCI DSS compliance and minimal business disruption.",
                link: "/solutions/retail"
              }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg"
              >
                <div className="p-3 rounded-full inline-flex items-center justify-center mb-4 bg-blue-500/20 text-teal-400">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{industry.title}</h3>
                <p className="text-gray-400 mb-4">{industry.description}</p>
                <Link to={industry.link}>
                  <Button variant="link" className="text-teal-400 p-0 h-auto">
                    Learn More →
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-teal-400 font-medium mb-2">USE CASES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Solving Real Security Challenges</h2>
            <p className="text-gray-400 text-lg mb-12">
              See how our SOC platform addresses specific security scenarios that organizations face today.
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                title: "Authentication and Access Monitoring",
                description: "Monitor and respond to unauthorized access attempts across remote protocols with intelligent alerting and behavioral analysis to prevent intrusions.",
                features: [
                  "Detection of repeated authentication failures across SSH, RDP, and FTP",
                  "Brute force attack identification with IP reputation correlation",
                  "Alerts for login attempts during weekends and non-business hours",
                  "Access pattern analysis to detect anomalous user behavior"
                ],
                icon: <FiLock size={36} />
              },
              {
                title: "Privilege and Resource Monitoring",
                description: "Gain visibility into system-level activities and unauthorized privilege escalations with real-time resource and process tracking for enhanced threat detection.",
                features: [
                  "Detection of unauthorized elevated privilege escalation attempts",
                  "Continuous monitoring of system resources (CPU, RAM, and disk usage)",
                  "Tracking of critical process launches and DLL injection behavior",
                  "Alerts for abnormal usage patterns indicating possible compromise"
                ],
                icon: <FiCpu size={36} />
              },
              {
                title: "System Registry and File Integrity",
                description: "Ensure critical system components remain uncompromised with continuous monitoring of registry changes and file integrity to detect tampering attempts.",
                features: [
                  "Detection of unauthorized additions or modifications to system registry keys",
                  "Real-time file integrity monitoring for creation, deletion, and modification events",
                  "Alerts on changes to sensitive system or configuration files",
                  "Forensic logging to support incident investigation and rollback"
                ],
                icon: <FiFile size={36} />
              },
              {
                title: "Package and Service Monitoring",
                description: "Track changes to system packages and services to detect unauthorized software installations and suspicious service behavior that may indicate compromise.",
                features: [
                  "Monitoring of package installation and removal across endpoints",
                  "Detection of newly created or modified system services",
                  "Alerts on unexpected service startups and persistent service behavior",
                  "Correlation with threat intelligence to flag risky software activity"
                ],
                icon: <FiPackage size={36} />
              },
               {
                title: "Incident Response Automation",
                description: "Accelerate threat containment with automated actions and real-time alerting, ensuring rapid response to critical security events across your environment.",
                features: [
                  "Active response mechanisms such as automatic IP blocking and user isolation",
                  "Real-time incident notifications via Email, Slack, API, and Webhooks",
                  "Customizable response workflows for different severity levels",
                  "Seamless integration with SIEM/SOAR tools to enhance triage and resolution"
                ],
                icon: <FiZap size={36} />
              },
                        {
                title: "Analytics and Dashboards",
                description: "Visualize security trends and incident data in real-time with custom dashboards designed to support proactive threat management and decision-making.",
                features: [
                  "Tailored analytics dashboards for key security metrics and KPIs",
                  "Real-time visibility into threats, user activity, and system health",
                  "Interactive charts and filters to drill down into specific events",
                  "Integration with log sources, SIEMs, and third-party tools for enriched insights"
                ],
                icon: <FiActivity size={36} />
              },
                            {
                title: "Application and Database Logs",
                description: "Monitor application and database activity for suspicious behavior, performance issues, and early signs of attacks targeting critical services.",
                features: [
                  "Continuous monitoring of web application logs (Nginx, Apache, IIS) for anomalies and errors",
                  "Database log tracking for authentication failures, query abuse, and privilege changes (MSSQL, MySQL)",
                  "Alerts for abnormal access patterns or SQL injection indicators",
                  "Centralized logging to support auditing, troubleshooting, and compliance"
                ],
                icon: <FiDatabase size={36} />
              },
                           {
                title: "Vulnerability, Compliance, and User Management",
                description: "Identify security gaps, ensure regulatory alignment, and maintain control over user access to reduce organizational risk and strengthen posture.",
                features: [
                  "Automated vulnerability detection with real-time patch scanning across systems",
                  "Continuous compliance checks against standards like PCI-DSS, GDPR, HIPAA, and NIST",
                  "Reporting tools to demonstrate audit readiness and compliance status",
                  "Centralized user activity tracking and access control validation"
                ],
                icon: <FiShield size={36} />
              }
              
            ].map((useCase, index) => (
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
                  <div className="relative z-10 flex flex-col md:grid md:grid-cols-3 gap-8 items-stretch">
                    <div className={`w-full md:col-span-1 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                      <div className="h-64 md:h-full md:min-h-[300px] p-6 bg-gradient-to-br from-blue-900/40 to-teal-900/30 rounded-xl border border-blue-400/20 flex items-center justify-center backdrop-blur-sm">
                        <div className="text-teal-400">{useCase.icon}</div>
                      </div>
                    </div>
                    
                    <div className="w-full md:col-span-2 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-white mb-3">{useCase.title}</h3>
                      <p className="text-gray-200 mb-4">{useCase.description}</p>
                      
                      <ul className="space-y-2">
                        {useCase.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-teal-400 mr-3 mt-1">
                              <FiCheck />
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

      {/* Integration Partners 
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-teal-400 font-medium mb-2">SEAMLESS INTEGRATION</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Works With Your Existing Stack</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our platform integrates with hundreds of security and IT tools to provide comprehensive visibility.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg flex items-center justify-center"
              >
                <div className="text-gray-400 font-medium">Partner Logo</div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link to="/solutions/integrations">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                View All Integrations
              </Button>
            </Link>
          </div>
        </div>
      </section>
      */}
<section className="py-24 bg-gradient-to-b from-black to-slate-900">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto mb-16"
    >
      <p className="text-teal-400 font-medium mb-2">SUCCESS STORIES</p>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See Our Impact</h2>
      <p className="text-gray-400 text-lg">
        Learn how organizations like yours are strengthening their security posture with our SOC solution.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Financial Institution",
          slug: "financial",
          result: "85% reduction in alert fatigue",
          description: "How a regional bank streamlined their security operations and achieved compliance."
        },
        {
          title: "Healthcare Provider",
          slug: "healthcare",
          result: "60% faster threat detection",
          description: "A hospital network improved patient data security while meeting HIPAA requirements."
        },
        {
          title: "Tech Company",
          slug: "technology",
          result: "99.9% service uptime",
          description: "SaaS provider protected their infrastructure while scaling operations globally."
        }
      ].map((study, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg"
        >
          <div className="h-40 mb-4 bg-gradient-to-br from-blue-800/30 to-teal-800/20 rounded flex items-center justify-center">
            <p className="text-white font-medium">Case Study</p>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
          <p className="text-teal-400 font-medium mb-2">{study.result}</p>
          <p className="text-gray-400 mb-4">{study.description}</p>
          <Button asChild variant="link" className="text-teal-400 p-0 h-auto">
            <Link to={`/solutions/casestudies/${study.slug}`}>Read Case Study →</Link>
          </Button>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
      <CtaSection
        title="Ready to see our solutions in action?"
        description="Schedule a personalized demo to see how our SOC platform can be tailored to your industry needs."
        primaryButtonText="Request Demo"
        primaryButtonLink="/contact"
      />
    </>
  );
}