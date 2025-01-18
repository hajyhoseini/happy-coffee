const skills = [
  { name: "HTML", icon: "animate-flash fab fa-html5 text-orange-500", level: 90 },
  { name: "CSS", icon: "animate-flash fab fa-css3-alt text-blue-500", level: 80 },
  { name: "JavaScript", icon: "animate-flash fab fa-js text-yellow-300", level: 85 },
  { name: "React", icon: "animate-flash fab fa-react text-blue-500", level: 75 },
  { name: "Next.js", icon: "animate-flash fas fa-layer-group text-yellow-400", level: 70 },
  { name: "Tailwind CSS", icon: "animate-flash fas fa-wind text-blue-500", level: 80 },
  { name: "Bootstrap", icon: "animate-flash fab fa-bootstrap text-green-500", level: 80 },
  { name: "GitHub", icon: "animate-flash fab fa-github text-orange-500", level: 80 },
  { name: "Typing touch", icon: "animate-flash fas fa-keyboard text-amber-300", level: 70 },
];

import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

const Skills = () => {
  return (
    <section id="skills" className="relative max-w-3xl mx-auto rounded-lg p-5 w-full py-16 px-10 bg-gradient-to-r from-teal-500 via-green-400 to-blue-500 shadow-lg">
      {/* تایتل بخش مهارت‌ها */}
      <h3 className="bg-black/60 text-4xl font-extrabold text-center mb-12 text-white shadow-md py-3 px-8 rounded-lg">
        مهارت‌ها
      </h3>

      {/* لیست مهارت‌ها */}
      <Container className="d-flex justify-content-center">
        <Row className="text-black bg-black/60 justify-content-center w-100">
          {skills.map((skill) => {
            // انتخاب رنگ نوار مهارت‌ها بر اساس سطح مهارت
            const barColor = skill.level > 80 
              ? 'success' 
              : skill.level > 60 
              ? 'warning' 
              : 'danger';

            return (
              <Col key={skill.name} xs={6} sm={4} lg={4} className="d-flex flex-column align-items-center text-center mb-5">
                {/* آیکون مهارت */}
                <i 
                  className={`${skill.icon} text-8xl mb-4 transition-transform transform hover:scale-110`} 
                  aria-label={skill.name} 
                ></i>

                {/* نام مهارت */}
                <p className="font-semibold text-xl text-white mb-4">{skill.name}</p>

                {/* نوار درجه مهارت */}
                <ProgressBar 
                  now={skill.level * 0.75}  // اندازه نوار درجه به سه چهارم کاهش یافته است
                  variant={barColor}
                  className="w-100"
                  style={{ height: '10px', borderRadius: '20px' }}
                />

                {/* درصد مهارت */}
                <div className="text-white text-lg mt-2">{skill.level}%</div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
