"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/navigation";

// Import Swiper and required modules
import { Navigation, EffectFade } from "swiper/modules";

type Props = {
  sentData: any;
  slides: any;
};

const Index = ({ sentData, slides }: Props) => {
  return (
    <div className="relative my-[50px]">
      <div className={`flex items-center justify-center absolute top-[-100px] ${sentData.lang === 'ar' ? 'left-0 flex-row-reverse' : 'right-0 flex-row'}`}>
        <button
          className={`swiper-button-prev !relative !left-0 !right-0 !top-0 !w-[30px] !h-[30px] !m-0 rounded-full !mx-2 border border-[#C168F4] after:!text-[12px] after:text-[#C168F4]`}
        ></button>
        <button
          className={`swiper-button-next !relative !left-0 !right-0 !top-0 !w-[30px] !h-[30px] !m-0 rounded-full !mx-2 border border-[#C168F4] after:!text-[12px] after:text-[#C168F4]`}
        ></button>
      </div>
      <Swiper
        spaceBetween={sentData?.spaceBetween ? sentData?.spaceBetween : 5}
        slidesPerView={sentData?.slidesPerView ? sentData?.slidesPerView : 3}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        effect={"slide"}
        modules={[Navigation, EffectFade]}
        breakpoints={{
          // When window width is >= 640px
          320: {
            slidesPerView: sentData?.breakpoints.window320
              ? sentData?.breakpoints.window320
              : 1,
            spaceBetween: sentData?.spaceBetween ? sentData?.spaceBetween : 5,
          },
          // When window width is >= 768px
          768: {
            slidesPerView: sentData?.breakpoints.window768
              ? sentData?.breakpoints.window768
              : 2,
            spaceBetween: sentData?.spaceBetween ? sentData?.spaceBetween : 5,
          },
          // When window width is >= 1024px
          1024: {
            slidesPerView: sentData?.breakpoints.window1024
              ? sentData?.breakpoints.window1024
              : 3,
            spaceBetween: sentData?.spaceBetween ? sentData?.spaceBetween : 5,
          },
        }}
      >
        {slides.map((slide: any, i: any) => (
          <SwiperSlide key={i}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Index;
