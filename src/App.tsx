import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './components/layouts/MainLayout';

// Pages
import Index from './pages/Index';
import About from './pages/about/Index';
import Services from './pages/services/Index';
import Solutions from './pages/solutions/Index';
import Contact from './pages/contact/Index';
import NotFound from './pages/NotFound';
import FinancialCaseStudy from './pages/solutions/casestudies/financial'; // ✅ new import
import HealthcareCaseStudy from './pages/solutions/casestudies/healthcare'; // ✅ new import
import TechCompanyCaseStudy from './pages/solutions/casestudies/technology'; // ✅ new import


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <MainLayout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/casestudies/financial" element={<FinancialCaseStudy />} /> {/* ✅ new route */}
              <Route path="/solutions/casestudies/healthcare" element={<HealthcareCaseStudy />} /> {/* ✅ new route */}
              <Route path="/solutions/casestudies/technology" element={<TechCompanyCaseStudy />} /> {/* ✅ new route */}
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MainLayout>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
