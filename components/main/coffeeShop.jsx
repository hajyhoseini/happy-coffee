import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaHotjar, FaCoffee, FaMugHot, FaGlassWhiskey, FaLeaf, FaCocktail, FaBeer } from "react-icons/fa";

const flavors = [
  { name: "هات چاکلت", icon: <FaHotjar className="text-yellow-800" /> },
  { name: "نسکافه", icon: <FaCoffee className="text-yellow-600" /> },
  { name: "کاپوچینو", icon: <FaMugHot className="text-red-500" /> },
  { name: "لاته", icon: <FaGlassWhiskey className="text-white" /> },
  { name: "ماسالا", icon: <FaLeaf className="text-orange-500" /> },
  { name: "اسپرسو", icon: <FaCoffee className="text-black" /> },
  { name: "آمریکانو", icon: <FaCocktail className="text-blue-400" /> },
  { name: "موکا", icon: <FaBeer className="text-green-600" /> },
];

const CoffeeShop = () => {
  return (
    <section className="max-w-3xl mx-auto p-5 bg-white/70 rounded-lg shadow-lg mt-10">
      <h3 className="text-2xl md:text-4xl font-extrabold text-center mb-8 text-gray-800">
        قهوه لیوانی با قیمت ۲۰,۰۰۰ تومان
      </h3>

      <Container>
        <Row className="justify-content-center">
          {flavors.map((flavor) => (
            <Col
              key={flavor.name}
              xs={6}
              sm={4}
              lg={3}
              className="d-flex flex-column align-items-center text-center mb-5"
            >
              <div className="text-6xl mb-4 transition-transform transform hover:scale-110">
                {flavor.icon}
              </div>
              <p className="font-semibold text-xl text-gray-800 mb-4">{flavor.name}</p>

              {/* نمایش قیمت */}
              <p className="text-lg text-gray-700 mb-4">۲۰,۰۰۰ تومان</p>

              {/* دکمه خرید */}
              <Button variant="primary" className="w-100">
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
