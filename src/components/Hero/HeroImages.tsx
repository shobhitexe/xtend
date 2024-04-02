import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImages() {
  return (
    <div className="relative w-full mt-10">
      <div className="absolute bg-heroBgColor w-full sm:h-[500px] ss:h-[400px] xs:h-[300px] h-[200px] -top-[100px] rounded-full blur-3xl opacity-25">
        <div></div>
      </div>

      <div className="absolute left-0 bottom-0 w-full h-[30%] bg-bgViolet z-50">
        <div></div>
      </div>

      <div className="relative mx-auto ss:w-[90%] w-full sm:bottom-0 -bottom-[50px]">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.5,
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src={"/images/hero/W3.avif"}
            alt={"w3"}
            height={480}
            width={720}
            className="absolute right-0 s:top-20 top-16 w-[70%]"
          />{" "}
        </motion.div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.5,
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src={"/images/hero/W1.avif"}
            alt={"w1"}
            height={480}
            width={720}
            className="absolute left-0 sm:top-20 top-10 w-[70%]"
          />
        </motion.div>

        <motion.div
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.5,
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src={"/images/hero/W2.avif"}
            alt={"w2"}
            height={480}
            width={720}
            className="absolute left-[50%] -translate-x-[50%] z-10 w-[70%]"
          />
        </motion.div>
      </div>
    </div>
  );
}
