import React from "react";
import { Trackcard } from "./Trackcard";

export const Tracks = () => {
  return (
    <div className="text-white">
      <h1 className="text-center text-glow text-5xl md:text-6xl font-semibold text-white pb-8">
        tracks
      </h1>
      <div className="flex flex-col my-12 flex-wrap gap-10">
        <div className="flex flex-wrap justify-center p-4 gap-10">
          <Trackcard
            headingBg={"bg-red-500"}
            borderBg={"border-red-500"}
            text="Bleeding Edge"
            para="The Bleeding Edge track is about tech emerging at the very forefront of industry, including but not limited to blockchain and Web3, artificial intelligence, machine learning, and VR/AR. We challenge hackers in this track to think deeply about how the new technology they implement will add meaningful value to their project and push the frontiers of possibility."
          />
          <Trackcard
            headingBg={"bg-amber-400"}
            borderBg={"border-amber-400"}
            text="Student Community"
            para="The Student community track is about tech that can help the immediate community around you, the students of this university. We challenge hackers to find solution to our day to day problems using tech."
          />
        </div>
        <div className="flex flex-wrap justify-center p-4 gap-10">
          <Trackcard
            headingBg={"bg-sky-500"}
            borderBg={"border-sky-500"}
            text="Sustainablity"
            para="The Sustainability track encourages hackers to use technology to pursue a more sustainable future on environmental, economic, and social levels. As sustainability encompasses all aspects of human life, projects in this track will address a diverse range of topics like food, finance, energy, transportation, water, awareness & accountability, and fashion."
          />
          <Trackcard
            headingBg={"bg-green-500"}
            borderBg={"border-green-500"}
            text="Entertainment"
            para="The Entertainment track promotes the use of technology as a means of expression, encouraging hackers to explore the ways that we create, consume, and share content. Projects in this track will make the most of hackers’ interdisciplinary skills, perhaps by incorporating music, graphics, and other creative mediums, as well as keeping the user at the forefront of design."
          />
        </div>
      </div>
    </div>
  );
};
