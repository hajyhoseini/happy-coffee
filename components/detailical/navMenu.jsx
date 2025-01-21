import React from 'react';
import { FaHome, FaUser, FaCoffee, FaPhoneAlt } from 'react-icons/fa'; // وارد کردن آیکون‌های جدید
import { useTheme } from '@/context/ThemeContext'; // استفاده از context برای مدیریت حالت شب و روز

const NavMenu = () => {
  const { isDarkMode } = useTheme(); // دریافت وضعیت حالت شب و روز از context

  return (
    <nav className={`w-full md:m-4 flex justify-center md:h-2/3 sticky top-8 ${isDarkMode ? "bg-[#2c1a14]" : "bg-[#603323]"}`} style={{ marginLeft: 'calc(100% / 6)' }}>
      <ul className={`grid grid-cols-2 sm:grid-cols-4 gap-2 p-2 rounded-md shadow-lg w-full md:w-1/2 ${isDarkMode ? "bg-[#3e2c2a]" : "bg-[#6a4e2f]"}`}>
        <li className="flex items-center space-x-2 w-full">
          <a
            href="#home"
            className={`hover:bg-[#e8c8a5] hover:text-white px-4 py-2 bg-[#8e6a4d] rounded-md transition duration-300 transform hover:scale-105 flex items-center justify-center text-sm sm:text-base md:text-lg w-full ${isDarkMode ? "text-white" : "text-black"}`}
          >
            <FaHome size={20} className="transition-colors duration-300 me-1 text-[#f4a261]" />
            <span className="font-bold sm:text-base md:text-lg">خانه</span>
          </a>
        </li>
        <li className="flex items-center space-x-2 w-full">
          <a
            href="#about"
            className={`hover:bg-[#e8c8a5] hover:text-white px-4 py-2 bg-[#8e6a4d] rounded-md transition duration-300 transform hover:scale-105 flex items-center justify-center text-sm sm:text-base md:text-lg w-full ${isDarkMode ? "text-white" : "text-black"}`}
          >
            <FaUser size={20} className="transition-colors duration-300 me-1 text-[#4343ff]" />
            <span className="font-bold text-sm sm:text-base md:text-sm">هپی باش</span>
          </a>
        </li>
        <li className="flex hover:bg-[#e8c8a5] items-center space-x-2 w-full">
          <a
            href="#products"
            className={`hover:bg-[#e8c8a5] hover:text-white px-4 py-2 bg-[#8e6a4d] rounded-md transition duration-300 transform hover:scale-105 flex items-center justify-center text-sm sm:text-base md:text-lg w-full ${isDarkMode ? "text-white" : "text-black"}`}
          >
            <FaCoffee size={20} className="transition-colors duration-300 me-1 text-[#295965]" />
            <span className="font-bold text-sm sm:text-base md:text-lg">محصولات</span>
          </a>
        </li>
        <li className="flex items-center space-x-2 w-full">
          <a
            href="#contact"
            className={`hover:bg-[#e8c8a5] hover:text-white px-4 py-2 bg-[#8e6a4d] hover:bg-[#a35d2e] rounded-md transition duration-300 transform hover:scale-105 flex items-center justify-center text-sm sm:text-base md:text-lg w-full ${isDarkMode ? "text-white" : "text-black"}`}
          >
            <FaPhoneAlt size={20} className="transition-colors duration-300 me-1 text-[#388E3C]" />
            <span className="font-bold text-sm sm:text-base md:text-lg">تماس</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
