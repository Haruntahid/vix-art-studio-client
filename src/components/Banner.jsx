import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{ zIndex: "-100" }}
      >
        <SwiperSlide>
          <img
            className="w-full h-[300px] lg:h-auto object-cover"
            src="https://i.ibb.co/Jz86pXc/Craft-Planet-Web-Banner.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[300px] lg:h-auto object-cover"
            src="https://i.ibb.co/Xp18gPc/Artiste-Web-Banner.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[300px] lg:h-auto object-cover"
            src="https://i.ibb.co/kQDXP5W/Faber-Castell-Web-Banner.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Banner;
