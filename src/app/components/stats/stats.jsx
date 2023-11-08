import React from "react";
import dataStats from "./dataStats";

const Stats = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <section className="justify-around md:flex text-center">
        {dataStats.map((data) => (
          <p key={data.id} className="py-3 ">
            + {data.endNumber}
            <span className="bg-blueLight degradeBlue">{data.text}</span>
          </p>
        ))}
      </section>
    </div>
  );
};

export default Stats;
