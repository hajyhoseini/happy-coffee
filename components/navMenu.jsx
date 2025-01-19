import React from 'react';
import { FaHome, FaUser, FaCoffee, FaPhoneAlt } from 'react-icons/fa';  // وارد کردن آیکون‌های جدید

const NavMenu = () => {
  return (
    <nav className="w-full mt-2 md:m-4 flex justify-center h-auto md:h-2/3 sticky top-8" style={{ marginLeft: 'calc(100% / 6)' }}>
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 bg-[#f4e1d2]/80 p-2 rounded-md shadow-lg w-full md:w-1/2">
        <li className="flex items-center space-x-2 w-full">
          <a
            href="#home"
            className="hover:text-brown-600 px-4 py-2 bg-white rounded-md transition duration-300 flex items-center justify-center text-sm sm:text-base md:text-lg w-full"
          >
            <FaHome size={20} className="text-brown-600 hover:text-brown-700 transition-colors duration-300 me-1" />
            <span className="text-sm sm:text-base md:text-lg">خانه</span>
          </a>
        </li>
        <li className="flex items-center space-x-2 w-full">
          <a
            href="#about"
            className="hover:text-amber-400 px-4 py-2 bg-white rounded-md transition duration-300 flex items-center justify-center text-sm sm:text-base md:text-lg w-full"
          >
            <FaUser size={20} className="text-amber-400 hover:text-amber-500 transition-colors duration-300 me-1" />
            <span className="text-sm sm:text-base md:text-sm">هپی باش</span>
          </a>
        </li>
        <li className="flex items-center space-x-2 w-full">
          <a
            href="#products"
            className="hover:text-teal-500 px-4 py-2 bg-white rounded-md transition duration-300 flex items-center justify-center text-sm sm:text-base md:text-lg w-full"
          >
            <FaCoffee size={20} className="text-teal-500 hover:text-teal-600 transition-colors duration-300 me-1" />
            <span className="text-sm sm:text-base md:text-lg">محصولات</span>
          </a>
        </li>
        <li className="flex items-center space-x-2 w-full">
          <a
            href="#contact"
            className="hover:text-green-500 bg-white hover:bg-gray-300 px-4 py-2 rounded-md transition duration-300 flex items-center justify-center text-sm sm:text-base md:text-lg w-full"
          >
            <FaPhoneAlt size={20} className="text-green-500 hover:text-green-600 transition-colors duration-300 me-1" />
            <span className="text-sm sm:text-base md:text-lg">تماس</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
