"use client";

import Image from "next/image";
import { TeamBehindArray } from "./TeamBehindConstants";

import { motion } from "framer-motion";

export default function TeamBehind() {
  return (
    <div className="bg-black">
      <div className="sm:pt-40 pt-20 bg-black z-20"></div>
      <div className="w-[90%] mx-auto border-grey/60 border rounded-2xl ss:p-10 p-5 flex flex-col relative">
        <div className="absolute bg-lightBlue/50 w-full mx-auto left-[50%] -translate-x-[50%] h-[30%] top-10 rounded-b-full blur-3xl opacity-40">
          <div></div>
        </div>

        <motion.h1
          initial={{ translateY: 10, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.5,
            stiffness: 70,
            type: "spring",
          }}
          className="nav-button-bg-gradient-silver-text ss:text-[40px] text-[30px] text-center font-semibold"
        >
          The team behind{" "}
          <span className="process-section-heading-gradient">Xtend</span>
        </motion.h1>
        <div className="flex sm:flex-row flex-col items-center gap-10 mt-10 justify-center">
          <Image
            src={"/images/TeamBehind/team.png"}
            alt={"team"}
            width={400}
            height={400}
            className="md:w-[400px] ss:w-[40%] w-full"
          />
          <div className="text-white border-WhoIsThisFor ss:p-10 p-5 bg-grey/10 rounded-2xl md:text-[14px] text-[13px] md:w-[50%] z-20">
            <motion.p
              initial={{ translateY: 10, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.5,
                stiffness: 70,
                type: "spring",
              }}
            >
              Hey folks, meet the dynamic trio powering Xtend - more like the
              three wizards! <br />
              <br /> Our journey began with a stint here and there, managing
              websites and online marketing for various companies. Then, it
              struck us - why not leverage our wealth of experience to assist
              other businesses? <br />
              <br /> And so, in 2022, Xtend was born. <br />
              <br />{" "}
              {`We immerse ourselves in your business, delving into the
            intricacies of your operations and understanding the needs of your
            customers. Our mission is to craft the most effective strategy and
            online presence, propelling your brand to new heights! Whether it's
            designing captivating websites and landing pages or orchestrating
            marketing campaigns on Instagram and Google, we deploy all our
            troops to ensure you emerge victorious in the digital battlefield.
            Join forces with Xtend, and let's conquer the online realm together!`}
            </motion.p>
          </div>
        </div>
        <div className="flex items-stretch justify-center flex-wrap gap-5 text-center sm:pt-20 pt-10">
          {TeamBehindArray.map((item) => (
            <div
              key={item.title}
              className="border border-grey rounded-2xl md:p-5 xs:p-3 p-2 relative"
            >
              <div className="absolute bg-lightBlue w-full mx-auto left-[50%] -translate-x-[50%] h-[30%] top-5 rounded-b-full blur-3xl opacity-80">
                <div></div>
              </div>
              <motion.div
                initial={{ translateY: 10, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                  stiffness: 70,
                  type: "spring",
                }}
                className="nav-button-bg-gradient-silver-text md:text-[50px] text-[40px] font-bold"
              >
                {item.number}
              </motion.div>
              <motion.div
                initial={{ translateY: 10, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  duration: 0.5,
                  stiffness: 70,
                  type: "spring",
                }}
                className="nav-button-bg-gradient-silver-text md:text-[20px] text-[18px]"
              >
                {item.title}
              </motion.div>
              <motion.div
                initial={{ translateY: 10, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  duration: 0.5,
                  stiffness: 70,
                  type: "spring",
                }}
                className="text-grey w-[250px] md:text-[12px] text-[11px] mx-auto"
              >
                {item.desc}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
