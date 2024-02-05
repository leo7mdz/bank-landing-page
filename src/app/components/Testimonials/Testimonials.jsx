"use client";
import React from "react";
import { Slider } from "../Slider";

const Testimonials = () => {
  return (
    <div className="p-8 mx-auto w-full realtive py-20 md:py-44 text-center">
      <h1 className="text-5xl mb-5 font-semibold">
        Que dicen los clientes de nosotros
      </h1>

      <Slider />
    </div>
  );
};

export default Testimonials;
