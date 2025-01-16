"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import MobileButton from "@/components/MobileButton";
import SidebarMain from "@/components/sidebarMain";
import DescForSkill from "@/components/descForSkill";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // شناسایی اندازه صفحه برای حالت موبایل
  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 768;
      setIsMobile(isNowMobile);

      // در حالت دسکتاپ، سایدبار همیشه باز باشد
      if (!isNowMobile) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false); // در حالت موبایل پیش‌فرض بسته باشد
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    
    <div
      className={`relative bg-custom-image-main min-h-screen transition-all duration-300 ${
        isMobile
          ? "flex flex-col" // در حالت موبایل، چینش عمودی
          : "grid grid-cols-[16rem,1fr]" // در حالت دسکتاپ، چینش دو ستونی
      }`}
    >
 
      
      {/* سایدبار */}
  <SidebarMain isMobile={isMobile} isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen}/>

      {/* محتوای اصلی */}
      <main
        className={`transition-all duration-300 p-4 relative ${
          isMobile && isSidebarOpen ? "opacity-50 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* دکمه باز کردن سایدبار */}
        {isMobile && !isSidebarOpen && (
         <MobileButton setIsSidebarOpen={setIsSidebarOpen} />
        )}

        {/* انیمیشن پس‌زمینه */}
        <div className=" absolute inset-0 overflow-hidden animate-flash">
          <div className="w-96 h-96 bg-blue-400 rounded-full opacity-30 animate-ping relative top-10 left-20"></div>
          <div className="w-72 h-72 bg-purple-500 rounded-full opacity-30 animate-ping relative top-40 right-20"></div>
          <div className="w-64 h-64 bg-teal-400 rounded-full opacity-30 animate-ping relative bottom-20 left-40"></div>
        </div>

        {/* محتوای کامپوننت‌ها */}
        <div>
          <Skills />
          <DescForSkill/>
          <Projects />
        </div>
      </main>
    </div>
  );
}
