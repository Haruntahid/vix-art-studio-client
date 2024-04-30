import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Testimonial() {
  return (
    <>
      <p className="text-3xl lg:text-6xl text-center font-bold mt-10 lg:mt-20 mb-5 lg:mb-10">
        Testmonials
      </p>
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
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        style={{ zIndex: "-1" }}
      >
        <SwiperSlide>
          <section className="p-6">
            <div className="container mx-auto">
              <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 bg-rose-500 text-gray-100">
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocJr-PUA6ESvMGAHH-Q3ZZAgDgOzSxOn6gKTsACTXMXEJ_MFp-Dvhw=s96-c"
                  alt=""
                  className="w-20 h-20 rounded-full bg-gray-500"
                />
                <blockquote className="max-w-lg text-lg italic font-medium text-center">
                  Found the perfect gift at Vix Art Studio. The artwork is
                  stunning and arrived beautifully packaged. Thank you for a
                  delightful shopping experience!
                </blockquote>
                <div className="text-center text-gray-700">
                  <p>Harun Tahid</p>
                  <p>CEO of Company Vix Tech</p>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="p-6">
            <div className="container mx-auto">
              <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 bg-rose-500 text-gray-100">
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocLrLWXv68-baQS9BdrCgBPVtDq3BAkNCRIvQK0dXnGsVG3Oimk=s96-c"
                  alt=""
                  className="w-20 h-20 rounded-full bg-gray-500"
                />
                <blockquote className="max-w-lg text-lg italic font-medium text-center">
                  Thrilled with my purchase from Vix Art Studio. The artwork
                  exceeded my expectations. Highly recommend for art enthusiasts
                  and collectors!
                </blockquote>
                <div className="text-center text-gray-700">
                  <p>Hassnin Rahi</p>
                  <p>CTO of Company Tech Giant</p>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="p-6">
            <div className="container mx-auto">
              <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 bg-rose-500 text-gray-100">
                <img
                  src="https://source.unsplash.com/random/100x100?4"
                  alt=""
                  className="w-20 h-20 rounded-full bg-gray-500"
                />
                <blockquote className="max-w-lg text-lg italic font-medium text-center">
                  Vix Art Studio is a treasure trove of artistic inspiration. I
                  bought a sculpture that adds elegance to my home. Fantastic
                  quality and customer care!
                </blockquote>
                <div className="text-center text-gray-700">
                  <p>Leroy Jenkins</p>
                  <p>Founder Art Villa</p>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Testimonial;
