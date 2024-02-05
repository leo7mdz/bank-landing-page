"use client";

import "swiper/css";
import "swiper/css/effect-cards";
import dataCards from "./DataCards";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import TransitionFadeIn from "@/app/components/TransitionFadeIn";
import TransitionX from "@/app/components/TransitionX";

const Cards = () => {
  return (
    <div className="block p-4 max-w-5xl w-full mx-auto md:py-32 md:grid md:grid-cols-2 overflow-hidden">
      <TransitionX>
        <h1 className="text-3xl font-semibold pb-10 ">
          Elige la tarjeta que mas
          <span className="block bg-blueLight degradeBlue">
            se adapte a tus necesidades
          </span>
        </h1>
      </TransitionX>
      <TransitionFadeIn>
        <div className="px-5">
          {
            <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]}>
              {dataCards.map(({ id, image }) => (
                <SwiperSlide key={id}>
                  <Image
                    src={image}
                    width="400"
                    height="300"
                    alt={`image-${id}`}
                    className="mx-auto overflow-hidden"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          }
        </div>
      </TransitionFadeIn>
    </div>
  );
};

export default Cards;
