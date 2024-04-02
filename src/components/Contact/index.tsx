"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="sm:pt-40 pt-20">
      <div className="bg-black md:w-[70%] w-[90%] mx-auto px-10 ss:py-20 py-10 text-center flex flex-col gap-3">
        <motion.h1
          initial={{ translateY: 10, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="nav-button-bg-gradient-blue-text sm:text-[40px] ss:text-[30px] text-[25px] font-semibold md:w-[70%] ss:w-[90%] w-full mx-auto sm:leading-[50px] ss:leading-[40px] leading-[30px]"
        >
          Boost your business with Xtend in just a few clicks
        </motion.h1>
        <motion.p
          initial={{ translateY: 10, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.5,
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="nav-button-bg-gradient-silver-text ss:text-[15px] text-[14px]"
        >
          {"Book a free call and let's see if we can possibly work together…"}
        </motion.p>

        <Link
          href={"https://calendly.com/adityagypxtend/30min"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="nav-button-bg-gradient-blue w-fit mx-auto text-white md:text-[16px] sm:text-[15px] ss:text-[14px] xs:text-[13px] text-[11px] md:px-20 px-14 cursor-pointer border py-3 rounded-lg mt-5 z-20"
          >
            Book a 20-min call
          </motion.div>
        </Link>
      </div>
    </div>
  );
}
