import { Suspense } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import FeatureSection from "@/components/sections/FeatureSection";
import CtaSection from "@/components/sections/CtaSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FiShield, FiEye, FiActivity, FiServer, FiFlag, FiAlertCircle, FiCloud, FiTarget, FiSmile, FiSettings, FiCheckCircle, FiBell, FiSearch} from "react-icons/fi";
import { SiKubernetes, SiDocker, SiOpenai, SiN8N, SiOllama, SiJira, SiWhatsapp, SiRocket} from "react-icons/si";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export default function Index() {
  return (
    <>
      {/* Hero Section with Lottie Animation */}
      <div className="relative">
        <div className="relative z-10">
          <HeroSection
            title="Next-Gen SOC as a Service"
            subtitle="nullnetwork"
            description="Advanced threat detection and incident response for modern enterprises. Our AI-powered SOC solution provides real-time visibility, advanced analytics, and automated response capabilities to protect your critical assets."
            buttonText="Request a Demo"
            buttonLink="/contact"
            height="90vh"
            showAnimation
          />
        </div>
      </div>

      {/* Services Section */}
      <FeatureSection
        title="Comprehensive Security Monitoring"
        subtitle="OUR SERVICES"
        description="Our SOC as a Service platform provides comprehensive visibility and protection across your entire IT infrastructure."
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


      {/* Technology Stack */}
      <section className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-teal-400 font-medium mb-2">BUILT FOR MODERN INFRASTRUCTURE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our platform is built on modern, scalable technologies to ensure reliability,
              performance, and security.
            </p>
          </motion.div>


          <div className="grid grid-cols-3 md:grid-cols-6 gap-8  place-items-center">
            {[SiKubernetes, SiDocker, SiOpenai, SiN8N, SiOllama, SiJira].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <Icon size={60} className="text-gray-400 hover:text-teal-400 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Benefits */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <p className="text-teal-400 font-medium mb-2">WHY CHOOSE nullnetwork</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Integrated, Scalable, and Proactive Security
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Our unified SOC platform delivers enterprise-grade protection with seamless automation, expert support, and cost efficiency.
              </p>

              <ul className="space-y-4">
                {[
                  "Unified platform with SIEM, SOAR, IPSM, and CTI for seamless threat detection and response",
                  "Certified analysts and incident responders ensuring expert-driven security operations",
                  "Cost-effective alternative to building and maintaining an in-house SOC",
                  "Scalable and flexible to adapt with your business growth and evolving threats",
                  "Proactive threat hunting and predictive intelligence to stay ahead of attacks"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="text-teal-500 mr-3">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

           <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="rounded-lg overflow-hidden shadow-2xl shadow-teal-900/20 flex items-center justify-center bg-black"
>
  <div className="w-full max-w-md">
    <DotLottieReact
      src="https://lottie.host/934d9d99-4ada-4dea-90c0-10e6c2d50f92/mK2N9gyDe1.lottie"
      loop
      autoplay
    />
  </div>
</motion.div>
          </motion.div>
        </div>
      </section>


       {/* Values */}
            <section className="py-24 bg-black">
              <div className="container mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <p className="text-teal-400 font-medium mb-2">WHAT YOU GAIN</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Real-World Benefits That Matter</h2>
                  <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                   Our SOC services are built to make your life easier, safer, and more focused on what truly matters—your business.
                  </p>
                </motion.div>
      
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      icon: <SiWhatsapp size={24} />,
                      title: "Real-Time Alerts on WhatsApp",
                      description: "Get immediate threat notifications right where your team communicates—no delays, no noise."
                    },
                    {
                      icon: <SiRocket size={24} />,
                      title: "Faster Response with Automation",
                      description: "Reduce downtime with automated workflows and expert-driven incident handling."
                    },
                    {
                      icon: <FiCloud size={24} />,
                      title: "No Infrastructure Headaches",
                      description: "We manage all the tools and integrations—saving you time, cost, and technical overhead."
                    },
                    {
                      icon: <FiSmile size={24} />,
                      title: "Stress-Free Compliance",
                      description: "Easily meet regulatory requirements with continuous monitoring and detailed reporting."
                    }
                  ].map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg"
                    >
                      <div className="p-3 rounded-full inline-flex items-center justify-center mb-4 bg-blue-500/20 text-teal-400">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                      <p className="text-gray-400">{value.description}</p>
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
        title="Ready to strengthen your security posture?"
        description="Get started with nullnetwork's SOC as a Service today and experience enterprise-grade security monitoring tailored to your organization's needs."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/services"
      />
    </>
  );
}