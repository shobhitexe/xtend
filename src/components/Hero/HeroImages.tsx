import Image from "next/image";

export default function HeroImages() {
  return (
    <div className="relative w-[90%] mt-5">
      <div className="absolute bg-heroBgColor w-full h-[500px] -top-[100px] rounded-full blur-3xl opacity-25">
        <div></div>
      </div>
      <Image
        src={"/images/hero/W1.png"}
        alt={"w1"}
        height={480}
        width={720}
        className="absolute left-0 top-20"
      />

      <Image
        src={"/images/hero/W2.png"}
        alt={"w2"}
        height={480}
        width={720}
        className="absolute left-[50%] -translate-x-[50%] z-10"
      />

      <Image
        src={"/images/hero/W3.png"}
        alt={"w3"}
        height={480}
        width={720}
        className="absolute right-0 top-20"
      />

      <div className="absolute w-full bg-black h-[100px] top-[400px]">
        <div></div>
      </div>
    </div>
  );
}
