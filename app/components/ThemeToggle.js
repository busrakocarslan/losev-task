"use client";

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-[#96476e]/10 dark:hover:bg-[#FF1493]/10"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Tema değiştir"
    >
      {theme === 'dark' ? (
        <FiSun className="w-5 h-5 text-[#FF1493]" />
      ) : (
        <FiMoon className="w-5 h-5 text-[#96476e]" />
      )}
    </motion.button>
  );
}