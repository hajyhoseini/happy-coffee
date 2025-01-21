import React, { useState, useRef, useEffect } from "react"; 
import { FaPhoneAlt, FaWhatsapp, FaTelegramPlane } from "react-icons/fa"; // آیکون‌های فونت آوسوم
import { Button } from "react-bootstrap"; // استفاده از دکمه‌های React-Bootstrap

const CallToHelper = () => {
  const [isOpen, setIsOpen] = useState(false);

  // برای ذخیره کردن رفرنس‌های دکمه و منو
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // تابع برای تغییر وضعیت باز/بسته بودن منو
  const toggleMenu = () => setIsOpen(!isOpen);

  // بررسی اینکه آیا کلیک خارج از دکمه و منو بوده است
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
        setIsOpen(false); // بسته شدن منو
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed bottom-5 left-5 z-50">
      {/* دکمه اصلی تماس */}
      <Button
        ref={buttonRef} // ارجاع به دکمه
        className="bg-green-600 text-white rounded-full p-3 shadow-xl hover:scale-110 transform transition-all"
        onClick={toggleMenu}
      >
        <span className="text-2xl">☕</span> {/* آیکون قهوه */}
      </Button>

      {/* منوی باز شده */}
      {isOpen && (
        <div
          ref={menuRef} // ارجاع به منو
          className="flex flex-col items-start bg-cover bg-center bg-black/80 rounded-lg mt-3 p-3 w-48 space-y-3"
          style={{
            backgroundImage: "url('https://via.placeholder.com/200x200.png?text=Coffee+Beans')", // تصویر پس‌زمینه دانه قهوه
            backgroundSize: "cover", // اندازه تصویر به‌طوری که کل منو را پوشش دهد
            backgroundPosition: "center", // موقعیت‌دهی به مرکز تصویر
          }}
        >
          <a
            href="tel:+1234567890"
            className="flex items-center p-3 text-white hover:bg-green-800 rounded-lg transition-all transform hover:scale-105"
          >
            <FaPhoneAlt className="ml-3 text-green-600" size={24} />
            تماس تلفنی
          </a>
          <a
            href="https://wa.me/1234567890"
            className="flex items-center p-3 text-white hover:bg-green-800 rounded-lg transition-all transform hover:scale-105"
          >
            <FaWhatsapp className="ml-3 text-green-500" size={24} />
            واتس‌اپ
          </a>
          <a
            href="https://t.me/yourtelegramusername"
            className="flex items-center p-3 text-white hover:bg-green-800 rounded-lg transition-all transform hover:scale-105"
          >
            <FaTelegramPlane className="ml-3 text-blue-500" size={24} />
            تلگرام
          </a>
        </div>
      )}
    </div>
  );
};

export default CallToHelper;
