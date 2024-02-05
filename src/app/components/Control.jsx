import Image from "next/image";
import React from "react";
import TransitionFadeIn from "@/app/components/transitionFadeIn";
import TransitionX from "@/app/components/transitionX";

const Control = () => {
  return (
    <div className="p-5 flex flex-col-reverse max-w-6xl w-full mx-auto gap-10 md:flex-row justify-evenly items-center md:py-40">
      <TransitionFadeIn>
        <Image
          src="/assets/control-business.png"
          alt="control Business"
          width={580}
          height={411}
          className="h-auto object-cover "
        />
      </TransitionFadeIn>
      <TransitionX>
        <div className="py-10">
          <h2 className="text-4xl font-semibold ">
            Controla facilmente tu facturacion
          </h2>
          <p className="md:max-w-md mt-10">
            Conla tajeta de credito adecuada, puede mejorar su vida financiera
            generando credito, obteniendo benedficios y ahorrando dinero. Pero
            con cientos de tarjetas de credito en el mercado
          </p>
        </div>
      </TransitionX>
    </div>
  );
};

export default Control;
