"use client"
import { useCart } from "@/context/cartContext";
import { useTheme } from "@/context/ThemeContext";
import { useRouter } from "next/navigation"; // برای هدایت به صفحه products
import React from "react";
import { Button, Container, Card } from "react-bootstrap";
import { FaCoffee } from "react-icons/fa";

const BuyBasket = () => {
  const { isDarkMode } = useTheme();
  const { cart, removeFromCart, addToCart } = useCart(); // اضافه کردن addToCart برای بروزرسانی تعداد
  const router = useRouter();  // استفاده از useRouter برای هدایت به صفحه

  const handleClick = () => {
    router.push("/products");  // هدایت به صفحه products
  };

  // محاسبه مجموع قیمت سبد خرید
  const totalAmount = cart.reduce((total, item) => {
    return total + item.quantity * 400000; // ضرب تعداد هر محصول در قیمت 400000 تومان
  }, 0);

  // افزایش تعداد محصول
  const handleIncrease = (productName) => {
    const product = cart.find(item => item.name === productName);
    if (product) {
      addToCart(productName, product.price, 1); // اضافه کردن یک واحد از محصول به سبد خرید
    }
  };

  // کاهش تعداد محصول
  const handleDecrease = (productName) => {
    const product = cart.find(item => item.name === productName);
    if (product && product.quantity > 1) {
      addToCart(productName, product.price, -1); // کاهش یک واحد از محصول از سبد خرید
    }
  };

  return (
    <Container className="py-5 md:w-3/5">
      {/* اگر سبد خرید خالی بود این متن نمایش داده می‌شود */}
   
<h2
  className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-full text-center py-4 sm:py-3 md:py-4 px-6 sm:px-8 rounded-lg mb-4 sm:mb-6 shadow-xl transition-all ${
    isDarkMode
      ? "text-white bg-black/70 backdrop-blur-md"
      : "text-black font-bold bg-white/70"
  }`}
  style={{
    textShadow: isDarkMode
      ? "2px 2px 8px rgba(255, 223, 0, 0.6), 0px 0px 25px rgba(255, 223, 0, 0.5)"
      : "2px 2px 6px rgba(0, 0, 0, 0.6), 0px 0px 20px rgba(0, 0, 0, 0.4)",
    transform: "rotate(-1deg) skew(-1deg)",
    letterSpacing: "1px",
    animation: "glow 1.5s ease-in-out infinite alternate", // افکت برق زدن طلایی
  }}
>
  
  {cart.length === 0
    ? "سبد خرید شما خالی است! چرا منتظرید؟ شروع به خرید کنید!"
    : "سبد خرید شما"}
  <FaCoffee
    size={40}
    className="inline-block mr-3"
    style={{
      animation: "glow 1.5s ease-in-out infinite alternate", // افکت برق طلایی به آیکون
      color: "#ffcc00",
    }}
  />
</h2>



      {/* نمایش سبد خرید وقتی که سبد خرید پر است */}
      {cart.length > 0 ? (
        <Card
          className={`text-center p-4 sm:p-5 md:p-6 rounded-xl shadow-xl transition-all transform hover:scale-105 ${
            isDarkMode ? "bg-yellow-800/70 text-white" : "bg-yellow-700/80 text-black"
          }`}
          style={{
            boxShadow: isDarkMode
              ? "rgba(0, 0, 0, 0.1) 0px 4px 8px"
              : "rgba(0, 0, 0, 0.1) 0px 8px 15px",
          }}
        >
          <Card.Body>
          
            <ul className="mb-4 sm:mb-5">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className={`text-base sm:text-lg p-3 sm:p-4 my-2 rounded-md ${
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
                  <div className="flex items-center ml-4">
                    {/* دکمه کاهش تعداد */}
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => handleDecrease(item.name)}
                      className="mr-2"
                    >
                      -
                    </Button>
                    {/* تعداد محصول */}
                    <span>{item.quantity}</span>
                    {/* دکمه افزایش تعداد */}
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => handleIncrease(item.name)}
                      className="ml-2"
                    >
                      +
                    </Button>
                  </div>
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

            {/* نمایش مجموع کل خرید */}
            <div
              className={`mt-4 text-xl sm:text-2xl md:text-3xl font-bold ${
                isDarkMode ? "text-yellow-300 " : "text-black"
              } bg-gradient-to-r ${
                isDarkMode ? " bg-black" : " bg-white"
              } rounded-lg p-4 sm:p-5 md:p-6 shadow-lg shadow-yellow-400`}
            >
              <span>مجموع خرید شما: </span>
              <span>{totalAmount.toLocaleString()} تومان</span>
            </div>

            <Button
              variant="dark"
              className="px-4 sm:px-5 py-2 sm:py-3 text-lg sm:text-xl font-semibold rounded-lg shadow-lg hover:bg-yellow-700 transition duration-300 transform hover:scale-110 mt-4 sm:mt-6"
            >
              تکمیل خرید
            </Button>
          </Card.Body>
        </Card>
      ) : (
        // نمایش کارت دعوت به خرید وقتی سبد خرید خالی است
        <Card
          className={`text-center p-4 sm:p-5 md:p-6 rounded-xl shadow-xl transition-all transform hover:scale-105 ${
            isDarkMode ? "bg-yellow-800 text-white" : "bg-yellow-700 text-black"
          }`}
          style={{
            boxShadow: isDarkMode
              ? "rgba(0, 0, 0, 0.1) 0px 4px 8px"
              : "rgba(0, 0, 0, 0.1) 0px 8px 15px",
          }}
        >
          <Card.Body>
            <h3 className="mb-4 sm:mb-5 flex justify-center items-center text-xl sm:text-2xl md:text-3xl">
              <FaCoffee size={30} className="mr-2 text-brown-600" />
              چرا منتظرید؟ شروع به خرید کنید!
            </h3>
            <p className="mb-4 md:text-base leading-relaxed">
              همین حالا قهوه مورد علاقه‌تان را انتخاب کرده و از طعم بی‌نظیر آن لذت ببرید.
            </p>
            <Button
              variant="dark"
              className="px-4 sm:px-5 py-2 sm:py-3 text-lg sm:text-xl font-semibold rounded-lg shadow-lg hover:bg-yellow-700 transition duration-300 transform hover:scale-110"
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
