"use client";

import Image from "next/image";
import { WhoIsThisForArray } from "./WhoIsThisForConstants";

import { motion } from "framer-motion";

export default function WhoIsThisFor() {
  return (
    <div className="sm:mt-40 mt-20 w-[90%] mx-auto flex flex-col sm:pb-40 pb-20 relative">
      <div className="absolute bg-heroBgColor/70 w-[90%] mx-auto left-[50%] -translate-x-[50%] h-[100px] bottom-0 rounded-full blur-3xl opacity-40">
        <div></div>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <motion.h1
          initial={{ translateY: 10, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            stiffness: 70,
            type: "spring",
          }}
          className="text-[40px] nav-button-bg-gradient-silver-text font-semibold text-center"
        >
          Who is this for?
        </motion.h1>
        <motion.p
          initial={{ translateY: 10, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.5,
            stiffness: 70,
            type: "spring",
          }}
          className="text-grey text-center ss:w-[40%] w-[80%] ss:text-[14px] text-[13px]"
        >
          {`Xtend is tailor-made for those who want to take their Business
          presence to the next level! We're here to help :`}
        </motion.p>
      </div>

      <div className="flex items-center flex-wrap justify-center gap-5 mt-10">
        {WhoIsThisForArray.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center gap-1 pt-5 md:w-[30%] ss:w-[300px] w-[90%] bg-lightBlue/20 rounded-xl relative"
          >
            <div className="absolute w-full h-[40%] border-x border-t border-lightBlue/60 rounded-t-xl top-0">
              {" "}
              <div></div>
            </div>

            <div className="nav-button-bg-gradient-silver-text text-[25px] font-semibold">
              {item.title}
            </div>
            <div className="text-grey text-[12px] text-center w-[70%]">
              {item.desc}
            </div>
            <Image
              src={item.img}
              alt={item.title}
              width={350}
              height={350}
              className="mt-5"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
