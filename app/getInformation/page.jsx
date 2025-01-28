"use client";
import React from 'react';
import { useTheme } from '@/context/ThemeContext'; // استفاده از context برای مدیریت حالت شب و روز

const Page = () => {
    const { isDarkMode } = useTheme(); // استفاده از context برای وضعیت شب و روز

    return (
        <div className={`mt-6 bg-custom-image bg-cover bg-center h-64 w-full flex items-center justify-center min-h-screen ${isDarkMode ? 'bg-gray-900' : ''}`}>
          <div className={` backdrop-blur-lg rounded-lg p-5 shadow-lg w-96 mb-40 lg:mb-36 ${isDarkMode ? 'bg-black/60' : 'bg-white/60'}`}>
          <h2 className={`text-3xl font-semibold text-center mb-6 ${isDarkMode ? 'text-white' : 'text-brown-800'} shadow-xl rounded-md py-2 px-4 bg-gradient-to-r ${isDarkMode ? 'from-gray-800 to-gray-600' : 'from-orange-400 to-orange-500'} border-b-4 border-brown-900`}>
  فرم اطلاعات مشتری
</h2>
    
            {/* فرم دریافت اطلاعات مشتری */}
            <form action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="name" className={`block font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>نام</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="نام خود را وارد کنید"
                />
              </div>
    
              <div className="mb-4">
                <label htmlFor="phone" className={`block font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>شماره تلفن</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="شماره تلفن خود را وارد کنید"
                />
              </div>
    
              <div className="mb-4">
                <label htmlFor="address" className={`block font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>آدرس</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="آدرس خود را وارد کنید"
                />
              </div>
    
              <div className="mb-6">
                <label htmlFor="city" className={`block font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>شهر</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="شهر خود را وارد کنید"
                />
              </div>
    
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                ارسال اطلاعات
              </button>
            </form>
          </div>
        </div>
      );
}

export default Page;



