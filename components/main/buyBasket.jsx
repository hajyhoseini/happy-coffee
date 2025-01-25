"use client";
import React from "react";
import { Button, Container, Card } from "react-bootstrap";
import { FaCoffee } from "react-icons/fa"; // اضافه کردن آیکون قهوه

const BuyBasket = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false); // برای تغییر حالت شب و روز

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Container className="py-5 md:w-3/5">
      <h2
        className={`text-4xl w-full text-center py-3 px-8 rounded-lg mb-4 shadow-lg ${
          isDarkMode ? "text-white bg-yellow-800" : "text-black bg-yellow-700"
        }`}
        style={{
          textShadow: "2px 2px 5px rgba(255, 223, 0, 0.7)",
        }}
      >
        سبد خرید شما خالی است!
      </h2>

      <Card
        className={`text-center p-5 rounded-lg shadow-lg transition-all transform hover:scale-105 ${
          isDarkMode ? "bg-brown-800 text-white" : "bg-yellow-800 text-black"
        }`}
        style={{
          backgroundColor: isDarkMode ? "#6f4f1f" : "#ff8c00", // رنگ قهوه‌ای برای شب و رنگ نارنجی برای روز
          color: isDarkMode ? "#fff" : "#000",
        }}
      >
        <Card.Body>
          <h3 className="mb-4 flex justify-center items-center">
            <FaCoffee size={30} className="mr-2 text-yellow-300" />
            چرا منتظرید؟ شروع به خرید کنید!
          </h3>
          <p className="mb-4">
            همین حالا قهوه مورد علاقه‌تان را انتخاب کرده و از طعم بی‌نظیر آن
            لذت ببرید.
          </p>
          <Button
            variant="dark"
            className="px-5 py-2 text-xl font-semibold rounded-lg shadow-md hover:bg-yellow-800 transition duration-300"
            onClick={() => alert("هدایت به صفحه خرید")}
          >
            خرید قهوه
          </Button>
        </Card.Body>
      </Card>

      {/* دکمه تغییر حالت شب و روز */}
      <Button
        onClick={toggleTheme}
        variant="outline-light"
        className="mt-5 px-5 py-2 text-xl font-semibold rounded-lg"
      >
        {isDarkMode ? "حالت روز" : "حالت شب"}
      </Button>
    </Container>
  );
};

export default BuyBasket;
