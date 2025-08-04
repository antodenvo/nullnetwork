import { motion } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="GET IN TOUCH"
        description="Have questions about our SOC solution? Our team is ready to help you enhance your security posture."
        height="60vh"
        buttonText="Get a Free Quote"
        buttonLink='/contact'
        showScene={false}
      />

      {/* Contact Info and Map Section */}
      <section className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Let's Start a Conversation</h2>
              <p className="text-gray-300 mb-8">
                Whether you're interested in a demo, have technical questions, or want to learn more about how our SOC solution
                can benefit your organization, we're here to help.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <FiMail className="text-teal-400" />,
                    title: "Email Us",
                    details: "nullsec@nullnetwork.in",
                  },
                  {
                    icon: <FiPhone className="text-teal-400" />,
                    title: "Call Us",
                    details: "+91 72002 87691",
                  },
                  {
                    icon: <FiMapPin className="text-teal-400" />,
                    title: "Visit Us",
                    details: "No 301, Block B, KP Towers, Arcode Rd, Vadapalani, Chennai, Tamilnadu",
                  },
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-3 rounded-full bg-slate-800 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">{item.title}</h3>
                      <p className="text-gray-400">{item.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

  
             
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="sticky top-24">
                <h3 className="text-xl font-bold text-white mb-4">Our Location</h3>
                <div className="rounded-lg overflow-hidden border border-slate-700 shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d124377.14534389907!2d80.20938!3d13.0493026!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526703b494121f%3A0x700c2115b4e11a03!2sNuLLNetwork%20Solutions%20%7C%20Cyber%20Security%20Company%20in%20Chennai!5e0!3m2!1sen!2sin!4v1753977114433!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    className="w-full h-[450px]"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="text-gray-400 text-sm mt-4 text-center">
                  Click on the map to get directions to our office
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-teal-400 font-medium mb-2">FREQUENTLY ASKED QUESTIONS</p>
            <h2 className="text-3xl font-bold text-white mb-4">Common Questions</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Find quick answers to frequently asked questions about our SOC solution.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                question: "How quickly can I get started with your SOC solution?",
                answer: "Our cloud-native platform can be deployed and collecting data within hours. The full onboarding process typically takes 2-4 weeks, depending on the size and complexity of your environment."
              },
              {
                question: "Do you offer a trial or proof of concept?",
                answer: "Yes, we offer a 30-day proof of concept that allows you to experience our SOC solution with your actual data and environment. This helps you evaluate the platform's capabilities before making a commitment."
              },
              {
                question: "How is your solution priced?",
                answer: "Our pricing is based on the number of data sources or the volume of data ingested. We offer flexible pricing models that can be tailored to your specific needs and budget. Contact us for a custom quote."
              },
              {
                question: "What kind of support do you provide?",
                answer: "We offer 24/7 technical support for all customers. Our enterprise plans include a dedicated account manager and access to our security experts for consultation and incident response assistance."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}