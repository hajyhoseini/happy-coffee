const SidebarText = ({ isOpen, setIsSidebarOpen }) => {
  return (
    <aside
      className={`h-full transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      style={{
        backgroundImage: "url('/path/to/your/background-image.jpg')", // مسیر تصویر دلخواه
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
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
            <h1 className="text-lg bg-white rounded-lg px-8 py-4 font-semibold text-gray-800 shadow-lg transition-transform transform hover:scale-105">
              نام کاربری : A.h.h
            </h1>
            <h1 className="text-lg bg-white rounded-lg px-8 py-4 font-semibold text-gray-800 shadow-lg transition-transform transform hover:scale-105">
              آیدی : 810804
            </h1>
          </div>
        </div>

        <nav className="py-24">
          <ul className="space-y-8">
            <li className="my-hover-sidebar">
              <a
                href="/"
                className="flex items-center justify-center text-lg text-gray-800 hover:text-blue-500 transform transition-all duration-200 hover:scale-105 sm:flex-col sm:space-y-2 w-2/3 mx-auto"
              >
                <i className="fas fa-cogs text-red-600 text-2xl"></i>
                <span className="ps-3 bg-white rounded-lg px-6 py-3 font-medium ms-2 w-full text-center">مهارت‌ها</span>
              </a>
            </li>
            <li className="my-hover-sidebar">
              <a
                href="#projects"
                className="flex items-center justify-center text-lg text-gray-800 hover:text-blue-500 transform transition-all duration-200 hover:scale-105 sm:flex-col sm:space-y-2 w-2/3 mx-auto"
              >
                <i className="fas fa-project-diagram text-yellow-600 text-2xl"></i>
                <span className="ps-3 bg-white rounded-lg px-6 py-3 font-medium ms-2 w-full text-center">پروژه‌ها</span>
              </a>
            </li>
            <li className="my-hover-sidebar">
              <a
                href="/login"
                className="flex items-center justify-center text-lg text-gray-800 hover:text-blue-500 transform transition-all duration-200 hover:scale-105 sm:flex-col sm:space-y-2 w-2/3 mx-auto"
              >
                <i className="fas fa-sign-in-alt bg-blue-500 text-white text-2xl"></i>
                <span className="ps-3 bg-white rounded-lg px-6 py-3 font-medium ms-2 w-full text-center">ورود</span>
              </a>
            </li>
            <li className="my-hover-sidebar">
              <a
                href="/register"
                className="flex items-center justify-center text-lg text-gray-800 hover:text-blue-500 transform transition-all duration-200 hover:scale-105 sm:flex-col sm:space-y-2 w-2/3 mx-auto"
              >
                <i className="fas fa-registered bg-green-500 text-white text-2xl"></i>
                <span className="ps-3 bg-white rounded-lg px-6 py-3 font-medium ms-2 w-full text-center">ثبت نام</span>
              </a>
            </li>
          
            <li className="my-hover-sidebar">
              <a
                href="#contact"
                className="flex items-center justify-center text-lg text-gray-800 hover:text-blue-500 transform transition-all duration-200 hover:scale-105 sm:flex-col sm:space-y-2 w-2/3 mx-auto"
              >
                <i className="fas fa-envelope text-green-600 text-2xl"></i>
                <span className="ps-3 bg-white rounded-lg px-6 py-3 font-medium ms-2 w-full text-center">تماس</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SidebarText;
