import { motion } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import { FiShield, FiUsers, FiTarget, FiHeart, FiGlobe } from "react-icons/fi";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="About nullnetwork"
        subtitle="OUR STORY"
        description="We are cybersecurity experts dedicated to protecting organizations from evolving digital threats with our innovative SOC as a Service platform."
        buttonText="Join Our Team"
        buttonLink="/contact"
        height="70vh"
      />

      {/* Mission & Vision */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-lg border border-slate-700"
            >
              <div className="p-3 rounded-full inline-flex items-center justify-center mb-4 bg-blue-500/20 text-teal-400">
                <FiTarget size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To democratize advanced security monitoring by providing enterprise-grade SOC capabilities
                to organizations of all sizes, enabling them to effectively detect, analyze, and respond
                to security threats in real-time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-lg border border-slate-700"
            >
              <div className="p-3 rounded-full inline-flex items-center justify-center mb-4 bg-blue-500/20 text-teal-400">
                <FiGlobe size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To create a world where organizations can focus on innovation and growth, confident
                that their digital assets are protected by intelligent, adaptive security systems that
                evolve alongside emerging threats.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-teal-400 font-medium mb-2">OUR JOURNEY</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">From Security Challenge to Industry Solution</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  nullnetwork was founded in 2019 by a team of cybersecurity experts who recognized a critical gap in the market:
                  while large enterprises had access to sophisticated security monitoring tools, smaller organizations were left vulnerable.
                </p>
                <p>
                  What began as a project to create an accessible, cloud-native SOC solution quickly evolved into a comprehensive
                  platform that today serves hundreds of organizations worldwide, from startups to Fortune 500 companies.
                </p>
                <p>
                  Our team combines decades of experience in cybersecurity, machine learning, and cloud infrastructure to
                  deliver a solution that continuously evolves to address the most sophisticated threats in the digital landscape.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-teal-500/20 rounded-lg border border-slate-700 overflow-hidden">
                <img 
                  src="./assets/images/about.jpg" 
                  alt="nullnetwork company overview" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
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
            <p className="text-teal-400 font-medium mb-2">WHAT DRIVES US</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              These principles guide everything we do, from product development to customer support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FiShield size={24} />,
                title: "Security First",
                description: "We prioritize security in everything we build, ensuring our solutions meet the highest standards."
              },
              {
                icon: <FiUsers size={24} />,
                title: "Customer Success",
                description: "Our customers' success is our success. We're committed to being a trusted security partner."
              },
              {
                icon: <FiHeart size={24} />,
                title: "Passion",
                description: "We're passionate about cybersecurity and driven to create solutions that make a difference."
              },
              {
                icon: <FiTarget size={24} />,
                title: "Innovation",
                description: "We continuously innovate to stay ahead of emerging threats and security challenges."
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

     {/*Team 
      <section className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-teal-400 font-medium mb-2">OUR EXPERTS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Meet the team behind nullnetwork's innovative security solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 border border-slate-800 rounded-lg overflow-hidden"
              >
                <div className="aspect-w-3 aspect-h-4 bg-gradient-to-br from-blue-800 to-slate-900"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">Leadership Name</h3>
                  <p className="text-teal-400 mb-3">Position / Role</p>
                  <p className="text-gray-400">
                    Brief bio highlighting experience in cybersecurity and relevant background.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}
    </>
  );
}