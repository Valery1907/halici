import React from "react";
// import "swiper/swiper-bundle.min.css";

// SwiperCore.use([Pagination]);

// const formSubroOrgSchema = z.object({
//   organizationName: z.string().min(1, "miss Name"),
//   email: z.string().email(),
//   password: z.string().min(8).max(100),
// });
const ResponseBlock: React.FC<{}> = () => {
  
  return (
    <div className=" text-[24px] flex flex-col mt-[200px] justify-center items-center">
      <div className="mt-[63px] w-[700px]">
        {/* <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          className="bg-white"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>{member.item}</SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    </div>
  );
};

export default ResponseBlock;
