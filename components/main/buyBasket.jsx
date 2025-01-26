"use client"
import { useCart } from "@/context/cartContext";
import { useTheme } from "@/context/ThemeContext";
import { useRouter } from "next/navigation"; // برای هدایت به صفحه products
import React from "react";
import { Button, Container, Card } from "react-bootstrap";
import { FaCoffee } from "react-icons/fa";

const BuyBasket = () => {
  const { isDarkMode } = useTheme();
  const { cart, removeFromCart } = useCart();  // استفاده از useCart برای دسترسی به cart
  const router = useRouter();  // استفاده از useRouter برای هدایت به صفحه

  const handleClick = () => {
    router.push("/products");  // هدایت به صفحه products
  };

  return (
    <Container className="py-5 md:w-3/5">
      {/* اگر سبد خرید خالی بود این متن نمایش داده می‌شود */}
      <h2
        className={`text-4xl w-full text-center py-3 px-8 rounded-lg mb-6 shadow-xl transition-all ${
          isDarkMode ? "text-white bg-yellow-800" : "text-black fontb bg-yellow-700"
        }`}
        style={{
          textShadow: "2px 2px 6px rgba(255, 223, 0, 0.6)",
        }}
      >
        {cart.length === 0
          ? "سبد خرید شما خالی است! چرا منتظرید؟ شروع به خرید کنید!" // متن جدید در حالت خالی بودن سبد خرید
          : "سبد خرید شما"}
      </h2>

      {/* نمایش سبد خرید وقتی که سبد خرید پر است */}
      {cart.length > 0 ? (
        <Card
          className={`text-center p-6 rounded-xl shadow-xl transition-all transform hover:scale-105 ${
            isDarkMode ? "bg-yellow-800 text-white" : "bg-yellow-700 text-black"
          }`}
          style={{
            boxShadow: isDarkMode
              ? "rgba(0, 0, 0, 0.1) 0px 4px 8px"
              : "rgba(0, 0, 0, 0.1) 0px 8px 15px",
          }}
        >
          <Card.Body>
            <h3 className="mb-4 flex justify-center items-center text-2xl md:text-xl">
              <FaCoffee size={30} className="mr-2 text-brown-600" />
              سبد خرید شما
            </h3>
            <ul className="mb-4">
              {cart.map((item, index) => (
          <li
          key={index}
          className={`text-lg p-3 my-2 rounded-md ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } border-2 border-gray-500 flex justify-between items-center`}
          style={{
            boxShadow: isDarkMode
              ? "rgba(255, 255, 255, 0.1) 0px 2px 4px"
              : "rgba(0, 0, 0, 0.1) 0px 2px 4px",
          }}
        >
          <span>
            {item.name} - {item.price} تومان - تعداد: {item.quantity}
          </span>
          <Button
            variant="danger"
            size="sm"
            className="ml-4" // دکمه حذف را به راست منتقل می‌کند
            onClick={() => removeFromCart(item.name)} // حذف از سبد خرید
          >
            حذف
          </Button>
        </li>
        
             
              ))}
            </ul>
            <Button
              variant="dark"
              className="px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-700 transition duration-300 transform hover:scale-110"
            >
              تکمیل خرید
            </Button>
          </Card.Body>
        </Card>
      ) : (
        // نمایش کارت دعوت به خرید وقتی سبد خرید خالی است
        <Card
          className={`text-center p-6 rounded-xl shadow-xl transition-all transform hover:scale-105 ${
            isDarkMode ? "bg-yellow-700 text-white" : "bg-yellow-600 text-black"
          }`}
          style={{
            boxShadow: isDarkMode
              ? "rgba(0, 0, 0, 0.1) 0px 4px 8px"
              : "rgba(0, 0, 0, 0.1) 0px 8px 15px",
          }}
        >
          <Card.Body>
            <h3 className="mb-4 flex justify-center items-center text-2xl md:text-xl">
              <FaCoffee size={30} className="mr-2 text-brown-600" />
              چرا منتظرید؟ شروع به خرید کنید!
            </h3>
            <p className="mb-4 md:text-base leading-relaxed">
              همین حالا قهوه مورد علاقه‌تان را انتخاب کرده و از طعم بی‌نظیر آن لذت ببرید.
            </p>
            <Button
              variant="dark"
              className="px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-700 transition duration-300 transform hover:scale-110"
              onClick={handleClick} // فراخوانی تابع هدایت به صفحه products
            >
              خرید قهوه
            </Button>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default BuyBasket;
