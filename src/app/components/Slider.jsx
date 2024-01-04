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
      /*  cssMode={true}
      navigation={true}
      mousewheel={true}
      keyboard={true} */
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="h-[250px] w-full md:max-w-5xl "
    >
      {dataTestimonials.map(({ id, name, testimonial, work, image }) => (
        <SwiperSlide key={id} className="my-5 md:px-10 ">
          <Image
            src="/assets/testimonial-icon.png"
            alt="Testimonial"
            width={50}
            height={50}
            className="w-auto h-auto red"
          />
          <p className="my-5">{testimonial}</p>
          <div className="flex justify-center gap-x-3">
            <Image
              src={image}
              alt={name}
              width="50"
              height={50}
              className="rounded-full "
            />
            <div>
              <h5 className="text-center">{name}</h5>
              <p className="text-primaryDark">{work}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
