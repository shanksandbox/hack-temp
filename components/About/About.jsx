import React from "react";
import { AboutRow } from "./AboutRow";

export const About = () => {
  return (
    <div className="flex flex-col gap-8 max-w-7xl mx-auto">
      <AboutRow heading={"what is DevSprint'22?"} img={"./images/about1.svg"}>
        <p>
          Our annual hackathon, DevSprint is back for the 2022 edition. It is an
          exciting learning opportunity for students who are passionate about
          technology and are interested in solving real-world problems with
          cutting-edge solutions.
        </p>
        <p>
          With the third edition this year i.e. DevSprint &apos;22, we&apos;re
          hoping to see much more innovative, improved and effective solutions
          to the issues at hand and share them with the rest of the world by
          bringing back the community of student developers together yet again.
        </p>
      </AboutRow>
      <AboutRow
        heading={"what is GDSC KIIT?"}
        img={"./images/about2.svg"}
        isReverse
      >
        <p>
          Google Developer Student Clubs KIIT is a student community powered by
          Google to build a thriving community of student developers here in
          KIIT. We are focused on building a community of student developers
          interested in solving real-world problems.{" "}
        </p>
        <p>
          We host various workshops and hackathons. We also host flagship events
          from Google such as Android Study Jams, 30 days of Google Cloud
          Program, ExploreML etc. Our goal is to build an inclusive community of
          students from KIIT who want to learn about tech and grow together
          solving real world issues and improving the lives of everyone around
          us.
        </p>
      </AboutRow>
    </div>
  );
};
