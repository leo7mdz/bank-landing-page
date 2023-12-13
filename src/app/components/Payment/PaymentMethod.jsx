"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import dataPaymentMethods from "./PaymentData";
import Image from "next/image";
import ArticlePayment from "../ArticlePayment";

const PaymentMethod = () => {
  return (
    <div className="p-4 relative py-20 md:py-48">
      <div className="relative w-full overflow-hidden">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 8,
              spaceBetween: 15,
            },
          }}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          loop={true}
          speed={2000}
        >
          <div className=" absolute flex">
            {dataPaymentMethods.map(({ id, image }) => (
              <SwiperSlide
                className="flex items-center slider-horizontal"
                key={id}
              >
                <Image
                  src={`/assets/${image}`}
                  width={70}
                  height={70}
                  className="h-[60px] w-[120px] object-contain"
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      <ArticlePayment />
    </div>
  );
};

export default PaymentMethod;
