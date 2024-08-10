import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const MySwiper = () => {

  return (
    <Swiper
      style={{ width: "100%" }}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
    
      slideToClickedSlide={true}
      loop={true}
      slidesPerView={1.8}
      coverflowEffect={{
        rotate: 0,
        stretch: 25,
        depth: 90,
        slideShadows: false,
        modifier: 4,
      }}
    >
      <SwiperSlide style={{ background: "red" }}>
        {/* Великий слайд */}
        <div style={{ width: "200px", height: "200px" }}>Slide 1</div>
      </SwiperSlide>
      <SwiperSlide style={{ background: "yellow" }}>Slide 2</SwiperSlide>
      <SwiperSlide style={{ background: "black" }}>Slide 3</SwiperSlide>
      {/* Додайте інші SwiperSlide, якщо потрібно */}
    </Swiper>
  );
};

export default MySwiper;
