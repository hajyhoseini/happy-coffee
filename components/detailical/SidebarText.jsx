"use client";
import { useTheme } from '@/context/ThemeContext'; // فرض بر این است که از context برای مدیریت حالت شب و روز استفاده می‌کنید

const SidebarText = ({ isOpen, setIsSidebarOpen }) => {
  const { isDarkMode } = useTheme(); // استفاده از context برای وضعیت شب و روز

  return (
    <aside
      className={`h-full transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
      ${isDarkMode ? 'bg-gray-900 text-white backdrop-blur-lg' : 'bg-white text-gray-800'}`} // اضافه کردن backdrop-blur-lg برای حالت شب
      style={{
        backgroundImage: "url('/path/to/your/background-image.jpg')", // مسیر تصویر دلخواه
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: 10, // اینکار ممکنه به وضوح تاری پس‌زمینه کمک کنه
      }}
    >
      <div className="relative py-10 h-full overflow-y-auto">
        {/* محتوای سایدبار */}
        <div className="flex items-center justify-center space-x-6 sm:flex-col sm:space-x-0 sm:space-y-4">
          <img
            src="/image/userMy.webp"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white shadow-2xl transform hover:scale-105 transition-transform"
          />
          <div className="space-y-3 text-center">
            <h1 className={`text-lg rounded-lg px-8 py-4 font-semibold shadow-lg transition-transform transform hover:scale-105 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
              نام کاربری : A.h.h
            </h1>
            <h1 className={`text-lg rounded-lg px-8 py-4 font-semibold shadow-lg transition-transform transform hover:scale-105 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
              آیدی : 810804
            </h1>
          </div>
        </div>

        <nav className="py-24">
          <ul className="space-y-8">
            <li className="my-hover-sidebar">
              <a
                href="/products"
                className={`flex items-center justify-center text-lg transform transition-all duration-200 hover:scale-105 sm:flex-col sm:space-y-2 w-2/3 mx-auto ${isDarkMode ? 'text-white hover:text-blue-400 backdrop-blur-md' : 'text-gray-800 hover:text-blue-500'}`}
              >
                <i className="fas fa-mug-hot text-red-600 text-2xl"></i> {/* تغییر آیکون به آیکون قهوه */}
                <span className="ps-3 rounded-lg px-6 py-3 font-medium ms-2 w-full text-center">
                  طعم‌ها
                </span>
              </a>
            </li>
            <li className="my-hover-sidebar">
              <a
                href="/buyBasket"
                className={`flex items-center justify-center text-lg transform transition-all duration-200 hover:scale-105 sm:flex-col sm:space-y-2 w-2/3 mx-auto ${isDarkMode ? 'text-white hover:text-yellow-400 backdrop-blur-md' : 'text-gray-800 hover:text-yellow-500'}`}
              >
                <i className="fas fa-clipboard-list text-yellow-600 text-2xl"></i> {/* تغییر آیکون به آیکون سفارشات */}
                <span className="ps-3 rounded-lg px-6 py-3 font-medium ms-2 w-full text-center">
                  سفارشات
                </span>
              </a>
            </li>
            <li className="my-hover-sidebar">
              <a
                href="/login"
                className={`flex items-center justify-center text-lg transform transition-all duration-200 hover:scale-105 sm:flex-col sm:space-y-2 w-2/3 mx-auto ${isDarkMode ? 'text-white hover:text-blue-400 backdrop-blur-md' : 'text-gray-800 hover:text-blue-500'}`}
              >
                <i className="fas fa-sign-in-alt bg-blue-500 text-white text-2xl"></i>
                <span className="ps-3 rounded-lg px-6 py-3 font-medium ms-2 w-full text-center">
                  ورود
                </span>
              </a>
            </li>
            <li className="my-hover-sidebar">
              <a
                href="/register"
                className={`flex items-center justify-center text-lg transform transition-all duration-200 hover:scale-105 sm:flex-col sm:space-y-2 w-2/3 mx-auto ${isDarkMode ? 'text-white hover:text-green-400 backdrop-blur-md' : 'text-gray-800 hover:text-green-500'}`}
              >
                <i className="fas fa-user-plus bg-green-500 text-white text-2xl"></i> {/* تغییر آیکون به آیکون ثبت‌نام */}
                <span className="ps-3 rounded-lg px-6 py-3 font-medium ms-2 w-full text-center">
                  ثبت‌نام
                </span>
              </a>
            </li>
            <li className="my-hover-sidebar">
              <a
                href="/behappy"
                className={`flex items-center justify-center text-lg transform transition-all duration-200 hover:scale-105 sm:flex-col sm:space-y-2 w-2/3 mx-auto ${isDarkMode ? 'text-white hover:text-green-400 backdrop-blur-md' : 'text-gray-800 hover:text-green-500'}`}
              >
                <i className="fas fa-envelope-open-text text-green-600 text-2xl"></i> {/* تغییر آیکون به آیکون تماس */}
                <span className="ps-3 rounded-lg px-6 py-3 font-medium ms-2 w-full text-center">
                  به ما بپیوند
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SidebarText;
