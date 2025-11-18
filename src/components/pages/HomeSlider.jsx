import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "../../index.css";

const HomeSlider = () => {
  const [slide, setSlide] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/crops")
      .then((res) => res.json())
      .then((data) => setSlide(data.slice(0, 3)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-11/12 mx-auto my-20 shadow bg-[#F0FDF4]">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1500}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-2xl"
      >
        {slide.map((toy, index) => (
          <SwiperSlide key={index}>
            <img
              src={toy.photo}
              className="w-full max-h-100 md:h-96 object-cover transition-transform duration-500 hover:scale-105"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
