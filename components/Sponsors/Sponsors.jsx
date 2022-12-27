import React from "react";
import { SponsorRow } from "./SponsorRow";

export const Sponsors = () => {
  return (
    <section id="sponsors">
      <h1 className="text-center text-glow text-4xl md:text-6xl font-semibold text-white pb-8">
        meet our sponsors
      </h1>
      <div className="flex flex-col items-center gap-32 my-12">
        <SponsorRow
          imgArr={[
            { name: "devfolio", url: "https://devfolio.co/" },
            { name: "polygon", url: "https://polygon.technology/" },
          ]}
        />
        <SponsorRow
          imgArr={[
            { name: "solana", url: "https://solana.com" },
            { name: "filecoin", url: "https://filecoin.io/" },
            { name: "replit", url: "https://replit.com/" },
          ]}
        />
        <SponsorRow
          imgArr={[
            { name: "apsara", url: "#apsara" },
            { name: "raadium-cafe", url: "#raadium-cafe" },
            { name: "salt", url: "#salt" },
          ]}
        />
        <SponsorRow
          imgArr={[
            { name: "biggies", url: "#biggies" },
            { name: "sweet-heart", url: "#sweet-heart" },
          ]}
        />
      </div>
    </section>
  );
};
