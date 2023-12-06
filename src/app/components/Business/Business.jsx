import React from "react";
import dataFeaturesBusiness from "./business.data";
import Image from "next/image";

const Business = () => {
  return (
    <div className="py-20 md:py-40">
      <section className=" p-4 max-w-6xl w-full mx-auto">
        <article>
          <h1 className="text-3xl pb-10 font-semibold">
            <span className="block bg-blueLight degradeBlue">
              Tu haces el negocio
            </span>
            nosotros manejamos <br /> el dinero
          </h1>
          {
            <p className="max-w-md ">
              Con la tarjeta de credito adecuada, puedes mejorar tu vida
              financiera generando credito, obteniendo recompensas y ahorrando
              dinero. Pero con cientos de tarjetas de credito en el mercado
            </p>
          }
          <button className="px-4 py-3 mt-4 my-10 rounded-md bg-blueLight">
            Elije tu plan
          </button>
        </article>
        <article>
          <div>
            {dataFeaturesBusiness.map(({ id, icon, title, description }) => (
              <div key={id} className="flex flex-col gap-3  mb-6">
                {
                  <Image
                    src={`/assets/${icon}.png`}
                    alt={title}
                    width={40}
                    height={40}
                  />
                }
                <div>
                  <h4 className="text-primary">{title}</h4>
                  <p className="text-primaryDark">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
};

export default Business;
