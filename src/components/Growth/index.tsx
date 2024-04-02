"use client";

import Link from "next/link";
import DiagonalArrow from "../icons/DiagonalArrow";

import { motion } from "framer-motion";

export default function Growth() {
  return (
    <div className="sm:mt-40 mt-20 w-[90%] mx-auto">
      <div className="flex sm:flex-row flex-col sm:items-center md:gap-10 gap-5">
        <motion.h1
          initial={{ translateY: 10, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-white sm:text-[40px] text-[30px] font-semibold sm:w-[60%]"
        >
          All things considered for the{" "}
          <span className="nav-button-bg-gradient-blue-text">
            Ultimate business
          </span>{" "}
          <span className="nav-button-bg-gradient-silver-text">growth</span>
        </motion.h1>
        <div className="flex flex-col gap-5 md:w-auto sm:w-[40%]">
          <motion.p
            initial={{ translateY: 10, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-grey"
          >
            We pride ourselves on executing every aspect of a project with care
            and precision. From strategy to creative to implementation and
            ongoing testing, we ensure your website is fast, secure and
            optimized at every level for sustained growth.
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
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-white px-7 py-3 rounded-3xl flex items-center gap-1 w-fit border border-grey/50 cursor-pointer drop-shadow-sm"
            >
              <div>Book a Call</div> <DiagonalArrow className="w-7 h-7" />
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}
