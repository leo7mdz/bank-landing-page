import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="p-4 max-w-6xl w-full mx-auto">
      <section>
        <div>
          <h1 className="text-4xl font-semibold">
            El nuevo
            <span className="block bg-blueLight degradeBlue">
              banco digital
            </span>
            para todos
          </h1>
          <p className="mt-9">
            Nuestro equipe de expertos utiliza una metodologia para identificar
            las tarjetas de credito que probablemente se ajusten a tus
            necesidades. Examinaremos tasas porcentuales anuales,tarifas anuales
          </p>
          <button className="bg-blueLight rounded-md px-3 py-1 my-7 font-medium">
            Empieza ahora
          </button>
        </div>
        <div className="my-8">
          <Image
            src="/assets/cards-block.png"
            alt="image banner"
            height="350"
            width="350"
          />
        </div>
      </section>
    </div>
  );
};

export default Banner;
