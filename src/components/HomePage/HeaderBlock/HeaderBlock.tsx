import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import TeamImage1 from "../../img/AllPhoto/Карусель осн. сторінки/9193bd73629eca9ef538a5f9a97e2e67.jpg";
import TeamImage3 from "../../img/AllPhoto/Карусель осн. сторінки/af6ffa23-a40d-4549-aed7-1835c612913c.jpg";
import TeamImage2 from "../../img/AllPhoto/Карусель осн. сторінки/pexels-quark-studio-2507016.jpg";
import TeamImage4 from "../../img/AllPhoto/Карусель осн. сторінки/pexels-vecislavas-popa-1571462.jpg";
import { Logo } from "../../img/Logo";
import s from "./index.module.scss";

const HeaderBlock = () => {
  const teamMembers = [
    { img: TeamImage1 },
    { img: TeamImage2 },
    { img: TeamImage3 },
    { img: TeamImage4 }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const setSlideHeight = (index) => {
    return { height: index === activeIndex ? "400px" : "300px" };
  };
  const scrollToSection = (sectionId: any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={s.globalHeader}>
      <div className="w-full flex justify-around items-center">
        <div>
          <Logo />
        </div>
        <div className={s.buttonBlock}>
          <div style={{ cursor: "pointer" }}>Home</div>
          <div style={{ cursor: "pointer" }}>Leistung</div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => scrollToSection("aboutUs")}
          >
            Über Uns
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => scrollToSection("galerie")}
          >
            Galerie
          </div>
          <div onClick={() => scrollToSection("kontakte")}>Kontakt</div>
        </div>
      </div>
      <div className={s.centralHeaderBlock}>
        <div className={s.leftHeaderBlock}>
          <div className="text-[#FFF] text-[70px]">Renovierung</div>
          <div className="text-[#FFF] ml-[90px] text-[70px]">Gestaltung</div>
          <div className="text-[#FFF] ml-[180px] text-[70px]">Einrichtung</div>
          <Link
            to="/form"
            className="w-[401px] h-[59px] bg-[#C5D20D] mt-[56px] flex justify-center items-center text-[28px] rounded-lg"
          >
            Beratungstermin vereinbaren
          </Link>
        </div>
        <div className="mt-[63px] w-[700px]">
          <Swiper
            style={{ width: "100%" }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slideToClickedSlide={true}
            loop={true}
            slidesPerView={3}
            // coverflowEffect={{
            //   rotate: 0,
            //   stretch: 25,
            //   depth: 90,
            //   slideShadows: false,
            //   modifier: 4
            // }}
            onSlideChange={handleSlideChange}
          >
            {teamMembers.map((item, index) => (
              <SwiperSlide
                key={index}
                // style={{
                //   background: index === 0 ? "red" : "yellow",
                //   ...setSlideHeight(index)
                // }}
              >
                <div style={{ width: "100%", height: "200px" }}>
                  <img src={item.img} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-[40px] tracking-[18px] text-[#FFF] mt-[40px] flex justify-center">
          Ihr Komfort aus unseren Händen
        </div>
        <div className="text-[50px] w-[809px] border-[#323232] border-b-[1px] border-[#CACACA] tracking-[8px] border-b-1 text-[#FFF] mt-[102px] flex justify-center">
          Alles aus einer Hand
        </div>
      </div>
    </div>
  );
};
export default HeaderBlock;
