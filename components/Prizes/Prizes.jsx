import React from "react";
import { PrizeCard } from "./PrizeCard";
import { PrizeCardWithTextOnly } from "./PrizeCardWithTextOnly";
import { motion } from "framer-motion";

export const Prizes = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <div>
      <h1 className="text-center text-glow text-5xl md:text-6xl font-semibold text-white pb-14">
        win exciting prizes!
      </h1>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={container}
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col gap-6 my-12 items-center"
      >
        <PrizeCard
          bgColor={"bg-[#d4af37]"}
          heading={"Winner #1"}
          amount={"10,000"}
          img={"/images/trophy-gold.png"}
        />
        <PrizeCard
          bgColor={"bg-[#C0C0C0]"}
          heading={"Winner #2"}
          amount={"6,000"}
          img={"/images/trophy-silver.png"}
        />
        <PrizeCard
          bgColor={"bg-[#CD7F32]"}
          heading={"Winner #3"}
          amount={"4,000"}
          img={"/images/trophy-bronze.png"}
        />
      </motion.div>
    </div>
  );
};
