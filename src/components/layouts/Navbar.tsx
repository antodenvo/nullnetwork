import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleGetStarted = () => {
    navigate('/contact');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400"
            >
              nullnetwork
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-sm font-medium transition-colors hover:text-teal-400
                  ${location.pathname === item.href ? 'text-teal-400' : 'text-gray-300'}`}
              >
                {location.pathname === item.href && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-teal-400"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                {item.name}
              </Link>
            ))}
            <Button 
              variant="outline" 
              className="ml-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white border-0 hover:opacity-90"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-200">
                  <FiMenu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 bg-black/95 border-l border-slate-800 p-0">
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                    <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                      nullnetwork
                    </span>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                      <FiX size={24} className="text-gray-400" />
                    </Button>
                  </div>
                  <nav className="flex flex-col p-4 space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`p-2 transition-colors hover:bg-slate-800 rounded-md
                          ${location.pathname === item.href ? 'text-teal-400 bg-slate-800/50' : 'text-gray-300'}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Button 
                      className="mt-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white border-0"
                      onClick={() => {
                        handleGetStarted();
                        setIsOpen(false);
                      }}
                    >
                      Get Started
                    </Button>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}