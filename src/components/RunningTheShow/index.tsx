"use client";

import { RunningTheShowArray } from "./RunningTheShowConstants";
import { motion } from "framer-motion";

export default function RunningTheShow() {
  return (
    <div className="bg-black pb-20">
      <div className="sm:pt-10 pt-5 bg-black z-20"></div>
      <div className="border border-grey/60 rounded-2xl w-[90%] mx-auto">
        <div className="border border-grey/60 rounded-2xl ss:m-10 xs:m-5 m-2 bg-heroBgColor/5">
          <div className="flex flex-col text-center ss:p-10 p-5 gap-2">
            <motion.h1
              initial={{ translateY: 10, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="nav-button-bg-gradient-silver-text md:text-[45px] sm:text-[40px] xs:text-[30px] text-[25px] font-bold"
            >
              {"…and it's not just us running the show"}
            </motion.h1>
            <motion.p
              initial={{ translateY: 10, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.5,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-white/60 ss:w-[70%] w-full mx-auto md:text-[15px] sm:text-[14px] xs:text-[13px] text-[12px]"
            >
              Most clients come to us after having an unpleasant experience with
              one or more subscription agencies. They all complain about the
              amount of deliverables, long waiting times, low design quality,
              and poor or no communication.
            </motion.p>
            <motion.h2
              initial={{ translateY: 10, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.5,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-white/80 md:text-[16px] sm:text-[15px] xs:text-[14px] text-[13px] mt-3"
            >
              {"We've fixed all of that by building a lean and mean team."}
            </motion.h2>
          </div>
          <div className="flex sm:flex-row flex-col items-stretch border-t border-grey/40">
            {RunningTheShowArray.map((show, idx) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: 0.2 * idx,
                  duration: 0.5,
                }}
                viewport={{ once: true, amount: 0.5 }}
                key={show.title}
                className={`px-5 py-10 ${
                  idx < RunningTheShowArray.length - 1 &&
                  "sm:border-r border-b border-grey/40"
                } flex flex-col gap-3 `}
              >
                <div className="nav-button-bg-gradient-silver-text text-[22px] font-semibold">
                  {show.title}
                </div>
                <div className="text-grey text-[13px]">{show.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
