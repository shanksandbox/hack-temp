/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { ApplyWithDevfolioBtn } from "../ApplyWithDevfolioBtn/ApplyWithDevfolioBtn";
import Logo from "../../public/images/logo.png";
import DevfolioWhite from "../../public/images/devfolio-white.svg";
import MainImage from "../../public/images/main-img.png";
import { motion } from "framer-motion";
import { JoinDiscordBtn } from "../JoinDiscordBtn/JoinDiscordBtn";

export const Main = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };
  return (
    <>
      <motion.main
        initial="hidden"
        whileInView="show"
        variants={container}
        viewport={{ once: true, amount: 0.4 }}
        className="text-white mt-22 pt-10 z-20 "
        id="main-page"
      >
        <div className="max-w-[20rem] md:max-w-[30rem] mx-auto">
          <Image
            height={Logo.height}
            width={Logo.width}
            src={Logo}
            loading="eager"
            alt="logo"
            priority
          />
        </div>
        <h1 className="text-center text-glow text-lg mb-4 md:text-2xl font-semibold">
          Define. Think. Build.
        </h1>
        <h1 className="text-center text-glow text-lg mb-4 md:text-3xl font-semibold">
          Nov 5th - 6th, 2022 &#x2022; KIIT University
        </h1>
        <div className="flex items-center justify-center gap-2 my-2">
          <div className="flex items-center w-50 gap-1">
            <img src="./images/gdsc-logo.svg" alt="" />
            <p className="font-semibold text-lg md:text-xl">GDSC KIIT</p>
          </div>
          <div className="font-medium">|</div>
          <Image
            width={110}
            height={30}
            src={DevfolioWhite}
            alt="devfolio-logo"
          />
        </div>
        <div className="flex flex-wrap justify-center my-6 gap-4">
          <ApplyWithDevfolioBtn />
          <JoinDiscordBtn />
        </div>
      </motion.main>
      <div className="-mt-20">
        <Image
          height={MainImage.height}
          width={MainImage.width}
          className="md lg:-mt-80"
          src={MainImage}
          alt="main-img"
          loading="eager"
          priority
        />
      </div>
    </>
  );
};
