import React from 'react';
import SidebarText from '../detailical/SidebarText';

const SidebarMain = ({ isMobile, isOpen, setIsSidebarOpen, isSidebarOpen }) => {
  return (
    <div>
      <div
        className={`bg-black/70 shadow-slate-100 backdrop-blur-lg transition-all duration-300 ${
          isMobile
            ? `fixed top-0 left-0 h-full w-full z-50 ${ // برای موبایل
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`
            : "fixed top-0 right-0 h-full w-64 z-50" // برای دسکتاپ، سایدبار در سمت راست
        }`}
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
            className="absolute top-5 left-5 md:top-6 md:left-6 bg-red-600 text-white p-3 rounded-full z-50 transition-all duration-300 transform hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default SidebarMain;
