"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className="sm:py-20 py-10 sm:px-20 px-10 flex flex-col sm:gap-20 gap-10">
      <div>
        <motion.div
          initial={{ translateY: 10, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="nav-button-bg-gradient-silver-text"
        >
          Talk to us
        </motion.div>
        <motion.div
          initial={{ translateY: 10, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.5,
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {" "}
          <Link
            href={"mailto:agencyxtend@gmail.com"}
            className="nav-button-bg-gradient-silver-text sm:text-[40px] ss:text-[30px] text-[24px] font-semibold"
          >
            agencyxtend@gmail.com
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ translateY: 10, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{
          delay: 0.6,
          duration: 0.5,
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex items-center gap-2"
      >
        <Image
          src={"/images/navbar/logo.webp"}
          alt="navlogo"
          height={40}
          width={40}
        />
        <Image
          src={"/images/navbar/xtend.webp"}
          alt="navlogo2"
          height={100}
          width={100}
        />
      </motion.div>
    </div>
  );
}
