"use client";
import React from 'react';
import { useTheme } from '@/context/ThemeContext'; // استفاده از context برای مدیریت حالت شب و روز
import SidebarText from '../detailical/SidebarText';

const SidebarMain = ({ isMobile, isOpen, setIsSidebarOpen, isSidebarOpen }) => {
  const { isDarkMode } = useTheme(); // استفاده از context برای وضعیت شب و روز

  return (
    <div>
      <div
        className={`${
          isDarkMode ? 'bg-gray-900' : 'bg-white'
        } shadow-slate-100 backdrop-blur-lg transition-all duration-300 ${
          isMobile
            ? `fixed top-0 left-0 h-full w-full z-40 ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
              }`
            : 'fixed top-0 right-0 h-full w-64 md:w-56 lg:w-64 z-40'
        } ${isDarkMode ? 'backdrop-blur-md' : 'backdrop-blur-sm'}`} // اضافه کردن backdrop-blur
      >
        <SidebarText
          className=" "
          isOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {/* دکمه ضربدر برای بستن سایدبار */}
        {isMobile && isSidebarOpen && (
          <button
            onClick={() => setIsSidebarOpen(false)}
            className={`absolute top-5 left-5 md:top-6 md:left-6 p-3 rounded-full z-50 transition-all duration-300 transform hover:bg-red-700 focus:outline-none focus:ring-2 ${
              isDarkMode ? 'bg-red-500 text-white' : 'bg-red-600 text-white'
            }`}
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default SidebarMain;
