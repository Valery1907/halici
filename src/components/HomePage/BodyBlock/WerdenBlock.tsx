import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
import TeamImage1 from "../../img/AllPhoto/Слайдер галереї/0904d9822be59bb7a77f097b22646bab.jpg";

import TeamImage2 from "../../img/AllPhoto/Слайдер галереї/3fe55bdc-7e5c-4102-ba68-475bfcc39a21.jpg";
import TeamImage3 from "../../img/AllPhoto/Слайдер галереї/4e84da37781c2e68f5df43d63046e92a.jpg";
import TeamImage4 from "../../img/AllPhoto/Слайдер галереї/5928209d-59f7-401f-886b-2dc2742753c4.jpg";
import TeamImage5 from "../../img/AllPhoto/Слайдер галереї/5c000203-2bbb-45d7-a7eb-fb644a1a818f.jpg";
import TeamImage6 from "../../img/AllPhoto/Слайдер галереї/6cee1c0f95f55cc6a1fc5a3af1916eff.jpg";
import TeamImage7 from "../../img/AllPhoto/Слайдер галереї/d2c3445f-df9e-4658-9af2-77497816fc74.jpg";
// SwiperCore.use([Pagination]);
import TeamImage8 from "../../img/AllPhoto/Слайдер галереї/fed16c85-6cd0-4218-a745-f4e95bf4f74b.jpg";
import TeamImage9 from "../../img/AllPhoto/Слайдер галереї/photo_42_2023-09-28_14-55-35.jpg";

// const formSubroOrgSchema = z.object({
//   organizationName: z.string().min(1, "miss Name"),
//   email: z.string().email(),
//   password: z.string().min(8).max(100),
// });
const WerdenBlock: React.FC<{}> = () => {
  const teamMembers = [
    { img: TeamImage1 },
    { img: TeamImage2 },
    { img: TeamImage3 },
    { img: TeamImage4 },
    { img: TeamImage5 },
    { img: TeamImage6 },
    { img: TeamImage7 },
    { img: TeamImage8 },
    { img: TeamImage9 }
  ];

  return (
    <div className=" text-[24px] flex flex-col mt-[200px] justify-center items-center">
      <div className="text-[50px] w-[1146px] text-center tracking-[3px] text-[#323232] border-[#323232] border-b-[1px]">
        Werden Sie ein Teil der Ästhetik-Liebhaber
      </div>
      <div className="mt-[63px] w-[2000px]">
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
          slidesPerView={4}
          // coverflowEffect={{
          //   rotate: 0,
          //   stretch: 25,
          //   depth: 90,
          //   slideShadows: false,
          //   modifier: 4
          // }}
          navigation={true}
        >
          {teamMembers.map((item) => {
            return (
              <SwiperSlide style={{ width: "200px", borderRadius: "10px" }}>
                {/* Великий слайд */}
                <div
                  style={{
                    width: "342px",
                    height: "234px",
                    borderRadius: "10px"
                  }}
                >
                  {/* {item.item} */}
                  <img
                    style={{ backgroundSize: "cover" }}
                    src={item?.img}
                    alt=""
                  />
                </div>
              </SwiperSlide>
            );
          })}

          {/* <SwiperSlide style={{ background: "yellow" }}>Slide 2</SwiperSlide>
          <SwiperSlide style={{ background: "black" }}>Slide 3</SwiperSlide> */}
          {/* Додайте інші SwiperSlide, якщо потрібно */}
        </Swiper>
      </div>
      <div>
        <button className="w-[344px] h-[78px] mt-[130px] text-[40px] bg-[#C5D20D] rounded-lg">
          Mehr sehen
        </button>
      </div>
    </div>
  );
};

export default WerdenBlock;
