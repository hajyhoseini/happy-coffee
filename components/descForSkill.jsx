import React from 'react';

const skills = [
  { 
    name: "HTML", 
    icon: "animate-flash fab fa-html5 text-orange-500", 
    description: "HTML (زبان نشانه‌گذاری ابرمتن) ساختار اصلی صفحات وب را فراهم می‌کند. با استفاده از HTML، می‌توان متن، تصاویر، لینک‌ها، فرم‌ها و بسیاری از اجزای دیگر را به صفحه اضافه کرد. این زبان به عنوان پایه و اساس هر وب‌سایتی شناخته می‌شود. HTML با استفاده از تگ‌ها و عناصر مختلف به مرورگرها دستور می‌دهد چگونه محتوای صفحه را نمایش دهند."
  },
  { 
    name: "CSS", 
    icon: "animate-flash fab fa-css3-alt text-blue-500", 
    description: "CSS (شیوه‌نامهٔ سطحی) برای طراحی و استایل‌دهی به صفحات وب استفاده می‌شود. این زبان به شما امکان می‌دهد تا ظاهر HTML را از جمله رنگ‌ها، فونت‌ها، چیدمان و انیمیشن‌ها تنظیم کنید. CSS به تفکیک طراحی از محتوا کمک می‌کند و باعث می‌شود صفحات وب جذاب‌تر و قابل دسترسی‌تر باشند. با CSS می‌توان صفحات وب را برای انواع دستگاه‌ها بهینه‌سازی کرد."
  },
  { 
    name: "JavaScript", 
    icon: "animate-flash fab fa-js text-yellow-300", 
    description: "JavaScript یک زبان برنامه‌نویسی قدرتمند است که در سمت کاربر (Client-side) برای ایجاد تعاملات دینامیک در صفحات وب استفاده می‌شود. این زبان برای ساخت برنامه‌های وب پویا و به‌روز در زمان واقعی بسیار مفید است. JavaScript به شما امکان می‌دهد تا محتوا را تغییر دهید، فرم‌ها را اعتبارسنجی کنید و انیمیشن‌ها و جلوه‌های ویژه ایجاد کنید. این زبان در کنار HTML و CSS برای ساخت وب‌سایت‌های تعاملی ضروری است."
  },
  { 
    name: "React", 
    icon: "animate-flash fab fa-react text-blue-500", 
    description: "React یک کتابخانه جاوا اسکریپت است که توسط فیس‌بوک ساخته شده و برای ساخت رابط‌های کاربری (UI) پویا و قابل مقیاس‌پذیر استفاده می‌شود. React از مفهوم کامپوننت‌ها برای ساختاردهی و مدیریت اپلیکیشن‌های وب استفاده می‌کند. این کتابخانه با استفاده از Virtual DOM سرعت بالایی در بارگذاری صفحات وب ارائه می‌دهد و تجربه کاربری بهتری ایجاد می‌کند."
  },
  { 
    name: "Next.js", 
    icon: "animate-flash fas fa-layer-group text-yellow-400", 
    description: "Next.js یک فریم‌ورک محبوب برای React است که امکاناتی همچون رندرینگ سمت سرور (SSR) و رندرینگ ایستا (Static Site Generation) را فراهم می‌کند. این فریم‌ورک به شما امکان می‌دهد تا اپلیکیشن‌های وب سریع‌تر و بهینه‌تر بسازید. همچنین با پشتیبانی از مسیریابی خودکار، می‌توانید برنامه‌های پیچیده را با سادگی بیشتری مدیریت کنید."
  },
  { 
    name: "Tailwind CSS", 
    icon: "animate-flash fas fa-wind text-blue-500", 
    description: "Tailwind CSS یک فریم‌ورک CSS utility-first است که برای ساخت طراحی‌های انعطاف‌پذیر و سریع استفاده می‌شود. برخلاف فریم‌ورک‌های CSS دیگر که شامل کلاس‌های از پیش تعریف‌شده برای طراحی هستند، Tailwind به شما ابزارهایی می‌دهد تا سبک‌ها را مستقیماً در HTML و JSX تنظیم کنید. این روش به شما کمک می‌کند تا کد تمیزتر و قابل نگهداری‌تری داشته باشید."
  },
  { 
    name: "Bootstrap", 
    icon: "animate-flash fab fa-bootstrap text-green-500", 
    description: "Bootstrap یک فریم‌ورک محبوب CSS است که برای طراحی وب‌سایت‌های واکنش‌گرا و موبایل‌فرندلی طراحی شده است. این فریم‌ورک شامل مجموعه‌ای از اجزای رابط کاربری، طرح‌بندی‌ها و الگوهای طراحی است که به شما کمک می‌کند وب‌سایت‌های زیبا و کاربرپسند بسازید. Bootstrap به راحتی با JavaScript ادغام می‌شود و باعث می‌شود فرآیند توسعه سریع‌تر شود."
  },
  { 
    name: "GitHub", 
    icon: "animate-flash fab fa-github text-orange-500", 
    description: "GitHub یک پلتفرم برای کنترل نسخه و همکاری در پروژه‌های نرم‌افزاری است. این سرویس به برنامه‌نویسان این امکان را می‌دهد که کدهای خود را به صورت آنلاین ذخیره کنند، تغییرات را پیگیری کنند و به راحتی با سایر توسعه‌دهندگان همکاری کنند. GitHub از Git به عنوان سیستم کنترل نسخه استفاده می‌کند و بسیاری از پروژه‌های متن‌باز در این پلتفرم میزبانی می‌شوند."
  },
  { 
    name: "Typing touch", 
    icon: "animate-flash fas fa-keyboard text-amber-300", 
    description: "Typing touch به مهارت تایپ بدون نگاه به صفحه کلید اطلاق می‌شود. این مهارت به کاربران کمک می‌کند تا به سرعت و با دقت بالا تایپ کنند. با استفاده از تایپ صحیح و کارآمد، می‌توان زمان خود را صرفه‌جویی کرد و بهره‌وری را افزایش داد. این مهارت برای افرادی که به طور مداوم با متن سر و کار دارند، بسیار ضروری است."
  },
];

const DescForSkill = () => {
  return (
    <div className="container py-5">
      <h3 className="bg-gray-800 text-4xl font-extrabold text-center mb-12 text-white shadow-lg py-3 px-8 rounded-lg hover:scale-105 transition-all duration-500 ease-in-out">
        توضیح مهارت‌ها
      </h3>

      {/* Bootstrap Carousel */}
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Map through skills array to create carousel items dynamically */}
          {skills.map((skill, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''} animate__animated animate__fadeIn`} key={index}>
              <div className="d-block w-full bg-black/50 text-white p-5 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-500 ease-in-out group flex justify-center items-center h-auto sm:h-auto">
                <div className="flex flex-col justify-center items-center">
                  <h5 className="text-center text-3xl text-white group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-500 ease-in-out mb-6 sm:mb-6 px-6 py-3 rounded-lg">
                    <i className={`${skill.icon} text-4xl me-3 group-hover:scale-125 transition-all duration-500 ease-in-out`}></i> 
                    {skill.name}
                  </h5>
                  {/* Remove max-height and allow text to flow naturally */}
                  <p className="bg-white/80 backdrop-blur-lg text-black p-3 rounded-lg transition-all duration-500 ease-in-out group-hover:text-gray-300 mb-6 w-full sm:w-full">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">قبلی</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">بعدی</span>
        </button>
      </div>
    </div>
  );
};

export default DescForSkill;
