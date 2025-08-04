import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

interface CtaSectionProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  bgGradient?: boolean;
}

export default function CtaSection({
  title,
  description,
  primaryButtonText = 'Get Started',
  primaryButtonLink = '/contact',
  secondaryButtonText,
  secondaryButtonLink = '/services',
  bgGradient = true,
}: CtaSectionProps) {
  return (
    <section className={`py-24 ${bgGradient ? 'bg-gradient-to-br from-blue-900 to-slate-900' : 'bg-slate-900'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
            <p className="text-lg text-gray-300">{description}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to={primaryButtonLink}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:opacity-90 w-full sm:w-auto"
                >
                  {primaryButtonText} <FiArrowRight className="ml-2" />
                </Button>
              </Link>
              
              {secondaryButtonText && (
                <Link to={secondaryButtonLink}>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white/20 text-black hover:bg-white/10 hover:text-white w-full sm:w-auto"
                  >
                    {secondaryButtonText}
                  </Button>
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}