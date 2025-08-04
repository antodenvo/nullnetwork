import { Link } from 'react-router-dom';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaLinkedin, FaTwitter, FaGithub, FaFacebook } from 'react-icons/fa';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/90 text-gray-300 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              nullnetwork
            </h3>
            <p className="text-sm text-gray-400 max-w-xs">
              Providing cutting-edge SOC as a Service solutions with advanced cyber intelligence and real-time notifications.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-teal-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-teal-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-teal-400 transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-teal-400 transition-colors">
                <FaFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                <Link to="/services">SOC as a Service</Link>
              </li>
              <li className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                <Link to="/services">AI Enhanced Analysis</Link>
              </li>
              <li className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                <Link to="/services">Cyber Intelligence</Link>
              </li>
              <li className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                <Link to="/services">Threat Detection</Link>
              </li>
              <li className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                <Link to="/services">Security Monitoring</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiMapPin className="mt-1 text-teal-400" />
                <span className="text-sm text-gray-400">
                  No 301, Block B, KP Towers, Arcode Rd, Vadapalani, Chennai, Tamilnadu.
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="text-teal-400" />
                <span className="text-sm text-gray-400">+91 72002 87691</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="text-teal-400" />
                <span className="text-sm text-gray-400">nullsec@nullnetwork.in</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-slate-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} nullnetwork. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link to="/privacy" className="text-xs text-gray-500 hover:text-teal-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-gray-500 hover:text-teal-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-xs text-gray-500 hover:text-teal-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}