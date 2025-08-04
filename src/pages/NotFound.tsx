import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CyberScene from "@/components/ui/3d/CyberScene";
import { FiHome } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center">
      {/* 3D Background */}
      <CyberScene
        height="100vh"
        spheres={[
          { position: [-1.5, 1, -1], color: '#00e5ff', scale: 1, distort: 0.4, opacity: 0.8 },
          { position: [2, -1, -2], color: '#ff3366', scale: 0.7, distort: 0.5, opacity: 0.6 },
          { position: [0, 1, -3], color: '#0066ff', scale: 1.2, distort: 0.3, opacity: 0.5 }
        ]}
      />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1 
            className="text-8xl md:text-9xl font-bold text-white mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          >
            404
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Page Not Found</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved to another location.
            </p>
            
            <Link to="/">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:opacity-90">
                <FiHome className="mr-2" /> Return Home
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}