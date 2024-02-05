import Image from "next/image";
import React from "react";
import TransitionX from "./TransitionX";
import TransitionFadeIn from "@/app/components/TransitionFadeIn";

const Banner = () => {
  return (
    <div className="p-4 max-w-6xl w-full mx-auto">
      <section className="grid md:grid-cols-2 justify-center items-center gap-x-3">
        <div>
          <TransitionX>
            <h1 className="text-4xl font-semibold">
              El nuevo
              <span className="block bg-blueLight degradeBlue">
                banco digital
              </span>
              para todos
            </h1>
          </TransitionX>

          <TransitionX>
            <p className="mt-9">
              Nuestro equipe de expertos utiliza una metodologia para
              identificar las tarjetas de credito que probablemente se ajusten a
              tus necesidades. Examinaremos tasas porcentuales anuales,tarifas
              anuales
            </p>
          </TransitionX>
          <TransitionX>
            <button className="bg-blueLight rounded-md px-3 py-1 my-7 font-medium">
              Empieza ahora
            </button>
          </TransitionX>
        </div>
        <div className="my-8">
          <TransitionFadeIn>
            <Image
              src="/assets/cards-block.png"
              alt="image banner"
              height="350"
              width="350"
              className="mx-auto"
            />
          </TransitionFadeIn>
        </div>
      </section>
    </div>
  );
};

export default Banner;
