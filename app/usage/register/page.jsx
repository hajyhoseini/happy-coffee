import React from 'react';

export default function Register() {
  return (
    <div className="bg-custom-image bg-cover bg-center h-64 w-full flex items-center justify-center min-h-screen">
      <div className="bg-white/60 backdrop-blur-lg rounded-lg p-5 shadow-lg w-96 mb-40 lg:mb-36">
        <h2 className="text-2xl font-semibold text-center mb-6">ثبت‌نام در سایت شخصی من❤️</h2>
        
        {/* فرم ثبت‌نام */}
        <form action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">نام کاربری</label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="نام کاربری خود را وارد کنید"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">ایمیل</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ایمیل خود را وارد کنید"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">رمز عبور</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="رمز عبور خود را وارد کنید"
            />
          </div>

          <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">تأیید رمز عبور</label>
          <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="رمز عبور خود را مجدداً وارد کنید"
            />
             <div className="flex justify-around items-center mt-4 ">
            <div>
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="text-blue-500 me-1 size-4"
              />
              <label htmlFor="remember" className="text-gray-600">مرا به خاطر بسپار</label>
            </div>
            <a href="/login" className="text-green-500 text-lg hover:text-green-400">  ورود </a>

          </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            ثبت‌نام
          </button>
        </form>
      </div>
    </div>
  );
}
