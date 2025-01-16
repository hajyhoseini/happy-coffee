import React from 'react';
import NavMenu from './navMenu';

const HeaderAuth = () => {
  return (
    <header className="w-full py-3 shadow-lg bg-custom-header-img bg-cover bg-center fixed top-0 left-0 right-0 z-50">
      {/* بخش خوشامدگویی */}
      <div className="relative bg-blue-800 text-white text-center py-1 px-4 font-semibold text-sm sm:text-sm shadow-md z-10 max-w-screen-lg mx-auto rounded-xl">
        <svg 
          className="absolute top-0 left-0 w-full h-full transform rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path 
            fill="#1E3A8A" 
            d="M0,128L1440,32L1440,320L0,320Z"
          />
        </svg>
        <p className="relative text-sm sm:text-sm lg:text-lg font-extrabold text-gray-100">
          به نام خدا <br /> 🎉به وب‌سایت من خوش آمدید!! 🎉
        </p>
      </div>

      {/* محتوای مرکزی (بین خوشامدگویی و منو) */}
      <div className="container mx-auto flex justify-center items-center px-6 sm:px-8 text-black mt-4">
        {/* بخش تصویر و متن */}
        <div className="flex items-center text-center lg:text-left">
          <img 
            src="/image/userMy.webp" 
            alt="Profile"
            className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover mt-2 shadow-xl transition-shadow duration-300"
          />
          <div className="mt-4 sm:mt-0 sm:ml-6 flex justify-center w-full">
            {/* ابر حاوی متن‌ها */}
            <div className="bg-blue-50 p-3 sm:p-2 rounded-2xl max-w-xs sm:max-w-sm mx-auto relative overflow-hidden transition-all duration-300 ease-in-out w-full">
              <div className="relative z-10 text-center sm:text-left">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-gray-800">سلام، من ابوالفضل حاج حسینی هستم</h1>
                <p className="text-sm sm:text-base lg:text-lg text-opacity-80 mb-2 text-gray-700">توسعه‌دهنده وب و طراح</p>
              </div>
            </div>
          </div>
        </div>
      </div>

 
    </header>
  );
};

export default HeaderAuth;
