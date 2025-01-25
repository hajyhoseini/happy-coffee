"use client"; 
import React, { useState } from "react";
import { FaHotjar, FaCoffee, FaMugHot, FaGlassWhiskey, FaLeaf, FaCocktail, FaBeer } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";
import { Container, Row, Col, Button } from "react-bootstrap";

const flavors = [
  { name: "هات", icon: <FaHotjar className="text-yellow-800" />, bgColor: "bg-[#f5e1c7]/60" },
  { name: "نسکافه", icon: <FaCoffee className="text-yellow-600" />, bgColor: "bg-[#e6c39e]/60" },
  { name: "کاپوچینو", icon: <FaMugHot className="text-red-500" />, bgColor: "bg-[#f3e3c3]/60" },
  { name: "لاته", icon: <FaGlassWhiskey className="text-white" />, bgColor: "bg-[#d8c79d]/60" },
  { name: "ماسالا", icon: <FaLeaf className="text-orange-500" />, bgColor: "bg-[#f5e1c7]/60" },
  { name: "اسپرسو", icon: <FaCoffee className="text-gray-600" />, bgColor: "bg-[#f3e3c3]/60" },
  { name: "آمریکانو", icon: <FaCocktail className="text-blue-400" />, bgColor: "bg-[#d6a58d]/60" },
  { name: "موکا", icon: <FaBeer className="text-green-600" />, bgColor: "bg-[#e6c39e]/60" },
];

const CoffeeShop = () => {
  const { isDarkMode } = useTheme();
  const [selected, setSelected] = useState(null);
  const [quantities, setQuantities] = useState({});

  const handlePurchaseClick = (flavorName) => {
    setSelected(flavorName);
    if (!quantities[flavorName]) {
      setQuantities({ ...quantities, [flavorName]: 1 });
    }
  };

  const handleIncrease = (flavorName) => {
    setQuantities({ ...quantities, [flavorName]: quantities[flavorName] + 1 });
  };

  const handleDecrease = (flavorName) => {
    if (quantities[flavorName] > 1) {
      setQuantities({ ...quantities, [flavorName]: quantities[flavorName] - 1 });
    }
  };

  return (
    <section
      className={`relative max-w-4xl mx-auto p-8 w-full py-16 px-12 ${
        isDarkMode ? "text-white shadow-xl" : "text-black shadow-xl"
      }`}
    >
      <h3
        style={{ textShadow: "2px 2px 5px rgba(255, 223, 0, 0.7)" }}
        className={`${
          isDarkMode ? "bg-yellow-900 text-white" : "bg-yellow-600 text-black"
        } text-2xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 py-3 px-8 rounded-lg shadow-md`}
      >
        <span>چرا هپی کافی؟ چون هر فنجان، لبخندی است!</span>
        <div className="smiley-container">
          <span className="smiley">😊</span>
        </div>
      </h3>

      <Container className="d-flex justify-content-center">
        <Row
          className={`${
            isDarkMode ? "bg-yellow-800/95 text-white" : "bg-yellow-700/95 text-black"
          } justify-content-center w-100 rounded-lg shadow-md p-6 transition-all duration-700 ease-in-out hover:scale-105`}
        >
          <Col>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {flavors.map((flavor) => (
                <div
                  key={flavor.name}
                  className={`flex flex-col items-center justify-center text-center p-4 ${flavor.bgColor} rounded-lg transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500`}
                  style={{ minHeight: '200px' }} // تغییر اندازه ارتفاع کلی
                >
                  <div
                    className={`text-3xl sm:text-4xl mb-3 transition-transform transform hover:scale-125 hover:rotate-3d ${
                      isDarkMode ? "text-yellow-500" : flavor.icon.props.className
                    } shadow-xl`}
                  >
                    {flavor.icon}
                  </div>
                  <p
                    className={`font-semibold text-md sm:text-lg mb-3 ${
                      isDarkMode ? "text-white" : "text-black"
                    } shadow-md`}
                  >
                    {flavor.name}
                  </p>

                  <p
                    className={`text-sm sm:text-lg mb-3 ${
                      isDarkMode ? "text-white" : "text-gray-700"
                    } shadow-sm`}
                  >
                    ۲۰,۰۰۰ تومان
                  </p>

                  {selected === flavor.name ? (
                    <div className="flex flex-col items-center">
                      <div className="flex items-center mb-3">
                        <button
                          onClick={() => handleDecrease(flavor.name)}
                          className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-yellow-500 bg-yellow-500 text-white shadow-md transition-all duration-300 hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-400 transform hover:rotate-3d"
                        >
                          -
                        </button>
                        <span className="mx-4 text-xl">{quantities[flavor.name]}</span>
                        <button
                          onClick={() => handleIncrease(flavor.name)}
                          className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-yellow-500 bg-yellow-500 text-white shadow-md transition-all duration-300 hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-400 transform hover:rotate-3d"
                        >
                          +
                        </button>
                      </div>

                      <Button
                        variant="success"
                        className="w-full py-2 px-4 rounded-lg mt-2 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        پک 20 تایی
                      </Button>
                      <Button
                        variant="warning"
                        className="w-full py-2 px-4 rounded-lg mt-2 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        لیوانی
                      </Button>
                    </div>
                  ) : (
                    <Button
                      variant="primary"
                      onClick={() => handlePurchaseClick(flavor.name)}
                      className="w-full py-2 px-4 rounded-lg transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg flex justify-center items-center"
                    >
                      خرید
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CoffeeShop;
