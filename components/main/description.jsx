"use client";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import WelcomeModal from "./welcomeModal";
import { useTheme } from "@/context/ThemeContext";

const Description = () => {
  const [showModal, setShowModal] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  // استفاده از Intersection Observer برای شناسایی ظاهر شدن متن
  useEffect(() => {
    const target = document.querySelector("#warmText");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      {/* مدال */}
      <WelcomeModal showModal={showModal} handleCloseModal={handleCloseModal} />

      {/* محتوا */}
      <section
        id="skills"
        className={`relative max-w-3xl mx-auto rounded-xl p-8 w-full py-16 px-12 ${
          isDarkMode
            ? " text-white shadow-xl "  // حالت شب با افکت بلور
            : " text-black shadow-xl " // حالت روز با افکت بلور
        }`}
      >
        <h3
          className={`${
            isDarkMode ? "bg-black/60 text-white" : "bg-white/80 text-black"
          } text-2xl md:text-4xl font-extrabold text-center  mb-12 shadow-md py-3 px-8 rounded-lg`}
        >
          رسالت هپی کافی چیه؟
        </h3>

        <Container className="d-flex justify-content-center">
          <Row
            className={`${
              isDarkMode ? "bg-black/70 text-white" : "bg-white/80 text-black"
            } justify-content-center w-100 rounded-lg shadow-md p-6`}
          >
            <Col>
              <p className="md:text-lg text-center leading-relaxed">
                هپی کافی، جایی است که طعم واقعی قهوه را می‌توانید در هر جرعه احساس کنید. ما در هپی کافی به شما تجربه‌ای می‌دهیم که هر فنجان قهوه‌مان لبخند را بر لبانتان می‌آورد. اینجا قهوه تنها یک نوشیدنی نیست، بلکه یک لحظه از شادی است. 
                ما بهترین دانه‌های قهوه را با دقت و عشق انتخاب کرده‌ایم تا طعم و عطر آن همیشه خاطره‌انگیز باشد. هدف ما این است که در هر فنجان قهوه‌، نه تنها طعم لذت‌بخش را تجربه کنید، بلکه حس خوب و دلگرم‌کننده‌ای را نیز با خود ببرید. 
                هپی کافی، همیشه در کنار شماست تا روزتان را با یک لبخند شیرین آغاز کنید. 
                <span
                  id="warmText"
                  className={`${isVisible ? "animateWarmText" : ""} ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  <span className="smiley">😊</span> دمتان گرم!
                </span>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Description;
