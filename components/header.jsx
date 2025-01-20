import React from 'react'; 
import NavMenu from './navMenu';

const Header = () => {
  return (
    <header className="w-full shadow-lg bg-custom-header-img bg-cover bg-center fixed top-0 left-0 right-0 z-50">
      {/* بخش خوشامدگویی */}
      <div className="relative bg-orange-600 text-white text-center py-1 px-2 font-semibold text-xs sm:text-xs shadow-md z-10 max-w-screen-lg mx-auto rounded-xl overflow-hidden">
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
        <p className="relative text-xs sm:text-xs lg:text-base font-extrabold text-gray-100 z-30">
          🎉 به "هپی کافی" خوش آمدید! 🎉 <br /> قهوه‌ی شما در انتظار است!
        </p>
      </div>

      {/* محتوای مرکزی */}
      <div className="container mx-auto flex justify-center items-center px-3 sm:px-4 text-black">
        <div className="flex items-end text-center lg:text-left">
          <img 
            src="/image/userMy.webp" 
            alt="Happy Coffee"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover mt-1 shadow-xl transition-shadow duration-300"
          />
          <div className="mt-2 sm:mt-0 sm:ml-3 flex justify-center w-full">
            <div className="bg-yellow-100 p-1 sm:p-0.5 rounded-2xl max-w-xs sm:max-w-sm mx-auto relative overflow-hidden transition-all duration-300 ease-in-out w-full">
              <div className="relative z-10 text-center sm:text-left">
                <h1 className="text-base sm:text-base lg:text-lg font-extrabold text-gray-800">سلام، به دنیای خوشمزه "هپی کافی" خوش آمدید!</h1>
                <p className="text-xs sm:text-xs lg:text-sm text-opacity-80 mb-1 text-gray-700">ما قهوه‌ای که همیشه خواسته‌اید را به شما می‌دهیم!</p>
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
