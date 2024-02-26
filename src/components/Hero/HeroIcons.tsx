import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroIcons() {
  return (
    <div className="absolute w-full h-full">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 0.1,
          duration: 0.5,
          stiffness: 70,
          type: "spring",
        }}
      >
        <Image
          src={"/images/hero/arrow.webp"}
          alt={"arrow"}
          width={100}
          height={150}
          className="absolute md:w-auto xs:w-[70px] w-[40px] h-auto md:left-20 ss:left-10 left-5 md:top-28 top-32"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.1,
          duration: 0.5,
          stiffness: 70,
          type: "spring",
        }}
      >
        <Image
          src={"/images/hero/lego.webp"}
          alt={"lego"}
          width={100}
          height={150}
          className="absolute md:w-auto xs:w-[70px] w-[40px] h-auto md:left-[25%] xs:left-[20%] left-[10%] xs:top-[33%] top-[30%]  z-50"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.1,
          duration: 0.5,
          stiffness: 70,
          type: "spring",
        }}
      >
        <Image
          src={"/images/hero/star.webp"}
          alt={"star"}
          width={80}
          height={80}
          className="absolute md:w-auto xs:w-[70px] w-[40px] h-auto md:right-[10%] right-[5%] md:top-[15%] top-[20%] z-50"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.1,
          duration: 0.5,
          stiffness: 70,
          type: "spring",
        }}
      >
        <Image
          src={"/images/hero/lightning.webp"}
          alt={"lightning"}
          width={100}
          height={150}
          className="absolute md:w-auto xs:w-[100px] w-[50px] h-auto md:right-[30%] xs:right-[25%] right-[5%] md:top-[35%] xs:top-[50%] top-[30%] z-50"
        />
      </motion.div>
    </div>
  );
}
