import React from "react";

const ArticlePayment = () => {
  return (
    <div className="relative mt-20 md:mt-32">
      <div className="grid md:grid-cols-2  items-center max-w-4xl mx-auto border-transparent bg-radialBlack rounded-lg px-4 py-6 md:px-16 md:py-12 shadow-dark">
        <div>
          <h2>Ven a probar nuestros servicios</h2>
          <p>
            Todo lo que necesitas para aceptar pagos con tarjeta y haga crecer
            su negocio en cualquier parte del mundo
          </p>
        </div>
        <button className="bg-blueLight rounded-md px-4 py-3 mt-5 mx-auto">
          Empieza ahora
        </button>
      </div>
    </div>
  );
};

export default ArticlePayment;
