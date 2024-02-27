"use client";

import Link from "next/link";
import HeroIcons from "./HeroIcons";
import HeroImages from "./HeroImages";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="bg-heroBgColor/10 sm:pt-20 pt-14 md:pb-[500px] sm:pb-[400px] ss:pb-[300px] pb-[200px] relative">
      <div className="flex flex-col items-center x:gap-5 gap-3 bg-heroBg">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 1,
            stiffness: 70,
            type: "spring",
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="nav-button-bg-gradient-silver-text md:text-[70px] sm:text-[60px] ss:text-[50px] xs:text-[40px] text-[30px] font-instrumentSans px-1 text-center font-semibold sm:leading-[70px] ss:leading-[60px] xs:leading-[50px] leading-[40px]"
        >
          Design that{" "}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.4,
              duration: 1,
              stiffness: 70,
              type: "spring",
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="nav-button-bg-gradient-blue-text"
          >
            resonates
          </motion.span>
          <br />
          with your audience.
        </motion.div>

        <motion.div
          initial={{ translateY: 10, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            stiffness: 70,
            type: "spring",
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center text-grey sm:w-[45%] w-[60%] md:text-[16px] sm:text-[15px] ss:text-[14px] xs:text-[13px] text-[12px]"
        >
          Try an award-winning full-service web growth agency, specializing in
          strategy, design and development, content marketing and more, to find
          and engage customers and drive revenue across all your channels.
        </motion.div>
        <Link
          href={"https://calendly.com/adityagypxtend/30min"}
          rel="noopener noreferrer"
          target="_blank"
          className="cursor-pointer z-20"
        >
          <motion.div
            initial={{ translateY: 10, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              stiffness: 70,
              type: "spring",
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="nav-button-bg-gradient-blue text-white md:text-[16px] sm:text-[15px] ss:text-[14px] xs:text-[13px] text-[11px] px-14 cursor-pointer border py-3 rounded-xl mt-5"
          >
            {"Let's Talk"}
          </motion.div>
        </Link>

        <motion.div
          initial={{ translateY: 10, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            stiffness: 70,
            type: "spring",
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-grey text-[13px]"
        >
          {"Let's Skyrocket your Business!"}
        </motion.div>
        <HeroImages />
        <HeroIcons />
      </div>
    </div>
  );
}
