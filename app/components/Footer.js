"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaMediumM } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-6">
            <motion.a
              href="https://github.com/busrakocarslan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#96476e] dark:text-gray-400 dark:hover:text-[#FF1493] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/busrakocarslan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#96476e] dark:text-gray-400 dark:hover:text-[#FF1493] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedinIn className="w-6 h-6" />
            </motion.a>

            <motion.a
              href="https://medium.com/@busrakocarslan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#96476e] dark:text-gray-400 dark:hover:text-[#FF1493] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaMediumM className="w-6 h-6" />
            </motion.a>
          </div>

          {/* Copyright Text */}
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Koçarslan. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Designed and built with ❤️ using Next.js & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}