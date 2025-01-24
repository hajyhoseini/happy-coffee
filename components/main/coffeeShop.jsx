"use client"
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaHotjar, FaCoffee, FaMugHot, FaGlassWhiskey, FaLeaf, FaCocktail, FaBeer } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext"; // استفاده از Context برای تم

const flavors = [
  { name: "هات چاکلت", icon: <FaHotjar className="text-yellow-800" /> },
  { name: "نسکافه", icon: <FaCoffee className="text-yellow-600" /> },
  { name: "کاپوچینو", icon: <FaMugHot className="text-red-500" /> },
  { name: "لاته", icon: <FaGlassWhiskey className="text-white" /> },
  { name: "ماسالا", icon: <FaLeaf className="text-orange-500" /> },
  { name: "اسپرسو", icon: <FaCoffee className="text-gray-600" /> },
  { name: "آمریکانو", icon: <FaCocktail className="text-blue-400" /> },
  { name: "موکا", icon: <FaBeer className="text-green-600" /> },
];

const CoffeeShop = () => {
  const { isDarkMode } = useTheme(); // استفاده از تم تاریک یا روشن

  return (
    <section
      className={`relative max-w-3xl mx-auto p-5 ${
        isDarkMode
          ? "bg-black/40 text-white"
          : " text-gray-800"
      } rounded-lg shadow-lg mt-4 py-16 px-10 transform transition-all duration-500`}
    >
      <h3
        className={`text-2xl md:text-4xl rounded-lg p-3 font-extrabold text-center mb-12 ${
          isDarkMode ? "text-white  bg-black/70" : "text-black  bg-white/60"
        }`}
        style={{ textShadow: isDarkMode ? "2px 2px 5px rgba(255, 223, 0, 0.7)" : "none" }}
      >
      قهوه لیوانی در 8 طعم رویایی
      </h3>

      <Container>
        <Row   className={`${
              isDarkMode ? "bg-black/60 text-white" : "bg-white/60 text-black"
            } justify-content-center w-100 rounded-lg shadow-md p-6 transform transition-all duration-700 ease-in-out hover:scale-105`}>
          {flavors.map((flavor) => (
            <Col
              key={flavor.name}
              xs={6}
              sm={4}
              lg={3}
              className="d-flex flex-column align-items-center text-center mb-5"
            >
              <div
                className={`text-6xl mb-4 transition-transform transform hover:scale-110 ${
                  isDarkMode ? "text-yellow-500" : flavor.icon.props.className
                }`}
              >
                {flavor.icon}
              </div>
              <p
                className={`font-semibold text-xl mb-4 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {flavor.name}
              </p>

              <p
                className={`text-lg mb-4 ${
                  isDarkMode ? "text-white" : "text-gray-700"
                }`}
              >
                ۲۰,۰۰۰ تومان
              </p>

              <Button
                variant="primary"
                className={`w-100 py-2 px-4 rounded-lg transform hover:scale-105 transition-all duration-300 ${
                  isDarkMode ? "bg-yellow-500" : "bg-blue-500"
                }`}
              >
                خرید
              </Button>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CoffeeShop;
