import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore from "swiper/core";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Install Swiper modules
// SwiperCore.use([Navigation]);

import TeamImage1 from "../../img/AllPhoto/Наша команда/20231024_küche&co_leopoldstadt-0029.jpeg";
import TeamImage2 from "../../img/AllPhoto/Наша команда/20231024_küche&co_leopoldstadt-0037.jpeg";
import TeamImage3 from "../../img/AllPhoto/Наша команда/20231024_küche&co_leopoldstadt-0047.jpeg";
import TeamImage4 from "../../img/AllPhoto/Наша команда/20231024_küche&co_leopoldstadt-0068.jpeg";
import TeamImage5 from "../../img/AllPhoto/Наша команда/20231024_küche&co_leopoldstadt-0090.jpeg";
import TeamImage6 from "../../img/AllPhoto/Наша команда/20231024_küche&co_leopoldstadt-0116.jpeg";
import TeamImage7 from "../../img/AllPhoto/Наша команда/4b7ce170-3a2a-4afc-8fdb-440295445cf0.jpg";
import TeamImage8 from "../../img/AllPhoto/Наша команда/53c18b0a-f215-4890-8620-bd5d869afb1f.jpg";
import TeamImage9 from "../../img/AllPhoto/Наша команда/91c534b6-b23e-40de-bcca-0021fa17b471.jpg";
import TeamImage10 from "../../img/AllPhoto/Наша команда/IMG_2627-AT Reisepass-102x152 mm_Privat 10x15.jpg";
import TeamImage11 from "../../img/AllPhoto/Наша команда/Viterma-Stefan-Krumböck-960x960.jpg";
import TeamImage12 from "../../img/AllPhoto/Наша команда/WhatsApp Image 2024-04-01 at 22.37.05.jpeg";

import TeamImage13 from "../../img/AllPhoto/Наша команда/a191dd48-50b1-4b59-850b-ba8a9cf2d5ec.jpg";

import TeamImage14 from "../../img/AllPhoto/Наша команда/Frame 59.jpg";
import TeamImage15 from "../../img/AllPhoto/Наша команда/viterma-Christine-Krumböck-960x960.jpg";
import TeamImage16 from "../../img/AllPhoto/Наша команда/Frame 58.png";

const UnserTeam: React.FC<{}> = () => {
  const teamMembers = [
    { image: TeamImage1, name: "Cengis Halici", role: "Senior Monteur" },
    { image: TeamImage2, name: "Peter Balazs", role: "Monteur" },
    { image: TeamImage3, name: "Bünyamin Halici", role: "Studioleiter" },
    { image: TeamImage4, name: "Richard", role: "Küchenfachberater" },
    { image: TeamImage5, name: "Horst Trethan", role: "Küchenfachberater" },
    { image: TeamImage6, name: "Muharrem Halici", role: "Inhaber" },
    { image: TeamImage7, name: "Emanuel Balazs", role: "Monteur" },
    { image: TeamImage8, name: " Erdal Kaymaz", role: "Baumeister" },
    { image: TeamImage9, name: "Team Member 9", role: "Role 9" },
    { image: TeamImage10, name: " Ramazan Avci", role: "Elektriker" },
    {
      image: TeamImage11,
      name: "Stefan Krumböck",
      role: "Inhaber Viterma Mödling"
    },
    {
      image: TeamImage12,
      name: "Christian Raffeseder",
      role: "Backoffice und Logistik"
    },
    {
      image: TeamImage13,
      name: "Yusuf Halici",
      role: "Backoffice und Logistik"
    },
    { image: TeamImage14, name: "Mehmet Atas", role: "Maler" },
    {
      image: TeamImage15,
      name: "Chris Krumböck",
      role: "Inhaberin Viterma Mödling"
    },
    {
      image: TeamImage16,
      name: "Josef Geischläger",
      role: "Maler"
    }
  ];

  const [swiper, setSwiper] = useState<number>();

  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <div className=" text-[24px] flex flex-col mt-[200px] justify-center items-center">
      <div className="text-[50px] w-[440px] text-center text-[#323232] border-[#323232] border-b-[1px]">
        Unser Team
      </div>
      <div className="mt-[63px] w-[1600px]">
        <Swiper
          style={{ width: "100%" }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          // onSlideChange={(e) => {
          //   setCurrentSlide(e.realIndex);
          // }}
          slideToClickedSlide={true}
          loop={true}
          slidesPerView={5}
          // coverflowEffect={{
          //   rotate: 0,
          //   stretch: 25,
          //   depth: 90,
          //   slideShadows: false,
          //   modifier: 4
          // }}
          navigation={true}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide
              key={index}
              style={{ width: "288px", height: "367px", borderRadius: "10px" }}
            >
              {/* Slide content */}
              <div
                style={{
                  width: "288px",
                  height: "267px",
                  borderRadius: "10px",
                  border: "0.5px solid black",
                  backgroundImage: `url(${member.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative"
                }}
              >
                {/* Optional: Display member name or other information */}
                {/* <div style={{ color: "#fff" }}>{member.name}</div> */}
                <div
                  style={{
                    color: "#323232",
                    position: "absolute",
                    bottom: "-75px",
                    right: "33px",
                    zIndex: "5555555",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}
                >
                  <div style={{ fontSize: "30px" }}>{member.name}</div>
                  <div style={{ fontSize: "20px" }}>{member.role}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default UnserTeam;
