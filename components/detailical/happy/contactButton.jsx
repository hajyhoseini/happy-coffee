import React from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

const ContactButtons = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex justify-center gap-10 mb-8">
      {/* دکمه تماس با تلفن */}
      <a
        href="tel:+123456789"
        className={`contact-btn flex items-center justify-center p-4 rounded-full ${
          isDarkMode ? "bg-[#4E342E] text-green-500" : "bg-[#D7CCC8] text-green-600"
        } hover:bg-[#3E2723] hover:text-green-700 transition-all duration-300`}
      >
        <FaPhone className="text-4xl" />
      </a>

      {/* دکمه ایمیل */}
      <a
        href="mailto:youremail@example.com"
        className={`contact-btn flex items-center justify-center p-4 rounded-full ${
          isDarkMode ? "bg-[#3E2723] text-gray-200" : "bg-[#F5F5F5] text-gray-700"
        } hover:bg-[#2C211D] hover:text-gray-800 transition-all duration-300`}
      >
        <FaEnvelope className="text-4xl" />
      </a>

      {/* دکمه واتساپ */}
      <a
        href="https://wa.me/yourwhatsappnumber"
        target="_blank"
        className={`contact-btn flex items-center justify-center p-4 rounded-full ${
          isDarkMode ? "bg-[#4E342E] text-green-500" : "bg-[#D7CCC8] text-green-600"
        } hover:bg-[#3E2723] hover:text-green-700 transition-all duration-300`}
      >
        <FaWhatsapp className="text-4xl" />
      </a>

      {/* دکمه اینستاگرام */}
      <a
        href="https://wa.me/yourwhatsappnumber"
        target="_blank"
        className={`contact-btn flex items-center justify-center p-4 rounded-full ${
          isDarkMode ? "bg-[#4E342E] text-green-500" : "bg-[#D7CCC8] text-green-600"
        } hover:bg-[#3E2723] hover:text-green-700 transition-all duration-300`}
      >
        <FaInstagram className="text-4xl text-pink-600" />
      </a>
    </div>
  );
};

export default ContactButtons;
