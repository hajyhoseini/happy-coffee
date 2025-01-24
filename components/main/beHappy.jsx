"use client"
import React from 'react';
import { FaHotjar, FaCoffee, FaMugHot, FaGlassWhiskey, FaLeaf, FaCocktail, FaBeer, FaMoon, FaPhone, FaEnvelope, FaWhatsapp, FaSun, FaInstagram } from 'react-icons/fa'; // ایمپورت آیکون‌های قهوه
import { useTheme } from "@/context/ThemeContext"; // استفاده از Context برای تم

const BeHappy = () => {
    const { isDarkMode, toggleTheme } = useTheme(); // استفاده از تم تاریک یا روشن و تابع تغییر تم

    const flavors = [
        { name: "هات چاکلت", icon: <FaHotjar className="text-yellow-800" /> },
        { name: "نسکافه", icon: <FaCoffee className="text-yellow-600" /> },
        { name: "کاپوچینو", icon: <FaMugHot className="text-red-500" /> },
        { name: "لاته", icon: <FaGlassWhiskey className="text-gray-400" /> },
        { name: "ماسالا", icon: <FaLeaf className="text-orange-500" /> },
        { name: "اسپرسو", icon: <FaCoffee className="text-gray-600" /> },
        { name: "آمریکانو", icon: <FaCocktail className="text-blue-400" /> },
        { name: "موکا", icon: <FaBeer className="text-green-600" /> },
    ];

    return (
        <div className={`text-center  p-8 rounded-lg shadow-lg transition-all duration-500 ${isDarkMode ? 'bg-black/60 text-white' : 'bg-white/50 text-gray-800'}`}>
            {/* Header with theme toggle */}
            <div className="flex justify-between items-center mb-8">
                <h2 className={`text-2xl md:text-3xl rounded-lg p-2 font-extrabold ${isDarkMode ? 'text-white bg-yellow-600' : 'text-black bg-yellow-700'}`}>
                    همراه با هپی کافی، همیشه خوشحال باشید!
                </h2>
               
            </div>

            {/* Content */}
            <p className={`text-base mb-4  rounded-md p-3 ${isDarkMode ? 'text-gray-300 bg-yellow-600'  : 'text-gray-700 bg-yellow-500'}`}>
                قهوه ما فقط طعمی خوشمزه نیست، بلکه یک تجربه است. اگر از طعم عالی قهوه‌های ما لذت می‌برید،
                پس چرا در شبکه‌های اجتماعی با ما همراه نشوید؟
            </p>

            {/* Galler of Coffee Flavors */}
            <div className="mb-8">
                <p className={`font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>گالری طعم‌های قهوه</p>
                <div className="flex justify-center gap-6 flex-wrap">
                    {flavors.map((flavor, index) => (
                        <div key={index} className="flex flex-col items-center mb-6">
                            <div className={`text-6xl mb-4 transition-transform transform hover:scale-110 ${isDarkMode ? 'text-yellow-500' : flavor.icon.props.className}`}>
                                {flavor.icon}
                            </div>
                            <p className={`font-semibold text-xl ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{flavor.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact buttons */}
            <div className="flex justify-center gap-6 mb-6">
                <a href="tel:+123456789" className={`text-3xl ${isDarkMode ? 'text-green-500' : 'text-green-600'} hover:text-green-700 transition-all duration-300`}>
                    <FaPhone />
                </a>
                <a href="mailto:youremail@example.com" className={`text-3xl ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} hover:text-gray-800 transition-all duration-300`}>
                    <FaEnvelope />
                </a>
                <a href="https://wa.me/yourwhatsappnumber" target="_blank" className={`text-3xl ${isDarkMode ? 'text-green-500' : 'text-green-600'} hover:text-green-700 transition-all duration-300`}>
                    <FaWhatsapp />
                </a>
                <a href="https://www.instagram.com/yourbrand" target="_blank" className={`text-3xl ${isDarkMode ? 'text-pink-500' : 'text-pink-600'} hover:text-pink-700 transition-all duration-300`}>
                    <FaInstagram />
                </a>
            </div>
        </div>
    );
}

export default BeHappy;
