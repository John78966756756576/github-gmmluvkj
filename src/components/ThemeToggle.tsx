import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-400 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 group"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="w-6 h-6 group-hover:rotate-12 transition-transform duration-200" />
      ) : (
        <Sun className="w-6 h-6 group-hover:rotate-12 transition-transform duration-200" />
      )}
    </button>
  );
};