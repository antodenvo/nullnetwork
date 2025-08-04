import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  dark?: boolean;
}

export default function FeatureSection({
  title,
  subtitle,
  description,
  features,
  columns = 3,
  dark = true,
}: FeatureSectionProps) {
  const getColClass = () => {
    switch (columns) {
      case 2:
        return 'grid-cols-1 md:grid-cols-2';
      case 3:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      default:
        return 'grid-cols-1 md:grid-cols-3';
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className={`py-20 ${dark ? 'bg-black' : 'bg-slate-100'}`}>
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {subtitle && <p className="text-teal-500 font-medium mb-2">{subtitle}</p>}
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
          {description && <p className={`text-lg ${dark ? 'text-gray-400' : 'text-slate-600'}`}>{description}</p>}
        </motion.div>

        <motion.div
          className={`grid ${getColClass()} gap-8`}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className={`h-full border ${dark ? 'bg-slate-900/50 border-slate-800 shadow-teal-900/5' : 'bg-white border-slate-200'}`}>
                <CardHeader>
                  <div className={`p-3 rounded-full inline-flex items-center justify-center mb-2 ${dark ? 'bg-blue-500/20 text-teal-400' : 'bg-blue-100 text-blue-700'}`}>
                    {feature.icon}
                  </div>
                  <CardTitle className={`text-xl font-semibold ${dark ? 'text-white' : 'text-slate-900'}`}>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className={`text-base ${dark ? 'text-gray-400' : 'text-slate-600'}`}>
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}