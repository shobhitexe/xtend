"use client";

import Image from "next/image";
import { WebTechnologiesArray } from "./WebTechnologiesConstants";
import { motion } from "framer-motion";

export default function WebTechnologies() {
  return (
    <div className="sm:mt-40 mt-20 w-[90%] mx-auto flex flex-col gap-14">
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
          viewport={{ once: true, amount: 0.5 }}
          className="text-center text-white font-semibold sm:text-[40px] text-[30px] sm:leading-[50px] leading-[40px]"
        >
          Battle-tested and future proof
          <br />
          <span className="nav-button-bg-gradient-blue-text">
            Web technologies
          </span>
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
          viewport={{ once: true, amount: 0.5 }}
          className="text-grey w-[80%] text-center ss:text-[14px] text-[13px]"
        >
          We take pride in selecting and mastering the very best web
          technologies to build websites and web applications that not only
          scale and perform seamlessly but also enjoy a strong support network
          from a thriving community, as well as some other key factors that help
          your business grow into the future.
        </motion.p>
      </div>
      <div className="flex gap-5 items-stretch flex-wrap ss:w-[80%] mx-auto justify-center">
        {WebTechnologiesArray.map((tech, idx) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.1 * idx,
              duration: 0.5,
              stiffness: 70,
              type: "spring",
            }}
            viewport={{ once: true, amount: 0.5 }}
            key={tech.alt}
            className={`bg-lightViolet ${
              tech.alt === "react"
                ? "py-5 ss:px-20 px-10"
                : "ss:px-14 px-5 py-5"
            } flex items-center rounded-md`}
          >
            <Image
              src={tech.src}
              alt={tech.src}
              width={tech.alt === "react" ? 50 : 100}
              height={tech.alt === "react" ? 40 : 80}
              className={`${
                tech.alt === "react" ? "max-ss:w-[20px]" : "max-ss:w-[50px]"
              }`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
