import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { FaHotjar, FaCoffee, FaMugHot, FaGlassWhiskey, FaLeaf, FaCocktail, FaBeer } from "react-icons/fa"; // آیکون‌های قهوه
const flavors = [
  { name: "هات چاکلت", icon: <FaHotjar className="text-yellow-800" />, level: 90 },
  { name: "نسکافه", icon: <FaCoffee className="text-yellow-600" />, level: 85 },
  { name: "کاپوچینو", icon: <FaMugHot className="text-red-500" />, level: 90 },
  { name: "لاته", icon: <FaGlassWhiskey className="text-white" />, level: 75 },
  { name: "ماسالا", icon: <FaLeaf className="text-orange-500" />, level: 80 },
  { name: "اسپرسو", icon: <FaCoffee className="text-black" />, level: 85 },
  { name: "آمریکانو", icon: <FaCocktail className="text-blue-400" />, level: 75 },
  { name: "موکا", icon: <FaBeer className="text-green-600" />, level: 80 },
];


const Skills = () => {
  return (
    <section
      id="skills"
      className="relative max-w-3xl mx-auto rounded-lg p-5 w-full py-16 px-10 bg-gradient-to-r from-teal-500 via-green-400 to-blue-500 shadow-lg"
    >
      {/* تایتل بخش طعم‌ها */}
      <h3 className="bg-black/60 text-4xl font-extrabold text-center mb-12 text-white shadow-md py-3 px-8 rounded-lg">
      طعم‌ها و میزان رضایت 
      </h3>

      {/* لیست طعم‌ها */}
      <Container className="d-flex justify-content-center">
        <Row className="text-black bg-black/60 justify-content-center w-100">
          {flavors.map((flavor) => {
            // انتخاب رنگ نوار بر اساس سطح
            const barColor =
              flavor.level > 80
                ? "success"
                : flavor.level > 60
                ? "warning"
                : "danger";

            return (
              <Col
                key={flavor.name}
                xs={6}
                sm={4}
                lg={4}
                className="d-flex flex-column align-items-center text-center mb-5"
              >
                {/* آیکون طعم */}
                <div className="text-8xl mb-4 transition-transform transform hover:scale-110">
                  {flavor.icon}
                </div>

                {/* نام طعم */}
                <p className="font-semibold text-xl text-white mb-4">
                  {flavor.name}
                </p>

                {/* نوار درجه طعم */}
                <ProgressBar
                  now={flavor.level * 0.75} // اندازه نوار درجه به سه چهارم کاهش یافته است
                  variant={barColor}
                  className="w-100"
                  style={{ height: "10px", borderRadius: "20px" }}
                />

                {/* درصد طعم */}
                <div className="text-white text-lg mt-2">{flavor.level}%</div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;

