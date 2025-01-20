"use client"
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";

const Description = () => {
  const [showModal, setShowModal] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

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
   <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        className="transition-all duration-500 ease-in-out transform scale-105"
      >
        <Modal.Header closeButton className="bg-brown-600 text-white border-0 shadow-lg rounded-t-xl">
          <Modal.Title className="text-lg font-semibold text-center w-full">
            خوش آمدید به هپی کافی!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light-brown text-brown-900 p-8 rounded-b-xl shadow-2xl">
          <p>
            خوش آمدید به هپی کافی! اینجا جایی است که طعم واقعی قهوه را در هر جرعه حس خواهید کرد. امیدواریم لحظات خوبی را در کنار ما تجربه کنید.
          </p>
          {/* دکمه وسط صفحه */}
          <div className="flex justify-center mt-8">
            <Button
              variant="primary"
              onClick={handleCloseModal}
              className="bg-brown-700 hover:bg-brown-800 text-white font-medium py-3 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              بستن
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      {/* محتوا */}
      <section
        id="skills"
        className="relative max-w-3xl mx-auto rounded-xl p-8 w-full py-16 px-12 bg-gradient-to-r from-teal-600 via-blue-500 to-purple-600 shadow-xl"
      >
        <h3 className="bg-black/60 text-2xl md:text-4xl font-extrabold text-center mb-12 text-white shadow-md py-3 px-8 rounded-lg">
          رسالت هپی کافی چیه؟
        </h3>

        <Container className="d-flex justify-content-center">
          <Row className="text-white bg-black/70 justify-content-center w-100 rounded-lg shadow-md p-6">
            <Col>
              <p className="text-sm md:text-lg text-center leading-relaxed">
                هپی کافی، جایی است که طعم واقعی قهوه را می‌توانید در هر جرعه احساس کنید. ما در هپی کافی به شما تجربه‌ای می‌دهیم که هر فنجان قهوه‌مان لبخند را بر لبانتان می‌آورد. اینجا قهوه تنها یک نوشیدنی نیست، بلکه یک لحظه از شادی است. 
                ما بهترین دانه‌های قهوه را با دقت و عشق انتخاب کرده‌ایم تا طعم و عطر آن همیشه خاطره‌انگیز باشد. هدف ما این است که در هر فنجان قهوه‌، نه تنها طعم لذت‌بخش را تجربه کنید، بلکه حس خوب و دلگرم‌کننده‌ای را نیز با خود ببرید. 
                هپی کافی، همیشه در کنار شماست تا روزتان را با یک لبخند شیرین آغاز کنید. 
                <span id="warmText" className={isVisible ? "animateWarmText" : ""}>
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
