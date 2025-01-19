import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Description = () => {
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

  return (
    <section
      id="skills"
      className="relative max-w-3xl mx-auto rounded-xl p-8 w-full py-16 px-12 bg-gradient-to-r from-teal-700 via-green-500 to-blue-600 shadow-xl"
    >
      <h3 className="bg-black/60 text-4xl font-extrabold text-center mb-12 text-white shadow-md py-3 px-8 rounded-lg">
        رسالت هپی کافی چیه؟
      </h3>

      <Container className="d-flex justify-content-center">
        <Row className="text-white bg-black/70 justify-content-center w-100 rounded-lg shadow-md p-6">
          <Col>
            <p className="text-lg text-center leading-relaxed">
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
  );
};

export default Description;
