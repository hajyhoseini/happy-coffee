import React from "react";
import { Carousel, Container, Card, Button } from "react-bootstrap";
import {
  FaHotjar,
  FaCoffee,
  FaMugHot,
  FaGlassWhiskey,
  FaLeaf,
  FaCocktail,
  FaBeer,
} from "react-icons/fa"; // وارد کردن آیکون‌های مورد نظر از react-icons

const skills = [
  {
    name: "هات چاکلت",
    icon: <FaHotjar className="text-yellow-800" />,
    description:
      "هات چاکلت یک نوشیدنی داغ و دلپذیر است که از ترکیب پودر شکلات، شیر و گاهی خامه تهیه می‌شود. این نوشیدنی، گرمای دلنشینی را به فرد می‌دهد و معمولاً در روزهای سرد محبوب است. هات چاکلت با طعم شیرین و غنی خود شناخته می‌شود.",
    link: "https://fa.wikipedia.org/wiki/Hot_chocolate",
  },
  {
    name: "نسکافه",
    icon: <FaCoffee className="text-yellow-600" />,
    description:
      "نسکافه یک نوع قهوه فوری است که به سرعت در آب یا شیر حل می‌شود و به افراد این امکان را می‌دهد که بدون نیاز به دستگاه‌های پیچیده، قهوه‌ای با طعم غنی تهیه کنند. این نوشیدنی معمولاً به دلیل سرعت و راحتی در تهیه بسیار محبوب است.",
    link: "https://fa.wikipedia.org/wiki/Nescafé",
  },
  {
    name: "کاپوچینو",
    icon: <FaMugHot className="text-red-500" />,
    description:
      "کاپوچینو یک نوشیدنی قهوه‌ای است که از ترکیب قهوه اسپرسو، شیر بخار داده‌شده و کف شیر درست می‌شود. این نوشیدنی کلاسیک به خاطر طعم ملایم و لایه‌های نرم شیر شناخته شده است.",
    link: "https://fa.wikipedia.org/wiki/Cappuccino",
  },
  {
    name: "لاته",
    icon: <FaGlassWhiskey className="text-white" />,
    description:
      "لاته یک نوع قهوه است که از ترکیب قهوه اسپرسو و شیر بخار داده‌شده ساخته می‌شود. این نوشیدنی به دلیل طعم ملایم و کرمی‌اش و همچنین مقدار زیادی شیر نسبت به سایر قهوه‌ها محبوب است.",
    link: "https://fa.wikipedia.org/wiki/Latte",
  },
  {
    name: "ماسالا",
    icon: <FaLeaf className="text-orange-500" />,
    description:
      "چای ماسالا یک نوشیدنی هندی است که از ترکیب چای سیاه و ادویه‌جات معطر مانند دارچین، زنجبیل، هل، میخک و فلفل سیاه درست می‌شود. این نوشیدنی با طعم‌های پیچیده و معطر خود محبوبیت جهانی پیدا کرده است.",
    link: "https://fa.wikipedia.org/wiki/Masala_tea",
  },
  {
    name: "اسپرسو",
    icon: <FaCoffee className="text-black" />,
    description:
      "اسپرسو یک نوع قهوه بسیار غلیظ و قوی است که در آن آب با فشار از میان دانه‌های آسیاب‌شده عبور می‌کند. این قهوه به دلیل طعم غنی و معطر خود، پایه‌گذار سایر نوشیدنی‌های قهوه است.",
    link: "https://fa.wikipedia.org/wiki/Espresso",
  },
  {
    name: "آمریکانو",
    icon: <FaCocktail className="text-blue-400" />,
    description:
      "آمریکانو یک نوشیدنی قهوه‌ای است که از ترکیب اسپرسو و آب داغ درست می‌شود. طعم این نوشیدنی شبیه به قهوه فیلتر است اما غلظت کمتری دارد.",
    link: "https://fa.wikipedia.org/wiki/Americano",
  },
  {
    name: "موکا",
    icon: <FaBeer className="text-green-600" />,
    description:
      "موکا یک نوع نوشیدنی قهوه است که از ترکیب اسپرسو، شیر بخار داده‌شده و شکلات درست می‌شود. این نوشیدنی با طعم شیرین و شکلاتی خود، به‌ویژه برای علاقه‌مندان به شکلات مناسب است.",
    link: "https://fa.wikipedia.org/wiki/Mocha",
  },
];

const DescForSkill = () => {
  return (
    <Container className="py-5 md:w-3/5">
      <h2 className="bg-dark text-4xl w-full text-white text-center py-3 px-8 rounded-lg mb-4">
        توضیح قهوه ها
      </h2>

      {/* استفاده از Carousel برای اسلایدها */}
      <Carousel className="">
        {skills.map((skill, index) => (
          <Carousel.Item key={index} className="animate__animated animate__fadeIn">
            <Card className="text-center p-3 bg-dark text-white rounded-lg">
              <Card.Body>
                {/* عنوان و آیکون */}
                <Card.Title className="d-flex justify-content-center align-items-center mb-4 min-w-min bg-black/60">
                  <div className="text-4xl me-3 transition-transform transform hover:scale-110">
                    {skill.icon}
                  </div>
                  {skill.name}
                </Card.Title>

                {/* توضیحات */}
                <Card.Text className="bg-white text-dark text-sm md:text-xl p-3 rounded-lg">
                  {skill.description}
                </Card.Text>

                {/* دکمه جزئیات بیشتر */}
                <Button
                  variant="outline-light"
                  className="mt-3 px-6 py-3 rounded-lg shadow-lg transition-all transform hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={() => window.open(skill.link, "_blank")}
                >
                  جزئیات بیشتر
                </Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default DescForSkill;
