import Image from "next/image";
import React from "react";

const Control = () => {
  return (
    <div className="p-4 flex flex-col-reverse max-w-6xl mx-auto gap-10 md:flex-row justify-evenly items-center md:py-40">
      <Image
        src="/assets/control-business.png"
        alt="control Business"
        width={580}
        height={411}
        className="h-auto object-cover "
      />
      <div className="py-10">
        <h2 className="text-4xl font-semibold ">
          Controla facilmente tu facturacion
        </h2>
        <p className="md:max-w-md mt-10">
          Conla tajeta de credito adecuada, puede mejorar su vida financiera
          generando credito, obteniendo benedficios y ahorrando dinero. Pero con
          cientos de tarjetas de credito en el mercado
        </p>
      </div>
    </div>
  );
};

export default Control;
