import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  children?: ReactNode;
  align?: 'left' | 'center';
  height?: string;
  showAnimation?: boolean; // ✅ new prop to control Lottie rendering
}

export default function HeroSection({
  title,
  subtitle,
  description,
  buttonText = 'Learn More',
  buttonLink = '/contact',
  children,
  align = 'left',
  height = '90vh',
  showAnimation = false, // default to false
}: HeroSectionProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const illustrationContainer = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  return (
    <section 
      style={{ height, position: 'relative', overflow: 'hidden' }}
      className="bg-gradient-to-br from-black via-slate-900 to-slate-800"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto h-full px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center">
          
          {/* Left side */}
          <motion.div
            className="text-left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <h3 className="text-teal-400 font-medium mb-2">{subtitle}</h3>
            </motion.div>
            
            <motion.div variants={item}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                {title}
              </h1>
            </motion.div>
            
            <motion.div variants={item}>
              <p className="text-lg md:text-xl text-gray-300 mb-8">{description}</p>
            </motion.div>
            
            <motion.div variants={item}>
              <Link to={buttonLink}>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:opacity-90">
                  {buttonText} <FiArrowRight className="ml-2" />
                </Button>
              </Link>
            </motion.div>
            
            {children && <motion.div variants={item}>{children}</motion.div>}
          </motion.div>

          {/* Right side - Lottie (only if showAnimation is true) */}
          {showAnimation && (
            <motion.div
              className="hidden lg:flex justify-center items-center"
              variants={illustrationContainer}
              initial="hidden"
              animate="show"
            >
              <div className="w-[500px] h-[500px]">
                <DotLottieReact
                  src="https://lottie.host/127f5567-9f06-4d22-aa4a-b202f41c3f66/Urzbv7t4mC.lottie"
                  loop
                  autoplay
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
