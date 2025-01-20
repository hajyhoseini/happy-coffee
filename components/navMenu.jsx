import React from 'react';
import { FaHome, FaUser, FaCoffee, FaPhoneAlt } from 'react-icons/fa'; // وارد کردن آیکون‌های جدید

const NavMenu = () => {
  return (
    <nav className=" w-full  md:m-4 flex justify-center md:h-2/3 sticky top-8" style={{ marginLeft: 'calc(100% / 6)' }}>
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2  bg-[#603323] p-2 rounded-md shadow-lg w-full md:w-1/2">
        <li className="flex items-center space-x-2 w-full">
          <a
            href="#home"
            className="hover:bg-[#A1887F] hover:text-white px-4 py-2 bg-[#BCAAA4] rounded-md transition duration-300 transform hover:scale-105 flex items-center justify-center text-sm sm:text-base md:text-lg w-full"
          >
            <FaHome size={20} className="text-[#b04420] hover:text-white transition-colors duration-300 me-1" />
            <span className="  sm:text-base md:text-lg">خانه</span>
          </a>
        </li>
        <li className="flex items-center space-x-2 w-full">
          <a
            href="#about"
            className="hover:bg-[#A1887F] hover:text-white px-4 py-2 bg-[#BCAAA4] rounded-md transition duration-300 transform hover:scale-105 flex items-center justify-center text-sm sm:text-base md:text-lg w-full"
          >
            <FaUser size={20} className="text-[#4343ff] hover:text-white transition-colors duration-300 me-1" />
            <span className="text-sm sm:text-base md:text-sm">هپی باش</span>
          </a>
        </li>
        <li className="flex hover:bg-[#A1887F] items-center space-x-2 w-full">
          <a
            href="#products"
            className="hover:bg-[#A1887F] hover:text-white px-4 py-2 bg-[#BCAAA4] rounded-md transition duration-300 transform hover:scale-105 flex items-center justify-center text-sm sm:text-base md:text-lg w-full"
          >
            <FaCoffee size={20} className="text-[#295965] hover:text-white transition-colors duration-300 me-1" />
            <span className="text-sm sm:text-base md:text-lg">محصولات</span>
          </a>
        </li>
        <li className="flex items-center space-x-2 w-full">
          <a
            href="#contact"
            className="hover:bg-[#A1887F] hover:text-white px-4 py-2 bg-[#BCAAA4] hover:bg-[#8D6E63] rounded-md transition duration-300 transform hover:scale-105 flex items-center justify-center text-sm sm:text-base md:text-lg w-full"
          >
            <FaPhoneAlt size={20} className="text-[#388E3C] hover:text-white transition-colors duration-300 me-1" />
            <span className="text-sm sm:text-base md:text-lg">تماس</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
