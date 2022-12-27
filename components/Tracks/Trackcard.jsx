import React from "react";

export const Trackcard = ({ headingBg, borderBg, text, para }) => {
  return (
    <div className="flex justify-center">
      <div
        className={`block p-6 rounded-lg ${borderBg} border-y-4 bg-primaryLight max-w-lg`}
      >
        <div
          className={`text-base text-primary border-black block rounded-full ${headingBg} mb-6 p-2 h-10 pl-4 pr-4 w-fit font-semibold`}
        >
          #{text}
        </div>
        <p className=" text-zinc-400 font-Mori text-md mb-3">
          {para}
        </p>
      </div>
    </div>
  );
};
