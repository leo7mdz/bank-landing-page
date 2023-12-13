import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import dataTestimonials from "./Testimonials/Testimonials.data";
import Image from "next/image";

export const Slider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      cssMode={true}
      navigation={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className=" w-full md:max-w-5xl mySwiper"
    >
      {dataTestimonials.map(({ id, name, testimonial, work, image }) => (
        <SwiperSlide key={id} className="my-14 md:px-10 ">
          <Image
            src="/assets/testimonial-icon.png"
            alt="Comillas"
            width={30}
            height={30}
            className="w-auto h-auto"
          />
          <p className="my-5">{testimonial}</p>
          <div className="flex">
            <Image
              src={image}
              alt={name}
              width="50"
              height={50}
              className="mr-5 rounded-full object-contain"
            />
            <div>
              <h5 className="">{name}</h5>
              <p className="text-primaryDark">{work}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
