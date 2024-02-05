import React from "react";
import dataStats from "./dataStats";
import TransitionFadeIn from "@/app/components/TransitionFadeIn";

const Stats = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 md:pt-64 md:pb-40">
      <TransitionFadeIn>
        <section className="justify-around md:flex text-center">
          {dataStats.map((data) => (
            <p key={data.id} className="py-3 ">
              + {data.endNumber}
              <span className="bg-blueLight degradeBlue">{data.text}</span>
            </p>
          ))}
        </section>
      </TransitionFadeIn>
    </div>
  );
};

export default Stats;
