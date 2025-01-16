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

const Skills = () => (
  <section id="skills" className="relative rounded-lg p-5 w-full py-16 px-10 bg-gradient-to-r from-teal-500 via-green-400 to-blue-500 shadow-lg">
    {/* تایتل بخش مهارت‌ها */}
    <h3 className="bg-black/60 text-4xl font-extrabold text-center mb-12 text-white shadow-md py-3 px-8 rounded-lg">
      مهارت‌ها
    </h3>

    {/* لیست مهارت‌ها */}
    <div className="text-black bg-black/60 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-10 max-w-3xl mx-auto">
      {skills.map((skill) => {
        // انتخاب رنگ نوار مهارت‌ها بر اساس سطح مهارت
        const barColor = skill.level > 80 
          ? 'bg-green-500' 
          : skill.level > 60 
          ? 'bg-yellow-500' 
          : 'bg-red-500';

        return (
          <div key={skill.name} className="flex flex-col items-center text-center">
            {/* آیکون مهارت */}
            <i 
              className={`${skill.icon} text-8xl mb-4 transition-transform transform hover:scale-110`} 
              aria-label={skill.name} 
            ></i>

            {/* نام مهارت */}
            <p className="font-semibold text-xl text-white mb-4">{skill.name}</p>

            {/* نوار درجه مهارت */}
            <div className="w-full bg-white/20 rounded-full h-4 mt-2">
              <div
                className={`${barColor} h-4 rounded-full`}
                style={{ width: `${(skill.level * 0.75)}%` }}  /* اندازه نوار درجه به سه چهارم کاهش یافت */
              ></div>
            </div>

            {/* درصد مهارت */}
            <div className="text-white text-lg mt-2">{skill.level}%</div>
          </div>
        );
      })}
    </div>
  </section>
);

export default Skills;
