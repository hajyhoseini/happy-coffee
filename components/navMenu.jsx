import React from 'react';

const NavMenu = () => {
  return (
    <nav className="w-full mt-2 flex justify-center md:justify-end md:ms-2 lg:justify-center sticky top-8 ">
      <ul className="inline-flex space-x-6 bg-white/80 p-2 rounded-md shadow-lg items-center">
        <li className="flex items-center space-x-2">
          <a
            href="#home"
            className="hover:text-amber-600 px-4 bg-white rounded-md transition duration-300 flex items-center justify-center text-lg lg:text-base "
          >
            <i className="fa fa-home fa-sm text-amber-600 hover:text-amber-700 transition-colors duration-300 me-1"></i>
            <span className="text-md lg:text-base">خانه</span>
          </a>
        </li>
        <li className="flex items-center space-x-2">
          <a
            href="#about"
            className="hover:text-blue-400 px-4 bg-white rounded-md transition duration-300 flex items-center justify-center text-lg lg:text-base"
          >
            <i className="fa fa-user fa-sm text-blue-400 hover:text-blue-500 transition-colors duration-300 me-1"></i>
            <span className="text-md lg:text-base">درباره من</span>
          </a>
        </li>
        <li className="flex items-center space-x-2">
          <a
            href="#projects"
            className="hover:text-teal-500 px-4 bg-white rounded-md transition duration-300 flex items-center justify-center text-lg lg:text-base"
          >
            <i className="fa fa-briefcase fa-sm  text-teal-500 hover:text-teal-600 transition-colors duration-300 me-1"></i>
            <span className="text-md lg:text-base">پروژه ها</span>
          </a>
        </li>
        <li className="flex items-center space-x-2">
          <a
            href="#contact"
            className="hover:text-green-500 bg-white hover:bg-gray-300 px-4 rounded-md transition duration-300 flex items-center justify-center text-lg lg:text-base"
          >
            <i className="fa fa-phone fa-sm text-green-500 hover:text-green-600 transition-colors duration-300 me-1"></i>
            <span className="text-md lg:text-base">تماس</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
