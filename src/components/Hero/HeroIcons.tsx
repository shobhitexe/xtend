import Image from "next/image";

export default function HeroIcons() {
  return (
    <div className="absolute w-full h-full">
      <Image
        src={"/images/hero/arrow.png"}
        alt={"arrow"}
        width={100}
        height={150}
        className="absolute w-auto h-auto left-20 top-28"
      />
      <Image
        src={"/images/hero/lego.png"}
        alt={"arrow"}
        width={100}
        height={150}
        className="absolute w-auto h-auto left-[25%] top-[35%] z-50"
      />

      <Image
        src={"/images/hero/star.png"}
        alt={"arrow"}
        width={80}
        height={80}
        className="absolute w-auto h-auto right-[10%] top-[15%] z-50"
      />

      <Image
        src={"/images/hero/lightning.png"}
        alt={"arrow"}
        width={100}
        height={150}
        className="absolute w-auto h-auto right-[30%] top-[45%] z-50"
      />
    </div>
  );
}
