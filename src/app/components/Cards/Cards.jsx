"use client";
import React from "react";
import dataCards from "./DataCards";
import Image from "next/image";

const Cards = () => {
  return (
    <div className=" p-4 max-w-6xl w-full mx-auto md:grid md:grid-cols-2">
      <h1 className="text-3xl font-semibold pb-10 ">
        Elige la tarjeta que mas
        <span className="block bg-blueLight degradeBlue">
          se adapte a tus necesidades
        </span>
      </h1>
      <div>
        {dataCards.map(({ id, image }) => (
          <Image
            key={id}
            src={image}
            width={400}
            height={300}
            alt={`image-${id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
