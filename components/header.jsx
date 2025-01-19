import React from 'react';
import NavMenu from './navMenu';

const Header = () => {
  return (
    <header className="w-full shadow-lg bg-custom-header-img bg-cover bg-center fixed top-0 left-0 right-0 z-50">
      {/* بخش خوشامدگویی */}
      <div className="relative bg-orange-600 text-white text-center py-2 px-3 font-semibold text-sm sm:text-sm shadow-md z-10 max-w-screen-lg mx-auto rounded-xl overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-transparent via-white animate-lightning z-20"></div>
        <svg 
          className="absolute top-0 left-0 w-full h-full transform rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path 
            fill="#FF7F50" 
            d="M0,128L1440,32L1440,320L0,320Z"
          />
        </svg>
        <p className="relative text-xs sm:text-sm lg:text-lg font-extrabold text-gray-100 z-30">
          🎉 به "هپی کافی" خوش آمدید! 🎉 <br /> قهوه‌ی شما در انتظار است!
        </p>
      </div>

      {/* محتوای مرکزی */}
      <div className="container mx-auto flex justify-center items-center px-4 sm:px-6 text-black">
        <div className="flex items-end text-center lg:text-left">
          <img 
            src="/image/userMy.webp" 
            alt="Happy Coffee"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mt-1 shadow-xl transition-shadow duration-300"
          />
          <div className="mt-2 sm:mt-0 sm:ml-4 flex justify-center w-full">
            <div className="bg-yellow-100 p-2 sm:p-1 rounded-2xl max-w-xs sm:max-w-sm mx-auto relative overflow-hidden transition-all duration-300 ease-in-out w-full">
              <div className="relative z-10 text-center sm:text-left">
                <h1 className="text-lg sm:text-lg lg:text-2xl font-extrabold text-gray-800">سلام، به دنیای خوشمزه "هپی کافی" خوش آمدید!</h1>
                <p className="text-sm sm:text-sm lg:text-sm text-opacity-80 mb-1 text-gray-700">ما قهوه‌ای که همیشه خواسته‌اید را به شما می‌دهیم!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* منوی ناوبری */}
      <NavMenu />
    </header>
  );
};

export default Header;
