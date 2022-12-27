/* eslint-disable @next/next/no-img-element */
import React from "react";

export const AboutRow = ({ img, children, heading, isReverse }) => {
  return (
    <div
      className={`flex flex-col-reverse justify-between items-center gap-10 ${
        isReverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="mx-10">
        <h1
          data-aos="fade-up"
          className="text-3xl md:text-4xl text-glow font-semibold text-white pb-8"
        >
          {heading}
        </h1>
        <div className="text-white/50 font-Mori text-lg max-w-2xl flex flex-col gap-4">
          {children}
        </div>
      </div>
      <img
        loading="lazy"
        className="w-2/3 md:max-w-md"
        src={img}
        alt="about-image"
      />
    </div>
  );
};
