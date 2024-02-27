"use client";

import { useState } from "react";
import { servicesArray, tickPoints } from "./servicesConstants";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative">
      <div className="absolute bg-heroBgColor/70 w-full h-[200px] top-0 rounded-full blur-3xl opacity-40 ">
        <div></div>
      </div>
      <div className="shadow-white rounded-2xl relative sm:mt-40 mt-20 w-[90%] mx-auto  bg-bgViolet pt-5">
        <div className="absolute bg-heroBgColor/30 w-full h-[200px] top-0 rounded-full blur-3xl opacity-40 ">
          <div></div>
        </div>

        <div className="absolute border-x border-t border-heroBgColor/30 shadow-inner shadow-heroBgColor/30 w-full h-[200px] top-0 rounded-t-2xl ">
          <div></div>
        </div>
        <div className="ss:py-10 py-5 max-sm:px-10 flex flex-col items-center gap-10">
          <div className="text-center flex flex-col gap-5">
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
              className="nav-button-bg-gradient-silver-text xs:text-center text-left md:text-[50px] sm:text-[40px] ss:text-[35px] xs:text-[30px] text-[25px] font-semibold md:leading-[60px] sm:leading-[50px] xs:leading-[40px] leading-[30px]"
            >
              Strategically crafted designs that <br /> narrate your unique
              brand
            </motion.h1>
            <motion.p
              initial={{ translateY: 10, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
                stiffness: 70,
                type: "spring",
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-grey md:text-[15px] text-[14px]"
            >
              Let our designs weave the magic of storytelling, bringing your
              brand to life in vibrant colors <br /> and captivating visuals.
              From pixel to perfection.
            </motion.p>
          </div>

          <div className="flex items-center md:gap-10 xs:gap-5 gap-3 flex-wrap justify-center">
            {servicesArray.map((service, idx) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: 0.2 * idx,
                  duration: 0.8,
                  stiffness: 70,
                  type: "spring",
                }}
                viewport={{ once: true, amount: 0.5 }}
                key={service}
                className={` border border-lightBlue xs:px-7 px-5 py-3 cursor-pointer rounded-2xl md:text-[15px] xs:text-[14px] text-[13px] ${
                  activeTab === idx
                    ? "nav-button-bg-gradient-blue text-white"
                    : "text-lightBlue"
                }`}
                onClick={() => setActiveTab(idx)}
              >
                {service}
              </motion.div>
            ))}
          </div>

          {activeTab >= 0 && (
            <div className="flex md:flex-row flex-col ss:w-[80%] w-[95%] items-center gap-10">
              <div className="flex flex-col gap-5">
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
                  className="nav-button-bg-gradient-silver-text md:text-[40px] text-[30px] ss:leading-[50px] leading-[35px] font-semibold"
                >
                  Brand Strategizing
                </motion.h1>
                <motion.p
                  initial={{ translateY: 10, opacity: 0 }}
                  whileInView={{ translateY: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.5,
                    stiffness: 70,
                    type: "spring",
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                  className="text-grey md:text-[15px] text-[14px]"
                >
                  Welcome to the world of seamless strategising! <br /> <br />{" "}
                  Compelling brand identities and cohesive design systems for
                  your digital products. Branding is included with all packages!
                </motion.p>
                <div className="flex flex-col gap-5 text-grey md:text-[15px] text-[14px]">
                  {tickPoints.map((point, idx) => (
                    <div
                      key={point}
                      className="flex items-center gap-5 border border-grey px-5 py-3 rounded-2xl cursor-pointer hover:bg-grey/10 duration-300"
                    >
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{
                          delay: 0.2 * idx,
                          duration: 0.5,
                          stiffness: 70,
                          type: "spring",
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        <Image
                          src={"/images/services/tick.webp"}
                          alt="tick"
                          width={20}
                          height={20}
                        />
                      </motion.div>
                      <motion.p
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{
                          delay: 0.1 * idx,
                          stiffness: 50,
                          type: "spring",
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="origin-left"
                      >
                        {point}
                      </motion.p>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                  stiffness: 70,
                  type: "spring",
                }}
                viewport={{ once: true, amount: 0.5 }}
                className="w-full"
              >
                <Image
                  src={"/images/services/brand.avif"}
                  alt={"brand"}
                  width={600}
                  height={400}
                />
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
