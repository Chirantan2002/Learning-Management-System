"use client";
import { motion } from "motion/react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const DURATION = 120;

const TapeIcons = () => {
  const marqueeContent = [
    "/marquee_images/01.svg",
    "/marquee_images/02.svg",
    "/marquee_images/03.svg",
    "/marquee_images/04.svg",
    "/marquee_images/05.svg",
    "/marquee_images/06.svg",
    "/marquee_images/07.svg",
    "/marquee_images/08.svg",
    "/marquee_images/09.svg",
    "/marquee_images/10.svg",
    "/marquee_images/11.svg",
    "/marquee_images/12.svg",
    "/marquee_images/13.svg",
    "/marquee_images/14.svg",
    "/marquee_images/15.svg",
    "/marquee_images/16.svg",
    "/marquee_images/17.svg",
    "/marquee_images/18.svg",
    "/marquee_images/19.svg",
    "/marquee_images/20.svg",
    "/marquee_images/21.svg",
    "/marquee_images/22.svg",
  ];

  return (
    <div className="w-full max-w-6xl mx-auto my-16 md:my-28 px-8">
      <div className="">
        <div
          className={`${montserrat.className} text-gray-300/70 mb-6 text-sm md:text-lg`}
        >
          Preffered by individuals from 20+ forward thinking companies
        </div>
        <div className="flex overflow-x-clip marquee_mask_gradient">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
            className="flex shrink-0"
          >
            {marqueeContent.map((image, i) => {
              return (
                <img className="h-40 w-56 pr-10 md:pr-16 opacity-70" key={i} src={image} />
              );
            })}
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
            className="flex shrink-0"
          >
            {marqueeContent.map((image, i) => {
              return (
                <img className="h-40 w-56 pr-6 md:pr-16" key={i} src={image} />
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TapeIcons;
